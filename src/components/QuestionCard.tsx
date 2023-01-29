import React from "react";
import { IQuestion, IAnswer } from "../constants";

import RadioType from "./question-options/RadioType";
import TextAreaType from "./question-options/TextAreaType";
import DateTimeType from "./question-options/DateTimeType";
import CheckboxType from "./question-options/CheckboxType";


interface QuestionCardProps {
    model: IQuestion,
    answer: IAnswer,
    onAnswerChange: (optIndex: number, value: string) => void
}

const ComponentDict: any = {
    "Radio" : RadioType,
    "Textarea" : TextAreaType,
    "Date" : DateTimeType,
    "Checkbox" : CheckboxType
}
 
const QuestionCard: React.FunctionComponent<QuestionCardProps> = (props) => {
    let DynamicComp = ComponentDict[props.model.questiontype];
    return ( 
        <div className="q-card-cont">
            <div className="q-card-question">{props.model.question}</div>
            <div className="q-card-options">
                <DynamicComp options={props.model.questionoption} uId={props.model.questionid} value={props.answer.values} onChange={(props.onAnswerChange)}/>
            </div>
        </div>
     );
}
 
export default QuestionCard;