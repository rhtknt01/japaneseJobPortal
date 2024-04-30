const About = ()=>{
    return(
        <div className="aboutus_section">
            <p className="aboutus_heading aboutus_header">
                our vision
            </p>
            <p className="aboutus_details">Welcome to Japanese Work Opportunities, your trusted partner for exploring career opportunities in Japan. Our mission is to bridge the gap between job seekers and employers, providing comprehensive support throughout the employment journey. With our deep understanding of the Japanese job market and commitment to client satisfaction, we strive to make the process of finding employment in Japan as smooth and rewarding as possible.</p>
            <div className="aboutus_news_box">
                <p className="aboutus_news_box_heading aboutus_header">
                    in the news
                </p>
                <div className="aboutus_news_box_imgbox">
                    <img src={process.env.PUBLIC_URL + "images/news_img1.jpg"} alt="news_img1" />
                    <img src={process.env.PUBLIC_URL + "images/news_img2.jpg"} alt="news_img2" />
                    <img src={process.env.PUBLIC_URL + "images/news7.jpg"} alt="news_img3" />
                    <img src={process.env.PUBLIC_URL + "images/news_img4.jpg"} alt="news_img4" />
                </div>
            </div>
            <p className="aboutus_header">
                meet the team
            </p>
            <div className="aboutus_teambox">
                <div className="aboutus_teambox_imgbox">
                    <img src={process.env.PUBLIC_URL + "images/person3.avif"} alt="restro" />
                    <div className="aboutus_teambox_imgbox_contentbox">
                        <span className="teambox_name title">John Doe</span>
                        <p className="teambox_info">John is the founder and CEO of our company. With over 10 years of experience in the industry, he leads our team with passion and dedication. He has a strong vision for the company's growth and is committed to delivering exceptional results to our clients.</p>
                    </div>
                </div>
                <div className="aboutus_teambox_imgbox">
                    <img src={process.env.PUBLIC_URL + "images/person1.avif"} alt="restro" />
                    <div className="aboutus_teambox_imgbox_contentbox">
                        <span className="teambox_name title">Jane Smith</span>
                        <p className="teambox_info">Jane is our Chief Technology Officer. She is a seasoned tech expert with a background in software engineering. With her extensive knowledge and innovative mindset, she spearheads the development of cutting-edge solutions for our clients. Jane is known for her problem-solving skills and ability to lead teams to success.</p>
                    </div>
                </div>
                <div className="aboutus_teambox_imgbox">
                    <img src={process.env.PUBLIC_URL + "images/person2.avif"} alt="restro" />
                    <div className="aboutus_teambox_imgbox_contentbox">
                        <span className="teambox_name title">David Brown</span>
                        <p className="teambox_info">David is our Lead Developer, responsible for architecting and implementing robust software solutions. With a passion for coding and a keen eye for detail, he ensures that our projects are delivered on time and exceed expectations. David thrives in challenging environments and is always eager to learn and adopt new technologies.</p>
                    </div>
                </div>
            </div>
            <p className="aboutus_header">
                culture and traditions
            </p>
            <p className="aboutus_details">Immerse yourself in the rich tapestry of Japanese culture and traditions.</p>
            <div className="aboutus_culture_imgbox">
                <img src={process.env.PUBLIC_URL + "images/japan_etiquetts.jpg"} alt="etiquettes" />
                <img src={process.env.PUBLIC_URL + "images/festival.jpg"} alt="festival" />
                <img src={process.env.PUBLIC_URL + "images/japan_city.jpg"} alt="japancity" />
                <img src={process.env.PUBLIC_URL + "images/busy_city.jpg"} alt="busy_city" />


            </div>
        </div>
    );
};
export default About;