import React from 'react'
import {useContext,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {PageContext,QuizContext} from './Context'; 

export default function Addchoice() {

    const [intialstate,setinitailState]=useState({});
    const {dispatch } = useContext(PageContext);
    const {dispatch2 } = useContext(QuizContext);

    const goback = value => () => 
    {
         dispatch({type:'addquestion', value});
    }
    const createchoice = value => () => 
    {
        dispatch2({type:'create',value:intialstate})
         dispatch({type:'addchoice', value});
    }
    const Addanother = value => () => 
    {
        document.getElementById("choices-form").reset();
        dispatch2({type:'add3',value:intialstate})
        dispatch({type:'addchoice', value});
    }
    return (
        <div className="container my-4 w-50 border border-dark">
        <Form id="choices-form">
            <Form.Group controlId="choice">
                <Form.Label><h1>Choice</h1></Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Add Choice..." name="choice_body" onChange={(e)=> {setinitailState({...intialstate, [e.target.name]: e.target.value})}}/>
            </Form.Group>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault" name="Iscorrect" onChange={(e)=> {setinitailState({...intialstate, [e.target.name]: e.target.checked})}}>Correct Option</label>
            </div>

            <div className="my-3 d-flex justify-content-end">
                <Button className="mx-2 btn-light" variant="outline-dark" onClick={goback(1)}> Cancel</Button>
                <Button className="btn-pramary mx-2 " onClick={Addanother(2)}>Add Another</Button>
                <Button className="btn-pramary mx-2 " onClick={createchoice(1)}>Save</Button>
            </div>
        </Form>

    </div>
    );
}