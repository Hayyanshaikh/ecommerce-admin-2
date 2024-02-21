import React, { useState } from "react";
import Input from "../common/Input.js";
import Profile from "../../images/users/user_1.webp";
import { NavLink } from "react-router-dom";
import * as Icons from "react-icons/tb";
import { menu } from "../../api/api.js";
const Sidebar = () => {
  // State for search input value
  const [value, setValue] = useState("");
  const [toggle, settoggle] = useState(false)
  // Handle search input change
  const handleChange = (e) => {
    setValue(e);
  };
  // menu animation
  const handleManu = (e) => {
    settoggle(e);
  }
  return (
    <div className="sidebar">
      {/* Admin User */}
      <div className="sidebar_profile">
        <figure className="profile_img">
          <img src={Profile} alt="" />
        </figure>
        <div className="profile_content">
          <h4 className="profile_name">Hayyan Shaikh</h4>
        </div>
      </div>
      {/* Search Input */}
      <Input
        className="sidebar_search"
        type="text"
        icon={<Icons.TbSearch color="#455771" />}
        placeholder="Search product..."
        onChange={handleChange}
        value={value}
      />
      {/* menu links */}
      <ul className="menu_main">
        {menu.map(function (menu, key) {
          return (
            <li key={key}>
              {
                !menu.subMenu ? (
                  <NavLink to={`${menu.url}`} className="menu_link" onClick={() => handleManu(key)}>
                    {menu.icon}
                    <span>{menu.name}</span>
                    {menu.subMenu ? <Icons.TbChevronDown /> : ""}
                  </NavLink>
                ):(

                  <div className="menu_link" onClick={() => handleManu(key)}>
                    {menu.icon}
                    <span>{menu.name}</span>
                    {menu.subMenu ? <Icons.TbChevronDown /> : ""}
                  </div>
                )
              }
              {menu.subMenu ? (
                <ul className={`sub_menu ${toggle === key ? "active" : ""}`}>
                  {menu.subMenu &&
                    menu.subMenu.map(function (subMenu, key) {
                      return (
                        <li key={key}>
                          <NavLink to={`${menu.url}${subMenu.url}`} className="menu_link">
                            {subMenu.icon}
                            <span>{subMenu.name}</span>
                          </NavLink>
                        </li>
                      );
                    })}
                </ul>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
