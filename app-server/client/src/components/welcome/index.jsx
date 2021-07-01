
import {Form,Button} from 'react-bootstrap';

const welcome = (props)=>{
    return(
        <>
            <h1>welcome</h1>
            <Button onClick={()=>{props.logout()}} >Logout</Button>
        </>
    )
}

export default welcome