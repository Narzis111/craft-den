import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


const AllItems = ({ item }) => {

    const {
        _id,
        image,
        item_name,
        price,
        rating, stockStatus,
       
    } = item;


  

    return (
        <div className="card card-side bg-base-100 shadow-xl border-2 border-slate-300 hover:border-secondary">
            <div className="w-[400px] p-4">
            <img className='w-full h-full object-fit hover:scale-105' src={image} alt="Item" />
            </div>
            <div className="flex justify-between w-full p-4">
                <div className='space-y-2'>
                    <h2 className="card-title hover:underline">Name: {item_name}</h2>
                    <p>Price: <span className='font-bold'>$ {price}</span></p>
                    <p>Availability: {stockStatus}</p>
                    <p>Rating: {rating}</p>
                    <Link to={`/item/${_id}`}><button className="btn mt-2 bg-purple-600">View Details</button>
                </Link>
                </div>
            
            </div>
        </div>
    );
};

export default AllItems;
AllItems.propTypes = {
    item: PropTypes.object,
    items: PropTypes.object,
    setItem: PropTypes.array,
  }