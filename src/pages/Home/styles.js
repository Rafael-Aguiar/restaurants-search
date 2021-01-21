import Slider from 'react-slick';
import styled from 'styled-components';

export const Wrapper =styled.div`
display:flex;
width: 100%;
`;

export const Container = styled.aside`
  background: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
  border: 2px solid red;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  background: #FFFFFF;
`;

export const Logo = styled.img`
margin-bottom:16px;
`;

export const Map = styled.div`
background: wheat;
width: 500px;
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 32px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;

export const Carousel = styled(Slider)`
.slick-slide {
  margin-right: 16px;
}
`;