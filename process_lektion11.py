import csv

def process_markdown_file(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = [line.strip() for line in f if line.strip()]

    data = []
    current_category = ""
    german_items = []
    english_items = []

    # Simple heuristic: German words usually start with der/die/das or are capitalized verbs/adjectives
    # But from the input format, they are mixed. Let's try to parse based on the fact that 
    # German items have articles, plurals (,-), or end with verbs (en). 
    # Looking at the data, it's a mix. A better way for this specific structure:
    # Read all bullets in a section.
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    sections = content.split('---')
    
    for section in sections:
        section = section.strip()
        if not section:
            continue
            
        lines = section.split('\n')
        category = ""
        items = []
        for line in lines:
            if line.startswith('###'):
                category = line.replace('###', '').strip()
            elif line.startswith('*'):
                items.append(line.replace('*', '').strip())
                
        # the items are a mix. Let's just output them directly, or try to pair them?
        # The prompt asks to "still this all into one file and name it lektion 11.csv".
        # Let's just create a CSV with the raw list first, maybe categorized.
        # It's hard to accurately pair them automatically because the order isn't strictly German -> English.
        # But looking closely at the first block:
        # der Schuh,-e, die Bluse,-n, dress, boot, blouse... It's all scrambled.
        # Let's just output a single column CSV or a structural CSV.
        for item in items:
            data.append({"Category": category, "Item": item})

    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['Category', 'Item'])
        writer.writeheader()
        writer.writerows(data)

process_markdown_file('lektion 11.md', 'lektion 11.csv')
