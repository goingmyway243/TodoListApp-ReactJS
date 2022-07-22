import React from "react";

export class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            inputEditValue: ''
        };
    }

    handleEdit() {
        if (this.state.isEdit) {
            console.log(this.state.inputEditValue);
            this.props.onEdit(this.state.inputEditValue);
        }

        this.toggleEditMode();
        this.setState({ inputEditValue: this.props.taskName });
    }

    toggleEditMode() {
        this.setState({
            isEdit: !this.state.isEdit,
        });
    }

    render() {
        return (
            <li className={this.props.completed ? 'List-item Complete-item' : 'List-item Uncomplete-item'}
                onClick={() => {
                    if (this.state.isEdit)
                        return;
                    this.props.onClick();
                }}>
                {this.state.isEdit ?
                    <input
                        onClick={(e) => e.stopPropagation()}
                        value={this.state.inputEditValue}
                        onChange={(e) => this.setState({ inputEditValue: e.currentTarget.value })} /> :
                    this.props.taskName}
                <button className="Delete-button" onClick={(e) => {
                    e.stopPropagation();
                    this.props.onDelete();
                }}>
                    Delete
                </button>
                <button className="Edit-button"
                    onClick={(e) => {
                        e.stopPropagation();
                        this.handleEdit();
                    }}>
                    Edit
                </button>
            </li >
        )
    }
}