import React from 'react';
import styled from 'styled-components';
import { useUIStore } from '../../store/useUIStore';
import { alignmentOptions } from '../../types';

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

const GalleryControls: React.FC = () => {
  const { config, updateGallery } = useUIStore();

  return (
    <Section>
      <SectionTitle>Gallery / Images</SectionTitle>
      
      <FormGroup>
        <Label>Gallery Alignment</Label>
        <Select
          value={config.gallery.alignment}
          onChange={(e) => updateGallery({ alignment: e.target.value as any })}
        >
          {alignmentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormGroup>

      <FormGroup>
        <Label>
          Spacing Between Images: <RangeValue>{config.gallery.spacing}px</RangeValue>
        </Label>
        <RangeInput
          type="range"
          min="0"
          max="48"
          value={config.gallery.spacing}
          onChange={(e) => updateGallery({ spacing: Number(e.target.value) })}
        />
      </FormGroup>

      <FormGroup>
        <Label>
          Image Border Radius: <RangeValue>{config.gallery.borderRadius}px</RangeValue>
        </Label>
        <RangeInput
          type="range"
          min="0"
          max="50"
          value={config.gallery.borderRadius}
          onChange={(e) => updateGallery({ borderRadius: Number(e.target.value) })}
        />
      </FormGroup>
    </Section>
  );
};

export default GalleryControls;