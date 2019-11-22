(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{241:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("p",[a._v("假设你已经安装了 "),s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Node.js"),s("OutboundLink")],1),a._v(" 和 ("),s("a",{attrs:{href:"https://adoptopenjdk.net/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java"),s("OutboundLink")],1),a._v(" 或"),s("a",{attrs:{href:"http://www.graalvm.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("GraalVM"),s("OutboundLink")],1),a._v(")，安装工程管理开发工具。")]),a._v(" "),s("h2",{attrs:{id:"使用-npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-npm"}},[a._v("#")]),a._v(" 使用 NPM")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" es4x-pm "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或 npm install -g es4x-pm")]),a._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("使用"),s("code",[a._v("npm")]),a._v("安装工程是我们比较推崇的方式，因为可以轻松的升级依赖而且在不同的"),s("strong",[a._v("操作系统")]),a._v("上可移植性较好。")])]),a._v(" "),s("h2",{attrs:{id:"操作系统打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作系统打包"}},[a._v("#")]),a._v(" 操作系统打包")]),a._v(" "),s("p",[a._v("当在有包数量限制的持续集成环境中工作时，可以解压预先打包好的tar/zip文件来安装包管理器（pm）。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ES4X")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'0.9.0'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -sL "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  https://github.com/reactiverse/es4x/releases/download/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ES4X")]),a._v("/es4x-pm-"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ES4X")]),a._v("-bin.tar.gz "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" zx --strip-components"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" -C /usr/local\n")])])]),s("p",[a._v("对于Windows操作系统可以用"),s("code",[a._v("zip")]),a._v("文件来取而代之用以做同样的事情。")]),a._v(" "),s("h2",{attrs:{id:"验证安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证安装"}},[a._v("#")]),a._v(" 验证安装")]),a._v(" "),s("p",[a._v("此时在你的path里面应该存在一个"),s("code",[a._v("es4x")]),a._v("命令，你可以按如下指示进行测试：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ es4x --help\n\nUsage: java -jar /usr/local/bin/es4x-bin.jar [COMMAND] [OPTIONS]\n            [arg...]\n\nCommands:\n    bare         Creates a bare instance of vert.x.\n    dockerfile   Creates a generic Dockerfile for building and deploying the\n                 current project.\n    init         Initializes the 'package.json' to work with ES4X.\n    install      Installs required jars from maven to 'node_modules'.\n    list         List vert.x applications\n    run          Runs a JS script called <main-verticle> in its own instance of\n                 vert.x.\n    start        Start a vert.x application in background\n    stop         Stop a vert.x application\n    version      Displays the version.\n\nRun 'java -jar /usr/local/bin/es4x-bin.jar COMMAND --help' for\nmore information on a command.\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("为了达到最佳的实验效果和性能表现，请安装"),s("a",{attrs:{href:"https://www.graalvm.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("GraalVM"),s("OutboundLink")],1),a._v("。在使用标准JDK时，小于Java11的版本将在"),s("code",[a._v("解释")]),a._v("模式（"),s("code",[a._v("Interpreted")]),a._v(" mode）下运行，这种模式不利于性能提升也不适合用于生产环境。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);