export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-8">
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
