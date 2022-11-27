import React from "react";

import { NavigationTopBar } from "@main/styles/navigationTopBar";

const MainTopBar = () => {
    const date = new Date().toLocaleDateString();
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    return (
        <NavigationTopBar>
            Сегодня / {date} / {hours}:{minutes}
        </NavigationTopBar>
    );
};

export default MainTopBar;
