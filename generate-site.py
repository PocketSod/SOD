import os
import re
import shutil

# =========================
# CLIENT INPUT
# =========================
business_name = input("Business Name: ")
city = input("City: ")
service = input("Primary Service: ")
phone = input("Phone Number: ")
form_id = input("Formspree ID: ")

# =========================
# CREATE SAFE FOLDER NAME
# =========================
folder_name = re.sub(r'[^a-z0-9\-]', '', business_name.lower().replace(' ', '-'))
folder_name = re.sub(r'-+', '-', folder_name).strip('-')[:64]
if not folder_name:
    print("\n❌ Business name produces an invalid folder name.")
    exit()

# =========================
# PATHS
# =========================
template_dir = "template"
client_dir = f"clients/{folder_name}"

# =========================
# COPY TEMPLATE
# =========================
try:
    shutil.copytree(template_dir, client_dir)
except FileExistsError:
    print("\n❌ Client folder already exists.")
    exit()

# =========================
# FILES TO UPDATE
# =========================
files_to_update = [
    f"{client_dir}/index.html",
    f"{client_dir}/css/style.css",
    f"{client_dir}/js/script.js"
]

# =========================
# REPLACEMENTS
# =========================
replacements = {
    "{{BUSINESS_NAME}}": business_name,
    "{{CITY}}": city,
    "{{SERVICE}}": service,
    "{{PHONE}}": phone,
    "{{FORM_ID}}": form_id,
    "{{META_DESCRIPTION}}": f"Professional {service} in {city}. Call today for a free quote."
}

# =========================
# APPLY REPLACEMENTS
# =========================
for file_path in files_to_update:

    if os.path.exists(file_path):

        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()

        for key, value in replacements.items():
            content = content.replace(key, value)

        with open(file_path, "w", encoding="utf-8") as file:
            file.write(content)

# =========================
# SUCCESS
# =========================
print("\n✅ Website generated successfully!")
print(f"📁 Location: {client_dir}")