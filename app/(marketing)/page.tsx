import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <>
        <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
            <div className="container text-center flex flex-col items-center gap-4 max-w-[64lem]">
                <Link href={siteConfig.links.x} className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm" target="_blank" rel="noreferrer">Xをフォローする</Link>
                <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Post Writer</h1>
                <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">Post WriterはNext.js 14 App Routerで作られたサービスです。ユーザは自由に投稿をポストすることができます</p>
                <div className="space-x-4">
                    <Link href={"/login"} className={cn(buttonVariants({size:"lg"}))}>はじめる</Link>
                    <Link href={siteConfig.links.github} className={cn(buttonVariants({size:"lg", variant:"outline"}))} target="_blank" rel="noreferrer">Github</Link>
                </div>
            </div>
        </section>

        <section
          id="features"
          className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6"
        >
          <div className="text-center space-y-6 max-w-[58rem] mx-auto">
            <h2 className="font-extrabold text-3xl md:text-6xl">
              サービスの特徴
            </h2>
            <p className="text-muted-foreground sm:text-lg sm:leading-7">
              このプロジェクトはモダンな技術スタックを使って作れれたWebアプリケーションです。Next.jsやAppRouterを利用してマークダウン形式でブログ投稿ができます。
            </p>
          </div>

          <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"/>
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js</h3>
                  <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRouterの技術を使用</p>
                </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 256 228">
                  <path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"/>
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">React</h3>
                  <p className="text-sm text-muted-foreground">Reactの技術を使用</p>
                </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512">
                <path fill="currentColor" d="M128 204.667C145.062 136.227 187.738 102 256 102c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C494.938 221.773 452.262 256 384 256c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5zm-128 154C17.062 290.227 59.738 256 128 256c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C366.938 375.773 324.262 410 256 410c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5z"/>
              </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">TailwindCSS</h3>
                  <p className="text-sm text-muted-foreground">TailwindCSSを使用</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto md:max-w-[58rem] text-center">
              <p className="text-muted-foreground sm:text-lg sm:leading-7">
                このサービスはNext.js 14 App Routerで作られたサービスです。ユーザは自由に投稿をポストすることができます
              </p>
            </div>
        </section>

        <section id="contact" className="container py-8 md:py-12 lg:py-24">
          <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
            <h2 className="font-extrabold text-3xl md:text-6xl">Contact Me</h2>
            <p className="text-muted-foreground sm:text-lg sm:leading-7">このサービスについてのご意見、ご要望、ご質問などがありましたらお気軽にご連絡ください。</p>
            <Link
              href={siteConfig.links.x}
              className="underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
              >
                お仕事はXまで
            </Link>
          </div>
        </section>
    </>
  );
}
