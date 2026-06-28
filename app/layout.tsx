import "./globals.scss";
import Header from "@/components/ui/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>

        <div className="bg_gradient"></div>

        <Header></Header>
        {children}
      </body>
    </html>
  );
}
