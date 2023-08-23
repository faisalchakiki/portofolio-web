import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="icon" href="../logo.svg" />
      </Head>
      {/* <body className="bg-gray text-primary relative"> */}
      <body className="relative scrollbar">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
