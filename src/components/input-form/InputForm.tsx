import React, { FormEvent, useRef } from "react";
import User from "../../model/User";
import "./InputForm.scss";

interface ISubmits {
    onSubmit: Function;
}

const InputForm: React.FC<ISubmits> = ({ onSubmit }) => {

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);

    console.log("Input form is created");

    function submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        var user = new User(nameRef.current!.value, parseInt(ageRef.current!.value));
        console.log(user);
        onSubmit(user);
    }

    return (
        <form onSubmit={submitHandler} className="form">
            <div className="control">
                <label>Enter your name</label>
                <input type='text' required ref={nameRef} />
            </div>
            <div className="control">
                <label>Enter your age</label>
                <input type='number' min='0' required ref={ageRef} />
            </div>
            <div className="action">
                <button>See your future GF</button>
            </div>
        </form>
    );
}

export default React.memo(InputForm);