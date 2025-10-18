import React from 'react';
import styled from 'styled-components';
import { useUIStore } from '../../store/useUIStore';
import { shadowOptions, alignmentOptions } from '../../types';

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

const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  color: #1f2937;
  cursor: pointer;
  
  option {
    color: #1f2937;
    background: white;
  }
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
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

const ButtonControls: React.FC = () => {
  const { config, updateButton } = useUIStore();

  return (
    <Section>
      <SectionTitle>Button</SectionTitle>
      
      <FormGroup>
        <Label>
          Border Radius: <RangeValue>{config.button.borderRadius}px</RangeValue>
        </Label>
        <RangeInput
          type="range"
          min="0"
          max="50"
          value={config.button.borderRadius}
          onChange={(e) => updateButton({ borderRadius: Number(e.target.value) })}
        />
      </FormGroup>

      <FormGroup>
        <Label>Shadow</Label>
        <Select
          value={config.button.shadow}
          onChange={(e) => updateButton({ shadow: e.target.value as any })}
        >
          {shadowOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormGroup>

      <FormGroup>
        <Label>Alignment</Label>
        <Select
          value={config.button.alignment}
          onChange={(e) => updateButton({ alignment: e.target.value as any })}
        >
          {alignmentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormGroup>

      <FormGroup>
        <Label>Background Color</Label>
        <ColorInput
          type="color"
          value={config.button.backgroundColor}
          onChange={(e) => updateButton({ backgroundColor: e.target.value })}
        />
      </FormGroup>

      <FormGroup>
        <Label>Text Color</Label>
        <ColorInput
          type="color"
          value={config.button.textColor}
          onChange={(e) => updateButton({ textColor: e.target.value })}
        />
      </FormGroup>
    </Section>
  );
};

export default ButtonControls;