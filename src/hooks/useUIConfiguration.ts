import { useEffect } from 'react';
import { useUIStore } from '../store/useUIStore';
import { applyCSSVariables } from '../utils';

/**
 * Custom hook to handle UI configuration updates and CSS variable application
 */
export const useUIConfiguration = () => {
  const store = useUIStore();

  // Apply CSS variables whenever config changes
  useEffect(() => {
    applyCSSVariables(store.config);
  }, [store.config]);

  // Auto-save configuration to localStorage
  useEffect(() => {
    localStorage.setItem('ui-editor-config', JSON.stringify(store.config));
  }, [store.config]);

  // Load configuration from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ui-editor-config');
    if (saved) {
      try {
        const config = JSON.parse(saved);
        store.updateConfig(config);
      } catch (error) {
        console.error('Failed to load saved configuration:', error);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return store;
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