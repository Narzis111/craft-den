// import { useEffect, useState } from "react";
import { Fade, Zoom } from "react-reveal";
import { Link, useLoaderData, useParams } from "react-router-dom";

const DetailCat = () => {
    const catItems = useLoaderData();
    const { catID } = useParams();
    console.log(catItems);

    return (
        <div>
            <div className="text-center">
                <Zoom><h2 className="text-center lg:text-5xl text-xl font-bold hover:animate-heartBeat-2s transition-transform mt-24">Category wise Item Collection</h2>
                </Zoom>
                <Fade><p className="max-w-[750px] hover:animate-flash-2s text-center mx-auto py-6">
                    Browse our CraftDEN category-wise item list for easy navigation and discover curated selections of crafts from around the world.</p>
                </Fade>
                <h1 className="font-bold mb-6">In this Category we have {catItems.length} items</h1>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {catItems.map((item) => (
                    <div key={item._id}>
                        <div className="card card-side bg-base-100 shadow-xl mb-4 border-2 border-purple-400">
                            <div className="w-[400px] h-[300px] p-6">
                                <img className="w-full h-full" src={item.image} />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">Product Name: {item.item_name}</h2>
                                <h3 className="card-title font-bold">Category: {item.category}</h3>
                                <p>Product Detail: {item.shortDescription}</p>
                             
                                <p>Rating: {item.rating}</p>
                                <p>Total Time Required: {item.processing_time}</p>
                                <div className="card-actions justify-end">
                                    <p className="font-bold">Price: $ {item.price}</p>
                                </div>
                                <div className="items-center card-actions flex">

                                    <Link to={`/item/${item._id}`}><button className="bg-purple-600 p-4 rounded-md text-white">View Detail</button></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default DetailCat;
