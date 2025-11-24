import re
import os

def load_namespace(namespace_path):
    """Parses Namespace.md to create a UUID -> Text mapping."""
    mapping = {}
    try:
        with open(namespace_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        current_text = None
        
        for i, line in enumerate(lines):
            line = line.strip()
            if not line:
                continue
                
            # Check for id:: 
            id_match = re.search(r'id::\s*([0-9a-fA-F-]{36})', line)
            
            text_part = line
            if id_match:
                uuid = id_match.group(1)
                text_part = line.replace(id_match.group(0), '').strip()
                
                if text_part and text_part != '-':
                    clean_text = re.sub(r'^(\t*|- )+', '', text_part).strip()
                    mapping[uuid] = clean_text
                elif current_text:
                    mapping[uuid] = current_text
            else:
                clean_text = re.sub(r'^(\t*|- )+', '', line).strip()
                if not clean_text.startswith('collapsed::') and not clean_text.startswith(':LOGBOOK:') and not clean_text.startswith('CLOCK:') and not clean_text.startswith(':END:'):
                     current_text = clean_text
                     
    except Exception as e:
        print(f"Error reading namespace: {e}")
        return {}
        
    return mapping

def index_internal_blocks(file_path):
    """Indexes all blocks in the file to map UUID -> First Line (Title)."""
    block_index = {}
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        # We need to find the UUID of a block and associate it with the block's content (usually the line before or same line)
        # Logseq format: 
        # - Block Content
        #   id:: uuid
        
        # Or:
        # - Block Content id:: uuid
        
        last_content_line = ""
        
        for line in lines:
            stripped = line.strip()
            
            # Capture content lines (ignoring properties for now)
            if stripped.startswith('- '):
                # Remove bullet
                content = stripped[2:].strip()
                # Check if id is inline
                id_match = re.search(r'id::\s*([0-9a-fA-F-]{36})', content)
                if id_match:
                    uuid = id_match.group(1)
                    # Content is everything before the id::
                    title = content.replace(id_match.group(0), '').strip()
                    block_index[uuid] = title
                    last_content_line = title # Update last content just in case
                else:
                    last_content_line = content
            
            elif stripped.startswith('id::'):
                # Property block, associates with previous content line
                uuid = stripped[4:].strip()
                if last_content_line:
                     block_index[uuid] = last_content_line
            
            # If it's a property line like collapsed::, ignore
            # If it's a sub-block, it will start with tab or spaces then - 
            elif re.match(r'^\s+- ', line):
                # Indented block
                content = re.sub(r'^\s+- ', '', line).strip()
                id_match = re.search(r'id::\s*([0-9a-fA-F-]{36})', content)
                if id_match:
                    uuid = id_match.group(1)
                    title = content.replace(id_match.group(0), '').strip()
                    block_index[uuid] = title
                    last_content_line = title
                else:
                    last_content_line = content
            elif re.match(r'^\s+id::', line):
                 # Indented property
                 uuid = re.sub(r'^\s+id::\s*', '', line).strip()
                 if last_content_line:
                     block_index[uuid] = last_content_line

    except Exception as e:
        print(f"Error indexing blocks: {e}")
        
    return block_index

def preprocess_graph(input_path, output_path, namespace_map, block_index):
    """Transforms the graph content."""
    try:
        with open(input_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        def replace_ref(match):
            uuid = match.group(1)
            
            # 1. Check Namespace (External)
            if uuid in namespace_map:
                return f"[{namespace_map[uuid]}]"
            
            # 2. Check Internal Index
            if uuid in block_index:
                title = block_index[uuid]
                # Escape quotes in title if necessary
                title = title.replace('"', '\\"')
                return f'[]((({uuid}) "{title}"))'
            
            # 3. Unknown
            return match.group(0)

        # Regex for ((uuid))
        # Note: We need to be careful not to double-replace if it's already in a link format [text](((uuid)))
        # But the user said "Other untitled blocks have already been linked with [summary](((UUID))) syntax."
        # So we should target bare ((uuid)) or ones where we want to inject the title.
        
        # Simple approach: Replace all ((uuid)) that are NOT part of a complex structure?
        # Actually, the user wants to see the title.
        # If it's `((uuid))`, transform to `[](((uuid)) "title")`
        
        resolved_content = re.sub(r'\(\(([0-9a-fA-F-]{36})\)\)', replace_ref, content)
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
            
        print(f"Successfully created {output_path}")
        
    except Exception as e:
        print(f"Error preprocessing: {e}")

if __name__ == "__main__":
    base_dir = "/home/dinhlx/source/UniinfoNotes/pages"
    namespace_file = os.path.join(base_dir, "Namespace.md")
    input_file = os.path.join(base_dir, "Mind Jungle.md")
    output_file = "/tmp/Mind_Jungle_Context.md"
    
    print("Loading namespace...")
    ns_map = load_namespace(namespace_file)
    print(f"Loaded {len(ns_map)} external definitions.")
    
    print("Indexing internal blocks...")
    blk_index = index_internal_blocks(input_file)
    print(f"Indexed {len(blk_index)} internal blocks.")
    
    print("Preprocessing graph...")
    preprocess_graph(input_file, output_file, ns_map, blk_index)
