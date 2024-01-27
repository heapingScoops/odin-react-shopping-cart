export default function CartItemRow({ item, handleCartChange , handleDelete}) {

    function handleDeleteClick(e){
        handleDelete(item.id)
    }

    function handleQtyChange(e) {
        handleCartChange(item.id, e.target.value)
    }

    return (

        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-36 h-36">
                            <img src={item.image} />
                        </div>
                    </div>
                </div>
            </td>
            <td className="flex flex-col h-36 justify-between ">
                
                <span className="text text-xl">{item.title}</span>

                <div className="flex-grow"></div>


                <div >
                    <label htmlFor="qty" className="align-center text-md">QTY:</label>
                    <input onChange={handleQtyChange} className="input input-bordered input-primary input-xs w-16 mx-2" name="qty" type="number" value={item.qty} min="1"></input>
                    <span> | </span>
                    <button onClick={handleDeleteClick} className="btn btn-sm btn-base ml-2">delete</button>
                </div>


            </td>
            <td className="align-top text-lg">${item.price}</td>
        </tr>
    )
}