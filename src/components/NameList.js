import React from "react"
import { Person } from "./Person"

export const NameList = () => {
  // const names = ["Bruce", "Clark", "Diana"]
  // const nameList = names.map((name) => <h2> {name} </h2>)

  const peopleList = [
    {
      id: 1,
      name: "Bruce",
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      skill: "Python",
    },
    {
      id: 3,
      name: "Diana",
      skill: "Angular",
    },
  ]

  const people = peopleList.map((person) => <Person person={person} />)
  return (
    <div>
      {/* TEDIOUS!!! */}
      {/* <h2> {names[0]} </h2>
      <h2> {names[1]} </h2>
      <h2> {names[2]} </h2> */}

      {/* {nameList} */}

      {people}
    </div>
  )
}
