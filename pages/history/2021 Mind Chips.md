## 2021 Mind Chips
	- 2021-01-27
		- A simple video capture application using DirectShow: [http://software-tecnico-libre.es/en/article-by-topic/all_sections/all-topics/all-articles/directshow-basic-programming](http://software-tecnico-libre.es/en/article-by-topic/all_sections/all-topics/all-articles/directshow-basic-programming)
		- Win32's capture graph: [https://docs.microsoft.com/en-us/windows/win32/directshow/about-the-capture-graph-builder](https://docs.microsoft.com/en-us/windows/win32/directshow/about-the-capture-graph-builder)
		- Chromium docs about Video Capture: [https://www.chromium.org/developers/design-documents/video-capture](https://www.chromium.org/developers/design-documents/video-capture)
		- Video processing with WebCodecs: [https://web.dev/webcodecs/](https://web.dev/webcodecs/)
		- Window capture:
			- PrintWindow() but the src window must actively implement WM_PAINT & WM_PRINTCLIENT
			  [https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-printwindow](https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-printwindow)
			- Simply copy screen's rect corresponding to the src window, but the src window must be fully viz.
			- WindowsGraphicsCapture API for Windows 10+
			  [https://blogs.windows.com/windowsdeveloper/2019/09/16/new-ways-to-do-screen-capture/](https://blogs.windows.com/windowsdeveloper/2019/09/16/new-ways-to-do-screen-capture/)
			  [https://docs.microsoft.com/en-us/windows/uwp/audio-video-camera/screen-capture](https://docs.microsoft.com/en-us/windows/uwp/audio-video-camera/screen-capture)
				- ID3D11Texture2D —> dxgiFrameTexture —[m_d2dContext->CreateBitmapFromDxgiSurface()]—> ID2D1Bitmap (Direct2D) [OK, but] —> hBitmap is difficult: [https://gamedev.stackexchange.com/questions/43823/how-can-i-obtain-a-hbitmap-or-hicon-from-a-direct2d-bitmap](https://gamedev.stackexchange.com/questions/43823/how-can-i-obtain-a-hbitmap-or-hicon-from-a-direct2d-bitmap)
				- Frame.Surface —[CreateFromDirect3D11Surface()]—> CanvasBitmap (Win2D) —[GetPixelBytes()/WriteAsync()]—> IBuffer
				  [https://docs.microsoft.com/en-us/windows/uwp/audio-video-camera/screen-capture#take-a-screenshot](https://docs.microsoft.com/en-us/windows/uwp/audio-video-camera/screen-capture#take-a-screenshot)
				  [https://stackoverflow.com/questions/62157279/attempting-to-save-a-picture-in-c-sharp-to-a-byte-array-using-canvas-bitmap-but](https://stackoverflow.com/questions/62157279/attempting-to-save-a-picture-in-c-sharp-to-a-byte-array-using-canvas-bitmap-but)
				- WinGDI video BITMAPINFOHEADER structure:
				  [https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ns-wingdi-bitmapinfoheader](https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ns-wingdi-bitmapinfoheader)
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
		  [https://www.dmt-nexus.me/forum/default.aspx?g=posts&t=8224](https://www.dmt-nexus.me/forum/default.aspx?g=posts&t=8224)
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
			- **[FILE]**: ![QR_Code-Quick_Response_Code.png](../assets/Will/story/2025-06/TelegramSaved_2020-02_2025-05/files/QR_Code-Quick_Response_Code.png)
			  id:: 684c11b9-0036-46e7-8e43-9b8491303b4d
	- 2021-10-15
		- [https://mphimmoitv.com/phim-kung-fu-gau-truc-3-tap-full.8757.html](https://mphimmoitv.com/phim-kung-fu-gau-truc-3-tap-full.8757.html)
		- There's always choices!
		- Thread = Duyên(緣) = nidāna (pratyaya)
		  [http://www.buddhism-dict.net/ddb/pcache/56id(b56e0-7de3).html](http://www.buddhism-dict.net/ddb/pcache/56id(b56e0-7de3).html)
		  Reflection in the Indra net: [https://en.wikipedia.org/wiki/Indra%27s_net](https://en.wikipedia.org/wiki/Indra%27s_net)
		- Sentient being (chúng sanh hữu tình, sattva): insentient ~ insensate, but sentient <> sensate
		  [https://en.wikipedia.org/wiki/Sentience](https://en.wikipedia.org/wiki/Sentience)
	- 2021-10-29
		- Proverbs:
			- Failure is the mother of success. ~ Chinese proverb
			- Men learn little from success, but much from failure. ~ Arabian/English Proverbs
			- Success is a pile of failure that you are standing on. ~ Dave Ramsey
			- Failure is success in progress. ― Albert Einstein
	- 2021