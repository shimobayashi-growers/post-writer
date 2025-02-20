# 学習元

Next.js × shadcn/ui × Supabase で本格的な Web アプリ開発を学ぶフルスタック講座
https://www.udemy.com/share/10b8lo3@kKnaV3O2OpuinrZw_lVz_MDzFgwxfAD_35yOMkAStpY2ALE62U7bPX-skacwgvDhDw==/

## リポジトリ

https://github.com/Shin-sibainu/post-writer

# デプロイまで

```
npx create-next-app@latest
```

- プロジェクトネームは好み
- Typescript -> Yes
- ESLint -> Yes
- Tailwind CSS -> Yes
- src/ -> No
- App Router -> Yes
- import alias -> Yes

サーバ起動

```
npm run dev
```

# shadcn/ui セットアップ

https://ui.shadcn.com/docs/installation/next

```
npx shadcn@latest init
```

- style -> Default
- base color -> Slate
- CSS variables -> yes

```
npx shadcn@latest add button
```

# useLockBodyScroll

https://usehooks.com/uselockbodyscroll

```
npm i @uidotdev/usehooks
```

# shadcn@latest の追加

```
npx shadcn@latest add
```

- input
- label
- toast

# icon

https://lucide.dev/
https://iconbuddy.com/

# auth

https://next-auth.js.org/

```
npm install next-auth
```

↓ 　サービス変更
https://authjs.dev/

```
npm install next-auth@beta
```

- 今回は安定している v4（前のもの）を利用

# Github ログイン

https://github.com/settings/developers

- 「Oauth Apps」から新規作成
  - post-writer
  - http://localhost:3000/
  - http://localhost:3000/api/auth/callback/github
    - https://next-auth.js.org/configuration/providers/oauth
- 作成して出てきた情報を.env ファイルに記載する
  - Client ID -> GITHUB_CLIENT_ID
  - Client secrets -> GITHUB_CLIENT_SECRET

# NEXTAUTH_SECRET

- ランダムな key の発行

```
openssl rand -base64 32
```

# Google ログイン

https://developers.google.com/identity/protocols/oauth2?hl=ja
↓
https://console.cloud.google.com/apis/dashboard?hl=ja&inv=1&invt=Abnr3Q&project=bayashimo-jp

- post-writer でプロジェクトを新規作成
- API とサービス -> 認証情報 -> OAuth クライアント ID の作成
  - https://console.cloud.google.com/apis/credentials?hl=ja&inv=1&invt=Abnr3Q&project=post-writer-448807
- 認証画面をまずは作成、外部を選択。ほかは適当に
- もう一度「OAuth クライアント ID の作成」を選択、post-writer の名前
- 承認済みのリダイレクト URI
  - http://localhost:3000/api/auth/callback/google
- 作成して出てきた情報を.env ファイルに記載する
  - Client ID -> GOOGLE_CLIENT_ID
  - Client secrets -> GOOGLE_CLIENT_SECRET

# NextAuth.js <-> Prisma

https://next-auth.js.org/v3/adapters/prisma

```
npm install @prisma/client @next-auth/prisma-adapter
npm install prisma --save-dev
```

prisma の初期化

```
npx prisma init
```

- ER 図
  - https://zenn.dev/arsaga/articles/3f5bce7c904ebe

![image](https://storage.googleapis.com/zenn-user-upload/7bb366c0e368-20230531.png)

# migrate

https://next-auth.js.org/v3/adapters/prisma

```
npx prisma generate
npx prisma migrate dev
```

supabase にテーブルが作成されて、ログインしてデータが入ったら成功
修正したら migrate をして再度 DB を更新する

# post

日付を整形する format 関数

```
npm install date-fns
```

# app/api/posts/route.ts

データ型をチェックするライブラリ

```
npm install zod
```

# textarea の自動サイズ調整

https://www.npmjs.com/package/react-textarea-autosize

```
npm i react-textarea-autosize
```

# エディターの導入

Editor.js
https://editorjs.io/

```
npm i @editorjs/editorjs --save
```

tool で設定して使う場合は一つずつインストールする必要がある

## Header

```
npm i @editorjs/header
```

（型宣言でエラーがでたら）

```
npm i --save-dev @types/editorjs__header
```

## Link embeds

```
npm i @editorjs/link
```

## List

```
npm i @editorjs/list
```

## code

```
npm i @editorjs/code
```

# フォームの状態維持

React Hook Form
https://react-hook-form.com/

```
npm install react-hook-form
npm i @hookform/resolvers
```
