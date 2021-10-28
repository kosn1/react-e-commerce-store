import { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, title, company, img, info, price, inCart } = value.productDetails;
                    return (
                        <div className="container py-5">
                            {/* product title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product-img" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h1>Model : {title}</h1>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Price : <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Description :
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>Back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer cartBtn
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}>
                                            {inCart ? "in cart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>

                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}