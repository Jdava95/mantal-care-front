import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect, Route, Switch } from "react-router-dom";

import AppLoader from "@core/components/AppLoader";
import {
    PRIVATE_CORE_ROUTES,
    PUBLIC_CORE_ROUTES,
} from "@core/routing/coreRoutes";
import { REGISTRATION_PATH } from "@core/routing/routingConstants";
import { auth } from "@src/controller";

import { RECORD_PAGE_PATH } from "@main/routing/mainConstants";

const AppRouting = () => {
    const [user, loader] = useAuthState(auth);

    if (loader) return <AppLoader />;

    return (
        <>
            {user ? (
                <Switch>
                    {PRIVATE_CORE_ROUTES.map((route) => (
                        <Route key={route.path as string} {...route} />
                    ))}
                    <Redirect to={{ pathname: RECORD_PAGE_PATH }} />
                </Switch>
            ) : (
                <Switch>
                    {PUBLIC_CORE_ROUTES.map((route) => (
                        <Route key={route.path as string} {...route} />
                    ))}
                    <Redirect to={{ pathname: REGISTRATION_PATH }} />
                </Switch>
            )}
        </>
    );
};

export default AppRouting;
