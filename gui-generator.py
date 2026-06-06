import os
import re
import shutil
import tkinter as tk
from tkinter import messagebox

# =========================
# GENERATE WEBSITE
# =========================
def generate_site():

    business_name = business_entry.get()
    city = city_entry.get()
    service = service_entry.get()
    phone = phone_entry.get()
    form_id = form_entry.get()

    # =========================
    # VALIDATION
    # =========================
    if not business_name:
        messagebox.showerror(
            "Error",
            "Business name is required"
        )
        return

    # =========================
    # SAFE FOLDER NAME
    # =========================
    folder_name = re.sub(r'[^a-z0-9\-]', '', business_name.lower().replace(' ', '-'))
    folder_name = re.sub(r'-+', '-', folder_name).strip('-')[:64]
    if not folder_name:
        messagebox.showerror("Error", "Business name produces an invalid folder name.")
        return

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
        messagebox.showerror(
            "Error",
            "Client folder already exists"
        )
        return

    # =========================
    # REPLACEMENTS
    # =========================
    replacements = {
        "{{BUSINESS_NAME}}": business_name,
        "{{CITY}}": city,
        "{{SERVICE}}": service,
        "{{PHONE}}": phone,
        "{{FORM_ID}}": form_id,
        "{{META_DESCRIPTION}}":
            f"Professional {service} in {city}. Call today for a free quote."
    }

    # =========================
    # FILES TO UPDATE
    # =========================
    files_to_update = [
        f"{client_dir}/index.html",
        f"{client_dir}/css/style.css",
        f"{client_dir}/js/script.js"
    ]

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
    messagebox.showinfo(
        "Success",
        f"Website generated successfully!\n\nLocation:\n{client_dir}"
    )

# =========================
# GUI SETUP
# =========================
root = tk.Tk()

root.title("PocketSod Site Generator")
root.geometry("500x450")
root.resizable(False, False)

# =========================
# TITLE
# =========================
title = tk.Label(
    root,
    text="PocketSod Site Generator",
    font=("Arial", 20, "bold")
)

title.pack(pady=20)

# =========================
# FORM FIELD HELPER
# =========================
def add_field(label_text):

    frame = tk.Frame(root)
    frame.pack(
        pady=5,
        padx=20,
        fill="x"
    )

    label = tk.Label(
        frame,
        text=label_text,
        anchor="w"
    )

    label.pack(fill="x")

    entry = tk.Entry(frame)

    entry.pack(
        fill="x",
        pady=5
    )

    return entry

# =========================
# FORM FIELDS
# =========================
business_entry = add_field("Business Name")
city_entry = add_field("City")
service_entry = add_field("Primary Service")
phone_entry = add_field("Phone Number")
form_entry = add_field("Formspree ID")

# =========================
# GENERATE BUTTON
# =========================
generate_button = tk.Button(
    root,
    text="Generate Website",
    command=generate_site,
    bg="#1C3A2C",
    fg="white",
    padx=10,
    pady=10,
    font=("Arial", 12, "bold")
)

generate_button.pack(pady=25)

# =========================
# RUN APP
# =========================
root.mainloop()