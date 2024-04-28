import { useLoaderData } from "react-router-dom";
import Carousal from "../components/Carousal/Carousal";
import { useState } from "react";
import AllItems from "../components/AllItems/AllItems";
import Zoom from 'react-reveal/Zoom';
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Category from "../components/Category/Category";
import { Fade } from "react-reveal";


const Home = () => {
    const loadedItems = useLoaderData();
    const [items, setItems] = useState(loadedItems);


    return (
        <div>
            <Carousal></Carousal>
            <div>
                <Zoom><h2 className="text-center lg:text-5xl text-xl font-bold hover:animate-heartBeat-2s transition-transform mt-24">Our Craft Gallery</h2>
                </Zoom>
                <Fade><p className="max-w-[750px] hover:animate-flash-2s text-center mx-auto py-6">Navigating the CraftDEN Gallery is akin to embarking on a virtual journey through bustling marketplaces and serene workshops, where every click unveils a new masterpiece waiting to be explored. </p>
                </Fade>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">



                {
                    items.slice(0, 6).map(item => <AllItems
                        key={item._id}
                        item={item}
                        items={items}
                        setItems={setItems}

                    ></AllItems>)
                }

            </div>
            <div>
                <Zoom><h2 className="text-center lg:text-5xl text-xl font-bold hover:animate-heartBeat-2s transition-transform mt-24">Art & Craft Categories View</h2>
                </Zoom>
                <Fade><p className="max-w-[750px] hover:animate-flash-2s text-center mx-auto py-6">
                    CraftDEN online gallery is a vibrant tapestry of artisanal wonders, showcasing a diverse array of crafts from around the globe. With a meticulously curated selection, the gallery celebrates traditional craftsmanship alongside contemporary innovations, offering a kaleidoscope of creativity. From intricately woven textiles to hand-carved woodwork, each piece tells a story of skill, culture, and passion.</p>
                </Fade>
            </div>
            <Category></Category>
            <About></About>
            <Contact></Contact>



        </div>
    );
};

export default Home;