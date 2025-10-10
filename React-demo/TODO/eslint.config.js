// 在初始 配置文件上 加了自己的配置
// 引入 eslint-plugin-react
// #######################################################
// 这是 vite 初始化的 React JS 项目的 eslint 配置文件
// 是一个使用 新 API defineConfig() 的配置文件
import js from '@eslint/js'; // ESLint 官方规则集, 提供官方推荐配置 (等价于 "extends":"eslint:recommended")
import globals from 'globals'; // 官方库, 提供浏览器 / node 环境下的全局变量定义
import reactHooks from 'eslint-plugin-react-hooks'; // React 官方插件, 检查 Hooks 使用规则
import reactRefresh from 'eslint-plugin-react-refresh'; // Vite 专用的插件, 防止热更新 (HMR) 时出现错误状态
import { defineConfig, globalIgnores } from 'eslint/config'; // 新 API, 用于声明配置对象 (ESLint v9 推荐写法)
// #######################################################
import react from 'eslint-plugin-react'; // 导入 React 专用的 ESLint 插件, 包含了:
// 检测 JSX 语法是否符合规范
// 组件命名, props 使用
// 生命周期是否正确等, 如果没有这个插件 ESLint 不会理解 JSX, 也不识别 React 特有的错误

import prettier from 'eslint-plugin-prettier';
// ESLint 9 + Flat Config + ESM, 直接写 'plugin:prettier/recommended' 会报错
// #######################################################

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
    // #######################################################
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    // 自定义规则
    rules: {
      ...js.configs.recommended.rules, // ESLint 官方推荐规则, 例如禁止未使用变量, 未定义变量等
      // #######################################################
      ...react.configs.recommended.rules, // 来源: eslint-plugin-react, React 推荐规则(如组件命名, JSX 语法检查等)
      // #######################################################
      // ...reactHooks.configs['recommended-latest'].rules, // React 官方 Hooks 规则, 确保正确使用 useEffect, ueState 等
      // 手动写 React Hooks 规则
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      ...reactRefresh.configs.vite.rules, // 专门为 Vite React 模版的开发体验设计, 避免热更新状态错误警告

      // 禁止声明未使用的变量, 但允许变量名已大写字母或_开头的变量被忽略
      // 很常见, 因为 React 组件名称一般用大写开头
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'prettier/prettier': ['error'], // ✅ 将 Prettier 风格错误标记为 ESLint 错误
      // 禁用 React 17+ 不再需要 import React 的规则
      'react/react-in-jsx-scope': 'off',

      'react/prop-types': 'off', // 关闭 prop-types 检查
    },

    settings: {
      // 这是 eslint-plugin-react 这个插件的配置项之一
      // 它告诉 ESLint: 我用的 React 版本是多少, 请根据版本启用对应的规则
      // 如果不写会警告, ESLint 不知道用的 React 是哪个版本, 不确定某些规则是否使用.
      // "detect" 让插件自动取 package.json 找 react 的版本
      react: { version: 'detect' },
    },

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
  },
]);
