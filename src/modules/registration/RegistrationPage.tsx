import React from "react";

import BottomCard from "./components/BottomCard";
import { LogoTitle, RegistrationWrapper } from "./styles/registrationStyles";

const RegistrationPage = () => {
    return (
        <RegistrationWrapper>
            <LogoTitle>MENTAL CARE</LogoTitle>
            <BottomCard />
        </RegistrationWrapper>
    );
};

export default RegistrationPage;
