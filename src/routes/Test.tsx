import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PortableButton from "../components/PortableButton";
import ResultsContext from "../contexts/Results";
import { IAnswer, ITestQuestion, getQuestion } from "../constants";
import QuestionCard from "../components/QuestionCard";

interface TestRouteProps {
    
}
 
const TestRoute: React.FunctionComponent<TestRouteProps> = () => {
    const context = useContext(ResultsContext);
    const navigate = useNavigate();
    const testQuestion = getQuestion();

    const [qCounter, setQCounter] = useState<number>(0);
    const [qTotal, setQTotal] = useState<number>(0);
    const [qAnswers, setAnswers] = useState<IAnswer[]>([{ values: [], questionid: 0}]);

    useEffect(() => {
        let len = testQuestion.questions.length;
        setQTotal(len);
    }, [])

    const onSubmitTest = () => {
        if(window.confirm("Please make sure your answers before submit!")){
            let testid = context.results.length;
            context.addResult({ name: "Jack", testid, answers: qAnswers });
            //Code to add the test result to context.
            navigate(`/results/${testid}`);
        }
    }

    const onPrevQuestionNavigation = () => {
        setQCounter(qCounter - 1);
    }

    const onNextQuestionNavigation = () => {
        let nextCount = qCounter + 1;
        if (qAnswers.length == nextCount)//Here we are adding the state with new IAnswer element if the result array is less than the next question index.
            setAnswers([...qAnswers, { values: [], questionid: nextCount }]);
        setQCounter(nextCount);
    }

    const onAnswerChange = (optIndex: number, value: string) => {
        qAnswers[qCounter].values[optIndex] = value;
        setAnswers([...qAnswers]);
    }

    return (
        <div className="f_size flex_cntr">
            <div className="main-cont t_align_c">
                <div className="test-header flex">
                    <p className="main-text">{testQuestion.title}</p>
                    <p className="sub-text">No of Questions: {testQuestion.questions.length}</p>
                </div>
                <div className="questions-cont">
                    {qTotal > qCounter ?
                        <QuestionCard model={testQuestion.questions[qCounter]} answer={qAnswers[qCounter]} onAnswerChange={onAnswerChange}/> :
                        <div>
                            <p>You have answered all the questions!</p>
                            <PortableButton btnText="Submit" onClick={onSubmitTest} />
                        </div>}
                </div>
                <div className="question-nav-cont">
                    {/* If the question counter is in starting index no need to show the prev button, as it will not contain any prev question to navigate. */}
                    {qCounter > 0 && <PortableButton customClass="f_l" btnText="Prev" onClick={onPrevQuestionNavigation} />}
                    {/* If the question counter is less than the total questions count then we can show next button for next question navigation. */}
                    {qCounter < qTotal && <PortableButton customClass="f_r" btnText="Next" onClick={onNextQuestionNavigation} />}
                </div>
            </div>
        </div>
    );
}
 
export default TestRoute;