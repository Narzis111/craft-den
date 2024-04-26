import { useLoaderData, useParams } from "react-router-dom";

const ViewDetail = () => {
    const item = useLoaderData();
    const { id } = useParams();

    console.log(item, id);

    const {
        _id,
        image,
        item_name,
        subcategory,
        shortDescription,
        price,
        rating,
        customization,
        processing_time,
        stockStatus,
        userName,
        email,
    } = item;


    return (
        <div>
            <h1>ami aasi view detail: {id}</h1>

            <h1>ami aasi view detail: {shortDescription}</h1>
            <h1>ami aasi view detail: {processing_time}</h1>
            <h1>ami aasi view detail: {price}</h1>
            <h1>ami aasi view detail: {stockStatus}</h1>
            <h1>ami aasi view detail: {rating}</h1>
            <h1>ami aasi view detail: {customization}</h1>
        </div>
    );
};

export default ViewDetail;