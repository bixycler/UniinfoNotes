- Description: This table show all commands with [[hotkey]] assigned and check for duplicates, using a  `dataviewjs` script ([[Dataview plugin]]) from [Obsidian forum](https://forum.obsidian.md/t/obsidian-commands-hotkeys-and-duplicate-hotkey-assignments/55193)

### Options

### Result

```dataviewjs
//// Optionally show duplicate keys
const showDuplicatedHotkeys = true


//// Define variations for the main table
let idColumn = true
const splitIdColumn = false   // Will affect idColumn
const nameColumn = true
let keysColumn = true
// Select if subsets are shown or not
const showDefaultKeys = true
const showCustomKeys = true
const showCommandsWithoutKeys = false
// Don't show keycolumn if no keys are actually shown
keysColumn = keysColumn && (showDefaultKeys || showCustomKeys)
const highlightCustomKeys = true
const OS = "Windows" // "MacOS"
const useSymbolsForModifiers = false  // Adapted for Mac symbols

/**********************
 * Sorting options:  *
   "cmdId"
   "cmdName"
   "moduleIdAndName"
   "moduleCmdName"
   "keys"
**********************/

/**********************
 * Sorting options:  *
   "id"       // module + cmdname
   "cmdname"  // only cmdname
   "fullname" // full descriptive name
   "keycount" // Keys defined for this command
   "keys"     // "character + modifiers" for first command
**********************/
const sort = "id"
const ascending = true

// Module/plugin options
const showAllModules = true  // With exception of those in excludedModules
let excludeModules = [
  'exclude-this-plugin',
] // Note it doesn't matter if there is a trailing comma in
  // either of these lists. So it's better to keep them in there
  // Add a line like above, for each plugin you want excluded 

// If not showing all modules, list the following (NB! Don't exclude any)
let includeModules = [
]

/********************************************
 * Some of the default modules in Obsidian **
  'editor',
  'app',
  'workspace',
  'theme',
  'markdown',
  'file-explorer',
  'window',
  'graph',
  'backlink',
  'canvas',
  'starred',
  'open-with-default-app',
  'global-search',
  'switcher',
  'outgoing-links',
  'daily-notes',
  'tag-pane',
  'note-composer',
  'command-palette',
  'outline',
  'file-recovery',
 *******************************************/


// Don't show idColumn if also splitting the ID, to avoid redundancy
idColumn = idColumn && !splitIdColumn


/******************************************************/
/** Collate lists of commands with keys              **/
/******************************************************/

let cmds = {}  // Holds all commands with keys used
let keys = {}  // Using the key combinations as key, list all assigned commands 

dv.array(Object.values(app.commands.commands))
  .forEach(cmd => {
    cmds[cmd.id] = { 
      id: cmd.id,
      moduleId: "",
      moduleCmdName: "", 
      name: cmd.name,
      defKeys: [],
      custKeys: [],
      keyCount: 0
    }

    const [ sId, sName ] = cmd.id.split(":")
    cmds[cmd.id].moduleId = sId
    cmds[cmd.id].moduleCmdName = sName
    
    // Collate default hotkeys for this command
    if ( cmd.hotkeys && cmd.hotkeys.length > 0 ) 
      cmds[cmd.id].defKeys = cmd.hotkeys
   
    // Collate custom hotkeys for this command
    let customKeys = app.hotkeyManager.customKeys[cmd.id]
    if ( customKeys && customKeys.length > 0 ) {
      cmds[cmd.id].defKeys = [] // Custom hotkeys override default keys
      cmds[cmd.id].custKeys = customKeys
    }

    // Add both type of keys to the keys-variable
    if ( cmds[cmd.id].defKeys.length > 0 ||
         cmds[cmd.id].custKeys.length > 0 )
      for (let aKey of [ ...cmds[cmd.id].defKeys, ...cmds[cmd.id].custKeys] ) {
        const keyCombo = joinModifiers(aKey.modifiers) + aKey.key
        if ( !( keyCombo in keys ) ) 
          keys[ keyCombo ]  = []

        keys[ keyCombo ].push(cmd.id)
        cmds[cmd.id].keyCount += 1
      }
}) // dv.array 


/******************************************************/
/** Check & show potential duplicated keys           **/
/******************************************************/
	
if ( showDuplicatedHotkeys ) {
  const duplicates = dv.array( Object.entries(keys) )
    .filter(k => k[1].length > 1)

  if ( duplicates.length > 0 ) {
    dv.header(2, "❌ Duplicates exists:")
    dv.table(["Key", "Command ID", "Command name"],
      duplicates
        .map(k => [k[0], k[1], k[1].map(i => cmds[i].name) ]) 
    )
  } else {
    dv.paragraph("✅ No duplicated keys.")
  }
}

/******************************************************/
/** Show the main table                              **/
/******************************************************/

// Show headers list
let headers = []
if (idColumn) headers.push("Command ID")
if (splitIdColumn) {
   headers.push("Module ID")
   headers.push("Module CmdName")
}
if (nameColumn) headers.push("Command name")
if (keysColumn) headers.push("Keys")

// Show table body
dv.table(headers,
    dv.array(Object.values(cmds))
 
      .filter(cmd => 
        (showDefaultKeys && cmd.defKeys.length > 0) ||
        (showCustomKeys && cmd.custKeys.length > 0 ) ||
        (showCommandsWithoutKeys && cmd.keyCount == 0) )
      .filter(cmd => {
        if ( showAllModules )
           return !excludeModules.includes(cmd.moduleId)
        else 
           return includeModules.includes(cmd.moduleId)
      })
      .sort( cmd => {
        if ( sort == "fullname" ) 
          return cmd.name
        if ( sort == "cmdname" )
          return cmd.moduleCmdName
        if ( sort == "keycount" )
          return cmd.keyCount
        if ( sort == "keys" )
          return sortkeys(cmds[cmd.id].defKeys, cmds[cmd.id].custKeys)
          
        return cmd.id }, ascending ? "asc" : "desc"
      ) /* */.map(cmd => {
        let columns = []
        if (idColumn) columns.push(cmd.id)
        if (splitIdColumn) {
          columns.push(cmd.moduleId)
          columns.push(cmd.moduleCmdName)
        }
        if (nameColumn) columns.push(cmd.name) 
        if (keysColumn) columns.push(hotkeys(cmd.defKeys, cmd.custKeys))
        return columns
      })
) // for dv.table




/******************************************************/
/** Some helper function                             **/
/******************************************************/
// Sort modifiers, and provide symbols if wanted
// NB! Needs changes if used on Windows, I reckon
function joinModifiers(modifiers) {
  const symbols = useSymbolsForModifiers
  let joined = modifiers.sort((a, b) => (a < b ? -1 : 1)).join(' ');
  if (OS == "Windows") {
	  joined = joined
		  .replace('Mod', symbols ? '⌘' : 'Ctrl')
  } else if (OS == "MacOS") {
	  joined = joined
		  .replace('Mod', symbols ? '⌘' : 'CMD')
		  .replace('Alt', symbols ? '⌥' : 'OPT')
		  .replace('Ctrl', symbols ? '⌃' : 'CTRL')
		  .replace('Shift', symbols ? '⇧' : 'SHIFT')
  }
  joined += (modifiers.length > 0 ? ' ' : '')
  return joined;
}


function hotkeys(defKeys, custKeys) {
  let keys = []
  if ( showDefaultKeys )
    for (let aKey of defKeys)
      keys.push( joinModifiers(aKey.modifiers) + (aKey.key == ' ' ? 'Space' : aKey.key ) )

  if ( showCustomKeys )
    for (let aKey of custKeys)
      keys.push(
        ( highlightCustomKeys ? "==" : "" ) +         
        joinModifiers(aKey.modifiers) + (aKey.key == ' ' ? 'Space' : aKey.key ) +
        ( highlightCustomKeys ? "==" : "" ) 
    )

  return keys.join("<br />")
}

function sortkeys(defKeys, custKeys) {
  const sortlist = []
  if ( showDefaultKeys ) 
    sortlist.push(...defKeys)

  if ( showCustomKeys )
    sortlist.push(...custKeys)

  return sortlist.map(m => m.key + joinModifiers(m.modifiers)).join(":")
}
```

---- 


### Custom hotkeys

- [[foldable|Folding]] text blocks in editor: 
	- `Ctrl` [`Shift`] `↑`/`↓` to fold/unfold [all] text.
	- `Ctrl` `.` to toggle fold/unfold of current line.
- Move to folder: `Ctrl` `M` 
	- Ideally when creating new note (`Ctrl` `N` ), [[Obsidian]] should ask or default to the same folder of current note.