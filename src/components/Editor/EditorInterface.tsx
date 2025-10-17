import React from 'react';
import styled from 'styled-components';
import TypographyControls from './TypographyControls';
import ButtonControls from './ButtonControls';
import GalleryControls from './GalleryControls';
import LayoutControls from './LayoutControls';
import StrokeControls from './StrokeControls';
import UtilityControls from './UtilityControls';

const EditorContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 24px;
  background: #f9fafb;
  border-left: 1px solid #e5e7eb;
`;

const EditorTitle = styled.h2`
  margin: 0 0 24px 0;
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
`;

const EditorInterface: React.FC = () => {
  return (
    <EditorContainer>
      <EditorTitle>UI Customization Editor</EditorTitle>
      
      <TypographyControls />
      <ButtonControls />
      <GalleryControls />
      <LayoutControls />
      <StrokeControls />
      <UtilityControls />
    </EditorContainer>
  );
};

export default EditorInterface;