import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PortableButton from "../components/PortableButton";
import ResultsContext from "../contexts/Results";

interface TestRouteProps {
    
}
 
const TestRoute: React.FunctionComponent<TestRouteProps> = () => {
    const context = useContext(ResultsContext);
    const navigate = useNavigate();

    const [qCounter, setQCounter] = useState<number>(0);
    const [qTotal, setQTotal] = useState<number>(0);

    const onSubmitTest = () => {
        let testid = context.results.length;
        //Code to add the test result to context.
        navigate(`/results/${testid}`);
    }

    const onPrevQuestionNavigation = () => {

    }

    const onNextQuestionNavigation = () => {

    }

    return (
        <div className="f_size">
            <div className="main-cont">
                <div className="questions-cont">
                    {qTotal > qCounter ?
                        <div></div> :
                        <PortableButton btnText="Submit" onClick={onSubmitTest} />}
                </div>
                <div className="question-nav-cont">
                    {/* If the question counter is in starting index no need to show the prev button, as it will not contain any prev question to navigate. */}
                    {qCounter > 0 && <PortableButton btnText="Prev" onClick={onPrevQuestionNavigation} />}
                    {/* If the question counter is less than or equal to the total questions count then we can show next button for next question navigation. */}
                    {qCounter <= qTotal && <PortableButton btnText="Next" onClick={onNextQuestionNavigation} />}
                </div>
            </div>
        </div>
    );
}
 
export default TestRoute;