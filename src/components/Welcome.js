import React, { Component } from 'react'

class Welcome extends Component {
    render(){
        const {name, profession, children} = this.props; 
        return (
            <div>
                <h1> Class Component. Test for {name}, {profession}</h1>
                {children} {/* 👈 to render the children elements (tags or componenets)*/}
            </div>
        )
    }
}

export default Welcome 