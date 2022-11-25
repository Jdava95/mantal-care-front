import styled, { css } from "styled-components";

export const QuestionCardWrapper = styled.div`
    width: 100%;
    height: 165px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: #ffffff;
    border-radius: 20px;
    margin-bottom: 10px;
`;

export const QuestionCardTitle = styled.div`
    text-align: center;
    font-size: 24px;
`;

export const QuestionCardEmojiRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const QuestionCardEmojiItem = styled.div<{ $active?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;

    p {
        color: #333333;
        font-size: 12px;
        text-align: center;
    }

    ${({ $active }) => {
        return (
            $active &&
            css`
                background: #cfecfa;
                outline: 1px solid #63bce9;
                border-radius: 7px;
            `
        );
    }}
`;

export const QuestionCardEmojiIcon = styled.div`
    font-size: 35px;
`;
