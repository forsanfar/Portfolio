import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="الهندي لالات عد النقود"
              description=". موقع لمحل بيع الات عد النقود في اليمن خيث يحتوي على صفحات تحكم للمستخدم والمشرف على الموقع وصفحة اخرى لعرض المنتجات للزبائن والمطلعين على الموقع "
              demoLink="https://al-hendy.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="صفحة شخصية"
              description="صفحة شخصية لشخص تعمل كسيرة ذاتية له"
          
              demoLink="http://arena.ezyro.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
