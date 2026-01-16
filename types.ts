export interface GlucoseDataPoint {
    time: string; // Label like '0min', '30min'
    value: number; // mg/dL
  }
  
  export interface RiskProfile {
    level: 'low' | 'medium' | 'high' | 'severe';
    title: string;
    description: string;
    colorClass: string; // Tailwind text color class
    bgClass: string; // Tailwind bg color class
    borderClass: string; // Tailwind border color class
  }
  
  export interface SimulationScenario {
    id: number; // Represents bowl count: 0.5, 1, 1.5, 2
    label: string;
    subLabel: string;
    iconCount: number; // How many rice bowl icons to show
    data: GlucoseDataPoint[];
    peakValue: number;
    durationHigh: number; // Minutes above 140 mg/dL
    risk: RiskProfile;
    suggestion: string;
  }