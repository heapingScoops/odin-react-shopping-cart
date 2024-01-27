import { NavLink, Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export default function Navbar() {

    const { cart, setCart , subTotal, totalItems } = useContext(CartContext);

    return (
        <div className="navbar bg-base-content px-32 py-8" >
            <NavLink to="/" className="flex-1">
                <span className="text-5xl text-base-100">The Shop Hole</span>
            </NavLink>
            <div className="flex-none">
                <NavLink to="/shop">
                    <div className="text-2xl text-base-100 mr-16">Shop Now</div>
                </NavLink>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 base-neutral" fill="" viewBox="0 0 24 24" stroke="base-100"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item badge-base-100">{totalItems()}</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg text-neutral">{totalItems()} Items</span>
                            <span className="text-neutral">Subtotal: ${subTotal()}</span>
                            <div className="card-actions">
                                <Link to="http://localhost:5173/cart"><button className="btn btn-primary btn-block ">View cart</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )

}