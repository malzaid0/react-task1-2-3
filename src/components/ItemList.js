import React from "react";

// Components
import Item from "./Item";

// Data
import items from "../items";

// Styles
import styles from "../styles";


const ItemList = () => {
    let itemsList = items.map(item => (
        <Item item={item} key={item.id} />
    ))
    return (
        <div style={styles.list}>
            {itemsList}
        </div>
    )
}

export default ItemList