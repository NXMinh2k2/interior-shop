import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProjectProduct = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/products")
            const data = res.data

            const newProducts = data.filter(x => x.type == "duantieubieu")
            setProjects(newProducts)
        }
        fetchData()
    }, []) 

    return (
        <>
            {
                projects.slice(0,1).map((project, index) => {
                    return (
                        <div className='project' key={index}>
                           <Link className='link' to='/project'>
                                <p className='project-title'>Dự án tiêu biểu</p>
                           </Link>
                            <Link className='link' to='/productpage'>
                                <div className="project-wrap">
                                    <img src={project.img}/>
                                    <span>{project.title}</span>
                                </div>
                            </Link>    
                            <div className='project-des'>
                                {project.name}
                            </div>
                        </div>
                    )
                })
            }   
        </>
    )
}

export default ProjectProduct


// {
//     /* <div className='project'>
//             <p className='project-title'>Dự án tiêu biểu</p>
//             <div className="project-wrap">
//                 <img src="http://t0258.store.nhanh.vn/tp/T0258/img/tmp/news.jpg"/>
//                 <span>{projects[0].name}</span>
//             </div>
//             <div className='project-des'>
//                 THIẾT KẾ NỘI THẤT CHUNG CƯ HIỆN ĐẠI THE SUNSHINE PLACE
//             </div>
//     </div> */
// }