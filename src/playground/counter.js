
console.log('App.js is running!');

// JSX - JavaScript XML

//only render subtitle  and p tag : if subtile exit = logical and
// render new p tag if option.length ? 0 'here are option' else 'option'

const app = {
    title: 'Indecision react app',
    subtitle: 'Put your life in your hands',
    options: ['one']
}
const user = {
    name: 'Hemant',
    age: 25,
    location: 'Los Angeles'
};

const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p> {app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'here are your options:': 'No options'}</p>

        <ol> 
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

//create app object title/subtile
//use title/subtile in template
// inside h1 below { 'jscode' } is the simple javascript

//if statement
//ternary operator
//logical and operator
function getLocation (location) {
    //user object has location then it will pass and print the location
    //else nothing
    if(location){
        return <p>Location:{location}</p>;
    }
}


let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {  
    count = 0;
    renderCounterApp();
};  
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>count: {count}</h1>
            <button onClick={addOne}> +1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();


