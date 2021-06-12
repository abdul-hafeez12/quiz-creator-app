import {useContext,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Choices from './Choices';
import {PageContext,QuizContext} from './Context';


export default function Addquestion() {



    const [intialstate,setinitailState]=useState([]);
    const {dispatch } = useContext(PageContext);
    const {dispatch2 } = useContext(QuizContext);

    const handleChange = value => () => 
    {
        dispatch2({type:'add2',value:intialstate})
         dispatch({type:'addchoice', value});
    }
    const goback = value => () => 
    {
         dispatch({type:'mainscreen', value});
    }
    const createquestion = value => () => 
    {
        
         dispatch({type:'mainscreen', value});
    }
    return (
        <div className="container my-4 w-50 border border-dark">
        <Form>
            <Form.Group controlId="question">
                <Form.Label><h1>Question</h1></Form.Label>
                <Form.Control as="textarea" rows={3}  placeholder="Add Question..." name="question_body" onChange={(e)=> {setinitailState({...intialstate, [e.target.name]: e.target.value})}}/>
            </Form.Group>

            <div className="row">
                <div className="col">

                    <Form.Label>Type</Form.Label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                            id="flexRadioDefault1" value="Single Choice" name="type" onChange={(e)=> {setinitailState({...intialstate, [e.target.name]: e.target.value})}} />
                        <label className="form-check-label" for="flexRadioDefault1">Single Choice</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                            id="flexRadioDefault2" value="Multiple Choice"  name="type" onChange={(e)=> {setinitailState({...intialstate, [e.target.name]: e.target.value})}}/>
                        <label className="form-check-label" for="flexRadioDefault2">Multiple Choice</label>
                    </div>
                </div>
                <div className="col">
                    <Form.Group controlId="points">
                        <Form.Label>Points</Form.Label>
                        <Form.Control type="text" name="points" onChange={(e)=> {setinitailState({...intialstate, [e.target.name]: e.target.value})}}/>
                    </Form.Group>
                </div>
            </div>

            <h3 className='text-center'>Choices</h3>
            <div className="container my-4 h-50 w-80  border border-dark">
            <Choices/>
                <div className="d-flex justify-content-center my-2">
                    <Button className='btn-primary' onClick={handleChange(2)}>Add Choice</Button>
                </div>
            </div>
            <div className="my-3 d-flex justify-content-end">
                <Button className="mx-2 btn-light" variant="outline-dark" onClick={goback(0)}> Cancel</Button>
                <Button className="btn-pramary mx-2 " onClick={createquestion(0)}>Create</Button>
            </div>
        </Form>

    </div>
    );
}