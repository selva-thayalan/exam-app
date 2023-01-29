import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ResultsContext from "../contexts/Results";
import { ITestQuestion, ITestResult, getQuestion } from "../constants";
import QuestionCard from "../components/QuestionCard";

interface ResultRouteProps {
    
}
 
const ResultRoute: React.FunctionComponent<ResultRouteProps> = (props) => {
    const { resultid } = useParams();
    const context = useContext(ResultsContext);

    const tQuestion: ITestQuestion | undefined = getQuestion() || undefined;
    const tResult: ITestResult | any = context.getResult((resultid as unknown) as number);

    return ( 
        <div className="result-preview">
            {tQuestion.questions.map((que, i) => <QuestionCard key={que.questionid} model={que} answer={tResult.answers[i]}/>)}
        </div>
     );
}
 
export default ResultRoute;