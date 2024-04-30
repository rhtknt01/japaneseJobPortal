import TownCard from "./towncard";
import Button from "../buttons/button";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";


const Towns = ()=>{
    const pageid = useSelector((state) => {
        return state.urlMapper.pageid;
      });
      const location = useSelector((state) => {
        return state.urlMapper.location;
      });
      const category = useSelector((state) => {
        return state.urlMapper.category;
      });
    return(
        <section className="city">
            <div className="section_inner">
                <h2 className="head_title">find job in famous japanese city</h2>
                <div className="town_container">
                    <TownCard/>
                </div>
            <Link to={`/alljobs/${location}/${category}/${pageid}`}>

            <div className="button_container">
            <Button text="find jobs"/>
            </div>
            </Link>
            </div>
        </section>
    );
};
export default Towns;