import "./globals.css";

export const metadata = {
  title: "Blog Project",
  description:
    'This is part of the workshop: "Introduction in Javascript Frameworks" for semester 3',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          {" "}
          <header className="bg-blue-600 text-white p-4 text-center">
            {" "}
            <h1>My Blog</h1>{" "}
          </header>{" "}
          <main className="flex-grow">{children}</main>{" "}
          <footer className="bg-blue-600 text-white p-4 text-center mt-auto">
            {" "}
            <p>© 2024 My Blog</p>{" "}
          </footer>{" "}
        </div>
      </body>
    </html>
  );
}
