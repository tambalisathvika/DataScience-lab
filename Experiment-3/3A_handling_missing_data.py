"""
MBU Data Science Laboratory - Experiment 3A
Task: Handling Missing Data
Author: Tambali Sathvika (24102A030126)
Department of Data Science - Mohan Babu University
"""

import numpy as np
import pandas as pd

print("=" * 60)
print("EXPERIMENT 3A: HANDLING MISSING DATA (DROPNA & FILLNA)")
print("=" * 60)

# 1. Create dataset with intentional Missing (NaN / None) values
raw_data = {
    "StudentID": [101, 102, 103, 104, 105, 106, 107],
    "StudentName": ["Aarav", "Bhavna", "Chirag", "Divya", "Eshwar", "Farzana", "Girish"],
    "Department": ["CSE", "ECE", "CSE", np.nan, "Data Science", "ECE", "Data Science"],
    "Mid1_Marks": [22.0, 18.0, np.nan, 24.0, 20.0, np.nan, 25.0],
    "Mid2_Marks": [24.0, np.nan, 19.0, 23.0, 22.0, 21.0, 24.0],
    "AttendancePct": [92.0, 85.0, 78.0, np.nan, 95.0, 88.0, 96.0]
}

df = pd.DataFrame(raw_data)
print("--- [1] Original Raw DataFrame with Missing Values ---")
print(df)

# 2. Detecting Missing Data
print("\n--- [2] Missing Values Count per Feature ---")
print(df.isnull().sum())

# 3. Strategy A: Drop rows where critical identifiers are NaN
df_dropped = df.dropna(subset=["Department"])
print(f"\n--- [3] DataFrame after dropping null departments ({len(df_dropped)} remaining) ---")

# 4. Strategy B: Impute numerical columns with Mean / Median
mean_mid1 = df["Mid1_Marks"].mean()
mean_mid2 = df["Mid2_Marks"].mean()
mean_att = df["AttendancePct"].mean()

df_imputed = df.copy()
df_imputed["Mid1_Marks"] = df_imputed["Mid1_Marks"].fillna(mean_mid1)
df_imputed["Mid2_Marks"] = df_imputed["Mid2_Marks"].fillna(mean_mid2)
df_imputed["AttendancePct"] = df_imputed["AttendancePct"].fillna(mean_att)

# 5. Impute Categorical feature with Mode
mode_dept = df["Department"].mode()[0]
df_imputed["Department"] = df_imputed["Department"].fillna(mode_dept)

print("\n--- [4] Clean DataFrame after Statistical Imputation ---")
print(df_imputed.round(2))
print("\nVerification of Nulls Remaining:")
print(f"Total nulls in cleaned data: {df_imputed.isnull().sum().sum()}")
