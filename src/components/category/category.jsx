import CatCard from "./catcard";
import Button from "../buttons/button";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";

const Category = () => {
  const pageid = useSelector((state) => {
    return state.urlMapper.pageid;
  });
  const location = useSelector((state) => {
    return state.urlMapper.location;
  });
  const img_list = [
    { id: "1", imgName: "accounting.png", text: "accounting" },
    { id: "2", imgName: "architect.png", text: "construction" },
    { id: "3", imgName: "budget.png", text: "finance" },
    { id: "4", imgName: "electrical.png", text: "electrical" },
    { id: "5", imgName: "engineering.png", text: "engineering" },
    { id: "6", imgName: "healthcare.png", text: "healthcare" },
    { id: "7", imgName: "management.png", text: "management" },
    { id: "8", imgName: "restro.png", text: "restaurant" },
    { id: "9", imgName: "software.png", text: "Technology" },
    { id: "10", imgName: "teaching.png", text: "teaching" },
    { id: "11", imgName: "electronic.png", text: "electronics" },
    { id: "12", imgName: "consultant.png", text: "consulting" },
  ];
  return (
    <section className="job_category">
      <div className="inner_section">
        {img_list.map((imgItem) => (
          <Link to={`/alljobs/${location}/${imgItem.text}/${pageid}`}>
            <CatCard
              key={imgItem.text}
              imgName={imgItem.imgName}
              text={imgItem.text}
            />
          </Link>
        ))}
      </div>
      <Link to={`/alljobs/${location}/${pageid}`}>
      <div className="button_container">
        <Button text="all jobs" />
      </div>
      </Link>
      
    </section>
  );
};
export default Category;
