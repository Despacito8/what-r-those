import React from 'react'
import Meme from './meme'

class App extends React.Component{
constructor(){
    super()

    this.state ={
        punkty: 0,
        url:'',
        text:'MEMEZ'
    }
    this.dodajPunkty = this.dodajPunkty.bind(this)
    this.getImage = this.getImage.bind(this)
}
componentDidMount(){
    setInterval(this.getImage,1000*7)
}
getImage(){
fetch('https://dog.ceo/api/breeds/image/random')
.then(resp => resp.json())
.then (data=>this.setState({url:data.message}))
}

dodajPunkty(){
    this.setState(prevState =>{
return {punkty: prevState.punkty + 1}
    })
}

    render(){
        return(
            <div>
                <h1>Punkty: {this.state.punkty}</h1>
                <button onClick={this.dodajPunkty}> Click Meeee!</button>
                <Meme text ={this.state.text} link={this.state.url}/>
            </div>
        )
    }
}

export default App