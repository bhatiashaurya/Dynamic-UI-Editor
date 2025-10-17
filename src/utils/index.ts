import type { UIConfig } from '../types';

// Convert shadow type to CSS box-shadow value
export const getShadowValue = (shadow: string): string => {
  const shadows = {
    none: 'none',
    small: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    medium: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    large: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  };
  return shadows[shadow as keyof typeof shadows] || shadows.medium;
};

// Convert alignment to CSS text-align value
export const getAlignmentValue = (alignment: string): string => {
  return alignment === 'center' ? 'center' : alignment === 'right' ? 'right' : 'left';
};

// Convert hex color to RGB values
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

// Generate CSS variables from config
export const generateCSSVariables = (config: UIConfig): Record<string, string> => {
  return {
    '--font-family': config.typography.fontFamily,
    '--font-weight': config.typography.fontWeight.toString(),
    '--font-size': `${config.typography.fontSize}px`,
    '--button-border-radius': `${config.button.borderRadius}px`,
    '--button-shadow': getShadowValue(config.button.shadow),
    '--button-alignment': getAlignmentValue(config.button.alignment),
    '--button-bg-color': config.button.backgroundColor,
    '--button-text-color': config.button.textColor,
    '--gallery-spacing': `${config.gallery.spacing}px`,
    '--gallery-border-radius': `${config.gallery.borderRadius}px`,
    '--card-corner-radius': `${config.layout.cardCornerRadius}px`,
    '--container-padding': `${config.layout.containerPadding}px`,
    '--section-bg-color': config.layout.sectionBackgroundColor,
    '--stroke-color': config.stroke.color,
    '--stroke-weight': `${config.stroke.weight}px`,
  };
};

// Apply CSS variables to document root
export const applyCSSVariables = (config: UIConfig): void => {
  const variables = generateCSSVariables(config);
  Object.entries(variables).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
  });
};

// Download JSON configuration
export const downloadConfig = (config: UIConfig, filename = 'ui-config.json'): void => {
  const dataStr = JSON.stringify(config, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

// Validate config object
export const validateConfig = (config: any): boolean => {
  try {
    // Basic validation - check if required properties exist
    return (
      config &&
      typeof config === 'object' &&
      config.typography &&
      config.button &&
      config.gallery &&
      config.layout &&
      config.stroke
    );
  } catch {
    return false;
  }
};