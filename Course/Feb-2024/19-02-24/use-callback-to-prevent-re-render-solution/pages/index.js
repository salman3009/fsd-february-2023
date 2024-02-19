import { useState, useCallback } from 'react';
import ItemList from '../components/ItemList';

export default function Home() {
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState('');

    const addItem = useCallback(()=>{
        setItems([...items, `Items ${items.length + 1}`])
        setMessage("Item add successfully!");
        setTimeout(() => {
          setMessage("");
        }, 3000)
    },[message])

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ItemList items={items} />
            {message && <p id='message'>{message}</p>}
        </div>
    );
}
