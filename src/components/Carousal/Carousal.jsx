// import { Swiper } from "swiper/react";
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

            <div className="absolute rounded-lg lg:max-w-[1180px] max-w-[280px] p-6 lg:top-0 md:top-40 top-0 left-20 md:max-w-[750px] md:mx-auto lg:left-0 lg:right-0 transform translate-y-full md:left-8 md:right-8 px-2 md:py-10">
                <h1 className="text-white text-xl mb-3 md:text-3xl text-center font-semibold hover:animate-flash-2s">Crafted to Smile</h1>
                
                <div className="flex justify-center gap-3 flex-col md:flex-row items-center text-center">

                    <div>
                        <label className="input hidden px-5 md:hidden input-bordered rounded-none lg:flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.92 122.88" fill="currentColor" className="w-6 h-6 text-orange-600"><path d="M108.68,122.88H11.24A11.28,11.28,0,0,1,0,111.64V22.55A11.28,11.28,0,0,1,11.24,11.31H21.61V25.14a12.35,12.35,0,0,0,4.67,9.61,14.55,14.55,0,0,0,18.31,0,12.35,12.35,0,0,0,4.67-9.61V11.31H70.2V25.14a12.35,12.35,0,0,0,4.67,9.61,14.55,14.55,0,0,0,18.31,0,12.35,12.35,0,0,0,4.67-9.61V11.31h10.83a11.3,11.3,0,0,1,11.24,11.24v89.09a11.27,11.27,0,0,1-11.24,11.24ZM83.58,56.77h16.1a2.07,2.07,0,0,1,2.06,2v13.4a2.07,2.07,0,0,1-2.06,2H83.58a2.06,2.06,0,0,1-2-2V58.82a2.05,2.05,0,0,1,2-2Zm-31.51,0H68.18a2.06,2.06,0,0,1,2,2v13.4a2.07,2.07,0,0,1-2,2H52.07a2.06,2.06,0,0,1-2-2V58.82a2.06,2.06,0,0,1,2-2Zm-31.84,0H36.34a2.06,2.06,0,0,1,2,2v13.4a2.07,2.07,0,0,1-2,2H20.23a2.06,2.06,0,0,1-2.05-2V58.82a2.05,2.05,0,0,1,2.05-2ZM83.58,85.26h16.1a2.07,2.07,0,0,1,2.06,2v13.4a2.06,2.06,0,0,1-2.06,2.05H83.58a2.06,2.06,0,0,1-2-2.05V87.31a2.06,2.06,0,0,1,2-2Zm-31.51,0H68.18a2.06,2.06,0,0,1,2,2v13.4a2.06,2.06,0,0,1-2,2.05H52.07a2.06,2.06,0,0,1-2-2.05V87.31a2.07,2.07,0,0,1,2-2Zm-31.84,0H36.34a2.06,2.06,0,0,1,2,2v13.4a2.06,2.06,0,0,1-2,2.05H20.23a2.06,2.06,0,0,1-2.05-2.05V87.31a2.06,2.06,0,0,1,2.05-2ZM78.6,4.45C78.6,2,81,0,84,0s5.43,2,5.43,4.45V25.14c0,2.46-2.42,4.45-5.43,4.45s-5.42-2-5.42-4.45V4.45ZM30,4.45C30,2,32.44,0,35.44,0s5.42,2,5.42,4.45V25.14c0,2.46-2.42,4.45-5.42,4.45S30,27.6,30,25.14V4.45ZM3.6,43.86v66.58a8.87,8.87,0,0,0,8.84,8.84h95a8.87,8.87,0,0,0,8.85-8.84V43.86Z" /></svg>
                            <input type="text" className="grow" placeholder="Mark visit with agent" />
                        </label>
                    </div>
                    <div>
                        <label className="input input-bordered rounded-none flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.92 122.88" fill="currentColor" className="w-6 h-6 text-orange-600"><path d="M108.68,122.88H11.24A11.28,11.28,0,0,1,0,111.64V22.55A11.28,11.28,0,0,1,11.24,11.31H21.61V25.14a12.35,12.35,0,0,0,4.67,9.61,14.55,14.55,0,0,0,18.31,0,12.35,12.35,0,0,0,4.67-9.61V11.31H70.2V25.14a12.35,12.35,0,0,0,4.67,9.61,14.55,14.55,0,0,0,18.31,0,12.35,12.35,0,0,0,4.67-9.61V11.31h10.83a11.3,11.3,0,0,1,11.24,11.24v89.09a11.27,11.27,0,0,1-11.24,11.24ZM83.58,56.77h16.1a2.07,2.07,0,0,1,2.06,2v13.4a2.07,2.07,0,0,1-2.06,2H83.58a2.06,2.06,0,0,1-2-2V58.82a2.05,2.05,0,0,1,2-2Zm-31.51,0H68.18a2.06,2.06,0,0,1,2,2v13.4a2.07,2.07,0,0,1-2,2H52.07a2.06,2.06,0,0,1-2-2V58.82a2.06,2.06,0,0,1,2-2Zm-31.84,0H36.34a2.06,2.06,0,0,1,2,2v13.4a2.07,2.07,0,0,1-2,2H20.23a2.06,2.06,0,0,1-2.05-2V58.82a2.05,2.05,0,0,1,2.05-2ZM83.58,85.26h16.1a2.07,2.07,0,0,1,2.06,2v13.4a2.06,2.06,0,0,1-2.06,2.05H83.58a2.06,2.06,0,0,1-2-2.05V87.31a2.06,2.06,0,0,1,2-2Zm-31.51,0H68.18a2.06,2.06,0,0,1,2,2v13.4a2.06,2.06,0,0,1-2,2.05H52.07a2.06,2.06,0,0,1-2-2.05V87.31a2.07,2.07,0,0,1,2-2Zm-31.84,0H36.34a2.06,2.06,0,0,1,2,2v13.4a2.06,2.06,0,0,1-2,2.05H20.23a2.06,2.06,0,0,1-2.05-2.05V87.31a2.06,2.06,0,0,1,2.05-2ZM78.6,4.45C78.6,2,81,0,84,0s5.43,2,5.43,4.45V25.14c0,2.46-2.42,4.45-5.43,4.45s-5.42-2-5.42-4.45V4.45ZM30,4.45C30,2,32.44,0,35.44,0s5.42,2,5.42,4.45V25.14c0,2.46-2.42,4.45-5.42,4.45S30,27.6,30,25.14V4.45ZM3.6,43.86v66.58a8.87,8.87,0,0,0,8.84,8.84h95a8.87,8.87,0,0,0,8.85-8.84V43.86Z" /></svg>
                            <input type="text" className="grow" placeholder="Select your date" />
                        </label>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="1500">
                        <label className="input input-bordered rounded-none flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 text-orange-600"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            <input type="text" className="grow" placeholder="Find your suitable place" />
                        </label>
                    </div>

                    <div className="indicator">
                        <button className="btn join-item rounded-none bg-orange-600 text-white border-none">Reservation</button>
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
               