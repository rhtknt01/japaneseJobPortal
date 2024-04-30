import { useEffect } from "react";
import Category from "../components/category/category";
import Towns from "../components/category/towns";
import Hero from "../components/hero/hero";
import LatestJobs from "../components/jobs/latestjobs";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Home = () => {

  return (
    <section className="home_section">
      <Hero />
      <Towns />
      <Category />
      <LatestJobs />
    </section>
  );
};

export default Home;
