import React from "react";

// Components
import Item from "./Item";

// Data
import items from "../items";

import {ListWrapper} from "./styles";

const ItemList = () => {
    let itemsList = items.map(item => (
        <Item item={item} key={item.id} />
    ))
    return (
        <ListWrapper>
            {itemsList}
        </ListWrapper>
    )
}

export default ItemList