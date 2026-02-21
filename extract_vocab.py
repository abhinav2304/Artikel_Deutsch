import sys
import re
import csv
import glob

def main():
    txt_files = glob.glob("German*.txt")
    output_csv = "german_vocabulary.csv"
    
    rows = []
    
    # Regex to match lines starting with der, die, or das followed by space
    # Example: "der Name, -n" or "die E-Mail-Adresse, -n"
    pattern = re.compile(r'^\s*(der|die|das)\s+(.*)', re.IGNORECASE)
    
    for filename in txt_files:
        with open(filename, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                match = pattern.match(line)
                if match:
                    article = match.group(1).lower()
                    rest_of_word = match.group(2)
                    
                    # Split noun and plural if separated by comma
                    parts = rest_of_word.split(',', 1)
                    noun = parts[0].strip()
                    plural = parts[1].strip() if len(parts) > 1 else ""
                    
                    rows.append({
                        'Article': article,
                        'Noun': noun,
                        'Plural / Additional Info': plural
                    })
    
    with open(output_csv, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['Article', 'Noun', 'Plural / Additional Info'])
        writer.writeheader()
        writer.writerows(rows)
        
    print(f"Successfully extracted {len(rows)} vocabulary items to {output_csv}")

if __name__ == "__main__":
    main()
