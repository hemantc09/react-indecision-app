
console.log('App.js is running!');
// JSX - JavaScript XML
const app = {
    title: 'Indecision react app',
    subtitle: 'Put your life in your hands',
    options: []
}
const user = {
    name: 'Hemant',
    age: 25,
    location: 'Los Angeles'
};

const onFromSubmit = (e) => {
    //below code stop full page refresh of form submit
    e.preventDefault();
    //console.log('form submitted');
 
    //get user entered
    const option = e.target.elements.option.value;
    //option is string
    if(option){
        //push user entered date into the app options arr
        app.options.push(option);
        //set input value to empty once user submit done
        e.target.elements.option.value = '';
        render();

    }
};

//create "Remove All" button above list
// on click -> wipe the arrya - > renderer
const removeAll = () =>{
    app.options = [];
    render();
}

const onMakeDecision = () =>{
    //get the random number comparing number of elements in the list lenght only and floor it
    const randomNum =  Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div>
            <h3>{app.title}</h3> 
            {app.subtitle && <p> {app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are your options:': 'No options'}</p>
            {/* if the length of the arrya is = 0 then disable the button */}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do</button>
            <button onClick={removeAll}>Remove All</button>
            <ol> 
                {
                    /*map over app.option geting back and arrya list (set key and text*/
                        //short hand version of arrow function used here
                        app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFromSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();