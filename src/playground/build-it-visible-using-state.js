// ch1
//VisibilityToggle - redner , constructor , handleToggleVisibility
//visibility state start at  -> false 
class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility : !(prevState.visibility)
            };
        });
    }
    render() {
        return(
            <div>
                <h3>Visibility Toggle</h3>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details ': 'show details'}</button>

                {
                    this.state.visibility && (
                        <div>
                            <p>  Hey these are the details you can see! </p>
                        </div>
                    )
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));