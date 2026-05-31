import Navbar from "../components/Navbar";

export const metadata = {
  title: "NUVAREX",
  description: "Unified Business Operating System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
