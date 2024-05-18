import React from "react";
import UserProfile from "./UserProfile";
import "./UserFillter.css";
import Editinfouser from "./Editinfouser";
import Example from "../Cart/modal";

const UserFillter = () => {
    return (
        <div className="profile-main">
            <div>
                {" "}
                <Editinfouser />
            </div>

            <ul class="nav nav-tabs container" role="tablist">
                <li class="nav-item">
                    <a
                        class="nav-link active"
                        data-bs-toggle="tab"
                        href="#home"
                    >
                        Tài khoản
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu1">
                        Sổ địa chỉ
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu2">
                        Tài khoản trả trước
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu3">
                        Quản lý mua hàng
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu4">
                        Mã giảm giá
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu5">
                        Sản phẩm yêu thích
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu6">
                        Đại sứ T&T
                    </a>
                </li>
            </ul>

            <div class="tab-content">
                <div id="home" class="container tab-pane active">
                    <br />
                    <div class="container btn-UserFillter mt-3">
                        <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="collapse"
                            data-bs-target="#demo"
                        >
                            Thông tin tài khoản
                        </button>
                        <div id="demo" class="collapse content-UserFillter">
                            <h2>Thông tin tài khoản</h2>
                            <hr />
                            <form
                                action=""
                                className="form-content-UserFillter"
                            >
                                <p>Họ tên</p>
                                <input type="text" name="" id="" />
                                <p>Số điện thoại</p>
                                <input type="text" name="" id="" />
                                <p>Email</p>
                                <input type="text" name="" id="" />
                                <p>Ngày sinh</p>
                                <input type="text" name="" id="" />
                                <div className="form-check-userfillter">
                                    <div class="radio-group">
                                        <input
                                            class="radio-input"
                                            name="radio-group"
                                            id="radio1"
                                            type="radio"
                                        />
                                        <label class="radio-label" for="radio1">
                                            <span class="radio-inner-circle"></span>
                                            Nam
                                        </label>

                                        <input
                                            class="radio-input"
                                            name="radio-group"
                                            id="radio2"
                                            type="radio"
                                        />
                                        <label class="radio-label" for="radio2">
                                            <span class="radio-inner-circle"></span>
                                            Nữ
                                        </label>
                                    </div>
                                </div>
                                <div className="btn-xac-nhan-reset">
                                    <button type="reset">Đặt lại</button>
                                    <button>Xác nhận</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="container btn-UserFillter mt-3">
                        <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="collapse"
                            data-bs-target="#demo1"
                        >
                            Thay đổi mật khẩu
                        </button>
                        <div id="demo1" class="collapse content-UserFillter">
                            <h2>Thay đổi Mật khẩu</h2>
                            <hr />
                            <form
                                action=""
                                className="form-content-UserFillter"
                            >
                                <p>Mật khẩu hiện tại</p>
                                <input type="text" name="" id="" />
                                <p>Mật khẩu mới</p>
                                <input type="text" name="" id="" />
                                <p>Nhập lại mặt khẩu mới</p>
                                <input type="text" name="" id="" />
                                <div className="btn-xac-nhan-reset">
                                    <button type="reset">Nhập lại</button>
                                    <button>Xác nhận</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="menu1" class="container tab-pane fade">
                    <br />
                    <h3>Sổ địa chỉ</h3>
                    <img src="https://st-fe-v2.fado.vn/desktop/image/character/empty-address-book.svg" alt="" />
                  <Example/>

                </div>
                <div id="menu2" class="container tab-pane fade1">
                    <br />
                    {/* <h3>Hiện chưa cập nhật!</h3> */}
                    <div></div>
                </div>
                <div id="menu3" class="container tab-pane fade">
                    <br />
                    {/* <h3>Hiện chưa cập nhật!</h3> */}
                    
                </div>{" "}
                <div id="menu4" class="container tab-pane fade">
                    <br />
                    {/* <h3>Hiện chưa cập nhật!</h3> */}
                    
                </div>{" "}
                <div id="menu5" class="container tab-pane fade">
                    <br />
                    {/* <h3>Hiện chưa cập nhật!</h3> */}
                    
                </div>{" "}
                <div id="menu6" class="container tab-pane fade">
                    <br />
                    {/* <h3>Hiện chưa cập nhật!</h3> */}
                    
                </div>
            </div>
            <div>{/* <UserProfile /> */}</div>
        </div>
    );
};
export default UserFillter;
