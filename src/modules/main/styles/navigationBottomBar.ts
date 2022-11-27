import styled, { css } from "styled-components";

export const NavigationBottomBar = styled.div`
    max-height: 70px;
    height: 100%;
    color: #000000;
    background-color: #ffffff;
    padding: 10px 28px;
    border-top: 1px solid #d9d9d9;
`;
export const NavigationRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const NavigationItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

export const NavigationItemTitle = styled.div<{ $active: boolean }>`
    color: #808080;
    font-weight: 400;
    font-size: 14px;
    ${({ $active }) => {
        return (
            $active &&
            css`
                color: #0a85c2;
            `
        );
    }}
`;

export const NavigationItemImage = styled.div<{ $active: boolean }>`
    font-size: 25px;

    svg {
        ${({ $active }) => {
            return (
                $active &&
                css`
                    path {
                        fill: #0a85c2 !important;
                    }
                `
            );
        }}
    }
`;
