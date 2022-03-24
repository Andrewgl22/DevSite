import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {IconContext} from '../IconProvider';

const BioForm = ({type, stackType, imageKey, skillsArr,progressValue,setProgressValue}) => {

    const history = useHistory();

    const localUser = localStorage.getItem('loggedUser')
    const loggedUser1 = JSON.parse(localUser)

    const {bio} = useContext(IconContext)

    const [github, setGithub] = useState("")
    const [website, setWebsite] = useState("")


    const submitHandler = async (e) => {
        e.preventDefault()      
        try {
            console.log("Trying to update and ID is: " + loggedUser1._id)
            const result = await axios.put(`http://localhost:8000/api/update/${loggedUser1._id}`,{
                type,
                stackType, 
                skills:skillsArr, 
                imageKey, 
                bio, 
                github,
                website
        })
        
        console.log(result)

        //add imageKey into loggedUser browser object
        var existing = localStorage.getItem('loggedUser');
        existing = existing ? JSON.parse(existing) : {};
        existing['imageKey'] = imageKey;
        existing['type'] = type;
        localStorage.setItem('loggedUser', JSON.stringify(existing));

        function next(){
            history.push('/dashboard')
        }
        setTimeout(next, 4000)

            } catch {
                console.log('not working')
            }
    }

    const siteChange = (val) => {
        setGithub(val);
        setProgressValue(progressValue + 3);
    }

    const webChange = (val) => {
        setWebsite(val);
        setProgressValue(progressValue + 3);
    }

    return(
        <div className="form-box">
        <h3>Add links to your work</h3>
                <label>Github: </label>
                <input type="text" onChange={(e)=>siteChange(e.target.value)}></input><br></br>
                <label>Personal Site: </label>
                <input type="text" onChange={(e)=>webChange(e.target.value)}></input><br></br>
        <Button onClick={submitHandler}>Submit</Button>
        </div>
    )
}

export default BioForm;
