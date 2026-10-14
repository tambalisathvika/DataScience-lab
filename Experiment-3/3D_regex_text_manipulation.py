"""
MBU Data Science Laboratory - Experiment 3D
Task: Regex for Text Manipulation
Author: Tambali Sathvika (24102A030126)
Department of Data Science - Mohan Babu University
"""

import re
import pandas as pd

print("=" * 60)
print("EXPERIMENT 3D: REGEX FOR TEXT MANIPULATION")
print("=" * 60)

# 1. Create dataset with noisy, unstructured text fields
noisy_records = {
    "RecordID": [1, 2, 3, 4],
    "Contact_Info": [
        "Sathvika T. - Phone: (0877) 223-4567, Email: sathvika.t@mbu.edu.in",
        "Pradyumna D. - Phone: +91-98765-43210, Email: pradyumna.d@gmail.com",
        "Babu S. - Phone: 9848022338 ext 402, Email: bosu.babu@university.ac.in",
        "Kavya R. - Phone: 040-66778899, Email: kavya_r99@outlook.com"
    ]
}

df = pd.DataFrame(noisy_records)
print("--- [1] Raw Noisy Text Observations ---")
print(df)

# 2. Extract Names using Regex
df["Extracted_Name"] = df["Contact_Info"].str.extract(r"^([A-Za-z\s.]+)-")

# 3. Extract Email Addresses using Regex
email_pattern = r"([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)"
df["Extracted_Email"] = df["Contact_Info"].str.extract(email_pattern)

# 4. Extract Email Domain Host
domain_pattern = r"@([a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)"
df["Email_Domain"] = df["Contact_Info"].str.extract(domain_pattern)

# 5. Extract and Standardize Phone Numbers (removing noisy non-digit characters)
def clean_phone(text):
    match = re.search(r"Phone:\s*([0-9+\-\(\)\s]+)", text)
    if match:
        raw_phone = match.group(1)
        # Extract only digits and leading plus
        digits_only = re.sub(r"[^0-9]", "", raw_phone)
        return digits_only
    return None

df["Normalized_Phone"] = df["Contact_Info"].apply(clean_phone)

# 6. Display Clean Extracted Features
print("\n--- [2] Clean Structured Features Extracted via Regex ---")
print(df[["RecordID", "Extracted_Name", "Extracted_Email", "Email_Domain", "Normalized_Phone"]])
