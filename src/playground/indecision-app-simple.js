/*---------------*/
/* Building with react components
/*---------------*/


const obj = {
    name: "santy",
    getName() {
        return this.name;
    }
};

const getName = obj.getName.bind({ name: "hemant"});
console.log(getName());

class IndecesionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    // Get fired When components get mounted to dom

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
    //remove all options handle
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });

        // new syntax below 
        this.setState(() => ({ options: [] }));
    }

    //remove single option only handle 
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !=option)
        }));
        // console.log('test', option);
    }


    // ch1. hendlePick - pass to actin and setup on click and  bind here
    // randomly pick

    handlePick() {
        //get the random number comparing number of elements in the list lenght only and floor it
        const randomNum =  Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
        // alert('hi')
    }

    handleAddOption(option) {
        //check valid option
        if(!option){
            return 'Enter valid option to add'
        }
        //check valid option already exist in an array
        else if( this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }
        //else add the option below logic

        // this.setState((prevState)=>{
        //     // prevState.options.push(option);
        //     return {
        //         options: prevState.options.concat(option)
        //     };
        // });

    //ch1 :  new syn below
    
    this.setState((prevState) => ({ 
        options: prevState.options.concat(option)
    }));



        // console.log(option);
    }
    //handleDeleteOptions 
    render() {
        const subtitle = 'Put your life';
        return (
            <div>
                <Header subtitle={subtitle} />
                {/* {if the lenght is > than 0 options will be true else false} */}
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick}
                
                />
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
        );
    }
}



const Header = (props) => {
    return (
         <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2> {props.subtitle}</h2>}
            {/* <h3>{props.subtitle}</h3> */}
        </div>
    );
};

Header.defaultProps = {
    title : "Indecision"
};

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
             What to do?
             </button>
        </div>
    );
};

//set up options prop for th options component
//inside the options render the length of the array 
//render new p tag for each option (set text , set key)



//add removeAll button 
//set up removeAll - > alert some message
//set up on click to fire the method

const Options = (props) => {
    return (
        <div>       
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {/* nested structure here */}
            {/* {this.props.options.length} */}
            {/* <Option /> */}
            { props.options.length === 0 && <p> Please add an option to get started</p>}
            {
                //set up the optiontext property to access it inside the option
                props.options.map((option) =>
                    <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption = {props.handleDeleteOption}
                    /> 
                )
                //<p key={option}>{option}</p>
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >

                remove
            </button>
        </div>
    );   
}


//1. set up form with text input  and submit button
//2. wire up on submit 
//3. define handleAddOption -> fetch the value typed - > if value , then alert



class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        //by default set the error undefined
        this.state = {
            error: undefined
        };
    }
     handleAddOption(e) {
        // below code stop full page refresh of form submit
        e.preventDefault();
    
        //get user entered
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if(!error) {
            //clear input
            e.target.elements.option.value = '';
        }
    }
    render() {
        return(

                <div>
                    {this.state.error && <p>{this.state.error}</p>}
                    {/* Add Option component here */}
                    <form onSubmit={this.handleAddOption}>
                        <input type="text" name="option"></input>
                        <button>Add Option</button>
                    </form>
                </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p> Name: {props.name} </p>
//             <p> Age: {props.age} </p>
//         </div>
//     );
// };

//options class - render static text 

//component AddOption 

ReactDOM.render(<IndecesionApp />,document.getElementById('app'));

