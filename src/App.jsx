import { ArrowRightCircle } from "lucide-react";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white px-4 text-center">
      <h1 className="text-5xl font-bold mb-4 animate-fadeIn">
        Welcome to My App
      </h1>
      <p className="text-lg mb-6 max-w-md animate-fadeIn delay-200">
        A clean React + Tailwind + Lucide setup with Vite. Fast, elegant, and ready to build!
      </p>
      <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:scale-105 transition-transform animate-fadeIn delay-300">
        Get Started
        <ArrowRightCircle className="w-5 h-5" />
      </button>
    </div>
  );
}
