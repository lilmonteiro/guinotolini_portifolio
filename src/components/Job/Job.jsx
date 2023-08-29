import React, { useEffect, useState } from "react";
import { Container } from "./style";
import Menu from "../Menu/Menu";
import dataJobs from "../../utils/jobs.json";
import { useParams } from "react-router";

const Job = () => {
  const params = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    dataJobs.forEach((job, i) => {
      if (job.path === params.job) {
        setJob(job);
      }
    });
  }, []);

  useEffect(() => {
    console.log(job);
  }, [job]);

  return (
    <Container id="trampos">
      <Menu />
      <div className="job-content">
        {job && <p className="title">{job.title}</p>}

        {job &&
          job.content.map((content, i) => {
            if (content.type === "p") {
              return (
                <p
                  key={i}
                  className="paragraph"
                  dangerouslySetInnerHTML={{ __html: content.value }}
                ></p>
              );
            }
            if (content.type === "img") {
              return <img key={i} className="job" src={content.value} alt={content.title} />;
            }
          })}
      </div>
    </Container>
  );
};

export default Job;
