import { Link } from "react-router-dom"

export default function NoPageFound() {
  return (
    <>
      <span>No Page Found</span>
      <Link style={{color: 'white'}} to='/'>Go to main page</Link>
    </>
  )
}