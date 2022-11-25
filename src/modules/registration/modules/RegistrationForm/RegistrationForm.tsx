import React from "react";
import { useHistory } from "react-router-dom";

import { CODE_FORM_PATH } from "@core/routing/routingConstants";
import { Button } from "@core/styles/button";
import { Input } from "@core/styles/Input";

import {
    ActionColumn,
    BottomText,
    RegistrationTitle,
} from "@registr/modules/RegistrationForm/styles/registrationStyles";

const RegistrationForm = () => {
    const history = useHistory();
    const onClick = () => history.push(CODE_FORM_PATH);

    return (
        <>
            <div>
                <RegistrationTitle>Welcome! 👋🏻</RegistrationTitle>
                <ActionColumn>
                    <Input placeholder="Email" />
                    <Button onClick={onClick}>Вход</Button>
                </ActionColumn>
            </div>

            <div>
                <BottomText>
                    Продолжая, вы соглашаетесь с положением основных документов
                    Mental Care. Это Условия предоставления услуг
                </BottomText>
            </div>
        </>
    );
};

export default RegistrationForm;
