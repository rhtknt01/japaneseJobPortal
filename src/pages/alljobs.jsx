import { useSelector } from "react-redux";
import JobListTitle from "../components/jobs/joblisttitle";
import JobContainer from "../components/jobs/jobscontainer";

const AllJobs = ()=>{
    const location = useSelector((state)=>{
        return state.urlMapper.location;
    });
    const category = useSelector((state)=>{
        return state.urlMapper.category;
    });
    return(
        <section className="all_jobs_section">
            <JobListTitle title={`all ${category!=='all'?category:''} jobs in ${location}`} subtitle="すべての仕事"/>
            <JobContainer/>
        </section>
    );
};
export default AllJobs;