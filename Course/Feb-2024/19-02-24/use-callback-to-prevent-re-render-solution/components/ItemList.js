import React from 'react';

function ItemList({ items }) {
    console.log("ItemList rendered!"); // DO NOT EDIT THIS LINE

    return (
        <ul>
            {items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
    );
}

export default React.memo(ItemList);
