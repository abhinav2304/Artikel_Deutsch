import os
import re
import json
import csv

def parse_layout_file(filepath, default_lektion="General Vocab", default_sub=""):
    vocab = []
    current_lektion = default_lektion
    current_subcategory = default_sub
    
    with open(filepath, 'r', encoding='utf-8') as f:
        all_lines = [(line.rstrip(), line.strip()) for line in f if line.strip()]
        
    for i, (raw_line, line_str) in enumerate(all_lines):
        
        # Check for Lektion header
        lektion_match = re.search(r'Lektion\s+\d+[:\s]+(.*)', line_str)
        if line_str.startswith('Lektion') and lektion_match:
            current_lektion = line_str
            current_subcategory = "" # reset
            continue
        elif line_str.startswith('Lektion '):
            current_lektion = line_str
            current_subcategory = "" # reset
            continue
            
        # Split by 3 or more spaces
        parts = [p.strip() for p in re.split(r'\s{3,}', raw_line) if p.strip()]
        
        if not parts:
            continue
            
        # Check for subcategory: no indentation, and only 1 part
        if not raw_line.startswith(' ') and len(parts) == 1:
            val = parts[0]
            if val.startswith("Lektion") or "German Vocabulary" in val or "Answer Key" in val or "English Meaning" in val:
                pass
            elif re.match(r'^\d+$', val):
                pass
            elif len(val) > 1:
                current_subcategory = val
                continue
                
        german_part = parts[-1]
        
        # Ignore things that are obviously page numbers or stray headers
        if german_part in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']:
            continue
        if german_part == 'German (Article + Word + Plural)':
            continue
            
        article = ""
        german = german_part
        plural = ""
        
        match = re.match(r'^(der|die|das)\s+(.*)', german_part, re.IGNORECASE)
        if match:
            article = match.group(1).lower()
            noun_plural = match.group(2)
            np_split = noun_plural.split(',', 1)
            german = np_split[0].strip()
            plural = "," + np_split[1].strip() if len(np_split) > 1 else ""
            
        english = ""
        if len(parts) >= 2:
            english = parts[0]
            english = re.sub(r'\s*\([mfn]\)', '', english)
            
        category_name = current_lektion
        if current_subcategory and current_subcategory != current_lektion:
            category_name = f"{current_lektion} - {current_subcategory}"
            
        # Ensure we don't accidentally add "sich vorstellen" as a vocab word if it slipped through
        # but handled by the subcategory check.
        if german == english and current_subcategory == german:
            continue
            
        vocab.append({
            "article": article,
            "german": german,
            "plural": plural,
            "english": english,
            "category": category_name
        })
        
    return vocab

def main():
    base_dir = '/Users/abhinav/German_Artikels with genders'
    layout1 = os.path.join(base_dir, 'German_L1_L8_layout.txt')
    layout2 = os.path.join(base_dir, 'German_L9_L12_layout.txt')
    
    all_data = []
    
    # Parse PDF layout files
    if os.path.exists(layout1):
        all_data.extend(parse_layout_file(layout1, "Lektion 1: Kennenlernen"))
    if os.path.exists(layout2):
        all_data.extend(parse_layout_file(layout2, "Lektion 9: Wohnen"))
    
    # --- Lektion 11 Subcategories logic ---
    word_to_sub = {}
    md_file = os.path.join(base_dir, 'lektion 11.md')
    if os.path.exists(md_file):
        current_md_sub = ""
        with open(md_file, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line.startswith('###'):
                    current_md_sub = line.strip('# ')
                    if '(' in current_md_sub and ')' in current_md_sub:
                        current_md_sub = current_md_sub.split('(')[1].split(')')[0]
                elif line.startswith('*'):
                    item = line.strip('* ').strip()
                    word_to_sub[item] = current_md_sub
                    
    # Load Lektion 11 from user's manual image CSV
    lektion11_data = []
    lektion_file = os.path.join(base_dir, 'lektion 11.csv')
    if os.path.exists(lektion_file):
        with open(lektion_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                german_full = row['German'].strip()
                english = row['English'].strip()
                
                article = ""
                german = german_full
                plural = ""
                
                first_word = german_full.split()[0].lower()
                if first_word in ['der', 'die', 'das']:
                    article = first_word
                    rest = german_full[len(first_word):].strip()
                    if ',' in rest:
                        parts = rest.split(',', 1)
                        german = parts[0].strip()
                        plural = "," + parts[1].strip()
                    else:
                        german = rest
                
                subcat = "Handwritten Notes"
                if german_full in word_to_sub:
                    subcat = word_to_sub[german_full]
                elif english in word_to_sub:
                    subcat = word_to_sub[english]
                elif german in word_to_sub:
                    subcat = word_to_sub[german]
                
                cat_name = f"Lektion 11: Handwritten Notes - {subcat}" if subcat else "Lektion 11: Handwritten Notes"
                
                lektion11_data.append({
                    "article": article,
                    "german": german,
                    "plural": plural,
                    "english": english,
                    "category": cat_name
                })
                
    # Filter empty german and duplicates between PDF Lektion 11 and Handwritten Lektion 11 if possible?
    # Actually, Lektion 11 in handwritten is probably preferred. But we'll keep both and label them clearly so the user can see.
    all_data = [d for d in all_data if d['german']]
    lektion11_data = [d for d in lektion11_data if d['german']]

    # We need to sort them so Lektion 1-10 come first, then Lektion 11 (PDF), then Lektion 11 (Handwritten), then Lektion 12.
    def get_lektion_num(item):
        cat = item.get('category', '')
        m = re.search(r'Lektion\s+(\d+)', cat)
        if m:
            num = int(m.group(1))
            if "Handwritten" in cat:
                return num + 0.1
            return float(num)
        return 999.0
        
    combined = all_data + lektion11_data
    combined.sort(key=get_lektion_num)

    output_js = os.path.join(base_dir, 'german-learner', 'js', 'data.js')
    with open(output_js, 'w', encoding='utf-8') as f:
        f.write("const vocabularyData = ")
        json.dump(combined, f, ensure_ascii=False, indent=2)
        f.write(";\n")
        
    print(f"Successfully generated data.js categorized by Lektion with {len(combined)} items.")

if __name__ == '__main__':
    main()
