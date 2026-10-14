"""
MBU Data Science Laboratory - Experiment 3B
Task: Data Transformation
Author: Tambali Sathvika (24102A030126)
Department of Data Science - Mohan Babu University
"""

import pandas as pd
import numpy as np

print("=" * 60)
print("EXPERIMENT 3B: DATA TRANSFORMATION (MAPPING, BINNING & SCALING)")
print("=" * 60)

# 1. Create sample dataset
data = {
    "StudentID": [101, 102, 103, 104, 105, 106],
    "Name": ["Ramesh", "Sita", "Kiran", "Meena", "Naresh", "Lata"],
    "Dept_Code": ["CS", "EC", "DS", "CS", "DS", "EC"],
    "Total_Marks": [62, 88, 94, 55, 78, 83]
}
df = pd.DataFrame(data)
print("--- [1] Initial DataFrame ---")
print(df)

# 2. Transformation 1: Categorical Mapping (.map)
dept_lookup = {
    "CS": "Computer Science & Engineering",
    "EC": "Electronics & Communication",
    "DS": "Data Science Department"
}
df["Department_Full"] = df["Dept_Code"].map(dept_lookup)
print("\n--- [2] Transformed Department Column via .map() ---")
print(df[["StudentID", "Dept_Code", "Department_Full"]])

# 3. Transformation 2: Discretization & Binning (pd.cut into Grades)
score_bins = [0, 60, 75, 90, 100]
grade_labels = ["Pass Grade", "Good Grade", "Very Good", "Distinction"]
df["Academic_Band"] = pd.cut(df["Total_Marks"], bins=score_bins, labels=grade_labels)
print("\n--- [3] Binned Academic Bands using pd.cut() ---")
print(df[["StudentID", "Total_Marks", "Academic_Band"]])

# 4. Transformation 3: Min-Max Feature Normalization [0.0, 1.0]
min_val = df["Total_Marks"].min()
max_val = df["Total_Marks"].max()
df["Normalized_Score"] = (df["Total_Marks"] - min_val) / (max_val - min_val)

print("\n--- [4] Normalized Numerical Features ---")
print(df[["StudentID", "Total_Marks", "Academic_Band", "Normalized_Score"]].round(3))
