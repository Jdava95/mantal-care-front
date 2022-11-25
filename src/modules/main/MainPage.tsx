import React from "react";

import HistoryPage from "@main/modules/history/HistoryPage";
import {
    MainContentStyled,
    MainWrapperStyled,
    NavigationBottomBar,
    NavigationTopBar,
} from "@main/styles/mainStyles";

const MainPage = () => {
    return (
        <MainWrapperStyled>
            <NavigationTopBar>top</NavigationTopBar>
            <MainContentStyled>
                <HistoryPage />
            </MainContentStyled>
            <NavigationBottomBar>bottom</NavigationBottomBar>
        </MainWrapperStyled>
    );
};

export default MainPage;
