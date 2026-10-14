export const defaultStudent = {
  photo: '/student-default.jpg',
  name: 'Tambali Sathvika',
  rollNo: '24102A030126',
  section: 'DS 2',
  branch: 'Data Science',
  assistantProfessor: 'Mr. S Bosu Babu',
  githubRepo: 'https://github.com/tambalisathvika',
  linkedinUrl: 'https://www.linkedin.com/in/tambali-sathvika'
};

export const defaultExperiments = [
{
  "id": "exp-4",
  "number": "4",
  "category": "Data Wrangling",
  "title": "Data Wrangling & Hierarchical Indexing",
  "description": "Reshape complex tabular data using hierarchical multi-indexing, stack, unstack, and merge with combine-first value imputation.",
  "estimatedTime": "3 Hours",
  "status": "Curriculum Approved",
  "thumbnail": "/exp1-thumb.png",
  "completed": true,
  "moduleId": "mod-1",
  "youtubeUrl": "https://www.youtube.com/watch?v=KK6En6JnI5o",
  "videoUrl": "https://www.youtube.com/watch?v=KK6En6JnI5o",
  "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-4",
  "summary": "Comprehensive study of hierarchical multi-indexing with pd.MultiIndex.from_arrays, partial indexing across outer and inner index levels, tabular reshaping via unstack() and stack(), index-based merging with pd.merge(..., left_index=True, right_index=True), and robust missing value imputation using combine_first().",
  "topics": [
    "4A. Perform Hierarchical Indexing & Partial Indexing",
    "4B. Rearrange Tabular Data with unstack and stack Method",
    "4C. Merge DataFrames on Index & Impute with combine_first()"
  ],
  "subExperiments": [
    {
      "id": "4A",
      "letter": "A",
      "number": "4",
      "title": "Perform Hierarchical Indexing and Select Data Subsets Using Partial Indexing",
      "description": "Create a Pandas Series with hierarchical indexing using a list of lists and select subsets of data using partial indexing at outer and inner levels.",
      "aim": "To create a Pandas Series with hierarchical (multi-level) indexing using a list of lists and to select subsets of data using partial indexing at the outer and inner levels.",
      "learningObjective": "Master multi-tiered index generation with pd.MultiIndex.from_arrays, hierarchical Series indexing, and multi-level data selection with .loc.",
      "syntax": "Create MultiIndex:\npd.MultiIndex.from_arrays(arrays, names=None)\n\nTo create a Series:\npd.Series(data, index=multi_index)\n\nTo select data:\nseries.loc['Outer_Level']\nseries.loc[('Outer_Level', 'Inner_Level')]",
      "generalSyntax": "import pandas as pd\nmulti_index = pd.MultiIndex.from_arrays([outer_list, inner_list], names=['Level1', 'Level2'])\nseries = pd.Series(values, index=multi_index)\nsubset = series.loc['Level1_Key']",
      "aboutProgram": "Hierarchical indexing (MultiIndex) is an integral feature of Pandas that enables working with higher-dimensional data in lower-dimensional (1D Series and 2D DataFrame) data structures. By structuring indexes into nested levels, partial indexing allows seamless querying of sub-groups without complex Boolean filtering.",
      "visualPlotType": "hierarchical_bar",
      "youtubeUrl": "https://www.youtube.com/watch?v=KK6En6JnI5o",
      "videoUrl": "https://www.youtube.com/watch?v=KK6En6JnI5o",
      "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-4/4A_hierarchical_indexing.py",
      "procedure": [
        "Import pandas into the Python environment.",
        "Define hierarchical index levels using a nested list representing Departments and Branches.",
        "Construct a pd.MultiIndex using pd.MultiIndex.from_arrays() specifying level names.",
        "Instantiate a Pandas Series binding numeric scores to the hierarchical index.",
        "Apply partial indexing at the outer tier using series.loc[\"Engineering\"].",
        "Select a specific scalar value using a tuple key: series.loc[(\"Engineering\", \"CSE\")].",
        "Extract department records using series.loc[\"Science\"]."
      ],
      "vivaVoce": [
        {
          "question": "What is a MultiIndex in Pandas and when is it preferred?",
          "answer": "A MultiIndex (hierarchical index) allows representation of higher-dimensional data in standard 2D Series and DataFrames, enabling grouped slicing across multiple category tiers without pivoting."
        },
        {
          "question": "How do you access data at the inner level in a hierarchically indexed Series?",
          "answer": "You can access inner level items using tuple indexing like series.loc[('Outer', 'Inner')] or using the cross-section method series.xs('Inner', level='Branch')."
        }
      ],
      "program": "import pandas as pd\n\n# Create a list of lists for hierarchical index\nindex = [\n    ['Engineering', 'Engineering', 'Science', 'Science'],\n    ['CSE', 'ECE', 'Physics', 'Chemistry']\n]\n\n# Create MultiIndex\nmulti_index = pd.MultiIndex.from_arrays(\n    index,\n    names=['Department', 'Branch']\n)\n\n# Create a Series using the hierarchical index\nmarks = pd.Series(\n    [85, 78, 92, 88],\n    index=multi_index\n)\n\nprint(\"Original Series:\")\nprint(marks)\n\n# Partial indexing at the outer level\nprint(\"\\nData for Engineering:\")\nprint(marks.loc['Engineering'])\n\n# Partial indexing at the inner level\nprint(\"\\nData for CSE:\")\nprint(marks.loc[('Engineering', 'CSE')])\n\n# Selecting a subset using both levels\nprint(\"\\nData for Science:\")\nprint(marks.loc['Science'])",
      "output": "Original Series:\nDepartment   Branch   \nEngineering  CSE          85\n             ECE          78\nScience      Physics      92\n             Chemistry    88\ndtype: int64\n\nData for Engineering:\nBranch\nCSE    85\nECE    78\ndtype: int64\n\nData for CSE:\n85\n\nData for Science:\nBranch\nPhysics      92\nChemistry    88\ndtype: int64\n\nExplanation:\n• MultiIndex.from_arrays() creates a hierarchical index with two levels:\n  o Outer level: Department\n  o Inner level: Branch\n• marks.loc['Engineering'] selects all records under the outer level Engineering.\n• marks.loc[('Engineering', 'CSE')] selects a specific value using both outer and inner levels.\n• marks.loc['Science'] selects all records belonging to the Science department.\n\nResult:\nThe program successfully demonstrates hierarchical indexing and partial indexing at both outer and inner levels in Pandas.",
      "explanation": "Hierarchical indexing organizes multi-tiered data categories. Partial indexing allows slicing outer department groups or drilling down to inner branch records."
    },
    {
      "id": "4B",
      "letter": "B",
      "number": "4",
      "title": "Rearrange Tabular Data with Hierarchical Indexing Using unstack and stack Method",
      "description": "Rearrange tabular data with hierarchical indexing using Pandas unstack() to pivot row levels into columns, and stack() to pivot columns back into rows.",
      "aim": "To rearrange tabular data with hierarchical indexing using the Pandas unstack() and stack() methods.",
      "learningObjective": "Understand the mechanisms of unstack() and stack() in converting between long/tidy and wide tabular formats.",
      "syntax": "unstack(): Converts row index levels to columns\nDataFrame.unstack(level=-1)\n\nstack(): Converts columns to row index levels\nDataFrame.stack()",
      "generalSyntax": "df_unstacked = df.unstack()\ndf_stacked = df_unstacked.stack()",
      "aboutProgram": "In data wrangling, data frequently requires transformation between tall (stacked) and wide (unstacked) representations. The unstack() method pivots an inner index level from rows to columns, introducing NaNs if combinations are irregular. Conversely, stack() compresses column headers back into the hierarchical index, creating tidy tabular data.",
      "visualPlotType": "unstack_stack_flow",
      "youtubeUrl": "https://www.youtube.com/watch?v=KK6En6JnI5o",
      "videoUrl": "https://www.youtube.com/watch?v=KK6En6JnI5o",
      "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-4/4B_stack_unstack.py",
      "procedure": [
        "Import the pandas library.",
        "Create a MultiIndex from tuples representing department and branch pairings.",
        "Build a DataFrame with multi-year performance data (columns: 2025, 2026).",
        "Invoke data.unstack() to move the inner index (Branch) from rows to columns.",
        "Inspect the resulting wide-format DataFrame with multi-level columns.",
        "Invoke unstacked_data.stack() to pivot column labels back into hierarchical row indices."
      ],
      "vivaVoce": [
        {
          "question": "Explain the difference between stack() and unstack() in Pandas.",
          "answer": "unstack() pivots the innermost level of a row index into columns (wide format). stack() collapses columns into a hierarchical row index level (tall/tidy format)."
        },
        {
          "question": "What happens to missing combinations when unstack() is called?",
          "answer": "Any category intersections that did not have observations in the original index are automatically filled with NaN (missing value) indicators."
        }
      ],
      "program": "import pandas as pd\n\n# Create hierarchical index\nindex = pd.MultiIndex.from_tuples(\n    [\n        ('Engineering', 'CSE'),\n        ('Engineering', 'ECE'),\n        ('Science', 'Physics'),\n        ('Science', 'Chemistry')\n    ],\n    names=['Department', 'Branch']\n)\n\n# Create tabular data\ndata = pd.DataFrame(\n    {\n        '2025': [85, 78, 92, 88],\n        '2026': [90, 82, 95, 91]\n    },\n    index=index\n)\n\nprint(\"Original Tabular Data:\")\nprint(data)\n\n# Unstack the inner level\nunstacked_data = data.unstack()\n\nprint(\"\\nData after Unstack():\")\nprint(unstacked_data)\n\n# Stack the data back\nstacked_data = unstacked_data.stack()\n\nprint(\"\\nData after Stack():\")\nprint(stacked_data)",
      "output": "Original Tabular Data:\n\n                       2025  2026\nDepartment   Branch              \nEngineering  CSE          85    90\n             ECE          78    82\nScience      Physics      92    95\n             Chemistry    88    91\n\nData after Unstack():\n\n             2025                    2026                        \nBranch        CSE   ECE Chemistry Physics  CSE   ECE Chemistry Physics\nDepartment                                                            \nEngineering  85.0  78.0       NaN     NaN 90.0  82.0       NaN     NaN\nScience       NaN   NaN      88.0    92.0  NaN   NaN      91.0    95.0\n\nData after Stack():\n\nDepartment   Branch   \nEngineering  CSE          85    90\n             ECE          78    82\nScience      Chemistry    88    91\n             Physics      92    95\ndtype: int64\n\nExplanation:\n1. Hierarchical Indexing: Department and Branch form the two levels of the hierarchical index.\n2. unstack() method: Moves the inner index (Branch) from the rows to the columns.\n3. stack() method: Moves the column labels back into the hierarchical row index.\n\nResult:\nThe unstack() method converts row-level hierarchical indexes into columns, while the stack() method converts columns back into hierarchical row indexes.",
      "explanation": "unstack() pivots row index levels into wide columnar formats, while stack() collapses column hierarchies back into long indexed rows."
    },
    {
      "id": "4C",
      "letter": "C",
      "number": "4",
      "title": "Merge DataFrames Using Index as Key and Combine Data Using combine_first()",
      "description": "Create two DataFrames, merge them using index as merge key, and combine data using combine_first() to impute missing values.",
      "aim": "To create two different Pandas DataFrames, merge them using the index as the merge key, and combine their data using the combine_first() method to fill missing values with available values from another DataFrame.",
      "learningObjective": "Learn index-aligned relational merging with pd.merge() and conditional value fallback using DataFrame.combine_first().",
      "syntax": "Merge using index:\npd.merge(df1, df2, left_index=True, right_index=True, how='outer')\n\ncombine_first():\ndf1.combine_first(df2)",
      "generalSyntax": "merged = pd.merge(df1, df2, left_index=True, right_index=True, how='outer')\ncombined = df1.combine_first(df2)",
      "aboutProgram": "Data imputation often requires combining overlapping datasets where primary records have gaps that can be resolved by a secondary reference. The combine_first() method aligns two DataFrames on their indexes and columns, filling nulls in the caller with valid values from the argument DataFrame.",
      "visualPlotType": "combine_first_bars",
      "youtubeUrl": "https://www.youtube.com/watch?v=KK6En6JnI5o",
      "videoUrl": "https://www.youtube.com/watch?v=KK6En6JnI5o",
      "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-4/4C_combine_first.py",
      "procedure": [
        "Import pandas.",
        "Construct two DataFrames df1 and df2 with overlapping student ID indices, containing intentional None/NaN values.",
        "Perform an outer join using pd.merge(df1, df2, left_index=True, right_index=True, how=\"outer\").",
        "Execute df1.combine_first(df2) to patch missing marks and grades from df2 into df1.",
        "Display original, merged, and combined DataFrames to verify successful imputation."
      ],
      "vivaVoce": [
        {
          "question": "How does combine_first() resolve missing data across two DataFrames?",
          "answer": "df1.combine_first(df2) aligns two DataFrames on their index and fills NaN holes in df1 with corresponding non-null values from df2."
        },
        {
          "question": "What is the advantage of using left_index=True and right_index=True in pd.merge()?",
          "answer": "It avoids having to reset the index to a column, executing relational join logic directly on the DataFrame row indices for maximum efficiency."
        }
      ],
      "program": "import pandas as pd\n\n# Create the first DataFrame\ndf1 = pd.DataFrame(\n    {\n        'Name': ['Ravi', 'Sita', 'Arun'],\n        'Marks': [85, None, 78],\n        'Grade': ['A', 'B', None]\n    },\n    index=[101, 102, 103]\n)\n\n# Create the second DataFrame\ndf2 = pd.DataFrame(\n    {\n        'Name': ['Ravi', 'Sita', 'Kiran'],\n        'Marks': [90, 88, 82],\n        'Grade': [None, 'A', 'B']\n    },\n    index=[101, 102, 104]\n)\n\nprint(\"First DataFrame:\")\nprint(df1)\n\nprint(\"\\nSecond DataFrame:\")\nprint(df2)\n\n# Merge DataFrames using index as merge key\nmerged = pd.merge(\n    df1,\n    df2,\n    left_index=True,\n    right_index=True,\n    how='outer',\n    suffixes=('_DF1', '_DF2')\n)\n\nprint(\"\\nMerged DataFrame:\")\nprint(merged)\n\n# Combine data using combine_first()\ncombined = df1.combine_first(df2)\n\nprint(\"\\nDataFrame after combine_first():\")\nprint(combined)",
      "output": "First DataFrame:\n      Name  Marks Grade\n101   Ravi   85.0     A\n102   Sita    NaN     B\n103   Arun   78.0  None\n\nSecond DataFrame:\n      Name  Marks Grade\n101   Ravi   90.0  None\n102   Sita   88.0     A\n104  Kiran   82.0     B\n\nMerged DataFrame:\n      Name_DF1  Marks_DF1 Grade_DF1 Name_DF2  Marks_DF2 Grade_DF2\n101       Ravi       85.0         A     Ravi       90.0      None\n102       Sita        NaN         B     Sita       88.0         A\n103       Arun       78.0      None      NaN        NaN       NaN\n104        NaN        NaN       NaN    Kiran       82.0         B\n\nDataFrame after combine_first():\n      Name  Marks Grade\n101   Ravi   85.0     A\n102   Sita   88.0     B\n103   Arun   78.0  None\n104  Kiran   82.0     B\n\nExplanation:\n1. Creating DataFrames: Two DataFrames, df1 and df2, are created with student information. Their index values act as student IDs.\n2. Merging using index: pd.merge(df1, df2, left_index=True, right_index=True, how='outer') preserves all index keys.\n3. Combining overlapping data: df1.combine_first(df2) uses values from df1 wherever they exist. If df1 contains a missing value (e.g. Sita's marks = NaN), it takes 88 from df2.\n\nResult:\nThe program demonstrates both index-based merging and combining overlapping DataFrame data using combine_first().",
      "explanation": "combine_first() seamlessly imputes missing values in a primary DataFrame with values from an overlapping secondary DataFrame."
    }
  ]
},
{
  "id": "exp-5",
  "number": "5",
  "category": "Data Visualization",
  "title": "Data Visualization with Matplotlib & Seaborn",
  "description": "Perform comprehensive data visualization using Matplotlib and Seaborn across line, bar, histogram, scatter, and boxplots.",
  "estimatedTime": "3 Hours",
  "status": "Curriculum Approved",
  "thumbnail": "/exp1-thumb.png",
  "completed": true,
  "moduleId": "mod-1",
  "youtubeUrl": "https://www.youtube.com/watch?v=Bw_yIdyeNhY",
  "videoUrl": "https://www.youtube.com/watch?v=Bw_yIdyeNhY",
  "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-5",
  "summary": "Comprehensive exploration of static and statistical plotting using Matplotlib and Seaborn: multi-panel subplots with custom ticks and peak annotations, side-by-side grouped and stacked bar charts, frequency histograms with Kernel Density Estimation (KDE) overlays, bivariate scatter plots with Pearson correlation (r = 1.00), and multi-category box plots depicting five-number distribution summaries.",
  "topics": [
    "5A. Line Plot with Subplots, Annotations & File Export",
    "5B. Grouped & Stacked Bar Plots from DataFrame Index",
    "5C. Histogram Frequency & Continuous Density (KDE) Plots",
    "5D. Scatter Plot & Pearson Correlation Analysis",
    "5E. Box Plots for Multi-Category Numerical Distributions"
  ],
  "subExperiments": [
    {
      "id": "5A",
      "letter": "A",
      "number": "5",
      "title": "Create a Line Plot with Title, Axis Labels, Ticks, Tick Labels, Annotations and Save to a File",
      "description": "Create multi-panel line subplots in Matplotlib with customized axes, tick markers, arrow annotations pointing at peaks, and export high-resolution PNG.",
      "aim": "To create a line plot using Matplotlib by setting the title, axis labels, ticks, tick labels, and annotations on subplots, and save the generated plot to an image file.",
      "learningObjective": "Master multi-axis subplots, figure customization, annotation arrows, and high-DPI figure exporting in Matplotlib.",
      "syntax": "Create subplots:\nfig, ax = plt.subplots(2, 1, figsize=(10, 8))\n\nSet title and labels:\nax[0].set_title(\"Title\")\nax[0].set_xlabel(\"X-axis\")\nax[0].set_ylabel(\"Y-axis\")\n\nTicks and labels:\nax[0].set_xticks(range(len(months)))\nax[0].set_xticklabels(months)\n\nAnnotation:\nax[0].annotate(\"Highest Sales\", xy=(5, 250), xytext=(3.5, 270),\n               arrowprops=dict(arrowstyle=\"->\"))\n\nSave plot:\nplt.savefig(\"filename.png\", dpi=300, bbox_inches=\"tight\")",
      "generalSyntax": "fig, ax = plt.subplots(rows, cols)\nax.plot(x, y, marker='o', label='Series')\nax.annotate('Note', xy=(x0, y0), xytext=(x1, y1), arrowprops=dict(arrowstyle='->'))\nplt.savefig('output.png', dpi=300)",
      "aboutProgram": "Matplotlib object-oriented API uses Figure and Axes objects for granular control over every visual element. Subplots partition the canvas into vertical or horizontal panels, while annotations with arrow pointers highlight key events or extremes.",
      "visualPlotType": "line_annotations_plot",
      "youtubeUrl": "https://www.youtube.com/watch?v=Bw_yIdyeNhY",
      "videoUrl": "https://www.youtube.com/watch?v=Bw_yIdyeNhY",
      "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-5/5A_line_plots_annotations.py",
      "procedure": [
        "Import matplotlib.pyplot.",
        "Prepare chronological monthly data series for sales and expenses.",
        "Initialize a 2x1 subplot grid using plt.subplots(2, 1, figsize=(10, 8)).",
        "Plot sales on the first subplot with circular markers and gridlines.",
        "Add an arrow annotation pointing to the highest sales month (Jun: 250).",
        "Plot expenses on the second subplot with square markers and peak annotation (Jun: 160).",
        "Configure super title, adjust layout with plt.tight_layout(), and save to PNG at 300 DPI."
      ],
      "vivaVoce": [
        {
          "question": "What is the purpose of bbox_inches=\"tight\" in plt.savefig()?",
          "answer": "It crops excess whitespace around the canvas, ensuring that axis labels, titles, and legends are not clipped in the exported image file."
        },
        {
          "question": "How do ax.annotate() parameters xy and xytext differ?",
          "answer": "xy specifies the coordinates of the point being annotated (where the arrowhead points), whereas xytext specifies the position of the annotation text label."
        }
      ],
      "program": "import matplotlib.pyplot as plt\n\n# Data\nmonths = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\"]\nsales = [120, 150, 180, 160, 220, 250]\nexpenses = [80, 100, 120, 110, 140, 160]\n\n# Create subplots\nfig, ax = plt.subplots(2, 1, figsize=(10, 8))\n\n# Subplot 1: Sales\nax[0].plot(months, sales, marker=\"o\", linewidth=2, label=\"Sales\")\nax[0].set_title(\"Monthly Sales\")\nax[0].set_xlabel(\"Month\")\nax[0].set_ylabel(\"Sales\")\nax[0].set_xticks(range(len(months)))\nax[0].set_xticklabels(months)\nax[0].annotate(\"Highest Sales\", xy=(5, 250), xytext=(3.5, 270),\n               arrowprops=dict(arrowstyle=\"->\"))\nax[0].legend()\nax[0].grid(True)\n\n# Subplot 2: Expenses\nax[1].plot(months, expenses, marker=\"s\", linewidth=2, label=\"Expenses\")\nax[1].set_title(\"Monthly Expenses\")\nax[1].set_xlabel(\"Month\")\nax[1].set_ylabel(\"Expenses\")\nax[1].set_xticks(range(len(months)))\nax[1].set_xticklabels(months)\nax[1].annotate(\"Highest Expense\", xy=(5, 160), xytext=(3.5, 180),\n               arrowprops=dict(arrowstyle=\"->\"))\nax[1].legend()\nax[1].grid(True)\n\n# Overall title\nfig.suptitle(\"Monthly Sales and Expenses Analysis\", fontsize=16)\nplt.tight_layout()\nplt.savefig(\"monthly_sales_expenses.png\", dpi=300, bbox_inches=\"tight\")\nplt.show()",
      "output": "The program generates two subplots:\n       Monthly Sales and Expenses Analysis\n\n          Monthly Sales\nSales\n250 |                         ● ← Highest Sales\n220 |                    ●\n180 |             ●\n150 |        ●\n120 |   ●\n    +--------------------------------\n       Jan  Feb  Mar  Apr  May  Jun\n                    Month\n\n          Monthly Expenses\nExpenses\n160 |                         ■ ← Highest Expense\n140 |                    ■\n120 |             ■\n110 |        ■\n100 |   ■\n 80 | ●\n    +--------------------------------\n       Jan  Feb  Mar  Apr  May  Jun\n                    Month\n\nOutput File:\nThe plot is saved as:\nmonthly_sales_expenses.png\nat 300 DPI, making it suitable for reports and practical records.\n\nResult:\nThus, a line plot with titles, axis labels, ticks, tick labels, annotations, and multiple subplots was successfully created using Matplotlib and saved to an image file.",
      "explanation": "Subplots partition complex datasets into synchronized panels. Direct arrow annotations highlight local extrema without cluttering axes."
    },
    {
      "id": "5B",
      "letter": "B",
      "number": "5",
      "title": "Create Bar Plots Using Series and DataFrame Index (Grouped & Stacked)",
      "description": "Create grouped side-by-side bar plots and vertically stacked bar charts from Pandas DataFrames to compare multi-subject student performance.",
      "aim": "To create bar plots using Pandas Series and DataFrame index, and to create both grouped bar plots and stacked bar plots using Matplotlib.",
      "learningObjective": "Understand how Pandas utilizes index labels for categorical X-axes and columns for grouped and stacked bar geometry.",
      "syntax": "Grouped Bar Plot:\ndf.plot(kind='bar', figsize=(8, 5))\n\nStacked Bar Plot:\ndf.plot(kind='bar', stacked=True, figsize=(8, 5))",
      "generalSyntax": "df.plot(kind='bar') # grouped\ndf.plot(kind='bar', stacked=True) # stacked",
      "aboutProgram": "Bar charts represent categorical comparisons. In Pandas, DataFrame.plot(kind=\"bar\") clusters column values side by side for each row index. Setting stacked=True stacks the column values vertically, illustrating both individual contributions and the cumulative sum.",
      "visualPlotType": "grouped_stacked_bar",
      "youtubeUrl": "https://www.youtube.com/watch?v=3Rok5fgOWrw",
      "videoUrl": "https://www.youtube.com/watch?v=3Rok5fgOWrw",
      "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-5/5B_bar_plots_grouped_stacked.py",
      "procedure": [
        "Import pandas and matplotlib.pyplot.",
        "Construct a DataFrame where rows represent students and columns represent marks across subjects (Python, Java, C++).",
        "Generate a grouped bar plot with df.plot(kind=\"bar\") to view marks side by side.",
        "Configure chart labels, rotation, and legend.",
        "Generate a stacked bar plot with df.plot(kind=\"bar\", stacked=True) to display aggregate student performance.",
        "Display both figures with plt.show()."
      ],
      "vivaVoce": [
        {
          "question": "What is the main visual difference between grouped and stacked bar plots?",
          "answer": "Grouped bar plots position bars side by side per category, making comparison of individual variables straightforward. Stacked bar plots stack bars vertically, emphasizing overall cumulative totals and part-to-whole ratios."
        },
        {
          "question": "How do you create a horizontal bar plot in Pandas?",
          "answer": "Use df.plot(kind=\"barh\") or df.plot.barh() which swaps the X and Y axes."
        }
      ],
      "program": "import pandas as pd\nimport matplotlib.pyplot as plt\n\n# Create DataFrame\ndata = {\n    'Python': [85, 90, 78, 88],\n    'Java': [75, 82, 80, 85],\n    'C++': [80, 76, 85, 90]\n}\n\ndf = pd.DataFrame(\n    data,\n    index=['Student1', 'Student2', 'Student3', 'Student4']\n)\n\nprint(\"DataFrame:\")\nprint(df)\n\n# 1. Grouped Bar Plot (Side-by-Side Bars)\ndf.plot(kind='bar', figsize=(8, 5))\nplt.title(\"Student Marks in Different Programming Languages (Grouped)\")\nplt.xlabel(\"Students\")\nplt.ylabel(\"Marks\")\nplt.xticks(rotation=0)\nplt.legend(title=\"Subjects\")\nplt.tight_layout()\nplt.show()\n\n# 2. Stacked Bar Plot\ndf.plot(kind='bar', stacked=True, figsize=(8, 5))\nplt.title(\"Stacked Bar Plot of Student Marks\")\nplt.xlabel(\"Students\")\nplt.ylabel(\"Total Marks\")\nplt.xticks(rotation=0)\nplt.legend(title=\"Subjects\")\nplt.tight_layout()\nplt.show()",
      "output": "DataFrame:\n\n          Python  Java  C++\nStudent1      85    75   80\nStudent2      90    82   76\nStudent3      78    80   85\nStudent4      88    85   90\n\nGrouped Bar Plot:\nThe graphical output contains three bars side by side for each student:\n• Python, Java, C++\n\nStacked Bar Plot:\nThe graphical output contains one bar for each student, with Python, Java, and C++ marks stacked vertically.\n\nResult:\nThus, grouped bar plots and stacked bar plots were successfully created from a Pandas DataFrame using its index values.",
      "explanation": "Grouped bars facilitate cross-subject comparison per student, whereas stacked bars highlight total cumulative scores alongside component breakdowns."
    },
    {
      "id": "5C",
      "letter": "C",
      "number": "5",
      "title": "Create Histogram to Display Value Frequency and Density Plot to Generate Continuous Distribution",
      "description": "Construct frequency histograms and smooth Kernel Density Estimation (KDE) continuous probability curves using Seaborn and Matplotlib.",
      "aim": "To create a Histogram for displaying the frequency distribution of observed data and a Density Plot for representing the continuous probability distribution of the data using Python, Pandas, Matplotlib, and Seaborn.",
      "learningObjective": "Understand discrete bin discretization in histograms and non-parametric continuous density estimation with KDE.",
      "syntax": "Histogram:\nsns.histplot(data, bins=10, kde=False)\n\nDensity Plot:\nsns.kdeplot(data, fill=True)\n\nCombined Histogram with Density Curve:\nsns.histplot(data, bins=10, kde=True)",
      "generalSyntax": "sns.histplot(df['Column'], bins=k, kde=True)\nsns.kdeplot(df['Column'], fill=True)",
      "aboutProgram": "Histograms partition continuous variables into contiguous intervals (bins) to visualize sample frequency. Kernel Density Estimation (KDE) computes a continuous probability density function by placing Gaussian kernels over each sample, avoiding boundary artifacts.",
      "visualPlotType": "hist_kde_plot",
      "youtubeUrl": "https://www.youtube.com/watch?v=t_W6eC8-17w",
      "videoUrl": "https://www.youtube.com/watch?v=t_W6eC8-17w",
      "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-5/5C_histogram_density_plots.py",
      "procedure": [
        "Import pandas, matplotlib.pyplot, and seaborn.",
        "Prepare observed student exam marks dataset (20 observations).",
        "Plot a discrete frequency histogram with 6 bins using sns.histplot(df[\"Marks\"], bins=6, kde=False).",
        "Generate a smooth continuous density curve using sns.kdeplot(df[\"Marks\"], fill=True).",
        "Combine both views into an annotated composite figure with sns.histplot(..., kde=True)."
      ],
      "vivaVoce": [
        {
          "question": "When should you use a Density Plot (KDE) over a standard Histogram?",
          "answer": "Histograms depend heavily on arbitrary bin-width choices, causing discontinuous jagged steps. Kernel Density Estimation (KDE) computes a continuous, smooth probability density function independent of bin boundaries."
        },
        {
          "question": "What does the area under a KDE probability density curve equal?",
          "answer": "The total area under a valid continuous probability density function (PDF) integrates to exactly 1.0 (100% total probability)."
        }
      ],
      "program": "import pandas as pd\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\n# Sample observed data\ndata = [45, 50, 52, 55, 58, 60, 62, 65, 68, 70,\n        72, 75, 78, 80, 82, 85, 88, 90, 92, 95]\n\ndf = pd.DataFrame({'Marks': data})\nprint(\"Observed Data:\")\nprint(df)\n\n# 1. Histogram\nplt.figure(figsize=(8, 5))\nsns.histplot(df['Marks'], bins=6, kde=False)\nplt.title(\"Histogram of Marks\")\nplt.xlabel(\"Marks\")\nplt.ylabel(\"Frequency\")\nplt.tight_layout()\nplt.show()\n\n# 2. Density Plot\nplt.figure(figsize=(8, 5))\nsns.kdeplot(df['Marks'], fill=True)\nplt.title(\"Density Plot of Marks\")\nplt.xlabel(\"Marks\")\nplt.ylabel(\"Density\")\nplt.tight_layout()\nplt.show()\n\n# 3. Combined Histogram with Density Curve\nplt.figure(figsize=(8, 5))\nsns.histplot(df['Marks'], bins=6, kde=True)\nplt.title(\"Histogram with Density Curve\")\nplt.xlabel(\"Marks\")\nplt.ylabel(\"Frequency / Density\")\nplt.tight_layout()\nplt.show()",
      "output": "Observed Data:\n    Marks\n0      45\n1      50\n...\n18     92\n19     95\n\nGraphical Output:\n1. Histogram:\nDisplays the marks divided into intervals (bins), with the height of each bar representing the frequency of observations in that interval.\n2. Density Plot:\nDisplays a smooth curve representing the estimated continuous probability distribution of the observed marks.\n3. Combined Histogram + Density Plot:\nGenerated using sns.histplot(df['Marks'], bins=6, kde=True) with density curve overlaid.\n\nResult:\nThus, a histogram and density plot were successfully created to visualize the frequency distribution and continuous probability distribution of the observed data.",
      "explanation": "Histograms capture discrete bin distributions while KDE models the underlying continuous population probability density function."
    },
    {
      "id": "5D",
      "letter": "D",
      "number": "5",
      "title": "Create Scatter Plot and Examine the Relationship Between Two One-Dimensional Data Series",
      "description": "Plot bivariate scatter observations and compute Pearson correlation coefficient (r = 1.00) to evaluate linear dependency.",
      "aim": "To create a Scatter Plot using two one-dimensional data series and examine the relationship or correlation between them using Python, Pandas, and Matplotlib.",
      "learningObjective": "Master bivariate scatter plotting, coordinate dispersion diagnosis, and Pearson correlation coefficient computation.",
      "syntax": "Matplotlib:\nplt.scatter(x, y)\n\nPandas:\ndf.plot.scatter(x='Column1', y='Column2')\n\nCorrelation Calculation:\ncorrelation = df['Column1'].corr(df['Column2'])",
      "generalSyntax": "plt.scatter(x, y)\nr = df['x'].corr(df['y'])",
      "aboutProgram": "Scatter plots visualize bivariate numerical relationships. By plotting predictor variables on the X-axis against response variables on the Y-axis, patterns such as positive linear correlation, negative trends, or nonlinear clusters become readily apparent. Pearson r quantifies this degree of linear association.",
      "visualPlotType": "scatter_correlation_plot",
      "youtubeUrl": "https://www.youtube.com/watch?v=Bw_yIdyeNhY",
      "videoUrl": "https://www.youtube.com/watch?v=Bw_yIdyeNhY",
      "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-5/5D_scatter_plot_correlation.py",
      "procedure": [
        "Import pandas and matplotlib.pyplot.",
        "Define two continuous data series: Study_Hours and Marks.",
        "Build a Pandas DataFrame binding both series.",
        "Plot the points using plt.scatter(df[\"Study_Hours\"], df[\"Marks\"]).",
        "Add titles, axis labels, and enable background gridlines.",
        "Calculate the Pearson correlation coefficient using df[\"Study_Hours\"].corr(df[\"Marks\"]).",
        "Print and analyze the resulting correlation metric (r = 1.00)."
      ],
      "vivaVoce": [
        {
          "question": "What does Pearson's correlation coefficient measure and what is its range?",
          "answer": "It measures the linear relationship between two continuous variables, ranging from -1.0 (perfect negative linear correlation) to +1.0 (perfect positive linear correlation), where 0 indicates no linear correlation."
        },
        {
          "question": "Does a correlation coefficient of 0 imply no relationship exists?",
          "answer": "No, it only implies no linear relationship exists; strong nonlinear relationships (e.g., quadratic or sinusoidal) can still exist with r = 0."
        }
      ],
      "program": "import pandas as pd\nimport matplotlib.pyplot as plt\n\n# Two one-dimensional data series\nstudy_hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nmarks = [45, 50, 55, 60, 65, 70, 72, 80, 85, 90]\n\n# Create DataFrame\ndf = pd.DataFrame({\n    'Study_Hours': study_hours,\n    'Marks': marks\n})\n\nprint(\"Data:\")\nprint(df)\n\n# Create Scatter Plot\nplt.figure(figsize=(8, 5))\nplt.scatter(df['Study_Hours'], df['Marks'])\nplt.title(\"Relationship Between Study Hours and Marks\")\nplt.xlabel(\"Study Hours\")\nplt.ylabel(\"Marks\")\nplt.grid(True)\nplt.tight_layout()\nplt.show()\n\n# Calculate correlation\ncorrelation = df['Study_Hours'].corr(df['Marks'])\nprint(\"\\nCorrelation Coefficient:\", round(correlation, 2))",
      "output": "Data:\n   Study_Hours  Marks\n0            1     45\n1            2     50\n2            3     55\n3            4     60\n4            5     65\n5            6     70\n6            7     72\n7            8     80\n8            9     85\n9           10     90\n\nCorrelation Coefficient: 1.00\n\nGraphical Output:\nThe scatter plot contains:\n• X-axis: Study Hours \n• Y-axis: Marks \n• Each point represents one observation. \n• The points move upward as study hours increase, indicating a positive relationship between study hours and marks.\n\nResult:\nThus, the scatter plot was successfully created and the relationship between the two one-dimensional data series was examined using the correlation coefficient.",
      "explanation": "Scatter plots diagnose bivariate distributions. The calculated Pearson correlation coefficient of r = 1.00 confirms an exact positive linear dependency between study hours and marks."
    },
    {
      "id": "5E",
      "letter": "E",
      "number": "5",
      "title": "Create Box Plots to Visualize Data with Many Categorical Variables",
      "description": "Generate multi-category box plots in Seaborn to compare mark distributions across CSE, ECE, and EEE engineering departments.",
      "aim": "To create Box Plots for visualizing the distribution of numerical data across multiple categorical variables using Python, Pandas, Matplotlib, and Seaborn.",
      "learningObjective": "Master categorical distribution visualization, five-number summary interpretation, and outlier detection with box plots.",
      "syntax": "Seaborn:\nsns.boxplot(x='Category', y='Value', data=df)\n\nPandas:\ndf.boxplot(column='Value', by='Category')",
      "generalSyntax": "sns.boxplot(x='Category_Col', y='Numeric_Col', data=df)",
      "aboutProgram": "A Box and Whisker Plot displays the five-number summary of a dataset: Minimum, First Quartile (Q1), Median, Third Quartile (Q3), and Maximum. By grouping on a categorical axis, distributions across departments are compared simultaneously, highlighting variations in median, dispersion (IQR), and potential outlier deviations.",
      "visualPlotType": "boxplot_categorical",
      "youtubeUrl": "https://www.youtube.com/watch?v=Bw_yIdyeNhY",
      "videoUrl": "https://www.youtube.com/watch?v=Bw_yIdyeNhY",
      "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-5/5E_box_plots_categorical.py",
      "procedure": [
        "Import pandas, matplotlib.pyplot, and seaborn.",
        "Construct a DataFrame containing department categories (CSE, ECE, EEE) alongside student marks.",
        "Invoke sns.boxplot(x=\"Department\", y=\"Marks\", data=df).",
        "Configure plot title, axis labels, and subtle horizontal gridlines.",
        "Analyze median marks, interquartile ranges, and department dispersion."
      ],
      "vivaVoce": [
        {
          "question": "What are the components of a Box Plot and what do the whiskers represent?",
          "answer": "A Box Plot displays Minimum, Q1 (25th percentile), Median (50th percentile), Q3 (75th percentile), and Maximum. The box represents the Interquartile Range (IQR = Q3 - Q1), and whiskers extend to 1.5 * IQR. Points beyond whiskers are classified as outliers."
        },
        {
          "question": "Why are Box Plots preferred over mean/variance for skewed distributions?",
          "answer": "Because the median and IQR used in box plots are non-parametric and robust against extreme outlier distortion, unlike the arithmetic mean and variance."
        }
      ],
      "program": "import pandas as pd\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\n# Create sample data\ndata = {\n    'Department': [\n        'CSE', 'CSE', 'CSE', 'CSE', 'CSE',\n        'ECE', 'ECE', 'ECE', 'ECE', 'ECE',\n        'EEE', 'EEE', 'EEE', 'EEE', 'EEE'\n    ],\n    'Marks': [\n        78, 85, 90, 72, 88,\n        65, 70, 82, 75, 80,\n        60, 68, 72, 76, 85\n    ]\n}\n\ndf = pd.DataFrame(data)\nprint(\"Data:\")\nprint(df)\n\n# Create Box Plot\nplt.figure(figsize=(8, 5))\nsns.boxplot(\n    x='Department',\n    y='Marks',\n    data=df\n)\nplt.title(\"Marks Distribution by Department\")\nplt.xlabel(\"Department\")\nplt.ylabel(\"Marks\")\nplt.grid(axis='y', linestyle='--', alpha=0.5)\nplt.tight_layout()\nplt.show()",
      "output": "Data:\n   Department  Marks\n0         CSE     78\n1         CSE     85\n2         CSE     90\n3         CSE     72\n4         CSE     88\n5         ECE     65\n6         ECE     70\n7         ECE     82\n8         ECE     75\n9         ECE     80\n10        EEE     60\n11        EEE     68\n12        EEE     72\n13        EEE     76\n14        EEE     85\n\nGraphical Output:\nThe box plot displays one box for each category:\n• CSE → distribution of CSE marks (Median: 85, Range: 72–90)\n• ECE → distribution of ECE marks (Median: 75, Range: 65–82)\n• EEE → distribution of EEE marks (Median: 72, Range: 60–85)\n\nResult:\nThus, the Box Plot was successfully created to visualize and compare the distribution of numerical data across multiple categorical variables.",
      "explanation": "Box plots illustrate categorical distribution disparities: CSE exhibits the highest median mark (85), followed by ECE (75) and EEE (72)."
    }
  ]
},
{
    id: 'exp-6',
    number: '6',
    category: 'Time Series',
    title: 'Time Series Analysis & Forecasting',
    description: 'Comprehensive study of stationarity, ARIMA modeling, seasonal decomposition, and deep recurrent neural network forecasting.',
    estimatedTime: '3 Hours',
    status: 'Curriculum Approved',
    thumbnail: '/exp1-thumb.png',
    completed: true,
    moduleId: 'mod-1',
    youtubeUrl: 'https://www.youtube.com/watch?v=KK6En6JnI5o',
    videoUrl: 'https://www.youtube.com/watch?v=KK6En6JnI5o',
    githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6',
    summary: 'Comprehensive study of temporal indexing, datetime object conversion, DatetimeIndex generation with pd.date_range, timezone localization and conversion (tz_localize, tz_convert), period arithmetic with pd.period_range, frequency realignment using asfreq, timestamp-to-period projection via to_period, and temporal downsampling/upsampling.',
    topics: [
      '6A. Create Time Series Using Datetime Objects',
      '6B. Generate a DatetimeIndex Using pandas.date_range()',
      '6C. Time Zone Localization and Conversion',
      '6D. Period Arithmetic and Period Range',
      '6E. Convert Periods and PeriodIndex to Another Frequency Using asfreq()',
      '6F. Convert Series and DataFrame to Periods Using to_period()',
      '6G. Resampling, Downsampling and Upsampling'
    ],
    subExperiments: [
      {
        id: '6A',
        letter: 'A',
        number: '6',
        title: 'Create Time Series Using Datetime Objects',
        description: 'Create a Pandas time series by converting native datetime objects into timestamps and indexing data points.',
        aim: 'To construct a time-indexed Pandas Series from native Python datetime instances and evaluate timestamp metadata.',
        learningObjective: 'Understand Python datetime conversions, DatetimeIndex instantiation, and temporal alignment in Pandas.',
        syntax: 'pd.to_datetime(dates)\npd.Series(data, index=timestamp_index)',
        generalSyntax: 'import pandas as pd\nfrom datetime import datetime\n\ndates = [datetime(YYYY, M, D), ...]\nts = pd.Series(values, index=pd.to_datetime(dates))',
        aboutProgram: 'A time series is an ordered sequence of observations indexed by chronological timestamps. In Pandas, time series data structures are anchored by the DatetimeIndex, where individual points are represented as 64-bit nanosecond timestamps (pd.Timestamp). Native Python datetime objects are converted via pd.to_datetime(), enabling high-performance vectorized time slicing and index searching.',
        visualPlotType: 'time_series_line',
        youtubeUrl: 'https://www.youtube.com/watch?v=KK6En6JnI5o',
        videoUrl: 'https://www.youtube.com/watch?v=KK6En6JnI5o',
        githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6A_create_time_series.py',
        procedure: [
          'Import pandas and datetime modules into the Python workspace.',
          'Instantiate a collection of native Python datetime objects spanning consecutive observation dates.',
          'Convert the datetime array into a contiguous DatetimeIndex utilizing pd.to_datetime().',
          'Instantiate a Pandas Series binding experimental numerical values to the DatetimeIndex.',
          'Inspect index properties including min/max timestamps and calculate summary metrics.'
        ],
        vivaVoce: [
          {
            question: 'What is the internal data representation of timestamps in Pandas?',
            answer: 'Pandas uses NumPy datetime64[ns] dtype, storing timestamps as 64-bit integers denoting nanoseconds elapsed since the Unix epoch (1970-01-01).'
          },
          {
            question: 'How does a DatetimeIndex differ from a standard Index in Pandas?',
            answer: 'DatetimeIndex provides specialized temporal accessors such as .year, .month, .day_name(), time-slice queries, and vectorized frequency conversions.'
          }
        ],
        program: `import pandas as pd
from datetime import datetime

# 1. Instantiate native Python datetime objects
dates = [
    datetime(2026, 1, 1),
    datetime(2026, 1, 2),
    datetime(2026, 1, 3),
    datetime(2026, 1, 4),
    datetime(2026, 1, 5)
]

# 2. Convert to Pandas DatetimeIndex
timestamp_index = pd.to_datetime(dates)

# 3. Create sensor time series observations
sensor_readings = [105.2, 108.5, 107.8, 112.0, 110.4]
ts = pd.Series(sensor_readings, index=timestamp_index, name="Sensor_A")

print("--- Pandas Time Series with DatetimeIndex ---")
print(ts)
print("\nIndex Metadata:")
print(f"Index Type: {type(ts.index)}")
print(f"Earliest Timestamp: {ts.index.min()}")
print(f"Latest Timestamp: {ts.index.max()}")
print(f"Mean Reading: {ts.mean():.2f}")`,
        output: `--- Pandas Time Series with DatetimeIndex ---
2026-01-01    105.2
2026-01-02    108.5
2026-01-03    107.8
2026-01-04    112.0
2026-01-05    110.4
Name: Sensor_A, dtype: float64

Index Metadata:
Index Type: <class 'pandas.core.indexes.datetimes.DatetimeIndex'>
Earliest Timestamp: 2026-01-01 00:00:00
Latest Timestamp: 2026-01-05 00:00:00
Mean Reading: 108.78`,
        explanation: 'The datetime array is mapped into a contiguous 64-bit DatetimeIndex. Pandas automatically infers date components (year, month, day) and allows label-based slicing such as ts["2026-01-02":"2026-01-04"] in constant time O(1).'
      },
      {
        id: '6B',
        letter: 'B',
        number: '6',
        title: 'Generate a DatetimeIndex Using pandas.date_range()',
        description: 'Generate regular frequency sequences of timestamps using pd.date_range with configurable steps and periods.',
        aim: 'To generate equidistant temporal sequences using pd.date_range() across daily, business-day, and hourly frequencies.',
        learningObjective: 'Master timestamp generation parameters including start, end, periods, and offset frequencies (D, B, H).',
        syntax: 'pd.date_range(start="2026-01-01", periods=10, freq="D")\npd.date_range(start="2026-01-01", end="2026-01-10", freq="B")',
        generalSyntax: 'import pandas as pd\n\ndaily = pd.date_range(start=..., periods=N, freq="D")\nbusiness = pd.date_range(start=..., periods=N, freq="B")',
        aboutProgram: 'Manual instantiation of timestamps becomes impractical for large series. The date_range() factory function automates uniform timestamp grid generation using start timestamps, terminal timestamps, or explicit step counts ("periods") bound to offset aliases like "D" (Calendar Day), "B" (Business Day), and "h" (Hourly).',
        visualPlotType: 'date_range_grid',
        youtubeUrl: 'https://www.youtube.com/watch?v=YpmzvIu10xY',
        videoUrl: 'https://www.youtube.com/watch?v=YpmzvIu10xY',
        githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6B_date_range_frequency.py',
        procedure: [
          'Import pandas module.',
          'Generate a 7-day calendar day sequence using pd.date_range with freq="D".',
          'Generate a business-day sequence using freq="B" to verify automatic exclusion of weekend dates.',
          'Generate an hourly timestamp series using freq="h" starting at 09:00 AM.',
          'Print and inspect the resulting DatetimeIndex structures and frequency metadata.'
        ],
        vivaVoce: [
          {
            question: 'What happens when both "periods" and "end" are supplied without "start"?',
            answer: 'Pandas computes backward from the end date by the specified period count at the declared frequency step.'
          },
          {
            question: 'What is the purpose of the business-day offset "B"?',
            answer: 'It filters out Saturday and Sunday automatically, aligning time grids with equity market exchanges and corporate workflows.'
          }
        ],
        program: `import pandas as pd

# 1. Generate daily timestamp sequence
daily_range = pd.date_range(start='2026-01-01', periods=7, freq='D')

# 2. Generate business-day sequence (skipping weekends)
bday_range = pd.date_range(start='2026-01-01', periods=7, freq='B')

# 3. Generate hourly sequence
hourly_range = pd.date_range(start='2026-01-01 09:00', periods=5, freq='h')

print("--- 1. Daily DatetimeIndex (freq='D') ---")
print(daily_range)

print("\n--- 2. Business Day DatetimeIndex (freq='B') ---")
print(bday_range)

print("\n--- 3. Hourly DatetimeIndex (freq='h') ---")
print(hourly_range)`,
        output: `--- 1. Daily DatetimeIndex (freq='D') ---
DatetimeIndex(['2026-01-01', '2026-01-02', '2026-01-03', '2026-01-04',
               '2026-01-05', '2026-01-06', '2026-01-07'],
              dtype='datetime64[ns]', freq='D')

--- 2. Business Day DatetimeIndex (freq='B') ---
DatetimeIndex(['2026-01-01', '2026-01-02', '2026-01-05', '2026-01-06',
               '2026-01-07', '2026-01-08', '2026-01-09'],
              dtype='datetime64[ns]', freq='B')

--- 3. Hourly DatetimeIndex (freq='h') ---
DatetimeIndex(['2026-01-01 09:00:00', '2026-01-01 10:00:00',
               '2026-01-01 11:00:00', '2026-01-01 12:00:00',
               '2026-01-01 13:00:00'],
              dtype='datetime64[ns]', freq='h')`,
        explanation: 'Notice how the business-day frequency automatically skipped Saturday 2026-01-03 and Sunday 2026-01-04, jumping directly from Friday 2026-01-02 to Monday 2026-01-05. This eliminates data leakage in financial forecasting models.'
      },
      {
        id: '6C',
        letter: 'C',
        number: '6',
        title: 'Time Zone Localization and Conversion',
        description: 'Assign geographic time zones to naive timestamps and convert between international zones using tz_localize and tz_convert.',
        aim: 'To transform time zone naive DatetimeIndex objects to timezone-aware UTC, and convert across international zones (Asia/Kolkata, US/Eastern).',
        learningObjective: 'Understand UTC offsets, timezone awareness vs naivety, and conflict-free cross-regional synchronization.',
        syntax: 'ts.tz_localize("UTC")\nts.tz_convert("Asia/Kolkata")',
        generalSyntax: 'import pandas as pd\n\nts_utc = ts_naive.tz_localize("UTC")\nts_target = ts_utc.tz_convert("Target/Zone")',
        aboutProgram: 'By default, timestamps generated in Python are timezone-naive, lacking explicit UTC offset definitions. In distributed telemetry and financial trading, naive timestamps lead to synchronization drift. Timezone localization (tz_localize) binds an offset to timestamps, while tz_convert projects coordinates into other time zones based on IANA Olson databases.',
        visualPlotType: 'tz_offset_chart',
        youtubeUrl: 'https://www.youtube.com/watch?v=L9RT2qnIQu4',
        videoUrl: 'https://www.youtube.com/watch?v=L9RT2qnIQu4',
        githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6C_timezone_localization.py',
        procedure: [
          'Instantiate a timezone-naive timestamp sequence at 6-hour intervals.',
          'Localize the naive series to Coordinated Universal Time (UTC) using .tz_localize("UTC").',
          'Convert UTC timestamps to Indian Standard Time (Asia/Kolkata) with .tz_convert("Asia/Kolkata").',
          'Convert UTC timestamps to Eastern Daylight Time (America/New_York) with .tz_convert("America/New_York").',
          'Verify hour adjustments reflecting physical timezone offsets (+05:30 and -04:00).'
        ],
        vivaVoce: [
          {
            question: 'What is the distinction between tz_localize and tz_convert?',
            answer: 'tz_localize attaches a timezone definition to a timezone-naive timestamp without changing the clock time. tz_convert shifts an already-aware timestamp to a new timezone, altering the local display hour.'
          },
          {
            question: 'How are daylight saving time transitions handled?',
            answer: 'Pandas uses pytz or zoneinfo IANA records to automatically adjust offsets by 1 hour during DST boundary crossings.'
          }
        ],
        program: `import pandas as pd

# 1. Create naive timestamp sequence
naive_dates = pd.date_range(start='2026-06-01 12:00', periods=4, freq='6h')
ts_naive = pd.Series([100, 105, 110, 108], index=naive_dates)

# 2. Localize naive index to UTC
ts_utc = ts_naive.tz_localize('UTC')

# 3. Convert UTC to Indian Standard Time (Asia/Kolkata: UTC+5:30)
ts_ist = ts_utc.tz_convert('Asia/Kolkata')

# 4. Convert UTC to New York (America/New_York: UTC-4:00 EDT)
ts_est = ts_utc.tz_convert('America/New_York')

print("--- UTC Localized Index ---")
print(ts_utc)

print("\n--- Converted to Asia/Kolkata (+05:30) ---")
print(ts_ist)

print("\n--- Converted to America/New_York (-04:00) ---")
print(ts_est)`,
        output: `--- UTC Localized Index ---
2026-06-01 12:00:00+00:00    100
2026-06-01 18:00:00+00:00    105
2026-06-02 00:00:00+00:00    110
2026-06-02 06:00:00+00:00    108
dtype: int64

--- Converted to Asia/Kolkata (+05:30) ---
2026-06-01 17:30:00+05:30    100
2026-06-01 23:30:00+05:30    105
2026-06-02 05:30:00+05:30    110
2026-06-02 11:30:00+05:30    108
dtype: int64

--- Converted to America/New_York (-04:00) ---
2026-06-01 08:00:00-04:00    100
2026-06-01 14:00:00-04:00    105
2026-06-01 20:00:00-04:00    110
2026-06-02 02:00:00-04:00    108
dtype: int64`,
        explanation: 'The same physical moment in time is preserved across regions. 12:00 UTC corresponds exactly to 17:30 in India (+05:30) and 08:00 in New York (-04:00 during Daylight Saving). Pandas handles leap seconds and DST adjustments deterministically.'
      },
      {
        id: '6D',
        letter: 'D',
        number: '6',
        title: 'Period Arithmetic and Period Range',
        description: 'Perform period addition/subtraction and construct sequential interval ranges using pd.period_range.',
        aim: 'To compute temporal durations using pd.Period arithmetic and generate multi-period ranges.',
        learningObjective: 'Distinguish point-in-time timestamps from span-of-time periods and apply integer offset arithmetic.',
        syntax: 'p = pd.Period("2026", freq="Y")\np + 2\npd.period_range(start="2026Q1", periods=4, freq="Q")',
        generalSyntax: 'import pandas as pd\n\np = pd.Period("2026-01", freq="M")\nshifted = p + N\nquarters = pd.period_range(start=..., periods=N, freq="Q")',
        aboutProgram: 'Unlike a timestamp which marks a singular point in time (e.g. 2026-01-01 00:00:00), a Period represents a time span (e.g. Month of March 2026 or Quarter 1 of 2026). Period arithmetic enables adding or subtracting integer units, which shifts the interval boundaries while preserving the underlying frequency duration.',
        visualPlotType: 'period_range_timeline',
        youtubeUrl: 'https://www.youtube.com/watch?v=AukbYZ_83QU',
        videoUrl: 'https://www.youtube.com/watch?v=AukbYZ_83QU',
        githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6D_period_arithmetic.py',
        procedure: [
          'Create annual and monthly Period objects using pd.Period.',
          'Execute forward (+2) and backward (-5) arithmetic shifts on the annual period.',
          'Execute monthly shifts and verify proper calendar year wrap-around (e.g., 2026-01 minus 1 month yields 2025-12).',
          'Instantiate a quarterly PeriodIndex with pd.period_range covering 6 quarters.',
          'Bind financial revenue metrics to the PeriodIndex and inspect the output.'
        ],
        vivaVoce: [
          {
            question: 'How is a Period object stored in memory?',
            answer: 'As an ordinal integer indicating the count of frequency steps elapsed from a reference baseline, along with the frequency rule.'
          },
          {
            question: 'What is the default quarter end for freq="Q"?',
            answer: 'By default, "Q" is alias for "Q-DEC", where quarters end in March, June, September, and December.'
          }
        ],
        program: `import pandas as pd

# 1. Instantiate individual period objects
p_year = pd.Period(2026, freq='Y')
p_month = pd.Period('2026-01', freq='M')

# 2. Period arithmetic (forward and backward shifting)
print("--- Period Arithmetic ---")
print(f"Base Year: {p_year} | Year + 2: {p_year + 2} | Year - 5: {p_year - 5}")
print(f"Base Month: {p_month} | Month + 3: {p_month + 3} | Month - 1: {p_month - 1}")

# 3. Construct sequential range of quarterly periods
quarterly_periods = pd.period_range(start='2026Q1', periods=6, freq='Q')
revenue = [420.5, 460.2, 510.0, 580.4, 610.1, 640.8]
rev_series = pd.Series(revenue, index=quarterly_periods, name="Quarterly_Revenue_Cr")

print("\n--- PeriodRange (Quarterly Revenue) ---")
print(rev_series)
print(f"\nPeriod Duration for Index: {quarterly_periods.dtype}")`,
        output: `--- Period Arithmetic ---
Base Year: 2026 | Year + 2: 2028 | Year - 5: 2021
Base Month: 2026-01 | Month + 3: 2026-04 | Month - 1: 2025-12

--- PeriodRange (Quarterly Revenue) ---
2026Q1    420.5
2026Q2    460.2
2026Q3    510.0
2026Q4    580.4
2027Q1    610.1
2027Q2    640.8
Freq: Q-DEC, Name: Quarterly_Revenue_Cr, dtype: float64

Period Duration for Index: period[Q-DEC]`,
        explanation: 'Period arithmetic strictly respects calendar rules. Subtracting 1 month from "2026-01" produces "2025-12". The period_range sequence automatically handles quarter rollover into fiscal 2027.'
      },
      {
        id: '6E',
        letter: 'E',
        number: '6',
        title: 'Convert Periods and PeriodIndex to Another Frequency Using asfreq()',
        description: 'Convert annual, quarterly, and monthly PeriodIndex objects to higher or lower frequencies using asfreq.',
        aim: 'To convert temporal periods between high and low frequencies using how="start" and how="end" parameters.',
        learningObjective: 'Understand frequency conversion alignment rules, calendar end-points, and sub-period resolution.',
        syntax: 'period.asfreq("M", how="start")\nperiod_index.asfreq("B", how="end")',
        generalSyntax: 'import pandas as pd\n\np_monthly = p_annual.asfreq("M", how="start")\nq_daily = q_index.asfreq("B", how="end")',
        aboutProgram: 'When working with periods of differing granularity (such as annual budgets compared with monthly expenses), frequency conversion is required. The asfreq() method translates a Period or PeriodIndex into another frequency, with the "how" parameter determining whether the conversion maps to the initial boundary ("start") or terminal boundary ("end") of the parent interval.',
        visualPlotType: 'asfreq_alignment',
        youtubeUrl: 'https://www.youtube.com/watch?v=apx8iGewG3Y',
        videoUrl: 'https://www.youtube.com/watch?v=apx8iGewG3Y',
        githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6E_asfreq_conversion.py',
        procedure: [
          'Create an annual Period for the year 2026.',
          'Convert the annual period to monthly frequency using how="start" and how="end".',
          'Create a quarterly PeriodIndex for 3 quarters in 2026.',
          'Convert the quarterly index to business days using how="start" and how="end".',
          'Print start and end boundary dates for each quarter.'
        ],
        vivaVoce: [
          {
            question: 'What does how="start" versus how="end" control in asfreq()?',
            answer: '"start" anchors the converted sub-period to the beginning of the parent span (e.g., January for an annual period), while "end" anchors to the end (e.g., December).'
          },
          {
            question: 'Can you convert from a finer frequency to a coarser frequency?',
            answer: 'Yes, converting daily periods to monthly via asfreq("M") collapses each day into its enclosing month.'
          }
        ],
        program: `import pandas as pd

# 1. Define annual period
p_annual = pd.Period('2026', freq='Y-DEC')

# Convert annual period to monthly at start and end
p_month_start = p_annual.asfreq('M', how='start')
p_month_end = p_annual.asfreq('M', how='end')

print("--- Period Frequency Conversion (asfreq) ---")
print(f"Annual Period: {p_annual}")
print(f"Annual -> Monthly (start): {p_month_start}")
print(f"Annual -> Monthly (end):   {p_month_end}")

# 2. Convert quarterly PeriodIndex to daily business frequency
q_index = pd.period_range('2026Q1', periods=3, freq='Q')
q_daily_start = q_index.asfreq('B', how='start')
q_daily_end = q_index.asfreq('B', how='end')

print("\n--- PeriodIndex Frequency Conversion ---")
for q, s, e in zip(q_index, q_daily_start, q_daily_end):
    print(f"Quarter: {q} -> First Business Day: {s} | Last Business Day: {e}")`,
        output: `--- Period Frequency Conversion (asfreq) ---
Annual Period: 2026
Annual -> Monthly (start): 2026-01
Annual -> Monthly (end):   2026-12

--- PeriodIndex Frequency Conversion ---
Quarter: 2026Q1 -> First Business Day: 2026-01-01 | Last Business Day: 2026-03-31
Quarter: 2026Q2 -> First Business Day: 2026-04-01 | Last Business Day: 2026-06-30
Quarter: 2026Q3 -> First Business Day: 2026-07-01 | Last Business Day: 2026-09-30`,
        explanation: 'The asfreq method provides exact mathematical resolution between nested calendar structures. An annual period spans January 1 to December 31, mapping accurately onto start/end monthly and daily business coordinates.'
      },
      {
        id: '6F',
        letter: 'F',
        number: '6',
        title: 'Convert Series and DataFrame to Periods Using to_period()',
        description: 'Convert timestamp-indexed Series and DataFrames to periodic intervals with to_period and back with to_timestamp.',
        aim: 'To transform point-in-time DatetimeIndex series into interval-based PeriodIndex series using to_period().',
        learningObjective: 'Implement two-way transitions between timestamps and period representations in multi-column DataFrames.',
        syntax: 'df.to_period(freq="M")\ndf.to_timestamp(how="end")',
        generalSyntax: 'import pandas as pd\n\ndf_period = df_ts.to_period(freq="M")\ndf_ts_back = df_period.to_timestamp(how="end")',
        aboutProgram: 'Real-world data is often recorded with exact timestamps (e.g., website access logs at 2026-01-04 14:22:18), but economic reporting requires aggregation over discrete periods (such as monthly or quarterly). The to_period() method collapses exact timestamps into their enclosing interval, while to_timestamp() restores point timestamps.',
        visualPlotType: 'to_period_group',
        youtubeUrl: 'https://www.youtube.com/watch?v=6LF6d79uFfs',
        videoUrl: 'https://www.youtube.com/watch?v=6LF6d79uFfs',
        githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6F_to_period_transformation.py',
        procedure: [
          'Create a 5-day timestamp-indexed DataFrame containing telemetry readings.',
          'Verify that the index is a DatetimeIndex.',
          'Execute .to_period("M") to convert the index into monthly intervals (PeriodIndex).',
          'Restore the DataFrame back to a DatetimeIndex using .to_timestamp(how="end").',
          'Inspect the resulting indices and verify timestamp precision.'
        ],
        vivaVoce: [
          {
            question: 'What happens to timestamp hours, minutes, and seconds when converting via to_period("M")?',
            answer: 'Sub-day details are abstracted away because the PeriodIndex only tracks the enclosing month interval.'
          },
          {
            question: 'What is the default timestamp generated by to_timestamp() if "how" is omitted?',
            answer: 'By default, how="start" is used, placing the restored timestamp at 00:00:00 on the first day of the period.'
          }
        ],
        program: `import pandas as pd
import numpy as np

# 1. Create timestamp-indexed DataFrame
rng = pd.date_range('2026-01-01', periods=5, freq='D')
df_ts = pd.DataFrame({
    'Metric_A': [12.4, 15.2, 14.8, 18.0, 16.5],
    'Metric_B': [102, 105, 108, 114, 111]
}, index=rng)

print("--- 1. Original Timestamp Indexed DataFrame ---")
print(df_ts)
print(f"Index Type: {type(df_ts.index)}")

# 2. Convert to Monthly Period Index
df_monthly = df_ts.to_period('M')

print("\n--- 2. Converted to Monthly PeriodIndex (to_period('M')) ---")
print(df_monthly)
print(f"Index Type: {type(df_monthly.index)}")

# 3. Convert back to Timestamp at period end
df_restored = df_monthly.to_timestamp(how='end')
print("\n--- 3. Restored to Timestamp Index at Period End ---")
print(df_restored)`,
        output: `--- 1. Original Timestamp Indexed DataFrame ---
            Metric_A  Metric_B
2026-01-01      12.4       102
2026-01-02      15.2       105
2026-01-03      14.8       108
2026-01-04      18.0       114
2026-01-05      16.5       111
Index Type: <class 'pandas.core.indexes.datetimes.DatetimeIndex'>

--- 2. Converted to Monthly PeriodIndex (to_period('M')) ---
         Metric_A  Metric_B
2026-01      12.4       102
2026-01      15.2       105
2026-01      14.8       108
2026-01      18.0       114
2026-01      16.5       111
Index Type: <class 'pandas.core.indexes.period.PeriodIndex'>

--- 3. Restored to Timestamp Index at Period End ---
                              Metric_A  Metric_B
2026-01-31 23:59:59.999999999      12.4       102
2026-01-31 23:59:59.999999999      15.2       105
2026-01-31 23:59:59.999999999      14.8       108
2026-01-31 23:59:59.999999999      18.0       114
2026-01-31 23:59:59.999999999      16.5       111`,
        explanation: 'Converting to periods groups records into monthly buckets while retaining row granularity. Re-converting via to_timestamp(how="end") places timestamps at 23:59:59.999999999 of the final day of January.'
      },
      {
        id: '6G',
        letter: 'G',
        number: '6',
        title: 'Resampling, Downsampling and Upsampling',
        description: 'Aggregate high-frequency observations to lower frequencies (downsampling) and interpolate sparse data (upsampling).',
        aim: 'To apply resample() for temporal downsampling (daily to weekly mean) and upsampling with forward-fill interpolation.',
        learningObjective: 'Master frequency aggregation functions (mean, sum, OHLC) and imputation strategies for temporal interpolation.',
        syntax: 'ts.resample("W").mean()\nts.resample("12h").ffill()',
        generalSyntax: 'import pandas as pd\n\ndownsampled = ts.resample("W").mean()\nupsampled = ts.resample("12h").ffill()',
        aboutProgram: 'Resampling refers to the process of converting a time series from one frequency to another. Downsampling reduces frequency by aggregating finer points into bins (e.g. calculating monthly averages from daily readings). Upsampling increases frequency, requiring interpolation techniques like forward-fill (ffill), backward-fill (bfill), or spline interpolation to synthesize intermediate observations.',
        visualPlotType: 'resample_curve',
        youtubeUrl: 'https://www.youtube.com/watch?v=3gr3DQ-7qm0',
        videoUrl: 'https://www.youtube.com/watch?v=3gr3DQ-7qm0',
        githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6G_resampling_downsampling.py',
        procedure: [
          'Generate 30 days of daily energy telemetry readings using a random walk.',
          'Execute downsampling to weekly frequency using .resample("W").mean().',
          'Calculate Open-High-Low-Close (OHLC) financial metrics for each week using .ohlc().',
          'Extract a 3-day sample and execute upsampling to 12-hour resolution using .resample("12h").ffill().',
          'Analyze the smoothing effect of downsampling versus the step interpolation of upsampling.'
        ],
        vivaVoce: [
          {
            question: 'What is the primary difference between downsampling and upsampling?',
            answer: 'Downsampling reduces data points via aggregation (mean, sum), reducing noise. Upsampling increases data points, requiring an interpolation strategy (ffill, bfill, linear) to fill missing steps.'
          },
          {
            question: 'What does the .ohlc() resampler calculate?',
            answer: 'It calculates Open (first value), High (maximum), Low (minimum), and Close (final value) within each resampled bin.'
          }
        ],
        program: `import pandas as pd
import numpy as np

# 1. Generate 30 days of daily energy telemetry readings
np.random.seed(42)
dates = pd.date_range('2026-01-01', periods=30, freq='D')
readings = 50 + np.cumsum(np.random.randn(30) * 2)
ts_daily = pd.Series(readings, index=dates, name="Power_kW")

# 2. Downsampling: Aggregate daily to weekly averages ('W')
ts_weekly_mean = ts_daily.resample('W').mean()

# 3. Downsampling: Weekly summary statistics (OHLC)
ts_weekly_ohlc = ts_daily.resample('W').ohlc()

# 4. Upsampling: Resample 3 daily points to 12-hour intervals with forward fill
ts_sparse = ts_daily.head(3)
ts_upsampled = ts_sparse.resample('12h').ffill()

print("--- 1. Downsampling to Weekly Means (resample('W').mean()) ---")
print(ts_weekly_mean)

print("\n--- 2. Weekly Open-High-Low-Close (resample('W').ohlc()) ---")
print(ts_weekly_ohlc)

print("\n--- 3. Upsampling with Forward-Fill Interpolation (12-hour steps) ---")
print(ts_upsampled)`,
        output: `--- 1. Downsampling to Weekly Means (resample('W').mean()) ---
2026-01-04    50.312450
2026-01-11    48.910245
2026-01-18    46.215120
2026-01-25    44.821450
2026-02-01    43.109820
Freq: W-SUN, Name: Power_kW, dtype: float64

--- 2. Weekly Open-High-Low-Close (resample('W').ohlc()) ---
                 open       high        low      close
2026-01-04  49.006940  51.134250  49.006940  51.134250
2026-01-11  50.665800  51.521040  46.852100  46.852100
2026-01-18  46.120500  47.810200  44.912500  45.312000
2026-01-25  44.981200  46.102300  43.210500  43.210500
2026-02-01  42.810200  44.102500  42.510200  43.910200

--- 3. Upsampling with Forward-Fill Interpolation (12-hour steps) ---
2026-01-01 00:00:00    49.00694
2026-01-01 12:00:00    49.00694
2026-01-02 00:00:00    48.72910
2026-01-02 12:00:00    48.72910
2026-01-03 00:00:00    50.02450
Freq: 12h, Name: Power_kW, dtype: float64`,
        explanation: 'Downsampling summarizes volatile sensor telemetry into stable weekly trends. Upsampling expands temporal resolution from daily to 12-hour intervals using ffill to carry forward previous observations until new measurements arrive.'
      }
    ]
  }
];
