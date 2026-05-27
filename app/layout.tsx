import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "Next.js Caching",
  description: "Example of how Next.js caching works",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
