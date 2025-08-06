import '../styles/nav.css'
import Box from './box.jsx';

function Nav(props) {
    if (props.width >= 600) {
        return (
            <div className='nav'>
                <Box word= "Word"/>
                <Box word= "Word"/>
                <Box word= "Word"/>
                <div className='logIn'>
                    <span style={{ whiteSpace: 'nowrap' }}>Log In</span>
                </div>  
            </div>
        );
    }
    else {
        return (
            <img src='.././burger.svg' alt='burger' style={{width:'5%'}}/>
        );
    }
}

export default Nav