import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useUIStore } from '../../store/useUIStore';
import { applyCSSVariables } from '../../utils';
import UIComponent from '../UI/UIComponent';

const PreviewContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 24px;
  background: #ffffff;
`;

const PreviewHeader = styled.div`
  margin-bottom: 24px;
  text-align: center;
`;

const PreviewTitle = styled.h2`
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
`;

const PreviewSubtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
`;

const PreviewContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 120px);
`;

const PreviewInterface: React.FC = () => {
  const { config } = useUIStore();

  // Apply CSS variables whenever config changes
  useEffect(() => {
    applyCSSVariables(config);
  }, [config]);

  return (
    <PreviewContainer>
      <PreviewHeader>
        <PreviewTitle>Live Preview</PreviewTitle>
        <PreviewSubtitle>
          Changes in the editor are reflected here in real-time
        </PreviewSubtitle>
      </PreviewHeader>
      
      <PreviewContent>
        <UIComponent />
      </PreviewContent>
    </PreviewContainer>
  );
};

export default PreviewInterface;