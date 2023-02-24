(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{409:function(t,n,a){"use strict";a.r(n);var e=a(2),s=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"做了2次架构演变-算是入了微服务的门吧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#做了2次架构演变-算是入了微服务的门吧"}},[t._v("#")]),t._v(" 做了2次架构演变，算是入了微服务的门吧~")]),t._v(" "),n("h2",{attrs:{id:"一、初见dousheng"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、初见dousheng"}},[t._v("#")]),t._v(" 一、初见Dousheng")]),t._v(" "),n("h3",{attrs:{id:"_1-架构思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-架构思路"}},[t._v("#")]),t._v(" （1）架构思路")]),t._v(" "),n("p",[t._v("因为自己以前是一个"),n("code",[t._v("Javer")]),t._v("，对传统的"),n("code",[t._v("MVC")]),t._v("三层架构还算比较熟悉，就巨石架构而言，使用"),n("code",[t._v("MVC")]),t._v("的架构方式，模块还算是比较清晰了。")]),t._v(" "),n("p",[t._v("因为接触了一门新的语言"),n("code",[t._v("GoLang")]),t._v("，利用一些熟悉的事物过渡到不太熟悉的领域。是我们人性所趋。")]),t._v(" "),n("p",[t._v("所以在Dousheng的架构演变过程中，借鉴了MVC的思想，引入"),n("code",[t._v("似MVC")]),t._v("的架构方式。")]),t._v(" "),n("p",[t._v("也就是：")]),t._v(" "),n("ol",[n("li",[t._v("控制层"),n("code",[t._v("（Handler）")]),t._v("：用于控制网络请求。")]),t._v(" "),n("li",[t._v("业务层"),n("code",[t._v("（Service）")]),t._v("：用于处理具体业务，还有简单的数据库操作。")]),t._v(" "),n("li",[t._v("持久层"),n("code",[t._v("（Dao）")]),t._v("：用于进行数据库的操作。")])]),t._v(" "),n("p",[t._v("又因为没有类似Spring的框架来管理依赖"),n("code",[t._v("（虽然我们的项目中引入了IoC，在后面介绍~）")]),t._v('，我们这里并没有严格的区分业务层和持久层。所以我们最初的架构是"两层半"：'),n("code",[t._v("Handler -> Service + Dao")]),t._v("。")]),t._v(" "),n("p",[t._v("了解了初次架构的设计思路后，我们来看一些直观的表达。")]),t._v(" "),n("h4",{attrs:{id:"_1、架构图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、架构图"}},[t._v("#")]),t._v(" 1、架构图")]),t._v(" "),n("p",[t._v("简单画一幅图来表示上面的思路就是：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4981e2df260f4229bac6f2644d78cb39~tplv-k3u1fbpfcp-zoom-1.image",alt:"image-20230220003052506"}})]),t._v(" "),n("p",[t._v("这样比较传统的单体架构，较容易理解，就不多解释了。直接来看看拆分后的目录结构。")]),t._v(" "),n("h4",{attrs:{id:"_2、目录结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、目录结构"}},[t._v("#")]),t._v(" 2、目录结构")]),t._v(" "),n("p",[t._v("再来看看架构的目录结构，一些辅助包，暂时不需要关注，可查看对应的文档。现在只需要关注业务模块的分层即可。")]),t._v(" "),n("h5",{attrs:{id:"目录结构概览-解读"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录结构概览-解读"}},[t._v("#")]),t._v(" 目录结构概览[解读]")]),t._v(" "),n("div",{staticClass:"language-tex extra-class"},[n("pre",{pre:!0,attrs:{class:"language-tex"}},[n("code",[t._v("DouSheng            # 极简版抖音 APP\n├── apps            # 所有服务模块\n│   ├── all         # 统一管理所有模块实例的注册"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("驱动加载的方式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n│   ├── comment     # ===评论模块===\n│   │   ├── api     # 控制层(Handler)\n│   │   ├── impl    # 业务层(Service) + 持久层(Dao)\n│   │   └── pb\t    # interface 、model \n│   ├── user        # ===用户模块===\n│   │   ├── api     \n│   │   ├── impl\n│   │   └── pb\n│   └── video       # ===视频模块===\n│       ├── api\n│       ├── impl\n│       └── pb\n├── cmd             # CLI\n├── common.pb       # 放置公共的protobuf文件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("可抽离"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n├── conf            # 项目配置对象\n├── docs            # 项目相关文档\n├── etc             # 项目具体配置\n├── ioc             # IoC容器"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("可抽离"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n├── protocol        # 提供协议\n├── utils           # 工具包\n└── version         # 版本信息\n")])])]),n("h5",{attrs:{id:"部分主要文件概览-解读"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部分主要文件概览-解读"}},[t._v("#")]),t._v(" 部分主要文件概览[解读]")]),t._v(" "),n("div",{staticClass:"language-tex extra-class"},[n("pre",{pre:!0,attrs:{class:"language-tex"}},[n("code",[t._v("├── apps                            # 所有的业务模块\n│   ├── all                         # 驱动注册所有的IOC容器实例\n│   │   └── auto_register.go\n│   ├── user                        # 以用户模块举例\n│   │   ├── api                     # 提供的 API 接口\n│   │   │   ├── http.go             # 使用 HTTP 的方式暴露 控制层逻辑\n│   │   │   └── user.go             # user服务模块暴露的方法\n│   │   ├── app.go                  # user模块的结构体方法\n│   │   ├── impl                    # user.ServerService 的实现\n│   │   │   ├── dao.go              # 可以看作是 持久层逻辑\n│   │   │   ├── impl.go             # 可以看作是 业务层逻辑\n│   │   │   ├── user.go             # user.ServerService 接口方法的实现\n│   │   │   └── user_test.go        # 此模块测试用例【注：必写，一般用于测试本模块CURD的功能】\n│   │   ├── pb                      # 此模块的protobuf文件，里面有（接口方法、请求model、响应model、本模块model）\n│   │   │   └── user.proto      \n│   │   ├── README.md               # 本模块说明\n│   │   ├── user.pb.go              # 利用 protoc 生成（结构体）\n│   │   └── user_grpc.pb.go         # 利用 protoc 生成（接口）\n├── cmd                             # 用于启动项目\n│   ├── root.go                     \n│   └── start.go                    # 启动逻辑在这\n├── common                          # 定义的公共的protobuf文件，可抽离\n│   ├── common.pb.go\n│   └── pb\n│       └── common.proto\n├── conf                            # 项目配置对象\n│   ├── app.go                      # 此项目的配置\n│   ├── config.go                   # 统一配置\n│   ├── config_test.go              \n│   ├── load.go                     # 加载所有配置\n│   ├── log.go                      # 日志相关配置\n│   └── mysql.go                    # mysql相关配置\n├── etc\n│   ├── dousheng.toml               # 项目配置文件位置【可换成其他的，用其他库解析】"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("禁止上传github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n│   └── dousheng.toml.template      # 配置文件模板"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("可上传github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n├── ioc                             # IoC容器\n│   ├── all.go                      # 统一所有容器\n│   ├── gin.go                      # Gin HTTP 服务容器\n│   ├── grpc.go                     # GRPC 服务容器\n│   └── internal.go                 # 内部服务容器\n├── Makefile                        # 利用Makefile管理项目"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("相当于一个脚手架"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n├── utils                           # 放置一些通用的工具\n│   └── md5.go  \n")])])]),n("p",[t._v("看完了目录结构，应该能很清晰的看出分了三个模块"),n("code",[t._v("（user、comment、video）")]),t._v("，并且每一个模块都有自己完全独立的“两层半”架构。")]),t._v(" "),n("p",[t._v("既然还算清晰的对模块进行了划分。那为什么还要演变呢？")]),t._v(" "),n("h3",{attrs:{id:"_2-遇到的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-遇到的问题"}},[t._v("#")]),t._v(" （2）遇到的问题")]),t._v(" "),n("p",[t._v("尽管也是分模块开发，但是最终还是会打包并部署，还是为单体应用。不是说不行，但是可会遇到一些问题：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("其中最主要的问题就是，这个应用最终会太复杂，以至于任何单个开发者都可能搞不懂它。")])]),t._v(" "),n("li",[n("p",[t._v("应用无法扩展、可靠性低，一炸全炸，可能会出现严重的单点故障。")])]),t._v(" "),n("li",[n("p",[t._v("最终，想要实现应用的敏捷性开发和部署变得很难。")])])]),t._v(" "),n("p",[t._v("当业务体量不大的时候，单体架构可能会更受人们青睐，也不会引入更多额外的资源、技术复杂度...")]),t._v(" "),n("p",[t._v("但是当业务体量、用户体量一旦增长了起来，单体架构很难稳定的抗住冲击。再加上"),n("code",[t._v("Go-To-Byte")]),t._v("也想学习一下微服务开发。")]),t._v(" "),n("p",[t._v("所以，我们进行了架构的第一次演变...")]),t._v(" "),n("h2",{attrs:{id:"二、第一次演变"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、第一次演变"}},[t._v("#")]),t._v(" 二、第一次演变")]),t._v(" "),n("h3",{attrs:{id:"_1-架构思路-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-架构思路-2"}},[t._v("#")]),t._v(" （1）架构思路")]),t._v(" "),n("p",[t._v("人类自古就有"),n("strong",[t._v("化繁为简、分而治之")]),t._v("的思想，我们可以将一个复杂而庞大的业务，抽象成一个个简单的服务，然后单独的分开处理。我觉得这也是微服务的核心思路。")]),t._v(" "),n("p",[t._v("但是，在每一个单独的服务中，我们还是保留了MVC的”两层半架构“。再来看看一些直观的表达：")]),t._v(" "),n("h4",{attrs:{id:"_1、架构图-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、架构图-2"}},[t._v("#")]),t._v(" 1、架构图")]),t._v(" "),n("p",[t._v("我们原先根据业务功能，对模块进行了垂直划分，然后在划分出来的模块中，进行了水平划分，如下图所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/903f007dfda04ea3a8221373c2d86d1f~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),n("p",[t._v("从图中可以发现，拆分出来的每一个服务，我们都用不一样的端口，不一样的进程，运行了起来。对外部提供的服务，通过HTTP的方式暴露出去。而内部服务间的调用，就不再是通过文件路由引用了，而是通过GRPC协议暴露出去。")]),t._v(" "),n("p",[t._v("看完了架构图，我们来看看大致的目录结构。")]),t._v(" "),n("h4",{attrs:{id:"_2、目录结构-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、目录结构-2"}},[t._v("#")]),t._v(" 2、目录结构")]),t._v(" "),n("h5",{attrs:{id:"总目录结构概览-解读"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总目录结构概览-解读"}},[t._v("#")]),t._v(" 总目录结构概览[解读]")]),t._v(" "),n("p",[t._v("还是以用户中心、视频服务、评论服务举例。")]),t._v(" "),n("div",{staticClass:"language-tex extra-class"},[n("pre",{pre:!0,attrs:{class:"language-tex"}},[n("code",[t._v("DouSheng\n├── dou_kit\t\t\t # ===简单的分Kit公共包===\n│\t.....\n├── user_center\t\t\t # ===用户服务===\n│\t.....\n└── video_service                # ===视频服务===\n│\t.....\n└── comment_service              # ===评论服务===\n│\t.....\n")])])]),n("h5",{attrs:{id:"详细一些的结构概览-解读"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#详细一些的结构概览-解读"}},[t._v("#")]),t._v(" 详细一些的结构概览[解读]")]),t._v(" "),n("p",[t._v("这里以用户中心为例，展开目录结构：")]),t._v(" "),n("div",{staticClass:"language-tex extra-class"},[n("pre",{pre:!0,attrs:{class:"language-tex"}},[n("code",[t._v("DouSheng\n├── dou_kit\t\t\t # ===简单的分Kit公共包===\n│   ├── conf\t\t\t # 配置文件\n│   ├── constant\t\t # 常量\n│   ├── docs.sql\t\t # 部分文档\n│   ├── exception\t\t # 统一error处理\n│   └── ioc\t\t\t # IOC容器\n├── user_center\t\t\t # ===用户服务===\n│   ├── apps                     # 包含的模块\n│   │   ├── token                # token模块\n│   │   │   ├── impl\n│   │   │   └── pb\n│   │   ├── user                 # 用户模块\n│   │   │   ├── api\n│   │   │   ├── impl\n│   │   │   └── pb\n│   ├── client.rpc.middlerware   # 用户中心提供的客户端 \n│   ├── cmd                      # 命令行工具\n│   ├── common                   # 模块内公共工具\n│   │   ├── constant\n│   │   └── utils\n│   ├── docs                     # 模块内文档\n│   │   ├── example\n│   │   ├── sql\n│   │   └── static.image\n│   ├── etc                      # 用户中心的配置文件\n│   ├── protocol                 # 对外暴露的协议     \n│   └── version                  # 用于注入版本信息\n└── video_service                # ===视频服务===\n│\t.....\n└── comment_service              # ===评论服务===\n│\t.....\n")])])]),n("p",[t._v("看完了演进后的架构图和目录结构。其实这就是一个简单的微服务拆分了。核心就是"),n("strong",[t._v("化繁为简，分而治之")]),t._v("的思想。我们这里仅对项目架构简单说明，很多微服务的知识并未在这一节体现。")]),t._v(" "),n("p",[t._v("这样进行简单的拆分之后，分出了若干服务，并且服务间通过rpc调用，每个服务可以单独部署、单独编写、本来已经解决了单体架构的很多问题了。而且是通过功能模块划分的，更容易理解了。那为什么还有一次架构演进呢？我们又遇到了什么问题呢？")]),t._v(" "),n("h3",{attrs:{id:"_2-遇到的问题-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-遇到的问题-2"}},[t._v("#")]),t._v(" （2）遇到的问题")]),t._v(" "),n("p",[t._v("我们在这里，首先遇到的问题就是："),n("strong",[t._v("对外暴露的接口不统一")]),t._v("，比如官方提供的测试APP，需要配置后端接口的主机地址+端口。只能访问一个进程内的接口。")]),t._v(" "),n("p",[t._v("而我们这样的拆分方式，会同时启动很多个对外暴露HTTP服务的进程。若想要完整的通过APP测试，是几乎不可能的事情。")]),t._v(" "),n("p",[t._v("必行之事，何必问天。光是因为上面所述的一个理由，我们的架构，就不得不再一次演变。还不谈会遇到的其他问题。")]),t._v(" "),n("p",[t._v("那我们来看看是如何进行第二次架构演变的。")]),t._v(" "),n("h2",{attrs:{id:"三、第二次演变"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、第二次演变"}},[t._v("#")]),t._v(" 三、第二次演变")]),t._v(" "),n("h3",{attrs:{id:"_1-架构思路-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-架构思路-3"}},[t._v("#")]),t._v(" （1）架构思路")]),t._v(" "),n("p",[n("strong",[t._v("“没有什么是加一层解决不了的事情，如果有，那就两层”")]),t._v("。相信大家都听过这句话。")]),t._v(" "),n("p",[t._v("是啊，我们遇到了上面的问题之后，尝试加入了一层："),n("code",[t._v("Api Rooter")]),t._v("来解决这个问题。")]),t._v(" "),n("p",[t._v("解决了吗？加入了这一层，我们对外暴露的HTTP接口，就可以统一在这一层做了。而由这一层，通过GRPC去调用内部服务实际的业务逻辑。")]),t._v(" "),n("p",[t._v("来看一些较为直观的表达，再继续探讨。")]),t._v(" "),n("h4",{attrs:{id:"_1、架构图-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、架构图-3"}},[t._v("#")]),t._v(" 1、架构图")]),t._v(" "),n("p",[t._v("主要呈现的是服务的拆分关系。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5223f7cab6f74716af4c14a37ee3ff90~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),n("p",[t._v("如图所示，对外暴露的HTTP服务，全是经过"),n("code",[t._v("Api Rooter")]),t._v("这一层出去的。在这一层，主要做两件事情。")]),t._v(" "),n("ol",[n("li",[t._v("管理"),n("code",[t._v("Token")]),t._v("的认证[提供Gin的认证中间件]")]),t._v(" "),n("li",[t._v("组装"),n("code",[t._v("Api")]),t._v("，对外提供HTTP服务")])]),t._v(" "),n("p",[t._v("因为Token相当于是用户的身份凭证，以前是放在用户中心的，现在是放在"),n("code",[t._v("Api Rooter")]),t._v("的，因为放在这里，当有请求过来的时候，若需要校验信息，直接调用方法即可。就不需要额外走GRPC去调用"),n("code",[t._v("user_center")]),t._v("的方法了。")]),t._v(" "),n("p",[t._v("我们这里其实并没有太多组合Api的接口。我们的接口大多数是已经在内部服务组装好的。然后在这一层直接暴露出去即可。相当于"),n("strong",[t._v("这是各个HTTP服务Handler的聚集地")]),t._v("。在这里聚集，然后统一暴露给外界。")]),t._v(" "),n("p",[t._v("值得一提的是，这一层，是通过GRPC去调用内部服务的，并不是通过HTTP协议去调用的。主要是因为这是自定义的Api组合层，支持GRPC去调用自己的服务。")]),t._v(" "),n("h4",{attrs:{id:"_2、目录结构-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、目录结构-3"}},[t._v("#")]),t._v(" 2、目录结构")]),t._v(" "),n("p",[t._v("加入了Api这一层、把一些公共模块更进一步的抽离出来后，现在的目录结构是这样的：")]),t._v(" "),n("div",{staticClass:"language-tex extra-class"},[n("pre",{pre:!0,attrs:{class:"language-tex"}},[n("code",[t._v("DouSheng\n├── .github.workflows\n├── api_rooter              # ===简易版网关===\n│   ├── apps                \n│   │   ├── token           # Token的 RPC Server\n│   │   │   ├── impl        \n│   │   │   └── pb\n│   │   ├── user.api        # 用户中心的HTTP接口\n│   │   └── video.api       # 视频服务的HTTP接口\n│   ├── client.rpc          # Token的RPC Client\n│   ├── common  \n│   │   ├── all\n│   │   └── utils\n│   ├── docs\n│   ├── etc\n│   └── protocol\n├── dou_kit                 # ===封装的公共库===\n│   ├── client\n│   ├── cmd\n│   ├── conf\n│   ├── constant\n│   ├── docs\n│   │   ├── sql\n│   │   └── static\n│   ├── exception.custom\n│   ├── ioc\n│   ├── protocol\n│   └── version\n├── guidance.docs           # ===项目文档===\n├── user_center             # ===用户中心===\n│   ├── apps.user\n│   │   ├── impl\n│   │   └── pb\n│   ├── client.rpc\n│   ├── common\n│   │   ├── all\n│   │   └── utils\n│   ├── docs\n│   │   ├── example\n│   │   ├── sql\n│   │   └── static.image\n│   └── etc\n└── video_service           # ===视频服务===\n    ├── apps.video\n    │   ├── impl\n    │   └── pb\n    ├── client.rpc\n    ├── common\n    │   ├── all\n    │   ├── pb\n    │   └── utils\n    ├── docs.sql\n    ├── etc\n    └── store.aliyun\n")])])]),n("p",[t._v("在加入这一层后，对外暴露接口的方式、样式、和端口，都统一了。这下就完事了嘛？未来真的不会出问题了吗？")]),t._v(" "),n("h3",{attrs:{id:"_2-可能会遇到的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-可能会遇到的问题"}},[t._v("#")]),t._v(" （2）可能会遇到的问题")]),t._v(" "),n("p",[t._v("我们现在是通过"),n("code",[t._v("Api Rooter")]),t._v("来统一暴露接口的。其中最致命的就是整个 "),n("code",[t._v("App Rooter")]),t._v(" 属于 "),n("code",[t._v("single point of failure")]),t._v("，若在这一层出现严重的代码缺陷，或者流量洪峰，可能会引发集群宕机，出现单点故障。这个故障并不是说某一个服务宕机了，而是对外提供的HTTP接口会崩掉。")]),t._v(" "),n("p",[t._v("但是由于一些原因：如项目进度、未学习的知识、技术成本....等问题。目前还没有办法再次演进。所以Dousheng最终的架构，"),n("strong",[t._v("暂定")]),t._v("为这样了。")]),t._v(" "),n("h2",{attrs:{id:"四、未来的设想"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、未来的设想"}},[t._v("#")]),t._v(" 四、未来的设想")]),t._v(" "),n("h3",{attrs:{id:"未来架构演进思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#未来架构演进思路"}},[t._v("#")]),t._v(" 未来架构演进思路")]),t._v(" "),n("p",[t._v("既然每一个API服务太庞大了，那我们继续利用"),n("strong",[t._v("大禹治水，分而治之")]),t._v("的思想。将其拆分成多个服务独立的网关小组。这样就算某一服务提供的API宕机了，也不会导致所有服务宕机。也就是解决了单体故障的问题。")]),t._v(" "),n("p",[t._v("在引入一层真正的网关技术"),n("code",[t._v("（API Geteway）")]),t._v("，来处理转发用户的请求。而且将一些横切面的逻辑放置到这一层。比如日志监控、安全认证等等")]),t._v(" "),n("p",[t._v("大致画一幅图，也就是这个样子的：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5f77fae80982429f9d4c974084add128~tplv-k3u1fbpfcp-zoom-1.image",alt:"image-20230220145446543"}})]),t._v(" "),n("p",[t._v("至此，我们通过两次架构的演进，相信你已经基本了解了Dousheng的架构思路。也算是入了微服务的门了~")]),t._v(" "),n("p",[t._v("那在来看看，我们是如何管理Dousheng应用的生命周期的。")])])}),[],!1,null,null,null);n.default=s.exports}}]);