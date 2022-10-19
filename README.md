<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
  <p align="center">一个 渐进式 的<a href="http://nodejs.org" target="_blank">Node.js</a>框架，用于构建高效和可扩展的服务器端应用程序。
</p>
  <!-- A progressive  framework for building efficient and scalable server-side applications. -->
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://github.com/misitebao/yakia/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/misitebao/yakia"/>
  </a>
  <a href="https://github.com/misitebao/yakia/blob/main/LICENSE">
    <img alt="#contributors-" src="https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square"/>
  </a>
  <img height="20" src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" alt="VueJs" />
  <img height="20" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img height="20" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img height="20" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img height="20" src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img height="20" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <br/>
</p>


<div align="center">
<strong>
<samp>

[English](README_en.md) · 简体中文

</samp>
</strong>
</div>

## 目录

[toc]

## 快速开始

### 安装

```bash
# 克隆项目
git clone `repoUrl`

# 安装依赖
npm install

# 启动服务
npm run start

# 打包构建
npm run build
```

### 项目结构:

```
├─ config
├─ public
├─ scripts
├─ src
│  ├─ assets
│  ├─ elements    //存放所有 custom elements
│  ├─ store       //存放所有页面的 store
│  ├─ admin.js    //入口文件，会 build 成  admin.html
│  └─ index.js    //入口文件，会 build 成  index.html
```

### 使用方法

```vue
<template>
  <Slider v-model="value" range />
</template>
<script>
export default {
  data() {
    return {
      value: [20, 50],
    };
  },
};
</script>
```

[→ 查看 demo](www.google.com)

## 贡献者

<table>
    <tbody>
        <tr>
            <td>
                <a target="_blank" href="https://github.com/lalalavard"><img width="60px" src="https://avatars.githubusercontent.com/u/48318812?v=4"></a>
            </td>
            <td>
                <a target="_blank" href="https://github.com/kwobi "><img width="60px" src="https://avatars.githubusercontent.com/u/116106043?v=4"></a>
            </td>
        </tr>
    </tbody>
</table>

## 维护者

- [kwobi](https://github.com/kwobi)
- [lavard](https://github.com/lalalavard)

## 鸣谢
