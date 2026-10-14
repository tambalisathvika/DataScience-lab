# ==============================================================================
# MOHAN BABU UNIVERSITY (MBU) — DEPARTMENT OF DATA SCIENCE
# EXPERIMENT 5: DATA VISUALIZATION WITH MATPLOTLIB & SEABORN
# TASK 5A: Create a line plot with title, axis labels, ticks, tick labels, annotations and save to file
# Student: Tambali Sathvika (24102A030126) • Section: DS 2
# ==============================================================================

import matplotlib.pyplot as plt

# Data
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
sales = [120, 150, 180, 160, 220, 250]
expenses = [80, 100, 120, 110, 140, 160]

# Create subplots
fig, ax = plt.subplots(2, 1, figsize=(10, 8))

# Subplot 1: Sales
ax[0].plot(months, sales, marker="o", linewidth=2, label="Sales", color="#0d9488")
ax[0].set_title("Monthly Sales")
ax[0].set_xlabel("Month")
ax[0].set_ylabel("Sales ($ in Thousands)")
ax[0].set_xticks(range(len(months)))
ax[0].set_xticklabels(months)
ax[0].annotate("Highest Sales", xy=(5, 250), xytext=(3.5, 260),
               arrowprops=dict(facecolor="#0d9488", arrowstyle="->", lw=1.5))
ax[0].legend()
ax[0].grid(True, linestyle="--", alpha=0.6)

# Subplot 2: Expenses
ax[1].plot(months, expenses, marker="s", linewidth=2, label="Expenses", color="#ef4444")
ax[1].set_title("Monthly Expenses")
ax[1].set_xlabel("Month")
ax[1].set_ylabel("Expenses ($ in Thousands)")
ax[1].set_xticks(range(len(months)))
ax[1].set_xticklabels(months)
ax[1].annotate("Highest Expense", xy=(5, 160), xytext=(3.5, 170),
               arrowprops=dict(facecolor="#ef4444", arrowstyle="->", lw=1.5))
ax[1].legend()
ax[1].grid(True, linestyle="--", alpha=0.6)

# Overall title & layout
fig.suptitle("Monthly Sales and Expenses Analysis", fontsize=16, fontweight="bold")
plt.tight_layout()

# Save plot to file
plt.savefig("monthly_sales_expenses.png", dpi=300, bbox_inches="tight")
print("Plot successfully saved to monthly_sales_expenses.png (300 DPI)")
plt.show()
