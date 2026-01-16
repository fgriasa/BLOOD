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

export const SCENARIOS: Record<number, SimulationScenario> = {
  0.5: {
    id: 0.5,
    label: "半碗",
    subLabel: "約 140g 飯",
    iconCount: 1,
    data: createData([90, 135, 120, 105, 95, 90, 88, 90, 90]),
    peakValue: 135,
    durationHigh: 0,
    risk: {
      level: 'low',
      title: "低風險",
      description: "血糖波動平穩，胰臟負擔小。",
      colorClass: "text-green-700",
      bgClass: "bg-green-50",
      borderClass: "border-green-100"
    },
    suggestion: "這是一個適量且安全的碳水化合物攝取量。搭配蔬菜和雞蛋更佳！"
  },
  1: {
    id: 1,
    label: "一碗",
    subLabel: "約 280g 飯",
    iconCount: 2,
    data: createData([90, 165, 155, 130, 110, 100, 95, 90, 90]),
    peakValue: 165,
    durationHigh: 45,
    risk: {
      level: 'medium',
      title: "中度風險",
      description: "血糖明顯飆升，需依賴較多胰島素。",
      colorClass: "text-yellow-700",
      bgClass: "bg-yellow-50",
      borderClass: "border-yellow-100"
    },
    suggestion: "這是一般人的標準飯量，但建議改為糙米或先吃菜再吃飯，以降低峰值。"
  },
  1.5: {
    id: 1.5,
    label: "一碗半",
    subLabel: "大碗便當",
    iconCount: 3,
    data: createData([90, 195, 185, 160, 140, 120, 105, 95, 90]),
    peakValue: 195,
    durationHigh: 100,
    risk: {
      level: 'high',
      title: "高風險",
      description: "血管長期浸泡在高糖環境，易疲勞。",
      colorClass: "text-orange-700",
      bgClass: "bg-orange-50",
      borderClass: "border-orange-100"
    },
    suggestion: "警告：飯後容易想睡覺。建議減少飯量，或飯後散步 15 分鐘幫助代謝。"
  },
  2: {
    id: 2,
    label: "兩碗",
    subLabel: "吃到飽/過量",
    iconCount: 4,
    data: createData([90, 230, 210, 190, 165, 145, 130, 110, 100]),
    peakValue: 230,
    durationHigh: 160,
    risk: {
      level: 'severe',
      title: "極高風險",
      description: "產生「糖毒性」，胰島素工作過度。",
      colorClass: "text-red-700",
      bgClass: "bg-red-50",
      borderClass: "border-red-100"
    },
    suggestion: "危險！這種吃法長期下來極易導致胰島素阻抗。請立即減量並尋求專業飲食建議。"
  }
};