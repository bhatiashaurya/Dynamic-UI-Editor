import styled from 'styled-components';
import PreviewInterface from './components/Preview/PreviewInterface';
import EditorInterface from './components/Editor/EditorInterface';
import { useUIConfiguration } from './hooks/useUIConfiguration';
import './App.css';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const LeftPanel = styled.div`
  flex: 1;
  min-width: 0;
`;

const RightPanel = styled.div`
  width: 400px;
  flex-shrink: 0;
`;

function App() {
  // Initialize UI configuration management
  useUIConfiguration();

  return (
    <AppContainer>
      <LeftPanel>
        <PreviewInterface />
      </LeftPanel>
      <RightPanel>
        <EditorInterface />
      </RightPanel>
    </AppContainer>
  );
}

export default App;
