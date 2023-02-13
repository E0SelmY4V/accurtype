# 精准类型

**简体中文** | [English](./README-en.md)

本项目包含各种类型声明，可让你的 TS 项目的类型更加准确。

本项目不仅包含简单的各种类型，还包含了各种泛型递归类型如加法器、减法器、JSON Schema 解析器、矩阵（二维数组）转置工具等。

[查看简单文档](./doc/README.md)

```ts
import { sub } from 'accurtype';

let a: 7355608;
a = sub(94_327_594, 86_971_986);
console.log(a); // 7355608
```
