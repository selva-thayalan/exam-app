import React from "react"
import { IQuestionOptionProps } from "../../constants";
 
const CheckboxType: React.FunctionComponent<IQuestionOptionProps> = (props) => {
    const isChecked = (optIndex: number): boolean => {
        return props.value[optIndex] == 'true';
    }
    return (
        <div>
            {props.options.map((option, index) =>
                <label key={option.optionid}><input type="checkbox" checked={isChecked(index)} name={props.uId} onChange={e => props.onChange(index, `${(!isChecked(index))}`)} /> {option.optionvalue}</label>)}
        </div>
    );
}
 
export default CheckboxType;