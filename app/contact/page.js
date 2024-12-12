"use client";

export default function UnderConstruction() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/assets/under-construction-image.jpg')", // Replace with your image URL
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center">
        <p className="text-xl text-gray-700 mb-8">
          We're working hard to bring you this page. Stay tuned for updates!
        </p>
        <div className="w-full max-w-md mb-8">
          <img
            src="/assets/3d-web-page-under-construction-concept-2B77M01.jpg" // Replace with your image URL
            alt="Under Construction"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-lg text-gray-600">
          In the meantime, feel free to explore other parts of the site.
        </p>
      </div>
    </div>
  );
}
