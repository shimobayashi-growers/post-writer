# 学習元

Next.js × shadcn/ui × Supabase で本格的な Web アプリ開発を学ぶフルスタック講座
https://www.udemy.com/share/10b8lo3@kKnaV3O2OpuinrZw_lVz_MDzFgwxfAD_35yOMkAStpY2ALE62U7bPX-skacwgvDhDw==/

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
