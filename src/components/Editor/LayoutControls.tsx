import React from 'react';
import styled from 'styled-components';
import { useUIStore } from '../../store/useUIStore';

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

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`;

const ColorInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 4px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const RangeInput = styled.input`
  width: 100%;
  margin: 8px 0;
`;

const RangeValue = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background: #e5e7eb;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: #374151;
`;

const LayoutControls: React.FC = () => {
  const { config, updateLayout } = useUIStore();

  return (
    <Section>
      <SectionTitle>General Layout</SectionTitle>
      
      <FormGroup>
        <Label>
          Card Corner Radius: <RangeValue>{config.layout.cardCornerRadius}px</RangeValue>
        </Label>
        <RangeInput
          type="range"
          min="0"
          max="50"
          value={config.layout.cardCornerRadius}
          onChange={(e) => updateLayout({ cardCornerRadius: Number(e.target.value) })}
        />
      </FormGroup>

      <FormGroup>
        <Label>
          Container Padding: <RangeValue>{config.layout.containerPadding}px</RangeValue>
        </Label>
        <RangeInput
          type="range"
          min="8"
          max="64"
          value={config.layout.containerPadding}
          onChange={(e) => updateLayout({ containerPadding: Number(e.target.value) })}
        />
      </FormGroup>

      <FormGroup>
        <Label>Section Background Color</Label>
        <ColorInput
          type="color"
          value={config.layout.sectionBackgroundColor}
          onChange={(e) => updateLayout({ sectionBackgroundColor: e.target.value })}
        />
      </FormGroup>
    </Section>
  );
};

export default LayoutControls;