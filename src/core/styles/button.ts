import styled, { css } from "styled-components";

import { colors } from "@core/constants/constants";

enum ButtonColorEnum {
    PRIMARY = "PRIMARY",
    DEFAULT = "DEFAULT",
}

const ButtonColorDict: Record<ButtonColorEnum, string> = {
    [ButtonColorEnum.PRIMARY]: colors.blue,
    [ButtonColorEnum.DEFAULT]: colors.white,
};

interface ButtonType {
    $width?: number;
    $btype?: keyof typeof ButtonColorEnum;
}

export const Button = styled.button<ButtonType>`
    ${({ $btype }) => {
        if ($btype === ButtonColorEnum.PRIMARY) {
            return css`
                background-color: ${ButtonColorDict[$btype]};
                color: #ffffff;
            `;
        }

        if ($btype === ButtonColorEnum.DEFAULT) {
            return css`
                background-color: ${ButtonColorDict[$btype]};
                color: #000000;
            `;
        }

        if ($btype === undefined) {
            return css`
                background-color: ${ButtonColorDict.PRIMARY};
                color: #ffffff;
            `;
        }
    }}

    width: ${({ $width }) => ($width ? `${$width}px` : "100%")};
    height: 45px;
    font-weight: 600;
    font-size: 18px;
    border: none;
    border-radius: 7px;
    margin: 0;
    padding: 0;
`;
