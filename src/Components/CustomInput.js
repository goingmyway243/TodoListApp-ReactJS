import React from "react";

export class CustomInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        };
    }

    handleInputChange(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    render() {
        return (
            <div>
                <input className='Input' type='text' value={this.state.inputValue} placeholder={this.props.placeholder} onChange={evt => this.handleInputChange(evt)} />
                {this.props.buttonText ?
                    <button className='Button'
                        onClick={() => {
                            this.props.onButtonClick(this.state.inputValue);
                            this.setState({ inputValue: '' });
                        }}>
                        {this.props.buttonText}
                    </button>
                    : null}
            </div>
        )
    }
}