import React from "react";

function Event() {
    function handleOnclick(e) {
        console.log(e);
        console.log(e.target.name);
        alert(e.target.name + "버튼을 클릭했습니다!")
    }
    return (
        <div>
            <button name="A" onClick={handleOnclick}>클릭</button>
        </div>
    )
}

export default Event