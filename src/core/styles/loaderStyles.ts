import styled from "styled-components";

import { colors } from "@core/constants/constants";

export const Loader = styled.div`
    width: 100px;
    height: 100px;
    color: ${colors.blue};
    background: radial-gradient(circle at 60% 65%, currentColor 62%, #0000 65%)
            top left,
        radial-gradient(circle at 40% 65%, currentColor 62%, #0000 65%) top
            right,
        linear-gradient(to bottom left, currentColor 42%, #0000 43%) bottom left,
        linear-gradient(to bottom right, currentColor 42%, #0000 43%) bottom
            right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    position: relative;

    :after {
        content: "";
        position: absolute;
        inset: 0;
        background: inherit;
        opacity: 0.4;
        animation: pl3 1s infinite;
    }

    @keyframes pl3 {
        to {
            transform: scale(1.8);
            opacity: 0;
        }
    }
`;

export const LoaderWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
