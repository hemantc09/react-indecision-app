
//ch 1
//create 3 method handleAddOne , handelMinusOne, handleReset 
//Use Console.log("print method name")
// wire up onClick() & bind in the constructor 

// count - setup default prop value to 0

class Counter extends React.Component {

    constructor(props) {
        //super is important
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset= this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
 
    componentDidMount() {
       
        try {
            console.log('mount');
            const stringCount = localStorage.getItem('count');
            const count = JSON.parse(stringCount, 10);
            if(!isNaN(count)) {
                this.setState( () => ({ count }));
            }
        } catch (e) {
            //do nothing
        }
       

    }

    componentDidUpdate(prevProps, prevState) {
        
        if(prevState.count !== this.state.count) {
            // const json = JSON.stringify(this.state.count);
             localStorage.setItem('count', this.state.count);
             console.log('saving data');
        }

    }

    handleAddOne() {
        //get the previous state you can name it anything because its a parameter
        this.setState((prevState) => {
            return {
                //get prevstate count value and add 1
                count : prevState.count + 1
            };
        });
    }   

    handleMinusOne() {

        //ch2 call this.setState decrement the count by 1
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
        
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1> Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

// swithc  done
//component mount
//comp did up
//use local stoarage


//setting up default the -10 will show first
ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));


// console.log('App.js is running!');

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {  
//     count = 0;
//     renderCounterApp();
// };  
// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>count: {count}</h1>
//             <button onClick={addOne}> +1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
// ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();


