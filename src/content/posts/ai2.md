---
title: 分支和迭代
published: 2026-04-12
pinned: false
description: 人工智能数学原理与算法
tags: [AI]
category: SBAI
draft: false
---

# Python基础 A.3 分支和迭代

- 在 Blackboard 系统提交一个文本文件（`txt` 后缀），文件中记录每道题的源程序和运行结果。

## 1. 考拉兹猜想

定义一个从给定正整数 `n` 构建一个整数序列的过程如下。开始时序列只包含 `n`。如果序列的最后一个数 `m` 不为 1，则根据 `m` 的奇偶性向序列追加一个数。如果 `m` 是偶数，则追加 `m/2`，否则追加 `3*m+1`。考拉兹猜想（Collatz conjecture）认为从任意正整数构建的序列都会以 1 终止。

编写程序读取用户输入的正整数 `n`，然后在 `while` 循环中输出一个以 1 终止的整数序列。输出的序列显示在一行，相邻的数之间用空格分隔。

示例：

- 输入 `17`
- 输出 `17 52 26 13 40 20 10 5 16 8 4 2 1`

提示:
在本题中，需要执行：
- 使用 `input()` 函数读入 `n`。 `input` 函数的返回值是一个 `str`，需要用`int(input())`来转换成整数。
- 检查用户输入的 `n` 是否小于或等于 0。
- 输出初始的 `n`。
- 进入循环，循环的退出条件是 `n == 1`。
- 在循环中，判断 `n` 的奇偶性，做出不同的操作。

注意：默认情况下， `print()` 会在输出后换行，用 `print(n, end=" ")` 表示输出后不换行，而
是加一个空格。这样每次迭代的结果会显示在同一行。

```python
#TODO:
n=int(input("输入一个数n:"))
while n!=1:
    print(n,end=" ")
    if n%2==1 :
        n = n*3+1
    else:
        n//=2 
print(n)
```

## 2. 字符串加密

编写程序实现基于偏移量的字符串加密。加密的过程是对原字符串中的每个字符对应的 Unicode 值加上一个偏移量，然后将得到的 Unicode 值映射到该字符对应的加密字符。

用户输入一个不小于 `-15` 的非零整数和一个由大小写字母或数字组成的字符串，程序生成并输出加密得到的字符串。

示例：

- 输入偏移量 `10` 和字符串 `Attack at 1600`
- 输出 `K~~kmu*k~*;@::`

提示：

- 读入偏移量 `n` 并检查是否在有效范围内。
- 读入待加密的字符串 `s`。
- 遍历字符串中的每个字符，使用 `ord(char)` 获取其 Unicode 值，加上偏移量 `n`，然后用 `chr(int)` 转换为新字符。
- 将加密后的字符拼接成字符串并输出。

```python
#TODO:
n=int(input("输入偏移量(不小于-15)："))
while True :
    if type(n)==int and n!=0 and n>=-15:
        break
    print("偏移量非法，重新输入")
    n=int(input("输入偏移量(不小于-15的非零整数)："))
chars=input("输入待加密字符串：")
for char in chars:
    a=ord(char)
    b=chr(a+n)
    print(b,end="")
```

## 3. 推导式转换为 `for` 语句

将以下代码中的所有推导式转换为 `for` 语句。


```python
nums = {25, 18, 91, 365, 12, 78, 59}
multiplier_of_3 = [n for n in nums if n % 3 == 0]
print(multiplier_of_3)
square_of_odds = {n*n for n in nums if n % 2 == 1}
print(square_of_odds)

s = [25, 18, 91, 365, 12, 78, 59, 18, 91]
sr = {n:n%3 for n in set(s)}
print(sr)
tr = {n:r for (n,r) in sr.items() if r == 0}
print(tr)
```

提示

题目提供了 4 个推导式，包括列表推导式、集合推导式和字典推导式。要将每个推导式转换为等价的 for 循环形式。

注意每个推导式的返回值类型，向正确类型的空初始值中插入内容。列表插入元素的
命令是 `list.append(n)`，集合插入元素的命令是 `set.add(n)`，字典插入元素的命令是 `sr[n] = m`。

```python
#TODO:
nums={25,18,91,365,12,78,58}
multiplier_of_3=[]
for n in nums:
    if n%3==0:
        multiplier_of_3.append(n)
print(multiplier_of_3)

square_of_odds=set()
for n in nums:
    if n%2==1:
        square_of_odds.add(n**2)
print(square_of_odds)

s=[25, 18, 91, 365, 12, 78, 59, 18, 91]
sr={}
for n in set(s):
    sr[n]=n%3
print(sr)

tr={}
for (n,r) in sr.items():
    if r==0:
        tr[n]=r
print(tr)
```

## 4. 二分查找

编写一个程序：使用二分查找给定的包含若干整数的列表中是否存在给定的整数 `k`。使用二分查找的前提是列表已按照从小到大排序。为此，程序需要先判断列表是否已经完成排序。若未完成排序，则需调用 `qsort` 函数进行排序并输出排序结果。

下面已列出了部分代码，需要实现函数 `is_sorted` 和递归函数 `binary_search`。`binary_search` 在列表的索引值属于闭区间 `[low, high]` 的元素中查找 `k`，若找到则返回 `k` 的索引值，否则返回 `-1`。

### 提示

本实验需要完成 `is_sorted` 和 `binary_search` 两个函数：
- `is_sorted` 函数可以使用循环遍历数组，与前一个数值逐一比较，查找是否有不符合顺序的位置，如果有则返回 `False`，如果都满足有序则返回 `True`。
- `binary_search` 函数请使用递归写法，先判断 `[low, high]` 闭区间中点的值，与期望查找的值 `k` 做比较，根据中点值与 `k` 的大小关系，调用递归。

### 注意事项

- 递归函数需要退出条件，比如数组的长度小于 2。
- 若区间长度为 2，即 `high = low + 1`，递归查找的 `[low, mid-1]` 区间可能为空或非法，可以设置长度小于等于 2 作为退出条件。
- 若无法查找到 `k`，则返回 `-1`。
- 本实验不考虑数组有重复的值。

```python
def is_sorted(s):
#TODO:
    length=len(s)
    if(length<=1):
        return True
    for i in range(1,length):
        if s[i]<s[i-1]:
            return False
    return True


def qsort(s):
    if len(s) <= 1: return s
    s_less = []; s_greater = []; s_equal = []
    for k in s:
        if k < s[0]:
            s_less.append(k)
        elif k > s[0]:
            s_greater.append(k)
        else:
            s_equal.append(k)
    return qsort(s_less) + s_equal + qsort(s_greater)


def binary_search(s, low, high, k):
    #TODO:
    if low>high:
        return -1
    mid=(low+high)//2
    if s[mid]==k:
        return mid
    elif s[mid]>k:
        return binary_search(s, low, mid-1, k)
    else:
        return binary_search(s, mid+1, high, k)


s = [5, 6, 21, 32, 51, 60, 67, 73, 77, 99]
if not is_sorted(s):
    s = qsort(s)
    print(s)

print(binary_search(s, 0, len(s) - 1, 5))
print(binary_search(s, 0, len(s) - 1, 31))
print(binary_search(s, 0, len(s) - 1, 99))
print(binary_search(s, 0, len(s) - 1, 64))
print(binary_search(s, 0, len(s) - 1, 51))
```