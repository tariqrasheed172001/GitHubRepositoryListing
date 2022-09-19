import React, { useState } from 'react'
import Pagination from '../Pagination/Pagination';
import ProjectCard from '../projectCard/ProjectCard';
import './response.css';
import Profile from '../Profile/Profile';


function Response({repos,user}) {
    
    const [showPerPage,setShowPerPage] = useState(8);
    const [pagination,setPagination] = useState({
        start:0,
        end:showPerPage,
    })
   
   
    const onPaginationChange = (start,end) => {
        console.log(start,end);
        setPagination({start:start,end:end})
    }
    console.log(repos);
    const listRepos = repos.length !== 0 && 
    (
        repos.data.slice(pagination.start,pagination.end).map((item) => (
            <div className='cardd'>
                <ProjectCard item={item} />
            </div>
            
        )
        )
    )
  return (
    <div className='bodyy'>
            {
                repos.length !== 0 && (
                   
                    <Profile user={user} />
                    
                )
            }
            
            {listRepos}
            <div className='pagin'>
                {repos.length !== 0 && <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} repos={repos} /> } 
            </div>
            
    </div>
    
  )
}

export default Response