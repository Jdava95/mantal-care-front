import React from "react";
import { useLocation } from "react-router-dom";

import { REGISTRATION_PATH } from "@core/routing/routingConstants";

import CodeForm from "@registr/components/CodeForm/CodeForm";
import RegistrationForm from "@registr/components/RegistrationForm/RegistrationForm";
import { CardStyled } from "@registr/styles/cardStyles";

const BottomCard = () => {
    const location = useLocation();

    return (
        <CardStyled>
            {location.pathname === REGISTRATION_PATH ? (
                <RegistrationForm />
            ) : (
                <CodeForm />
            )}
        </CardStyled>
    );
};

export default BottomCard;
