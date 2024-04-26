import { useLoaderData } from "react-router-dom";
import Carousal from "../components/Carousal/Carousal";
import { useState } from "react";
import AllItems from "../components/AllItems/AllItems";


const Home = () => {
    const loadedItems = useLoaderData();
    const [items, setItems] = useState(loadedItems);
    return (
        <div>
            <Carousal></Carousal>
            <div>
                <h1>Total Items in the Database: {loadedItems.length}</h1>
                <div className='grid md:grid-cols-2 gap-4'>


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



        </div>
    );
};

export default Home;