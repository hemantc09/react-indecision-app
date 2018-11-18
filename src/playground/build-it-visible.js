// ch1
//VisibilityToggle - redner , constructor , handleToggleVisibility
//visibility state start at  -> false 


//show and hide the text  
//show and hide chang the button text based on the context
let visibility = false;

const toggleVisibility = () => {
    //we are saving the button state value here
    visibility = !visibility;
    //then render the function
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h3>
                Visibility Toggle
            </h3>
            <button onClick={toggleVisibility}>
                {visibility?'Hide Details':'Show Details'}
            </button>
            {visibility && (
                   <div>
                       <p> Hey these are the details you can see!</p>
                    </div>
            )}
        </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'));
};

render();