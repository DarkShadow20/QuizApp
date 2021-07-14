import {quizDatabase} from '../database/database';
import {ActionType} from './quizContext.type';
import {quizReducer} from './quizReducer';
import {initialStates} from './quizContext';

describe('testing reducer',()=>{
    test('should initialize the database to quiz key in initialStates',()=>{
        //ARRANGE
        const action:ActionType={
            type:"LOAD_QUIZ",
            payload:[quizDatabase[0]]
        }
        //ACT
        const expectedAction=quizReducer(initialStates,action)
        //ASSERT
        expect(expectedAction.quiz).toEqual([quizDatabase[0]])
    });

    test('should increment the question number',()=>{
        //ARRANGE
        const action:ActionType={
            type:"INCREMENT_QUESTION_NUMBER"
        }
        //ACT
        const expectedAction=quizReducer(initialStates,action)
        //ASSERT
        expect(expectedAction.currentQuestionNumber).toEqual(0)
    });

    test('should update the score according to input',()=>{
        //ARRANGE
        const action:ActionType={
            type:"UPDATE_SCORE",
            payload:{points:2}
        }
        //ACT
        const expectedAction=quizReducer(initialStates,action)
        //ASSERT
        expect(expectedAction.score).toEqual(2)
    })
    test('should initialize the currentQuestionNumber and score to 0',()=>{
        //ARRANGE
        const action:ActionType={
            type:"INITIALIZE_QUESTION_NUMBER_AND_SCORE",
        }
        //ACT
        const expectedAction=quizReducer(initialStates,action)
        //ASSERT
       expect(expectedAction).toEqual(
           {
           ...initialStates,
           currentQuestionNumber:0,
           score:0
            }
        )
    })
    test('should update the result',()=>{
        const action:ActionType={
            type:"UPDATE_RESULT",
            payload:{
                id:'1',
                hasTaken:true,
                selectedOption:"1",
                correctOption:"2"
            }
        }
        const expectedAction=quizReducer(initialStates,action)
        expect(expectedAction).toEqual({
			...initialStates,
			result: {
				...initialStates.result,
				resultArray: [...initialStates.result.resultArray, action.payload],
			},
		});
    })
    test('should initialize the result array with current quiz',()=>{
        //ARRANGE
        const action: ActionType = {
			type: 'UPDATE_QUIZID',
			payload: '1',
		}
        //ACT
        const expectedAction=quizReducer(initialStates,action)
        //ASSERT
        expect(expectedAction).toEqual({
            ...initialStates,
            result:{
                ...initialStates.result,
                quizId:action.payload
            }
        })
    })
    test('load the current quiz data in the context',()=>{
        //ARRANGE
		const action: ActionType = {
			type: 'LOAD_CURRENT_QUIZ',
			payload: quizDatabase[0],
		};
		//ACT
        const expectedAction=quizReducer(initialStates,action)
        //ASSERT
        expect(expectedAction.currentQuiz).toEqual(
            quizDatabase[0]
        )
    })
    test.only('load current user score data in context',()=>{
        const action:ActionType={
            type:'LOAD_CURRENT_USER_SCORE_BOARD',
            payload:[{
                id:'1',
                quizId:quizDatabase[0],
                numberOfAttempts:1,
                score:2,
                userId:'1'
            }]
        };
        const expectedAction=quizReducer(initialStates,action)
        expect(expectedAction).toEqual({
            ...initialStates,
            currentUserScoreBoard:action.payload
        })
    })
})