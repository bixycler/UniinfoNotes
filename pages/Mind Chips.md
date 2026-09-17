- Aperas dev
  collapsed:: true
	- Your profile: claude
	  Let's design the webapp.
		- It supports deep read with shallow write (only to update the current node) based on TreeView (a dropdown menu to chose view on top + `FolderDiv` component). The deep write will be delegated to the Agent. Let's port the vanilla @/home/dinhlx/source/UniinfoNotes/assets/HTML/FolderDiv.js to a Solid component in @web (see FolderDiv.html).
		- Links: Show preview both after the children (like what `tree --view` shows) and on hover over the link text. The 2 have control to jump between them just like endnotes in Wikipedia.
		- Fold/unfold: Use the arrow handle of `FolderDiv` component for both children and links after them. For link text hover, show a control to unfold it.
		- Zoom in: Ctrl-click the arrow handle of `FolderDiv` component.
		- Zoom out: Clicking on a breadcrumb on the top to zoom out to that node.
	- etc
		- The issue of checkbox: Let's use this case to gauge how many steps you do to find it and its complicated history of back and forth. 
		  > content landing on a tombstoned id, invisible, while the summary reports a clean match
		  
		  It's obviously not this one.
	- Linking
		- What's the conversion of address for? What's the form of address in Apeiron?
- ---
- 🤔😊😁 😉 😮 😛 🤪 😜 🤣 🙁 😱 👺 👁️🧿🪬  – × → ← ↓ ⇒ ⇋ ⇄ ∞∝α ‘’ ≈ ≥
- Ω-thread Unïnfo —