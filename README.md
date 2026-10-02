# MONOLAB 홈페이지

리스팀 주식회사 MONOLAB 제품 소개 및 수출 · 입점 문의용 홈페이지입니다. 별도 서버 없이 동작하는 정적 사이트입니다.

- 한국어 / English / 中文(간체) 전환 (상단 KO · EN · 中文 버튼, 또는 주소 뒤에 `?lang=en`, `?lang=zh`)
- 리프팅 · 물광 · 진정 핵심 효과, 3단계 루틴(미스트 → 세럼 → 크림), 제품별 특징
- 제품 리뷰
- 수출 · 입점 문의 폼 → `resteem@naver.com` 으로 메일 발송

## 파일 구조

| 파일 | 내용 |
|---|---|
| `index.html` | 페이지 본문 (한국어 원문) |
| `assets/js/i18n.js` | 영어 · 중국어 번역 |
| `assets/js/reviews.js` | 리뷰 데이터 (3개 언어) |
| `assets/js/main.js` | 언어 전환, 리뷰 표시, 문의 폼 전송 |
| `assets/css/style.css` | 디자인 |
| `assets/img/` | 로고 및 제품 일러스트 (SVG) |

## 게시 전 꼭 해야 할 일

### 1. 문의 폼 활성화 (최초 1회)
문의 폼은 무료 서비스 [FormSubmit](https://formsubmit.co)을 통해 메일을 보냅니다.
사이트를 올린 뒤 **문의를 한 번 직접 보내면** `resteem@naver.com` 으로 FormSubmit 확인 메일이 옵니다.
메일의 **Activate Form** 버튼을 눌러야 그 이후 문의가 정상적으로 도착합니다.
(네이버 스팸함도 확인해 주세요.) 받는 주소를 바꾸려면 `assets/js/main.js` 맨 위 `INQUIRY_EMAIL` 을 수정합니다.

### 2. 사용감 · 리뷰 문구
`assets/js/reviews.js` 에 제품별 사용감 문구(3개 언어)가 있습니다. 실제 고객 · 병원 후기를 받으면
같은 형식에 `rating`(별점)과 `who`(작성자 정보)를 추가하면 후기 카드로 표시됩니다.

### 3. 제품 사진 · 로고
제품 사진은 `assets/img/mist.jpg`, `serum.jpg`, `cream.jpg`, 로고는 `assets/img/logo-mark.png` 입니다.
같은 이름의 파일로 덮어쓰면 바로 교체됩니다.

### 4. 전화번호 · 주소 추가 (선택)
`index.html` 의 문의 영역(`<dl class="contact">`)과 하단 푸터에 항목을 추가하세요.

## 인터넷에 올리기 (GitHub Pages, 무료)
1. GitHub 저장소 → **Settings → Pages**
2. Source: **Deploy from a branch**, Branch: `main` / `(root)` 선택 후 Save
3. 몇 분 뒤 `https://resteem31-cell.github.io/monolab/` 에서 확인
4. 보유한 도메인을 연결하려면 같은 화면의 **Custom domain** 에 입력

Netlify, Cloudflare Pages 등 다른 정적 호스팅에 폴더를 그대로 올려도 동작합니다.

## 로컬에서 미리 보기
```bash
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000
```
