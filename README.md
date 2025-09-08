# 智能云游 SmartTrip

这是一个综合全面、美观流畅的智能旅游App 
旨在给用户最好的前端体验

可访问地址：http://47.117.66.53
默认账户密码： admin 123456

## 技术栈
- React全家桶
    React 组件开发
    组件封装
    第三方组件库
    受控和非受控组件
    hooks编程  自定义hooks
    React-Router-Dom
        SPA 单页应用
        路由守卫
        懒加载
    Zustand
- mock  接口模拟
- axios 请求拦截和代理
- jwt 登录
- vite 配置
- 性能优化
    防抖节流
    useCallback useMemo ......
- css 预处理器 stylus
    flex transition transform
- 移动端适配
    rem 
- LLM
    - chat
    - 流式输出
    - Deepseek接口 智能前端


## 项目的架构
- api 项目业务接口
- assets 项目中需要用到的静态文件
- components 组件：包含通用组件和页面组件
- hooks 自定义hooks
- llm 智能前端接口
- pages 页面
- store 状态管理
- utils 工具库

## 项目亮点
- React 
  - zustand实现全局项目管理
  - 使用自定义hooks，提高复用性
  - 细化组件

- css
  - 原子css
  - css in js 模块化css
  - animation 动态效果

- 移动端适配
  - 使用了postcss + postcss-pxtorem组合 做到了各种各样移动端设备的适配

- deepseek智能前端api调用 
  - 输入系统提示词：限制模拟人工客服
  - 流式输出内容
  - md解析输出内容
  - 不仅给出了deepseek的接口，还能选择kimi等其它模型

- 骨架屏
  - 自定义骨架屏 
  - 预加载图片
  - 解决了每次需要等待网络请求中的图片下载完成用户才能看得到
  - 提升用户体验

- jwt 实现登录鉴权

- 路由
  - 路由懒加载页面
  - 路由守卫
  - 多级路由设计

- mock&&mockjs 数据模拟
  使用mock.js模拟无后端场景 前端接口请求

- 瀑布流
  - 实现无限滚动效果
  - 图片懒加载
  - mock.js生成随机图片以及文字
  - 观察者模式实现

- 用户体验优化
  - 搜索建议 防抖+usememo
  - 组件粒度划分React.memo + useCallBack
  - 解决闭包陷阱

- 使用了大量的ES6特性
  - arr.findIndex
  - str.startsWith
  - promise
  - ...

- 使用阿里的icons：
  - 使用symbol方式实现阿里的icons的导入

- 使用豆包ai为项目生成大量广告策划图
  

## 项目待扩展
- 接入扣子智能体，加上知识库，引入自定义平台规则：实现真正的模拟客服
- 接入扣子工作流，设计工作流完成扩展开发
- Toast组件使用 mitt eventBus 事件总线
- 瀑布流优化：从简单的奇偶排列改成更加符合业务的 最短排列
- 实现下拉刷新
- 利用zustand实现关注功能
- 
