export default function VideoSection() {
  // 실제 유튜브 영상 ID로 교체 가능
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "최신 영상 제목 1",
      description: "영상에 대한 간단한 설명입니다.",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "최신 영상 제목 2",
      description: "영상에 대한 간단한 설명입니다.",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "최신 영상 제목 3",
      description: "영상에 대한 간단한 설명입니다.",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "최신 영상 제목 4",
      description: "영상에 대한 간단한 설명입니다.",
    },
  ];

  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          최신 영상
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            유튜브 채널 방문하기
          </a>
        </div>
      </div>
    </section>
  );
}
