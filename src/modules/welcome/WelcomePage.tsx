import React from "react";
import { useHistory } from "react-router-dom";

import Logo from "@core/assets/icons/Logo.svg";
import { MAIN_PAGE_PATH } from "@core/routing/routingConstants";
import { Button } from "@core/styles/button";

import {
    WelcomeBlock,
    WelcomeDescription,
    WelcomeLogo,
    WelcomeTitle,
    WelcomeWrapper,
} from "./styles/welcomeStyles";

const WelcomePage = () => {
    const history = useHistory();

    const clickHandler = () => history.push(MAIN_PAGE_PATH);

    return (
        <WelcomeWrapper>
            <WelcomeBlock>
                <WelcomeLogo>
                    <Logo />
                </WelcomeLogo>
            </WelcomeBlock>

            <WelcomeBlock>
                <WelcomeTitle>Привет!</WelcomeTitle>
                <WelcomeDescription>
                    Мы очень рады, что ты с нами)
                </WelcomeDescription>
                <WelcomeDescription>Добро пожаловать!</WelcomeDescription>
            </WelcomeBlock>

            <WelcomeBlock>
                <Button $btype="DEFAULT" $width={160} onClick={clickHandler}>
                    Привет !
                </Button>
            </WelcomeBlock>
        </WelcomeWrapper>
    );
};

export default WelcomePage;
