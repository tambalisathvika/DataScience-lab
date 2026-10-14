"""
MBU Data Science Laboratory - Experiment 1B
Task: Perform read & write data in JSON format
Author: Tambali Sathvika (24102A030126)
Department of Data Science - Mohan Babu University
"""

import json
import pandas as pd

print("=" * 60)
print("EXPERIMENT 1B: READ & WRITE DATA IN JSON FORMAT")
print("=" * 60)

# 1. Hierarchical JSON dataset definition
students_json_payload = [
    {
        "id": "DS201",
        "name": "Kavya Murthy",
        "branch": "Data Science",
        "scores": {"Mid1": 24, "Mid2": 23, "Lab": 48},
        "skills": ["Python", "Machine Learning", "Pandas"]
    },
    {
        "id": "DS202",
        "name": "Nikhil Chowdary",
        "branch": "Data Science",
        "scores": {"Mid1": 22, "Mid2": 25, "Lab": 46},
        "skills": ["Python", "SQL", "Tableau"]
    },
    {
        "id": "DS203",
        "name": "Pooja Sundaram",
        "branch": "Artificial Intelligence",
        "scores": {"Mid1": 25, "Mid2": 24, "Lab": 50},
        "skills": ["Python", "Deep Learning", "PyTorch"]
    }
]

# 2. Writing JSON to disk with standard indentation
json_file = "students_data.json"
with open(json_file, "w", encoding="utf-8") as f:
    json.dump(students_json_payload, f, indent=4)
print(f"[+] Serialized hierarchical JSON object to '{json_file}'.")

# 3. Reading and Parsing JSON with Pandas
df_json = pd.read_json(json_file, orient="records")
print("\n--- Raw DataFrame Read from JSON ---")
print(df_json)

# 4. Flattening nested JSON attributes using json_normalize
with open(json_file, "r", encoding="utf-8") as f:
    raw_data = json.load(f)

df_normalized = pd.json_normalize(raw_data)
print("\n--- Flattened & Normalized Tabular Representation ---")
print(df_normalized)

# 5. Serializing DataFrame back to JSON string (split & records format)
json_output = df_normalized.to_json(orient="records", indent=2)
print("\n--- Exported JSON Representation (Records Format) ---")
print(json_output[:300] + "\n...")
