import React, { FC } from "react";
import { useHistory, useLocation } from "react-router-dom";

import {
    NavigationItem,
    NavigationItemImage,
    NavigationItemTitle,
} from "@main/styles/navigationBottomBar";

interface NaviItemType {
    name: string;
    path: string;
    icon: React.ReactNode;
}

const NaviItem: FC<NaviItemType> = ({ name, path, icon }) => {
    const history = useHistory();
    const { pathname } = useLocation();

    const clickHandler = () => history.push(path);

    const activeElement = pathname === path;

    return (
        <NavigationItem onClick={clickHandler}>
            <NavigationItemImage $active={activeElement}>
                {icon}
            </NavigationItemImage>
            <NavigationItemTitle $active={activeElement}>
                {name}
            </NavigationItemTitle>
        </NavigationItem>
    );
};

export default NaviItem;
