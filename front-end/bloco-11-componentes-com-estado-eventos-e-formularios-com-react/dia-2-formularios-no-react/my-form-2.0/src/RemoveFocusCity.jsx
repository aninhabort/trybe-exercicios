import React from "react";

class RemoveFocusCity extends React.Component {
    focusInput = (event) => {
        event.target.style.background = 'rgb(252, 207, 213)';
    }
    
    cityName = (event) => {
        let eventTarget = event.target;
        eventTarget.style.backgroundColor = '';

        if (/^\d/.test(eventTarget)) {
            console.log(eventTarget.trim());
        }
    }

    render() {
        return (
            <div id='forms-area'>
                <label for='cidade'>Cidade:<abbr title="campo obrigatório">*</abbr></label>
                <input type='text' id='cidade' name='cidade' maxLength='28' required onFocus={this.focusInput} onBlur={this.cityName}></input>
            </div>
        );
    }
}

export default RemoveFocusCity;