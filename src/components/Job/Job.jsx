import React from "react";
import { Container } from "./style";

const Job = ({ job }) => {
  return (
    <Container id="trampos">
      <div className="job-texts">
        <p className="title">{job.title}</p>
        <p className="client">{job.client}</p>
        <p className="paragraph" dangerouslySetInnerHTML={{ __html: job.paragraph }}></p>
      </div>
      {job.images.map((img) => {
        return <img className="job" src={img} />;
      })}
    </Container>
  );
};

export default Job;
