import React from "react";

function Counter(_props) { //props가 선언은 되었지만  해당 값이 잃히지 않음 그래서 _props수정후 동작 됨
    let count = 0;

    function plus(){
        count = count +1;
        console.log(count);
    }

    return (
        <div>
            <p>총{count}번 클릭</p>
            <button onClick={plus}>
                클릭
            </button>
        </div>
    )
}

export default Counter