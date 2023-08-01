import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard =({ title, describe ,imgUrl}) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    
                    <span>{describe}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;