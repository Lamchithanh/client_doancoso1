import React from "react";
import UserProfile from "./UserProfile";
import "./UserFillter.css";

const UserFillter = () => {
    return (
        <div className="profile-main">
            <div>
                <UserProfile />
            </div>
            <div className="profile-content-right">
                <div className="profile-content-right-title">
                    <h1 className="title">Thông tin tài khoản</h1>
                </div>
                <div className="profile-content-right-main">
                    <div className="title-fill">
                        <span className="title-fill-name">Họ và tên</span>
                        <input
                            className="input-fill"
                            type="text"
                            placeholder="VD :NGUYỄN VĂN A"
                        />
                    </div>
                    <div className="title-fill">
                        <span className="title-fill-name">Điện thoại</span>
                        <input
                            className="input-fill"
                            type="text"
                            placeholder="VD : 0991988977"
                        />
                    </div>
                    <div className="title-fill">
                        <span className="title-fill-name">Email</span>
                        <input
                            className="input-fill"
                            type="text"
                            placeholder="VD :nguyenvana2003@gmail.com"
                        />
                    </div>
                    <div className="title-fill">
                        <span className="title-fill-name">Ngày sinh</span>
                        <input
                            className="input-fill"
                            type="text"
                            placeholder="VD : 16-9-2003"
                        />
                    </div>
                    <div className="title-fill">
                        <span className="title-fill-name">Giới tính</span>
                        <div className="gender">
                            <input type="checkbox" className="checkbox" />
                            <span className="checkbox-name">Nam</span>
                        </div>
                        <div className="gender">
                            <input type="checkbox" className="checkbox" />
                            <span className="checkbox-name">Nữ</span>
                        </div>
                    </div>
                    <div className="title-fill-submit">
                        <button type="submit" className="change">
                            Nhập lại
                        </button>
                        <button type="submit" className="confirm">
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserFillter;
