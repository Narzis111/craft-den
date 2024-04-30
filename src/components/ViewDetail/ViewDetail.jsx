import { Helmet } from "react-helmet-async";
import { Fade, Zoom } from "react-reveal";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetail = () => {
    const item = useLoaderData();
    const { id } = useParams();

    console.log(item);

    const {

        image,
        item_name,
        subcategory,
        shortDescription,
        price,
        rating,
        customization,
        processing_time,
        stockStatus,
    } = item;



    return (
        <div>
            <Helmet>
                <title>CraftDEN|View Detail</title>

            </Helmet>
            <div>


                <Zoom><h2 className="text-center lg:text-5xl text-xl font-bold hover:animate-heartBeat-2s transition-transform mt-24">View Detail of Your Selected Item</h2>
                </Zoom>
                <Fade><p className="max-w-[750px] hover:animate-flash-2s text-center mx-auto py-6">Dive deeper into the intricate beauty of CraftDEN textiles on our View Detail page. Explore craftsmanship and stories woven into each piece.</p>
                </Fade>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-[400px] h-[400px]">
                        <img className="w-full h-full" src={image} />
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold">Item Name: {item_name}</h1>
                        <h1>Product Unique Id: {id}</h1>
                        <h1>Category: {subcategory}</h1>
                        <p className="">Detail: {shortDescription}</p>
                        <p className="">Time Required to process: {processing_time} working days</p>

                        <h1>Price: $ {price}</h1>
                        <h1>Availability: {stockStatus}</h1>
                        <h1>Rating: {rating}</h1>
                        <h1>Scope to customize: {customization}</h1>
                        <button className="btn bg-purple-600">Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewDetail;