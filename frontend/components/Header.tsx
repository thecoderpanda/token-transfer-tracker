import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #3a3f51;
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Header = () => (
  <HeaderWrapper>Token Transfer Tracker</HeaderWrapper>
);

export default Header;
