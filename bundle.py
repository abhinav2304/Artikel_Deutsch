import os

def bundle_app():
    base_dir = '/Users/abhinav/German_Artikels with genders/german-learner'
    
    html_file = os.path.join(base_dir, 'index.html')
    css_file = os.path.join(base_dir, 'css', 'style.css')
    data_file = os.path.join(base_dir, 'js', 'data.js')
    app_file = os.path.join(base_dir, 'js', 'app.js')
    
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()
        
    with open(css_file, 'r', encoding='utf-8') as f:
        css_content = f.read()
        
    with open(data_file, 'r', encoding='utf-8') as f:
        data_content = f.read()
        
    with open(app_file, 'r', encoding='utf-8') as f:
        app_content = f.read()

    # Create the standalone HTML structure
    # Replace external links with inline styles and scripts
    
    # 1. Replace the CSS link with a <style> tag
    css_link_tag = '<link rel="stylesheet" href="css/style.css">'
    inline_css = f'<style>\n{css_content}\n</style>'
    html_content = html_content.replace(css_link_tag, inline_css)
    
    # 2. Replace the JS script tags with <script> tags
    data_script_tag = '<script src="js/data.js"></script>'
    app_script_tag = '<script src="js/app.js"></script>'
    
    inline_js = f'<script>\n{data_content}\n{app_content}\n</script>'
    
    html_content = html_content.replace(data_script_tag, '')
    html_content = html_content.replace(app_script_tag, inline_js)

    output_file = '/Users/abhinav/German_Artikels with genders/german_learning_app.html'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html_content)
        
    print(f"Successfully created standalone app: {output_file}")

if __name__ == '__main__':
    bundle_app()
