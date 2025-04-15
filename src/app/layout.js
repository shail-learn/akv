
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer} from "./components/Footer";
import CustomCursor from "./components/CustomCursor";




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

      </head>
      <body>

        <Navbar />
        {children }
        <CustomCursor/>
      <Footer/>
      </body>
    </html>
  );
}
