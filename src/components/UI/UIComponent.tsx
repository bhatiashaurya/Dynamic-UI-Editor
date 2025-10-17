import React from 'react';
import styled from 'styled-components';
import { useUIStore } from '../../store/useUIStore';
import { ChevronRight, Star, User, ShoppingCart, Heart } from 'lucide-react';

const Container = styled.div`
  font-family: var(--font-family, 'Inter');
  font-weight: var(--font-weight, 400);
  font-size: var(--font-size, 16px);
  background-color: var(--section-bg-color, #ffffff);
  padding: var(--container-padding, 24px);
  border-radius: var(--card-corner-radius, 12px);
  border: var(--stroke-weight, 1px) solid var(--stroke-color, #e5e7eb);
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 32px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ProductDisplay = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: var(--gallery-border-radius, 8px);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  border: var(--stroke-weight, 1px) solid var(--stroke-color, #e5e7eb);
  position: relative;
`;

const ProductImage = styled.div`
  width: 300px;
  height: 200px;
  background: linear-gradient(45deg, #8b4513, #a0522d);
  border-radius: var(--gallery-border-radius, 8px);
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 15%;
    right: 15%;
    bottom: 20%;
    background: linear-gradient(90deg, #654321, #8b4513);
    border-radius: 4px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 40%;
    left: 25%;
    right: 25%;
    bottom: 40%;
    background: linear-gradient(90deg, #4a2c17, #654321);
    border-radius: 2px;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductTitle = styled.h2`
  font-size: calc(var(--font-size, 16px) * 1.5);
  font-weight: var(--font-weight, 600);
  margin: 0;
  color: #1f2937;
`;

const ProductPrice = styled.div`
  font-size: calc(var(--font-size, 16px) * 1.25);
  font-weight: 600;
  color: #dc2626;
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--gallery-spacing, 8px);
  margin: 16px 0;
`;

const ColorSwatch = styled.div<{ $color: string; $selected?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${props => props.$color};
  border: 3px solid ${props => props.$selected ? 'var(--button-bg-color, #3b82f6)' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

const PrimaryButton = styled.button`
  background-color: var(--button-bg-color, #3b82f6);
  color: var(--button-text-color, #ffffff);
  border: none;
  border-radius: var(--button-border-radius, 8px);
  box-shadow: var(--button-shadow, 0 4px 6px -1px rgb(0 0 0 / 0.1));
  padding: 12px 24px;
  font-family: var(--font-family, 'Inter');
  font-weight: var(--font-weight, 500);
  font-size: var(--font-size, 16px);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  flex: 1;
  justify-content: center;

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--button-shadow, 0 8px 12px -1px rgb(0 0 0 / 0.15));
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  color: var(--button-bg-color, #3b82f6);
  border: 2px solid var(--button-bg-color, #3b82f6);
  box-shadow: none;
  
  &:hover {
    background-color: var(--button-bg-color, #3b82f6);
    color: var(--button-text-color, #ffffff);
  }
`;

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--gallery-spacing, 16px);
  margin: 32px 0;
`;

const SpecCard = styled.div`
  padding: 20px;
  border-radius: var(--card-corner-radius, 12px);
  border: var(--stroke-weight, 1px) solid var(--stroke-color, #e5e7eb);
  background: #fafafa;
  text-align: center;
`;

const SpecLabel = styled.div`
  font-size: calc(var(--font-size, 16px) * 0.875);
  color: #6b7280;
  margin-bottom: 4px;
`;

const SpecValue = styled.div`
  font-size: var(--font-size, 16px);
  font-weight: 600;
  color: #1f2937;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: calc(var(--font-size, 16px) * 2);
  font-weight: var(--font-weight, 700);
  margin: 0 0 16px 0;
  color: #1f2937;
`;

const Subtitle = styled.p`
  font-size: var(--font-size, 16px);
  color: #6b7280;
  margin: 0;
`;

interface UIComponentProps {
  layout?: 'layout1' | 'layout2';
}

const UIComponent: React.FC<UIComponentProps> = ({ layout }) => {
  const { config } = useUIStore();
  const currentLayout = layout || config.currentLayout;
  const [selectedColor, setSelectedColor] = React.useState('#8b4513');

  const colors = [
    '#8b4513', '#654321', '#4a2c17', '#d2b48c', '#deb887', '#f4a460',
    '#cd853f', '#bc8f8f', '#696969', '#708090', '#2f4f4f', '#000000',
    '#8b0000', '#dc143c', '#b22222', '#ff6347', '#ff4500', '#ffa500',
    '#32cd32', '#228b22', '#008000', '#006400', '#0000cd', '#000080',
    '#4b0082', '#8b008b', '#9400d3', '#ff1493', '#ff69b4', '#ffc0cb'
  ];

  if (currentLayout === 'layout2') {
    return (
      <Container>
        <Header>
          <Title>Product Comparison</Title>
          <Subtitle>Compare different configurations side by side</Subtitle>
        </Header>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {[1, 2].map((item) => (
            <div key={item} style={{ 
              padding: '24px', 
              border: `var(--stroke-weight, 1px) solid var(--stroke-color, #e5e7eb)`,
              borderRadius: 'var(--card-corner-radius, 12px)',
              background: '#fafafa'
            }}>
              <ProductImage style={{ width: '100%', height: '150px', marginBottom: '16px' }} />
              <ProductTitle style={{ fontSize: 'calc(var(--font-size, 16px) * 1.25)' }}>
                Configuration {item}
              </ProductTitle>
              <ProductPrice>$1,{item === 1 ? '299' : '459'}</ProductPrice>
              
              <ColorGrid style={{ gridTemplateColumns: 'repeat(5, 1fr)', margin: '12px 0' }}>
                {colors.slice(0, 10).map((color, index) => (
                  <ColorSwatch 
                    key={index} 
                    $color={color}
                    $selected={index === 0}
                    style={{ width: '24px', height: '24px' }}
                  />
                ))}
              </ColorGrid>
              
              <PrimaryButton style={{ width: '100%', marginTop: '16px' }}>
                Select <ChevronRight size={16} />
              </PrimaryButton>
            </div>
          ))}
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Premium Wooden Cabinet</Title>
        <Subtitle>Customize your perfect furniture piece</Subtitle>
      </Header>

      <ProductContainer>
        <ProductDisplay>
          <ProductImage style={{ backgroundColor: selectedColor }} />
        </ProductDisplay>
        
        <ProductDetails>
          <div>
            <ProductTitle>Modern Sideboard</ProductTitle>
            <ProductPrice>$1,299.00</ProductPrice>
          </div>
          
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontSize: 'calc(var(--font-size, 16px) * 1.125)', fontWeight: 600 }}>
              Choose Color
            </h4>
            <ColorGrid>
              {colors.map((color, index) => (
                <ColorSwatch 
                  key={index} 
                  $color={color}
                  $selected={selectedColor === color}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </ColorGrid>
          </div>
          
          <ActionButtons>
            <PrimaryButton>
              <ShoppingCart size={18} />
              Add to Cart
            </PrimaryButton>
            <SecondaryButton>
              <Heart size={18} />
            </SecondaryButton>
          </ActionButtons>
        </ProductDetails>
      </ProductContainer>

      <SpecsGrid>
        <SpecCard>
          <SpecLabel>Dimensions</SpecLabel>
          <SpecValue>120 × 45 × 75 cm</SpecValue>
        </SpecCard>
        
        <SpecCard>
          <SpecLabel>Material</SpecLabel>
          <SpecValue>Solid Wood</SpecValue>
        </SpecCard>
        
        <SpecCard>
          <SpecLabel>Weight</SpecLabel>
          <SpecValue>35 kg</SpecValue>
        </SpecCard>
        
        <SpecCard>
          <SpecLabel>Warranty</SpecLabel>
          <SpecValue>5 Years</SpecValue>
        </SpecCard>
      </SpecsGrid>
    </Container>
  );
};

export default UIComponent;