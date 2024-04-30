import {useDispatch, useSelector} from "react-redux";
import { setFormKeyword,setFormLocation } from "../../app/features/urlMapper";
const SearchBox = () => {
  let formKeyword = useSelector((state)=>{
    return state.urlMapper.formKeyword;
  });
  let formLocation = useSelector((state)=>{
    return state.urlMapper.formLocation;
  });
  const dispatch = useDispatch();

  const handleSubmit = (e)=>{
    e.preventDefault();
    e.target[0].value='';
    e.target[1].value='';
  };
  const handleLocChange = (e)=>{
    dispatch(setFormLocation(e.target.value));
  };
  const handleKeyChange = (e)=>{
    dispatch(setFormKeyword(e.target.value));
  };
  return (
    <section className="searchbox">
      <form onSubmit={handleSubmit} className="form_area">
        <h3 className="bigtitle">search job</h3>
        <div className="form_group">
          <label className="title" htmlFor="title">
            job title <span>*</span>
          </label>
          <input
            type="text"
            className="input"
            id="title"
            name="title"
            placeholder="keyword or category"
            required
            maxLength={20}
            onChange={handleKeyChange}
          />
        </div>

        <div className="form_group">
          <label className="title" htmlFor="location">
            job location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="city or state"
            required
            maxLength={50}
            className="input"
            onChange={handleLocChange}
          />
        </div>
        <input type="submit" value="search job" className="btn" name="search" />
        
      </form>
    </section>
  );
};
export default SearchBox;
