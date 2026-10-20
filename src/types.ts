export type PageType = 
  | 'home' 
  | 'platform' 
  | 'workers' 
  | 'how-it-works' 
  | 'pricing' 
  | 'about' 
  | 'founder' 
  | 'contact' 
  | 'terms';

export interface CalculatorState {
  dailyWhatsAppOrders: number;
  minutesPerOrder: number;
  dailyEnquiries: number;
  minutesPerEnquiry: number;
  weeklyCatalogHours: number;
  weeklyReconciliationHours: number;
  operatingDaysPerWeek: number;
  // WhatsApp sales panel
  whatsAppOrdersPerWeek: number;
  averageOrderValueKwacha: number;
  orderCompletionRatePercent: number;
  unconvertedEnquiriesWeekly: number;
}

export interface WorkerSpec {
  id: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  task: string;
  informationUsed: string[];
  actionsTaken: string[];
  humanApprovalRequired: string[];
  fallbackBehavior: string;
  sampleInput: string;
  sampleOutput: string;
}
