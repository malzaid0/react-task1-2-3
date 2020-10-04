import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.backgroundColor};
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.pink};
`;

export const RestaurantImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const RestaurantBody= styled.div`
    text-align: center;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ItemWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;
  }
`;