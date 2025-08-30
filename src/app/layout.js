import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./dark-mode.css";
import "./light-mode.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400","500","600","700","800"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, shrink-to-fit=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="theme-color" content="#B019FF" />
        <meta name="msapplication-TileColor" content="#B019FF" />
      </head>
      <body className={plusJakarta.className}>
        {children}
      </body>
    </html>
  );
}
