import img11 from "../../assets/2.webp";
import img12 from "../../assets/Printed-Bed-Set.jpg";
import img13 from "../../assets/7008615_CD_25752_2000w-2000-9b65439c9d44418bb8879a038b9b4b4e.jpg";
import { Zoom } from "react-reveal";

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

                      
            <div className="absolute p-6 lg:top-0 md:top-0 top-0 left-20 md:max-w-[750px] md:mx-auto lg:left-0 lg:right-0 transform translate-y-full">
                <Zoom><h1 className="text-7xl bg-slate-100 rounded-xl p-0 text-purple-600 text-center font-extrabold hover:animate-flash-2s">Crafted to Smile</h1>
                 </Zoom>
                <div className="justify-center mt-5 gap-3 flex-col md:flex-row items-center text-center">

                    <button className="bg-purple-600 px-4 py-3 rounded-full text-white">Explore Us</button>

                    

                </div>
            </div>

        </div></>


    );
};

export default Carousal;

               