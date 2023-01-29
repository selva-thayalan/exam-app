import React from "react";
import { useNavigate } from "react-router-dom";

import PortableButton from "../components/PortableButton";

interface HomeRouteProps {
    
}
 
const HomeRoute: React.FunctionComponent<HomeRouteProps> = () => {
    const navigate = useNavigate();
    const onTestStart = () : void => {
        navigate("/test/1")
    }
    return ( 
        <div className="f_size flex_cntr">
            <div className="t_align_c">
                <p>Hi, Welcome to the Exam App!</p>
                <PortableButton btnText="Start Test" onClick={onTestStart}/>
            </div>
        </div>
     );
}
 
export default HomeRoute;