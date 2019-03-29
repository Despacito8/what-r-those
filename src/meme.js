import React from 'react'


class Meme extends React.Component{
render(){
    return(
        <div>
            <h1>{this.props.text}</h1>
            <img scr={this.props.link} alt="lol" />
        </div>
        )
    }
}
export default Meme