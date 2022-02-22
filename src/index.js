import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//*import App from './App';
//*import reportWebVitals from './reportWebVitals';


class ListaContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      tarefas:[],
      inputTarefa:""
    };

    this.addTarefa = (ev) => {
      ev.preventDefault();
      const tarefas = this.state.tarefas.slice();
      tarefas.push(this.state.inputTarefa);
      this.setState({
        tarefas: tarefas,
        inputTarefa:""
      });
    };

    this.removeTarefa = (index) => {
      const tarefas = this.state.tarefas.slice();
      tarefas.splice(index, 1);
      this.setState({tarefas});
    };

    this.onChange = (ev) => {
      ev.preventDefault();
      const state = Object.assign({},this.state);
      state[ev.target.name] = ev.target.value;
      this.setState(state);
    };
  }
  render(){
    return (
      <ListaView
      tarefas={this.state.tarefas}
      inputTarefa={this.state.inputTarefa}
      onChange={this.onChange}
      addTarefa={this.addTarefa}
      removeTarefa={this.removeTarefa}
      />
    );
  }

}

const ListaView = (props) => (

  <div className='App-header'>
    <center>
    <h1>Lista de Tarefas</h1>

    <input name="inputTarefa" value={props.inputTarefa} onChange={props.onChange} />

    <button onClick={props.addTarefa} >Add</button>

   { props.tarefas.map((tarefa, index) => (
   <p>
     {index+1} - {tarefa} - 

     <span style={{cursor:"pointer"}} onClick={() => props.removeTarefa(index)}>Deletar</span>
     </p>
     
     ))
     }
     </center>
  </div>

);


ReactDOM.render(
    <ListaContainer />,
  document.getElementById('root')
);