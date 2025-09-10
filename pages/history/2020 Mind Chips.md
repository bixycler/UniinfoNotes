## 2020 Mind Chips
	- 2020-02-13
		- links
			- Chatbots Life: [https://chatbotslife.com/](https://chatbotslife.com/)
				- [https://chatbotslife.com/full-tutorial-on-how-to-create-and-deploy-a-telegram-bot-using-python-69c6781a8c8f](https://chatbotslife.com/full-tutorial-on-how-to-create-and-deploy-a-telegram-bot-using-python-69c6781a8c8f)
			- Telegram bot API: [https://core.telegram.org/bots](https://core.telegram.org/bots)
			- BeowulfAI_test_bot: [t.me/BeowulfAI_test_bot](t.me/BeowulfAI_test_bot)
			  ([https://api.telegram.org/bot1093840040:AAG33j-C6mnNytMazaV-7nEMz5hage1ysVA/getUpdates](https://api.telegram.org/bot1093840040:AAG33j-C6mnNytMazaV-7nEMz5hage1ysVA/getUpdates))
		- links
			- StackEdit, an In-browser Markdown editor: [https://stackedit.io/](https://stackedit.io/)
	- 2020-03-24
		- WebRTC's `simulcast` and the up-coming "Scalable Video Coding" (SVC) in SFU:
		  [https://blog.crowdcast.io/post/how-webrtc-scales](https://blog.crowdcast.io/post/how-webrtc-scales)
		- WebRTC's docs in details: [https://hpbn.co/webrtc/](https://hpbn.co/webrtc/)
	- 2020-03-26
		- to Call Core:
		  GitLab [Board of tasks & issues](https://gitlab.com/beowulflabs/beowulf-telecom/call-core/call-core/-/boards/1623698):
			- States: "Open" = not yet accepted (by assignee); "Doing" = someone (assignee) is doing it; "To Do" = to do it later, not now; "Closed" = done/resolved/invalid/canceled
			- Settings: Go to an issue, change "Show all activity" to "Show comments only"
			- Cross-project CI-CD pipeline: [https://docs.gitlab.com/ee/ci/multi_project_pipelines.html](https://docs.gitlab.com/ee/ci/multi_project_pipelines.html)
	- 2020-03-30
		- `WebRTC` bitrates:
			- [http://www.rtcbits.com/2016/11/controlling-bandwidth-usage-in-webrtc.html](http://www.rtcbits.com/2016/11/controlling-bandwidth-usage-in-webrtc.html)
			- [https://docs.flashphoner.com/display/WCS5EN/Bitrate+management+when+capturing+WebRTC+stream+in+browser](https://docs.flashphoner.com/display/WCS5EN/Bitrate+management+when+capturing+WebRTC+stream+in+browser)
			- [https://easyrtc.com/docs/client-api/labs_easyrtc_rates.js.php](https://easyrtc.com/docs/client-api/labs_easyrtc_rates.js.php)
	- 2020-04-18
	  id:: 684c040a-bc99-445f-8e57-8ddc7464b0df
		- Cà khẻo cà kheo [HTV video on DailyMotion](https://www.dailymotion.com/video/x5l4iwa)
		  id:: 684c040a-fbed-4c72-8ac4-e14e69f17b04
		- [https://truyencotich.vn/truyen-co-tich/co-tich-the-gioi/ba-cau-hoi.html](https://truyencotich.vn/truyen-co-tich/co-tich-the-gioi/ba-cau-hoi.html)
	- 2020-04-21
		- GStreamer Dynamic mixer:
			- WARNING: `demux`/`decodebin` have **dynamic(sometimes) src pads**, not static(always) pad => must be link dynamically via *signal "pad-added" handler*.
			- Add source:
			  
			  ```
			  gst_bin_add(GST_BIN(pipeline), testsrc);
			  src_pad = gst_element_get_static_pad(testsrc,"src");
			  mixer_pad = gst_element_get_request_pad(mixer,"sink_%u");
			  if(res=gst_pad_link(src_pad, mixer_pad) != GST_PAD_LINK_OK){...}
			  gst_element_set_state(testsrc, GST_STATE_PLAYING);
			  ```
			- Remove source:
			  
			  ```
			  //mixer_pad = gst_element_get_static_pad(mixer,"sink_%u"); 
			  //mixer_pad = mixer_pads[i]; //Better than get_static_pad()!
			  if(gst_pad_unlink(src_pad, mixer_pad)){...}
			  gst_element_release_request_pad(mixer, mixer_pad);
			  ```
			  
			  (DON'T use `gst_element_remove_pad()`)
			  ```
			  gst_element_set_state(testsrc, GST_STATE_NULL);
			  gst_bin_remove(GST_BIN(pipeline), testsrc);
			  ```
			- srcpad must be **blocked** via brobe: [https://gstreamer.freedesktop.org/documentation/application-development/advanced/pipeline-manipulation.html?gi-language=c#changing-elements-in-a-pipeline](https://gstreamer.freedesktop.org/documentation/application-development/advanced/pipeline-manipulation.html?gi-language=c#changing-elements-in-a-pipeline)
			- Time sync:
				- `gst_pad_set_offset()` related issue: [https://gstreamer-devel.narkive.com/sgW9GDe6/dynamic-linking-for-custom-bins](https://gstreamer-devel.narkive.com/sgW9GDe6/dynamic-linking-for-custom-bins)
		- Dynamic **Caps Negotiation**:
			- Basics: [https://gstreamer.freedesktop.org/documentation/additional/design/negotiation.html?gi-language=c](https://gstreamer.freedesktop.org/documentation/additional/design/negotiation.html?gi-language=c)
			- Examples: [https://gstreamer.freedesktop.org/documentation/plugin-development/advanced/negotiation.html?gi-language=c#dynamic-negotiation](https://gstreamer.freedesktop.org/documentation/plugin-development/advanced/negotiation.html?gi-language=c#dynamic-negotiation)
	- 2020-04-22
		- VA-API & hardware video acceleration:
			- arch wiki: vainfo and driver compat tatble: [https://wiki.archlinux.org/index.php/Hardware_video_acceleration#VA-API_drivers](https://wiki.archlinux.org/index.php/Hardware_video_acceleration#VA-API_drivers)
			- on Debian, package `i965-va-driver-shaders` provides VP8enc.
			- on headless server:
				- [https://askubuntu.com/questions/549334/how-do-you-select-a-graphics-driver-on-a-headless-box](https://askubuntu.com/questions/549334/how-do-you-select-a-graphics-driver-on-a-headless-box)
				- [http://gstreamer-devel.966125.n4.nabble.com/Headless-VA-API-hardware-accelerated-H-264-video-encoding-with-vaapih264enc-td4688424.html](http://gstreamer-devel.966125.n4.nabble.com/Headless-VA-API-hardware-accelerated-H-264-video-encoding-with-vaapih264enc-td4688424.html)
	- 2020-05-14
		- Test mixer with logs:
			- Shared screen with high resolution (large bandwidth), resizing the shared window to some dimensions gives some problem:
				- crash WebRTC receiver (teacher & student mixer panel only), local display on mixer is still ok.
				- randomly break the caps negotiation in the gst pipeline (after a bust of 7 continuous caps events)
				  Ref: [https://tools.ietf.org/id/draft-ietf-avtext-framemarking-05.html](https://tools.ietf.org/id/draft-ietf-avtext-framemarking-05.html)
		- TODO:
	- 2020-05-18
		- SSH-RSA vs standard RSA-PEM/PKCS8
		  [https://www.thedigitalcatonline.com/blog/2018/04/25/rsa-keys/](https://www.thedigitalcatonline.com/blog/2018/04/25/rsa-keys/)
	- 2020-05-23
		- Streaming over USB:
			- Ethernet over USB: [https://en.wikipedia.org/wiki/Ethernet_over_USB](https://en.wikipedia.org/wiki/Ethernet_over_USB)
				- `usbnet`: [http://www.linux-usb.org/usbnet/](http://www.linux-usb.org/usbnet/)
				- `CDCEther`: [https://www.tldp.org/HOWTO/Motorola-Surfboard-Modem/usb.html](https://www.tldp.org/HOWTO/Motorola-Surfboard-Modem/usb.html)
			- USB/Ethernet adaptor: [https://delightlylinux.wordpress.com/2017/01/25/the-plugable-usb-3-ethernet-adapter-and-linux/](https://delightlylinux.wordpress.com/2017/01/25/the-plugable-usb-3-ethernet-adapter-and-linux/)
	- 2020-06-03
		- NAT-ICE-STUN-TURN
		- NAT
			- NAT types & correspondent hole punching mechanisms by STUN: [https://www.slideshare.net/guest3bd2a12/network-address-presentation](https://www.slideshare.net/guest3bd2a12/network-address-presentation)
			- NAT Behavior Discovery Algorithm Using **Classic STUN (RFC 3489)**: [https://www.netmanias.com/en/post/techdocs/6066/nat-network-protocol/nat-behavior-discovery-using-classic-stun-rfc-3489](https://www.netmanias.com/en/post/techdocs/6066/nat-network-protocol/nat-behavior-discovery-using-classic-stun-rfc-3489)
		- STUN
			- *Classic STUN* NAT behavior discovery: [https://github.com/automation-stack/nat-discovery](https://github.com/automation-stack/nat-discovery) with python, and **JSTUN** [https://jstun.javawi.de/](https://jstun.javawi.de/) with java
			- *Classic STUN* public servers: [stun.ekiga.net](stun.ekiga.net) [stun.ideasip.com](stun.ideasip.com) [stun.voiparound.com](stun.voiparound.com) [stun.voipbuster.com](stun.voipbuster.com) [stun.voipstunt.com](stun.voipstunt.com) [stun.voip.eutelia.it](stun.voip.eutelia.it)
			- Classic STUN (RFC 3489) vs. **modern STUN (RFC 5389/5780)**: [https://www.netmanias.com/en/?m=view&id=techdocs&tag=248&no=6065](https://www.netmanias.com/en/?m=view&id=techdocs&tag=248&no=6065)
			- NAT Behavior Discovery Algorithm Using *modern STUN*: [https://www.netmanias.com/en/post/techdocs/6067/nat-network-protocol/nat-behavior-discovery-using-stun-rfc-5780](https://www.netmanias.com/en/post/techdocs/6067/nat-network-protocol/nat-behavior-discovery-using-stun-rfc-5780)
			- `coturn` package for TURN/STUN servers & clients with *modern STUN*: [https://manpages.debian.org/buster/coturn/index.html](https://manpages.debian.org/buster/coturn/index.html)
				- Docker image: [https://hub.docker.com/r/instrumentisto/coturn](https://hub.docker.com/r/instrumentisto/coturn)
			- *Modern STUN* public servers: [stun.voip.blackberry.com:3478](stun.voip.blackberry.com:3478) stun{,1,2,3,4}.[l.google.com:19302](l.google.com:19302) {respond with a single field XOR-MAPPED-ADDRESS}
			- **Stuntman**, the official C implementation of STUN server/client (both modern and classic): [http://www.stunprotocol.org/](http://www.stunprotocol.org/)
			- **gortc**/stun ([https://github.com/gortc/stun](https://github.com/gortc/stun)) for *modern STUN* which is merged into pion/stun ([https://github.com/pion/stun](https://github.com/pion/stun)), and a simple "symmetric NAT" checker "natat" ([https://github.com/songjiayang/natat](https://github.com/songjiayang/natat))
			- For "symmetric/cone" detection only, we can also use ICE (**2 candidates** will be returned on "symmetric NAT"): [https://webrtchacks.com/symmetric-nat/](https://webrtchacks.com/symmetric-nat/)
			- **Symmetric NAT Traversal** using STUN (RFC draft): [https://tools.ietf.org/id/draft-takeda-symmetric-nat-traversal-00.txt](https://tools.ietf.org/id/draft-takeda-symmetric-nat-traversal-00.txt)
		- TURN
			- TURN specs & headers: [https://docs.microsoft.com/en-us/openspecs/office_protocols/ms-turn/8177788b-1f38-47a5-8a6f-348e89717922](https://docs.microsoft.com/en-us/openspecs/office_protocols/ms-turn/8177788b-1f38-47a5-8a6f-348e89717922) ([RFC5766](https://tools.ietf.org/html/rfc5766#section-12))
	- 2020-07-07
		- Network settings:
			- Alias interface for existing device:
				- [https://superuser.com/a/154760](https://superuser.com/a/154760)
				- [https://www.cyberciti.biz/faq/linux-creating-or-adding-new-network-alias-to-a-network-card-nic/](https://www.cyberciti.biz/faq/linux-creating-or-adding-new-network-alias-to-a-network-card-nic/)
				- This require `root` permission, so for docker container, it must be run with `--cap-add=NET_ADMIN` flag (restricted version of `--privileged`).
				- In NetworkManager, just add aliases to Wired Settings/<profile>/IPv4/Addresses (then use `ip addr` instead of `ifconfig` to check.)
		- NAT, `iptables`, `docker` bridge network, router
			- `iptables`/`netfilter` cheatsheet: [https://gist.github.com/mcastelino/c38e71eb0809d1427a6650d843c42ac2](https://gist.github.com/mcastelino/c38e71eb0809d1427a6650d843c42ac2)
			- Docker's custom bridge network: [https://docs.docker.com/engine/tutorials/networkingcontainers/](https://docs.docker.com/engine/tutorials/networkingcontainers/)
			- Basic about docker's modification of host's iptables: [https://docs.docker.com/network/iptables/](https://docs.docker.com/network/iptables/)
			- How docker modifies host's iptables: [https://argus-sec.com/docker-networking-behind-the-scenes/](https://argus-sec.com/docker-networking-behind-the-scenes/)
	- 2020-07-09
		- Tasks on [Geni family tree](https://www.geni.com/people/Xu%C3%A2n-%C4%90%E1%BB%8Bnh-L%C3%AA/6000000141986821931):
			- DONE Set new password, change language to Vietnamese
			- DONE Choose Vietnamese for names
			- DONE Upload id photo
			- Only use last & first names (with nick)
			- Set child order (1-/2-) & marriage order <— GEDCOM only support relative order!!! ==> use nick to record!
			- (Add "Giỗ AL: 2 tháng 3") <— Autocomputed by Gramps.mod
			- Coverage: forest{ blood rel{ direct line{ paternal, maternal }, collateral line }, in-law rel }
	- 2020-07-13
		- Mashup dashboard
			- Dynamic layout CSS: Constraints + ~Flexbox + ~Grid + Dynamic Units
			- [programmableweb.com](programmableweb.com): portal for Web APIs and mashups
	- 2020-08-07
		- Mobile browser's flaws:
			- No simple way to detect "on mobile"
			- Mess zooming with viewporting
			- Try to cover all legacy fixed layout webpages
				- Fixed window width => tipping/rotating is just zooming
				- Fixed large window => too small to see
			- Provides meta "viewport" but still not official & not adaptable for rotating
				- Still fixed width (provided by meta); js can dynamically adjust meta, but... messy!
			- Style "position: absolute" snap-zooms to the full width (no matter in or out)
			- Viewport info is provided via VisualViewport API (working draft)
	- 2020-09-01
		- Hamilton-Jacobi equation: dS/dt + H = 0
		  [https://hal.archives-ouvertes.fr/hal-02317455/file/hamilton_jacobi.pdf](https://hal.archives-ouvertes.fr/hal-02317455/file/hamilton_jacobi.pdf)
		  [https://en.wikipedia.org/wiki/Hamilton%E2%80%93Jacobi_equation](https://en.wikipedia.org/wiki/Hamilton%E2%80%93Jacobi_equation)
		- Particle-wave duality: wave front = collection of photons
		- Action S = absolute (light) time T elapsed (as early as Fermat's principle, Maupertuis showed dS = E.dt; Euler showed dS = p.ds called "effort" ~ potential energy)
	- 2020-09-10
		- PhD fellowships on Complex Systems:
			- Max Planck Gesell: [https://www.mpg.de/en/imprs](https://www.mpg.de/en/imprs)
				- brain-behavior: [https://www.imprs-brain-behavior.org/admissions/application-info/](https://www.imprs-brain-behavior.org/admissions/application-info/)
			- Development of machine learning, mathematical optimisation and algorithmic techniques for materials chemistry problems (Liverpool) : [https://www.findaphd.com/phds/project/development-of-machine-learning-mathematical-optimisation-and-algorithmic-techniques-for-materials-chemistry-problems/?p121364](https://www.findaphd.com/phds/project/development-of-machine-learning-mathematical-optimisation-and-algorithmic-techniques-for-materials-chemistry-problems/?p121364)
			- Machine learning-based nonlinear approximation of PDEs on complex domains: [https://www.findaphd.com/phds/project/machine-learning-based-nonlinear-approximation-of-pdes-on-complex-domains/?p116778](https://www.findaphd.com/phds/project/machine-learning-based-nonlinear-approximation-of-pdes-on-complex-domains/?p116778)
			- [https://schoolofsustainability.asu.edu/degrees-and-programs/graduate-degrees-programs/complex-adaptive-systems-science-concentration-phd-sustainability/](https://schoolofsustainability.asu.edu/degrees-and-programs/graduate-degrees-programs/complex-adaptive-systems-science-concentration-phd-sustainability/)
	- 2020-09-18
		- bài toán "Hàn Tín điểm binh"
		  id:: 684c040a-7f5d-45df-a618-2a8ab9debd0e
			- [on Wikipedia](https://vi.wikipedia.org/wiki/%C4%90%E1%BB%8Bnh_l%C3%BD_s%E1%BB%91_d%C6%B0_Trung_Qu%E1%BB%91c)
			- [http://vitayson12.blogspot.com/2014/12/bai-toan-han-tin-iem-binh.html](http://vitayson12.blogspot.com/2014/12/bai-toan-han-tin-iem-binh.html)
			- [https://zh-classical.wikipedia.org/wiki/%E9%9F%93%E4%BF%A1%E9%BB%9E%E5%85%B5](https://zh-classical.wikipedia.org/wiki/%E9%9F%93%E4%BF%A1%E9%BB%9E%E5%85%B5)
	- 2020-09-24
	  id:: 684c040a-a044-4f5f-8336-44f1359dd396
		- Intension vs Extension
			- Intensional Logic: [https://plato.stanford.edu/entries/logic-intensional/](https://plato.stanford.edu/entries/logic-intensional/)
			- AN INTENSIONAL LEIBNIZ SEMANTICS FOR ARISTOTELIAN LOGIC: [http://glashoff.eu/Texte/An%20Intensional%20Leibniz%20Semantics_published.pdf](http://glashoff.eu/Texte/An%20Intensional%20Leibniz%20Semantics_published.pdf)
			- A (Leibnizian) Theory of Concepts: [http://mally.stanford.edu/leibniz.pdf](http://mally.stanford.edu/leibniz.pdf)
			- Leibniz Logic: [https://iep.utm.edu/leib-log/](https://iep.utm.edu/leib-log/)
			- Extension and Comprehension in Logic: [https://www.erudit.org/fr/revues/ltp/1968-v24-n2-ltp0973/1020127ar.pdf](https://www.erudit.org/fr/revues/ltp/1968-v24-n2-ltp0973/1020127ar.pdf)
			- On the Law of Inverse Variation of Extension and Intension: [https://www.pdcnet.org/wcp13/content/wcp13_1964_0005_0213_0221?file_type=pdf](https://www.pdcnet.org/wcp13/content/wcp13_1964_0005_0213_0221?file_type=pdf)
			- I S: [http://web.mit.edu/fintel/fintel-heim-intensional.pdf](http://web.mit.edu/fintel/fintel-heim-intensional.pdf)
	- 2020-10-01
		- Randomized Truchet pattern on a Penrose P3 tiling: [https://www.reddit.com/r/proceduralgeneration/comments/gj7kth/randomized_truchet_pattern_on_a_penrose_p3_tiling/](https://www.reddit.com/r/proceduralgeneration/comments/gj7kth/randomized_truchet_pattern_on_a_penrose_p3_tiling/)
		- Penrose curves color-coded : [http://www.smooney1949.net/penrose_desc.html](http://www.smooney1949.net/penrose_desc.html)
	- 2020-10-12
		- Spinor (vs. scalar/vector/tensor)
			- SpinLab for Winodws: [https://chavascience.com/en/spin-lab/download](https://chavascience.com/en/spin-lab/download)
			- Is the electron a photon with toroidal topology? [http://www.cybsoc.org/electron.pdf](http://www.cybsoc.org/electron.pdf)
			- The Standard Model lacks inner structure of electron and photon: [https://physicsdetective.com/misconceptions-in-particle-physics/](https://physicsdetective.com/misconceptions-in-particle-physics/)
	- 2020-10-18
		- Honeycomb & Kepler conjecture:
			- Kepler conjecture proved by Hales & computer in 2015: [https://en.wikipedia.org/wiki/Kepler_conjecture](https://en.wikipedia.org/wiki/Kepler_conjecture)
			- Honeycomb conjecture proved by Hales in 1999: [https://arxiv.org/pdf/math/9906042.pdf](https://arxiv.org/pdf/math/9906042.pdf)
			- Kelvin problem: Weaire–Phelan structure (1993) as counter example of Kelvin conjecture, but the optimal structure is sill unknown: [https://en.wikipedia.org/wiki/Weaire%E2%80%93Phelan_structure](https://en.wikipedia.org/wiki/Weaire%E2%80%93Phelan_structure)
			- Honeycomb in 3D: [https://en.wikipedia.org/wiki/Honeycomb](https://en.wikipedia.org/wiki/Honeycomb)
	- 2020-10-19
		- Unitarity, info conservation, rotation, reversibility:
			- Unitarity as Preservation of Entropy and Entanglement
			  in Quantum Systems: [https://icfo.es/images/publications/J06-051.pdf](https://icfo.es/images/publications/J06-051.pdf)
			- Lesson 1: Entropy and conservation of information: [https://www.lapasserelle.com/statistical_mechanics/lesson_1.pdf](https://www.lapasserelle.com/statistical_mechanics/lesson_1.pdf)
			  (Susskind's lectures of Statistical Mechanics: [https://theoreticalminimum.com/courses/statistical-mechanics/2013/spring](https://theoreticalminimum.com/courses/statistical-mechanics/2013/spring))
			- Information Conservation, Entropy Increase and the Statistical Irreversibility for an Isolated System: [https://arxiv.org/pdf/0902.0870.pdf](https://arxiv.org/pdf/0902.0870.pdf)
		- Subjective(active) + objective(passive) => interactive views:
			- Subjective = "on the bank" = Active = "controlling the world" = Euler = Schrödinger = defacto view
				- Objective = "sitting on the bank but put mind on the boat" = Passive = "flow with the world" = Lagrange = Heisenberg view
				  => Relative = "from above" = Interactive = "view-control" = UniThread view
			- Active and passive transformation: [https://en.wikipedia.org/wiki/Active_and_passive_transformation](https://en.wikipedia.org/wiki/Active_and_passive_transformation)
			- Interaction (Dirac) - Schrödinger - Heisenberg pictures: [on Wikipedia](https://en.wikipedia.org/wiki/Interaction_picture)
			- Euler & Lagrange versus Heisenberg & Scrodinger pictures - classical & quantum chaos: [https://arxiv.org/pdf/1305.5272.pdf](https://arxiv.org/pdf/1305.5272.pdf)
	- 2020-10-28
		- Representations of Projective Geometry (related to Hyperbolic Geometry):
			- A course on Projective Geometry: [http://pi.math.cornell.edu/~web4520/](http://pi.math.cornell.edu/~web4520/)
			- Chapter 5. Basics of Projective Geometry: [https://www.cis.upenn.edu/~jean/gma-v2-chap5.pdf](https://www.cis.upenn.edu/~jean/gma-v2-chap5.pdf)
			- [https://www.math.toronto.edu/mathnet/questionCorner/projective.html](https://www.math.toronto.edu/mathnet/questionCorner/projective.html)
			- Stereographic projection: [https://mathcs.clarku.edu/~djoyce/java/compass/compass4.html](https://mathcs.clarku.edu/~djoyce/java/compass/compass4.html)
			- On Klein’s So-called Non-Euclidean geometry: [https://arxiv.org/pdf/1406.7309.pdf](https://arxiv.org/pdf/1406.7309.pdf)
			- Universal Hyperbolic Geometry II: A pictorial overview (heavily use Projective Geometry): [http://www.grad.hr/hdgg/kog_stranica/kog14/01Wildberger_Kog14.pdf](http://www.grad.hr/hdgg/kog_stranica/kog14/01Wildberger_Kog14.pdf)
			- PROJECTIVE GEOMETRY ON MANIFOLDS (Affine, Projective, Non-Euclidean, Manifolds): [http://indico.ictp.it/event/a09156/material/5/0.pdf](http://indico.ictp.it/event/a09156/material/5/0.pdf)
			- Geodesics:
				- [https://en.wikipedia.org/wiki/Affine_connection](https://en.wikipedia.org/wiki/Affine_connection)
				- [https://en.wikipedia.org/wiki/Projective_connection](https://en.wikipedia.org/wiki/Projective_connection)
			- Geometric structures on manifolds (a course with heavy formulae): [http://www.math.umd.edu/~wmg/gstom.pdf](http://www.math.umd.edu/~wmg/gstom.pdf)
			- Lecture Notes on General Relativity: metrics & geodesics: [http://www.blau.itp.unibe.ch/newlecturesGR.pdf](http://www.blau.itp.unibe.ch/newlecturesGR.pdf)
		- Incidence geometry (> projective > affine > Euclid): [https://en.wikipedia.org/wiki/Incidence_geometry](https://en.wikipedia.org/wiki/Incidence_geometry)
		- Möbius plane of cycles: [https://en.wikipedia.org/wiki/M%C3%B6bius_plane](https://en.wikipedia.org/wiki/M%C3%B6bius_plane)
		- Some models of Cayley–Klein metric (distance) on complex projective: [https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Projective_geometry/Chapter_4_The_Klein_programme.pdf](https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Projective_geometry/Chapter_4_The_Klein_programme.pdf)
		- Bud workshop, an interesting site about weird geo & planet: [http://www.budworkshop.co.uk/bw_crossratio.html](http://www.budworkshop.co.uk/bw_crossratio.html)
		- Laguerre geometry in space forms and incircular nets (Proj Geo, Cayley-Klein distance, Hyperbolic/Elliptic Geo, Mobius - Lie - Laguerre Geo): [https://www.discretization.de/media/filer_public/a4/f3/a4f33445-83b2-46b0-a6c2-a34e1a463531/laguerre.pdf](https://www.discretization.de/media/filer_public/a4/f3/a4f33445-83b2-46b0-a6c2-a34e1a463531/laguerre.pdf)
		- Projective Geometry JavaScript applet: [https://www.stefan-liebscher.de/geometry.php?language=en](https://www.stefan-liebscher.de/geometry.php?language=en)
		- the relativity of hyperbolic space (reformulate Einstein's Relativities using Hyperbolic Geo & Doppler effect): [http://philsci-archive.pitt.edu/4437/1/hyperbolic-arXiv.pdf](http://philsci-archive.pitt.edu/4437/1/hyperbolic-arXiv.pdf)
	- 2020-11-13
		- Lie sphere geometry & dual numbers
			- On dual numbers and their application to geometry: [http://www.neo-classical-physics.info/uploads/3/4/3/6/34363841/grunwald_-_dual_numbers_and_geometry.pdf](http://www.neo-classical-physics.info/uploads/3/4/3/6/34363841/grunwald_-_dual_numbers_and_geometry.pdf)
			- On the Homogeneous Model of Euclidean Geometry (Grassmann algebra -> Clifford algebra): [https://arxiv.org/pdf/1101.4542.pdf](https://arxiv.org/pdf/1101.4542.pdf)
			- Lie sphere geometry in lattice cosmology: [https://iopscience.iop.org/article/10.1088/1361-6382/ab6a20](https://iopscience.iop.org/article/10.1088/1361-6382/ab6a20)
			- FORGOTTEN GEOMETRICAL TRANSFORMATION (Laguerre transformation): [https://www.e-periodica.ch/cntmng?pid=ens-001:1972:18::108](https://www.e-periodica.ch/cntmng?pid=ens-001:1972:18::108)
	- 2020-11-14
		- Dimensions & Metrics
			- Topological dimensions, Hausdor dimensions & fractals: [https://u.math.biu.ac.il/~megereli/final_topology.pdf](https://u.math.biu.ac.il/~megereli/final_topology.pdf)
	- 2020-12-02
		- These are notes for Quickom works at UTS:
		- Layout: swap waiting for keyframe
		- multiply G main loop & main context to avoid "singleton"
		- Test "lost RTP: must set `-local-play=true`. Warn: The `receiver_gst` is not resilient against loss!
			- Whenever there are lost RTPs, sometime "broken" VP8 packet with only 2-3 bytes but always first byte = 0x01 and RTP.Header.{Marker =true, PayloadType=96} ???
			- Detect lateness via timestamp
		- Cross network testing: some times even SSH tunneling is difficult!
			- Wifi Quickom (VNPT): some times very slow, 2 local peers in the same wifi but even slower!!! :O
			- Static Viettel and/or static VNPT: Viettel -> VNPT ok, but VNPT -> Viettel not peerable!
			- DHCP Viettel & VNPT: working with some lost RTPs
	- 2020-12-25
		- Why "complex number", [Geometric Algebra](https://en.wikipedia.org/wiki/Geometric_algebra)
		- Wave function's complex number related with Geometric Algebra: [on physics.stackexchange](https://physics.stackexchange.com/questions/8062/about-the-complex-nature-of-the-wave-function/8085#8085)