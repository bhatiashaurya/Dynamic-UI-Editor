// Typography Configuration
export interface TypographyConfig {
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
}

// Button Configuration
export interface ButtonConfig {
  borderRadius: number;
  shadow: 'none' | 'small' | 'medium' | 'large';
  alignment: 'left' | 'center' | 'right';
  backgroundColor: string;
  textColor: string;
}

// Gallery Configuration
export interface GalleryConfig {
  alignment: 'left' | 'center' | 'right';
  spacing: number;
  borderRadius: number;
}

// Layout Configuration
export interface LayoutConfig {
  cardCornerRadius: number;
  containerPadding: number;
  sectionBackgroundColor: string;
}

// Stroke/Border Configuration
export interface StrokeConfig {
  color: string;
  weight: number;
}

// Complete UI Configuration
export interface UIConfig {
  typography: TypographyConfig;
  button: ButtonConfig;
  gallery: GalleryConfig;
  layout: LayoutConfig;
  stroke: StrokeConfig;
  currentLayout: 'layout1' | 'layout2';
}

// Default Configuration
export const defaultConfig: UIConfig = {
  typography: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 16,
  },
  button: {
    borderRadius: 8,
    shadow: 'medium',
    alignment: 'center',
    backgroundColor: '#3b82f6',
    textColor: '#ffffff',
  },
  gallery: {
    alignment: 'center',
    spacing: 16,
    borderRadius: 8,
  },
  layout: {
    cardCornerRadius: 12,
    containerPadding: 24,
    sectionBackgroundColor: '#ffffff',
  },
  stroke: {
    color: '#e5e7eb',
    weight: 1,
  },
  currentLayout: 'layout1',
};

// Font Options
export const fontOptions = [
  { value: 'Inter', label: 'Inter' },
  { value: 'Roboto', label: 'Roboto' },
  { value: 'Poppins', label: 'Poppins' },
];

// Font Weight Options
export const fontWeightOptions = [
  { value: 400, label: '400 - Regular' },
  { value: 500, label: '500 - Medium' },
  { value: 600, label: '600 - Semibold' },
  { value: 700, label: '700 - Bold' },
];

// Shadow Options
export const shadowOptions = [
  { value: 'none', label: 'None' },
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
];

// Alignment Options
export const alignmentOptions = [
  { value: 'left', label: 'Left' },
  { value: 'center', label: 'Center' },
  { value: 'right', label: 'Right' },
];