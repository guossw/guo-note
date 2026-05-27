# MCP

> 让 LLM 调用外部工具的通信协议

![](../assets/mcp.png)

## MCP Server 开发实践

MCP servers 可以提供三种主要类型的功能：

- Resources（资源）：类似文件的数据，可以被客户端读取（如 API 响应或文件内容）
- Tools（工具）：可以被 LLM 调用的函数（需要用户批准）
- Prompts（提示）：预先编写的模板，帮助用户完成特定任务

Anthropic 为我们提供了一个基于 LLM 的 MCP Server 的 [最佳开发实践](https://modelcontextprotocol.io/docs/develop/build-with-agent-skills)。
