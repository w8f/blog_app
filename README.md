# Hayakawa's Tech Blog

Next.js × microCMS × tailwindcss を利用したJamstack構成の個人ブログアプリ。

## Programming language / Library

### Web Frontend

React, Next.js, TypeScript, tailwindcss, StoryBook, FontAwesome(Icon), highlight.js, cheerio

### Backend

Node.js(v16)

### Infrastructure

Vercel

### CMS

microCMS

### Environment setup

Docker

## Components

コンポーネントはstorybookで管理しています。\
また、開発者以外でも見れるよう、vercel上に公開しました。

master branch's storybook: https://blog-ui-storybook.vercel.app/

## 機能要件
- トップページ（記事一覧の表示）
- 記事ページ(記事の詳細を表示)

## 環境構築

下記記事を参考。

<https://blog.microcms.io/microcms-next-jamstack-blog/?utm_source=twitter&utm_medium=display&utm_campaign=jamstack202112>

## ライブラリインストール

- tailwindcss\
  <https://tailwindcss.com/docs/guides/nextjs>

      エディタの警告を消したい時\
      → VSCodeのプラグイン **PostCSS Language Support**をインストール

      エディタにtailwind cssのオートコンプリート機能やlint機能を入れたい時\
      → VSCodeのプラグイン **Tailwind CSS IntelliSense**をインストール

- Font Awesome
