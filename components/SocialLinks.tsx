export default function SocialLinks() {
  const socials = [
    {
      name: "YouTube",
      url: "https://youtube.com/@yourchannel",
      icon: "🎥",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourchannel",
      icon: "📷",
      color: "bg-pink-500 hover:bg-pink-600",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourchannel",
      icon: "🐦",
      color: "bg-blue-400 hover:bg-blue-500",
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@yourchannel",
      icon: "🎵",
      color: "bg-gray-900 hover:bg-black",
    },
  ];

  return (
    <section id="social" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          소셜 미디어
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} text-white rounded-lg p-8 flex flex-col items-center justify-center transition transform hover:scale-105 shadow-lg`}
            >
              <span className="text-5xl mb-4">{social.icon}</span>
              <span className="text-xl font-semibold">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
