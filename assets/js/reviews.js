/* 제품 리뷰 데이터
 *
 * ⚠️ 아래 리뷰는 화면 구성을 보여주기 위한 예시(sample: true)입니다.
 *    실제 사용하지 않은 후기를 진짜 후기처럼 게시하면 표시광고법(기만적 광고) 위반이 될 수 있습니다.
 *    실제 고객·병원 후기를 받으면 내용을 교체하고 sample 을 false 로 바꾸세요.
 *    sample 리뷰가 하나도 없으면 '예시 후기' 안내 문구와 배지가 자동으로 사라집니다.
 *
 * product: "mist" | "serum" | "cream"
 * 각 문구는 ko / en / zh 세 언어로 작성합니다.
 */
window.REVIEWS = [
  {
    product: "mist", rating: 5, sample: true,
    title: { ko: "시술 직후 붉은기에 바로 뿌려요", en: "My go-to right after treatments", zh: "术后泛红时第一时间喷用" },
    body: {
      ko: "레이저 후 열감이 올라올 때 뿌리면 바로 시원하게 진정되는 느낌이에요. 입자가 고와서 메이크업 위에도 수시로 사용합니다.",
      en: "When my skin heats up after laser, a few sprays calm it down right away. The mist is so fine I use it over makeup throughout the day.",
      zh: "激光后皮肤发热时喷一下，马上就有清凉镇静的感觉。喷雾细腻，妆上也能随时补喷。"
    },
    who: { ko: "30대 · 민감성 피부", en: "30s · Sensitive skin", zh: "30多岁 · 敏感肌" }
  },
  {
    product: "mist", rating: 5, sample: true,
    title: { ko: "건조한 사무실 필수템", en: "A must in a dry office", zh: "干燥办公室必备" },
    body: {
      ko: "오후만 되면 당기던 피부가 촉촉하게 유지돼요. 뿌리고 나면 피부 결이 정돈되어 물광이 살아납니다.",
      en: "My skin used to feel tight every afternoon; now it stays moist. After spraying, my skin looks smoother with a fresh glow.",
      zh: "以前一到下午皮肤就紧绷，现在一直水润。喷完肌理更平滑，水光感明显。"
    },
    who: { ko: "20대 · 복합성 피부", en: "20s · Combination skin", zh: "20多岁 · 混合肌" }
  },
  {
    product: "serum", rating: 5, sample: true,
    title: { ko: "턱선이 정돈되는 느낌", en: "My jawline feels more defined", zh: "下颌线更利落了" },
    body: {
      ko: "4주 정도 아침저녁으로 사용했는데 볼과 턱선이 탄탄해진 느낌이에요. 흡수가 빠르고 끈적임이 없어요.",
      en: "After about four weeks morning and night, my cheeks and jawline feel firmer. It absorbs fast with no stickiness.",
      zh: "早晚使用约四周，脸颊和下颌线感觉更紧致。吸收快，不黏腻。"
    },
    who: { ko: "40대 · 건성 피부", en: "40s · Dry skin", zh: "40多岁 · 干性肌" }
  },
  {
    product: "serum", rating: 4, sample: true,
    title: { ko: "리프팅 시술 후 홈케어로 만족", en: "Great home care after lifting procedures", zh: "提拉术后居家护理很满意" },
    body: {
      ko: "시술 효과를 오래 유지하고 싶어서 병원에서 추천받았어요. 피부가 쫀쫀해지고 탄력이 오래 가요.",
      en: "My clinic recommended it to help my treatment results last. My skin feels bouncier and the firmness holds up.",
      zh: "为了延长医美效果，诊所推荐给我的。肌肤变得紧实有弹性，效果持久。"
    },
    who: { ko: "40대 · 중성 피부", en: "40s · Normal skin", zh: "40多岁 · 中性肌" }
  },
  {
    product: "cream", rating: 5, sample: true,
    title: { ko: "아침까지 촉촉한 물광", en: "Dewy glow that lasts until morning", zh: "水光感持续到第二天早上" },
    body: {
      ko: "밤에 바르고 자면 아침에 피부가 말랑하고 윤기가 돌아요. 무겁지 않은데 보습은 오래 갑니다.",
      en: "I apply it at night and wake up to soft, glowing skin. It isn't heavy, but the moisture lasts.",
      zh: "晚上涂完睡觉，早上皮肤柔软有光泽。质地不厚重，保湿却很持久。"
    },
    who: { ko: "30대 · 건성 피부", en: "30s · Dry skin", zh: "30多岁 · 干性肌" }
  },
  {
    product: "cream", rating: 5, sample: true,
    title: { ko: "예민할 때도 편안해요", en: "Comfortable even when my skin is reactive", zh: "敏感时期也很舒适" },
    body: {
      ko: "환절기에 따갑고 붉어지던 피부가 편안해졌어요. 장벽이 튼튼해진 느낌이라 꾸준히 쓰고 있어요.",
      en: "My skin used to sting and turn red between seasons; now it feels calm. My barrier feels stronger, so I keep using it.",
      zh: "换季时刺痛泛红的皮肤变得舒适了。感觉屏障更强韧，一直在用。"
    },
    who: { ko: "20대 · 민감성 피부", en: "20s · Sensitive skin", zh: "20多岁 · 敏感肌" }
  }
];

window.PRODUCT_NAMES = {
  mist:  { ko: "앰플 미스트", en: "Ampoule Mist", zh: "安瓶喷雾" },
  serum: { ko: "탄력 세럼", en: "Firming Serum", zh: "紧致精华" },
  cream: { ko: "NMN 실드 크림", en: "NMN Shield Cream", zh: "NMN 盾护面霜" }
};
