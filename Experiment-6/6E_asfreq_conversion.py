"""
Experiment 6E — Convert Periods and PeriodIndex to Another Frequency Using asfreq()
Mohan Babu University — School of Computing — Department of Data Science
"""
import pandas as pd

# 1. Annual period frequency conversion
annual = pd.Period('2026', freq='Y')
print("Base Annual Period:", annual)
print("Opening Boundary (how='start'):", annual.asfreq('M', how='start'))
print("Closing Boundary (how='end'):", annual.asfreq('M', how='end'))

# 2. Quarterly to Monthly PeriodIndex realignment
quarters = pd.period_range('2026Q1', periods=3, freq='Q')
print("\n--- 1. Original Quarterly PeriodIndex ---")
print(quarters)

monthly_start = quarters.asfreq('M', how='start')
print("\n--- 2. Converted to Monthly (how='start') ---")
print(monthly_start)

monthly_end = quarters.asfreq('M', how='end')
print("\n--- 3. Converted to Monthly (how='end') ---")
print(monthly_end)
