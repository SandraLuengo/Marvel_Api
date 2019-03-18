import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import AppService from './AppService';

class App extends Component {
  constructor(props){
    super();
    this.state={
      characterInfo:null
    }
    this.appService = new AppService();
  }

  //Se te ocurre como ponerlo para cuando borras todo?? 
  onChangeHandler = e => {
    let finding=e.target.value
    finding ? this.appService.getCharacterData(finding)
    .then(characterInfo=> this.setState({...this.state,characterInfo}))
    .catch(err=> console.log(err))
    : this.setState({...this.state, characterInfo:null})
  }
  render() {
    return (
      <div className="App">
        <SearchBar changeFuncion={this.onChangeHandler}/>
        {this.state.characterInfo&&this.state.characterInfo.map((item,i)=><div key={i}>{item.name}</div>)}
      </div>
    )
  }
}

export default App;
