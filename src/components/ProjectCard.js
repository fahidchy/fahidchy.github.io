import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <h4>{title}</h4>
        <div className="proj-txtx">
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
