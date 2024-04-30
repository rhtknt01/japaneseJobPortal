const CatCard = (props)=>{
    return(
        <div className="catcard">
            <img src={"/public/images/" + props.imgName} alt={props.text}/>
            <p className="title">{props.text}</p>
        </div>
    );
};
export default CatCard;