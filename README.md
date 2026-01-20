# 유튜버 팬 페이지

Next.js 14와 Tailwind CSS로 제작된 유튜버 팬 페이지입니다.

## 기능

- 🎨 현대적이고 반응형 디자인
- 🎥 최신 유튜브 영상 섹션
- 👤 유튜버 소개 및 통계
- 🔗 소셜 미디어 링크
- ⚡ Next.js 14 App Router 사용
- 💅 Tailwind CSS로 스타일링

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 커스터마이징

### 유튜버 정보 수정

다음 파일들을 수정하여 유튜버 정보를 변경할 수 있습니다:

#### `components/Header.tsx`
- 채널 이름 변경

#### `components/Hero.tsx`
- 유튜버 이름, 소개 문구 수정
- 구독자, 영상 수, 조회수 통계 업데이트

#### `components/VideoSection.tsx`
- `videos` 배열의 `id`를 실제 유튜브 영상 ID로 변경
- 영상 제목과 설명 수정
- 유튜브 채널 링크 업데이트

#### `components/SocialLinks.tsx`
- `socials` 배열의 URL을 실제 소셜 미디어 링크로 변경
- 필요에 따라 소셜 미디어 추가/제거

#### `app/layout.tsx`
- 페이지 제목과 설명(메타데이터) 수정

## 프로젝트 구조

```
fan-page/
├── app/
│   ├── layout.tsx       # 루트 레이아웃
│   ├── page.tsx         # 메인 페이지
│   └── globals.css      # 전역 스타일
├── components/
│   ├── Header.tsx       # 헤더/네비게이션
│   ├── Hero.tsx         # 히어로 섹션 (소개)
│   ├── VideoSection.tsx # 영상 목록
│   ├── SocialLinks.tsx  # 소셜 미디어 링크
│   └── Footer.tsx       # 푸터
└── public/              # 정적 파일
```

## 기술 스택

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 배포

Vercel에서 쉽게 배포할 수 있습니다:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 라이선스

MIT
