import styled from "styled-components";

export const WelcomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #63bce9 0%, #b6f0fb 100%);
    display: flex;
    flex-direction: column;
    padding: 10% 50px 0;

    & > div {
        :nth-child(2) {
            margin-bottom: 30%;
        }
    }
`;

export const WelcomeTitle = styled.div`
    color: #ffffff;
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 48px;
`;

export const WelcomeDescription = styled.div`
    color: #ffffff;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 25px;
`;

export const WelcomeBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const WelcomeLogo = styled.div`
    svg {
        width: 107px;
        height: 50px;
    }
    margin-bottom: 130px;
`;
