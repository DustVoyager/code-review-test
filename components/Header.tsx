export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
            style={{ animation: 'slideInLeft 0.6s ease-out' }}
          >
            YourChannel
          </div>
          <div className="flex gap-6" style={{ animation: 'slideInRight 0.6s ease-out' }}>
            <a
              href="#about"
              className="text-gray-600 hover:text-purple-600 transition-all duration-300 relative group"
            >
              <span className="relative">
                소개
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
            <a
              href="#videos"
              className="text-gray-600 hover:text-purple-600 transition-all duration-300 relative group"
            >
              <span className="relative">
                영상
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
            <a
              href="#social"
              className="text-gray-600 hover:text-purple-600 transition-all duration-300 relative group"
            >
              <span className="relative">
                소셜
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
