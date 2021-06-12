import React,{useState,useReducer,useEffect} from  'react'
import Card from  'react-bootstrap/Card';
import Addquestion from './Addquestion';
import Addchoice from './Addchoice';
import MainScreen from './MainScreen';
import {PageContext,QuizContext} from './Context'; 
function App() {
  const [wholeQuiz,setWholeQuiz]=useState({});
  const [questions,setQuestions]=useState([{}]);
  const [choices,setChoices]=useState([{}]);
  const [state, dispatch] = useReducer(reducer, 0);
  const [quizstate, dispatch2] = useReducer(reducer2, {});
  
  function reducer(state, action) {
    switch (action.type) {
      case "addquestion":{
          return action.value;
        }
       case "addchoice":
         {
          return action.value;
          }
          case "mainscreen":
         {
          return action.value;
          }
      default:
        throw new Error("invalid action");
    }
 }
  function reducer2(state, {type,value}) {
    switch (type) {
      case "add":{
        setWholeQuiz(value);
          return value;
        }
        case "add2":{
          setQuestions([...questions,value]);
          questions.pop();
         return value;
       }
       case "add3":{
        setChoices([...choices,value]);
        choices.pop();
       return value;
     }
     case "create":{
      setChoices([...choices,value]);
      choices.pop();
      questions.shift();
      choices.shift();
     return value;
   }
      default:
        throw new Error("invalid action");
    }
 }
   useEffect(() => {
  
    console.log(wholeQuiz);
    console.log(questions);
    console.log(choices);
    
  }, [wholeQuiz,questions,choices])
  return (
    <PageContext.Provider value={{state, dispatch }} >
    <QuizContext.Provider value={{quizstate, dispatch2}} >
    <Card>
   {(() => {
        switch (state) {
          case 0:
            return <MainScreen/>;
          case 1:
            return <Addquestion/>;
          case 2:
            return <Addchoice/>;
          default:
            return null;
        }
      })()} 
    </Card>
    </QuizContext.Provider>
    </PageContext.Provider>
  );
}

export default App;
