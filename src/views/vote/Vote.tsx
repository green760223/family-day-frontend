import React from "react"
import { useStore } from "../../store"

const Vote = () => {
  const employeeInfo = useStore((state) => state.employeeInfo)

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur animi
      earum tempore doloribus quibusdam dolore illum incidunt distinctio harum
      quis amet nemo ab nulla quam placeat, tempora repellat sed excepturi.
      {employeeInfo.name}
    </div>
  )
}

export default Vote
