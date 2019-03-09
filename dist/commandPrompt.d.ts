import { IQuestion, IBaseQuestion } from './interface/promptItem.interface';
export declare function startPrompt(question: IBaseQuestion): Promise<void>;
export declare function prompt(question: IQuestion): Promise<{
    value: string;
}>;
export declare function promptItemAdapter(basePrompt: IBaseQuestion): IQuestion;
export declare function selectChoice(question: IQuestion): Promise<void>;
