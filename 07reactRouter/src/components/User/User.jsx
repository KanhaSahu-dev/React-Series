import { useParams } from "react-router-dom"

function User() {
  
  

  const {useData} = useParams()

  return (
    <div>
      Hello {useData}
    </div>
  )
}

export default User