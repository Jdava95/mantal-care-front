import styled from "styled-components";

export const CodeFormLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-bottom: 40px;
`;

export const CodeFormTitle = styled.div`
    color: #333333;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    margin-bottom: 22px;
`;

export const CodeFormDescription = styled.div`
    color: #666666;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    margin-bottom: 15px;
`;

export const CodeInputStyled = styled.input`
    width: 45px;
    height: 45px;
    border: 1px solid #cccccc;
    border-radius: 7px;

    background-color: #f7f7f7;
    text-align: center;
    color: #333333;
    font-weight: 600;
    font-size: 20px;
`;

export const CodeFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const FormTopContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormRepeatCodeStyled = styled.div`
    text-align: center;
    font-size: 14px;
    color: #64bcea;
`;
