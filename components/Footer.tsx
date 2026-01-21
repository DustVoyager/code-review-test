export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p
            className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{ animation: 'fadeIn 0.8s ease-out' }}
          >
            YourChannel
          </p>
          <p
            className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
            style={{ animation: 'fadeIn 0.8s ease-out 0.2s backwards' }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
