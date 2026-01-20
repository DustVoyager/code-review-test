export default function Hero() {
  return (
    <section id="about" className="bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-5xl font-bold">
              YT
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            안녕하세요! 유튜버입니다
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            콘텐츠 크리에이터로 활동하며 재미있고 유익한 영상을 만들고 있습니다.
            구독과 좋아요 부탁드립니다!
          </p>
          <div className="flex justify-center gap-4 text-lg">
            <div className="bg-white rounded-lg shadow px-6 py-4">
              <div className="text-3xl font-bold text-purple-600">100K+</div>
              <div className="text-gray-600">구독자</div>
            </div>
            <div className="bg-white rounded-lg shadow px-6 py-4">
              <div className="text-3xl font-bold text-pink-600">500+</div>
              <div className="text-gray-600">영상</div>
            </div>
            <div className="bg-white rounded-lg shadow px-6 py-4">
              <div className="text-3xl font-bold text-blue-600">10M+</div>
              <div className="text-gray-600">조회수</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
