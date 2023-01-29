import React from "react";

interface PortableButtonProps {
    btnText: string,
    customClass?: string,
    onClick: () => void
}
 
const PortableButton: React.FunctionComponent<PortableButtonProps> = (props) => {
    return ( 
        <button className={`portable-btn ${props.customClass}`} onClick={props.onClick}>
            <span>{props.btnText}</span>
        </button>
     );
}
 
export default PortableButton;