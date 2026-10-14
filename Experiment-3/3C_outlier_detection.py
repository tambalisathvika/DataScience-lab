"""
MBU Data Science Laboratory - Experiment 3C
Task: Outlier Detection
Author: Tambali Sathvika (24102A030126)
Department of Data Science - Mohan Babu University
"""

import numpy as np
import pandas as pd

print("=" * 60)
print("EXPERIMENT 3C: OUTLIER DETECTION USING INTERQUARTILE RANGE (IQR)")
print("=" * 60)

# 1. Dataset containing valid scores and extreme artificial outliers
data = {
    "ObservationID": list(range(1, 16)),
    "Transaction_Amount": [
        120, 135, 140, 150, 155, 160, 165, 170, 175, 180,
        185, 190, 200, 850, 920  # 850 and 920 are extreme outliers
    ]
}

df = pd.DataFrame(data)
print("--- [1] Raw Observed Records (n=15) ---")
print(df)

# 2. Computing Quartiles & Interquartile Range (IQR)
q1 = df["Transaction_Amount"].quantile(0.25)
q3 = df["Transaction_Amount"].quantile(0.75)
iqr = q3 - q1

# Standard 1.5 IQR Tukey Outlier Boundaries
lower_bound = q1 - 1.5 * iqr
upper_bound = q3 + 1.5 * iqr

print("\n--- [2] Statistical Distribution Quartiles ---")
print(f"First Quartile (Q1 - 25%): {q1:.2f}")
print(f"Third Quartile (Q3 - 75%): {q3:.2f}")
print(f"Interquartile Range (IQR): {iqr:.2f}")
print(f"Lower Outlier Threshold:   {lower_bound:.2f}")
print(f"Upper Outlier Threshold:   {upper_bound:.2f}")

# 3. Filtering Outliers
outliers = df[(df["Transaction_Amount"] < lower_bound) | (df["Transaction_Amount"] > upper_bound)]
print(f"\n--- [3] Detected Outliers Count: {len(outliers)} ---")
print(outliers)

# 4. Cleaned Dataset
df_clean = df[(df["Transaction_Amount"] >= lower_bound) & (df["Transaction_Amount"] <= upper_bound)]
print(f"\n--- [4] Cleaned Dataset ({len(df_clean)} records retained) ---")
print(f"Original Mean: {df['Transaction_Amount'].mean():.2f}")
print(f"Cleaned Mean:  {df_clean['Transaction_Amount'].mean():.2f}")
