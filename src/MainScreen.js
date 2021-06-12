import {useContext,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Questions from './Questions';
import {PageContext,QuizContext} from './Context';
export default function MainScreen() {

    const [intialstate,setinitailState]=useState({});
    const {dispatch } = useContext(PageContext);
    const {dispatch2 } = useContext(QuizContext);

    // const settitle = (e) => 
    // {
    //     setinitailState({...intialstate, [e.target.name]: e.target.value});
    //     console.log(intialstate);
    // }
    const handleChange= value => () => 
    {
         dispatch2({type:'add',value:intialstate})
         dispatch({type:'addquestion', value});
    }
       
    return (
        <div className="container my-4 w-50 border border-dark">
        <h1 className='text-center'>Create Quiz</h1>
       <Form>
           <Form.Group controlId="quizTitle">
               <Form.Label>Quiz Title</Form.Label>
               <Form.Control type="text" value={intialstate.title} name="title" onChange={(e)=> {setinitailState({...intialstate, [e.target.name]: e.target.value})}} />
           </Form.Group>
           <Form.Group controlId="points">
               <Form.Label>Total Points</Form.Label>
               <Form.Control type="text" value={intialstate.points} name="points" onChange={(e)=> {setinitailState({...intialstate, [e.target.name]: e.target.value})}}/>
           </Form.Group>
           <div className="row">
               <div className="col">
                   <Form.Group controlId="timeAllowed">
                       <Form.Label>Time Allowed</Form.Label>
                       <Form.Control type="text" value={intialstate.time_allowed} name="time_allowed" onChange={(e)=> {setinitailState({...intialstate, [e.target.name]: e.target.value})}}/>
                   </Form.Group>
               </div>
               <div className="col">
                   <Form.Group controlId="points">
                       <Form.Label>Deadline</Form.Label>
                       <Form.Control type="date" value={intialstate.deadline} name="deadline" onChange={(e)=> {setinitailState({...intialstate, [e.target.name]: e.target.value})}} />
                   </Form.Group>
               </div>
           </div>
           <h3 className='text-center'>Questions</h3>
           <div className="container my-4 h-50 w-80  border border-dark ">
               <Questions/>
               <div className="my-4 d-flex justify-content-center">
                   <Button className='btn-primary' onClick={handleChange(1)}>Add Question</Button>
               </div>
           </div>
           <div className="my-3 d-flex justify-content-end">
               <Button className="mx-2 btn-light" variant="outline-dark"> Cancel</Button>
               <Button className="btn-pramary mx-2">Create Quize</Button>
           </div>
       </Form>
       </div>  
    )
}

