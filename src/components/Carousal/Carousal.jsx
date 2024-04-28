import img11 from "../../assets/2.webp";
import img12 from "../../assets/Printed-Bed-Set.jpg";
import img13 from "../../assets/7008615_CD_25752_2000w-2000-9b65439c9d44418bb8879a038b9b4b4e.jpg";

const Carousal = () => {
   
 return(         
<>

        <div className="carousel w-full mt-5 z-10">
            <div id="slide1" className="carousel-item relative w-full h-[400px]">
                <img src={img11} className="w-full rounded-lg object-cover" />
                <div className="absolute flex justify-center bottom-0 left-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full h-[400px]">
                <img src={img12} className="w-full object-cover rounded-lg" />
                <div className="absolute flex justify-center bottom-0 left-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full h-[400px]">
                
                <img src={img13} className="w-full h-full object-cover rounded-lg" />
                
                    
                    <div className="absolute flex justify-center bottom-0 left-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div className="absolute rounded-lg lg:max-w-[400px] p-6 bg-black lg:top-0 md:top-40 top-0 left-20 md:max-w-[750px] md:mx-auto lg:left-0 lg:right-0 transform translate-y-full">
                <h1 className="text-white text-xl mb-3 md:text-3xl text-center font-semibold hover:animate-flash-2s">Crafted to Smile</h1>
                
                <div className="flex justify-center gap-3 flex-col md:flex-row items-center text-center">

                    <div>
                        <label className="input input-bordered rounded-none flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="rounded-lg w-6 h-6 text-orange-600"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            <input type="text" className="grow" placeholder="Search your wish" />
                        </label>
                    </div>

                    

                </div>
            </div>

        </div></>


    );
};

export default Carousal;

{/* <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    {/* Add more SwiperSlides as needed */}
               