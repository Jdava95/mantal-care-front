import styled from "styled-components";

import { colors } from "@core/constants/constants";

export const RegistrationWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${colors.blue};
    display: flex;
    flex-direction: column;
    padding-top: 90px;
`;

export const LogoTitle = styled.div`
    color: #ffffff;
    font-size: 78px;
    text-align: center;
    flex: 1;
`;

export const RegistrationTitle = styled.div`
    font-size: 36px;
    text-align: center;
    margin-bottom: 35px;
`;

export const ActionColumn = styled.div`
    & > :first-child {
        margin-bottom: 30px;
    }
`;

export const BottomText = styled.div`
    text-align: center;
    color: #666666;
`;
