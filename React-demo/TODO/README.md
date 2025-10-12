# TODO list

## 10.11

已完成:

- 切换 todo 状态
- 新增 todo
- 根据状态筛选 todo
- 删除 todo

## 10.12

- 加上 json-server 模拟后端
  > 1. npm install -D json-server
  > 2. 在项目根目录创建 db.json
  > 3. 启动服务  
  >    npx json-server --watch db.json --port 3001
  > 4. 也可以把启动服务和 npm run dev 绑定  
  >    先安装工具 npm install -D concurrently  
  >    修改 package.json:  
  >    "dev": "concurrently \\"vite\\" \\"json-server --watch db.json --port 3001\\""
