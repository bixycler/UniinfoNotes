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
		- **[FILE]**: [MIPs eq NE.txt](../assets/Will/story/2025-06/TelegramSaved_2020-02_2025-05/files/MIPs%20eq%20NE.txt)
	-