import React, {Component} from "react"



class App extends Component{
  constructor(){
    super()


    this.getImg = this.getImg.bind(this)
    this.btn = this.btn.bind(this)
    this.getText = this.getText.bind(this)
  }
  componentDidMount(){


  }
  getImg(){
    return <img src="https://dog.ceo/api/breeds/image/random"></img>

  }
  btn(){
    return <button>Click</button>
  }
  getText(){
    return <h1>adsszdxfgcgvvhjk</h1>
  }
render(){
  return (
    <div>
      {this.getImg()}
      {this.getText()}
      {this.btn()}
    </div>
  )
}
}
console.log(App)
export default App