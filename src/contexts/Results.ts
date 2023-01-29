import React from "react";
import { ITestResult, TTestResults } from "../constants";

type TResultsContext = {
    results: TTestResults,//List of test results
    addResult: (result: ITestResult) => void,//To add a result to the results array.
    getResult: (testid: number) => (ITestResult | undefined)//To get a single test result using the test id.
}

const ResultsContext = React.createContext<TResultsContext>({
    results: [],
    addResult: () => {},
    getResult: (testid: number) => { return undefined }
})

export default ResultsContext;