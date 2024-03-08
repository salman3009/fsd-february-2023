import { useReducer } from "react";

function UseReducer() {

    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'multiple':
                return state + 7;
        }

    }

    const [count, dispatch] = useReducer(reducer, initialState);

    return (<>
        <h1>{count}</h1>
        <button onClick={() => dispatch('increment')}>Increment</button><br />
        <button onClick={() => dispatch('decrement')}>Decrement</button><br />
        <button onClick={() => dispatch('multiple')}>Multiple by 7</button><br />
    </>)

}
export default UseReducer;