const JobListTitle = (props) => {
  return (
    <div className="job_list_title_container">
      <div className="job_list_title">{props.title}</div>
      <div className="job_list_subtitle">{props.subtitle}</div>
    </div>
  );
};
export default JobListTitle;
