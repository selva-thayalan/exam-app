import React from "react"
import { IQuestionOptionProps } from "../../constants";
 
const RadioType: React.FunctionComponent<IQuestionOptionProps> = (props) => {
    const isChecked = (option: string) : boolean => {
        return option == props.value[0];//As it's an radio type input component the value can be single option only. 
    }
    return (
        <div>
            {props.options.map(option => 
                <label key={option.optionid}><input type="radio" checked={isChecked(option.optionvalue)} name={props.uId} value={option.optionvalue} onChange={e => props.onChange(0, e.target.value)}/> {option.optionvalue}</label>)}
        </div>
    );
}
 
export default RadioType;