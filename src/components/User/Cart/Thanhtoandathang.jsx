import React from "react";
import "./Thanhtoandathang.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import logo from "../../../assets/imgs/logo2.png"
import Example from "./modal";
import Examples from "./modalorder";
function Thanhtoandathang() {
 
  return (
    
    <div className="bg-orderpay">
      <header className="header-logo-orderpay container">
        <div className="orderpay-logo-title">
          <div className="orderpay-logo">
          <Link to="/">
              <img
                src={logo}
                className="logo"
              />
            </Link>
          </div>
          <div className="orderpay-title">
            <h4>Thanh toán & Đặt hàng</h4>
          </div>
        </div>
        <div>
          <Link to="/Cart" style={{ textDecoration: "none" }}>
            <div className="orderpay-cart">
              <i class="icofont-shopping-cart"></i>
              <span>Giỏ hàng</span>
            </div>
          </Link>
        </div>
        <div className="orderpay-tellphone">
          <p>Hãy liên hệ ngay khi Quý Khách cần hỗ trợ</p>
          <p className="p-tellphone">
            <i class="icofont-phone"></i>
            <span>090909090</span>
          </p>
        </div>
      </header>
      <main className="main-orderpay-product">
        <section className=" container">
          <div className="section-orderpay-product">
            <div className="orderpay-product">
              <form action="">
                <div className="orderpay-product-card">
                  <div className="orderpay-miczone">
                    <i class="icofont-ui-home"></i>
                    <span>Miczone LLC</span>
                  </div>
                  <div className="orderpay-product-item">
                    <div className="orderpay-item-img">
                      <img
                        src="https://static.fado.vn/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                        alt=""
                      />
                    </div>
                    <div className="orderpay-item-name">
                      <div className="item-name">
                        <b>
                          Horbaach Maca 4800mg 120 Viên - Viên Uống Tăng Cường
                          Sinh Lý Nam Và Nữ (08/2025 Giao Nhanh 48H)
                        </b>
                      </div>
                      <div className="meta-item-wrap">
                        <div className="meta-item">
                          <div className="content">Từ Việt Nam</div>
                        </div>
                        <div className="seperate-item">･</div>
                        <div className="meta-item">
                          <div class="label">Thương hiệu: </div>
                          <div className="content">
                            <span target="_blank"> Horbaach</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="orderpay-shipdate">
                      <b>Giao Tiêu chuẩn</b> <br />
                      Dự kiến giao hàng <br />
                      <span className="shipdate"> 11-05-2024 - 15-05-2024</span>
                    </div>
                    <div className="orderpay-item-price">
                      <div className="orderpay-item-value">
                        400.000 <sup>đ</sup>
                      </div>
                      <div className="quantity-buy">
                        Số lượng: <span className="">1</span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="orderpay-product-card">
                  <div className="orderpay-miczone">
                    <i class="icofont-ui-home"></i>
                    <span>Miczone LLC</span>
                  </div>
                  <div className="orderpay-product-item">
                    <div className="orderpay-item-img">
                      <img
                        src="https://static.fado.vn/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                        alt=""
                      />
                    </div>
                    <div className="orderpay-item-name">
                      <div className="item-name">
                        <b>
                          Horbaach Maca 4800mg 120 Viên - Viên Uống Tăng Cường
                          Sinh Lý Nam Và Nữ (08/2025 Giao Nhanh 48H)
                        </b>
                      </div>
                      <div className="meta-item-wrap">
                        <div className="meta-item">
                          <div className="content">Từ Việt Nam</div>
                        </div>
                        <div className="seperate-item">･</div>
                        <div className="meta-item">
                          <div class="label">Thương hiệu: </div>
                          <div className="content">
                            <span target="_blank"> Horbaach</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="orderpay-shipdate">
                      <b>Giao Tiêu chuẩn</b> <br />
                      Dự kiến giao hàng <br />
                      <span className="shipdate"> 11-05-2024 - 15-05-2024</span>
                    </div>
                    <div className="orderpay-item-price">
                      <div className="orderpay-item-value">
                        400.000 <sup>đ</sup>
                      </div>
                      <div className="quantity-buy">
                        Số lượng: <span className="">1</span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="orderpay-product-card">
                  <div className="orderpay-miczone">
                    <i class="icofont-ui-home"></i>
                    <span>Miczone LLC</span>
                  </div>
                  <div className="orderpay-product-item">
                    <div className="orderpay-item-img">
                      <img
                        src="https://static.fado.vn/uploads/store-merchant/2023/06/30/Fado.VN_1688108588.6453.jpg"
                        alt=""
                      />
                    </div>
                    <div className="orderpay-item-name">
                      <div className="item-name">
                        <b>
                          Horbaach Maca 4800mg 120 Viên - Viên Uống Tăng Cường
                          Sinh Lý Nam Và Nữ (08/2025 Giao Nhanh 48H)
                        </b>
                      </div>
                      <div className="meta-item-wrap">
                        <div className="meta-item">
                          <div className="content">Từ Việt Nam</div>
                        </div>
                        <div className="seperate-item">･</div>
                        <div className="meta-item">
                          <div class="label">Thương hiệu: </div>
                          <div className="content">
                            <span target="_blank"> Horbaach</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="orderpay-shipdate">
                      <b>Giao Tiêu chuẩn</b> <br />
                      Dự kiến giao hàng <br />
                      <span className="shipdate"> 11-05-2024 - 15-05-2024</span>
                    </div>
                    <div className="orderpay-item-price">
                      <div className="orderpay-item-value">
                        400.000 <sup>đ</sup>
                      </div>
                      <div className="quantity-buy">
                        Số lượng: <span className="">1</span>
                      </div>
                    </div>
                  </div>
                </div>
              
              </form>
              <h6 className="lable-section-orderpay">
                Điền thông tin đặt hàng
              </h6>
              <div className="info-orderpay">
                <div className="info-orderpay-login">
                  <div className="info-orderpay-login-text">
                    Đăng nhập tài khoản T&T để mua hàng, Quý Khách sẽ nhận thêm
                    nhiều ưu đãi thành viên và nhận Loyalty Points trên mỗi đơn
                    hàng.
                  </div>
                  <b>Tìm hiểu thêm quyền lợi thành viên</b>
                  <br />
                  <Link to="/Login">
                    <button>Đăng nhập / Đăng ký</button>
                  </Link>
                </div>
                <div className="write-info-orderpay">
                  <b>Hoặc đặt hàng không cần đăng nhập.</b>
                  <hr />
                  <div className="write-info-orderpay-text">
                    Thông tin đặt hàng cũng sẽ được dùng để tạo tài khoản mới
                    ngay sau khi đặt hàng thành công.
                  </div>
                  <Example/>
                  
                </div>
              </div>
              <h6 className="lable-section-orderpay">
                Chọn phương thức thanh toán
              </h6>
              <div className="phuong-thuc-thanh-toan">
                <div className="thong-tin-them">
                  Giá sản phẩm đảm bảo không biến động trong vòng 60 phút căn cứ
                  vào thời điểm Quý Khách Xác nhận đặt hàng thành công. Đơn hàng
                  của Quý Khách chỉ được người bán thực hiện khi T&T xác nhận
                  đơn hàng được đã được thanh toán.
                </div>
                <div className="chon-loai-thanh-toan">
                  <div className="bg-chon-loai-thanh-toan">
                    <ul className="thanh-toan-bank">
                      <li>
                        <div>
                          <img
                            src="https://static.fado.vn/uploads/payment-method/2021/05/03/Fado.VN_1620037161.9807.svg"
                            alt=""
                          />
                        </div>
                        <div className="ten-the-thanh-toan">
                          Thanh toán qua Momo
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            src="https://static.fado.vn/uploads/payment-method/2021/01/08/Fado.VN_1610090407.8986.svg"
                            alt=""
                          />
                        </div>
                        <div className="ten-the-thanh-toan">ViettelPay</div>
                      </li>{" "}
                      <li>
                        <div>
                          <img
                            src="https://static.fado.vn/uploads/payment-method/2021/01/08/Fado.VN_1610090312.2645.svg"
                            alt=""
                          />
                        </div>
                        <div className="ten-the-thanh-toan">
                          Thẻ ATM nội địa
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            src="https://static.fado.vn/uploads/payment-method/2021/01/08/Fado.VN_1610089392.2068.svg"
                            alt=""
                          />
                        </div>
                        <div className="ten-the-thanh-toan">
                          Chuyển khoảng trực tiếp
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bank-khac">
                    <div className="ma-khuyen-mai-mk23">
                      <div className="mk23">
                        Giảm 23,000đ cho đơn hàng từ 1.5 triệu khi nhập mã KM23
                      </div>
                      <div className="info-orderpay-login-text">
                        Quý Khách thực hiện thanh toán bằng cách: Chuyển khoản
                        bằng Internet Banking, tại máy ATM, quầy giao dịch ngân
                        hàng đến số tài khoản công ty Fado tại 2 ngân hàng.
                      </div>
                    </div>
                    <div className="bank">
                      <div className="bank-vcm-tcb">
                        <div class="img-col transfer-bank-logo-col mz-mr-4">
                          <img
                            src="https://st-fe-v2.fado.vn/desktop/image/list-bank/vietcombank-inline.png?v=3.239.3.15"
                            className="bank-logo-img"
                          />
                        </div>

                        <div class="img-col transfer-bank-logo-col">
                          <img
                            src="https://st-fe-v2.fado.vn/desktop/image/list-bank/techcombank-inline.png?v=3.239.3.15"
                            className="bank-logo-img"
                          />
                        </div>
                      </div>
                      <div className="phan-thong-tin-con-lai">
                        <p>
                          Vui lòng chọn chuyển khoản nhanh 24/7 để T&T có thể
                          nhận được thông tin thanh toán một cách nhanh nhất.
                          Khi thanh toán tại máy ATM, vì không thể ghi chú nội
                          dung nên qúy khách vui lòng liên hệ qua email hoặc
                          tổng đài T&T để được hỗ trợ.
                        </p>
                        <p>
                          Nhấn nút <b>ĐẶT MUA</b> để hoàn tất đơn đặt hàng và
                          nhận thông tin tài khoản và cú pháp chuyển khoản
                        </p>
                        <p>
                          Đơn hàng của Quý Khách chỉ được người bán thực hiện
                          khi T&T xác nhận đơn hàng được thanh toán với đầy đủ
                          thông tin từ ngân hàng theo cú pháp đã được hướng dẫn.
                        </p>
                        <p>
                          <b>Lưu ý</b> : Một số Ngân hàng không hỗ trợ kiểm tra
                          sau 19h00:{" "}
                          <b> Agribank, Đông Á, Sacombank, Vietinbank,...</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="orderpay-pay">
              <div className="han-muc-thanh-toan">
                <ul className="han-muc-thanh-toan-100">
                  <li>Hạn mức thanh toán</li>
                  <li>
                    <button>100%</button>
                  </li>
                </ul>
                <p>Quý khách được miễn phí xử lý giao dịch</p>
                <div className="tong-bill">
                  <label htmlFor="" className="lable-tong-bill">
                    Tổng tiền sản phẩm
                  </label>
                  <div className="tong-bill-san-pham">
                    400.000 <sup>đ</sup>
                  </div>
                </div>
                <div className="ma-giam-km">
                  <label htmlFor="Mã giảm giá">Mã giảm giá</label>
                  <br />
                  <input type="text" placeholder="Nhập mã giảm giá" />
                  <button>Áp dụng</button>
                </div>
                <div className="phi-dat-don">
                  <ul className="phi-dat-don-tong">
                    <h6>
                      Tổng chi phí <br /> đặt đơn hàng
                    </h6>
                    <li className="tong-bill-san-pham">
                      400.000 <sup>đ</sup>
                    </li>
                  </ul>
                </div>
                <div className="dat-mua">
                <Examples/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="orderpay-footer container">
        <div className="orderpay-footer-web">
          <b>T&T.vn</b> - T&T.vn - Sàn thương mại điện tử xuyên biên giới hàng
          đầu Việt Nam <br /> Giấy phép số 0316534223. Chịu trách nhiệm: T&T
          Global
        </div>
        <div>
          {" "}
          <li>
            <a href="$">
              <img
                className="footer-mini-block__certify-item-img ls-is-cached lazyloaded"
                src="https://st-fe-v2.fado.vn/desktop/image/icons/bo-cong-thuong_v2.png?v=3.239.3.12"
                data-src="https://st-fe-v2.fado.vn/desktop/image/icons/bo-cong-thuong_v2.png?v=3.239.3.12"
                alt="chung nhan bo cong thuong"
              />
            </a>
          </li>
        </div>
      </footer>
    </div>
  );
}

export default Thanhtoandathang;
