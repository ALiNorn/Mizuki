---
title: Python内置数据类型及其运算
published: 2026-04-06
pinned: false
description: 人工智能数学原理与算法
tags: [AI]
category: SBAI
draft: false
---

# Python基础 A.2 Python内置数据类型及其运算

- `*.ipynb` 文件可以导出为PDF格式，在BB系统提交一个命名为 "学号_姓名.pdf" 的文件

## 1. 计算等额本息还款金额

等额本息是一种分期偿还贷款的方式，即借款人每月按相等的金额偿还贷款本息，每月还款金额 $P$ 可根据贷款总额 $A$、年利率 $r$ 和贷款月数 $n$ 计算得到，公式为

$$
P=\frac{\frac{r}{12}A}{1-\left(1+\frac{r}{12}\right)^{-n}}
$$

计算当贷款金额为 1000000，贷款时间为 30 年，年利率分别为 4%、5% 和 6% 时的每月还款金额和还款总额。输出结果在小数点以后保留两位有效数字。

答案：

- `(4774.15, 1718695.06)`
- `(5368.22, 1932557.84)`
- `(5995.51, 2158381.89)`

```python
#TODO:# 等额本息还款计算
def calculate_equal_installment(A, r, n):
    m = n * 12  # 总还款月数
    # 还款金额公式
    P = (r/12 * A) / (1 - (1 + r/12) ** (-m))
    T = P * m #还款总额
    return round(P, 2), round(T, 2)

if __name__ == "__main__":
    # 题目给定参数
    A = 1000000                 # 贷款金额 100万元
    y = 30                      # 贷款期限 30年
    rates = [0.04, 0.05, 0.06]  # 年利率 4%、5%、6%

    print("=" * 50)
    print(f"贷款金额: {A:,.2f} 元 | 贷款期限: {y} 年")
    print("=" * 50)
    print(f"{'年利率':<13} {'每月还款额(元)':<15} {'还款总额(元)':<20}")
    print("-" * 50)

    for rate in rates:
        P, T = calculate_equal_installment(A, rate, y)
        print(f"{rate*100:>5.1f}%  {P:>18,.2f}  {T:>20,.2f}")

    print("=" * 50)
```

## 2. 计算三角形的内角

定义三个变量 `a=3; b=6; c=7` 表示一个三角形的三个边的长度，使用公式

$$
a^2 = b^2 + c^2 - 2bc \cos \alpha
$$

$$
b^2 = a^2 + c^2 - 2ac \cos \beta
$$

$$
c^2 = a^2 + b^2 - 2ab \cos \gamma
$$

分别计算三个内角 $(\alpha, \beta, \gamma)$ 的度数，然后检验等式 $\alpha + \beta + \gamma = 180$ 是否成立。

答案：

`25.208765296758365 58.41186449479884 96.37937020844281`

```python
#TODO:
import math
import numpy as np
a=3
b=6
c=7
#计算各个角的余弦值
cosA=(b**2+c**2-a**2)/(2*b*c)
cosB=(a**2+c**2-b**2)/(2*a*c)
cosC=(a**2+b**2-c**2)/(2*a*b)

#计算各个角的弧度值并转换为角度
A=np.arccos(cosA)*180/math.pi
B=np.arccos(cosB)*180/math.pi
C=np.arccos(cosC)*180/math.pi
print(f"α={A}°\nβ={B}°\nγ={C}°")
print(f"α+β+γ={A+B+C}°")
```

## 3. list 类型的运算

定义两个列表 `s=[2,4,0,1,3,9,5,8,6,7]`；`t=[2,6,8,4]`。在 Ipython 中对于 `s` 和 `t` 运行程序 2.9 中 `In[30]:` 行开始的所有运算，并记录输出结果。

若某个运算修改了 `s`，在运行下一个运算之前需要再设置 `s=[2,4,0,1,3,9,5,8,6,7]`。若某个运算需要一些参数（如 `i`、`j` 和 `x` 等），可自行设定。

:::warning
太多了，不写了
:::