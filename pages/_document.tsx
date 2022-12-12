import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex flex-col items-center bg-white dark:bg-foreground text-black dark:text-accent-1">
        <main className="max-w-3xl">
          <Main />
          <NextScript />
        </main>
      </body>
    </Html>
  );
}
