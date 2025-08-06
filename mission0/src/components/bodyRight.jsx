import '../styles/bodyRight.css';

function BodyRight(props) {
    if (props.width >= 600) {
        return(
                <div className='bodyRight'>
                    <div>
                    <img src='./placeholder.svg' alt='placeholder'
                        style={{width:'25%'}}/>
                    </div>
                    <form>
                        <input name="myInput"/>
                        <button className='myButton'>Search</button>
                    </form>
                </div>
        );
    }

    else {
        return(
                <div className='bodyRight'>
                    <form>
                        <input name="myInput"/>
                        <button className='myButton'>Search</button>
                    </form>
                </div>
        );
    }

}

export default BodyRight