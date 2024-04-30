import { MdOutlineLocationOn } from "react-icons/md";
import { PiHandshakeLight } from "react-icons/pi";
import { MdOutlineWorkHistory, MdOutlineUpdate } from "react-icons/md";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const JobDetails = () => {
  //custom functions
  function findJobById(jobArray, jobId) {
    // Loop through the array to find the item with the matching job ID
    for (let i = 0; i < jobArray.length; i++) {
      if (jobArray[i].job_id === jobId) {
        return jobArray[i];
      }
    }
    // Return null if no matching item is found
    return null;
  }
  const { para_id } = useParams();
  const jobData = useSelector((state) => {
    return state.urlMapper.jobData;
  });
  const jobItem = findJobById(jobData, para_id);
  const apiData = jobItem.description;
  const cleanedData = apiData;
  console.log("job details hit");

  return (
    <section className="job_details_section">
      <div className="job_details_header">
        <img src={jobItem.thumbnail} alt={jobItem.title} />
        <p className="job_details_header_title job_title">{jobItem.title}</p>
      </div>
      <div className="job_details_inner_section">
        <div className="job_details_description">
          <p className="company_name title">{jobItem.company_name}</p>
          <div className="location">
            <MdOutlineLocationOn />
            <p className="location_name">{jobItem.location}</p>
          </div>
        </div>
        <div className="job_details_extensions">
          <div className="via">
            <p className="extension">
              <p className="icon">
                <PiHandshakeLight />
              </p>
              <p>via</p>
            </p>
            <p className="extension_data">{jobItem.via}</p>
          </div>
          <div className="date_posted">
            <p className="extension">
              <p className="icon">
                <MdOutlineUpdate />
              </p>
              <p>date posted</p>
            </p>
            <p className="extension_data">
              {jobItem.detected_extensions.posted_at}
            </p>
          </div>
          <div className="schedule_type">
            <p className="extension">
              <p className="icon">
                <MdOutlineWorkHistory />
              </p>
              <p>schedule type</p>
            </p>
            <p className="extension_data">
              {jobItem.detected_extensions.schedule_type}
            </p>
          </div>
        </div>
        <div className="job_details_aboutjob">
          <p dangerouslySetInnerHTML={{ __html: cleanedData }} />
        </div>
      </div>
    </section>
  );
};
export default JobDetails;
