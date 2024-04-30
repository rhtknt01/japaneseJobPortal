import React, { useEffect, useRef } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaYenSign, FaEye } from "react-icons/fa";
import Button from "../buttons/button";
import Error from "../error/error";
import { useLocation } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";


const JobCard = (props) => {
  const jobid = useSelector((state)=>{
    return state.urlMapper.jobid;
  });
  const dispatch = useDispatch();
  
  const { jobDataItem } = props;
  const cardRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const setEqualCardHeight = () => {
      const cards = document.querySelectorAll('.jobcard');
      let maxHeight = 0;
      cards.forEach(card => {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
      });
      cards.forEach(card => {
        card.style.height = `${maxHeight}px`;
      });
    };

    // Call the function to set equal card heights whenever the URL changes
    setEqualCardHeight();

    window.addEventListener('resize', setEqualCardHeight);

    return () => {
      window.removeEventListener('resize', setEqualCardHeight);
    };
  }, [location.pathname]); // Re-run effect when location.pathname changes

  // function sliceBigText(text, maxLength) {
  //   return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  // }

  if (!jobDataItem || jobDataItem.length === 0) {
    return <Error />;
  }

  return (
    <div className="jobcard" ref={cardRef} key={jobDataItem.job_id}>
      <div className="header_container">
        <img src={jobDataItem.thumbnail} alt={jobDataItem.title} />
        <button className="save_btn">
          save <IoMdHeartEmpty />
        </button>
      </div>
      <div className="company_container">
        <span className="title company_name">{jobDataItem.company_name}</span>
        <span className="date_posted">{jobDataItem.detected_extensions.posted_at}</span>
      </div>
      <p className="job_title">{jobDataItem.title}</p>
      <div className="merit_container">
        <span className="merit schedule_type">{jobDataItem.detected_extensions.schedule_type}</span>
        <span className="merit">{jobDataItem.extensions && jobDataItem.extensions[1] ? jobDataItem.extensions[1] : "job opportunity"}</span>
      </div>
      <div className="footer_container">
        <div className="salary_container">
          <p className="salary">
            {jobDataItem.extensions && jobDataItem.extensions[1] ? jobDataItem.extensions[1] : <FaEye /> + "view"}
          </p>
          <p className="location">{jobDataItem.location}</p>
        </div>
        <div className="button_container">
          <Button text="apply now" />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
