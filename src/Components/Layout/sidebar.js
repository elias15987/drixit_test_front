import React, { useState } from "react";

import {Link} from 'react-router-dom';

import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

import { FaList } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import "react-pro-sidebar/dist/css/styles.css";
import "../../Content/Css/Sidebar.css";

const Sidenav = () => {
    const [menuCollapse, setMenuCollapse] = useState(true)
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    return (
        <div id="header">
            <ProSidebar collapsed={menuCollapse}>
                <SidebarHeader className="mb-3">
                    <div className="closemenu" onClick={menuIconClick}>
                        {menuCollapse ? (
                            <FiArrowRightCircle />
                        ) : (
                            <FiArrowLeftCircle />
                        )}
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem active={window.location.pathname === "/inicio/"} icon={<FiHome />}>
                            Inicio
                            <Link to="/Inicio" />
                        </MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu iconShape="square">
                        <MenuItem icon={<FiLogOut />}>
                            Cerrar sesión
                            <Link to="/Login" />    
                        </MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </div>
    );
}
export default Sidenav