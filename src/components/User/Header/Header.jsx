import { Routes, Route, Link, NavLink } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

import "./Header.css";
import logo from "../../../assets/imgs/logo2.png";
import { colors } from "@mui/material";
function Header() {
    return (
        <header style={{ position: "relative", zIndex: "99" }}>
            <div className="position-sticky">
                <div className="line-short">Xin kính chào quý khách</div>
                <div className="Form-nav">
                    <div className="Logo">
                        <Link to="/">
                            <img src={logo} className="logo" />
                        </Link>
                    </div>
                    <div className="Search">
                        <div className="title-search">
                            <li>từ Mỹ</li>
                            <li>Luxury</li>
                            <li>từ Nhật</li>
                            <li>từ Đức</li>
                            <li>từ Anh</li>
                            <li>2T Mall</li>
                        </div>
                        <div className="taskbar-search">
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm tại đây..."
                                />
                            </div>
                            <div className="search-icon">
                                <i className="bi bi-search" />
                            </div>
                        </div>
                    </div>
                    <div className="Form-signup">
                        <div className="signup">
                            <div class="dropdown dropstart">
                                <button
                                    type="button"
                                    class="btn btn-dark dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Tài khoản
                                </button>

                                <ul class="dropdown-menu">
                                    <NavLink to="/login">
                                        {" "}
                                        <li className="li-login">Đăng nhập</li>
                                    </NavLink>
                                    <li>
                                        <hr
                                            class="dropdown-divider"
                                            style={{ margin: "0" }}
                                        />
                                    </li>
                                    <NavLink to="/singup">
                                        <li className="li-singup">Đăng ký</li>
                                    </NavLink>
                                    <li>
                                        <hr
                                            class="dropdown-divider"
                                            style={{ margin: "0" }}
                                        />
                                    </li>
                                    <ul className="title-name-login">
                                        <li
                                            className="edit-title-user"
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            {" "}
                                            <h6
                                                style={{
                                                    color: "#303846",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Chí Thành
                                            </h6>
                                            <Link to="/UserFillter">
                                            <span
                                                style={{ marginRight: "10px" }}
                                            >
                                                <i class="icofont-pen-alt-4"></i>
                                            </span></Link>
                                        </li>
                                        <li>Nhận thêm Loyalty Points</li>
                                    </ul>
                                    <ul className="body-conten-TvTpay">
                                        <li>T&TPay</li>
                                        <li>Tài khoản trả trước  </li>
                                        <li>
                                            Tạo yêu cầu nạp | nạp bằng E-Gift
                                            card
                                        </li>
                                        <li
                                            style={{
                                                margin: "0",
                                                padding: "0",
                                            }}
                                        >
                                            <Link to="/">
                                                <img
                                                    src={logo}
                                                    className="logo"
                                                />
                                            </Link>
                                        </li>
                                        <ul className="user-menu-list">
                                            <li>
                                                <span>
                                                    <i class="icofont-paper"></i>
                                                </span>
                                                Đơn hàng
                                            </li>
                                            <li>
                                                <span>
                                                    <i class="icofont-heart"></i>
                                                </span>
                                                Danh sách yêu thích
                                            </li>
                                            <li>
                                                <span>
                                                    <i class="icofont-coins"></i>
                                                </span>
                                                yêu cầu báo giá
                                            </li>
                                            <li>
                                                <span>
                                                    <i class="icofont-barcode"></i>
                                                </span>
                                                Mã giảm giá
                                            </li>
                                        </ul>
                                    </ul>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li className="user-logout">
                                        <NavLink class="dropdown-item" href="#">
                                            <span>
                                                <i class="icofont-logout"></i>
                                            </span>
                                            Thoát khỏi tài khoản
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bag">
                            <li>
                                <i class="icofont-cart"></i>{" "}
                                <NavLink to="/Cart">Giỏ hàng</NavLink>
                            </li>
                        </div>
                    </div>
                </div>
                <nav className="option">
                    <ul className="menu">
                        <li>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <i
                                    className="icofont-listing-box"
                                    style={{ margin: 10 }}
                                ></i>
                                <Link to="/">DANH MỤC</Link>
                            </div>
                            <ul className="submenu">
                                <li>
                                    <div className="texticon">
                                        <i class="icofont-monitor"></i>
                                        <Link to="/Filterproduct">
                                            Đồ điện tử và công nghệ
                                        </Link>
                                        <i class="icofont-circled-right"></i>
                                    </div>
                                    <ul className="submenu2">
                                        <div className="playout-submenu2">
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Máy tinh và phụ kiện
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Máy tính - máy tính
                                                            bảng
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Màng hình
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Webcams
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Phụ kiện,linh kiện
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Thiết bị mạng
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Điện thoại và phụ kiện
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Điện thoại
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Phụ kiện điện thoại
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Ốp lưng và Cường lực
                                                            điện thoại
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tai nghe cho điện
                                                            thoại
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Điện thoại unlock
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Thiết bị kỹ thuật số
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Máy ảnh,Quay phim và
                                                            Cammera
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Loa Bluetooth
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Thiết bị Game
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Kính thực tế ảo
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Phụ kiện máy kỹ
                                                            thuật số
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Điện tử văn phòng
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Máy in
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Máy chiếu
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Máy hủy tài liệu
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Máy chấm công
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Phụ kiện máy in
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Tai nghe
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tai nghe chụp tai
                                                            (Over-Ear)
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tai nghe nhét tai
                                                            (In-Ear và Earbud)
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tai nghe Game
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tai nghe thể thao
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Phụ kiện cho tai
                                                            nghe
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Hệ thống nhà thông minh
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tivi
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Âm thanh giải trí
                                                            tại gia
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nhà bếp hiện đại
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đèn chiếu sáng thông
                                                            minh
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Thiết bị chống trộm
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li>
                                    <div className="texticon">
                                        <i class="icofont-apple-watch"></i>
                                        <Link to="/Filterproduct">
                                            Đồng hồ hàng hiệu
                                        </Link>
                                        <i class="icofont-circled-right"></i>
                                    </div>
                                    <ul className="submenu2 submenu2-1">
                                        <div className="playout-submenu2">
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Đồng hồ Nam
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ thời trang
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ thể thao
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ doanh nhân
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ bỏ túi
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ thông minh
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Đồng hồ Nữ
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ thời trang
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ doanh nhân
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ bỏ túi
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ thông minh
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Thương hiệu nổi bật
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tag Heuer
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Rolex
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tissot
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Michael Kors
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Movado
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Đồng hồ cho bé trai
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ Mickey Mouse
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ Disney
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ Pokemon
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ Marvel
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ Batman
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Đồng hồ cho bé gái
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ Minnie Mouse
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ Disney
                                                            Princess
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ Frozen
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ Elsa
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ Cinderella
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Phụ kiện đồng hồ
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Dây đồng hồ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Hộp lên dây đồng hồ
                                                            tự động
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Hộp đồng hồ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Pin
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Dụng cụ sửa chửa
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li>
                                    <div className="texticon">
                                        <i class="icofont-kid"></i>
                                        <Link to="/Filterproduct">
                                            {" "}
                                            Thời trang nữ
                                        </Link>
                                        <i class="icofont-circled-right"></i>
                                    </div>
                                    <ul className="submenu2 submenu2-2">
                                        <div className="playout-submenu2">
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Trang phục nữ
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Váy đầm
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Cardigan, Áo hoodie,
                                                            Áo len
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Quần Jean
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Bikini và khăn phủ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nội y, Đồ ngủ
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Giày dép nữ
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Giày cao gót
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Giày bốt
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Sandal - Giày lười
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Giày Sneaker
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Phụ kiện giày
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Túi ví nữ
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Túi xách
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Túi đeo chéo và túi
                                                            đeo vai
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Ví cầm tay
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Balo thời trang
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Túi Clutches
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Trang sức và phụ kiện
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồ gặm nướu an toàn
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Vòng cổ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nhẫn
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Set Trang Sức
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Charm
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Săn hàng Sale
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Quần áo thời trang
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Giày dép
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Trang sức
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Phụ kiện thời trang
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Mắt kính
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Thắt lưng
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Mũ (Nón)
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nhẫn thông minh
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Vòng tay cá tính
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li>
                                    <div className="texticon">
                                        <i class="icofont-boy"></i>
                                        <Link to="/Filterproduct">
                                            {" "}
                                            Thời trang nam
                                        </Link>
                                        <i class="icofont-circled-right"></i>
                                    </div>
                                    <ul className="submenu2 submenu2-3">
                                        <div className="playout-submenu2">
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Trang phục nam
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Áo sơ mi
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Áo thun
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Quần Jean
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Áo khoác thể thao
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồ lót
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Giày dép nam
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Sneaker
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Giày công sở
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Giày lười
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Giày bốt phủ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Dép &amp; sandal
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Túi ví nam
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Túi xách
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Ví nam
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Túi Đeo Chéo
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Vali phủ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Túi du lịch
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Săn hàng Sale
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Quần áo thời trang
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Giày dép
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Phụ kiện thời trang
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Mắt kính
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Thắt lưng
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Mũ (Nón)
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nhẫn thông minh phủ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Vòng tay cá tính
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li>
                                    <div className="texticon">
                                        <i class="icofont-holding-hands"></i>
                                        <Link to="/Filterproduct">
                                            {" "}
                                            Mẹ, bé và đồ chơi
                                        </Link>
                                        <i class="icofont-circled-right"></i>
                                    </div>
                                    <ul className="submenu2 submenu2-4">
                                        <div className="playout-submenu2">
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Đồ dùng dành cho trẻ sơ
                                                        sinh
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồ sơ sinh bé gái
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồ sơ sinh bé trai
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tắm và chăm sóc da
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tã, Bỉm
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Chăm sóc mẹ trước và sau
                                                        sinh
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Gối cho mẹ bầu
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Máy Nghe Nhịp Tim
                                                            Thai Nhi
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Thời trang bầu
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Máy hút sữa, Túi trữ
                                                            sữa
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tắm gội, chăm sóc da
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Xe đẩy và phụ kiện
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Xe đẩy chính hãng
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Phụ tùng thay thế
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Phụ kiện xe đẩy
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Đồ chơi cho bé
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồ gặm nướu an toàn
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồ chơi nhà tắm
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồ chơi lắp ráp
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Ghế nhún
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Lắp ghép, xếp hình
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Đồ ăn dặm và dụng cụ ăn
                                                        uống
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Sữa và Thức ăn dặm
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Núm vú và phụ kiện
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Bình sữa chính hãng
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Ghế cho ăn
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Máy pha sửa - làm đồ
                                                            ăn dặm
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Đồ dùng nhà trẻ
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Giường ngủ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Trang trí phòng
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nội thất
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Thiết bị giữ an toàn
                                                            cho bé
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li>
                                    <div className="texticon">
                                        <i class="icofont-star-alt-1"></i>
                                        <Link to="/Filterproduct">
                                            {" "}
                                            Làm đẹp
                                        </Link>
                                        <i class="icofont-circled-right"></i>
                                    </div>
                                    <ul className="submenu2 submenu2-5">
                                        <div className="playout-submenu2">
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Chăm sóc tóc
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Chăm sóc tóc chuyên
                                                            sâu
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Dầu gội - Dầu xả
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Sản phẩm tạo kiểu
                                                            tóc
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Sản phẩm chống rụng
                                                            tóc
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Sản phẩm nhuộm tóc
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Chăm sóc da
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Dành cho da mặt
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Quanh vùng mắt
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Chăm sóc môi
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Chống nắng &amp;
                                                            dưỡng da
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Trang điểm
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Mặt
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Mắt
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Môi
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Bộ trang điểm
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tẩy trang
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Dụng cụ và phụ kiện
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Cọ và dụng cụ trang
                                                            điểm
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Dụng cụ tạo kiểu tóc
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Thiết bị Salon và
                                                            Spa
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Dụng cụ làm móng
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Phụ kiện tắm và nhà
                                                            tắm
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Chăm sóc cá nhân
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Chăm sóc răng miệng
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Khử mùi
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Sản phẩm Tatoo
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Máy chăm sóc da đa
                                                            năng
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Tăm và chăm sóc cơ thể
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Dụng cụ tắm &amp;
                                                            chăm sóc cơ thể
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tinh dầu &amp;
                                                            massage
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Xà bông &amp; Sữa
                                                            tắm
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tẩy tế bào chết
                                                            &amp; trị liệu
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Set quà tặng &amp;
                                                            khuyến mãi
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li>
                                    <div className="texticon">
                                        <i class="icofont-water-bottle"></i>
                                        <Link to="/Filterproduct">
                                            {" "}
                                            Thế giới nước hoa
                                        </Link>
                                        <i class="icofont-circled-right"></i>
                                    </div>
                                    <ul className="submenu2 submenu2-6">
                                        <div className="playout-submenu2">
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Nước hoa nữ
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nước hoa toàn thân
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nước hoa Fraiche
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nước hoa Parfum
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nước hoa Toilette
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tinh dầu thơm
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Nước hoa nam
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nước hoa toàn thân
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nước hoa Fraiche
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nước hoa Parfum
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nước hoa Toilette
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tinh dầu thơm
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Nước hoa trẻ em
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tự nhiên
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Không chứa cồn
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Bộ sản phẩm
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Bộ sản phẩm nước hoa
                                                            nam
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Bộ sản phẩm nước hoa
                                                            nữ
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Đặc biệt
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nến thơm, sáp thơm
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đèn khuếch tán tinh
                                                            dầu
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li>
                                    <div className="texticon">
                                        <i class="icofont-game-controller"></i>
                                        <Link to="/Filterproduct">
                                            {" "}
                                            Đồ chơi và game
                                        </Link>
                                        <i class="icofont-circled-right"></i>
                                    </div>
                                    <ul className="submenu2 submenu2-7">
                                        <div className="playout-submenu2">
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Đồ chơi mô hình
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồ chơi xây dựng
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Mô hình lắp ráp
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Mô hình nhân vật
                                                            sinh động
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Búp bê và thú nhồi
                                                            bông
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Trò chơi vận động ngoài
                                                        trời
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Nhà bóng chính hãng
                                                            giá tốt
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Bể bơi ngoài trời
                                                            chính hãng
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đất sét, bột nhào
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Tung hứng
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Trò chơi khám phá tự
                                                            nhiên
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Đồ Chơi Học Tập
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồ chơi khoa học
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồ chơi toán học và
                                                            tập đếm
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồ chơi sử dụng năng
                                                            lượng mặt trời
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồ chơi đọc và viết
                                                            cho trẻ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồ chơi học nhạc cụ
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Games
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Trò chơi trên bảng
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Trò chơi thẻ bài
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đĩa game DVD
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Trò chơi trong nhà
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Máy chơi game cầm
                                                            tay
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Xe và đồ chơi điều khiển
                                                        từ xa
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Xe mô hình Die-Cast
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Xe mô hình điều
                                                            khiển từ xa
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Bộ xe lửa và đường
                                                            ray
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Bộ xe mô hình
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Trò chơi điện tử
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Playstation 4
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            PlayStation 3
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Xbox One
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Xbox 360
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li>
                                    <div className="texticon">
                                        <i class="icofont-steering"></i>
                                        <Link to="/Filterproduct">
                                            {" "}
                                            Phù tùng,phụ kiện xe hơi
                                        </Link>
                                        <i class="icofont-circled-right"></i>
                                    </div>
                                    <ul className="submenu2 submenu2-8">
                                        <div className="playout-submenu2">
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Chăm sóc - bảo dưỡng ô
                                                        tô
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Dụng cụ về sinh xe
                                                            hơi
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Chăm sóc ngoại thất
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Chăm sóc nội thất
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Chăm sóc kinh ô tô
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Phụ kiện ngoại thất
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Chống va đập &amp;
                                                            Trầy xước
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Thiết bị bảo vệ an
                                                            toàn
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            phụ kiện bảo vệ ô tô
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            phụ kiện gương xe ô
                                                            tô
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Bạt phủ xe ô tô
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Phụ kiện nội thất
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Lọc gió - khử mùi
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Chống trộm cho ô tô
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Ghế ngồi &amp; Bọc
                                                            ghế
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồng hồ đo
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Vô lăng
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Phụ kiện thay thế
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Ắc quy &amp; Phụ
                                                            kiện
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Hệ thống phanh &amp;
                                                            Và phụ kiện
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Làm mát động cơ
                                                            &amp; và điều hòa
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Hệ thống đèn &amp;
                                                            Điện
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Bộ lọc gió
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Điện tử ô tô
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Âm thanh xe hơi
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Điều hướng GPS
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            An toàn xe hơi &amp;
                                                            An ninh
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Phụ kiện lắp
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Thiết bị chiếu sáng
                                                        &amp; Phụ kiện
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đèn trang trí cho ô
                                                            tô
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đèn chiếu sáng cho ô
                                                            tô
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Miếng bảo vệ chóa
                                                            đèn
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Phụ kiện lắp đặt đèn
                                                            xe
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đèn báo hiệu
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li>
                                    <div className="texticon">
                                        <i class="icofont-travelling"></i>
                                        <Link to="/Filterproduct">
                                            Thể thao,du lịch và dã ngoại
                                        </Link>
                                        <i class="icofont-circled-right"></i>
                                    </div>
                                    <ul className="submenu2 submenu2-9">
                                        <div className="playout-submenu2">
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Trang phụ thể thao
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Quần áo thể thao nữ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Quần áo thể thao nam
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Quần áo thể thao bé
                                                            gái
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Quần áo thể thao bé
                                                            trai
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Phụ kiện thể thao
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Giày thể thao nam
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Giày thể thao nữ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Túi thể thao
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Yoga, thể hình
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Thảm tạp Yoga
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Dụng cụ tập Yoga
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Dụng cụ tập Gym
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Thiết bị tập thông
                                                            minh
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Đồ dùng dã ngoại
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Túi ngủ cấm trại
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Đồ dụng leo núi, dã
                                                            ngoại
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Phương tiện hỗ trợ
                                                            đi dã ngoại
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Phụ kiện cho phượt
                                                            thủ
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Golf
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Trang phục chơi Golf
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Phụ kiện chơi Golf
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Gậy và bộ gậy Golf
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Thiết bị tập chơi
                                                            Golf
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <ul className="style-submenu2">
                                                    <Link
                                                        className="submenu-title"
                                                        to="/Filterproduct"
                                                    >
                                                        Thể thao đặt biệt
                                                    </Link>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Câu cá
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Bóng rổ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Quần vợt
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Bơi lội
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/Filterproduct">
                                                            Võ thuật
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="line-underline">
                            <Link className="line-text" to="/Bachhoamy">
                                BÁCH HÓA MỸ
                            </Link>
                        </li>
                        <li className="line-underline">
                            <Link className="line-text" to="/Megavita">
                                2T MALL
                            </Link>
                        </li>
                        <li className="line-underline">
                            <Link className="line-text" to="/Codesales">
                                MÃ GIẢM GIÁ
                            </Link>
                        </li>
                        <li className="line-underline">
                            <Link className="line-text" to="/Assistant">
                                TRỢ LÝ MUA SẮM
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;
