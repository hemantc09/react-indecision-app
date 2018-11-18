import React from 'react';


export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    // pull out the state

    //convert hand

     handleAddOption = (e) => {
        // below code stop full page refresh of form submit
        e.preventDefault();
        console.log("ll");
        //get user entered
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if(!error) {
            //clear input
            e.target.elements.option.value = '';
        }
    };
    
    render() {
        return(
                <div>
                    {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                    {/* Add Option component here */}
                    <form className="add-option" onSubmit={this.handleAddOption}>
                        <input className="add-option__input" type="text" name="option"></input>
                        <button className="button">Add Option</button>
                    </form>
                </div>
        );
    }
}