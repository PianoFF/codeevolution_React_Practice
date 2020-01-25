import React from 'react'

// const Greet = (props) => {
//     console.table(props)
//     return <h1>Hello {props.name} </h1>
// }


// vs.

const Greet = ({ name, profession, children}) => {
    return(
       <div className='trying-to-include-children'>
            <h1> Hello {name}, and she's a {profession} </h1>
            {children}
        </div>
    )
}
export { Greet }  