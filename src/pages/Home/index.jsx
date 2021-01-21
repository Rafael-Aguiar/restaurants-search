import React from 'react'
import { Container, Search, Logo, Wrapper, Map, CarouselTitle, Carousel } from './styles';
import { Card, RestaurantCard } from '../../components';

import logo from '../../assets/logo.svg';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon/dist/index';

import restaurante from '../../assets/restaurante-fake.png';

function Home() {
  const [inputValue, setInputValue] = React.useState('');

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeigth: true
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do aplicativo"/>
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
            />
          </TextField>
          <CarouselTitle> Perto de Você </CarouselTitle>
          <Carousel {...carouselSettings}>
            <Card photo={restaurante} title="teste 1"/>
            <Card photo={restaurante} title="teste 2"/>
            <Card photo={restaurante} title="teste 3"/>
            <Card photo={restaurante} title="teste"/>
            <Card photo={restaurante} title="teste 4"/>
            <Card photo={restaurante} title="teste 5"/>
            <Card photo={restaurante} title="teste 6"/>
            <Card photo={restaurante} title="teste"/>
            <Card photo={restaurante} title="teste 7"/>
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
    </Wrapper>
  );
}

export default Home
