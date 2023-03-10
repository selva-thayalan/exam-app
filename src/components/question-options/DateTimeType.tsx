import React from "react"
import { IQuestionOptionProps } from "../../constants";
 
const DateTimeType: React.FunctionComponent<IQuestionOptionProps> = (props) => {
    return (
        <input className="m_auto" type="datetime-local" value={props.value} onChange={e => props.onChange?.(0, e.target.value)} />
    );
}
 
export default DateTimeType;