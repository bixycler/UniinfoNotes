- ((666a539d-499f-43c0-8b2e-74818cc3a0f5)) ![custom.css](../assets/logseq/custom.css) ([CreatZy Theme](../assets/logseq/custom.css))
  id:: 666a5031-1486-42b6-b925-6496fc9a4b9b
- Logseq's built-in `style.css` (Ubuntu: `/snap/logseq/28/app/resources/app/css/style.css`)
	- Root config:
	  collapsed:: true
		- ```css
		  :root {
		      --ls-main-content-max-width: 810px;
		      --ls-main-content-max-width-wide: 1280px;
		      --ls-page-text-size: 1em;
		      --ls-page-title-size: 36px;
		      --ls-font-family: Inter;
		      --ls-tag-text-opacity: 0.8;
		      --ls-tag-text-hover-opacity: 1;
		      --ls-scrollbar-width: 6px;
		      --ls-border-radius-low: 4px;
		      --ls-border-radius-medium: 8px;
		      --ls-headbar-height: 3rem;
		      --ls-headbar-inner-top-padding: 0px;
		      --ls-left-sidebar-width: 246px;
		      --ls-left-sidebar-sm-width: 74vw;
		      --ls-left-sidebar-nav-btn-size: 38px;
		      --ls-native-kb-height: 0px;
		      --ls-highlight-color-gray: var(--rx-gray-05);
		      --ls-highlight-color-red: var(--rx-red-05);
		      --ls-highlight-color-yellow: var(--rx-yellow-05);
		      --ls-highlight-color-green: var(--rx-green-05);
		      --ls-highlight-color-blue: var(--rx-blue-05);
		      --ls-highlight-color-purple: var(--rx-purple-05);
		      --ls-highlight-color-pink: var(--rx-pink-05);
		      --ls-block-bullet-color: var(--lx-gray-08,var(--rx-gray-08))
		  }
		  ```
	- Main editor pane:
	  ```css
	  body {
	      background-color: var(--lx-gray-01,var(--ls-primary-background-color,hsl(var(--background))));
	      color: var(--lx-gray-12,var(--ls-primary-text-color,hsl(var(--foreground))));
	      line-height: 1.5;
	      min-height: 100%;
	      word-break: break-word
	  }
	  ```
	- Add to control header:
	  ```css
	  .cp__header {
	      background-color: var(--ls-secondary-background-color);
	  	...
	  }
	  ```
	- Right sidebar:
	  ```css
	  .cp__right-sidebar-inner {
	      background-color: var(--lx-gray-02,var(--ls-secondary-background-color));
	      padding-top: 0
	  }
	  
	  /* sidebar-item color-level */
	  html[data-theme=dark] .cp__right-sidebar .sidebar-item {
	      background-color: var(--lx-gray-03,var(--ls-secondary-background-color))
	  }
	  
	  /* sidebar-item-header color-level */
	  .color-level .color-level {
	      background-color: var(--color-level-2);
	  }
	  ```
	- Left sidebar:
	  ```css
	  .left-sidebar-inner {
	      background-color: var(--left-sidebar-bg-color);
	      ...
	  }
	  
	  .dark .left-sidebar-inner {
	      --left-sidebar-bg-color: var(--lx-gray-02,var(--ls-secondary-background-color,hsl(var(--secondary,var(--rx-gray-03-hsl)))))
	  }
	  
	  ```
	- Links
	  collapsed:: true
		- ```css
		  .block-ref {
		      border-bottom: .5px solid;
		      border-bottom-color: var(--ls-block-ref-link-text-color);
		      cursor: alias;
		      display: inherit;
		      padding: 2px 0
		  }
		  .block-ref:hover {
		      color: var(--ls-link-text-hover-color)
		  }
		  
		  .page-ref {
		      color: var(--lx-accent-11,var(--ls-link-text-color,hsl(var(--primary)/.8)))
		  }
		  .page-ref:hover {
		      color: var(--lx-accent-11,var(--ls-link-text-color,hsl(var(--primary))))
		  }
		  
		  a {
		      color: var(--lx-accent-11,var(--ls-link-text-color,hsl(var(--primary)/.8)));
		      cursor: pointer;
		      text-decoration: none
		  }
		  a:hover {
		      color: var(--lx-accent-12,var(--ls-link-text-hover-color,hsl(var(--primary))))
		  }
		  ```
	- Code:
	  collapsed:: true
		- ```css
		  /* Inline code */
		  :not(pre)>code {
		      background-color: var(--lx-gray-06,var(--ls-page-inline-code-bg-color,var(--rx-gray-05)));
		      border-radius: 3px;
		      color: var(--lx-gray-11,var(--ls-page-inline-code-color,var(--rx-gray-11)));
		      font-family: MonoLisa,Fira Code,Monaco,Menlo,Consolas,COURIER NEW,monospace;
		      font-size: .9em;
		      font-style: normal;
		      letter-spacing: 0;
		      text-rendering: optimizeSpeed
		  }
		  html[data-theme=light] .cp__right-sidebar .block-content {
		      --ls-page-inline-code-bg-color: var(--ls-quaternary-background-color);
		      --ls-page-blockquote-bg-color: var(--ls-quaternary-background-color)
		  }
		  
		  /* Properties */
		  .block-properties,.page-properties {
		      background-color: var(--lx-gray-03,var(--ls-block-properties-background-color,var(--rx-gray-03)));
		      margin: 4px 0;
		      padding: 4px 8px
		  }
		  
		  /* Code mirror (block) .Radix */
		  
		  .cm-s-lsradix.cm-s-light,.dark .cm-s-lsradix.cm-s-dark {
		      background-color: var(--lx-gray-02,hsl(var(--secondary)/.7))
		  }
		  
		  .cm-s-lsradix.cm-s-dark {
		      background-color: var(--lx-gray-01,hsl(var(--secondary)/.7));
		      color: var(--lx-gray-10,hsl(var(--secondary-foreground)))
		  }
		  
		  .cm-s-lsradix.cm-s-light {
		      color: var(--lx-gray-10,hsl(var(--secondary-foreground)))
		  }
		  
		  
		  .cm-s-lsradix.cm-s-dark .CodeMirror-gutters {
		      background-color: var(--lx-gray-03,hsl(var(--secondary)))
		  }
		  
		  .cm-s-lsradix.cm-s-dark .CodeMirror-linenumber {
		      color: var(--lx-gray-09,#586e75)
		  }
		  
		  .cm-s-lsradix.cm-s-light .CodeMirror-gutters {
		      background-color: var(--lx-gray-03,hsl(var(--secondary)))
		  }
		  
		  .cm-s-lsradix.cm-s-light .CodeMirror-linenumber {
		      color: var(--lx-gray-09,#839496)
		  }
		  
		  /* Code mirror (block) .Solarized */
		  
		  .cm-s-solarized {
		      color-profile: sRGB;
		      rendering-intent: auto;
		      line-height: 1.45em
		  }
		  
		  .cm-s-solarized.cm-s-dark {
		      background-color: #002b36;
		      color: #839496
		  }
		  
		  .cm-s-solarized.cm-s-light {
		      background-color: #fdf6e3;
		      color: #657b83
		  }
		  
		  .cm-s-solarized .CodeMirror-widget {
		      text-shadow: none
		  }
		  
		  .cm-s-solarized.cm-s-dark div.CodeMirror-selected {
		      background: #073642
		  }
		  
		  .cm-s-solarized.cm-s-dark.CodeMirror ::-moz-selection {
		      background: rgba(7,54,66,.99)
		  }
		  
		  .cm-s-solarized.cm-s-dark.CodeMirror ::selection {
		      background: rgba(7,54,66,.99)
		  }
		  
		  .cm-s-dark .CodeMirror-line>span::-moz-selection,.cm-s-dark .CodeMirror-line>span>span::-moz-selection,.cm-s-solarized.cm-s-dark .CodeMirror-line::-moz-selection {
		      background: rgba(7,54,66,.99)
		  }
		  
		  .cm-s-solarized.cm-s-light div.CodeMirror-selected {
		      background: #eee8d5
		  }
		  
		  .cm-s-light .CodeMirror-line>span::selection,.cm-s-light .CodeMirror-line>span>span::selection,.cm-s-solarized.cm-s-light .CodeMirror-line::selection {
		      background: #eee8d5
		  }
		  
		  .cm-s-light .CodeMirror-line>span::-moz-selection,.cm-s-light .CodeMirror-line>span>span::-moz-selection,.cm-s-solarized.cm-s-light .CodeMirror-line::-moz-selection {
		      background: #eee8d5
		  }
		  
		  .cm-s-solarized.CodeMirror {
		      box-shadow: inset 7px 0 12px -6px #000
		  }
		  
		  .cm-s-solarized .CodeMirror-gutters {
		      border-right: 0
		  }
		  
		  .cm-s-solarized.cm-s-dark .CodeMirror-gutters {
		      background-color: #073642
		  }
		  
		  .cm-s-solarized.cm-s-dark .CodeMirror-linenumber {
		      color: #586e75
		  }
		  
		  .cm-s-solarized.cm-s-light .CodeMirror-gutters {
		      background-color: #eee8d5
		  }
		  
		  .cm-s-solarized.cm-s-light .CodeMirror-linenumber {
		      color: #839496
		  }
		  
		  .cm-s-solarized .CodeMirror-linenumber {
		      padding: 0 5px
		  }
		  
		  .cm-s-solarized .CodeMirror-guttermarker-subtle {
		      color: #586e75
		  }
		  
		  .cm-s-solarized.cm-s-dark .CodeMirror-guttermarker {
		      color: #ddd
		  }
		  
		  .cm-s-solarized.cm-s-light .CodeMirror-guttermarker {
		      color: #cb4b16
		  }
		  
		  .cm-s-solarized .CodeMirror-gutter .CodeMirror-gutter-text {
		      color: #586e75
		  }
		  
		  .cm-s-solarized .CodeMirror-cursor {
		      border-left: 1px solid #819090
		  }
		  
		  .cm-s-solarized.cm-s-light.cm-fat-cursor .CodeMirror-cursor {
		      background: #7e7
		  }
		  
		  .cm-s-solarized.cm-s-light .cm-animate-fat-cursor {
		      background-color: #7e7
		  }
		  
		  .cm-s-solarized.cm-s-dark.cm-fat-cursor .CodeMirror-cursor {
		      background: #586e75
		  }
		  
		  .cm-s-solarized.cm-s-dark .cm-animate-fat-cursor {
		      background-color: #586e75
		  }
		  
		  .cm-s-solarized.cm-s-dark .CodeMirror-activeline-background {
		      background: hsla(0,0%,100%,.06)
		  }
		  
		  .cm-s-solarized.cm-s-light .CodeMirror-activeline-background {
		      background: rgba(0,0,0,.06)
		  }
		  
		  
		  ```
	- Embed block `.color-level.embed-block`
	  id:: 666136d7-d118-464d-826c-9f842b267a3a
	  collapsed:: true
		- ```css
		  /* on main edit pane */
		  .dark .color-level {
		      background-color: var(--lx-gray-01,var(--color-level-1,var(--rx-gray-01)));
		  }
		  .color-level {
		      background-color: var(--lx-gray-02,var(--color-level-1,var(--rx-gray-02)));
		  }
		  
		  /* on sidebar */
		  .color-level .color-level {
		      background-color: var(--color-level-2)
		  }
		  
		  /* padding for .embed-block .px-3 */
		  .px-3 {
		      padding-left: .75rem;
		      padding-right: .75rem
		  }
		  
		  ```
	- Task status (text):
		- ```css
		  .canceled,.cancelled,.done {
		      opacity: .7
		  }
		  
		  .done>input {
		      opacity: 1
		  }
		  
		  .canceled,.cancelled,.done {
		      opacity: .6;
		      text-decoration: line-through
		  }
		  
		  ```
	- Markers (check boxes):
	  collapsed:: true
		- ```css
		  .form-checkbox,.form-radio {
		      background-color: var(--ls-page-checkbox-color,var(--rx-gray-06));
		      border: none;
		      color: var(--ls-page-checkbox-color,hsl(var(--primary)/.4));
		      position: relative
		  }
		  
		  .form-checkbox:checked,.form-radio:checked {
		      background-color: currentColor;
		      background-position: 50%;
		      background-repeat: no-repeat;
		      background-size: 100% 100%;
		      border-color: transparent
		  }
		  
		  .block-marker {
		      border: 0;
		      font-size: 85%;
		      font-weight: 650;
		      margin: 0 2px 0 0;
		      opacity: .7;
		      padding: 2px 4px
		  }
		  
		  .marker-switch:hover {
		      color: var(--ls-link-text-hover-color);
		      opacity: 1
		  }
		  
		  ```
	- Controls:
	  id:: 665e5e08-b8e7-4cbc-8a9a-5637ccf5dfc6
	  collapsed:: true
		- ```css
		  /* Scroll bar */
		  .visible-scrollbar ::-webkit-scrollbar-thumb,html.custom-scrollbar ::-webkit-scrollbar-thumb {
		      background-color: var(--lx-gray-05,var(--ls-scrollbar-foreground-color,var(--rx-gray-05)))
		  }
		  .visible-scrollbar ::-webkit-scrollbar-thumb:active,html.custom-scrollbar ::-webkit-scrollbar-thumb:active {
		      background-color: var(--lx-gray-06,var(--ls-scrollbar-thumb-hover-color,var(--rx-gray-06)))
		  }
		  .visible-scrollbar ::-webkit-scrollbar,html.custom-scrollbar ::-webkit-scrollbar {
		      background-color: var(--lx-gray-02,var(--ls-scrollbar-background-color,var(--rx-gray-02)));
		      height: 8px;
		      width: var(--ls-scrollbar-width,6px)
		  }
		  
		  
		  /* Plugin cards */
		  .cp__plugins-item-card {
		      background-color: var(--ls-tertiary-background-color,hsl(var(--muted)));
		      border-radius: calc(var(--radius) - 2px);
		  	...
		  }
		  
		  ```
	- Block children guideline:
		- ```css
		  .block-children-left-border:hover {
		      background-color: var(--lx-gray-10,var(--ls-primary-text-color,var(--rx-gray-10)));
		      opacity: .7
		  }
		  
		  .block-children-left-border:active {
		      opacity: 1
		  }
		  
		  .block-children {
		      border-left: 1px solid;
		      border-left-color: var(--lx-gray-04-alpha,var(--ls-guideline-color,var(--rx-gray-04-alpha)))!important;
		      padding-bottom: 3px;
		      padding-top: 2px
		  }
		  ```
	- Bullets:
	  id:: 665efdf6-e496-4477-994b-bf2294748fe7
	  collapsed:: true
		- ```css
		  .block-control .control-hide,.block-control:hover .control-hide {
		      display: none
		  }
		  
		  .bullet-container:not(.typed-list).bullet-closed {
		      background-color: var(--lx-gray-04-alpha,var(--ls-block-bullet-border-color,var(--rx-gray-04-alpha)))
		  }
		  .bullet-container:not(.typed-list) .bullet {
		      background-color: var(--lx-gray-08,var(--ls-block-bullet-color,var(--rx-gray-08)));
		      transition: transform .2s
		  }
		  
		  .bullet-link-wrap:hover>.bullet-container:not(.typed-list) {
		      background-color: var(--lx-gray-04-alpha,var(--ls-block-bullet-border-color,var(--rx-gray-04-alpha)))
		  }
		  .bullet-link-wrap:hover>.bullet-container:not(.typed-list) .bullet {
		      background-color: var(--lx-gray-08,var(--ls-block-bullet-color,var(--rx-gray-08)))!important;
		      transform: scale(1.2)
		  }
		  
		  .bullet-container.typed-list:not(:focus-within) .bullet {
		      background-color: unset;
		      box-shadow: none;
		      height: unset;
		      width: unset
		  }
		  
		  .bullet-link-wrap {
		      color: var(--ls-primary-text-color)
		  }
		  
		  .bullet-link-wrap:hover>.bullet-container:not(.typed-list) {
		      background-color: var(--lx-gray-04-alpha,var(--ls-block-bullet-border-color,var(--rx-gray-04-alpha)))
		  }
		  
		  .bullet-link-wrap:hover>.bullet-container:not(.typed-list) .bullet {
		      background-color: var(--lx-gray-08,var(--ls-block-bullet-color,var(--rx-gray-08)))!important;
		      transform: scale(1.2)
		  }
		  
		  ```
	- For each accent color (`data-color`), there's a corresponding set of color vars:
	  collapsed:: true
		- ```css
		  html[data-color=blue] .dark-theme,html[data-color=blue] .light-theme,html[data-color=blue] body {
		      --accent: 206 100% 50.0%;
		      --primary: 206 100% 50.0%;
		      --ring: 206 81.9% 65.3%;
		      --accent-foreground: 190 43% 97%;
		      --primary-foreground: 190 43% 97%;
		      --lx-accent-01: var(--rx-blue-01);
		      --lx-accent-02: var(--rx-blue-02);
		      --lx-accent-03: var(--rx-blue-03);
		      --lx-accent-04: var(--rx-blue-04);
		      --lx-accent-05: var(--rx-blue-05);
		      --lx-accent-06: var(--rx-blue-06);
		      --lx-accent-07: var(--rx-blue-07);
		      --lx-accent-08: var(--rx-blue-08);
		      --lx-accent-09: var(--rx-blue-09);
		      --lx-accent-10: var(--rx-blue-10);
		      --lx-accent-11: var(--rx-blue-11);
		      --lx-accent-12: var(--rx-blue-12);
		      --lx-accent-01-alpha: var(--rx-blue-01-alpha);
		      --lx-accent-02-alpha: var(--rx-blue-02-alpha);
		      --lx-accent-03-alpha: var(--rx-blue-03-alpha);
		      --lx-accent-04-alpha: var(--rx-blue-04-alpha);
		      --lx-accent-05-alpha: var(--rx-blue-05-alpha);
		      --lx-accent-06-alpha: var(--rx-blue-06-alpha);
		      --lx-accent-07-alpha: var(--rx-blue-07-alpha);
		      --lx-accent-08-alpha: var(--rx-blue-08-alpha);
		      --lx-accent-09-alpha: var(--rx-blue-09-alpha);
		      --lx-accent-10-alpha: var(--rx-blue-10-alpha);
		      --lx-accent-11-alpha: var(--rx-blue-11-alpha);
		      --lx-accent-12-alpha: var(--rx-blue-12-alpha);
		      --lx-gray-01: var(--rx-slate-01);
		      --lx-gray-02: var(--rx-slate-02);
		      --lx-gray-03: var(--rx-slate-03);
		      --lx-gray-04: var(--rx-slate-04);
		      --lx-gray-05: var(--rx-slate-05);
		      --lx-gray-06: var(--rx-slate-06);
		      --lx-gray-07: var(--rx-slate-07);
		      --lx-gray-08: var(--rx-slate-08);
		      --lx-gray-09: var(--rx-slate-09);
		      --lx-gray-10: var(--rx-slate-10);
		      --lx-gray-11: var(--rx-slate-11);
		      --lx-gray-12: var(--rx-slate-12);
		      --lx-gray-01-alpha: var(--rx-slate-01-alpha);
		      --lx-gray-02-alpha: var(--rx-slate-02-alpha);
		      --lx-gray-03-alpha: var(--rx-slate-03-alpha);
		      --lx-gray-04-alpha: var(--rx-slate-04-alpha);
		      --lx-gray-05-alpha: var(--rx-slate-05-alpha);
		      --lx-gray-06-alpha: var(--rx-slate-06-alpha);
		      --lx-gray-07-alpha: var(--rx-slate-07-alpha);
		      --lx-gray-08-alpha: var(--rx-slate-08-alpha);
		      --lx-gray-09-alpha: var(--rx-slate-09-alpha);
		      --lx-gray-10-alpha: var(--rx-slate-10-alpha);
		      --lx-gray-11-alpha: var(--rx-slate-11-alpha);
		      --lx-gray-12-alpha: var(--rx-slate-12-alpha);
		      --ls-primary-background-color: var(--rx-slate-01);
		      --ls-secondary-background-color: var(--rx-slate-02);
		      --ls-tertiary-background-color: var(--rx-slate-03);
		      --ls-quaternary-background-color: var(--rx-slate-04);
		      --ls-link-text-color: var(--rx-blue-11);
		      --ls-link-text-hover-color: var(--rx-blue-12);
		      --ls-block-ref-link-text-color: var(--rx-blue-09);
		      --ls-secondary-text-color: var(--rx-slate-11);
		      --ls-primary-text-color: var(--rx-slate-12);
		      --ls-border-color: var(--rx-slate-05);
		      --ls-secondary-border-color: var(--rx-blue-05);
		      --ls-page-checkbox-color: var(--rx-slate-07);
		      --ls-selection-background-color: var(--rx-slate-04-alpha);
		      --ls-block-highlight-color: var(--rx-slate-04);
		      --ls-focus-ring-color: var(--rx-blue-09);
		      --ls-table-tr-even-background-color: var(--rx-slate-04);
		      --ls-page-properties-background-color: var(--rx-slate-04);
		      --ls-block-properties-background-color: var(--rx-slate-03);
		      --ls-page-inline-code-bg-color: var(--rx-slate-03);
		      --ls-cloze-text-color: var(--rx-blue-08);
		      --ls-wb-stroke-color-default: var(--rx-blue-07);
		      --ls-wb-background-color-default: var(--rx-blue-04);
		      --ls-wb-text-color-default: var(--rx-slate-12);
		      --ls-a-chosen-bg: var(--rx-slate-01)
		  }
		  ```
	- HSL colors
	  collapsed:: true
		- ```css
		  html[data-theme=dark] {
		      --accent: var(--rx-gray-12-hsl);
		      --accent-foreground: var(--rx-gray-02-hsl);
		      --primary-foreground: 0 0% 22%;
		      --background: 0 0% 11%;
		      --foreground: 0 0% 95%;
		      --card: 0 0% 11%;
		      --card-foreground: 0 0% 95%;
		      --secondary: 0 0% 20%;
		      --secondary-foreground: 0 0% 98%;
		      --border: 0 0% 16%;
		      --muted: 0 0% 15%;
		      --popover: 0 0% 7%;
		      --popover-foreground: 0 0 95%;
		      --input: 0 0% 25%
		  }
		  ```