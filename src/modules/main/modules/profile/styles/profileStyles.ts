import styled from "styled-components";

import { colors } from "@core/constants/constants";

export const ProfileWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ProfileLogOutButton = styled.button`
    border: none;
    width: 100px;
    height: 100px;
    background-color: ${colors.blue};
    border-radius: 50%;
    color: #ffffff;

    :hover,
    :active {
        box-shadow: 0 0 15px 20px rgba(99, 188, 233, 0.4);
    }
`;
