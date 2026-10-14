"""
MBU Data Science Laboratory - Experiment 1A
Task: Perform read & write data in text format (CSV / Plain Delimited Text)
Author: Tambali Sathvika (24102A030126)
Department of Data Science - Mohan Babu University
"""

import pandas as pd
import io

print("=" * 60)
print("EXPERIMENT 1A: READ & WRITE DATA IN TEXT FORMAT (CSV / TXT)")
print("=" * 60)

# 1. Create in-memory sample text data (CSV format)
csv_raw_data = """StudentID,StudentName,Department,CGPA,AttendancePct
101,Aarav Sharma,Data Science,8.92,94.5
102,Diya Reddy,Data Science,9.15,96.0
103,Rohan Verma,Computer Science,7.85,88.0
104,Ananya Patel,Electronics,8.40,91.5
105,Siddharth Rao,Data Science,9.50,98.2
"""

# 2. Writing text data to physical file
filename = "student_records.csv"
with open(filename, "w", encoding="utf-8") as f:
    f.write(csv_raw_data)
print(f"[+] Successfully wrote raw text records to '{filename}'.")

# 3. Reading structured data back using pandas read_csv()
df = pd.read_csv(filename, delimiter=",", header=0)
print("\n--- Loaded DataFrame from CSV File ---")
print(df)

# 4. DataFrame Metadata and Slicing
print("\n--- DataFrame Information & Schema ---")
print(f"Shape (Rows, Columns): {df.shape}")
print(f"Column Names: {list(df.columns)}")
print(f"Data Types:\n{df.dtypes}")

# Compute summary metrics
mean_gpa = df["CGPA"].mean()
print(f"\nClass Average CGPA: {mean_gpa:.2f}")

# 5. Exporting processed/filtered records back to text file (tab-delimited)
output_tsv = "high_achievers.tsv"
high_achievers = df[df["CGPA"] >= 8.5]
high_achievers.to_csv(output_tsv, sep="\t", index=False)
print(f"[+] Exported high achievers ({len(high_achievers)} students) to tab-delimited '{output_tsv}'.")
