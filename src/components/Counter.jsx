
import { useDispatch, useSelector } from "react-redux";
import { selectCounter } from "../Feautures/Counter/counterSlice";
import { increment, decrement, incrementByAmount } from "../Feautures/Counter/counterSlice";
import { useState } from "react";

function Counter() {
    const [value, setValue] = useState(0);
    //useSelector Baraye Select kardan az Store
    //Function selector ro dar Slice minevisim in taraf Estefade mikonim 
    const counter = useSelector(selectCounter);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter is : {counter}</h2>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <input type="number" value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(+value))}>incrementByAmount</button>
            {/* incrementByAmount(+value) yaeni payload = Input Value Be soorate Number*/}
        </div>
    )
}

export default Counter