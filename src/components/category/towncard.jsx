import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TownCard = () => {
  const pageid = useSelector((state) => {
    return state.urlMapper.pageid;
  });
  const img_list = [
    { id: 1,name:"tokyo", web_name: "cat_tokyo.png" },
    { id: 2,name:"beppu", web_name: "cat_beppu.png" },
    { id: 3,name:"hiroshima", web_name: "cat_hiroshima.png" },
    { id: 4,name:"osaka", web_name: "cat_osaka.png" },
    { id: 5,name:"nagoya", web_name: "cat_nagoya.png" },
    { id: 6,name:"nara", web_name: "cat_nara.png" },
    { id: 7,name:"yokohama", web_name: "cat_yokohama.png" },
    { id: 8,name:"sapporo", web_name: "cat_sapporo.png" },
  ];
  return img_list.map((imgItem) => {
    return (
      <Link to={`/alljobs/${imgItem.name}/${pageid}`}>
      <div className="town_card" key={imgItem.name}>
        <img src={"/public/images/" + imgItem.web_name} alt={imgItem.name} />
        <p className="title">{imgItem.name}</p>
      </div>
      </Link>
    );
  });
};
export default TownCard;
