import React from "react";
import "./Megavita.css";
import { Link } from "react-router-dom";
const Megavita = () => {
  return (
    <div>
      <div className="nav-head1">
        <div className="img-info">
          <div className="img-megativa">
            <img
              src="https://cdn-beup.woka.io/uploads/banners/2022/07/12/Fado.VN_1657620516.133.jpg"
              alt=""
            />
          </div>
          <div className="nav-info">
            <ul className="list-info">
              <li>
                <i className="icofont-check-circled" />
                Mua hàng giá gốc
              </li>
              <li>
                <i className="icofont-check-circled" />
                Giao hàng thần tốc
              </li>
              <li>
                <i className="icofont-check-circled" />
                Miễn phí vận chuyển
              </li>
              <li>
                <i className="icofont-check-circled" />
                Đổi trả linh hoạt
              </li>
            </ul>
          </div>
          <hr />
        </div>
      </div>
      <div className="select-country">
        <ul className="line-country">
          <li>
            <a href="#">
              <img
                width={48}
                height={48}
                src="https://img.icons8.com/color-glass/48/home.png"
                alt="home"
              />
              <i>Tất cả</i>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="flags"
                width={48}
                height={48}
                src="https://img.icons8.com/fluency/48/usa-circular.png"
                alt="usa-circular"
              />
              <i>Mỹ</i>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="flags"
                width={48}
                height={48}
                src="https://img.icons8.com/fluency/48/japan-circular.png"
                alt="japan-circular"
              />
              <i>Nhật</i>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="flags"
                width={48}
                height={48}
                src="https://img.icons8.com/fluency/48/germany-circular.png"
                alt="germany-circular"
              />
              <i> Đức</i>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="flags"
                width={48}
                height={48}
                src="https://img.icons8.com/fluency/48/great-britain-circular.png"
                alt="great-britain-circular"
              />
              <i>Anh</i>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="flags"
                width={48}
                height={48}
                src="https://img.icons8.com/fluency/48/australia-circular.png"
                alt="australia-circular"
              />
              <i>Úc</i>
            </a>
          </li>
        </ul>
        <hr />
      </div>
      <section className="menu-product">
        <div className="megavita-menu">
          {/* <div className="wave-group">
            <input required type="text" className="input" />
            <span className="bar" />
            <label className="label">
              <span className="label-char" style={{ index: 0 }}>
                S
              </span>
              <span className="label-char" style={{ index: 1 }}>
                e
              </span>
              <span className="label-char" style={{ index: 2 }}>
                a
              </span>
              <span className="label-char" style={{ index: 3 }}>
                r
              </span>
              <span className="label-char" style={{ index: 4 }}>
                c
              </span>
              <span className="label-char" style={{ index: 5 }}>
                h
              </span>
            </label>
          </div> */}
          <br />
          <div className="option-function">
            <h3>Danh mục sản phẩm</h3>
            <a href="#">
              <div className="item-name">
                Bổ sung Omega, vitamin, khoáng chất
              </div>
            </a>
            <a href="#">
              {" "}
              <div className="item-name">Bồi bổ sức khỏe</div>
            </a>
            <a href="#">
              {" "}
              <div className="item-name">Gan, mật, phổi</div>
            </a>
            <a href="#">
              <div className="item-name">Giảm đau, hạ sốt, làm diệu cơn ho</div>
            </a>
            <a href="#">
              {" "}
              <div className="item-name">Giảm cân</div>
            </a>
            <a href="#">
              {" "}
              <div className="item-name">Hổ trợ hệ tiêu hóa</div>
            </a>
            <hr />
          </div>
          <h3>Thương hiệu</h3>
          <ul className="megavita-trademark">
            <label className="cyberpunk-checkbox-label">
              <input type="checkbox" className="cyberpunk-checkbox" />
              Horbaach
            </label>
            <br />
            <label className="cyberpunk-checkbox-label">
              <input type="checkbox" className="cyberpunk-checkbox" />
              Swanson
            </label>
            <br />
            <label className="cyberpunk-checkbox-label">
              <input type="checkbox" className="cyberpunk-checkbox" />
              Doctor Best
            </label>
            <br />
            <label className="cyberpunk-checkbox-label">
              <input type="checkbox" className="cyberpunk-checkbox" />
              Fien japan
            </label>
            <br />
            <label className="cyberpunk-checkbox-label">
              <input type="checkbox" className="cyberpunk-checkbox" />
              Now Food
            </label>
            <br />
          </ul>
          <hr />
          <h3>Dịch vụ &amp; khuyến mãi</h3>
          <div className="megavita-trademark">
            <label className="cyberpunk-checkbox-label">
              <input type="checkbox" className="cyberpunk-checkbox" />
              Đang giảm giá
            </label>
            <br />
            <label className="cyberpunk-checkbox-label">
              <input type="checkbox" className="cyberpunk-checkbox" />
              T&T choice
            </label>
          </div>
        </div>

        <div className="megavita-product">
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <span className="card-product-discout">-30%</span>
              <Link to="/CardPay">
                <img
                  src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                  alt="Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700"
                  className="product-card__img lazyloaded"
                />
              </Link>
            </div>
            <div className="card-product-title">
              <Link
                to="/CardPay"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700
              </Link>
              <div className="sao-danh-gia">
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <span>-</span><span className="country-of-manufacture">Việt Nam</span>
              </div>
              <p>Xem thêm nguồn từ hàng</p>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  401,502,295 <span>đ</span>
                </li>
                <li className="price-product-default">
                  <span>
                    8,925,226 <span>đ</span>{" "}
                  </span>
                </li>
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <span className="card-product-discout">-30%</span>
              <Link to="/CardPay">
                <img
                  src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                  alt="Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700"
                  className="product-card__img lazyloaded"
                />
              </Link>
            </div>
            <div className="card-product-title">
              <Link
                to="/CardPay"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700
              </Link>
              <div className="sao-danh-gia">
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <span>-</span><span className="country-of-manufacture">Việt Nam</span>
              </div>
              <p>Xem thêm nguồn từ hàng</p>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  401,502,295 <span>đ</span>
                </li>
                <li className="price-product-default">
                  <span>
                    8,925,226 <span>đ</span>{" "}
                  </span>
                </li>
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div><div className="card-product card-product-watch">
            <div className="card-product-img">
              <span className="card-product-discout">-30%</span>
              <Link to="/CardPay">
                <img
                  src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                  alt="Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700"
                  className="product-card__img lazyloaded"
                />
              </Link>
            </div>
            <div className="card-product-title">
              <Link
                to="/CardPay"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700
              </Link>
              <div className="sao-danh-gia">
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <span>-</span><span className="country-of-manufacture">Việt Nam</span>
              </div>
              <p>Xem thêm nguồn từ hàng</p>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  401,502,295 <span>đ</span>
                </li>
                <li className="price-product-default">
                  <span>
                    8,925,226 <span>đ</span>{" "}
                  </span>
                </li>
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div><div className="card-product card-product-watch">
            <div className="card-product-img">
              <span className="card-product-discout">-30%</span>
              <Link to="/CardPay">
                <img
                  src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                  alt="Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700"
                  className="product-card__img lazyloaded"
                />
              </Link>
            </div>
            <div className="card-product-title">
              <Link
                to="/CardPay"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700
              </Link>
              <div className="sao-danh-gia">
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <span>-</span><span className="country-of-manufacture">Việt Nam</span>
              </div>
              <p>Xem thêm nguồn từ hàng</p>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  401,502,295 <span>đ</span>
                </li>
                <li className="price-product-default">
                  <span>
                    8,925,226 <span>đ</span>{" "}
                  </span>
                </li>
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div><div className="card-product card-product-watch">
            <div className="card-product-img">
              <span className="card-product-discout">-30%</span>
              <Link to="/CardPay">
                <img
                  src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                  alt="Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700"
                  className="product-card__img lazyloaded"
                />
              </Link>
            </div>
            <div className="card-product-title">
              <Link
                to="/CardPay"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700
              </Link>
              <div className="sao-danh-gia">
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <span>-</span><span className="country-of-manufacture">Việt Nam</span>
              </div>
              <p>Xem thêm nguồn từ hàng</p>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  401,502,295 <span>đ</span>
                </li>
                <li className="price-product-default">
                  <span>
                    8,925,226 <span>đ</span>{" "}
                  </span>
                </li>
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div><div className="card-product card-product-watch">
            <div className="card-product-img">
              <span className="card-product-discout">-30%</span>
              <Link to="/CardPay">
                <img
                  src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                  alt="Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700"
                  className="product-card__img lazyloaded"
                />
              </Link>
            </div>
            <div className="card-product-title">
              <Link
                to="/CardPay"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700
              </Link>
              <div className="sao-danh-gia">
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <span>-</span><span className="country-of-manufacture">Việt Nam</span>
              </div>
              <p>Xem thêm nguồn từ hàng</p>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  401,502,295 <span>đ</span>
                </li>
                <li className="price-product-default">
                  <span>
                    8,925,226 <span>đ</span>{" "}
                  </span>
                </li>
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div><div className="card-product card-product-watch">
            <div className="card-product-img">
              <span className="card-product-discout">-30%</span>
              <Link to="/CardPay">
                <img
                  src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                  alt="Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700"
                  className="product-card__img lazyloaded"
                />
              </Link>
            </div>
            <div className="card-product-title">
              <Link
                to="/CardPay"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700
              </Link>
              <div className="sao-danh-gia">
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <span>-</span><span className="country-of-manufacture">Việt Nam</span>
              </div>
              <p>Xem thêm nguồn từ hàng</p>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  401,502,295 <span>đ</span>
                </li>
                <li className="price-product-default">
                  <span>
                    8,925,226 <span>đ</span>{" "}
                  </span>
                </li>
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div><div className="card-product card-product-watch">
            <div className="card-product-img">
              <span className="card-product-discout">-30%</span>
              <Link to="/CardPay">
                <img
                  src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                  alt="Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700"
                  className="product-card__img lazyloaded"
                />
              </Link>
            </div>
            <div className="card-product-title">
              <Link
                to="/CardPay"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700
              </Link>
              <div className="sao-danh-gia">
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <span>-</span><span className="country-of-manufacture">Việt Nam</span>
              </div>
              <p>Xem thêm nguồn từ hàng</p>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  401,502,295 <span>đ</span>
                </li>
                <li className="price-product-default">
                  <span>
                    8,925,226 <span>đ</span>{" "}
                  </span>
                </li>
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div><div className="card-product card-product-watch">
            <div className="card-product-img">
              <span className="card-product-discout">-30%</span>
              <Link to="/CardPay">
                <img
                  src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                  alt="Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700"
                  className="product-card__img lazyloaded"
                />
              </Link>
            </div>
            <div className="card-product-title">
              <Link
                to="/CardPay"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700
              </Link>
              <div className="sao-danh-gia">
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <span>-</span><span className="country-of-manufacture">Việt Nam</span>
              </div>
              <p>Xem thêm nguồn từ hàng</p>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  401,502,295 <span>đ</span>
                </li>
                <li className="price-product-default">
                  <span>
                    8,925,226 <span>đ</span>{" "}
                  </span>
                </li>
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* go top */}
      <div className="bar-icon-top">
                <a href="#">
                    <button
                        style={{ display: "inline" }}
                        id="button"
                        className="show"
                    >
                        <i class="icofont-hand-drawn-up"></i>
                    </button>
                </a>
            </div>
    </div>
  );
};

export default Megavita;
