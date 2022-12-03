import React, { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Switch } from "react-router-dom";

import { auth } from "@src/controller";

import { getUserData } from "@main/api/userApi";
import MainBottomBar from "@main/components/MainBottomBar";
import MainTopBar from "@main/components/MainTopBar";
import { MAIN_CORE_ROUTES } from "@main/routing/mainRouting";
import { MainContentStyled, MainWrapperStyled } from "@main/styles/mainStyles";
import { UserData } from "@main/types/UserTypes";

const defaultContext = {
    answers: {},
    settings: {},
    info: {},
    loading: true,
};

export const UserContext = createContext(defaultContext);

const MainPage = () => {
    const [user, loading] = useAuthState(auth);
    const [state, setState] = useState<UserData>({} as UserData);

    useEffect(() => {
        void getUserMoods();
    }, []);

    const getUserMoods = async () => {
        const userData = await getUserData(user?.email || "");
        setState(userData);
    };

    return (
        <MainWrapperStyled>
            <UserContext.Provider
                value={{
                    answers: state.answers,
                    settings: state.settings,
                    info: state.info,
                    loading,
                }}
            >
                <MainTopBar />
                <MainContentStyled>
                    <Switch>
                        {MAIN_CORE_ROUTES.map((route) => (
                            <Route key={route.path as string} {...route} />
                        ))}
                    </Switch>
                </MainContentStyled>
                <MainBottomBar />
            </UserContext.Provider>
        </MainWrapperStyled>
    );
};

export default MainPage;
