import {
  useParams
} from 'react-router-dom';

export default function Project() {
  let { projectId } = useParams(); 
  return (
    <h1>{projectId}</h1>
  )
}