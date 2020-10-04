import React from 'react';

// Components
import ItemList from "./components/ItemList";

// Styling
import {Title, GlobalStyle, RestaurantImage, RestaurantBody} from "./components/styles"

// Theme
import { ThemeProvider } from "styled-components";

const theme = {
    mainColor: "#242424", // main font color
    backgroundColor: "#f2cbd5", // main background color
    pink: "#ba657a",
};

function App() {
  return (
    <ThemeProvider theme={theme}>

        <RestaurantBody>
            <GlobalStyle/>
            <Title>My Restaurant</Title>
            <RestaurantImage src="https://www.todott.com/wp-content/uploads/2016/10/clos-maggiore-2.jpg" alt="logo" />

            <ItemList />
        </RestaurantBody>

    </ThemeProvider>
  );
}

export default App;
