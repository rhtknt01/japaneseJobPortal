const CatCard = (props)=>{
    return(
        <div className="catcard">
            <img src={process.env.PUBLIC_URL + "images/" + props.imgName} alt={props.text}/>
            <p className="title">{props.text}</p>
        </div>
    );
};
export default CatCard;