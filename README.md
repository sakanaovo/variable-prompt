# variable-prompt
该插件是用于css变量,只能手动添加映射关系,但是当你的入门插件开发Demo完全没有问题

## 注意
`package.json` 中，如果你的vscode版本不一致，请设置为对应的
+ `version`
+ `@types/vscode`

两个版本要一致

例如:
```json 
{
  "name": "variable-prompt",
  "displayName": "variable-prompt",
  "description": "",
  "version": "1.73.0", // 这里
  "engines": {
    "vscode": "1.73.0" // 这里
  },
  "categories": [
    "Other"
  ],
  "main": "./extension.js",
  "contributes": {},
  "activationEvents": [
    "onLanguage:vue",
    "onLanguage:javascript",
    "onLanguage:typescript",
    "onLanguage:javascriptreact",
    "onLanguage:typescriptreact",
    "onLanguage:scss",
    "onLanguage:css",
    "onLanguage:less"
  ],
  "scripts": {
    "lint": "eslint .",
    "pretest": "npm run lint",
    "test": "node ./test/runTest.js"
  },
  "devDependencies": {
    "@types/vscode": "1.73.0", // 这里
    "@types/glob": "^8.1.0",
    "@types/mocha": "^10.0.1",
    "@types/node": "20.2.5",
    "eslint": "^8.41.0",
    "glob": "^8.1.0",
    "mocha": "^10.2.0",
    "typescript": "^5.1.3",
    "@vscode/test-electron": "^2.3.2"
  }
}
```

请确保你安装了
```js
npm install -g yo generator-code
```

```js
npm install -g vsce
```

如果你想本地打包
```js
vsce package
```
那么会在你当前目录下生成一个 .vsix 文件夹，可能会出现一个错误
比如：

+ 版本不一致
+ 多了一个md 文件，改名或者删除 


附上一个开发插件中文文档地址

[vscode插件中文文档地址](https://liiked.github.io/VS-Code-Extension-Doc-ZH/#/get-started/your-first-extension)

**主要功能**

提供了一些输入 `tsl`、`--tsl` 就会显示出对应的映射关系

提供了鼠标放在css变量上 显式对应的映射值
