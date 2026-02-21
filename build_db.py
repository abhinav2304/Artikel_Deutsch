import csv
import json
import os

def load_german_vocabulary(file_path):
    data = []
    if not os.path.exists(file_path):
        return data
    with open(file_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            article = row['Article'].strip().lower()
            noun = row['Noun'].strip()
            plural = row['Plural / Additional Info'].strip()
            # Try to guess English or leave blank (since this CSV doesn't have English)
            # Actually, the original text had English, but the python script we wrote didn't extract it.
            # We will use it for the Article Game only, where English is optional or we can provide the German noun.
            data.append({
                "article": article,
                "german": noun,
                "plural": plural,
                "english": "",
                "category": "General Vocabulary (L1-12)"
            })
    return data

def load_lektion_11(file_path):
    data = []
    if not os.path.exists(file_path):
        return data
    with open(file_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            german_full = row['German'].strip()
            english = row['English'].strip()
            
            # Extract article if present
            article = ""
            german = german_full
            plural = ""
            
            # Simple heuristic
            first_word = german_full.split()[0].lower()
            if first_word in ['der', 'die', 'das']:
                article = first_word
                rest = german_full[len(first_word):].strip()
                # Check for plural e.g., "Schuh,-e"
                if ',' in rest:
                    parts = rest.split(',', 1)
                    german = parts[0].strip()
                    plural = "," + parts[1].strip()
                else:
                    german = rest
                    
            data.append({
                "article": article,
                "german": german,
                "plural": plural,
                "english": english,
                "category": "Lektion 11 Notes"
            })
    return data

def main():
    base_dir = '/Users/abhinav/German_Artikels with genders'
    vocab_file = os.path.join(base_dir, 'german_vocabulary.csv')
    lektion_file = os.path.join(base_dir, 'lektion 11.csv')
    
    all_data = []
    all_data.extend(load_german_vocabulary(vocab_file))
    all_data.extend(load_lektion_11(lektion_file))
    
    # Filter out empty entries
    all_data = [d for d in all_data if d['german']]
    
    # Write to a JS file so index.html can load it without a server
    output_js = os.path.join(base_dir, 'german-learner', 'js', 'data.js')
    os.makedirs(os.path.dirname(output_js), exist_ok=True)
    
    with open(output_js, 'w', encoding='utf-8') as f:
        f.write("const vocabularyData = ")
        json.dump(all_data, f, ensure_ascii=False, indent=2)
        f.write(";\n")
        
    print(f"Successfully generated data.js with {len(all_data)} items.")

if __name__ == '__main__':
    main()
