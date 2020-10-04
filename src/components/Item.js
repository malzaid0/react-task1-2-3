import React from "react";

import {ItemWrapper} from "./styles";

const Item = (props) => {
    const {item} = props
    return (
        <ItemWrapper key={item.id}>
            <img alt={item.name} src={item.image} />
            <p>{item.name}</p>
            <p>{item.price} SR</p>
        </ItemWrapper>
    )
}
export default Item