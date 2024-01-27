import ItemCard from "../components/itemCard"
import { useState, useEffect, useContext } from 'react'
import { CartContext } from "../context/cartContext"

export default function Shop() {
    const [items, setItems] = useState([{}])
    const { cart, setCart } = useContext(CartContext)

    function handleCartAdd(id, qty) {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(item => item.id === id);

            // Clone the cart array
            let newCart = [...prevCart];

            if (existingItemIndex !== -1) {
                // Item exists, increment the quantity
                const existingItem = newCart[existingItemIndex];
                newCart[existingItemIndex] = { ...existingItem, qty: Number(existingItem.qty) + Number(qty) };
            } else {
                // Item does not exist, add it with a quantity of 1
                let newItem = items.find(item => item.id === id);
                if (newItem) {
                    newCart.push({ ...newItem, qty: Number(qty) });
                }
            }
            return newCart;
        })
    }


    useEffect(() => {

        fetch('https://fakestoreapi.com/products?limit=40')
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setItems(response)
            })



    }, [])

    return (
        <div className="bg-base-200 py-12">

            <div className="w-4/5 mx-auto">
                <div className="flex flex-wrap gap-3 justify-evenly">
                    {
                        items.map(item => (

                            <ItemCard key={item.id} item={item} handleCartAdd={handleCartAdd} />

                        ))

                    }
                </div>
            </div>

        </div>



    )

}