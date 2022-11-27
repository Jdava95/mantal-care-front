import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { Button } from "@core/styles/button";
import { Input } from "@core/styles/Input";
import { auth } from "@src/controller";

import { RECORD_PAGE_PATH } from "@main/routing/mainConstants";
import {
    ActionColumn,
    BottomText,
    RegistrationTitle,
} from "@registr/styles/registrationStyles";

const RegistrationForm = () => {
    const history = useHistory();

    const login = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const { user } = await signInWithPopup(auth, provider);
            if (user) {
                history.push(RECORD_PAGE_PATH);
            }
        } catch (e) {
            alert("error");
        }
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
