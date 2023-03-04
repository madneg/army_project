import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Image
          width={1000}
          height={1000}
          src={
            "https://th.bing.com/th/id/R.45e3481b19b10b8d2f7792a68ead125c?rik=URCEKMf%2bdCIHnQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fd%2f2%2f2%2f570645.jpg&ehk=6zNW3ff2u7Hvx6A66onzFnuR%2fMHCJcQc7etSgKbJXsA%3d&risl=&pid=ImgRaw&r=0"
          }
          className={"h-screen lg:h-max lg:w-full -z-10 top-0 fixed"}
        ></Image>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
