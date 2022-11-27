import React from "react";
import { useHistory } from "react-router-dom";

import { WELCOME_PAGE_PATH } from "@core/routing/routingConstants";
import { Button } from "@core/styles/button";

import {
    CodeFormDescription,
    CodeFormLine,
    CodeFormStyled,
    CodeFormTitle,
    CodeInputStyled,
    FormRepeatCodeStyled,
    FormTopContentStyled,
} from "@registr/styles/codeFormStyles";

const CodeForm = () => {
    const history = useHistory();

    const clickHandler = () => history.replace(WELCOME_PAGE_PATH);

    return (
        <CodeFormStyled>
            <FormTopContentStyled>
                <CodeFormTitle>Код подтверждения</CodeFormTitle>
                <CodeFormDescription>
                    Мы отправили сообщение с кодом на почту pochta@pochta.me
                </CodeFormDescription>
                <CodeFormLine>
                    <CodeInputStyled maxLength={1} />
                    <CodeInputStyled maxLength={1} />
                    <CodeInputStyled maxLength={1} />
                    <CodeInputStyled maxLength={1} />
                </CodeFormLine>
                <Button $width={135} onClick={clickHandler}>
                    Далее
                </Button>
            </FormTopContentStyled>
            <FormRepeatCodeStyled>
                Отправить сообщение повторно
            </FormRepeatCodeStyled>
        </CodeFormStyled>
    );
};

export default CodeForm;
