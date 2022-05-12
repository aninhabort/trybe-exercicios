import React from "react";

class OnMouseAlertArea extends React.Component {
    handleAlertMessage = () => {
        const alerted = localStorage.getItem('alerted') || '';
        if (alerted !== 'yes') {
            alert('Preencha com cuidado esta informação.');
            localStorage.setItem('alerted', 'yes');
        }
    }

    render() {
        return (
            <div id='forms-area'>
            <label for='cargo'>Cargo<abbr title="campo obrigatório">*</abbr></label>
            <textarea rows='4' cols='50' id='cargo' name='cargo' maxLength='40' required onMouseEnter={this.handleAlertMessage}></textarea>
            </div>
        );
    }
}

export default OnMouseAlertArea;