import React from "react";
import { Route, Switch } from "react-router-dom";

import { REGISTRATION_ROUTING } from "@registr/routing/registrationRouting";
import { CardStyled } from "@registr/styles/cardStyles";

const BottomCard = () => {
    return (
        <CardStyled>
            <Switch>
                {REGISTRATION_ROUTING.map((route) => {
                    return <Route key={route.path as string} {...route} />;
                })}
            </Switch>
        </CardStyled>
    );
};

export default BottomCard;
