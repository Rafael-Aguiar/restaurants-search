import styled from 'styled-components';

export const Wrapper =styled.div`
display:flex;
width: 100%
`;

export const Container = styled.aside`
  background: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: scroll;
  border: 2px solid red;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 16px;
`;

export const Logo = styled.img`
margin-bottom:16px;
`;

export const Map = styled.div`
background: wheat;
width: 500px;
`;