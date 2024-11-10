import styled from 'styled-components';
import Image from 'next/image';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: #3a3f51;
  color: white;
  text-align: center;
`;

const Logo = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #d1d1d1;
  margin: 0;
`;

interface HeaderProps {
  walletAddress: string;
}

const Header: React.FC<HeaderProps> = ({ walletAddress }) => (
  <HeaderWrapper>
    <Logo>
      <Image 
        src="https://www.thehemera.com/_next/image?url=%2Fimages%2Fhemera-logo.jpg&w=96&q=75"
        alt="Hemera Logo" 
        width={100} 
        height={100} 
        priority
      />
    </Logo>
    <Title>Token Transfer Tracker</Title>
    <Description>Contract: {walletAddress}</Description>
  </HeaderWrapper>
);

export default Header;
