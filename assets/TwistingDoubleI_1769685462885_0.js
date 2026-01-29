let camera,
  cameras = [],
  controls = [],
  renderer,
  canvas,
  scene,
  group,
  twistedi;
let animating = false,
  onanimation = false,
  clock,
  ts = 0,
  /*turn*/ deg = 0,
  speed = 60; /*deg/sec*/
let ctx2d,
  stream,
  recorder,
  vidchunks = [];

function syncParams() {
  vzrotate.innerHTML = zrotate.value.split(".")[0];
}
function resetParams() {
  viewType.value = "orthographic";
  bgColor.value = "white";
  xAxes.checked = false;
  zrotate.value = 0;
  xautoturn.checked = false;
  onanimation = animating = false;
  animPhase = 0;
  animPause.value = "⏸️ Pause";
  animStart.value = "▶️ Start";
  animPause.style.display = "none";
  xautorecord.checked = false;
  zrotate.disabled = xautoturn.disabled = false;
  applyParams();
  resetCameras();
  stopRecording();
}
function resetCameras() {
  controls["orthographic"].reset();
  controls["perspective"].reset();
  cameras["orthographic"].position.set(0, 0.5, 0);
  cameras["orthographic"].lookAt(0, 0, 0);
  cameras["perspective"].position.set(0, 0.5, 0);
  cameras["perspective"].lookAt(0, 0, 0);
}
function applyParams() {
  syncParams();
  if (cameras && Object.keys(cameras).length > 0) {
    camera = cameras[viewType.value];
  }
  if (renderer) {
    renderer.setClearColor(bgColor.value, 1);
  }
  if (axes && scene) {
    if (xAxes.checked) {
      scene.add(axes);
    } else {
      scene.remove(axes);
    }
  }
  if (twistedi) {
    group.rotation.z = (parseInt(zrotate.value) / 180) * Math.PI;
  }
  if (clock) {
    if (xautoturn.checked) {
      clock.start();
    } else {
      clock.stop();
    }
  }
}

function makeControl(camera) {
  let control = new THREE.OrbitControls(camera, canvas);
  control.enableDamping = true;
  control.dampingFactor = 0.25;
  control.screenSpacePanning = false;
  control.enablePan = false;
  control.minDistance = 0.0001;
  control.maxDistance = 500;
  control.maxPolarAngle = Math.PI;
  return control;
}

function setupCanvas() {
  THREE.Object3D.DefaultUp.set(0, 0, 1); // Z is up instead of Y: <up_axis> Z_UP </up_axis>
  //Note that unit = 0.01, not 1: <unit name="centimeter" meter="0.01" />

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    preserveDrawingBuffer: false,
  });
  canvas = renderer.domElement;
  scene = new THREE.Scene();
  group = new THREE.Group();
  axes = new THREE.AxesHelper(5);
  xAxes.onchange = function (e) {
    applyParams();
  };

  // Set up canvas renderer & cameras & controls
  let canvasWidth = 200; //Math.min(window.innerWidth, window.innerHeight); // window.innerWidth
  let canvasHeight = 300; //window.innerHeight
  let aspectRatio = canvasWidth / canvasHeight;
  let hh = 0.13,
    hw = hh * aspectRatio;
  cameras["orthographic"] = new THREE.OrthographicCamera(
    -hw,
    hw,
    hh,
    -hh,
    0.1,
    10,
  );
  controls["orthographic"] = makeControl(cameras["orthographic"]);
  cameras["perspective"] = new THREE.PerspectiveCamera(
    30,
    aspectRatio,
    0.1,
    10,
  );
  controls["perspective"] = makeControl(cameras["perspective"]);
  resetCameras();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvasWidth, canvasHeight);
  canvasContainer.appendChild(canvas);

  // Set up recorder with monitoring video & 2d canvas
  // mirror 3D canvas -> 2D recCanvas, work around 3D recording issue on Linux
  recCanvas.width = canvas.width;
  recCanvas.height = canvas.height;
  ctx2d = recCanvas.getContext("2d");
  // recording stream
  stream = recCanvas.captureStream(30);
  recVideo.srcObject = stream; // video mirroring canvas to monitor the recording stream
  const options = { mimeType: "video/webm;codecs=vp9" };
  if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    // fallback to vp8 if vp9 not supported
    options.mimeType = "video/webm;codecs=vp8";
  }
  recorder = new MediaRecorder(stream, options);
  console.log("Using recorder mimeType:", recorder.mimeType);
  recorder.ondataavailable = function (e) {
    vidchunks.push(e.data);
  };
  recorder.onstop = function (e) {
    let blob = new Blob(vidchunks, { type: "video/webm" }); // 'video/webm' // 'video/mp4'
    vidchunks = [];
    let videoURL = URL.createObjectURL(blob);
    recordedFile.href = videoURL;
    recordedFile.download = "TwistingDoubleI.webm"; // .webm // .mp4
    recordedFile.click();
    console.log("Recorded video: " + videoURL);
    URL.revokeObjectURL(videoURL); // don't litter the memory!
  };

  bgColor.onchange = function (e) {
    bgColor.style.color = ["white", "lightgray"].includes(bgColor.value)
      ? "black"
      : bgColor.value;
    applyParams();
  };
  viewType.onchange = function (e) {
    applyParams();
  };

  // Load dae files into the scene
  let loader = new THREE.ColladaLoader();
  loader.load("TwistingDoubleI.dae", function (collada) {
    //console.log('TwistingDoubleI.dae:',collada);
    twistedi = collada.scene;
    twistedi.rotateX(Math.PI / 2); // cancel the default -PI/2 x-rotation by ColladaLoader
    twistedi.position.z = -0.1; // shift to the center
    group.add(twistedi);
    applyParams();
  });
  scene.add(group);

  // Lighting the scene
  let ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);
  let directionalLight = new THREE.DirectionalLight(0xcccccc, 0.3);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);

  applyParams();
}

///// Animation & Recording

clock = new THREE.Clock(false);
xautoturn.onchange = function (e) {
  applyParams();
};
zrotate.oninput = function (e) {
  applyParams();
};

function startAnimation(start = true) {
  onanimation = animating = xautoturn.checked = start;
  zrotate.disabled = xautoturn.disabled = start;
  if (xautorecord.checked && !xbyframe.checked) {
    if (start) {
      startRecording();
    } else {
      stopRecording();
    }
  }
}
animStart.onclick = function (e) {
  if (onanimation) {
    //stop now
    animStart.value = "▶️ Start";
    animPause.value = "⏸️ Pause";
    animPause.style.display = "none";
    startAnimation(false);
  } else {
    //start now
    animStart.value = "⏹️ Stop";
    animPause.value = "⏸️ Pause";
    animPause.style.display = "inline";
    startAnimation(true);
  }
  deg = zrotate.value = animPhase = 0;
  applyParams();
};
animPause.onclick = function (e) {
  if (animating) {
    //pause now
    animating = xautoturn.checked = false;
    clock.stop();
    animPause.value = "▶️ Resume";
  } else {
    //resume now
    animating = xautoturn.checked = true;
    clock.start();
    animPause.value = "⏸️ Pause";
  }
};

function startRecording() {
  if (recorder.state == "recording") {
    return;
  }
  recorder.start();
  recVideo.style.display = "block";
  ssrecording.value = "🟥 Stop recording";
  console.log("startRecording(): recorder.state = ", recorder.state);
}
function stopRecording() {
  if (recorder.state == "inactive") {
    return;
  }
  recorder.stop();
  recVideo.style.display = "none";
  ssrecording.value = "🔴 Record";
  console.log("stopRecording(): recorder.state = ", recorder.state);
}
ssrecording.onclick = function (e) {
  if (recorder.state == "recording") {
    stopRecording();
  } else {
    startRecording();
  }
};
xautorecord.onchange = function (e) {
  let disp = xautorecord.checked ? "inline" : "none";
  xbyframe.style.display = lxbyframe.style.display = disp;
};
xbyframe.onchange = xbyframe_onchange;
function xbyframe_onchange() {
  animStart.disabled = ssrecording.disabled = xbyframe.checked;
  startAnimation(xbyframe.checked);
  deg = zrotate.value = animPhase = 0;
  applyParams();
}

let animPhase = 0,
  dtcount = 0;
function stepAnimation(dt, dd) {
  if (!animating) {
    return;
  }
  ts += dt;
  if (animPhase == 0) {
    //z: 0 -> 90
    deg += dd;
    if (deg >= 90) {
      animPhase++;
      deg = 90;
    }
  } else if (animPhase == 1) {
    //z: 90 pause
    dtcount++;
    if (dtcount >= 30) {
      animPhase++;
      dtcount = 0;
    }
  } else if (animPhase == 2) {
    //z: 90 -> 270
    deg += dd;
    if (deg >= 270) {
      animPhase++;
      deg = -90;
    }
  } else if (animPhase == 3) {
    //z: -90 pause
    dtcount++;
    if (dtcount >= 30) {
      animPhase++;
      dtcount = 0;
    }
  } else if (animPhase == 4) {
    //z: -90 -> 0 & reset
    deg += dd;
    if (deg >= 0) {
      animPhase = dtcount = 0;
      ts = deg = zrotate.value = 0;
      applyParams();
      if (xautorecord.checked) {
        if (xbyframe.checked) {
          xbyframe.checked = false;
          xbyframe_onchange();
        } else {
          stopRecording();
        }
      }
    }
  } else {
    console.log("Invalid animPhase = " + animPhase + ": deg = " + deg);
  }
  group.rotation.z = (deg / 180) * Math.PI;
  zrotate.value = rad2deg180(group.rotation.z);
  syncParams();
  //console.log(animPhase+': deg = '+Math.round(deg)+', ts = '+Math.round(ts));
}
function rad2deg180(rad) {
  let deg = ((rad / Math.PI) * 180) % 360;
  if (deg > 180) {
    deg -= 360;
  }
  return deg;
}

function render() {
  if (!renderer || !twistedi) {
    return;
  }
  let dt = clock.getDelta(),
    dd = dt * speed;
  if (xautorecord.checked && xbyframe.checked) {
    dd = 1.0;
    dt = dd / speed;
  }
  stepAnimation(dt, dd); // step anim by advancing deg & dt
  syncParams();
  renderer.render(scene, camera);
  png.src = canvas.toDataURL("image/png"); // captured as an png
  if (xautorecord.checked && xbyframe.checked) {
    recordedFile.href = png.src;
    recordedFile.download =
      "TwistingDoubleI-" + ("" + deg).padStart(4, "0") + "°.png";
    recordedFile.click();
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function animate() {
  if (xautorecord.checked && xbyframe.checked) {
    await sleep(100);
  }
  requestAnimationFrame(animate);
  render();
  ctx2d.drawImage(canvas, 0, 0); // mirror 3D canvas -> 2D recCanvas
}

////////////// kick-start!

setupCanvas();
animate();
