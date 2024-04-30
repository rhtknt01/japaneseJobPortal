import JobContainer from "./jobscontainer";
import JobListTitle from "./joblisttitle";
const LatestJobs = () => {
  return (
    <section className="latest_jobs_section">
      <div className="latest_jobs_container">
        <JobListTitle title="latest jobs in japan" subtitle="新着求人"/>
        <JobContainer type="latest"/>
      </div>
    </section>
  );
};
export default LatestJobs;
