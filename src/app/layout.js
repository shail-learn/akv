
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Clientonly from "./components/Clientonly";



export const metadata = {
  title: "AKV",
  description: "AKV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KVCPBTDM')`,
          }}
        />


      </head>
      <body
        data-new-gr-c-s-check-loaded="14.1232.0"
        data-gr-ext-installed="">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KVCPBTDM"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <Clientonly>
          <Navbar />
          {children}
          <CustomCursor />
        </Clientonly>
        <Footer />
      </body>
    </html>
  );
}
