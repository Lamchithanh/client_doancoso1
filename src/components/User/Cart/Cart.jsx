import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
// import "./checkbox";
const Cart = () => {
    return (
        <div>
            {/*  */}
            <main>
                <div className="select-inland-import">
                    <ul className="checkbox-inland-import">
                        <li>
                            <div className="container">
                                <label className="container">
                                    <input
                                        type="checkbox"
                                        id="selectall"
                                        className="checkboxchirl"
                                        onChange={(event) => {
                                            const checkboxes =
                                                document.querySelectorAll(
                                                    ".checkboxchirl"
                                                );
                                            checkboxes.forEach((checkbox) => {
                                                checkbox.checked =
                                                    event.target.checked;
                                            });
                                        }}
                                    />
                                    <svg
                                        viewBox="0 0 64 64"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path
                                            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                                            pathLength="575.0541381835938"
                                            class="path"
                                        ></path>
                                    </svg>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="title-product-cart">
                                <img
                                    width={48}
                                    height={48}
                                    src="https://img.icons8.com/parakeet-line/48/shop.png"
                                    alt="shop"
                                />
                                <i>Sản phẩm</i>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                    </ul>
                    <ul className="element-product">
                        <li>Cách thức giao</li>
                        <li>Đơn giá</li>
                        <li>Số lượng</li>
                        <li>Số tiền</li>
                        <li>Thao tác</li>
                    </ul>
                </div>
                <section className="group-cart">
                    <div className="cart-product">
                        <ul className="cart-name">
                            <li>
                                <div className="container">
                                    <label class="container">
                                        <input
                                            type="checkbox"
                                            className="checkboxchirl"
                                        />
                                        <svg
                                            viewBox="0 0 64 64"
                                            height="2em"
                                            width="2em"
                                        >
                                            <path
                                                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                                                pathLength="575.0541381835938"
                                                class="path"
                                            ></path>
                                        </svg>
                                    </label>
                                </div>
                            </li>
                            <li className="cart-product-img">
                                <a href="$">
                                    <img
                                        data-src="https://cdn-amz.woka.io/images/I/71zdEncDbPS._SR200,200_.jpg"
                                        src="https://cdn-amz.woka.io/images/I/71zdEncDbPS._SR200,200_.jpg"
                                        alt="Womens Fruit"
                                        className="product-img lazyloaded"
                                    />
                                </a>
                            </li>
                            <li className="content-product-cart">
                                <div className="cart-name-product">
                                    <a href="$">Womens Fruit</a>
                                </div>
                                <div>
                                    Từ :{" "}
                                    <b>
                                        <span className="product-cart-made-in">
                                            Mỹ
                                        </span>
                                    </b>
                                </div>
                                <div className="cart-size-product">
                                    Size :{" "}
                                    <b>
                                        <spanc className="cart-size-product value-size">
                                            8.5
                                        </spanc>
                                    </b>
                                </div>
                                <div className="product-cart-text-color">
                                    Color :
                                    <b>
                                        <span className="cart-color-product">
                                            Wolf Grey Smoked Oz Canvas
                                        </span>
                                    </b>
                                </div>
                            </li>
                        </ul>
                        <ul className="info-bill-product">
                            <li className="ship-product">
                                <p>
                                    Giao tiêu chuẩn <br />
                                    Giao nhanh, tiêt kiệm
                                </p>
                            </li>
                            <li className="initial-value">1,138,409 đ</li>
                            <li className="quantity-input-value">1</li>
                            <li className="price-value-product">1,213,280 đ</li>
                            <li>
                                <a href="$">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width={100}
                                        height={100}
                                        viewBox="0 0 48 48"
                                    >
                                        <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6367188 13 L 11.15625 39.029297 C 11.43025 41.862297 13.785813 44 16.632812 44 L 31.367188 44 C 34.214187 44 36.56875 41.862297 36.84375 39.029297 L 39.363281 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 19.5 18 C 20.328 18 21 18.671 21 19.5 L 21 34.5 C 21 35.329 20.328 36 19.5 36 C 18.672 36 18 35.329 18 34.5 L 18 19.5 C 18 18.671 18.672 18 19.5 18 z M 28.5 18 C 29.328 18 30 18.671 30 19.5 L 30 34.5 C 30 35.329 29.328 36 28.5 36 C 27.672 36 27 35.329 27 34.5 L 27 19.5 C 27 18.671 27.672 18 28.5 18 z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="cart-product">
                        <ul className="cart-name">
                            <li>
                                <div className="container">
                                    <label class="container">
                                        <input
                                            type="checkbox"
                                            className="checkboxchirl"
                                        />
                                        <svg
                                            viewBox="0 0 64 64"
                                            height="2em"
                                            width="2em"
                                        >
                                            <path
                                                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                                                pathLength="575.0541381835938"
                                                class="path"
                                            ></path>
                                        </svg>
                                    </label>
                                </div>
                            </li>
                            <li className="cart-product-img">
                                <a href="$">
                                    <img
                                        data-src="https://cdn-amz.woka.io/images/I/71zdEncDbPS._SR200,200_.jpg"
                                        src="https://cdn-amz.woka.io/images/I/71zdEncDbPS._SR200,200_.jpg"
                                        alt="Womens Fruit"
                                        className="product-img lazyloaded"
                                    />
                                </a>
                            </li>
                            <li className="content-product-cart">
                                <div className="cart-name-product">
                                    <a href="$">Womens Fruit</a>
                                </div>
                                <div>
                                    Từ :{" "}
                                    <b>
                                        <span className="product-cart-made-in">
                                            Mỹ
                                        </span>
                                    </b>
                                </div>
                                <div className="cart-size-product">
                                    Size :{" "}
                                    <b>
                                        <spanc className="cart-size-product value-size">
                                            8.5
                                        </spanc>
                                    </b>
                                </div>
                                <div className="product-cart-text-color">
                                    Color :
                                    <b>
                                        <span className="cart-color-product">
                                            Wolf Grey Smoked Oz Canvas
                                        </span>
                                    </b>
                                </div>
                            </li>
                        </ul>
                        <ul className="info-bill-product">
                            <li className="ship-product">
                                <p>
                                    Giao tiêu chuẩn <br />
                                    Giao nhanh, tiêt kiệm
                                </p>
                            </li>
                            <li className="initial-value">1,138,409 đ</li>
                            <li className="quantity-input-value">1</li>
                            <li className="price-value-product">1,213,280 đ</li>
                            <li>
                                <a href="$">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width={100}
                                        height={100}
                                        viewBox="0 0 48 48"
                                    >
                                        <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6367188 13 L 11.15625 39.029297 C 11.43025 41.862297 13.785813 44 16.632812 44 L 31.367188 44 C 34.214187 44 36.56875 41.862297 36.84375 39.029297 L 39.363281 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 19.5 18 C 20.328 18 21 18.671 21 19.5 L 21 34.5 C 21 35.329 20.328 36 19.5 36 C 18.672 36 18 35.329 18 34.5 L 18 19.5 C 18 18.671 18.672 18 19.5 18 z M 28.5 18 C 29.328 18 30 18.671 30 19.5 L 30 34.5 C 30 35.329 29.328 36 28.5 36 C 27.672 36 27 35.329 27 34.5 L 27 19.5 C 27 18.671 27.672 18 28.5 18 z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>{" "}
                    <div className="cart-product">
                        <ul className="cart-name">
                            <li>
                                <div className="container">
                                    <label class="container">
                                        <input
                                            type="checkbox"
                                            className="checkboxchirl"
                                        />
                                        <svg
                                            viewBox="0 0 64 64"
                                            height="2em"
                                            width="2em"
                                        >
                                            <path
                                                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                                                pathLength="575.0541381835938"
                                                class="path"
                                            ></path>
                                        </svg>
                                    </label>
                                </div>
                            </li>
                            <li className="cart-product-img">
                                <a href="$">
                                    <img
                                        data-src="https://cdn-amz.woka.io/images/I/71zdEncDbPS._SR200,200_.jpg"
                                        src="https://cdn-amz.woka.io/images/I/71zdEncDbPS._SR200,200_.jpg"
                                        alt="Womens Fruit"
                                        className="product-img lazyloaded"
                                    />
                                </a>
                            </li>
                            <li className="content-product-cart">
                                <div className="cart-name-product">
                                    <a href="$">Womens Fruit</a>
                                </div>
                                <div>
                                    Từ :{" "}
                                    <b>
                                        <span className="product-cart-made-in">
                                            Mỹ
                                        </span>
                                    </b>
                                </div>
                                <div className="cart-size-product">
                                    Size :{" "}
                                    <b>
                                        <spanc className="cart-size-product value-size">
                                            8.5
                                        </spanc>
                                    </b>
                                </div>
                                <div className="product-cart-text-color">
                                    Color :
                                    <b>
                                        <span className="cart-color-product">
                                            Wolf Grey Smoked Oz Canvas
                                        </span>
                                    </b>
                                </div>
                            </li>
                        </ul>
                        <ul className="info-bill-product">
                            <li className="ship-product">
                                <p>
                                    Giao tiêu chuẩn <br />
                                    Giao nhanh, tiêt kiệm
                                </p>
                            </li>
                            <li className="initial-value">1,138,409 đ</li>
                            <li className="quantity-input-value">1</li>
                            <li className="price-value-product">1,213,280 đ</li>
                            <li>
                                <a href="$">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width={100}
                                        height={100}
                                        viewBox="0 0 48 48"
                                    >
                                        <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6367188 13 L 11.15625 39.029297 C 11.43025 41.862297 13.785813 44 16.632812 44 L 31.367188 44 C 34.214187 44 36.56875 41.862297 36.84375 39.029297 L 39.363281 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 19.5 18 C 20.328 18 21 18.671 21 19.5 L 21 34.5 C 21 35.329 20.328 36 19.5 36 C 18.672 36 18 35.329 18 34.5 L 18 19.5 C 18 18.671 18.672 18 19.5 18 z M 28.5 18 C 29.328 18 30 18.671 30 19.5 L 30 34.5 C 30 35.329 29.328 36 28.5 36 C 27.672 36 27 35.329 27 34.5 L 27 19.5 C 27 18.671 27.672 18 28.5 18 z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* bar-pay */}
                <section className="cart-order">
                    <div>
                        <div className="freeship">
                            <img
                                src="https://st-fe-v2.fado.vn/desktop/image/page/cart-page/freeship-text.svg"
                                alt=""
                                className="mz-mr-2"
                            />{" "}
                            <i></i>
                            <i style={{ fontWeight: 500 }}>
                                Đơn hàng đã được miễn phí giao hàng trong nước
                            </i>
                        </div>
                        <div className="btn-voucher">
                            <input
                                type="text"
                                placeholder="Nhập mã giảm giá"
                                className="discount-code-input"
                            />
                            <button>Áp dụng</button>
                        </div>
                    </div>
                    <div />
                    <div>
                        <ul />
                        <ul className="pay">
                            <li style={{ color: "rgb(130, 136, 136)" }}>
                                Tổng tiền sản phẩm:
                            </li>
                            <li className="total-price-value-product">
                                1,213,280 đ
                            </li>
                            <li>
                                <Link to="/Thanhtoandathang">
                                    <button>Đặt hàng</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
            {/*  */}
        </div>
    );
};

export default Cart;
