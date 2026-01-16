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
    id: string; // Changed from number to string for generic IDs
    category: 'rice' | 'noodle' | 'drink' | 'dessert' | 'bread' | 'pastry';
    label: string;
    subLabel: string;
    icon: string; // Emoji or icon component identifier
    data: GlucoseDataPoint[];
    peakValue: number;
    durationHigh: number; // Minutes above 140 mg/dL
    risk: RiskProfile;
    suggestion: string;
  }