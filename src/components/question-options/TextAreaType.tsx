import React from "react";
import { IQuestionOptionProps } from "../../constants";
 
const TextAreaType: React.FunctionComponent<IQuestionOptionProps> = (props) => {
    return (
        <textarea rows={4} cols={40}  value={props.value} onChange={e => props.onChange(0, e.target.value)}></textarea>
    );
}
 
export default TextAreaType;