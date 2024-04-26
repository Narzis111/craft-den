import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2'
const AllItems = ({ item, items, setItems }) => {

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
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Item" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {item_name}</h2>
                    <p>{price}</p>
                    <p>{stockStatus}</p>
                    <p>{rating}</p>
                </div>
                <Link to={`/item/${_id}`}><button className="btn">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AllItems;