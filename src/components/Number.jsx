
import { useDispatch, useSelector } from "react-redux";
//Age Foolder Jodagaane baraye Slice Number Nasazim => Reducer ha rooye Number Eemal nemishavad.
import { increment, decrement } from "../Feautures/Counter/Number/numberSlice";

function Number() {
    const number = useSelector((state) => state.number.numberValue);
    const dispatch = useDispatch();

    return (
        <div>

            <h2>Number is : {number}</h2>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    )
}

export default Number