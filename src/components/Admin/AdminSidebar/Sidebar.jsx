import React from "react";
import "../AdiminCss/Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import logo from "../../../assets/imgs/logo2.png";

const Sidebar = () => {
    return (
        <div>
            <div class="Admin-sidebar">
                <div class="Admin-logo">
                    <img src={logo} alt="" />
                </div>
                <div class="Admin-nav">
                    <Link to="/Admin/AdminHome" class="nav-item active">
                        DASHBOARD
                    </Link>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="">
                                Quản lý
                            </Accordion.Header>
                            <Accordion.Body>
                                {" "}
                                <NavLink to="/Admin/AddProduct">
                                    <Button variant="outline-sanpham">
                                        Sản phẩm
                                    </Button>
                                </NavLink>
                                <NavLink to="/Admin/AdminUser">
                                    <Button variant="outline-user">
                                        Người dùng
                                    </Button>{" "}
                                </NavLink>
                                <NavLink to="/Admin/AdminDealhot">
                                    <Button variant="outline-dealhot">
                                        Dealhot
                                    </Button>{" "}
                                </NavLink>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
