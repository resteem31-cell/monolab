/* 제품 사용감 포인트 (홈페이지 '사용감' 섹션)
 *
 * 브랜드가 직접 설명하는 사용감 문구입니다.
 * 실제 고객 · 병원 후기를 받으면 같은 형식에 아래 두 항목을 추가해 후기로 표시할 수 있습니다.
 *   rating: 5,                                   // 별점 (1~5)
 *   who: { ko: "...", en: "...", zh: "..." }     // 작성자 정보 (예: 40대 · 건성 피부)
 *
 * product: "mist" | "serum" | "cream"
 * 각 문구는 ko / en / zh 세 언어로 작성합니다.
 */
window.REVIEWS = [
  {
    product: "mist",
    title: { ko: "시술 직후 붉은기 진정", en: "Calms redness right after treatments", zh: "术后泛红即时舒缓" },
    body: {
      ko: "레이저 등 시술 후 열감이 오를 때 뿌리면 빠르게 진정감을 줍니다. 입자가 고와 메이크업 위에도 수시로 사용할 수 있습니다.",
      en: "Spray it when skin heats up after laser or other treatments for a fast soothing feel. The fine mist can be used over makeup throughout the day.",
      zh: "激光等医美术后皮肤发热时喷用，迅速带来镇静感。喷雾细腻，妆上也可随时补喷。"
    }
  },
  {
    product: "mist",
    title: { ko: "건조한 환경 속 수분 충전", en: "Hydration boost in dry environments", zh: "干燥环境随时补水" },
    body: {
      ko: "오후마다 당기는 피부에 수시로 뿌려 촉촉함을 유지합니다. 피부 결을 정돈해 물광 생기를 더합니다.",
      en: "Spray whenever skin feels tight to keep it moist all day. It smooths skin texture and adds a fresh, dewy glow.",
      zh: "肌肤紧绷时随时喷用，持续保持水润。整理肌理，增添水光活力。"
    }
  },
  {
    product: "serum",
    title: { ko: "또렷한 윤곽 케어", en: "Defined contour care", zh: "轮廓紧致护理" },
    body: {
      ko: "아침저녁 꾸준히 사용하면 볼과 턱선을 탄탄하게 가꿔줍니다. 흡수가 빠르고 끈적임이 없습니다.",
      en: "Used morning and night, it helps keep cheeks and jawline firm. It absorbs quickly with no stickiness.",
      zh: "早晚坚持使用，令脸颊与下颌线更显紧致。吸收迅速，不黏腻。"
    }
  },
  {
    product: "serum",
    title: { ko: "리프팅 시술 후 홈케어", en: "Home care after lifting procedures", zh: "提拉术后居家护理" },
    body: {
      ko: "시술 후 탄력 관리를 이어가는 홈케어 세럼으로, 피부를 쫀쫀하고 탄력 있게 가꿔줍니다.",
      en: "A home-care serum that continues firmness care after procedures, leaving skin bouncy and resilient.",
      zh: "延续术后紧致护理的居家精华，令肌肤紧实有弹性。"
    }
  },
  {
    product: "cream",
    title: { ko: "아침까지 이어지는 물광", en: "A dewy glow that lasts until morning", zh: "水光感持续到清晨" },
    body: {
      ko: "밤에 바르고 자면 아침까지 말랑하고 윤기 있는 피부로. 무겁지 않은 제형에 보습은 오래 지속됩니다.",
      en: "Apply at night for soft, glowing skin in the morning. The texture is light, but the moisture lasts.",
      zh: "夜间涂抹，清晨肌肤柔软有光泽。质地轻盈，保湿持久。"
    }
  },
  {
    product: "cream",
    title: { ko: "예민한 피부도 편안하게", en: "Comfort for reactive skin", zh: "敏感肌也能安心使用" },
    body: {
      ko: "로즈마리오일이 환절기 붉어지고 예민해진 피부를 진정시키고, 장벽 포뮬러가 피부를 튼튼하게 지켜줍니다.",
      en: "Rosemary oil calms skin that turns red and reactive between seasons, while the barrier formula keeps skin strong.",
      zh: "迷迭香油舒缓换季时泛红敏感的肌肤，屏障配方守护肌肤强韧。"
    }
  }
];

window.PRODUCT_NAMES = {
  mist:  { ko: "앰플 미스트", en: "Ampoule Mist", zh: "安瓶喷雾" },
  serum: { ko: "리파이닝 탄력 세럼", en: "Refining Firming Serum", zh: "焕颜紧致精华" },
  cream: { ko: "NMN 실드 크림", en: "NMN Shield Cream", zh: "NMN 盾护面霜" }
};
