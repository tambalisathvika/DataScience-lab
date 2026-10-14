# ==============================================================================
# MOHAN BABU UNIVERSITY (MBU) — DEPARTMENT OF DATA SCIENCE
# EXPERIMENT 5: DATA VISUALIZATION WITH MATPLOTLIB & SEABORN
# TASK 5B: Create bar plots using Series and DataFrame index (Grouped & Stacked)
# Student: Tambali Sathvika (24102A030126) • Section: DS 2
# ==============================================================================

import pandas as pd
import matplotlib.pyplot as plt

# Create DataFrame
data = {
    'Python': [85, 90, 78, 88],
    'Java': [75, 82, 80, 85],
    'C++': [80, 76, 85, 90]
}

df = pd.DataFrame(
    data,
    index=['Student1', 'Student2', 'Student3', 'Student4']
)

print("DataFrame:")
print(df)

# 1. Grouped Bar Plot (Side-by-Side Bars)
df.plot(kind='bar', figsize=(8, 5), colormap='viridis')
plt.title("Student Marks in Programming Languages (Grouped Bar Plot)", fontweight="bold")
plt.xlabel("Students")
plt.ylabel("Marks")
plt.xticks(rotation=0)
plt.legend(title="Languages")
plt.grid(axis='y', linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()

# 2. Stacked Bar Plot
df.plot(kind='bar', stacked=True, figsize=(8, 5), colormap='plasma')
plt.title("Total Student Marks Breakdown (Stacked Bar Plot)", fontweight="bold")
plt.xlabel("Students")
plt.ylabel("Cumulative Marks")
plt.xticks(rotation=0)
plt.legend(title="Languages")
plt.grid(axis='y', linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()
