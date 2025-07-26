import '../stylesheets/style.css';
const percentToDecimal = (decimal) =>{
    return (decimal.toFixed(2)+'%')
}

const scorecal = (total,goal) =>{
    return percentToDecimal(total/goal)
}

export const CalculateScore = ({name,school,total,goal}) => {
    return(
    <div className="formstyle">
        <h1>Student Details:</h1>
        <div className="name">
            <span><b>Name:</b></span>
            <span>{name}</span>
        </div>
        <div className="school">
            <span><b>School:</b></span>
            <span>{school}</span>
        </div>
        <div className="total">
            <span><b>total:</b></span>
            <span>{total}</span>
            <span>Marks</span>
        </div>
        <div className="score">
            <span><b>score:</b></span>
            <span>{scorecal(total,goal)}</span>
        </div>
    </div>
    );
}