import React from 'react';

// Components
import ItemList from "./components/ItemList";

// Data
import items from "./items";

// Styling
import styles from "./styles";


function App() {
  return (
    <div style={styles.restaurantBody}>
        <h1 style={styles.restaurantName}>My Restaurant</h1>
        <img src="https://www.todott.com/wp-content/uploads/2016/10/clos-maggiore-2.jpg" className="App-logo" style={styles.restaurantImage} alt="logo" />

        <ItemList />
    </div>
  );
}

export default App;
