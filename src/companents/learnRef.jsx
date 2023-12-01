import { useRef } from "react";
const LearnRef = () => {
    const inputRef = useRef(null);

    console.dir(inputRef, "ooooo");

    const handlyClick = () => {
       inputRef.current = "salom"
    };

    return (
        <div className='container' style={{ marginBlock: "70px" }}>
            <form action=''>
                <div className='form__item'>
                    <label htmlFor=''>Username:</label>
                    <input type='text' placeholder='username' ref={inputRef} />
                </div>
                <div className='form__item'>
                    <label htmlFor=''>Surname:</label>
                    <input type='text' placeholder='surname' />
                </div>
                <div className='form__item'>
                    <label htmlFor=''>Email:</label>
                    <input type='email' placeholder='email' />
                </div>


                <button onClick={handlyClick}>Click me</button>
            </form>
        </div>
    );
};

export default LearnRef;
