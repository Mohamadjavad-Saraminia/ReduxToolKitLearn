
import { useSelector } from "react-redux";
import { selectCounter } from "../Feautures/Counter/counterSlice";

function Counter() {
    //useSelector Baraye Select kardan az Store
    //Function selector ro dar Slice minevisim in taraf Estefade mikonim 
    const counter = useSelector(selectCounter);
    return (
        <div>
            <h2>Counter is : {counter}</h2>
        </div>
    )
}

export default Counter