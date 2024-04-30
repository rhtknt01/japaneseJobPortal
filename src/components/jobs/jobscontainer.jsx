import React, { useEffect,useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../buttons/button";
import {
  setCategory,
  setLocation,
  setApiLocation,
  setJobData,
} from "../../app/features/urlMapper";
import JobCard from "./jobcard";
import { useParams } from "react-router-dom";
import Error from "../error/error";

const JobContainer = (props) => {

  const jobData = useSelector((state) => {
    return state.urlMapper.jobData;
  });
  const { para_location, para_category } = useParams();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.urlMapper.category);
  const apiLocation = useSelector((state) => state.urlMapper.apiLocation);


  const fetchApiLocation = useCallback(async () => {
    try {
      const proxyUrl = "https://api.allorigins.win/get?url=";
      const apiUrl = `https://serpapi.com/locations.json?q=${para_location}&limit=1`;
      const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
      const result = await response.json();
      const data = JSON.parse(result.contents);
      data[0]
        ? dispatch(setApiLocation(data[0].canonical_name))
        : dispatch(setApiLocation("japan"));
      console.log("API Location:", data);
    } catch (error) {
      console.error("Error fetching API location:", error);
    }
  }, [dispatch, para_location]);

  const fetchDataJobs = useCallback(async () => {
    try {
      // Check if apiLocation is available
      if (!apiLocation) {
        return; // Exit early if apiLocation is not available
      }

      const proxyUrl = "https://api.allorigins.win/get?url=";
      const apiUrl = `https://serpapi.com/search.json?engine=google_jobs&q=${category}&location=${apiLocation}%2C+Japan&google_domain=google.co.jp&gl=jp&hl=en&start=1&api_key=442096fde32d1da3a357b28b447e5c8a5f0438f977c2f42f1e688ab663ebeddc`;
      const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
      const result = await response.json();
      const data = JSON.parse(result.contents);
      dispatch(setJobData(data.jobs_results));
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  }, [category, apiLocation,dispatch]);

  useEffect(() => {
    async function fetchData() {
      try {
        para_location
          ? dispatch(setLocation(para_location))
          : dispatch(setLocation("japan"));
        para_category
          ? dispatch(setCategory(para_category))
          : dispatch(setCategory("new"));

        await fetchApiLocation();
        await fetchDataJobs();
        

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [dispatch, para_location, para_category, fetchApiLocation, fetchDataJobs]);

  return (
    <div className="jobcontainer_main">
      <div className="job_container">
       
        {jobData.map((jobItem,index) => {
          return jobData.length > 0 ? (
            <JobCard jobDataItem={jobItem} key={index} />
          ) : (
            <Error />
          );

          // <Link to={`/${jobItem.job_id}`}>
          // </Link>
          // props.type === "latest" ? (
          //   <NavLink to={`/latest/${jobItem.job_id}`} className="navlinkstyle">
          //     {jobData.length > 0 ? <JobCard jobDataItem={jobItem} /> : <Error/>}
          //   </NavLink>
          // ) : (
          //   <NavLink to={`/alljobs/${jobItem.job_id}`} className="navlinkstyle">
          //     {jobData.length > 0 ? <JobCard jobDataItem={jobItem} />: <Error />}
          //   </NavLink>
          // )
        })}
      </div>
      {props.type !== "latest" ? (
        <div className="pagination">
          <Button text="Next"/>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default JobContainer;
