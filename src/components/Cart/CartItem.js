export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItemFromCart } = value;
    return (
        <div className="row my-2 text-capitalize text-center">

            {/* item img */}
            <div className="col-10 mx-auto col-lg-2">
                <img
                    src={img}
                    style={{ width: "5rem", heigth: "5rem" }}
                    className="img-fluid"
                    alt=""
                />
            </div>

            {/* item name */}
            <div className="col-10 mx-auto col-lg-2 ">
                <span className="d-lg-none">product :</span>
                {title}
            </div>

            {/* item price */}
            <div className="col-10 mx-auto col-lg-2 ">
                <strong>
                    <span className="d-lg-none">price :</span> $
                    {price}
                </strong>
            </div>

            {/* manage item quantity */}
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
                <div className="d-flex justify-content-center">
                    <div>
                        <span
                            className="btn btn-black mx-1"
                            onClick={() => decrement(id)}
                        >
                            -
                        </span>
                        <span className="mx-1">{count}</span>
                        <span
                            className="btn btn-black mx-1"
                            onClick={() => increment(id)}
                        >
                            +
                        </span>
                    </div>
                </div>
            </div>

            {/*  */}

            <div className="col-10 mx-auto col-lg-2 ">
                <div className="cart-icon">
                    <i className="fas fa-trash" onClick={() => removeItemFromCart(id)}></i>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2 ">
                <strong>
                    <strong> item total : ${total}</strong>
                </strong>
            </div>
        </div>
    );
}