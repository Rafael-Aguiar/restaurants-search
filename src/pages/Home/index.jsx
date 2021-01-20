import React from 'react'
import { Container, Search, Logo, Wrapper, Map } from './styles'

import logo from '../../assets/logo.svg';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon/dist/index';

function Home() {
  const [inputValue, setInputValue] = React.useState('')
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
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
}

export default Home
