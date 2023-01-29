import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ITestResult, TTestResults } from './constants';
import HomeRoute from './routes/Home';
import TestRoute from './routes/Test';
import ResultsRoute from './routes/Results';
import ResultRoute from './routes/Result';
import ResultsContext from './contexts/Results';

interface ApplicationRouteProps {
    
}
 
interface ApplicationRouteState {
    testResults: TTestResults | []
}
 
class ApplicationRoute extends React.Component<ApplicationRouteProps, ApplicationRouteState> {
    state : ApplicationRouteState = { 
        testResults: []
    }

    addNewResult(result: ITestResult) : void {
        this.setState({testResults: [...this.state.testResults, result]});
    }
    getResultById(id: number): ITestResult | undefined {
        return this.state.testResults.find(result => result.testid == id);
    }

    render() { 
        return ( 
            <ResultsContext.Provider value={{ results: this.state.testResults, addResult: this.addNewResult.bind(this), getResult: this.getResultById.bind(this) }}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomeRoute />}></Route>
                        <Route path="/test/:testid" element={<TestRoute />}></Route>
                        <Route path="/results">
                            <Route path="" element={<ResultsRoute />}></Route>
                            <Route path=":resultid" element={<ResultRoute />}></Route>
                        </Route>
                    </Routes>
                </Router>
            </ResultsContext.Provider>
         );
    }
}
 
export default ApplicationRoute;