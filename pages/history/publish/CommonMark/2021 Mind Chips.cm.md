## 2021 Mind Chips
	- 2021-01-27
		- A simple video capture application using DirectShow: [http://software-tecnico-libre.es/en/article-by-topic/all_sections/all-topics/all-articles/directshow-basic-programming](http://software-tecnico-libre.es/en/article-by-topic/all_sections/all-topics/all-articles/directshow-basic-programming)
		- Win32's capture graph: [https://docs.microsoft.com/en-us/windows/win32/directshow/about-the-capture-graph-builder](https://docs.microsoft.com/en-us/windows/win32/directshow/about-the-capture-graph-builder)
		- Chromium docs about Video Capture: [https://www.chromium.org/developers/design-documents/video-capture](https://www.chromium.org/developers/design-documents/video-capture)
		- Video processing with WebCodecs: [https://web.dev/webcodecs/](https://web.dev/webcodecs/)
		- Window capture:
			- PrintWindow() but the src window must actively implement WM_PAINT & WM_PRINTCLIENT
			  <br>[https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-printwindow](https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-printwindow)
			- Simply copy screen's rect corresponding to the src window, but the src window must be fully viz.
			- WindowsGraphicsCapture API for Windows 10+
			  <br>[https://blogs.windows.com/windowsdeveloper/2019/09/16/new-ways-to-do-screen-capture/](https://blogs.windows.com/windowsdeveloper/2019/09/16/new-ways-to-do-screen-capture/)
			  <br>[https://docs.microsoft.com/en-us/windows/uwp/audio-video-camera/screen-capture](https://docs.microsoft.com/en-us/windows/uwp/audio-video-camera/screen-capture)
				- ID3D11Texture2D —> dxgiFrameTexture —[m_d2dContext->CreateBitmapFromDxgiSurface()]—> ID2D1Bitmap (Direct2D) [OK, but] —> hBitmap is difficult: [https://gamedev.stackexchange.com/questions/43823/how-can-i-obtain-a-hbitmap-or-hicon-from-a-direct2d-bitmap](https://gamedev.stackexchange.com/questions/43823/how-can-i-obtain-a-hbitmap-or-hicon-from-a-direct2d-bitmap)
				- Frame.Surface —[CreateFromDirect3D11Surface()]—> CanvasBitmap (Win2D) —[GetPixelBytes()/WriteAsync()]—> IBuffer
				  <br>[https://docs.microsoft.com/en-us/windows/uwp/audio-video-camera/screen-capture#take-a-screenshot](https://docs.microsoft.com/en-us/windows/uwp/audio-video-camera/screen-capture#take-a-screenshot)
				  <br>[https://stackoverflow.com/questions/62157279/attempting-to-save-a-picture-in-c-sharp-to-a-byte-array-using-canvas-bitmap-but](https://stackoverflow.com/questions/62157279/attempting-to-save-a-picture-in-c-sharp-to-a-byte-array-using-canvas-bitmap-but)
				- WinGDI video BITMAPINFOHEADER structure:
				  <br>[https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ns-wingdi-bitmapinfoheader](https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ns-wingdi-bitmapinfoheader)
	- 2021-03-04
		- **[FILE]**: [MIPs eq NE.txt](../assets/Will/story/2025-06/TelegramSaved_2020-02_2025-05/files/MIPs eq NE.txt) & [fb post on 2021-01-04](https://www.facebook.com/share/p/1FAFAAeFjq/)
	- 2021-03-21
		- DMT/aya
			- [https://mystown.com/2016/08/ayahuasca-la-gi-tim-hieu-ve-chat-thuc/](https://mystown.com/2016/08/ayahuasca-la-gi-tim-hieu-ve-chat-thuc/)
			- [https://realitysandwich.com/how-dmt-is-made/#h-how-to-extract-dmt](https://realitysandwich.com/how-dmt-is-made/#h-how-to-extract-dmt)
			- [https://www.alibaba.com/showroom/acacia-confusa-bark.html](https://www.alibaba.com/showroom/acacia-confusa-bark.html)
			- [https://www.facebook.com/psychedelicsplants/posts/1657830591160498/](https://www.facebook.com/psychedelicsplants/posts/1657830591160498/)
			- [https://psychedelicszone.com/product-category/dmt/](https://psychedelicszone.com/product-category/dmt/)
			- [https://trippyworld.net/category/dmt/](https://trippyworld.net/category/dmt/)
			- [https://qualiacomputing.com/2020/07/01/5-meo-dmt-vs-nn-dmt-the-9-lenses/](https://qualiacomputing.com/2020/07/01/5-meo-dmt-vs-nn-dmt-the-9-lenses/)
			- [https://thethirdwave.co/psychedelics/5-meo-dmt/](https://thethirdwave.co/psychedelics/5-meo-dmt/)
			- [https://www.reddit.com/r/DMT/comments/4ut5zw/ecig_dmt_a_comprehensive_guide/](https://www.reddit.com/r/DMT/comments/4ut5zw/ecig_dmt_a_comprehensive_guide/)
			- [https://www.reddit.com/r/5MeODMT/comments/a9c0g7/hcl_vs_freebase/](https://www.reddit.com/r/5MeODMT/comments/a9c0g7/hcl_vs_freebase/)
		- Plants with tryptamines:
			- Acacia confusa (keo tương tư): 0.074% alkaloids from stems (20% DMT, 80% NMT);[33] NMT and an unidentified tryptamine alkaloid from trunk bark;[34][35] 2.85% alkaloids from root bark (45% DMT, 55% NMT);[36] 0.005% DMT, 0.009% DMT N-oxide, 0.006% NMT and 0.007% N-chloromethyl-DMT (might be artefact of extraction) from unspecified parts[37]
			- Codariocalyx motorius (syn. Desmodium gyrans) (thóc lép động, tràng quả động, đậu lá quay) @ tropical zone: DMT, 5-MeO-DMT, leaves, roots
				- [http://tob10.net/Thoc-lep-dong-Cay-Thuoc-Nam-2509tn.html](http://tob10.net/Thoc-lep-dong-Cay-Thuoc-Nam-2509tn.html)
			- Phyllodium pulchellum (syn. Desmodium pulchellum) (chuỗi tiền, đuôi trâu): Dried plant material produced 0.2% 5-MeO-DMT & small quantities of DMT, DMT dominates in seedlings and young plants, 5-MeO-DMT dominates in mature plant, whole plant, roots, stems, leaves, flowers
				- [https://kiemlamangiang.gov.vn/index.php?page=front&tuychon=chitietloai&id=2632](https://kiemlamangiang.gov.vn/index.php?page=front&tuychon=chitietloai&id=2632)
				- [https://forums.5meodmt.org/index.php?topic=50451.0](https://forums.5meodmt.org/index.php?topic=50451.0)
				- [https://www.dmt-nexus.me/forum/default.aspx?g=posts&t=52488](https://www.dmt-nexus.me/forum/default.aspx?g=posts&t=52488)
				- [https://www.hindawi.com/journals/ecam/2016/6826175/](https://www.hindawi.com/journals/ecam/2016/6826175/)
				- [https://troutsnotes.com/wp-content/uploads/2014/11/D2_2004_Trout.pdf](https://troutsnotes.com/wp-content/uploads/2014/11/D2_2004_Trout.pdf)
			- Acacia simplex: 3.6% alkaloids from leaves and stem bark (40% NMT, 22.5% DMT, 12.7% 2-methyl-tetrahydro-β-carboline, and traces of N-formyl-NMT which might be an artefact of extraction)
			- Acacia auriculiformis (keo lá tràm): 5-MeO-DMT tentatively identified in stem bark
			- Acacia farnesiana (keo thơm): Traces of 5-MeO-DMT[22] in fruit. β-methyl-phenethylamine, flower.[23] Ether extracts about 2-6% of the dried leaf mass.[24] Alkaloids are present in the bark[25] and leaves.[26] Amphetamines and mescaline also found in tree.[21]
			- Anadenanthera colubrina @ South America: Bufotenin, Beans,[41][42] Bufotenin oxide, Beans,[41] N,N-Dimethyltryptamine, Beans,[41][42] pods,[41] 5-MeO-DMT from stem bark
			- Anadenanthera peregrina @ South America: 1,2,3,4-Tetrahydro-6-methoxy-2,9-dimethyl-beta-carboline, Plant,[45] 1,2,3,4-Tetrahydro-6-methoxy-2-methyl-beta-carboline, Plant,[42] 5-Methoxy-N,N-dimethyltryptamine, Bark,[42] 5-Methoxy-N-methyltryptamine, Bark,[42] Bufotenin, plant,[42] beans,[41] Bufotenin N-oxide, Fruit,[42] beans,[41] N,N-Dimethyltryptamine-oxide, Fruit[42][46]
			- Desmanthus illinoensis @ US: 0–0.34% DMT in root bark, highly variable.[48] Also NMT, N-hydroxy-N-methyltryptamine, 2-hydroxy-N-methyltryptamine, and gramine (toxic).[49]
			- Desmanthus leptolobus @ US: 0.14% DMT in root bark
			- Virola rufula @ South America: Alkaloids in bark and root, 95% of which is MeO-DMT[65] 0.190% 5-MeO-DMT in bark, 0.135% 5-MeO-DMT in root, 0.092% DMT in leaves.
			- Testulea gabonensis @ Africa: 0.2% 5-MeO-DMT, small quantities of DMT,[53] DMT in bark and root bark, NMT
			- Psychotria species (like viridis) @ South America: DMT 0.1-0.61% dried mass.
	- 2021-03-29
		- Psychedelics, Meditation, and Self-Consciousness: [https://www.frontiersin.org/articles/10.3389/fpsyg.2018.01475/full](https://www.frontiersin.org/articles/10.3389/fpsyg.2018.01475/full)
		- COMBINING MINDFULNESS PRACTICE AND PSYCHEDELIC THERAPY: [https://mind-foundation.org/meditation-psychedelics/](https://mind-foundation.org/meditation-psychedelics/)
			- Characterization and prediction of acute and sustained response to psychedelic psilocybin in a mindfulness group retreat: [https://www.nature.com/articles/s41598-019-50612-3](https://www.nature.com/articles/s41598-019-50612-3)
			- Psilocybin-assisted mindfulness training modulates self-consciousness and brain default mode network connectivity with lasting effects: [https://www.sciencedirect.com/science/article/abs/pii/S1053811919302952?via%3Dihub](https://www.sciencedirect.com/science/article/abs/pii/S1053811919302952?via%3Dihub)
	- 2021-04-09
		- A bad trip report about 5-MeO-DMT
		  <br>[https://www.dmt-nexus.me/forum/default.aspx?g=posts&t=8224](https://www.dmt-nexus.me/forum/default.aspx?g=posts&t=8224)
	- 2021-06-24
		- `patch.py`:
			- add ./patched/, ./merged/
			- split msg patch
	- 2021-08-29
		- Covid-19
			- TP.HCM: [https://covid19.hochiminhcity.gov.vn/](https://covid19.hochiminhcity.gov.vn/)
			- Bản đồ covid TP.HCM: [https://bando.tphcm.gov.vn/ogis](https://bando.tphcm.gov.vn/ogis)
			- Bản đồ vùng Xanh/Đỏ TP.HCM: [https://bando.tphcm.gov.vn/ogis/thongke?District=761&Province=79&Square=Q761P26776K2T2981&Ward=26776](https://bando.tphcm.gov.vn/ogis/thongke?District=761&Province=79&Square=Q761P26776K2T2981&Ward=26776)
			- 7 nhóm thuốc điều trị tại nhà: [https://ncov.moh.gov.vn/vi/web/guest/-/6851640-101](https://ncov.moh.gov.vn/vi/web/guest/-/6851640-101)
			- Nhà Pa Gem vượt qua dịch: [https://www.facebook.com/anhdepchai/posts/10224414980375942](https://www.facebook.com/anhdepchai/posts/10224414980375942)
			- Pa Gem chia sẻ bài thuốc thảo dược: [https://www.facebook.com/anhdepchai/posts/10224415006696600](https://www.facebook.com/anhdepchai/posts/10224415006696600)
			- Mất vị/khứu giác - virus trong mũi họng: [https://www.businessinsider.com/coronavirus-symptoms-loss-of-smell-taste-covid-19-anosmia-hyposmia-2020-3](https://www.businessinsider.com/coronavirus-symptoms-loss-of-smell-taste-covid-19-anosmia-hyposmia-2020-3)
	- 2021-10-05
		- linear dynamics classifications
			- geogebra: [Classification of critical point of linear systems](https://www.geogebra.org/m/usvqundr)
			- ![linear dynamics classifications](../assets/Will/story/2025-06/TelegramSaved_2020-02_2025-05/photos/photo_1@05-10-2021_14-34-35.jpg)
			- [Lê Harusada's talk on Wikipedia](https://en.wikipedia.org/wiki/Talk:Linear_dynamical_system#The_content_should_be_improved_with_details_and_visualization)
		- BHXH, VSSID:
			- Đăng ký: [https://dichvucong.baohiemxahoi.gov.vn/#/dang-ky](https://dichvucong.baohiemxahoi.gov.vn/#/dang-ky)
			- Tra cứu qua SMS: [https://ebh.vn/tin-tuc/tra-cuu-bao-hiem-xa-hoi-bang-tin-nhan-sms-chi-voi-1-000-dong](https://ebh.vn/tin-tuc/tra-cuu-bao-hiem-xa-hoi-bang-tin-nhan-sms-chi-voi-1-000-dong)
			- Tra cứu online: [https://baohiemxahoi.gov.vn/tracuu/Pages/tra-cuu-ho-gia-dinh.aspx](https://baohiemxahoi.gov.vn/tracuu/Pages/tra-cuu-ho-gia-dinh.aspx)
		- LXD: `7909345532`, CMND, BHXH Q1 (`07901`)
	- 2021-10-08
		- "QR Code"® = "Quick Response Code"
			- Decoder: [https://zxing.org/w/decode.jspx](https://zxing.org/w/decode.jspx)
			- Encoder (simple): [https://www.patrick-wied.at/static/qrgen/](https://www.patrick-wied.at/static/qrgen/)
			- Designer (complex): [https://www.qrcodechimp.com/](https://www.qrcodechimp.com/)
			- ![QR_Code-Quick_Response_Code.png](../assets/Will/story/2025-06/TelegramSaved_2020-02_2025-05/files/QR_Code-Quick_Response_Code.png) <a class="logseq-meta" id="684c11b9-0036-46e7-8e43-9b8491303b4d" ></a>
	- 2021-10-15
		- [https://mphimmoitv.com/phim-kung-fu-gau-truc-3-tap-full.8757.html](https://mphimmoitv.com/phim-kung-fu-gau-truc-3-tap-full.8757.html)
		- There's always choices!
		- Thread = Duyên(緣) = nidāna (pratyaya)
		  <br>[http://www.buddhism-dict.net/ddb/pcache/56id(b56e0-7de3).html](http://www.buddhism-dict.net/ddb/pcache/56id(b56e0-7de3).html)
		  <br>Reflection in the Indra net: [https://en.wikipedia.org/wiki/Indra%27s_net](https://en.wikipedia.org/wiki/Indra%27s_net)
		- Sentient being (chúng sanh hữu tình, sattva): insentient ~ insensate, but sentient <> sensate
		  <br>[https://en.wikipedia.org/wiki/Sentience](https://en.wikipedia.org/wiki/Sentience)
	- 2021-10-29
		- Proverbs:
			- Failure is the mother of success. ~ Chinese proverb
			- Men learn little from success, but much from failure. ~ Arabian/English Proverbs
			- Success is a pile of failure that you are standing on. ~ Dave Ramsey
			- Failure is success in progress. ― Albert Einstein
	- 2021-11-01
		- clelia curve, as unithread ball, as circled infinity, as closed U, as 2-eye circle, as double incidence
			- ![](../assets/Will/story/2025-06/TelegramSaved_2020-02_2025-05/photos/photo_7@01-11-2021_01-08-27.jpg)
	- 2021-11-11
		- Word-diff lib performance:
			- test "chrome/app/generated_resources.grd":
			  <br>difflib=2s, worddifflib=22s, wdl-hash=1:44
			- [https://wiki.python.org/moin/PythonSpeed/PerformanceTips](https://wiki.python.org/moin/PythonSpeed/PerformanceTips)
			- [https://wiki.python.org/moin/PythonSpeed/Profiling](https://wiki.python.org/moin/PythonSpeed/Profiling)
		- The Arrow:
			- Entropy: info increases, state space expands
			- Cosmos space expansion
			- Radioactive decay & radiation
			- Probability space even out
			- Cool down (gravity) & evaporate (thermodynamic)
			  <br>==> The Arrow is to oppose the Circle of Self
		- Knowledge theory: "No diff no info, no sim no knowledge"
			- Match the similar => "self" => merge => compress => form (knowledge)
			- Extract the diff => "not self" => separate => content (info)
			- Extract more diff <=> match finer circle <=> refinement
			- Find shorter path <=> compression, refinement
			  <br>==> "straight", extensionally, in the view of "self", but
			  <br>==> "circular", intensionally, in the view of non-self!, AKA "back on itself"
			- Pattern matching:
				- Requires memory: pattern is a form contained inside a container form called "memory"
				- Stricter match = clinging more to the self = tighter inner circle = more diff arrow outside
				  <br>==> The more circle inside (self), the more arrow outside (not self); The less circle inside, the less arrow outside, like a loose body can hold vibration.
				  <br>==> Forms in form: the container form is the basis for all formation via accumulation
				- Full, perfect form is inert like inert gas, gold, does not contain more, has the tightest self => "straight"
				- Empty form collects more content forms to develop... for the inner patterns to emerge... until limit reached => explode, die, collapse to the crystalized inner perfect circle
	- 2021-11-17
		- Chat tả cảnh "địa ngục":
			- phán quan là ai? ai phán xét mình? ko ai khác ngoài Chính Mình
			- những người ở đời cứ hay mắng kẻ khác "mày làm vậy là đọa địa ngục đó!" thì lúc lâm chung đó càng bị phán xét
			- phán quan phán xét dựa trên "sổ sanh tử", vậy sổ đó ở đâu? ko đâu ngoài chính bộ nhớ của mình, tiếng Anh có thuật ngữ là Life Review
			- ai bị lật sổ sanh tử nhiều nhứt? là những người ở đời luôn lẩn trốn, ít chịu đối diện với thực tế, ít chịu chấp nhận thực tế. Vì hễ cái gì mình trốn thì tưởng là mất nhưng thực ra chỉ khuất mắt đi thôi, càng khuất mắt đi thì nó càng lưu lại trong "sổ sanh tử" hay "tàng thức" (kho tàng ký ức) của mình
			- Phán xét xong thì tội sẽ bị xử bởi "đầu trâu mặt ngựa", vậy tụi quỷ đó là ai? Là chính phần tiêu cực trong mình. Mình càng ham thích phần tích cực, phần trắng trẻo, đẹp đẽ, đúng đắn, thì mình càng đẩy mặt kia vào bóng tối, và trong bóng tối thì buộc nó phải hấp thụ năng lượng bóng tối thành ra quỷ dữ thôi
			- Tụi nó thọc vô mắt mũi miệng, xuống tận ruột gan phèo phổi mình mà ngoáy mà "hành hạ"...
			- Những ai bị "tội nặng" thì đọa Địa ngục "vô gián" là sao? Nghĩa là liên tục không gián đoạn, ko bao giờ ngừng được.
			- Tại sao ko ngừng được? Chẳng phải vì cái gì khác ngoài chính tâm cố chấp của mình. Hễ khi nào mình còn chống đối, còn đẩy "bọn quỷ sứ" đó ra, vì cho rằng "tao vô tội" thì còn phải bị "hành hạ" thôi
			- Bất kỳ lúc nào mình chấp nhận, à xấu cũng là mình, tốt cũng là mình, thiện cũng là mình, ác cũng là mình, thì ngay khoảnh khắc đó mình được giải thoát
			- Bằng không thì mình bị giam đó thiên thu bất tận
			- Cái thời gian ở cõi đó rất khác với thời gian bên ngoài. Đối với người đang sống bình thường bên ngoài chỉ khoảng vài phút, nhưng đối với người đang đi cảnh đó thì có thể đã vài thế kỷ
			- Khi tui thoát ra thì bọn quỷ dữ đó bỗng trở thành những "con ma hề", tụi nó chỉ như đang diễn những trò hề trò lố chọc cười mình vậy thôi 😃
	- 2021-11-23
		- khai báo y tế với cty
			- **[FILE]**: [KBYT.pdf](../assets/Will/story/2025-06/TelegramSaved_2020-02_2025-05/files/KBYT.pdf)
	- 2021-11-26
		- Huy chat:
			- Như vậy quá trình giải thoát là làm sao để "triệt sản" mấy tụi tế bào vô thức này để chính ko tái sinh nữa à?
			- Vấn đề hiện tại tui thấy là mình thích an trú, và hưởng lạc nhiều quá, đi được một lúc thấy chỗ trú là tấp vào đó, rồi quên là mình đi chưa tới.
			- Mấy hôm nay tui bị vướng vào "sân si" nhiều quá, chợt nhận ra không dễ "chấp nhận" mấy "đứa trẻ" bên trong mình như Định từng nói...
			- Đơn cử “đứa trẻ” thích quy cũ quy trình của tui, lâu lâu rơi vào tình huống cụ thể nó sẽ trồi lên khá mạnh mẽ, lúc đó ý thức biết rõ nó đang dominate cần kìm lại nhưng ko đc, kiểu như mình biết mình đang giận dữ là sai nhưng ko kìm cơn giận lại đc vậy.
			- Về “làm hoà” thì cũng giống như ngoài đời thôi, ngồi “nói chuyện” với nhau, kiểu như tự vấn lương tâm thôi. Có 2 dạng, một là lúc bình thường, “đứa trẻ” ko trồi lên, ý thức phân tích đúng sai cho nó nghe, mai ko biết nó có nghe ko, vì tui ko có phương tiện thiền giống Định để kiểm chứng.
			- Dạng thứ 2, đợi tình huống “đứa trẻ” trồi lên dominate, lúc này ý thức biết chắc chắn nó có nghe, thể hiện qua sự bực tức khi phân tích đúng sai với nó, có điều do nó dominate nên ko biết thấm ko.
			- Dạo gần đây tui vẫn thử ở dạng 2, lúc nó đang trồi lên, ý thức ko phân tích đúng sai nữa, chỉ nói với nó: tao chấp nhận mày ở cùng tao, mày cũng nên chấp nhận tao ở với mày, let it be thôi, tao ko cản mày nhưng mày cũng ko phải duy nhất.
			- Ví dụ: ngày mai sẽ chấm xyz bài trước, sau soạn cho xong bài giảng, ... nhưng đang chấm bài thì bị cuốn vào cuộc tranh luận qua chat, nên bể kế hoạch dự tính trước, nên bực tức lên.
	- 2021-12-01
		- Theo mình hiểu cái "chết" trong sấm Trạng Trình là vậy. Và đại dịch covid-19 này cũng chỉ mới là sự bắt đầu của quá trình "thanh lọc toàn cầu" mà thôi!
			- Mười phần chết bảy còn ba,
			  <br>Chết hai còn một mới ra thái bình!
			- Cái chết của người là cái chết nhỏ, cái chết của mình mới là cái chết lớn!
			  <br>Cái chết thân thể là cái chết nhỏ, cái chết Bản Ngã (cái Tôi, Ego) mới là cái chết lớn!
			  <br>Tiểu tử tiểu ngộ, đại tử đại ngộ!!!
			- Ref: [https://vnthuquan.net/truyen/truyen.aspx?tid=2qtqv3m3237nvn3ntn1nnn31n343tq83a3q3m3237nvn&AspxAutoDetectCookieSupport=1#phandau](https://vnthuquan.net/truyen/truyen.aspx?tid=2qtqv3m3237nvn3ntn1nnn31n343tq83a3q3m3237nvn&AspxAutoDetectCookieSupport=1#phandau)
	- 2021-12-03
		- liên tục vi tế (微細) = tỉnh thức sâu, định, miên mật (綿密) = trơn (khả vi vô hạn)
		- đứt đoạn, mất kết nối, mắc kẹt, tắc nghẽn, bế tắc = tâm phân biệt = vô minh = đau bệnh
		- liên thông, kết nối với mọi thứ = vạn vật đồng nhất thể
		- Bình đẳng, vô tư, tương đối:
			- không có "tôi làm" hay "bạn làm" mà chỉ có việc làm đang diễn ra;
			- không có "tôi thương bạn" hay "bạn thương tôi" mà chỉ có tình thương đang hiện hữu;
			- không phải "cái này của tôi, cái kia của bạn"
			- mà chỉ là "cái này ở gần nơi đây, cái kia ở xa đằng kia" = làm mọi việc mà không có người làm = vô vi = người quan sát và cái thấy được là một = vô ngã
	- 2021-12-07
		- These notes are about [difflib](https://github.com/bixycler/difflib):
		- conflict/ &resolve
			- merge hunks of cd1 & cd2
			- hunk comment ['patch','src']
		- Messages:
			- make dict to check for move/delete/insert
			- search inss for Chrom/Google
	- 2021-12-10
		- morph = morphe = μορφή = fōrma = form
	- 2021-12-11
		- Chaotic dynamic systems:
			- [Double Spring Mass Systems & Matlab’s ODE 45](https://gereshes.com/2019/01/07/double-spring-mass-systems-matlabs-ode-45/amp/)
			- [Chaos and the Double Pendulum](https://gereshes.com/2018/11/19/chaos-and-the-double-pendulum/)
			- [Stability of the Lagrange Points – Three Body Problem](https://gereshes.com/2018/12/17/stability-of-the-lagrange-points-three-body-problem/)
			- **[FILE]**: [Coupled_oscillators_An_informative_problem_solving.pdf](../assets/Will/story/2025-06/TelegramSaved_2020-02_2025-05/files/Coupled_oscillators_An_informative_problem_solving.pdf)
	- 2021-12-17
		- UniThread:
			- 3 representations: orthogonal (transverse wave), projective (longitudinal wave), diagonal (symmetrical wave)
				- Orthogonal & projective: 3 axes mass-space-time = x-u-t
			- Circularity => total delta (u, displacement) = 0
			- Totality (Symmetry, relativity) => total p (v) = 0 => dp = 0 => 2 party exchage Fp +Fn = 0 => Fn = -Fp
			- Flatness => 3 party balance Fs = Ft => Me return to World's middle position (potential)
			  <br>*) Flatness = local/micro symmetry; Totality = global/macro symmetry
			  <br>=>> Time(--) = - Space (+-) = i (imagine, invisible, internal, intermediate result = left side of equations) = possible = new dimension = sink of disturbance (black hole, vacancy)
			  <br><=> Sum over time = 1 (circular); sum over space = 0 (linear)
			- Particle vs wave: closed strong connection (concentrated) vs open weak connection (1-2-3 D only
			- Time = connection within = full circle; space = connection with neighbors. Time step (next) = mismatch of full circle = the change in the eye
	- 2021-12-27
		- layer-layer = onion structure = circle-circle = radix system.
		- Independent layers = orthogonal dimensions in space = null-point interface = infinity wall (distance between layers) = emergence = closed circles
		- interface- space = intension - extension = constraint - bridge = form - content
		- V model = independence: eyes at 2 ends, interface channel at the tip (bottom)
		- U model = dependence: int channel is not null but can be refined to the null-point interface of V model
	- 2021-12-29
		- quantum differentiation with Lie's circles: infinitesimal calculus —> quantum calculus
		- Quantum differential calculus: [https://en.wikipedia.org/wiki/Quantum_differential_calculus](https://en.wikipedia.org/wiki/Quantum_differential_calculus)
		- Rotating (eigenvector) ~ scaling (eigenvalue) ~ deriv = rate of diffs, as in exp()
	- 2021-12-31
		- 2 forms: i = sqrt(-1) = ordinal circle = form of time, omega = inf = cardinal circle = form of space
		- add objects of the same forms, mult objects of diff forms
		- dimension = diff form = across inf/zero = change "sign"
		- intent^extent = content: intent = range of mapping content -> extent, intent = space in mass-space-time = range of wave = domain of types/forms to distinguish objects
			- [notes @ tamsudoithuong](https://tamsudoithuong.blogspot.com/2021/08/930-sang-nay-minh-nam-quan-ve-autonoton.html)
