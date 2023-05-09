import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../queries/projectQueries"
import ProjectCard from "./ProjectCard";
import Spinner from "./Spinner";


const Projects = () => {
    const {loading, error, data} = useQuery(GET_PROJECTS);

    if (loading) return <Spinner />;
    if (error) return <h1>Oopsie, something went wrong</h1>;


  return (
    <>{data.projects.length > 0 ? (<div className="row">{data.projects.map(project => (
        <ProjectCard project={project} key={project.id}/>
    ))}</div>) : (<p>oooooo</p>)}</>
  )
}

export default Projects