import React, { useState } from "react";
import "./CardPay.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardPay = () => {
    const notify = () => toast("Thêm vào giỏ hàng thành công!");

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div>
            <main className="main-cardpay container">
                <div className="group-cardpay container">
                    <div style={{ display: "flex", gap: "30px" }}>
                        <div className="cardpay-head">
                            <div className="cardpay-img">
                                <img
                                    src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                                    data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                                    alt="Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700"
                                    className="product-card__img lazyloaded"
                                />
                            </div>
                            <div className="cardpay-info">
                                <div className="trademark-text mb-2">
                                    Thương hiệu:{" "}
                                    <span className="trademark-product bold">
                                        Prada
                                    </span>
                                </div>
                                <h4 className="cardpay-title-name">
                                    Ladies Paradoxe Intense EDP Spray 3.0 oz
                                    Fragrances 3614273961707
                                </h4>
                                <div className="madein-rate">
                                    <div className="made-in">
                                        Bán tại:{" "}
                                        <span className="country-of-manufacture">
                                            Mỹ
                                        </span>
                                    </div>
                                    <div className="rate">
                                        <div className="values-rate">
                                            5.0 <i className="icofont-star" />
                                            <i className="icofont-star" />
                                            <i className="icofont-star" />
                                            <i className="icofont-star" />
                                            <i className="icofont-star" />
                                        </div>
                                    </div>
                                </div>
                                <ul className="preferential">
                                    <li>
                                        <a href="$">
                                            Nhận ưu đãi
                                            <span className="preferential-sales bold">
                                                lên đến 6%
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="$">
                                            <span className="slae1% bold">
                                                Giảm 1%
                                            </span>
                                            trên đơn hàng(tối thiểu 200,000đ)
                                            khi thanh toán qua
                                            <span className="Pay bold">
                                                Pay
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="$">Đổi trả sản phẩm 24h</a>
                                    </li>
                                    <li>
                                        <a href="$">
                                            Giá về việt nam đã bao gồm các loại
                                            phí, không phát sinh phụ phí
                                        </a>
                                    </li>
                                </ul>
                                <form className="check-radio" action>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="radio1"
                                            name="optradio"
                                            defaultValue="option1"
                                            defaultChecked
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="radio1"
                                        >
                                            Nhập khẩu tiêu dùng
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="radio2"
                                            name="optradio"
                                            defaultValue="option2"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="radio2"
                                        >
                                            Nhập khẩu thương mại
                                        </label>
                                    </div>
                                </form>
                                {/* check input */}
                                <div className="price-and-discout">
                                    <span className="price-and">
                                        2.000.000đ
                                    </span>
                                    <span>|</span>GIẢM
                                    <span className="and-discout">
                                        53.00 <span>%</span>
                                    </span>
                                </div>
                                <div className="cardpay-values-price">
                                    <h2 className="price-product-values">
                                        1,280,552 đ
                                    </h2>
                                </div>
                                {/* size-color */}
                                <div className="size-color">
                                    <div className="size">
                                        <div htmlFor="cars">Size</div>
                                        <select id="cars">
                                            <option value="volvo">
                                                X-Small
                                            </option>
                                            <option value="saab">Small</option>
                                            <option value="opel">Medium</option>
                                            <option value="audi">Large</option>
                                            <option value="audi">
                                                X-Large
                                            </option>
                                            <option value="audi">
                                                XX-Large
                                            </option>
                                        </select>
                                    </div>
                                    <div className="color">
                                        <div htmlFor="cars">Color</div>
                                        <select id="cars">
                                            <option value="volvo">Black</option>
                                            <option value="saab">Navy</option>
                                            <option value="opel">White</option>
                                            <option value="audi">blue</option>
                                        </select>
                                    </div>
                                </div>
                                {/* quantity-input */}
                                <div className="quantity-input-button">
                                    <div className="quantity">
                                        <button
                                            className="quantity__button"
                                            onClick={decreaseQuantity}
                                        >
                                            -
                                        </button>
                                        <span className="quantity__number">
                                            {quantity}
                                        </span>
                                        <button
                                            className="quantity__button"
                                            onClick={increaseQuantity}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="btn-add-product">
                                     
                                            <button
                                                type="button"
                                                class="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                            >
                                               Thêm vào giỏ
                                            </button>
                                        
                                        {/* <!-- The Modal --> */}
                                        <div class="modal" id="myModal">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    {/* <!-- Modal Header --> */}
                                                    <div class="modal-header">
                                                        <h4 class="modal-title">
                                                           Thông báo
                                                        </h4>
                                                        <button
                                                            type="button"
                                                            class="btn-close"
                                                            data-bs-dismiss="modal"
                                                        ></button>
                                                    </div>

                                                    {/* <!-- Modal body --> */}
                                                    <div class="modal-body">
                                                       Bạn phải đăng nhập thì mới thêm sản phẩm vào giỏ được!
                                                    </div>

                                                    {/* <!-- Modal footer --> */}
                                                    <div class="modal-footer">
                                                        <button
                                                            type="button"
                                                            class="btn btn-danger"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-detail-shipping">
                                    *Miễn phí Vận chuyển Siêu tốc cho Platinum
                                    và Super VIP.
                                    <a
                                        className
                                        href="$"
                                        data-toggle="modal"
                                        data-target="#user-fado-vip-info-modal"
                                    >
                                        <b>Nâng cấp ngay</b>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="danh-gia-san-pham">
                            <div className="nguoi-ban">
                                Người bán: <span>Miczone LLC</span>
                            </div>
                            <div className="ban-can-ho-tro">
                                <ul className="title-ho-tro">
                                    <b>Bạn cần hỗ trợ</b>
                                    <li>Hướng dẫn mua hàng</li>
                                    <li>Phương thức thanh toán</li>
                                    <li>Chính sách đổi trả hàng</li>
                                    <li>Nguồn điện sử dụng</li>
                                    <li>Hướng dẫn chọn size</li>
                                </ul>
                            </div>
                            <label htmlFor="">
                                {" "}
                                <b>Đánh giá của khách hàng</b>
                            </label>
                            <div className="danh-gia-khach-hang">
                                <h1 className="so-sao-danh-gia">5.0</h1>
                                <div className="so-sao-va-so-luot">
                                    <div className="so-sao">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                    </div>
                                    <div className="so-luot">
                                        (<span>1900</span> <span>đánh giá</span>
                                        )
                                    </div>
                                </div>
                            </div>
                            <div className="phan-tram-chat-luong">
                                <li>
                                    <span>
                                        51<span>%</span>
                                    </span>{" "}
                                    <i> sản phẩm chất lượng</i>
                                    <i class="icofont-rounded-right"></i>
                                </li>
                                <li>
                                    <span>
                                        100<span>%</span>
                                    </span>{" "}
                                    Nhân viên hỗ trợ
                                    <i class="icofont-rounded-right"></i>
                                </li>
                                <li>
                                    <span>
                                        50<span>%</span>
                                    </span>{" "}
                                    Giá tốt
                                    <i class="icofont-rounded-right"></i>
                                </li>
                                <li>
                                    <span>
                                        90<span>%</span>
                                    </span>{" "}
                                    Giao hàng đúng hẹn
                                    <i class="icofont-rounded-right"></i>
                                </li>
                            </div>
                        </div>
                    </div>
                    {/* bản báo cáo chất lượng dịch vụ */}
                    <nav className="nav-table">
                        <li className="nav-show-info">
                            <ul>
                                <li>
                                    <ul className="table-icon">
                                        <div>
                                            <i className="icofont icofont-euro" />
                                        </div>
                                        <div>Giá bạn thấy bằng giá bạn trả</div>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="table-icon">
                                        <div>
                                            <i className="icofont icofont-shopify" />
                                        </div>
                                        <div>
                                            Yên tâm mua sắm, giải tỏa rủi ro
                                        </div>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="table-icon">
                                        <div>
                                            <i className="icofont icofont-box" />
                                        </div>
                                        <div>Hàng chất lượng, rõ nguồn gốc</div>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="table-icon">
                                        <div>
                                            <i className="icofont icofont-checked" />
                                        </div>
                                        <div>
                                            Sản phẩm nhập khẩu chính ngạch
                                        </div>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="table-icon">
                                        <div>
                                            <i className="icofont icofont-map" />
                                        </div>
                                        <div>Liên tục cập nhật hành trình</div>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="table-icon">
                                        <div>
                                            <i className="icofont icofont-world" />
                                        </div>
                                        <div>Miễn phí giao hàng trong nước</div>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <div className="nav-show-info nav-show-info2">
                            <ul>
                                <li>
                                    Cam kết giá bán niêm yết chính xác trên
                                    website
                                </li>
                                <li>
                                    Bảo vệ quyền lợi Khách Hàng, hỗ trợ đổi trả
                                    nhanh chóng
                                </li>
                                <li>
                                    Chất lượng đảm bảo, nguồn gốc rõ ràng, có
                                    đánh giá từ người mua và thẩm định độ uy tín
                                    người bán
                                </li>
                                <li>
                                    An toàn, minh bạch hợp pháp, không sợ rủi ro
                                </li>
                                <li>
                                    Theo dõi và cập nhật quá trình vận đơn
                                    thường xuyên
                                </li>
                                <li>
                                    Miễn phí giao hàng trong nước, áp dụng cho
                                    đơn hàng từ 1,5 triệu
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="cardpay-detail">
                        <div className="product-detail" />
                        <div className="product-function">
                            <h2>TÍNH NĂNG SẢN PHẨM</h2>
                            <div className="fuction-content">
                                <p>
                                    Immerse yourself in the captivating aura of
                                    Paradoxe Intense, an enchanting fragrance
                                    for ladies by the design house of Prada.
                                </p>
                                <p>
                                    Launched in the year 2023, this perfume
                                    embodies the elegance and sophistication
                                    that is synonymous with the Prada brand.
                                    With its unique blend of exquisite notes,
                                    it's a scent that's sure to leave an
                                    unforgettable impression. The top notes of
                                    pear, neroli, and bergamot create a
                                    captivating start, drawing you in with their
                                    fresh and fruity allure. This then gently
                                    transitions into the heart notes of moss,
                                    neroli essence, and jasmine, which add a
                                    touch of earthy floral to the mix. Anchored
                                    by base notes of bourbon vanilla, vanilla,
                                    ambrofix, amber, and serenolide, this
                                    fragrance leaves a warm, sensual trail that
                                    lingers on the skin.
                                </p>
                                Prada Ladies Paradoxe Intense EDP Spray comes in
                                a 3.0 oz size, making it perfect for everyday
                                use or special occasions. Its barcode is
                                3614273961707, ensuring that you're purchasing
                                an authentic Prada product. Packaged in a
                                beautiful bottle that reflects the luxurious
                                nature of the scent within, this perfume is a
                                fantastic addition to any fragrance collection.
                                Please note that this item is only valid for
                                shipment in the Contiguous United States.
                                Experience the intriguing paradox of Paradoxe
                                Intense, a fragrance that effortlessly fuses
                                classic elements with modern sophistication.
                                It's the perfect scent to add a touch of
                                elegance and mystery to your day. This item is
                                only valid for shipment in the Contiguous United
                                States &amp; Canada.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* footer */}
        </div>
    );
};

export default CardPay;
