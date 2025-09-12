import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>GolDelas</title>
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}