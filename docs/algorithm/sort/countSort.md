---
title: 基数排序
date: 2020-05-19 15:05:55
sidebar: auto
tags:
  - 算法与数据结构
  - 排序算法
categories:
  - 算法与数据结构
---

基数排序（Radix Sort）是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串和特定格式的浮点数，所以基数排序也并不只能用于整数。

## 算法步骤

- 取得数组中的最大数，并取得其位数；
- 从最低位开始，依次进行一次稳定的排序（通常借助计数排序）；可用桶（0~9）按当前位收集，再按桶顺序回收；
- 从最低位到最高位重复上一步，最终得到有序序列。

时间复杂度 `O(d·(n+k))`，其中 `d` 为位数，`k` 为基数；空间复杂度 `O(n+k)`。稳定排序。

## 基本实现

以非负整数、十进制（k=10）为例：

```js
function radixSort(arr) {
  if (arr.length === 0) return arr;

  const max = Math.max(...arr);
  let exp = 1;

  while (Math.floor(max / exp) > 0) {
    countingByDigit(arr, exp);
    exp *= 10;
  }
  return arr;
}

// 按某一位做计数排序（稳定）
function countingByDigit(arr, exp) {
  const buckets = Array.from({ length: 10 }, () => []);
  for (const num of arr) {
    const digit = Math.floor(num / exp) % 10;
    buckets[digit].push(num);
  }
  let i = 0;
  for (const bucket of buckets) {
    while (bucket.length) arr[i++] = bucket.shift();
  }
}

// test
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr));
// [2, 24, 45, 66, 75, 90, 170, 802]
```

---

- 动画来源 [图解面试算法](https://github.com/MisterBooo/LeetCodeAnimation)
