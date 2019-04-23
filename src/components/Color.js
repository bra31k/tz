import React, { Component } from 'react';
import "../style/index.css"
import { SketchPicker } from 'react-color';


class Color extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedColor: "",
            selectedTarget: null
        }

        this.targetOnClick = this.targetOnClick.bind(this)
        this.changeColorTarget = this.changeColorTarget.bind(this)
    }

    componentDidUpdate(){
        document.getElementById(this.state.selectedTarget).style.backgroundColor = this.state.selectedColor
    }

    targetOnClick = (event) => {
        this.setState ({
            selectedTarget: event.target.id
        })
    }

    changeColorTarget = (color) => {
        this.setState({
            selectedColor: color.hex
        })
    }

    render() {
        return (
            <div className="color">
                <h1>Часть 2</h1>
                <SketchPicker onChangeComplete={this.changeColorTarget} color={this.state.selectedColor}/>
                <div className="targets">
                    <div className="target" id={1} onClick={this.targetOnClick}/>
                    <div className="target" id={2} onClick={this.targetOnClick}/>
                    <div className="target" id={3} onClick={this.targetOnClick}/>
                    <div className="target" id={4} onClick={this.targetOnClick}/>
                    <div className="target" id={5} onClick={this.targetOnClick}/>
                </div>
            </div>
        );
    }
}

export default Color;