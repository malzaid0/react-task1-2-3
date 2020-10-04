import React from "react";

// Styles
import styles from "../styles";

const Item = (props) => {
    const {item} = props
    return (
        <div style={styles.item} key={item.id}>
            <img style={styles.itemImage} alt={item.name} src={item.image} />
            <p style={styles.text}>{item.name}</p>
            <p style={styles.text}>{item.price} SR</p>
        </div>
    )
}
export default Item