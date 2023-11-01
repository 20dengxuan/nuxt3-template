# Nuxt3模版

## 一、从 GitHub 获取代码
```
git clone https://github.com/20dengxuan/nuxt3-template.git
```

## 二、使用技术栈
* [Vue3](https://vuejs.org/)
* [Nuxt3](https://nuxt.com.cn/)
* [TypeScript](https://www.typescriptlang.org/)
* [Unocss](https://unocss.dev/)
* [Naive UI](https://www.naiveui.com/zh-CN/os-theme)
* [Pinia](https://pinia.web3doc.top/)
* [nuxt/i18n](https://i18n.nuxtjs.org/)

## 三、vscode插件配置
* [Eslint](https://eslint.nodejs.cn/) - 脚本代码检查
* [Prettier](https://www.prettier.cn/) - 代码格式化
* [Unocss](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) unocss提示插件
* [i18n-ally](https://github.com/lokalise/i18n-ally/blob/main/README.md) 国际化相关
 > 注意配置
```js
// .vscode>settings.json
"i18n-ally.localesPaths": [
  "locales"
],
"i18n-ally.keystyle": "nested",
"i18n-ally.pathMatcher": "{locale}.{ext}",
"i18n-ally.enabledParsers": ["ts"],
"i18n-ally.sourceLanguage": "zh",
"i18n-ally.displayLanguage": "zh",
"i18n-ally.enabledFrameworks": ["vue"],
```
* [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) vue3 开发必备


## 四、数据请求封装
对 **Nuxt3** 中 **useFetch** Api的二次封装，很简单但基本够用

```js
import type { UseFetchOptions } from "app";
export class Https {
  static fetch<T>(url: string, config: UseFetchOptions<T> = {}) {
    const defaults: UseFetchOptions<T> = {
      baseURL: "/web",
      key: url,
      headers: {},
      onRequest(_ctx) {
        // 请求拦截
        // _ctx.options.headers = {
        //   token: "",
        // };
      },
      onRequestError(){
        // 请求错误拦截
      },
      onResponse(_ctx) {
        // 响应拦截
        // _ctx.response._data = _ctx.response._data.data;
      },
      onResponseError() {
        // 响应错误拦截
      },
    };
    const options = { ...config, ...defaults };
    return useFetch(url, options);
  }

  static get<T>(url: string, config: UseFetchOptions<T> = {}) {
    return this.fetch<T>(url, { ...config, method: "get" });
  }

  static post<T>(url: string, config: UseFetchOptions<T> = {}) {
    return this.fetch<T>(url, { ...config, method: "post" });
  }
}

```

使用
```js
enum API {
  ExhibitionList = "/web/exhibition/list",
}

export const getExhibitionList = (params: ParamsType, option: UseFetchOptions<ResponseDataType>) => {
  return Https.get(API.ExhibitionList);
};

```

> 本地开发注意设置代理
```js
// nuxt.config.ts
nitro: {
  devProxy: {
    "/web": {
      target: "http://baidu.com",
      changeOrigin: true,
      // prependPath: true,
    },
  },
  routeRules: {
    "/web/**": {
      proxy: "http://baidu.com/**",
    },
  },
},

```


## 五、nuxt/i18n 国际化
安装
```js
pnpm add @nuxtjs/i18n@next --save-dev
```

配置
```js
//  nuxt.config.ts
modules: [
  "@nuxtjs/i18n",
],


// i18n.config.ts
import zh from "./locales/zh";
import en from "./locales/en";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zh",
  messages: {
    en,
    zh,
  },
}));
```

使用
```js
<template>
  <div>{{ $t("hello") }}</div>
  <button v-if="$i18n.locale !== 'en'" @click="locale = 'en'">English</button>
  <button v-if="$i18n.locale !== 'zh'" @click="locale = 'zh'">中文</button>
</template>

<script lang="ts" setup>
const { locale } = useI18n();
</script>
```

## 六、pinia 持久化
安装
```js
pnpm i -D @pinia/nuxt @pinia-plugin-persistedstate/nuxt
```

配置
```js
// nuxt.config.ts

export default defineNuxtConfig({
modules: [
  '@pinia/nuxt',
  '@pinia-plugin-persistedstate/nuxt',
]
piniaPersistedstate: {
  storage: "localStorage", //持久化类型
},
})

```

使用
```js
import { defineStore } from "pinia";
export const useUserStore = defineStore(
  "user",
  () => {
    const token = ref("token");

    const setToken = (value: string) => {
      token.value = value;
    };

    return {
      token,
      setToken,
    };
  },
  {
    persist: {
      paths: ["token"], // 持久化字段
      storage: sessionStorage, //持久化类型
    },
  },
);
```
