import React from "react"

export const Person = ({ person }) => {
  return (
    <div>
      <h2>
        I am {person.name} and I am an expert in {person.skill}
      </h2>
    </div>
  )
}
