import React from "react"
import { Person } from "./Person"

export const NameList = () => {
  // how to utilize 'index' property to fulfill key attribute when rendering list
  // ** be mindful of the problem that comes with using index as key attribute!
  // when to user index as key:
  // // the items in the list do not have a unique id &&
  // // the list is a static list and will not change &&
  // // the list will never be reordered or filtered
  const names = ["Bruce", "Clark", "Diana", "Bruce"]
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {" "}
      {index + 1} {name}{" "}
    </h2>
  ))

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

  const people = peopleList.map((person) => (
    <Person key={person.name} person={person} />
  ))
  // key element is not accessible from any child component
  return (
    <div>
      {/* TEDIOUS!!! */}
      {/* <h2> {names[0]} </h2>
      <h2> {names[1]} </h2>
      <h2> {names[2]} </h2> */}

      {nameList}

      {/* {people} */}
    </div>
  )
}
