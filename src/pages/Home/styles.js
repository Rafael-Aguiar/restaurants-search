import styled from 'styled-components';

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
`;