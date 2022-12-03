import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { Button } from "@core/styles/button";
import { Input } from "@core/styles/Input";
import { auth, createNewUser } from "@src/controller";

import { getUserData } from "@main/api/userApi";
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
        const { user } = await signInWithPopup(auth, provider);
        if (user?.email) {
            const userData = await getUserData(user?.email);
            const isNotActive = Object.entries(userData).length === 0;

            isNotActive && (await createNewUser(user));

            history.push(RECORD_PAGE_PATH);
        } else {
            alert("Missing email");
        }
    };
    return (
        <>
            <div>
                <RegistrationTitle>Welcome! 👋🏻</RegistrationTitle>
                <ActionColumn>
                    <Input placeholder="Email" />
                    <Button onClick={() => void login()}>Вход</Button>
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
