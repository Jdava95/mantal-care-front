import styled, { css } from "styled-components";

import { colors } from "@core/constants/constants";

export const RecordPageWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const RecordWrapperInner = styled.div<{ $active: boolean }>`
    width: 100%;
    height: ${({ $active }) => ($active ? "calc(100% - 85px)" : "100%")};

    padding: 10px 20px;

    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const QuestionCardWrapper = styled.div`
    width: 100%;
    height: 165px;

    background: #ffffff;
    border-radius: 20px;
    margin-bottom: 10px;
`;

export const QuestionCardWrapperInner = styled.div<{ $active: boolean }>`
    padding: 25px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 0;
    border-right: 7px solid transparent;

    position: relative;

    ${({ $active }) => {
        return (
            $active &&
            css`
                border-right: 7px solid #63bce9;
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
            `
        );
    }}
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
    cursor: pointer;

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

export const RecordNote = styled.textarea`
    width: 100%;
    min-height: 300px;
    border-radius: 20px;
    border: none;
    resize: none;
    padding: 15px;

    font-weight: 500;
    font-size: 18px;
    color: #333333;
    outline: none;
`;

export const RecordSaveButtonWrapper = styled.div<{ $active: boolean }>`
    padding: 20px;
    height: 85px;
    width: 100%;
    z-index: 10;
    background-color: #ffffff;
    display: ${({ $active }) => ($active ? "flex" : "none")};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    outline: 1px solid #d9d9d9;
`;

export const RecordSaveButton = styled.button`
    width: 100%;
    height: 45px;
    color: #ffffff;
    font-weight: 600;
    font-size: 18px;
    border-radius: 7px;
    border: none;
    background-color: ${colors.blue};
    cursor: pointer;
`;
