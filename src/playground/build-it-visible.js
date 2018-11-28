class VisibilityToggle extends React.Component {

  constructor(props){
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visible: false
    };
  }

  handleToggleVisibility(){
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    })
  }

  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'Hide details' : 'Show details'}</button>

        {this.state.visible && <div>Here are the details</div>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// JSX version
//
// const app = {
//   title: 'Visibility Toggle',
//   info: 'Here are the details!',
//   visible: false
// };

// const onVisibilityToggle = () => {

//   app.visible = !(app.visible);
//   render();
// }

// const render = () => {

//   const template = (

//     <div>
//       <h1>{app.title}</h1>

//       <button onClick={onVisibilityToggle}>{app.visible ? 'Hide details' : 'Show details'}</button>

//       {app.visible && (<p>{app.info}</p>)}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById('app'));

// };

// render();