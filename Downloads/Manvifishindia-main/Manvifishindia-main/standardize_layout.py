
import os
import re

# Configuration
PARTIALS_DIR = 'partials'
HEADER_FILE = os.path.join(PARTIALS_DIR, 'header.html')
FOOTER_FILE = os.path.join(PARTIALS_DIR, 'footer.html')

EXCLUDED_FILES = [
    'style-guide.html',
    'partials', # Skip the partials directory
    'index_backup.html' # Skip backup
]

# We need to exclude the partials directory from processing
TARGET_DIR = '.'

def read_file(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Error reading {path}: {e}")
        return None

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def clean_active_classes(html_content):
    def remove_active(match):
        attrs = match.group(1)
        if 'active' in attrs:
            new_attrs = re.sub(r'\bactive\b', '', attrs).strip()
            new_attrs = re.sub(r'\s+', ' ', new_attrs)
            return f'class="{new_attrs}"'
        return match.group(0)

    cleaned = re.sub(r'class="([^"]*)"', remove_active, html_content)
    cleaned = re.sub(r"class='([^']*)'", remove_active, cleaned)
    return cleaned

def set_active_link(header_content, filename):
    basename = os.path.basename(filename)
    
    # Simple regex to find the link to the current page
    pattern = re.compile(r'(<li[^>]*)(>\s*<a\s+[^>]*href=["\']' + re.escape(basename) + r'["\'])', re.IGNORECASE)
    
    match = pattern.search(header_content)
    final_header = header_content
    
    if match:
        li_start = match.group(1)
        rest = match.group(2)
        
        if 'class="' in li_start:
            new_li = re.sub(r'class="([^"]*)"', r'class="\1 active"', li_start)
        elif "class='" in li_start:
            new_li = re.sub(r"class='([^']*)'", r"class='\1 active'", li_start)
        else:
            new_li = li_start.replace('<li', '<li class="active"')
            
        final_header = final_header.replace(match.group(0), new_li + rest)
        
        # Service pages handling
        service_pages = [
            'Fish Farming.html', 'quail-farming.html', 'duck-poultry-farming.html',
            'egg-production.html', 'feed-production-optimization.html', 'eco-farming-manure.html',
            'veterinary-health-management.html', 'education.html', 'kadaknath-chicken-rearing.html',
            'purchasing-fish-from-farmers.html', 'restaurant-business.html', 'spices-pulses.html',
            'chilli-onion-garlic.html', 'potato-seeds.html', 'pickle-production.html',
            'earthworm-manure.html', 'milk-work.html', 'animal-husbandry.html', 'fish-egg-solution.html',
            'services.html' # services.html itself
        ]
        
        if basename in service_pages:
             ser_pattern = re.compile(r'(<li[^>]*dropdown[^>]*)(>\s*<a\s+[^>]*href=["\']services\.html)', re.IGNORECASE)
             ser_match = ser_pattern.search(final_header)
             if ser_match:
                 s_li = ser_match.group(1)
                 s_rest = ser_match.group(2)
                 if 'active' not in s_li:
                     s_new_li = re.sub(r'class="([^"]*)"', r'class="\1 active"', s_li)
                     final_header = final_header.replace(ser_match.group(0), s_new_li + s_rest)
                     
        # More pages handling
        more_pages = ['contact.html', 'hr.html']
        if basename in more_pages:
             more_pattern = re.compile(r'(<li[^>]*dropdown[^>]*)(>\s*<a\s+[^>]*href=["\']#["\'][^>]*>More</a>)', re.IGNORECASE)
             more_match = more_pattern.search(final_header)
             if more_match:
                 m_li = more_match.group(1)
                 m_rest = more_match.group(2)
                 if 'active' not in m_li:
                     m_new_li = re.sub(r'class="([^"]*)"', r'class="\1 active"', m_li)
                     final_header = final_header.replace(more_match.group(0), m_new_li + m_rest)
                     
    return final_header

def process_files():
    print("Reading partials...")
    header_template = read_file(HEADER_FILE)
    footer_template = read_file(FOOTER_FILE)
    
    if not header_template or not footer_template:
        print("Could not read header or footer partials. Exiting.")
        return

    # Clean the header template of any active classes
    clean_header = clean_active_classes(header_template)

    print("Processing files...")
    count = 0
    for filename in os.listdir(TARGET_DIR):
        if not filename.endswith('.html'):
            continue
            
        if filename in EXCLUDED_FILES:
            print(f"Skipping excluded file: {filename}")
            continue
            
        print(f"Updating {filename}...")
        file_path = os.path.join(TARGET_DIR, filename)
        content = read_file(file_path)
        if not content: continue
        
        # 1. Identify valid header start
        target_header_start = -1
        starts = ['<!-- Start Header Top', '<div class="top-bar-area', '<header']
        for s in starts:
            idx = content.find(s)
            if idx != -1:
                target_header_start = idx
                break
        
        # 2. Identify header end
        target_header_end = -1
        ends = ['<!-- End Header -->', '</header>']
        for e in ends:
            idx = content.find(e)
            if idx != -1:
                target_header_end = idx + len(e)
                break
                
        # 3. Identify footer start
        target_footer_start = content.find('<footer')
        
        if target_header_start != -1 and target_header_end != -1 and target_footer_start != -1:
             # Prepare Custom Header
             new_header = set_active_link(clean_header, filename)
             
             # Slice and Dice
             part_before_header = content[:target_header_start]
             part_body = content[target_header_end:target_footer_start]
             
             # Assemble
             # Note: footer_template should handle the rest of the file appropriately
             # But wait, original files might have </body></html> or other scripts after footer?
             # My partial footer.html ends with </html>? No.
             # Let's check footer.html content.
             # It likely contains </footer> ... <script> ... </body></html>
             # If so, we just replace from <footer... to end.
             
             new_content = part_before_header + new_header + part_body + footer_template
             
             write_file(file_path, new_content)
             count += 1
        else:
            print(f"Skipping {filename}: Structure not found.")

    print(f"Done. Updated {count} files.")

if __name__ == "__main__":
    process_files()
