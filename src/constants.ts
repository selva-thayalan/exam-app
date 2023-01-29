export interface IQuestionOption{
    optionid: number,
    optionvalue: string,
    price: number,
    optionaction: string,
    selected: boolean,
    subquestion: [] | null
}

export interface IQuestion{
    questionid: number,
    question: string,
    questiontype: string,
    attributetype: number,
    validation: boolean,
    questionoption: IQuestionOption[]
}

export interface ITestQuestion {
    title: string,
    id: number,
    questions: IQuestion[]
}

export type TTestQuestionList = ITestQuestion[]


//Answer types used to store the answers separately from the questions so that we can minimize the size of the answer object without the question.
export type TAnswer = string[]

export type TAnswers = TAnswer[]

export interface ITestResult{
    name: string,//Name of the candidate.
    testid: number,//Id of the particular 'TestQuestion'. Because later we can extend to have multiple test with multiple tests. So each test result will contain all the necessary details.
    answers: TAnswers//Answers for each questions done by the user for an particular test.
}

export type TTestResults = ITestResult[] //The test can be taken by any number of candidates so we can see all the results as test host in a protected page in the future.

export function getQuestion() : ITestQuestion {
    //This method can be replaced with an API to get question based on the test in the future.
    return {
        "title": "Mock Test",
        "id": 1,//This and above properties were introduced by myself to extend the functionality.
        "questions": [{
            "questionid": 1,
            "question": "Select your data",
            "questiontype": "Radio",
            "attributetype": 2,
            "validation": true,
            "questionoption": [{
                "optionid": 1,
                "optionvalue": "A",
                "price": 1800,
                "optionaction": "",
                "selected": false,
                "subquestion": []
            }, {
                "optionid": 2,
                "optionvalue": "B",
                "price": 2000,
                "optionaction": "",
                "selected": false,
                "subquestion": []
            }, {
                "optionid": 3,
                "optionvalue": "C",
                "price": 0,
                "optionaction": "",
                "selected": false,
                "subquestion": []
            }]
        }, {
            "questionid": 2,
            "question": "Do you want a bike",
            "questiontype": "Radio",
            "attributetype": 2,
            "validation": false,
            "questionoption": [{
                "optionid": 14,
                "optionvalue": "Yes",
                "price": 2000,
                "optionaction": "",
                "selected": false,
                "subquestion": []
            }, {
                "optionid": 15,
                "optionvalue": "No",
                "price": 0,
                "optionaction": "",
                "selected": false,
                "subquestion": []
            }]
        }, {
            "questionid": 3,
            "question": "Date & Time Slot",
            "questiontype": "Date",
            "attributetype": 4,
            "validation": false,
            "questionoption": [{
                "optionid": 16,
                "optionvalue": "",
                "price": 0,
                "optionaction": "",
                "selected": false,
                "subquestion": null
            }]
        }, {
            "questionid": 4,
            "question": "package selection test",
            "questiontype": "Radio",
            "attributetype": 3,
            "validation": false,
            "questionoption": [{
                "optionid": 36,
                "optionvalue": "a",
                "price": 0,
                "optionaction": "",
                "selected": false,
                "subquestion": []
            }, {
                "optionid": 37,
                "optionvalue": "b",
                "price": 0,
                "optionaction": "",
                "selected": false,
                "subquestion": []
            }, {
                "optionid": 38,
                "optionvalue": "c",
                "price": 0,
                "optionaction": "",
                "selected": false,
                "subquestion": []
            }]
        }, {
            "questionid": 6,
            "question": "Enter Your exprience details",
            "questiontype": "Textarea",
            "attributetype": 2,
            "validation": false,
            "questionoption": [{
                "optionid": 39,
                "optionvalue": "",
                "price": 0,
                "optionaction": "",
                "selected": false,
                "subquestion": []
            }]
        }, {
            "questionid": 7,
            "question": "testing check box",
            "questiontype": "Checkbox",
            "attributetype": 1,
            "validation": false,
            "questionoption": [{
                "optionid": 41,
                "optionvalue": "A",
                "price": 0,
                "optionaction": "",
                "selected": false,
                "subquestion": []
            }, {
                "optionid": 42,
                "optionvalue": "B",
                "price": 0,
                "optionaction": "",
                "selected": false,
                "subquestion": []
            }, {
                "optionid": 43,
                "optionvalue": "C",
                "price": 0,
                "optionaction": "",
                "selected": false,
                "subquestion": []
            }]
        }]
    }
}