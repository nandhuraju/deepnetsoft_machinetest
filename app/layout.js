import "./globals.css";
import Navbar from "./Navbar"; // Separate Navbar into a separate file
import Footer from "./Footer"; // Separate Footer into a separate file

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Title and Meta Tags */}
        <title>Menu Management System</title>
        <meta
          name="description"
          content="Effortless menu and item management system"
        />
      </head>
      <body className="bg-gray-100 font-sans m-0 h-full">
        {/* Ensure body takes full height */}
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar />
          {/* Main Content */}
          <main className="flex-grow">{children}</main>
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
