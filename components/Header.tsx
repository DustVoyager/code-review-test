export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            YourChannel
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition">
              소개
            </a>
            <a href="#videos" className="text-gray-600 hover:text-gray-900 transition">
              영상
            </a>
            <a href="#social" className="text-gray-600 hover:text-gray-900 transition">
              소셜
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
