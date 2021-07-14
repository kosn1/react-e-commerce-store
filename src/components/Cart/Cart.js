import React, { Component } from "react";
import Title from "../Title";
import EmptyCart from "./EmptyCart";
import CartColumns from "./CartColumns";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals"

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        const { cart } = value;
                        return (
                            cart.length > 0
                                ? <React.Fragment>
                                    <Title title="Your Cart" />
                                    <CartColumns />
                                    <CartList value={value}/>
                                    <CartTotals value={value}/>
                                </React.Fragment>
                                : <EmptyCart />

                        );
                    }}
                </ProductConsumer>



            </section>
        );
    }
}