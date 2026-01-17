export type PageId = 
  | 'intro' 
  | 'exec-summary' 
  | 'baseline-2025' 
  | 'operating-model'
  | 'engine-1'
  | 'engine-2'
  | 'engine-3'
  | 'engine-4'
  | 'engine-5'
  | 'engine-6'
  | 'engine-7'
  | 'engine-8'
  | 'engine-9'
  | 'final-alignment';

export interface NavItem {
  id: PageId;
  label: string;
  section: string;
}