import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { IoLocationOutline } from "react-icons/io5";
import { BiHomeAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
    const { user } = useAuth() || {};
    const [item, setItem] = useState([]);
    const {
        _id,
        image,
        item_name,
        subcategory,
        price,
      
    } = item;
 
    useEffect(() => {
      fetch(`http://localhost:5000/myItems/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data);
        });
    }, [user]);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/item/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // refetch();
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = item.filter(i => i._id !== _id);
                            setItem(remaining);
                        }
                    })

            }
        })

    }
    
  
    return (
      <div className="pt-10">
        
        {
          item?.map((item, index) => ( 
            <div key={index}>
            <div className="card w-90 h-90 bg-base-100 shadow-xl hover:border-2 border-secondary
              border-opacity-30 ">
              <figure><img className="hover:scale-105" src={item.image} alt="" /></figure>
              <div className="card-body">
                <h2 className="card-title hover:underline text-md font-bold">
                  {item.item_name}
                  <div className="badge bg-blue-600 text-white p-3">{item.subcategory}</div>
                </h2>
                <p>{item.shortDescription}</p>
                <div className="card-actions justify-between hover:bg-blue-500 hover:py-3">
                  <div className="badge border-none"><span><IoLocationOutline></IoLocationOutline></span>{item.customization}</div>
                  <div className="badge border-none"><span><BiHomeAlt2></BiHomeAlt2></span>{item.rating}</div>
                  
                  
                </div>
      
      
      
                <div className="items-center card-actions flex">
                  <p>Price: {item.price}</p>
                  <Link to={`/updateItem/${item._id}`}><button>Update</button></Link>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                  
              </div>
      
            </div>
      
          </div>
          
        
      </div>
    ))}</div>);
};

export default MyCart;