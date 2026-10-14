# ==============================================================================
# MOHAN BABU UNIVERSITY (MBU) — DEPARTMENT OF DATA SCIENCE
# EXPERIMENT 5: DATA VISUALIZATION WITH MATPLOTLIB & SEABORN
# TASK 5C: Create histogram to display value frequency and density plot for continuous distribution
# Student: Tambali Sathvika (24102A030126) • Section: DS 2
# ==============================================================================

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Sample observed examination data
data = [45, 50, 52, 55, 58, 60, 62, 65, 68, 70,
        72, 75, 78, 80, 82, 85, 88, 90, 92, 95]

df = pd.DataFrame({'Marks': data})

print("Observed Data Summary:")
print(df.describe())

# 1. Pure Frequency Histogram
plt.figure(figsize=(8, 4.5))
sns.histplot(df['Marks'], bins=6, kde=False, color="#0d9488", edgecolor="#0f172a")
plt.title("Histogram of Marks (Frequency Distribution)", fontweight="bold")
plt.xlabel("Marks")
plt.ylabel("Frequency")
plt.grid(axis='y', linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()

# 2. Kernel Density Estimation (KDE) Density Plot
plt.figure(figsize=(8, 4.5))
sns.kdeplot(df['Marks'], fill=True, color="#6366f1", alpha=0.35, linewidth=2)
plt.title("Density Plot of Marks (Continuous Distribution)", fontweight="bold")
plt.xlabel("Marks")
plt.ylabel("Probability Density")
plt.grid(True, linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()

# 3. Combined Histogram with Overlay Density Curve
plt.figure(figsize=(8, 4.5))
sns.histplot(df['Marks'], bins=6, kde=True, color="#06b6d4", stat="density", edgecolor="#0f172a")
plt.title("Combined Histogram with Overlay Density Curve", fontweight="bold")
plt.xlabel("Marks")
plt.ylabel("Density")
plt.grid(True, linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()
