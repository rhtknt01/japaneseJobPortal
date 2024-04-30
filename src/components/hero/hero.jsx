import SearchBox from "../forms/searchbox";
const Hero = ()=>{
    return(
        <section className="hero">
            <div className="group">
            <div className="slogan">
                <p>Foreigner Friendly</p>
                <p>job in japan</p>
            </div>
            <SearchBox/>
            </div>
            {/* <img src={process.env.PUBLIC_URL + "images/sign_in."} alt="banner" /> */}
        </section>
    );
};
export default Hero;