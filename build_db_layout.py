import os
import re
import json

def parse_layout_file(filepath):
    vocab = []
    
    with open(filepath, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.rstrip() # keep leading spaces if any, though English starts at column 0 usually
            if not line:
                continue
            
            # Split by 3 or more spaces
            parts = [p.strip() for p in re.split(r'\s{3,}', line) if p.strip()]
            
            # We are looking for lines where the LAST part starts with der, die, or das
            if not parts:
                continue
                
            german_part = parts[-1]
            match = re.match(r'^(der|die|das)\s+(.*)', german_part, re.IGNORECASE)
            
            if match:
                article = match.group(1).lower()
                noun_plural = match.group(2)
                
                # Noun and plural
                np_split = noun_plural.split(',', 1)
                german = np_split[0].strip()
                plural = "," + np_split[1].strip() if len(np_split) > 1 else ""
                
                english = ""
                # If there are 2 or more parts, the first part is English usually
                if len(parts) >= 2:
                    english = parts[0]
                    # Clean up things like (m), (f), (n)
                    english = re.sub(r'\s*\([mfn]\)', '', english)
                    
                vocab.append({
                    "article": article,
                    "german": german,
                    "plural": plural,
                    "english": english,
                    "category": "General Vocabulary"
                })
    return vocab

def main():
    base_dir = '/Users/abhinav/German_Artikels with genders'
    layout1 = os.path.join(base_dir, 'German_L1_L8_layout.txt')
    layout2 = os.path.join(base_dir, 'German_L9_L12_layout.txt')
    
    all_data = []
    all_data.extend(parse_layout_file(layout1))
    all_data.extend(parse_layout_file(layout2))
    
    # Also load Lektion 11
    import csv
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
                        
                all_data.append({
                    "article": article,
                    "german": german,
                    "plural": plural,
                    "english": english,
                    "category": "Lektion 11 Notes"
                })
                
    # Filter out empty or broken entries
    all_data = [d for d in all_data if d['german']]
    
    # Write to data.js
    output_js = os.path.join(base_dir, 'german-learner', 'js', 'data.js')
    
    with open(output_js, 'w', encoding='utf-8') as f:
        f.write("const vocabularyData = ")
        json.dump(all_data, f, ensure_ascii=False, indent=2)
        f.write(";\n")
        
    print(f"Successfully generated data.js with {len(all_data)} items, WITH English translations!")

if __name__ == '__main__':
    main()
