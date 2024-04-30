const Error = ()=>{
    return(
        <div className="error_page">
            <p className="aboutus_header">Oops! nothing here...</p>
            <img src={process.env.PUBLIC_URL + "images/error.png"} alt="not fount" />
        </div>
    );
};
export default Error;