// 这是 vite 初始化的 React JS 项目的 eslint 配置文件
// 是一个使用 新 API defineConfig() 的配置文件
import js from '@eslint/js'; // ESLint 官方规则集, 提供官方推荐配置 (等价于 "extends":"eslint:recommended")
import globals from 'globals'; // 官方库, 提供浏览器 / node 环境下的全局变量定义
import reactHooks from 'eslint-plugin-react-hooks'; // React 官方插件, 检查 Hooks 使用规则
import reactRefresh from 'eslint-plugin-react-refresh'; // Vite 专用的插件, 防止热更新 (HMR) 时出现错误状态
import { defineConfig, globalIgnores } from 'eslint/config'; // 新 API, 用于声明配置对象 (ESLint v9 推荐写法)

// 这里导出一个配置数组, 告诉 ESlint:
// 检查哪些文件
// 用哪些规则
// 用哪些插件
// 忽略哪些目录
export default defineConfig([
  // v9 新写法, 等价于旧版本 .eslintignore: dist/
  // 告诉 ESLint 不要检查 构建产物
  globalIgnores(['dist']),
  {
    // 目标文件范围, 只检查所有的 .js 和 .jsx 文件
    files: ['**/*.{js,jsx}'],
    // 扩展的规则集, *核心逻辑部分*, 加载了三个配置源
    extends: [
      js.configs.recommended, // ESLint 官方推荐规则, 例如禁止未使用变量, 未定义变量等
      reactHooks.configs['recommended-latest'], // React 官方 Hooks 规则, 确保正确使用 useEffect, ueState 等
      reactRefresh.configs.vite, // 专门为 Vite React 模版的开发体验设计, 避免热更新状态错误警告
    ],
    // 语言选项
    languageOptions: {
      ecmaVersion: 2020, // 支持到 哪一版 JS 语法 (ES2020)
      globals: globals.browser, // 让 ESLint 知道浏览器环境的全局变量 (例如 window, document 不会报错)
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true }, // 允许解析 JSX 语法, 在 React 文件中相当于是必要的
        sourceType: 'module', // 支持 import/export 语法 (ES 模块)
      },
    },
    // 自定义规则
    rules: {
      // 禁止声明未使用的变量, 但允许变量名已大写字母或_开头的变量被忽略
      // 很常见, 因为 React 组件名称一般用大写开头, 所以忽略这些变量
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]);
