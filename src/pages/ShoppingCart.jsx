import { useContext, useEffect } from 'react'
import { CartContext } from '../context/cartContext'
import CartItemRow from '../components/CartItemRow'
import { useNavigate } from 'react-router-dom'


export default function ShoppingCart() {
    const navigate = useNavigate();
    const { cart, setCart, subTotal, handleDelete, clearCart } = useContext(CartContext)



    function handleClearCart() {
        document.getElementById('my_modal_1').showModal()

        clearCart();

    }

    function handleCartQtyChange(id, qty) {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(item => item.id === id);

            // Clone the cart array
            let newCart = [...prevCart];

            // Item exists, increment the quantity
            const existingItem = newCart[existingItemIndex];
            newCart[existingItemIndex] = { ...existingItem, qty: Number(qty) };

            return newCart;
        })

    }

    useEffect(() => {
        const modal = document.getElementById('my_modal_1');

        const handleClose = () => {
            navigate('/'); // Replace '/new-path' with the actual path you want to navigate to
        };

        modal.addEventListener('close', handleClose);

        return () => {
            modal.removeEventListener('close', handleClose);
        };
    }, [navigate]);

    return (
        <>
            {
                (cart.length > 0) ?
                    <div className=" w-4/5 mx-auto my-32">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Info</th>
                                    <th>Price</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(item => (
                                        <CartItemRow key={item.id} item={item} handleCartChange={handleCartQtyChange} handleDelete={handleDelete} />
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="flex justify-between mt-8">

                            <button onClick={handleClearCart} className="btn btn-md btn-accent text-slate-50">Submit Order</button> :


                            <div className="text text-3xl ">
                                Subtotal:   ${subTotal()}
                            </div>
                        </div>
                    </div>
                    : <div className='text text-secondary text-6xl text-center mt-36 text-bold'>All empty. Time to Buy.</div>
            }


            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-success">
                    <h3 className="font-bold text-lg">SUCCESS!</h3>
                    <p className="py-4">Thanks so much for your order! Never stop consuming!</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </>
    )

}