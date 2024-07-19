import "./sidebar.css";
import React from "react";
import {useHistory} from "react-router-dom"
import { HomeFilled, WalletFilled } from  '@ant-design/icons';
import { ShoppingFilled } from "@ant-design/icons";
import {ShoppingCartOutlined } from "@ant-design/icons"
import { LogoutOutlined } from "@ant-design/icons";
import { useEffect } from "react";


import { Link } from "react-router-dom";

// document.getElementsByClassName("SidebarIcon").click(function()
// {
//   document.getElementsByClassName('SideBarIcon').css("background-color","");
//   document.getElementsBy(this).css("background-color","black");
// });





const Sidebar=function Sidebar() {


  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/sell" className="link">
            <li className="sidebarListItem ">
               <HomeFilled  className="sidebarIcon" id="sidebarIcon1" />
              Dashboard
            </li>
            <br/>
            </Link>
            <Link to="/sell/products" className="link">
              <li className="sidebarListItem ">
              <ShoppingFilled className="sidebarIcon" />
                Products
              </li>
            </Link >
            <br/>

            <Link to="/sell/addproduct" className="link">
            <li className="sidebarListItem">
              <ShoppingCartOutlined  className="sidebarIcon" />
               Add Product
            </li>
            </Link>
           <br/>

            <Link to="/sell/addproduct" className="link">
            <li className="sidebarListItem">
            <WalletFilled  className="sidebarIcon" />
            Orders
            </li>
            </Link>
            <br/>

            <Link to="/sell/addproduct" className="link">
            <li className="sidebarListItem">
            <LogoutOutlined className="sidebarIcon" />
             Logout
            </li>
            </Link>


            
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/admin/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/sell/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link >
            <Link to="/sell/addproduct" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
               Add Product
            </li>
            </Link>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
