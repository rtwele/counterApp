import React, { Component } from 'react'
import Plus from './components/Plus'
import Minus from './components/Minus'
import InputNum from './components/InputNum'
import Reset from './components/Reset'

class App extends Component {
  state = {
    count: 0
  }

countUp = () => {
  this.setState(
    {count: this.state.count + 1}
  )
}

countDown = () => {
  this.setState(
    {count: this.state.count - 1}
  )
}

inputNum = (number) =>{
  let value = parseInt(number)
  this.setState(
    {count: this.state.count + value}
  )
}

reset = () => {
  this.setState({
    count: 0
  })
}

render() {
  return(
    <div className="App">
      <div className="container">
        <p>Don't mess up the Count:</p>
        <h4>{this.state.count}</h4>
      </div>
      <div className="container-two">
        <Plus countUp={this.countUp} />
        <Minus countDown={this.countDown} />
      </div>
      <div className="container-three">
        <InputNum inputNum={this.inputNum} />
        <Reset reset={this.reset} />
      </div>
    </div>
  )
}
}

export default App



