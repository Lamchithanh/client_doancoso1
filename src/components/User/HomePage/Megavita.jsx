import React from "react";
import "./Megavita.css";
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
              Fado choice
            </label>
          </div>
        </div>

        <div className="megavita-product">
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                data-src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                alt="Horbaach Maca 4800mg 120 Viên - Viên Uống Tăng Cường Sinh Lý Nam Và Nữ (08/2025 Giao Nhanh 48H)"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="#"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Daylight Artist Studio Lamp 2-6,000 Lux LED with 95+ CRI, 24cm
                Wide Shade
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">8,181,654 đ</li>
                <li className="price-product-default" />
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
              <img
                src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                data-src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                alt="Horbaach Maca 4800mg 120 Viên - Viên Uống Tăng Cường Sinh Lý Nam Và Nữ (08/2025 Giao Nhanh 48H)"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="#"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Daylight Artist Studio Lamp 2-6,000 Lux LED with 95+ CRI, 24cm
                Wide Shade
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">8,181,654 đ</li>
                <li className="price-product-default" />
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
              <img
                src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                data-src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                alt="Horbaach Maca 4800mg 120 Viên - Viên Uống Tăng Cường Sinh Lý Nam Và Nữ (08/2025 Giao Nhanh 48H)"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="#"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Daylight Artist Studio Lamp 2-6,000 Lux LED with 95+ CRI, 24cm
                Wide Shade
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">8,181,654 đ</li>
                <li className="price-product-default" />
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
              <img
                src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                data-src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                alt="Horbaach Maca 4800mg 120 Viên - Viên Uống Tăng Cường Sinh Lý Nam Và Nữ (08/2025 Giao Nhanh 48H)"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="#"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Daylight Artist Studio Lamp 2-6,000 Lux LED with 95+ CRI, 24cm
                Wide Shade
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">8,181,654 đ</li>
                <li className="price-product-default" />
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
              <img
                src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                data-src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                alt="Horbaach Maca 4800mg 120 Viên - Viên Uống Tăng Cường Sinh Lý Nam Và Nữ (08/2025 Giao Nhanh 48H)"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="#"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Daylight Artist Studio Lamp 2-6,000 Lux LED with 95+ CRI, 24cm
                Wide Shade
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">8,181,654 đ</li>
                <li className="price-product-default" />
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
              <img
                src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                data-src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                alt="Horbaach Maca 4800mg 120 Viên - Viên Uống Tăng Cường Sinh Lý Nam Và Nữ (08/2025 Giao Nhanh 48H)"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="#"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Daylight Artist Studio Lamp 2-6,000 Lux LED with 95+ CRI, 24cm
                Wide Shade
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">8,181,654 đ</li>
                <li className="price-product-default" />
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
              <img
                src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                data-src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                alt="Horbaach Maca 4800mg 120 Viên - Viên Uống Tăng Cường Sinh Lý Nam Và Nữ (08/2025 Giao Nhanh 48H)"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="#"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Daylight Artist Studio Lamp 2-6,000 Lux LED with 95+ CRI, 24cm
                Wide Shade
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">8,181,654 đ</li>
                <li className="price-product-default" />
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
              <img
                src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                data-src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                alt="Horbaach Maca 4800mg 120 Viên - Viên Uống Tăng Cường Sinh Lý Nam Và Nữ (08/2025 Giao Nhanh 48H)"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="#"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Daylight Artist Studio Lamp 2-6,000 Lux LED with 95+ CRI, 24cm
                Wide Shade
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">8,181,654 đ</li>
                <li className="price-product-default" />
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
              <img
                src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                data-src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                alt="Horbaach Maca 4800mg 120 Viên - Viên Uống Tăng Cường Sinh Lý Nam Và Nữ (08/2025 Giao Nhanh 48H)"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="#"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Daylight Artist Studio Lamp 2-6,000 Lux LED with 95+ CRI, 24cm
                Wide Shade
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">8,181,654 đ</li>
                <li className="price-product-default" />
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
              <img
                src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                data-src="https://cdn-beup.woka.io/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                alt="Horbaach Maca 4800mg 120 Viên - Viên Uống Tăng Cường Sinh Lý Nam Và Nữ (08/2025 Giao Nhanh 48H)"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="#"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Daylight Artist Studio Lamp 2-6,000 Lux LED with 95+ CRI, 24cm
                Wide Shade
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">8,181,654 đ</li>
                <li className="price-product-default" />
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
          <i className="icofont-rocket-alt-1" />
        </a>
      </div>
    </div>
  );
};

export default Megavita;
