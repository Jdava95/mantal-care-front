import { RecordType } from "@main/modules/record/utils/recordReducer";

export type QuestionOptions = {
    icon: string;
    text: string;
};

export interface QuestionCardType {
    id: RecordType;
    title: string;
    options: Array<QuestionOptions>;
}
