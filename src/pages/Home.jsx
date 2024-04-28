import { useLoaderData } from "react-router-dom";
import Carousal from "../components/Carousal/Carousal";
import { useState } from "react";
import AllItems from "../components/AllItems/AllItems";
import Zoom from 'react-reveal/Zoom';
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Category from "../Category/Category";


const Home = () => {
    const loadedItems = useLoaderData();
    const [items, setItems] = useState(loadedItems);

      
    return (
        <div>
            <Carousal></Carousal>
            <div>
          
            
              <Zoom><h1 className="">
            
         Total Items
        </h1></Zoom>
        <p>{loadedItems.length}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>


                    {
                        items.slice(0, 6).map(item => <AllItems
                            key={item._id}
                            item={item}
                            items={items}
                            setItems={setItems}

                        ></AllItems>)
                    }
                </div>
            </div>
            <Category></Category>
            <About></About>
            <Contact></Contact>



        </div>
    );
};

export default Home;