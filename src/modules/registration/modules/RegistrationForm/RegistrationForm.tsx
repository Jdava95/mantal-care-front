import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { CODE_FORM_PATH } from "@core/routing/routingConstants";
import { Button } from "@core/styles/button";
import { Input } from "@core/styles/Input";
import { auth } from "@src/controller";

import {
    ActionColumn,
    BottomText,
    RegistrationTitle,
} from "@registr/modules/RegistrationForm/styles/registrationStyles";

const RegistrationForm = () => {
    const history = useHistory();
    const onClick = () => history.push(CODE_FORM_PATH);

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
    };
    return (
        <>
            <div>
                <RegistrationTitle>Welcome! 👋🏻</RegistrationTitle>
                <ActionColumn>
                    <Input placeholder="Email" />
                    <Button onClick={login}>Вход</Button>
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
