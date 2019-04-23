import React, { Component } from 'react';


class Font extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fonts: ["Roboto", "Oswald"],
            selectedFont: "Oswald",
            inputText: ""
        }

        this.handleChangeSelect = this.handleChangeSelect.bind(this)
        this.buttonOnClick = this.buttonOnClick.bind(this)
        this.handleChangeInput = this.handleChangeInput.bind(this)
    }

    handleChangeSelect = (event) => {
        this.setState({
            selectedFont: event.target.value
        })
    }

    buttonOnClick = (event) => {
        event.preventDefault()
        if (!this.state.fonts.includes(this.state.inputText)) {
            this.setState(prevState => ({
                fonts: [...prevState.fonts, this.state.inputText],
            }))
        }
    }

    handleChangeInput = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    render() {
        return (
            <div className="font">
                <h1>Часть 1</h1>
                <div className="controls">
                    <link
                        rel='stylesheet'
                        type='text/css'
                        href={`https://fonts.googleapis.com/css?family=${this.state.selectedFont}`}
                    />
                    <div>
                        <div className="submit-form">
                            <form onSubmit={this.buttonOnClick}>
                                <input
                                    type="text"
                                    value={this.state.inputText}
                                    onChange={this.handleChangeInput}
                                />
                                    <button type="submit">
                                        добавить
                                    </button>
                            </form>
                        </div>
                        <div className="select-input">
                            <span>
                                список шрифтов
                            </span>
                            <select
                                value={this.state.selectedFont}
                                onChange={this.handleChangeSelect}
                            >
                                {this.state.fonts.map(font => {
                                    return (
                                        <option key={font}>{font}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <span style={{fontFamily: this.state.selectedFont}}>
                        выбранный в списке шрифт должен применяться к этому тексту
                    </span>
                </div>
            </div>
        )
    }
}

export default Font;