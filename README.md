## Mr.モトスギに依頼されたWebサイトの制作
こちらのレポジトリはMr.モトスギの意向によって制作されいてます。


## 設計

CSS設計は __TailwingCSS__ を使います。
インストール方法は[こちら](https://tailwindcss.com/docs/guides/create-react-app)

ページ遷移には __react-router-dom__ を使います
インストール方法は[こちら](https://v5.reactrouter.com/web/guides/quick-start)

ただし
・App.cssの方にrootとしてバニラCSSを適用
・繰り返しの多い部分には styled-componentsを使用 (npm install styled-components)


## ファイル構成

ファイル構成はこちらのTreeのとおり
<pre>
src
├── App.css
├── App.jsx
├── components
│   ├── 01-Home
│   │   ├── 01-components
│   │   └── Home.jsx
│   ├── 02-Service
│   │   ├── 02-components
│   │   └── Service.jsx
│   ├── 03-Cashless
│   │   ├── 03-components
│   │   └── Cashless.jsx
│   ├── 04-Custom
│   │   ├── 04-components
│   │   └── Custom.jsx
│   ├── 05-Plan
│   │   ├── 05-components
│   │   └── Plan.jsx
│   ├── 06-Simulation
│   │   ├── 06-components
│   │   └── Simulation.jsx
│   ├── 07-Colum
│   │   ├── 07-components
│   │   └── Colum.jsx
│   ├── 08-News
│   │   ├── 08-components
│   │   └── News.jsx
│   ├── 09-FAQ
│   │   ├── 09-components
│   │   └── FAQ.jsx
│   ├── Footer.jsx
│   └── Header.jsx
├── images
├── index.css
└── main.jsx
</pre>

01~09それぞれのファイルのcomponentsにページごとの部品が入っているイメージ。
