import "./Expenses.css"

function Expenses(props){
    const amt1 = props.amount;

    return(
        <div className="expenses">
            {amt1}
        </div>
    );

}

export default Expenses; 