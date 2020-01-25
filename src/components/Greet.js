import React from 'react'

const Greet = ({ name, heroName, children }) => {
  return(
    <div>
      <h1>Hello Fangfei </h1>
      <h2> {name} is also known as {heroName}</h2>
      {children}
    </div>
  )
}

export { Greet }  