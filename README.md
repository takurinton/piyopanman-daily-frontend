# :baby_chick: ぴよぱんまんのサイト :baby_chick:

日報やプロフィールを載せているサイトです！ :kissing_heart:

<image src="src/images/profile/daily.png">

## ぴよぱんまんのサイトの URL

https://piyopanman.com/ (ドメイン取りました　 2020/12/30)

## 記事

Qiita でこの日報アプリについて記事を書きました！  
たくさんの人に読んでいただいて感謝 :sparkles:
https://qiita.com/Piyopanman/items/5ffb9c290d452e0a5782

## 使用技術

- Django
- React.js
- vercel
- python anywhere

## フロントエンドの構成

- daily/
  - 日報用のディレクトリです。
  - api/
    - Django で作った API を叩く用です。
  - component/
    - カテゴリーのリストとか日ごとの表示とかのコンポーネントが置いてあります。
  - pages/
    - 日報一覧ページ、1 日の詳細ページ、カテゴリ別のページが置いてあります。
    - CategoryView.js
      - カテゴリー別にみるときはカテゴリーリストをクリックして移動するんですけどその際のページの切り替えがうまく行かなかったんですが useEffect の第 2 引数を直したらうまく行きました。
- profile/
  - プロフィール用のディレクトリです。
  - そんなに頻繁に書き換えるものでもないだろうと思って Django 側でモデルは作ってません。
  - Profile.js
    - ここに色々コンポーネントを表示します。
  - components
    - 経歴とかスキルとか制作物の表示のためにコンポーネントに分けてあります。
- sass/
  - 日報ページ用とプロフィールページ用で分けてあります
  - 初めて Sass 書いたのでうまく使いこなせている自信は無いです...もっと上手に使いたい
- Top.js
  - トップページです。ひよこちゃんが可愛いです。
- Header.js
  - 全ページに共通のヘッダーです。

## :star2: 推しポイント :star2:

- カテゴリ別にみることができる！
  - 元々日報を置いていた既存のサービスではカテゴリ別にみるときに不便で、それを改善した自分が使いやすい物を作りたいというモチベーションで作り始めたサイトなのでそれを無事実現できました。
  - 自分で作って自分で使ってみてわかったけどカテゴリ別にみられるのとても良い！寝る前のベッドの中とかスキマ時間に勉強したこととか初めて知ったことを見て復習になるし、「あれ、これってなんだっけ？」ってなったらすぐに調べられる。画期的！！！！
- 1 日の評価がひと目でわかる！
  - perfect ならはなまる、good なら二重マル、soso なら三角、bad ならバツのひよこちゃんを日ごとの一覧ページで表示させるようにしました。
  - なので一覧ページ見たときに「あ、最近は二重マルとか
    はなまるのひよこちゃんが少ないぞ。頑張らないと！」とか「最近はなまるのひよこちゃん多くていい感じ！このテンション保ってこ〜〜〜！」とかモチベの維持になります。
  - あとバツとか三角のひよこちゃんの日の詳細から何が理由でバツになっちゃったのかとか傾向が見えてきて改善策を見つけられるのではないかという思惑もあります。
- マークダウンで書ける！
  - Django のライブラリ markdownx を使ったので、admin ページで日報書いているときにプレビューが見られるのでしゅごい便利です。
  - それから JavaScript のライブラリ marked で html に変換してます。
- 色合い
  - 可愛くないですか？:baby_chick:

## 感想

Django も React も初めて触る技術だったのでいろんなところでつまづきましたが自分で色々調べてみたり友人がとても親切に教えてくれたりでなんとかデプロイすることができました...! 本当に感謝です。  
また、日報のページを一通り作り終わってからプロフィールページを作ったので、その際 React を復習しながら実装できました。そこで React の基本の基本なところの理解が深まったかなと思っています。  
SSR とかそういうのも勉強してみたいし、追加の機能も付けたい！:sparkles:

自分のサイトを作れて嬉しいです！わーい！
