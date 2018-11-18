
import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecesionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        // new syntax below 
        this.setState(() => ({ options: [] }));
    };

    //for modal when presed okay it will cler the modal
    handleClearSelectedOption = () => {
        this.setState(() =>({
            selectedOption: undefined
        }));
    };

    //remove single option only handle 
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !==option)
        }));
        // console.log('test', option);
    };

    handlePick = () => {
        //get the random number comparing number of elements in the list lenght only and floor it
        const randomNum =  Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        // alert(option);
        //use setState to set selectedOption 
        this.setState(() => ({
            selectedOption: option
        })); 
    };

    handleAddOption = (option) => {
        //check valid option
        if(!option){
            return 'Enter valid option to add'
        }
        //check valid option already exist in an array
        else if( this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
          }));
    }; 
    
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState (() => ( { options: options}));
            }
        } catch (e) {
            //do nothing
        }    
    }

    // Get fired When components get updated

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log("saving data");
        }
        
    }

    //fires when component goes away
    componentWillUnmount() {
        console.log("component get unmount");
    }
   
    //handleDeleteOptions 
    render() {
        const subtitle = 'Let the life make decision!';
        return (
            <div>
                <Header subtitle={subtitle} />
                {/* {if the lenght is > than 0 options will be true else false} */}
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick = {this.handlePick}
                    
                    />
                    <div className="widget">
                        <Options 
                            //below are setting up the props and value. dont get confused
                            options = {this.state.options} 
                            //we are creating the handleDeleteOptions props to access in delete option component
                            handleDeleteOptions= {this.handleDeleteOptions}
                            handleDeleteOption= {this.handleDeleteOption}

                        />
                        <AddOption 
                        
                            handleAddOption= {this.handleAddOption} 
                        /> 
                    </div>
                </div>
                
                <OptionModal
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        );
    }
}


///====================================
// const inDecesionApp =  new IndecesionApp();
