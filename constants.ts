import { SimulationScenario } from './types';

// Time labels for the X-axis
const TIME_POINTS = ['0分', '30分', '60分', '90分', '120分', '150分', '180分', '210分', '240分'];

// Helper to generate data array
const createData = (values: number[]) => {
  return values.map((val, index) => ({
    time: TIME_POINTS[index],
    value: val,
  }));
};

// Map string IDs to scenarios
export const SCENARIOS: Record<string, SimulationScenario> = {
  // --- Rice Category ---
  'rice-half': {
    id: 'rice-half',
    category: 'rice',
    label: "白飯 (半碗)",
    subLabel: "約 140g",
    icon: "🍚",
    data: createData([90, 135, 120, 105, 95, 90, 88, 90, 90]),
    peakValue: 135,
    durationHigh: 0,
    risk: {
      level: 'low',
      title: "低風險",
      description: "血糖波動平穩，負擔較小。",
      colorClass: "text-green-700",
      bgClass: "bg-green-50",
      borderClass: "border-green-100"
    },
    suggestion: "適量的碳水化合物。若能搭配優質蛋白質（如魚、蛋）與蔬菜，血糖會更穩定！"
  },
  'rice-full': {
    id: 'rice-full',
    category: 'rice',
    label: "白飯 (一碗)",
    subLabel: "約 280g",
    icon: "🍚",
    data: createData([90, 165, 155, 130, 110, 100, 95, 90, 90]),
    peakValue: 165,
    durationHigh: 45,
    risk: {
      level: 'medium',
      title: "中度風險",
      description: "血糖明顯飆升。",
      colorClass: "text-yellow-700",
      bgClass: "bg-yellow-50",
      borderClass: "border-yellow-100"
    },
    suggestion: "標準外食飯量。建議改變進食順序：先喝湯、吃菜，最後再吃飯，可降低峰值。"
  },
  'rice-brown': {
    id: 'rice-brown',
    category: 'rice',
    label: "糙米飯 (一碗)",
    subLabel: "高纖維",
    icon: "🌾",
    data: createData([90, 125, 135, 120, 110, 100, 95, 90, 90]),
    peakValue: 135,
    durationHigh: 0,
    risk: {
      level: 'low',
      title: "低風險",
      description: "膳食纖維緩解吸收速度。",
      colorClass: "text-green-700",
      bgClass: "bg-green-50",
      borderClass: "border-green-100"
    },
    suggestion: "糙米保留了米糠層與胚芽，富含膳食纖維與維生素 B 群。纖維能像柵欄一樣阻擋糖分快速進入血液，是優質的主食選擇。"
  },
  'rice-purple': {
    id: 'rice-purple',
    category: 'rice',
    label: "紫米飯 (一碗)",
    subLabel: "花青素抗氧化",
    icon: "🥣",
    data: createData([90, 130, 140, 125, 110, 100, 95, 90, 90]),
    peakValue: 140,
    durationHigh: 0, // Briefly touches 140
    risk: {
      level: 'low',
      title: "低風險",
      description: "營養價值高，升糖較緩。",
      colorClass: "text-green-700",
      bgClass: "bg-green-50",
      borderClass: "border-green-100"
    },
    suggestion: "紫米（黑糯米）富含花青素。雖然通常屬於糯米類，但若煮成乾飯且未加糖，其抗氧化成分與纖維仍比精緻白米好。注意消化不良者需細嚼慢嚥。"
  },
  'rice-pork': {
    id: 'rice-pork',
    category: 'rice',
    label: "肉燥飯",
    subLabel: "滷汁高鈉高油",
    icon: "🍛",
    data: createData([90, 175, 180, 155, 135, 120, 105, 95, 90]),
    peakValue: 180,
    durationHigh: 80,
    risk: {
      level: 'high',
      title: "高風險",
      description: "精緻澱粉加上油脂，吸收快且熱量高。",
      colorClass: "text-orange-700",
      bgClass: "bg-orange-50",
      borderClass: "border-orange-100"
    },
    suggestion: "肉燥飯通常飯多料少，且滷汁含有大量隱形糖分與油脂。建議務必加點燙青菜與滷蛋平衡。"
  },
  'rice-oil': {
    id: 'rice-oil',
    category: 'rice',
    label: "一碗油飯",
    subLabel: "糯米高GI",
    icon: "🥡",
    data: createData([90, 160, 185, 170, 150, 135, 120, 105, 95]),
    peakValue: 185,
    durationHigh: 100,
    risk: {
      level: 'high',
      title: "高風險 (難消化)",
      description: "糯米升糖極快，油脂延緩代謝。",
      colorClass: "text-orange-700",
      bgClass: "bg-orange-50",
      borderClass: "border-orange-100"
    },
    suggestion: "油飯使用的是「長糯米」，支鏈澱粉含量高，導致血糖飆升速度極快。加上拌炒大量的油，會讓血糖居高不下，且容易導致脹氣。"
  },
  'rice-curry': {
    id: 'rice-curry',
    category: 'rice',
    label: "咖哩牛腩飯",
    subLabel: "勾芡醬汁",
    icon: "🍛",
    data: createData([90, 155, 190, 180, 160, 140, 120, 100, 95]),
    peakValue: 190,
    durationHigh: 110,
    risk: {
      level: 'high',
      title: "高風險",
      description: "澱粉醬汁+大量白飯，雙重打擊。",
      colorClass: "text-orange-700",
      bgClass: "bg-orange-50",
      borderClass: "border-orange-100"
    },
    suggestion: "濃稠的咖哩醬汁通常是靠「炒麵粉」或「太白粉」勾芡而成，這等於是「澱粉配澱粉」。加上牛腩的高油脂，是典型的血糖炸彈。"
  },
  'fried-rice': {
    id: 'fried-rice',
    category: 'rice',
    label: "火腿蛋炒飯",
    subLabel: "高油高碳水",
    icon: "🥘",
    data: createData([90, 150, 175, 165, 150, 140, 130, 120, 110]),
    peakValue: 175,
    durationHigh: 120,
    risk: {
      level: 'high',
      title: "高風險 (延遲)",
      description: "油脂會延緩胃排空，讓血糖居高不下。",
      colorClass: "text-orange-700",
      bgClass: "bg-orange-50",
      borderClass: "border-orange-100"
    },
    suggestion: "炒飯通常油鹽量高且蔬菜少。油脂會使血糖下降速度變慢（長尾效應），下一餐前可能還沒回到基準值。"
  },

  // --- Noodle Category ---
  'noodle-dry': {
    id: 'noodle-dry',
    category: 'noodle',
    label: "傳統乾拌麵",
    subLabel: "麻醬/炸醬",
    icon: "🍜",
    data: createData([90, 185, 170, 145, 125, 110, 100, 95, 90]),
    peakValue: 185,
    durationHigh: 70,
    risk: {
      level: 'high',
      title: "高風險",
      description: "精緻麵粉消化極快，醬料隱藏糖分。",
      colorClass: "text-orange-700",
      bgClass: "bg-orange-50",
      borderClass: "border-orange-100"
    },
    suggestion: "麵條是磨粉再製的精緻澱粉，吸收速度比米飯更快！建議點燙青菜與豆干來平衡。"
  },
  'noodle-spaghetti': {
    id: 'noodle-spaghetti',
    category: 'noodle',
    label: "義大利肉醬麵",
    subLabel: "杜蘭小麥",
    icon: "🍝",
    data: createData([90, 145, 160, 150, 130, 115, 105, 95, 90]),
    peakValue: 160,
    durationHigh: 60,
    risk: {
      level: 'medium',
      title: "中等風險",
      description: "義大利麵 GI 值較一般麵條低，但醬料是關鍵。",
      colorClass: "text-yellow-700",
      bgClass: "bg-yellow-50",
      borderClass: "border-yellow-100"
    },
    suggestion: "義大利麵使用杜蘭小麥，升糖速度較慢。但市售肉醬通常加糖與勾芡。建議選擇清炒或橄欖油基底。"
  },
  'noodle-instant': {
    id: 'noodle-instant',
    category: 'noodle',
    label: "泡麵 (一碗)",
    subLabel: "油炸麵體",
    icon: "🍲",
    data: createData([90, 195, 180, 150, 130, 115, 105, 95, 90]),
    peakValue: 195,
    durationHigh: 85,
    risk: {
      level: 'high',
      title: "高風險",
      description: "加工澱粉 + 油炸，營養價值低。",
      colorClass: "text-orange-700",
      bgClass: "bg-orange-50",
      borderClass: "border-orange-100"
    },
    suggestion: "泡麵的麵體經油炸，且通常缺乏膳食纖維。建議加入雞蛋與大量蔬菜同煮。"
  },

  // --- Drink Category ---
  'bubble-tea': {
    id: 'bubble-tea',
    category: 'drink',
    label: "全糖珍珠奶茶",
    subLabel: "700cc",
    icon: "🧋",
    data: createData([90, 240, 180, 120, 80, 70, 85, 90, 90]),
    peakValue: 240,
    durationHigh: 50,
    risk: {
      level: 'severe',
      title: "極高風險 (震盪)",
      description: "液體糖吸收最快，引發雲霄飛車效應。",
      colorClass: "text-red-700",
      bgClass: "bg-red-50",
      borderClass: "border-red-100"
    },
    suggestion: "警告！液體果糖會瞬間衝高血糖，隨後胰島素大量分泌導致「反應性低血糖」（手抖、飢餓）。建議改喝無糖或微糖鮮奶茶。"
  },
  'drink-50lan-mix': {
    id: 'drink-50lan-mix',
    category: 'drink',
    label: "四季春珍波椰",
    subLabel: "50嵐",
    icon: "🧋",
    data: createData([90, 210, 230, 190, 150, 120, 100, 95, 90]),
    peakValue: 230,
    durationHigh: 90,
    risk: {
      level: 'severe',
      title: "極高風險",
      description: "三種配料皆含大量糖分。",
      colorClass: "text-red-700",
      bgClass: "bg-red-50",
      borderClass: "border-red-100"
    },
    suggestion: "雖然茶底可選無糖，但珍珠、波霸、椰果本身都浸泡在高濃度糖水中。這杯的碳水化合物含量可能超過一碗飯！"
  },
  'drink-nap-milkcap': {
    id: 'drink-nap-milkcap',
    category: 'drink',
    label: "棉被深焙烏龍奶蓋",
    subLabel: "再睡5分鐘",
    icon: "🥤",
    data: createData([90, 145, 155, 140, 125, 115, 105, 95, 90]),
    peakValue: 155,
    durationHigh: 50,
    risk: {
      level: 'medium',
      title: "中高風險",
      description: "奶蓋富含油脂與糖分，熱量高。",
      colorClass: "text-yellow-700",
      bgClass: "bg-yellow-50",
      borderClass: "border-yellow-100"
    },
    suggestion: "「棉被」即厚奶蓋，由鮮奶油、糖與起司粉打發。雖口感滑順，但油脂與糖分皆高，建議偶爾飲用並選無糖茶底。"
  },
  'drink-tea-half': {
    id: 'drink-tea-half',
    category: 'drink',
    label: "半糖綠茶",
    subLabel: "700cc",
    icon: "🍵",
    data: createData([90, 160, 140, 110, 95, 90, 90, 90, 90]),
    peakValue: 160,
    durationHigh: 20,
    risk: {
      level: 'medium',
      title: "中度風險 (快升快降)",
      description: "液體糖吸收快，雖然量減半但仍有峰值。",
      colorClass: "text-yellow-700",
      bgClass: "bg-yellow-50",
      borderClass: "border-yellow-100"
    },
    suggestion: "半糖通常含有 8-10 顆方糖的量！空腹喝依然會刺激胰島素。建議選無糖，或飯後再喝。"
  },
  'drink-dejeng-oolong': {
    id: 'drink-dejeng-oolong',
    category: 'drink',
    label: "無糖輕烏龍",
    subLabel: "得正",
    icon: "🍵",
    data: createData([90, 93, 91, 90, 90, 90, 90, 90, 90]),
    peakValue: 93,
    durationHigh: 0,
    risk: {
      level: 'low',
      title: "低風險",
      description: "無糖茶飲，血糖無波動。",
      colorClass: "text-green-700",
      bgClass: "bg-green-50",
      borderClass: "border-green-100"
    },
    suggestion: "無糖烏龍茶清爽解膩，且不影響血糖，是外食族的優質選擇。"
  },
  'drink-latte': {
    id: 'drink-latte',
    category: 'drink',
    label: "無糖拿鐵",
    subLabel: "500ml",
    icon: "☕",
    data: createData([90, 105, 100, 95, 92, 90, 90, 90, 90]),
    peakValue: 105,
    durationHigh: 0,
    risk: {
      level: 'low',
      title: "低風險",
      description: "牛奶含天然乳糖與脂肪，升糖緩慢。",
      colorClass: "text-green-700",
      bgClass: "bg-green-50",
      borderClass: "border-green-100"
    },
    suggestion: "雖然無加糖，但牛奶含有乳糖（碳水化合物），血糖仍會微幅上升。牛奶富含蛋白質與鈣質，是很好的飲品選擇。"
  },
  'drink-black-coffee': {
    id: 'drink-black-coffee',
    category: 'drink',
    label: "黑咖啡",
    subLabel: "500ml",
    icon: "☕",
    data: createData([90, 92, 90, 90, 90, 90, 90, 90, 90]),
    peakValue: 92,
    durationHigh: 0,
    risk: {
      level: 'low',
      title: "低風險",
      description: "幾無碳水化合物，對血糖無影響。",
      colorClass: "text-green-700",
      bgClass: "bg-green-50",
      borderClass: "border-green-100"
    },
    suggestion: "黑咖啡幾乎不含熱量與糖分，不會引起血糖波動。若空腹飲用請注意胃部舒適度。"
  },

  // --- Dessert Category ---
  'cake': {
    id: 'cake',
    category: 'dessert',
    label: "草莓鮮奶油蛋糕",
    subLabel: "一片切片",
    icon: "🍰",
    data: createData([90, 170, 190, 160, 135, 115, 100, 95, 90]),
    peakValue: 190,
    durationHigh: 90,
    risk: {
      level: 'high',
      title: "高風險",
      description: "糖+麵粉+鮮奶油 = 血糖炸彈。",
      colorClass: "text-orange-700",
      bgClass: "bg-orange-50",
      borderClass: "border-orange-100"
    },
    suggestion: "精緻甜點建議在「正餐後」立刻食用，避免空腹單獨吃，以減少血糖波動幅度。"
  },
  'dessert-eggcake': {
    id: 'dessert-eggcake',
    category: 'dessert',
    label: "雞蛋糕 (一包六片)",
    subLabel: "街邊點心",
    icon: "🥚",
    data: createData([90, 185, 170, 140, 110, 100, 95, 90, 90]),
    peakValue: 185,
    durationHigh: 60,
    risk: {
      level: 'high',
      title: "高風險",
      description: "主要成分為麵粉與糖，幾乎無纖維。",
      colorClass: "text-orange-700",
      bgClass: "bg-orange-50",
      borderClass: "border-orange-100"
    },
    suggestion: "看起來份量不大，但密度極高。六片雞蛋糕的熱量與糖分可能接近一碗飯，且吸收更快。"
  },

  // --- Bread Category ---
  'bread-toast': {
    id: 'bread-toast',
    category: 'bread',
    label: "白吐司 (2片)",
    subLabel: "快速吸收澱粉",
    icon: "🍞",
    data: createData([90, 160, 150, 120, 100, 95, 90, 90, 90]),
    peakValue: 160,
    durationHigh: 40,
    risk: {
      level: 'high',
      title: "高風險",
      description: "精緻澱粉，GI值高，血糖上升快。",
      colorClass: "text-orange-700",
      bgClass: "bg-orange-50",
      borderClass: "border-orange-100"
    },
    suggestion: "白吐司 GI 值高，2片熱量約等於 8 分滿飯。建議不切邊，並搭配煎蛋或鮪魚，避免塗抹果醬。"
  },
  'bread-polo': {
    id: 'bread-polo',
    category: 'bread',
    label: "菠蘿麵包",
    subLabel: "酥皮高油糖",
    icon: "🥐",
    data: createData([90, 180, 195, 175, 155, 135, 120, 105, 95]),
    peakValue: 195,
    durationHigh: 110,
    risk: {
      level: 'high',
      title: "高風險 (持久)",
      description: "上層酥皮是糖與奶油的混合體。",
      colorClass: "text-orange-700",
      bgClass: "bg-orange-50",
      borderClass: "border-orange-100"
    },
    suggestion: "典型的「油糖混合物」。油脂會延緩消化，讓高血糖狀態持續很久，容易囤積腹部脂肪。"
  },

  // --- Pastry Category ---
  'pastry-pineapple': {
    id: 'pastry-pineapple',
    category: 'pastry',
    label: "鳳梨酥 (1顆)",
    subLabel: "高糖高油",
    icon: "🍍",
    data: createData([90, 142, 130, 115, 105, 95, 90, 90, 90]),
    peakValue: 142,
    durationHigh: 15,
    risk: {
      level: 'medium',
      title: "中等風險",
      description: "含油量高，體積雖小熱量驚人。",
      colorClass: "text-yellow-700",
      bgClass: "bg-yellow-50",
      borderClass: "border-yellow-100"
    },
    suggestion: "一顆鳳梨酥熱量約 200 大卡。雖然體積小，但糖分高。建議當作飯後甜點淺嚐，不要空腹吃。"
  },
  'pastry-yolk': {
    id: 'pastry-yolk',
    category: 'pastry',
    label: "蛋黃酥 (1顆)",
    subLabel: "酥油豆沙鹹蛋黃",
    icon: "🥮",
    data: createData([90, 145, 135, 120, 110, 100, 95, 90, 90]),
    peakValue: 145,
    durationHigh: 20,
    risk: {
      level: 'medium',
      title: "中等風險",
      description: "油脂豐富，延緩血糖下降。",
      colorClass: "text-yellow-700",
      bgClass: "bg-yellow-50",
      borderClass: "border-yellow-100"
    },
    suggestion: "熱量約 250-300 大卡。富含飽和脂肪。建議搭配無糖茶飲，並減少當餐油脂攝取。"
  }
};