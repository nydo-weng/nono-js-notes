# React Demo

## 结构介绍

每个小 Demo 在一个单独的文件夹内, React 的脚手架构建工具选择 vite, 用命令 `npm create vite@latest` 初始化项目, 或者直接 `npm create vite@latest my-vue-app -- --template vue` 来初始化项目

初始化项目之后, `npm install` 安装项目依赖.

修改 `eslint.config.js` 文件, 引入 `eslint-plugin-react` 插件, 并添加 `react.configs.recommended` 规则集.

配置代码格式化工具 **Prettier**,  
虽然 ESLint 可以检查语法和规则, 但它不负责格式化. 结合 Prettier, 可以让代码风格统一, 自动化修复很多小问题.

安装依赖: `npm install -D prettier eslint-config-prettier eslint-plugin-prettier`

- prettier: 代码格式化工具, 只关注代码风格, 安装后可以 `npx prettier --write src/` 通过在根目录添加 .prettierrc 或者 prettier.config.js 来配置格式化规则.
- eslint-config-prettier: 解决 ESLint 与 Prettier 的冲突问题, 因为 ESLint 自身也有一些格式规则, 可能和 Prettier 的规则冲突, 这个插件会关闭 ESLint 中与 Prettier 冲突的规则,保证 ESLint 只负责代码质量和语法, Prettier 负责格式. 是否需要配置? -> 在 ESLint 配置里 extends 加上 `plugin:prettier/recommended`
- eslint-plugin-prettier: 让 ESLint 可以直接识别 Prettier 的格式错误, 把 Prettier 规则当做 ESLint 规则来检查, 显示"格式错误", 可以配合 --fix 或者 vscode 自动修复功能, 一键修复格式问题, 配置 -> 在 ESLint 配置里: extends: ['plugin:prettier/recommended']

配置 ESLint 与 Prettier 集成, 修改 eslint.config.js, 创建 .prettierrc 文件.

配置 package.json -> `scripts` -> `"lint": "eslint ."`, `"lint:fix": "eslint . --fix"`

## 然后就可以在 src 下写 demo 代码了
