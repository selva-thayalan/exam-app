import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ITestResult } from './constants';
import HomeRoute from './routes/Home';
import TestRoute from './routes/Test';
import ResultsRoute from './routes/Results';
import ResultRoute from './routes/Result';

interface ApplicationRouteProps {
    
}
 
interface ApplicationRouteState {
    testResults: ITestResult | []
}
 
class ApplicationRoute extends React.Component<ApplicationRouteProps, ApplicationRouteState> {
    state : ApplicationRouteState = { 
        testResults: []
    }
    render() { 
        return ( 
            <Router>
                <Routes>
                    <Route path="/" element={<HomeRoute />}></Route>
                    <Route path="/test:testid" element={<TestRoute />}></Route>
                    <Route path="/results">
                        <Route path="" element={<ResultsRoute />}></Route>
                        <Route path=":testid" element={<ResultRoute />}></Route>
                    </Route>
                </Routes>
            </Router>
         );
    }
}
 
export default ApplicationRoute;