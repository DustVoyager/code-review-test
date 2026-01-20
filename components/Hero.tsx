export default function Hero() {
  return (
    <section id="about" className="bg-gradient-to-b from-purple-50 to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 플로팅 애니메이션 프로필 */}
          <div className="mb-8" style={{ animation: 'float 3s ease-in-out infinite' }}>
            <div
              className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer relative overflow-hidden group"
              style={{ animation: 'pulse 2s ease-in-out infinite' }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                style={{ animation: 'shimmer 2s infinite' }}
              />
              <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">YT</span>
            </div>
          </div>

          {/* 페이드인 타이틀 */}
          <h1
            className="text-5xl font-bold text-gray-900 mb-4"
            style={{ animation: 'fadeIn 1s ease-out' }}
          >
            안녕하세요! 유튜버입니다
          </h1>

          {/* 슬라이드인 설명 */}
          <p
            className="text-xl text-gray-600 mb-8"
            style={{ animation: 'fadeIn 1s ease-out 0.2s backwards' }}
          >
            콘텐츠 크리에이터로 활동하며 재미있고 유익한 영상을 만들고 있습니다.
            구독과 좋아요 부탁드립니다!
          </p>

          {/* 슬라이드업 통계 카드 */}
          <div className="flex justify-center gap-4 text-lg flex-wrap">
            <div
              className="bg-white rounded-lg shadow-lg px-6 py-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:bg-gradient-to-br hover:from-purple-50 hover:to-white"
              style={{ animation: 'slideUp 0.6s ease-out 0.3s backwards' }}
            >
              <div className="text-3xl font-bold text-purple-600 hover:scale-110 transition-transform duration-300">
                100K+
              </div>
              <div className="text-gray-600">구독자</div>
            </div>

            <div
              className="bg-white rounded-lg shadow-lg px-6 py-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:bg-gradient-to-br hover:from-pink-50 hover:to-white"
              style={{ animation: 'slideUp 0.6s ease-out 0.5s backwards' }}
            >
              <div className="text-3xl font-bold text-pink-600 hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-600">영상</div>
            </div>

            <div
              className="bg-white rounded-lg shadow-lg px-6 py-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
              style={{ animation: 'slideUp 0.6s ease-out 0.7s backwards' }}
            >
              <div className="text-3xl font-bold text-blue-600 hover:scale-110 transition-transform duration-300">
                10M+
              </div>
              <div className="text-gray-600">조회수</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
