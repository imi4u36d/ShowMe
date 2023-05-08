# :eyes: Show Me - 个人简历创建生成项目

Show Me是一个前后端分离的个人简历创建生成项目。前端基于Vue3、Pinia、Vite，后端基于SpringBoot。该项目旨在帮助用户快速生成不同风格的个人简历。

## :rocket: 快速开始

1. 克隆该仓库

   ```bash
   git clone https://github.com/{your-username}/show-me.git
   ```

2. 进入项目目录

   ```bash
   cd show-me
   ```

3. 启动前端

   ```bash
   cd frontend
   npm install # 安装依赖
   npm run dev # 启动开发服务器
   ```

4. 启动后端

   ```bash
   cd backend
   mvn clean package # 打包
   java -jar target/show-me.jar # 启动服务器
   ```

5. 访问网站

   在浏览器中访问 http://localhost:3000 即可查看网站。

## :art: 网站特色

- 基于Vue3、Pinia、Vite，前端性能优异。
- 基于SpringBoot，后端安全可靠。
- 提供多种不同风格的简历模板，满足用户不同需求。
- 支持在线编辑和导出PDF，方便用户使用。
- 界面美观，使用简单。

## :hammer_and_wrench: 技术栈

- 前端：Vue3、Pinia、Vite、Element Plus、Axios、html2canvas、jspdf
- 后端：SpringBoot、MyBatis、MySQL、JWT、Swagger

## :busts_in_silhouette: 贡献指南

欢迎各位开发者贡献代码。如果您想为该项目做出贡献，请按照以下步骤：

1. Fork 该仓库
2. 创建一个新的分支（`git checkout -b feature/your-feature-name`）
3. 提交您的修改（`git commit -am 'Add some feature'`）
4. 推送您的分支（`git push origin feature/your-feature-name`）
5. 创建一个新的 Pull Request

## :page_facing_up: 许可证

该项目使用 MIT 许可证。了解更多信息，请查看 [LICENSE](https://github.com/{your-username}/show-me/blob/main/LICENSE) 文件。