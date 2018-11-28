console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
  title: 'Indecision App',
  subtitle: 'From React Course',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();   // prevents form from posting data in the URL

  const option = e.target.elements.option.value; // elements identified by name= tag
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }

};

const onMakeDecision = () => {

  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);

};

const onRemoveAll = () => {

  app.options = [];
  console.log('Options removed');
  render();
};


var appRoot  = document.getElementById('app');

const render = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options && app.options.length > 0 ? <p>Here are your options:</p> : <p>No options</p>}

      <button disabled={app.options.length==0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove all</button>

      <ol>
        {
          app.options.map((value) => {
            return <li key={value}>{value}</li>
          })
        }
      </ol>



      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);

};

render();


