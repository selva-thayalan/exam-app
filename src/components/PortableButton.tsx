import React from "react";

interface PortableButtonProps {
    btnText: string,
    onClick: () => void
}
 
const PortableButton: React.FunctionComponent<PortableButtonProps> = (props) => {
    return ( 
        <button onClick={props.onClick}>
            <span>{props.btnText}</span>
        </button>
     );
}
 
export default PortableButton;