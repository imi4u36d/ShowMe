# 📄 Resume Generator

Resume Generator 是一个前后端分离的现代化个人简历创建生成项目。前端基于 Vue3、Pinia、Vite，后端基于 SpringBoot 开发。它可以帮助你快速生成各种风格的简历。

## 功能特点

- 支持多种简历模板
- 可以导出 PDF 或 HTML 格式的简历
- 支持云端存储简历数据
- 支持多语言切换

## 技术栈

### 前端

- Vue3：一套用于构建用户界面的渐进式框架。
- Pinia：Vue3 状态管理库，具有更好的类型推导和更少的代码量。
- Vite：下一代前端构建工具。

### 后端

- SpringBoot：基于 Spring 框架快速开发企业级应用的工具。
- MyBatis：持久层框架。
- MySQL：关系型数据库管理系统。

## 开始使用

### 准备工作

确保你已经安装了以下软件：

- Node.js
- JDK8+
- MySQL

### 克隆项目

```bash
git clone https://github.com/username/resume-generator.git
```

### 前端

进入 `resume-generator/frontend` 目录，安装依赖并启动项目：

```bash
cd resume-generator/frontend
npm install
npm run dev
```

### 后端

进入 `resume-generator/backend` 目录，导入数据库并启动项目：

```bash
cd resume-generator/backend
mysql -u root -p < resume_generator.sql
./mvnw spring-boot:run
```

### 访问项目

打开浏览器访问 `http://localhost:3000` 即可开始使用。

## 贡献代码

欢迎提出 issue 或 pull request。