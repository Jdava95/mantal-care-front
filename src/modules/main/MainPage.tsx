import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import MainBottomBar from "@main/components/MainBottomBar";
import MainTopBar from "@main/components/MainTopBar";
import { MAIN_CORE_ROUTES } from "@main/routing/mainRouting";
import { MainContentStyled, MainWrapperStyled } from "@main/styles/mainStyles";

const MainPage = () => {
    return (
        <MainWrapperStyled>
            <MainTopBar />
            <MainContentStyled>
                <Suspense fallback={"...loading"}>
                    <Switch>
                        {MAIN_CORE_ROUTES.map((route) => (
                            <Route key={route.path as string} {...route} />
                        ))}
                    </Switch>
                </Suspense>
            </MainContentStyled>
            <MainBottomBar />
        </MainWrapperStyled>
    );
};

export default MainPage;
