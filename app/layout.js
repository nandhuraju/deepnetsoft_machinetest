// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Menu Management System",
  description: "Effortless menu and item management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

function Navbar() {
  return (
    <header className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-800 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-6 px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/6860545013e0a63ba8cb7e94004971f7.png"
            alt="deepnetsoft"
            className="w-40 h-10 rounded-full"
          />
        </div>
        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/menu" className="hover:underline">
              Menu
            </a>
          </li>
          <li>
            <a href="/reservation" className="hover:underline">
              Make a Reservation
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Section */}
        <div className="text-sm">
          © 2024 Deepnetsoft Solutions. All rights reserved.
        </div>
        {/* Right Section */}
        <div className="flex gap-4 text-sm">
          <a href="/terms" className="hover:underline">
            Terms and Conditions
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
