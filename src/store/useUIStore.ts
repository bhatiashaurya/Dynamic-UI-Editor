import { create } from 'zustand';
import type { UIConfig } from '../types';
import { defaultConfig } from '../types';

interface UIStore {
  config: UIConfig;
  updateConfig: (updates: Partial<UIConfig>) => void;
  updateTypography: (updates: Partial<UIConfig['typography']>) => void;
  updateButton: (updates: Partial<UIConfig['button']>) => void;
  updateGallery: (updates: Partial<UIConfig['gallery']>) => void;
  updateLayout: (updates: Partial<UIConfig['layout']>) => void;
  updateStroke: (updates: Partial<UIConfig['stroke']>) => void;
  setLayout: (layout: 'layout1' | 'layout2') => void;
  exportConfig: () => string;
  importConfig: (configJson: string) => void;
  resetToDefault: () => void;
}

export const useUIStore = create<UIStore>((set, get) => ({
  config: defaultConfig,

  updateConfig: (updates) =>
    set((state) => ({
      config: { ...state.config, ...updates },
    })),

  updateTypography: (updates) =>
    set((state) => ({
      config: {
        ...state.config,
        typography: { ...state.config.typography, ...updates },
      },
    })),

  updateButton: (updates) =>
    set((state) => ({
      config: {
        ...state.config,
        button: { ...state.config.button, ...updates },
      },
    })),

  updateGallery: (updates) =>
    set((state) => ({
      config: {
        ...state.config,
        gallery: { ...state.config.gallery, ...updates },
      },
    })),

  updateLayout: (updates) =>
    set((state) => ({
      config: {
        ...state.config,
        layout: { ...state.config.layout, ...updates },
      },
    })),

  updateStroke: (updates) =>
    set((state) => ({
      config: {
        ...state.config,
        stroke: { ...state.config.stroke, ...updates },
      },
    })),

  setLayout: (layout) =>
    set((state) => ({
      config: { ...state.config, currentLayout: layout },
    })),

  exportConfig: () => {
    const { config } = get();
    return JSON.stringify(config, null, 2);
  },

  importConfig: (configJson) => {
    try {
      const config = JSON.parse(configJson);
      set({ config: { ...defaultConfig, ...config } });
    } catch (error) {
      console.error('Failed to import config:', error);
    }
  },

  resetToDefault: () => set({ config: defaultConfig }),
}));