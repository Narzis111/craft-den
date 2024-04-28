import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Fade, Zoom } from "react-reveal";
import { Link, useLoaderData } from "react-router-dom";

const AllItemsTable = () => {

    const loadedItems = useLoaderData();
    const [item, setItem] = useState(loadedItems);

    console.log(item);

    return (
        <>
        <Helmet>
            <title>CraftDEN|ItemTable</title>
        </Helmet>
        <div>
                <Zoom><h2 className="text-center lg:text-5xl text-xl font-bold hover:animate-heartBeat-2s transition-transform mt-24">All Art & Crafts Item Table</h2>
                </Zoom>
                <Fade><p className="max-w-[750px] hover:animate-flash-2s text-center mx-auto py-6">Navigating the CraftDEN Gallery is akin to embarking on a virtual journey through bustling marketplaces and serene workshops, where every click unveils a new masterpiece waiting to be explored. </p>
                </Fade>
                <h1 className="text-center">Total Number of Products: {loadedItems.length}</h1>
            </div>
        <div className="card card-side bg-purple-200 mt-5 text-center">
            
           
            <div className="overflow-x-auto mx-auto">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr>
                            <th></th>
                            <th>Name of item</th>
                            <th>Subcategory</th>
                            <th>Price</th>
                            <th>Action Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item.map((i, index) => <tr key={i._id}>
                                <th>{index + 1}</th>
                                <td>{i.item_name}</td>
                                <td>{i.subcategory}</td>
                                <td>{i.price}</td>
                                <td>
                                    <Link to={`/item/${i._id}`}><button className="btn">View Details</button>
                                    </Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div></>
    );
};

export default AllItemsTable;
