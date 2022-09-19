import React from "react";
import "./projectCard.css";
import LanguageIcon from "@mui/icons-material/Language";
import { CCard,CCardBody,CCardTitle,CCardText } from '@coreui/react';

function ProjectCard({ item }) {
  return (
    <div className="project-card">
      <CCard style={{width:"18rem"}} className="default-card" >
        <CCardBody>
          <CCardTitle><label className='project-title'>{item.name}</label></CCardTitle>
          <CCardText>
                    {
                        item.html_url && (
                        <a className='project-link' href={item.html_url}>
                            <div className='link-button'>
                                <LanguageIcon className='icon' />Go to repository
                            </div>
                        </a>
                    )}
                <p>{item.language}</p>
                <p>last update : {item.updated_at}</p>
                <p>visibility : {item.visibility}</p>
                <p>issues : {item.open_issues}</p>
                
          </CCardText>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default ProjectCard;
