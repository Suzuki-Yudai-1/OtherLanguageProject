# digcari

## 概要

フリーマケットのデモアプリ

機能

- 商品の閲覧
- 商品の出品
- 商品の削除
- 商品の詳細ページの表示


### 操作手順

### バックエンド

- SpringBoot

#### データベース作成

-ターミナルで psql 　 CREATE DATABASE solodb;を実行しデータベースを作成する
```
 CREATE DATABASE solodb;
```


#### サーバーの起動

intelliJ にてこのフォルダを開き、GRadie で Tasks/application/bootRun を実行


### フロントエンド

- React

### 環境構築

- frontend ディレクトリに移動し、npm i を行う
- ターミナルで上から順番に実行
```
cd goods_front
cd front
npm i
```
- ビルドする
```
npm run build
```

### サーバーの起動(アプリ画面)

- npm run dev を行い http://localhost:5173 にアクセスする
```
npm run dev
```
