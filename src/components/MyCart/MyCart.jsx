import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const { user } = useAuth() || {};
  const [items, setItems] = useState([]);
  const [filterOption, setFilterOption] = useState("All");

  useEffect(() => {
    fetch(`https://y-iwokcgsfg-narzis-nahars-projects.vercel.app/myItems/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
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
         fetch(`https://y-iwokcgsfg-narzis-nahars-projects.vercel.app/item/${_id}`, {
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
              const remaining = items.filter(i => i._id !== _id);
              setItems(remaining);
            }
          })

      }
    })

  }

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  }

  const filteredItems = items.filter(item => {
    if (filterOption === "All") {
      return true;
    } else {
      return item.customization === filterOption;
    }
  });

  return (
    <>
    <Helmet>
      <title>CraftDEN|MyCart</title>
    </Helmet>
    <div className="pt-10">
      <div className="flex justify-center mb-4">
        <label htmlFor="filter" className="mr-2">Filter by Customization:</label>
        <select id="filter" value={filterOption} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      {filteredItems.map((item, index) => (
        <div key={index}>
          <div className="card card-side bg-base-100 shadow-xl mb-4 border-2 border-purple-400">
  <div className="w-[400px] h-[300px] p-6">
  <img className="w-full h-full" src={item.image}/>
  </div>
  <div className="card-body">
    <h2 className="card-title">{item.item_name}</h2>
    <h2 className="card-title">{item.category}</h2>
    <p>Product Detail: {item.shortDescription}</p>
    <p>Rating: {item.rating}</p>
    <p>Total Time Required: {item.processing_time}</p>
    <div className="card-actions justify-end">
     <button className="btn btn-primary">Add to Cart</button>
    </div>
    <div className="items-center card-actions flex">
                <p className="font-bold">Price: $ {item.price}</p>
                <Link to={`/updateItem/${item._id}`}><button className="bg-purple-600 p-4 rounded-md text-white">Update</button></Link>
                <button className="bg-red-600 p-4 rounded-md text-white" onClick={() => handleDelete(item._id)}>Delete</button>

              </div>
  </div>
</div>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default MyCart;
