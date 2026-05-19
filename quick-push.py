import subprocess
from datetime import datetime
import os


def git_auto_commit_time():
    """
    自动提交并附带时间戳的提交信息
    """
    try:
        # 检查是否有需要提交的更改
        result = subprocess.run(
            ["git", "status", "--porcelain"], capture_output=True, text=True
        )

        if not result.stdout.strip():
            print("📭 没有需要提交的更改")
            return True

        # 获取当前时间
        current_time = datetime.now()

        # 格式化时间选项（多种格式）
        time_formats = {
            "standard": current_time.strftime("%Y-%m-%d %H:%M:%S"),
            "compact": current_time.strftime("%Y%m%d_%H%M%S"),
            "readable": current_time.strftime("%b %d %Y, %I:%M %p"),
            "timestamp": str(int(current_time.timestamp())),
        }

        # 使用标准格式
        time_str = time_formats["standard"]

        # 获取当天提交次数（用于生成序列号）
        log_result = subprocess.run(
            ["git", "log", "--oneline", "--since=midnight", "--pretty=format:%s"],
            capture_output=True,
            text=True,
        )

        # 生成提交信息（带序号）
        commit_message = f"Updated at {time_str}"

        # 执行git操作
        print(f"🕒 提交时间: {time_str}")
        print(f"📝 提交信息: {commit_message}")

        subprocess.run(["git", "add", "."], check=True)
        subprocess.run(["git", "commit", "-m", commit_message], check=True)

        # 尝试推送
        push_result = subprocess.run(["git", "push"], capture_output=True, text=True)

        if push_result.returncode == 0:
            print("✅ 提交并推送成功")
            return True
        else:
            print("⚠️  提交成功但推送失败")
            print(f"   错误信息: {push_result.stderr[:100]}...")
            return False

    except Exception as e:
        print(f"❌ 操作失败: {e}")
        return False


# 使用示例
if __name__ == "__main__":
    git_auto_commit_time()
