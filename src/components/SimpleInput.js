import {useRef, useState} from "react";

const SimpleInput = (props) => {
    const nameRef = useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const nameIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (!enteredName.trim().length) {
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);

        console.log(enteredName);
        setEnteredName('');
    }

    const inputClasses = 'form-control ' + (nameIsInvalid ? 'invalid' : '');

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={inputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    ref={nameRef}
                    type='text'
                    id='name'
                    value={enteredName}
                    onChange={nameChangeHandler}
                />
                {nameIsInvalid && <p className="error-text">Entered Name can't be empty!</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
