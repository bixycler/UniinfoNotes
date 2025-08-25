let camera, cameras = [], controls = [], renderer, canvas, scene, group, unitorus, arrows, mobius;
let cover, outskin, inskin, parrow, narrow, uparrow, downarrow;
let animating = false, onanimation = false, clock, ts = 0, /*turn*/deg = 0, speed = 30 /*deg/sec*/;
let stream, recorder, vidchunks = [];

function syncParams() {
  vturn.innerHTML = turn.value.split('.')[0].padStart(3, '0');
  vspin.innerHTML = spin.value.split('.')[0].padStart(3, '0');
  vxrotate.innerHTML = xrotate.value.split('.')[0];
  vzrotate.innerHTML = zrotate.value.split('.')[0];
}
function resetParams() {
  viewType.value = 'orthographic';
  xCover.checked = xTorus.checked = true;
  xMobius.checked = false;
  xNParrows.checked = xUDarrows.checked = false;
  bgColor.value = 'white';
  xAxes.checked = false;
  spin.value = turn.value = xrotate.value = zrotate.value = 0;
  xautoturn.checked = false;
  onanimation = animating = false; animPhase = 0;
  animPause.value = '⏸️ Pause'; animStart.value = '▶️ Start'; animPause.style.display = 'none';
  xautorecord.checked = false;
  turn.disabled = xrotate.disabled = zrotate.disabled = xautoturn.disabled = xNParrows.disabled = xUDarrows.disabled = false;
  applyParams();
  controls['orthographic'].reset(); controls['perspective'].reset();
  cameras['orthographic'].position.set(0, 0.2, 0);
  cameras['orthographic'].lookAt(0, 0, 0);
  cameras['perspective'].position.set(0, 0.2, 0);
  cameras['perspective'].lookAt(0, 0, 0);
  stopRecording();
}
function applyParams() {
  syncParams();
  if (cameras && Object.keys(cameras).length > 0) { camera = cameras[viewType.value]; }
  if (cover) { cover.visible = xCover.checked; }
  if (outskin && inskin) { outskin.visible = inskin.visible = xTorus.checked; }
  if (mobius) { mobius.visible = xMobius.checked; }
  if (parrow && narrow && uparrow && downarrow) {
    narrow.visible = parrow.visible = xNParrows.checked;
    uparrow.visible = downarrow.visible = xUDarrows.checked;
  }
  if (renderer) { renderer.setClearColor(bgColor.value, 1); }
  if (axes && scene) { if (xAxes.checked) { scene.add(axes); } else { scene.remove(axes); } }
  if (unitorus && arrows && mobius) {
    deg = deg - deg%360 + parseInt(turn.value); spin.value = deg*2/3%360;
    unitorus.rotation.y = mobius.rotation.y = -deg/180*Math.PI*2/3;
    group.rotation.x = parseInt(xrotate.value)/180*Math.PI;
    group.rotation.z = parseInt(zrotate.value)/180*Math.PI;
  }
  if (clock) {
    if (xautoturn.checked) { clock.start(); } else { clock.stop(); }
  }
}

function makeControl(camera) {
  let control = new THREE.OrbitControls(camera, canvas);
  control.enableDamping = true;
  control.dampingFactor = 0.25;
  control.screenSpacePanning = false;
  control.enablePan = false;
  control.minDistance = 0.0001;
  control.maxDistance = 500
  control.maxPolarAngle = Math.PI;
  return control;
}

function setupCanvas() {
  renderer = new THREE.WebGLRenderer({antialias:true});
  canvas = renderer.domElement; 
  scene = new THREE.Scene();
  group = new THREE.Group();
  axes = new THREE.AxesHelper(5);
  xAxes.onchange = function (e) { applyParams(); }
  THREE.Object3D.DefaultUp.set(0, 0, 1); // Z is up instead of Y: <up_axis> Z_UP </up_axis>
  //Note that unit = 0.01, not 1: <unit name="centimeter" meter="0.01" />

  // Set up canvas renderer & cameras & controls & recorder
  let canvasWidth = 600;//Math.min(window.innerWidth, window.innerHeight); // window.innerWidth
  let canvasHeight = canvasWidth; //window.innerHeight
  let aspectRatio = canvasWidth / canvasHeight;
  cameras['perspective'] = new THREE.PerspectiveCamera(45, aspectRatio, 0.01, 10);
  cameras['perspective'].position.set(0, 0.2, 0);
  cameras['perspective'].lookAt(0, 0, 0);
  controls['perspective'] = makeControl(cameras['perspective']);
  cameras['orthographic'] = new THREE.OrthographicCamera(-.05, .05, .05, -.05, 0.01, 10);
  cameras['orthographic'].position.set(0, 0.2, 0);
  cameras['orthographic'].lookAt(0, 0, 0);
  controls['orthographic'] = makeControl(cameras['orthographic']);
  renderer.setClearColor(bgColor.value, 1);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvasWidth, canvasHeight);
  canvasContainer.appendChild(canvas);
  stream = canvas.captureStream(30);
  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = function(e){ vidchunks.push(e.data); };
  recorder.onstop = function(e){
    let blob = new Blob(vidchunks, {'type': 'video/mp4'}); // 'video/webm' 
    vidchunks = [];
    let videoURL = URL.createObjectURL(blob);
    recordedFile.href = videoURL;
    recordedFile.download = 'Unitorus.mp4';
    recordedFile.click();
    URL.revokeObjectURL(videoURL);
    console.log('Recorded video: '+videoURL);
  };

  bgColor.onchange = function (e) {
    bgColor.style.color = ['white', 'lightgray'].includes(bgColor.value) ? 'black' : bgColor.value;
    applyParams();
  }
  viewType.onchange = function (e) { applyParams(); }

  // Load dae files into the scene
  let loader = new THREE.ColladaLoader();
  loader.load('UniTorus-circles.dae', function (collada) {
    unitorus = collada.scene;
    unitorus.rotateZ(Math.PI);
    group.add(unitorus);
    cover = unitorus.getObjectByName('SplitCover');
    outskin = unitorus.getObjectByName('Torus');
    inskin = unitorus.getObjectByName('SplitSection');
    applyParams();
    xTorus.onchange = function (e) {
      xCover.checked = xTorus.checked;
      applyParams();
    }
    xCover.onchange = function (e) {
      if (!xTorus.checked) { xCover.checked = false; return }
      applyParams();
    }
  });
  loader.load('UniTorus-arrows.dae', function (collada) {
    arrows = collada.scene;
    arrows.rotateZ(Math.PI);
    group.add(arrows);
    parrow = arrows.getObjectByName('ArrowP');
    narrow = arrows.getObjectByName('ArrowN');
    uparrow = arrows.getObjectByName('ArrowUp');
    downarrow = arrows.getObjectByName('ArrowDown');
    applyParams();
    xNParrows.onchange = function (e) { applyParams(); }
    xUDarrows.onchange = function (e) { applyParams(); }
  });
  loader.load('UniTorus-equals.dae', function (collada) {
    mobius = collada.scene;
    mobius.rotateZ(Math.PI);
    group.add(mobius);
    applyParams();
    xMobius.onchange = function (e) { applyParams(); }
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
xautoturn.onchange = function (e) { applyParams(); }
turn.oninput = function (e) { applyParams(); }
xrotate.oninput = function (e) { applyParams(); }
zrotate.oninput = function (e) { applyParams(); }

function startAnimation(start = true){
  onanimation = animating = xautoturn.checked = xUDarrows.checked = start;
  turn.disabled = xrotate.disabled = zrotate.disabled = xautoturn.disabled = xNParrows.disabled = xUDarrows.disabled = start;
  if(xautorecord.checked && !xbyframe.checked){ if(start){ startRecording();}else{ stopRecording();} }
}
animStart.onclick = function (e) {
  if (onanimation) { //stop now
    animStart.value = '▶️ Start';
    animPause.value = '⏸️ Pause';
    animPause.style.display = 'none';
    startAnimation(false);
  } else { //start now
    animStart.value = '⏹️ Stop';
    animPause.value = '⏸️ Pause';
    animPause.style.display = 'inline';
    startAnimation(true);
  }
  deg = spin.value = turn.value = xrotate.value = zrotate.value = animPhase = 0;
  xNParrows.checked = false;
  applyParams();
}
animPause.onclick = function (e) {
  if (animating) { //pause now
    animating = xautoturn.checked = false; clock.stop();
    animPause.value = '▶️ Resume';
  } else { //resume now
    animating = xautoturn.checked = true; clock.start();
    animPause.value = '⏸️ Pause';
  }
}

function startRecording(){
  if(recorder.state == 'recording'){ return }
  recorder.start();
  ssrecording.value = '🟥 Stop recording';
}    
function stopRecording(){
  if(recorder.state == 'inactive'){ return }
  recorder.stop();
  ssrecording.value = '🔴 Record';
}    
ssrecording.onclick = function (e) {
  if(recorder.state == 'recording'){ stopRecording(); }else{ startRecording(); }
}
xautorecord.onchange = function(e){
  let disp = xautorecord.checked? 'inline': 'none';
  xbyframe.style.display = lxbyframe.style.display = disp;
}
xbyframe.onchange = xbyframe_onchange;
function xbyframe_onchange(){
  animStart.disabled = ssrecording.disabled = xbyframe.checked;
  startAnimation(xbyframe.checked);
  deg = spin.value = turn.value = xrotate.value = zrotate.value = animPhase = 0;
  xNParrows.checked = false;
  applyParams();
}

let animPhase = 0; // 0 = 0-1_90-1_90, 1 = 0-90-91_180, 2 = 0-91_270-181_360, 3 = 0-270-1_90, 4 = 0-271_360-91_180, 5 = 0-0-181_270, 
// 6 = 1_50-0-271_320, 7 = 50-0-321_360_270, 51_0-0-271_360 (8 = 51_56-0-271_276, 9 = 55_1-0-277_331, 10 = 0-0-332_360)
function stepAnimation(dr) {
  if (!animating) { return }
  if (animPhase == 0) { //z: 0 -> 90 (r: 0 -> 90)
    group.rotation.z += dr;
    if (deg >= 90) { animPhase++; deg = 90; group.rotation.z = 90/180*Math.PI; }
  } else if (animPhase == 1) { //z: 90 (r: 90 -> 180)
    if (deg >= 180) { animPhase++; }
  } else if (animPhase == 2) { //z: 90 -> 270 (r: 180 -> 360)
    group.rotation.z += dr;
    if (deg >= 360) { animPhase++; deg = 360; group.rotation.z = 270/180*Math.PI; }
  } else if (animPhase == 3) { //z: 270 (r: 360 -> 450)
    if (deg >= 450) { animPhase++; narrow.visible = parrow.visible = xNParrows.checked = true; }
  } else if (animPhase == 4) { //z: 270 -> 360 (r: 450 -> 540)
    group.rotation.z += dr;
    if (deg >= 540) { animPhase++; deg = 540; group.rotation.z = 360/180*Math.PI; }
  } else if (animPhase == 5) { //z: 0 (r: 540 -> 630)
    if (deg >= 630) { animPhase++; }
  } else if (animPhase == 6) { //x: 0 -> 50 (r: 630 -> 680)
    group.rotation.x += dr;
    if (deg >= 680) { animPhase++; deg = 680; group.rotation.x = 50/180*Math.PI; }
  } else if (animPhase == 7) { //x: 50 (r: 680 -> 990)
    if (deg >= 990) { animPhase++; }
  } else if (animPhase == 8) { //x: 50 -> 56 (r: 990 -> 996)
    group.rotation.x += dr;
    if (deg >= 996) {
      animPhase++; deg = 996; group.rotation.x = 56/180*Math.PI;
      narrow.visible = parrow.visible = xNParrows.checked = false;
    }
  } else if (animPhase == 9) { //x: 56 -> 0 (r: 996 -> 1052)
    group.rotation.x -= dr;
    if (deg >= 1052) { animPhase++; deg = 1052; group.rotation.x = 0/180*Math.PI; }
  } else if (animPhase == 10) { //x: 0 (r: 1052 -> 1080)
    if (deg >= 1080) { animPhase = 0; deg = spin.value = turn.value = xrotate.value = zrotate.value = 0; applyParams(); 
      if(xautorecord.checked){ 
        if(xbyframe.checked){ xbyframe.checked = false; xbyframe_onchange(); }
        else{ stopRecording(); }
      }
    }
  } else { console.log('Invalid animPhase = ' + animPhase + ': deg = ' + deg); }
  xrotate.value = rad2deg180(group.rotation.x);
  zrotate.value = rad2deg180(group.rotation.z);
  syncParams();
  //console.log(animPhase+': deg = '+Math.round(deg)+', ts = '+Math.round(ts)); 
}
function rad2deg180(rad) {
  let deg = rad / Math.PI * 180 % 360;
  if (deg > 180) { deg -= 360; }
  return deg;
}

function render() {
  if (!renderer || !unitorus || !arrows || !mobius) { return }
  let dt = clock.getDelta(), dd = dt * speed;
  if(xautorecord.checked && xbyframe.checked){ dd = 1.0; dt = dd/speed; }
  ts += dt; deg += dd;
  stepAnimation(dd/180*Math.PI); // this can modify deg
  unitorus.rotation.y = mobius.rotation.y = -deg/180*Math.PI*2/3;
  turn.value = deg%360; spin.value = deg*2/3%360; syncParams();
  //console.log(Math.round(ts)+'s: '+turn.value+': '+spin.value+': '+dd)
  renderer.render(scene, camera);
  png.src = canvas.toDataURL('image/png'); // captured as an png
  if(xautorecord.checked && xbyframe.checked){
    recordedFile.href = png.src;
    recordedFile.download = 'Unitorus-'+(''+deg).padStart(4,'0')+'°.png';
    recordedFile.click();
  }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function animate() {
  if(xautorecord.checked && xbyframe.checked){ await sleep(100); }
  requestAnimationFrame(animate);
  render();
}


////////////// kick-start!

setupCanvas();
animate();
