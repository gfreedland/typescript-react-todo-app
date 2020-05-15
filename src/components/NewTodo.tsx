import React, { 
    useRef
    // useEffect 
} from 'react';

import './NewTodo.css';

type NewTodoProps = {
    sendText: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
    // useEffect();
    const textInputRef = useRef<HTMLInputElement>(null);

    const onSumbitHandler = (event: React.FormEvent) => {
        const { sendText } = props;
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        // console.log(enteredText);
        sendText(enteredText);
    };

    return (
        <form onSubmit={onSumbitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
};

export default NewTodo