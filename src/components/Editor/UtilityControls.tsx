import React from 'react';
import styled from 'styled-components';
import { useUIStore } from '../../store/useUIStore';
import { Download, Upload, RotateCcw, Layout } from 'lucide-react';
import { downloadConfig } from '../../utils';

const Section = styled.div`
  margin-bottom: 24px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fafafa;
`;

const SectionTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #374151;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
  color: #374151;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f9fafb;
    border-color: #9ca3af;
  }
  
  &:active {
    background: #f3f4f6;
  }
`;

const LayoutButton = styled(Button)<{ $active: boolean }>`
  background: ${props => props.$active ? '#3b82f6' : 'white'};
  color: ${props => props.$active ? 'white' : '#374151'};
  border-color: ${props => props.$active ? '#3b82f6' : '#d1d5db'};
  
  &:hover {
    background: ${props => props.$active ? '#2563eb' : '#f9fafb'};
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const UtilityControls: React.FC = () => {
  const { config, setLayout, importConfig, resetToDefault } = useUIStore();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleExport = () => {
    downloadConfig(config);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        importConfig(content);
      };
      reader.readAsText(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Section>
      <SectionTitle>Layout Switching</SectionTitle>
      
      <ButtonGroup>
        <LayoutButton
          $active={config.currentLayout === 'layout1'}
          onClick={() => setLayout('layout1')}
        >
          <Layout size={16} />
          Layout 1 (Default)
        </LayoutButton>
        
        <LayoutButton
          $active={config.currentLayout === 'layout2'}
          onClick={() => setLayout('layout2')}
        >
          <Layout size={16} />
          Layout 2 (Feature Cards)
        </LayoutButton>
      </ButtonGroup>

      <SectionTitle style={{ marginTop: '24px' }}>Export / Import</SectionTitle>
      
      <ButtonGroup>
        <Button onClick={handleExport}>
          <Download size={16} />
          Export Configuration
        </Button>
        
        <Button onClick={triggerFileInput}>
          <Upload size={16} />
          Import Configuration
        </Button>
        
        <Button onClick={resetToDefault}>
          <RotateCcw size={16} />
          Reset to Default
        </Button>
      </ButtonGroup>
      
      <HiddenInput
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleImport}
      />
    </Section>
  );
};

export default UtilityControls;