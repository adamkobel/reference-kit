# Bar chart

Simple vertical bar chart with labels and value annotations.

```python
import matplotlib.pyplot as plt

categories = ['A', 'B', 'C', 'D']
values = [23, 45, 56, 12]

fig, ax = plt.subplots(figsize=(6, 4))
bars = ax.bar(categories, values, color='C0', edgecolor='k')

ax.set_title('Sample Bar Chart')
ax.set_xlabel('Category')
ax.set_ylabel('Value')
ax.grid(axis='y', linestyle='--', alpha=0.5)

# value labels above bars
for bar in bars:
    h = bar.get_height()
    ax.annotate(f'{h}',
                xy=(bar.get_x() + bar.get_width() / 2, h),
                xytext=(0, 3),
                textcoords='offset points',
                ha='center', va='bottom')

plt.tight_layout()
plt.show()
```