import React from 'react';

import { Restaurant, RestaurantInfo, Title, Adress } from './styles';

function RestaurantCard() {
  return (
    <Restaurant>
      <RestaurantInfo>
      <Title>Nome</Title>
      <span>Avaliação</span>
      <Adress>Rua domenico fontana, 27</Adress>
      </RestaurantInfo>
    </Restaurant>
  )
}

export default RestaurantCard;
