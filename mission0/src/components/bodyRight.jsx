import '../styles/bodyRight.css';

function BodyRight(props) {
    if (props.width >= 600) {
        return(
                <div className='bodyRight'>
                    <div>
                    <img src='./placeholder.svg' alt='placeholder'
                        style={{width:'25%'}}/>
                    </div>
                    <div>
                        <input name="myInput"/>
                        <button className='myButton'>Search</button>
                    </div>
                </div>
        );
    }

    else {
        return(
                <div className='bodyRight'>
                    <div className='form'>
                        <input name="myInput"/>
                        <button className='myButton'>Search</button>
                    </div>
                </div>
        );
    }

}

export default BodyRight