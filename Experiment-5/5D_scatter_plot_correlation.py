# ==============================================================================
# MOHAN BABU UNIVERSITY (MBU) — DEPARTMENT OF DATA SCIENCE
# EXPERIMENT 5: DATA VISUALIZATION WITH MATPLOTLIB & SEABORN
# TASK 5D: Create scatter plot and examine the relationship between two one-dimensional data series
# Student: Tambali Sathvika (24102A030126) • Section: DS 2
# ==============================================================================

import pandas as pd
import matplotlib.pyplot as plt

# Two one-dimensional data series
study_hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
marks = [45, 50, 55, 60, 65, 70, 72, 80, 85, 90]

df = pd.DataFrame({
    'Study_Hours': study_hours,
    'Marks': marks
})

print("Dataset:")
print(df)

# Calculate Pearson correlation coefficient
correlation = df['Study_Hours'].corr(df['Marks'])
print(f"\nPearson Correlation Coefficient (r): {correlation:.2f}")

# Create Scatter Plot
plt.figure(figsize=(8, 5))
plt.scatter(df['Study_Hours'], df['Marks'], color="#0d9488", s=80, edgecolors="#0f172a", label="Student Observations")

# Plot linear trendline
import numpy as np
z = np.polyfit(df['Study_Hours'], df['Marks'], 1)
p = np.poly1d(z)
plt.plot(df['Study_Hours'], p(df['Study_Hours']), color="#ef4444", linestyle="--", linewidth=2, label=f"Trendline (r = {correlation:.2f})")

plt.title("Relationship Between Study Hours and Examination Marks", fontweight="bold")
plt.xlabel("Study Hours (Daily)")
plt.ylabel("Exam Marks")
plt.legend()
plt.grid(True, linestyle="--", alpha=0.6)
plt.tight_layout()
plt.show()
