import { useEffect } from 'react';
import { useUIStore } from '../store/useUIStore';
import { applyCSSVariables } from '../utils';

/**
 * Custom hook to handle UI configuration updates and CSS variable application
 */
export const useUIConfiguration = () => {
  const config = useUIStore((state) => state.config);

  // Apply CSS variables whenever config changes
  useEffect(() => {
    console.log('Config changed, applying CSS variables:', config);
    applyCSSVariables(config);
  }, [config]);

  // Auto-save configuration to localStorage
  useEffect(() => {
    localStorage.setItem('ui-editor-config', JSON.stringify(config));
  }, [config]);

  // Load configuration from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ui-editor-config');
    if (saved) {
      try {
        const parsedConfig = JSON.parse(saved);
        console.log('Loading saved configuration:', parsedConfig);
        useUIStore.getState().updateConfig(parsedConfig);
      } catch (error) {
        console.error('Failed to load saved configuration:', error);
      }
    }
  }, []);

  return { config };
};

/**
 * Hook to handle real-time preview updates
 */
export const usePreviewUpdates = () => {
  const { config } = useUIStore();

  useEffect(() => {
    // Apply configuration as CSS custom properties
    applyCSSVariables(config);
  }, [config]);

  return { config };
};