import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Guo's note",
  description: 'learning notes, ai, algoritm, protocol...',
  srcDir: 'docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'algolia',
      options: {
        appId: 'MJRDI0LXUM',
        apiKey: 'e9ee5bd812b42c7f3c20973297a3197b',
        indexName: 'guo-note',
      },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/guossw/note' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Guossw',
    },
    sidebar: [
      {
        text: 'AI',
        items: [
          { text: 'Guide', link: '/ai/guide' },
          { text: 'MCP', link: '/ai/mcp' },
        ],
      },
      {
        collapsed: true,
        text: 'Algorithm',
        items: [
          {
            text: '字符串',
            collapsed: true,
            items: [
              { text: '千位分隔数', link: '/algorithm/字符串/千位分隔数' },
              { text: '反转字符串II', link: '/algorithm/字符串/反转字符串II' },
              { text: '最长不含重复字符的子字符串', link: '/algorithm/字符串/最长不含重复字符的子字符串' },
              { text: '字符串的排列', link: '/algorithm/字符串/字符串的排列' },
              { text: '最小覆盖子串', link: '/algorithm/字符串/最小覆盖子串' },
              { text: '回文系列', link: '/algorithm/字符串/回文系列' },
            ],
          },
          {
            text: '数组',
            collapsed: true,
            items: [
              { text: '两数之和', link: '/algorithm/数组/两数之和' },
              { text: '合并两个有序数组', link: '/algorithm/数组/合并两个有序数组' },
              { text: '长度最小的子数组', link: '/algorithm/数组/长度最小的子数组' },
              { text: '双指针', link: '/algorithm/数组/双指针' },
            ],
          },
          {
            text: '链表',
            collapsed: true,
            items: [
              { text: '移除链表元素', link: '/algorithm/链表/移除链表元素' },
              { text: '删除链表的倒数第n个结点', link: '/algorithm/链表/删除链表的倒数第n个结点' },
              { text: '反转链表', link: '/algorithm/链表/反转链表' },
              { text: '环形链表II', link: '/algorithm/链表/环形链表II' },
              { text: '相交链表', link: '/algorithm/链表/相交链表' },
              { text: 'k个一组翻转链表', link: '/algorithm/链表/k个一组翻转链表' },
            ],
          },
          {
            text: '二叉树',
            collapsed: true,
            items: [
              { text: '二叉树的遍历方式', link: '/algorithm/二叉树/二叉树的遍历方式' },
              { text: '二叉树的属性', link: '/algorithm/二叉树/二叉树的属性' },
              { text: '二叉树的修改与构造', link: '/algorithm/二叉树/二叉树的修改与构造' },
              { text: '二叉树的修改与构造2', link: '/algorithm/二叉树/二叉树的修改与构造2' },
              { text: '求二叉搜索树的属性', link: '/algorithm/二叉树/求二叉搜索树的属性' },
              { text: '二叉树的公共祖先', link: '/algorithm/二叉树/二叉树的公共祖先' },
              { text: '二叉树其他题目', link: '/algorithm/二叉树/二叉树其他题目' },
            ],
          },
          {
            text: '动态规划',
            collapsed: true,
            items: [
              { text: '动态规划理论基础', link: '/algorithm/动态规划/动态规划理论基础' },
              { text: '爬楼梯', link: '/algorithm/动态规划/爬楼梯' },
              { text: '不同路径', link: '/algorithm/动态规划/不同路径' },
              { text: '打家劫舍系列', link: '/algorithm/动态规划/打家劫舍系列' },
              { text: '买卖股票的最佳时机', link: '/algorithm/动态规划/买卖股票的最佳时机' },
              { text: '背包系列', link: '/algorithm/动态规划/背包系列' },
              { text: '连续', link: '/algorithm/动态规划/连续' },
            ],
          },
          {
            text: '回溯算法',
            collapsed: true,
            items: [
              { text: '回溯算法', link: '/algorithm/回溯/回溯算法' },
              { text: '回溯排列', link: '/algorithm/回溯/回溯排列' },
              { text: '回溯分割', link: '/algorithm/回溯/回溯分割' },
              { text: '子集', link: '/algorithm/回溯/子集' },
              { text: '子集II', link: '/algorithm/回溯/子集II' },
              { text: '组合总和', link: '/algorithm/回溯/组合总和' },
              { text: 'N皇后', link: '/algorithm/回溯/N皇后' },
            ],
          },
          {
            text: '深度遍历',
            collapsed: true,
            items: [
              { text: '岛屿数量', link: '/algorithm/深度遍历/岛屿数量' },
              { text: '单词搜索', link: '/algorithm/深度遍历/单词搜索' },
              { text: '螺旋矩阵', link: '/algorithm/深度遍历/螺旋矩阵' },
            ],
          },
          {
            text: '贪心算法',
            collapsed: true,
            items: [{ text: '贪心入门', link: '/algorithm/贪心算法/贪心入门' }],
          },
          {
            text: '排序算法',
            collapsed: true,
            items: [
              { text: '冒泡排序', link: '/algorithm/sort/bubbleSort' },
              { text: '选择排序', link: '/algorithm/sort/selectionSort' },
              { text: '插入排序', link: '/algorithm/sort/insertSort' },
              { text: '归并排序', link: '/algorithm/sort/mergeSort' },
              { text: '快速排序', link: '/algorithm/sort/quickSort' },
              { text: '希尔排序', link: '/algorithm/sort/shellSort' },
              { text: '堆排序', link: '/algorithm/sort/heapSort' },
            ],
          },
        ],
      },
      {
        collapsed: true,
        text: 'Protocol',
        items: [
          {
            text: 'Awsome',
            items: [
              { text: 'DNS', link: '/protocol/dns' },
              { text: 'CDN', link: '/protocol/cdn' },
              { text: '网络模型', link: '/protocol/01.网络模型' },
            ],
          },
          {
            text: 'TCP',
            collapsed: true,
            items: [
              { text: 'tcp报文', link: '/protocol/02.tcp报文' },
              { text: 'tcp三次握手', link: '/protocol/03.tcp三次握手' },
              { text: 'tcp四次挥手', link: '/protocol/04.tcp四次挥手' },
              { text: 'tcp中syn攻击', link: '/protocol/05.tcp中syn攻击' },
              { text: 'tcp和udp的区别', link: '/protocol/06.tcp和udp的区别' },
            ],
          },

          {
            text: 'HTTP',
            items: [
              { text: 'http报文结构', link: '/protocol/07.http报文结构' },
              { text: 'http的请求方法', link: '/protocol/08.http的请求方法' },
              { text: 'http状态码', link: '/protocol/09.http状态码' },
              { text: 'http请求体和请求头', link: '/protocol/10.http请求体和请求头' },
              { text: 'cookie', link: '/protocol/11.cookie' },
              { text: 'http优缺点', link: '/protocol/12.http优缺点' },
              { text: 'http队头阻塞', link: '/protocol/13.http队头阻塞' },
            ],
          },
          {
            text: 'HTTPS',
            items: [
              { text: 'https改进了什么', link: '/protocol/14.https改进了什么' },
              { text: 'https的tsl连接过程', link: '/protocol/15.https的tsl连接过程' },
              { text: 'https证书', link: '/protocol/16.https证书' },
            ],
          },
          {
            text: 'HTTP2',
            items: [
              { text: 'http2新功能', link: '/protocol/17.http2新功能' },
              { text: 'http2剖析', link: '/protocol/18.http2剖析' },
              { text: 'http2服务器推送功能', link: '/protocol/19.http2服务器推送功能' },
              { text: 'http3', link: '/protocol/20.http3' },
            ],
          },
        ],
      },
    ],
  },
});
