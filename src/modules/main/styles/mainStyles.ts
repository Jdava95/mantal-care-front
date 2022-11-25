import styled from "styled-components";

export const MainWrapperStyled = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #e0f2fb;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const NavigationBottomBar = styled.div`
    max-height: 85px;
    height: 100%;
    color: #000000;
    background-color: #ffffff;
`;
export const MainContentStyled = styled.div`
    width: 100%;
    height: 100%;

    overflow-y: auto;
    padding: 10px 20px;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const NavigationTopBar = styled.div`
    max-height: 110px;
    height: 100%;
    color: #000000;
    background-color: #ffffff;
`;
