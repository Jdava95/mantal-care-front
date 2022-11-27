import React, { Suspense } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect, Route, Switch } from "react-router-dom";

import {
    PRIVATE_CORE_ROUTES,
    PUBLIC_CORE_ROUTES,
} from "@core/routing/coreRoutes";
import { CORE_PATH } from "@core/routing/routingConstants";
import { auth } from "@src/controller";

const AppRouting = () => {
    const [user] = useAuthState(auth);

    return (
        <Suspense fallback={"...loading"}>
            {user ? (
                <Switch>
                    {PRIVATE_CORE_ROUTES.map((route) => (
                        <Route key={route.path as string} {...route} />
                    ))}
                    <Redirect to={CORE_PATH} />
                </Switch>
            ) : (
                <Switch>
                    {PUBLIC_CORE_ROUTES.map((route) => (
                        <Route key={route.path as string} {...route} />
                    ))}
                    <Redirect to={CORE_PATH} />
                </Switch>
            )}
        </Suspense>
    );
};

export default AppRouting;
