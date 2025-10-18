import React from 'react';
import styled from 'styled-components';
import { useUIStore } from '../../store/useUIStore';
import { RotateCw, Maximize2, Plus, Minus, ChevronDown, Eye } from 'lucide-react';

const Container = styled.div`
  font-family: var(--font-family, 'Inter');
  font-weight: var(--font-weight, 400);
  font-size: var(--font-size, 16px);
  background-color: #1a1a1a;
  min-height: 100vh;
  display: flex;
  gap: 0;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  background: white;
`;

const ThumbnailGallery = styled.div`
  width: 80px;
  background: white;
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-right: 1px solid #e5e7eb;
`;

const Thumbnail = styled.button<{ $active?: boolean }>`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  border: 2px solid ${props => props.$active ? '#3b82f6' : '#e5e7eb'};
  background: #f9fafb;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s;
  padding: 4px;
  
  &:hover {
    border-color: #3b82f6;
  }
`;

const ProductViewport = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #f5f5f5 0%, #e8e8e8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 40px;
`;

const ProductModel = styled.div<{ $color: string }>`
  width: 683px;
  height: 487px;
  background: ${props => props.$color};
  border-radius: 16px;
  position: relative;
  box-shadow: 
    0 60px 120px rgba(0, 0, 0, 0.3),
    0 30px 60px rgba(0, 0, 0, 0.2);
  transform: perspective(1600px) rotateY(-20deg) rotateX(6deg);
  
  /* Cabinet body with panels */
  &::before {
    content: '';
    position: absolute;
    top: 8%;
    left: 5%;
    right: 5%;
    bottom: 15%;
    background: linear-gradient(90deg, 
      ${props => props.$color}e6 0%, 
      ${props => props.$color}99 50%, 
      ${props => props.$color}e6 100%);
    border-radius: 10px;
    border: 2px solid rgba(0,0,0,0.2);
    box-shadow: inset 0 3px 15px rgba(0,0,0,0.12);
  }
  
  /* Cabinet legs */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 10px;
    height: 15%;
    background: linear-gradient(180deg, #5a4a3a 0%, #3a2a1a 100%);
    border-radius: 3px;
    box-shadow: 
      0 0 10px rgba(0,0,0,0.4),
      75% 0 0 #3a2a1a,
      150% 0 0 #3a2a1a,
      225% 0 0 #3a2a1a;
  }
`;

const CabinetDoors = styled.div<{ $color: string }>`
  position: absolute;
  top: 10%;
  left: 6.5%;
  width: 43%;
  height: 72%;
  background: ${props => props.$color}cc;
  border-radius: 8px;
  border: 1.5px solid rgba(0,0,0,0.25);
  box-shadow: 3px 0 12px rgba(0,0,0,0.18);
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 7%;
    width: 8px;
    height: 36px;
    background: linear-gradient(90deg, #d4af37 0%, #aa8c2e 100%);
    border-radius: 3px;
    transform: translateY(-50%);
    box-shadow: 0 3px 6px rgba(0,0,0,0.25);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 10%;
    left: 6%;
    right: 6%;
    bottom: 10%;
    border: 1.5px solid rgba(0,0,0,0.12);
    border-radius: 5px;
  }
`;

const CabinetDoors2 = styled(CabinetDoors)`
  left: 51%;
  
  &::before {
    left: 8%;
  }
`;

const ViewControls = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  align-items: center;
`;

const ControlButton = styled.button<{ $variant?: 'text' }>`
  height: 40px;
  padding: ${props => props.$variant === 'text' ? '0 16px' : '0 12px'};
  border-radius: 20px;
  background: white;
  border: 1px solid #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  color: #374151;
  font-weight: 500;
  
  &:hover {
    background: #f9fafb;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ZoomControls = styled.div`
  display: flex;
  background: white;
  border-radius: 20px;
  border: 1px solid #d1d5db;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ZoomButton = styled.button`
  width: 40px;
  height: 40px;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #374151;
  transition: background 0.2s;
  
  &:hover {
    background: #f9fafb;
  }
  
  &:not(:last-child) {
    border-right: 1px solid #d1d5db;
  }
`;

const SidebarPanel = styled.div`
  width: 360px;
  background: white;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.05);
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
  line-height: 1.3;
`;

const Divider = styled.div`
  height: 1px;
  background: #e5e7eb;
  margin: 8px 0;
`;

const CustomizeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
  padding-bottom: 12px;
`;

const OptionGroup = styled.div`
  margin-bottom: 16px;
`;

const OptionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

const OptionNumber = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  color: #374151;
`;

const OptionTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  flex: 1;
`;

const OptionValue = styled.div`
  font-size: 13px;
  color: #6b7280;
`;

const Dropdown = styled.button`
  width: 100%;
  padding: 12px 16px;
  background: ${props => props.disabled ? '#fef3f2' : '#fafafa'};
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 14px;
  color: #1a1a1a;
  transition: all 0.2s;
  
  &:hover {
    border-color: #d1d5db;
  }
`;

const MaterialSection = styled.div`
  margin-top: 8px;
`;

const MaterialLabel = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: #9ca3af;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-bottom: 16px;
`;

const ColorSwatch = styled.button<{ $color: string; $selected?: boolean }>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${props => props.$color};
  border: 2px solid ${props => props.$selected ? '#1a1a1a' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${props => props.$selected 
    ? '0 0 0 2px white, 0 0 0 4px #1a1a1a' 
    : '0 2px 4px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0,0,0,0.1)'};
  position: relative;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.2) 100%);
  }
`;

const PriceSection = styled.div`
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
`;

const PriceLabel = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 16px;
`;

const CurrentPrice = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
`;

const OriginalPrice = styled.div`
  font-size: 18px;
  color: #9ca3af;
  text-decoration: line-through;
`;

const AddToCartButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 16px 24px;
  font-family: var(--font-family, 'Inter');
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

interface UIComponentProps {
  layout?: 'layout1' | 'layout2';
}

const UIComponent: React.FC<UIComponentProps> = ({ layout }) => {
  const { config } = useUIStore();
  const currentLayout = layout || config.currentLayout;
  const [selectedColor, setSelectedColor] = React.useState('#8B6F47');
  const [activeThumb, setActiveThumb] = React.useState(0);

  // Leather colors
  const leatherColors = [
    '#8B6F47', '#6B5644', '#5A7C5A', '#4A6B5C', '#5A5A70',
    '#6B5A77', '#4A6B8C', '#8B4A4A', '#7A3B3B', '#4A8B7C'
  ];

  // Silicon colors
  const siliconColors = [
    '#5A5A5A', '#6B7C6B', '#5A7A6B', '#6B8A7C', '#6B6B8A'
  ];

  const thumbnails = [
    { id: 0, color: '#8B6F47' },
    { id: 1, color: '#A0826D' },
    { id: 2, color: '#705842' },
    { id: 3, color: '#9B7653' },
    { id: 4, color: '#8B735C' },
    { id: 5, color: '#C8B896' },
  ];

  return (
    <Container>
      <MainContent>
        <ThumbnailGallery>
          {thumbnails.map((thumb) => (
            <Thumbnail
              key={thumb.id}
              $active={activeThumb === thumb.id}
              onClick={() => {
                setActiveThumb(thumb.id);
                setSelectedColor(thumb.color);
              }}
            >
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: thumb.color,
                borderRadius: '4px'
              }} />
            </Thumbnail>
          ))}
        </ThumbnailGallery>

        <ProductViewport>
          <ProductModel $color={selectedColor}>
            <CabinetDoors $color={selectedColor} />
            <CabinetDoors2 $color={selectedColor} />
          </ProductModel>
          
          <ViewControls>
            <ControlButton $variant="text">
              <Eye size={18} />
              View in your room
            </ControlButton>
            <ControlButton>
              <RotateCw size={18} />
            </ControlButton>
            <ControlButton>
              <Maximize2 size={18} />
            </ControlButton>
            <ZoomControls>
              <ZoomButton>
                <Plus size={18} />
              </ZoomButton>
              <ZoomButton>
                <Minus size={18} />
              </ZoomButton>
            </ZoomControls>
          </ViewControls>
        </ProductViewport>
      </MainContent>

      <SidebarPanel>
        <ProductTitle>Cozy Longe chair</ProductTitle>
        
        <Divider />
        
        <CustomizeSection>
          <span>Customize your Chair</span>
          <div style={{ cursor: 'pointer' }}>≡</div>
        </CustomizeSection>

        <OptionGroup>
          <OptionLabel>
            <OptionNumber>1</OptionNumber>
            <OptionTitle>Arms</OptionTitle>
          </OptionLabel>
          <OptionValue style={{ marginLeft: '40px', marginBottom: '8px' }}>
            Fixed Arms
          </OptionValue>
          <Dropdown>
            <span>Select</span>
            <ChevronDown size={18} />
          </Dropdown>
        </OptionGroup>

        <OptionGroup>
          <OptionLabel>
            <OptionNumber>2</OptionNumber>
            <OptionTitle>Arms Finish</OptionTitle>
          </OptionLabel>
          <OptionValue style={{ marginLeft: '40px', marginBottom: '8px' }}>
            Leather Brown
          </OptionValue>
          <Dropdown disabled>
            <span>Select</span>
            <ChevronDown size={18} />
          </Dropdown>

          <MaterialSection>
            <MaterialLabel>LEATHER</MaterialLabel>
            <ColorGrid>
              {leatherColors.map((color, index) => (
                <ColorSwatch
                  key={`leather-${index}`}
                  $color={color}
                  $selected={selectedColor === color}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </ColorGrid>
          </MaterialSection>

          <MaterialSection>
            <MaterialLabel>SILICON</MaterialLabel>
            <ColorGrid>
              {siliconColors.map((color, index) => (
                <ColorSwatch
                  key={`silicon-${index}`}
                  $color={color}
                  $selected={selectedColor === color}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </ColorGrid>
          </MaterialSection>

          <MaterialSection>
            <MaterialLabel>ALUMINIUM</MaterialLabel>
            <OptionGroup>
              <OptionLabel>
                <OptionNumber>3</OptionNumber>
                <OptionTitle>Legs Finish</OptionTitle>
              </OptionLabel>
              <OptionValue style={{ marginLeft: '40px', marginBottom: '8px' }}>
                Steel
              </OptionValue>
              <Dropdown>
                <span>Select</span>
                <ChevronDown size={18} />
              </Dropdown>
            </OptionGroup>
          </MaterialSection>
        </OptionGroup>

        <PriceSection>
          <PriceLabel>Product Price</PriceLabel>
          <PriceContainer>
            <CurrentPrice>$ 200</CurrentPrice>
            <OriginalPrice>$ 245</OriginalPrice>
          </PriceContainer>
          <AddToCartButton>
            Add to cart
          </AddToCartButton>
        </PriceSection>
      </SidebarPanel>
    </Container>
  );
};

export default UIComponent;
