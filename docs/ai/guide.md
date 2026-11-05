---
title: AI 指南
date: 2026-09-03 16:00:00
sidebar: auto
tags:
  - ai
categories:
  - ai
---

## 推荐阅读

- [AI 核心概念](https://javaguide.cn/ai/ai-core-concepts.html)
- [AI / LLM](https://www.xuanyuancode.com/ai-llm)

## 学习地图

> 来源：[轩辕的编程宇宙 · AI 大模型学习，从向量到Transformer](https://www.xuanyuancode.com/ai-llm#map)

按依赖关系排列：数学给你语言，神经网络给你机器，NLP 给你历史，Transformer 给你现在。整条路线从「向量」走到「Transformer」，再望向前沿。

### 学习方式

每一项技术，都是为了解决上一代技术解决不了的问题而出现的：

1. **提出问题**：从一个听得懂的具体问题开始
2. **最小方案**：先用最简单的技术方案尝试解决
3. **发现不足**：找到这个方案解决不了的部分
4. **迭代**：针对不足做一轮迭代
5. **总结**：回头看，你刚「发明」的东西就是教科书里的术语

### 卷一 · 基础数学

机器如何「看见」世界？

| 序号 | 课程 | 开场问题 |
| --- | --- | --- |
| 01 | [什么是向量](https://www.xuanyuancode.com/ai-llm/lessons/math-01-vector) | 计算机只认识数字，怎么知道「猫」和「老虎」比「猫」和「金鱼」更像？ |
| 02 | [向量的常见运算](https://www.xuanyuancode.com/ai-llm/lessons/math-02-ops) | 「相似」可以被计算吗？——加法、点积、余弦相似度 |
| 03 | [什么是矩阵](https://www.xuanyuancode.com/ai-llm/lessons/math-03-matrix) | 神经网络每一层的变换用什么表示？ |
| 04 | [什么是线性变换](https://www.xuanyuancode.com/ai-llm/lessons/math-03-transform) | 矩阵乘法到底在做什么？——把整个空间一起旋转、拉伸、搬动 |
| 05 | [什么是梯度](https://www.xuanyuancode.com/ai-llm/lessons/math-04-gradient) | 蒙着眼睛站在山坡上，怎么走到山谷最低点？ |
| 06 | [概率与信息](https://www.xuanyuancode.com/ai-llm/lessons/math-05-prob) | 神经网络的输出为什么叫「概率」？——从频率到交叉熵损失 |

### 卷二 · 神经网络

从一个神经元，到一台会学习的机器。

| 序号 | 课程 | 开场问题 |
| --- | --- | --- |
| 07 | [神经元结构](https://www.xuanyuancode.com/ai-llm/lessons/nn-01-neuron) | 一个只会「加权投票」的小开关，凭什么是智能的起点？ |
| 08 | [激活函数](https://www.xuanyuancode.com/ai-llm/lessons/nn-02-activation) | 为什么一百层直线叠起来还是直线？——给网络引入「弯折」 |
| 09 | [神经网络与训练](https://www.xuanyuancode.com/ai-llm/lessons/nn-03-network) | 神经元叠成一张网，「训练」到底在做什么？ |
| 10 | [损失函数](https://www.xuanyuancode.com/ai-llm/lessons/nn-03-loss) | 「错得有多离谱」怎么变成一个可以比较的数？ |
| 11 | [Softmax](https://www.xuanyuancode.com/ai-llm/lessons/nn-04-softmax) | 一组任意大小的分数，怎么变成一组加起来等于 1 的概率？ |
| 12 | [梯度下降与优化器](https://www.xuanyuancode.com/ai-llm/lessons/nn-05-sgd) | 知道了往哪边走是下坡，一步该迈多大？ |
| 13 | [反向传播](https://www.xuanyuancode.com/ai-llm/lessons/nn-06-backprop) | 输出层错了，第一层的某个权重该负多大责任？ |

### 卷三 · 自然语言处理

让机器读懂语言的几十年接力。

| 序号 | 课程 | 开场问题 |
| --- | --- | --- |
| 14 | [语言的概率游戏：N-gram](https://www.xuanyuancode.com/ai-llm/lessons/nlp-01-ngram) | 不懂语法、不懂语义，光靠「数数」能不能接出下一个词？ |
| 15 | [词向量](https://www.xuanyuancode.com/ai-llm/lessons/nlp-02-word2vec) | 为什么「国王 − 男人 + 女人 ≈ 女王」？词的含义如何变成坐标？ |
| 16 | [前馈神经网络语言模型](https://www.xuanyuancode.com/ai-llm/lessons/nlp-03-ffnn-lm) | N-gram 的稀疏灾难是怎么被绕开的？ |
| 17 | [RNN 循环神经网络](https://www.xuanyuancode.com/ai-llm/lessons/nlp-04-rnn) | 固定窗口看不到更早的词——能不能给网络装上「记忆」？ |
| 18 | [LSTM 长短期记忆网络](https://www.xuanyuancode.com/ai-llm/lessons/nlp-05-lstm) | RNN 的记忆为什么传不远？——给记忆装上「阀门」 |

### 卷四 · 大语言模型

从注意力机制到 ChatGPT。

| 序号 | 课程 | 开场问题 |
| --- | --- | --- |
| 19 | [注意力机制](https://www.xuanyuancode.com/ai-llm/lessons/tf-01-attention) | 「它太累了」——「它」指谁？让每个词自己决定该看向哪里 |
| 20 | [多头注意力](https://www.xuanyuancode.com/ai-llm/lessons/tf-02-multihead) | 一句话里既有指代、又有语法、又有情感——一个「头」忙得过来吗？ |
| 21 | [Transformer 架构](https://www.xuanyuancode.com/ai-llm/lessons/tf-transformer) | 把注意力、FFN、残差拼在一起——2017 年那篇论文到底做了什么？ |
| 22 | [Tokenizer 分词器](https://www.xuanyuancode.com/ai-llm/lessons/tf-03-tokenizer) | 模型眼里的「字」是什么？为什么 strawberry 数不对 r 的个数？ |
| 23 | [编码器、解码器与大语言模型](https://www.xuanyuancode.com/ai-llm/lessons/tf-04-arch) | 同样是 Transformer，BERT 为什么不能生成文章，GPT 为什么是主流？ |
| 24 | [残差连接与层归一化](https://www.xuanyuancode.com/ai-llm/lessons/tf-05-residual) | 96 层 Transformer——梯度怎么从第 96 层传回第 1 层而不消失？ |
| 25 | [预训练 · 监督微调 · 强化学习](https://www.xuanyuancode.com/ai-llm/lessons/tf-06-training) | 「会接话」和「会帮忙」之间有一道鸿沟——ChatGPT 的三个训练阶段 |
| 26 | [KV 缓存、稀疏注意力与 FlashAttention](https://www.xuanyuancode.com/ai-llm/lessons/tf-07-sparse) | 注意力的账单是 O(n²)——处理一本书，工程师用什么手段把它变快？ |
| 27 | [MoE 混合专家架构](https://www.xuanyuancode.com/ai-llm/lessons/tf-08-moe) | GPT-4 据说有 1.8 万亿参数——推理每次却只用其中一小部分，怎么做到的？ |
| 28 | [模型蒸馏](https://www.xuanyuancode.com/ai-llm/lessons/tf-09-distill) | 大模型的能力能「传授」给小模型吗——软标签里藏着什么「暗知识」？ |
| 29 | [串讲：从 N-gram 到 Transformer](https://www.xuanyuancode.com/ai-llm/lessons/tf-10-recap) | 每一代技术，都是来解上一代死结的 |
| 30 | [前沿与未来：下一程](https://www.xuanyuancode.com/ai-llm/lessons/tf-11-frontier) | ChatGPT 之后呢？——当下最活跃的研究方向，与大模型可能的演变 |

### 卷五 · 附录

回到原典与全景。

- [附1 · Transformer 全景图](https://www.xuanyuancode.com/ai-llm/lessons/appendix-transformer-3d)：在一张交互计算图里，跟随 Token 走过注意力、前馈网络与六层计算，观察下一个词如何生成
- [附2 · 《Attention Is All You Need》原文](https://www.xuanyuancode.com/ai-llm/lessons/appendix-attention-paper)：按论文原文顺序逐段翻译，从摘要、架构、公式、实验表格到参考文献
