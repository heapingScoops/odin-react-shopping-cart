import { useState } from 'react'

export default function ItemCard({ item, handleCartAdd }) {
    const [selectedQty, setSelectedQty] = useState(0)
    const [animate, setAnimate] = useState(false);

    function handleQtyChange(e) {
        setSelectedQty(e.target.value)
    }


    function handleClick() {
        handleCartAdd(item.id, selectedQty)
        setSelectedQty(0);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 600);  
    }

    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure className="p-6"><img className="max-h-64" src={item.image} /></figure>
            <div className="card-body justify-end">
                <h2 className="card-title">{item.title}</h2>
                <span className="text text-xl card-actions">${item.price}</span>
                <div className="flex justify-between items-center">
                    <label name="qty align-center">QTY:</label>
                    <input onChange={handleQtyChange} className="input input-bordered input-primary input-sm w-full ml-4" min="0" name="qty" type="number" value={selectedQty}></input>
                </div>

                <button className={`btn btn-primary ${animate ? 'pulse-animation' : ''}`} onClick={handleClick}>Add to cart</button>

            </div>
        </div>

    )

}