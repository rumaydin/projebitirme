import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";

export const metadata = {
  title: "rumaydin",
  description: "A clean start for your Next.js project",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/next.svg"></link>
      </head>
      <body className="min-h-screen flex flex-col">
      
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}