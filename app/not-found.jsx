// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export default function NotFound() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
//       <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
//       <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
//       <p className="text-gray-600 mb-8">
//         Oops! The page you&apos;re looking for doesn&apos;t exist or has been
//         moved.
//       </p>
//       <Link href="/">
//         <Button>Return Home</Button>
//       </Link>
//     </div>
//   );
// }



"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const primaryColor = "blue-600";
  const primaryHoverColor = "blue-700";
  const headingColor = "blue-400";
  const textColor = "gray-800";
  const subtitleColor = "gray-600";
  const bgColor = "gray-100";

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-[100vh] bg-${bgColor} text-${textColor} p-8 overflow-hidden`}>
      <div className="absolute inset-0 z-0 opacity-10 animate-fade-in">
        <img
          src="http://googleusercontent.com/image_generation_content/0"
          alt="Abstract AI concept background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className={`text-8xl md:text-9xl font-extrabold text-${headingColor} mb-6 drop-shadow-lg animate-fade-in-up`}>
          404
        </h1>
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-${textColor} tracking-tight animate-fade-in-up delay-200`}>
          Page Not Found
        </h2>
        <p className={`text-lg md:text-xl text-${subtitleColor} mb-8 max-w-md text-center leading-relaxed animate-fade-in-up delay-400`}>
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" passHref>
          <Button className={`px-8 py-3 text-lg rounded-md bg-${primaryColor} text-white hover:bg-${primaryHoverColor} transition-colors duration-200 transform hover:scale-105 shadow-lg animate-fade-in-up delay-600`}>
            Return Home
          </Button>
        </Link>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-400 { animation-delay: 0.4s; }
        .animate-fade-in-up.delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
}