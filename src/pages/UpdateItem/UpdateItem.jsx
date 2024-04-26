import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateItem = () => {

    const item = useLoaderData();
    const { _id,
        image,
        item_name,
        subcategory,
        shortDescription,
        price,
        rating,
            processing_time,
      
         } = item;

         const handleUpdateItem = (e) => {
            e.preventDefault();
            console.log(e);
        
            const image = e.target.image.value;
            const item_name = e.target.item_name.value;
            const subcategory = e.target.subcategory.value;
            const shortDescription = e.target.shortDescription.value;
            const price = e.target.price.value;
            const rating = e.target.rating.value;
            const customization = e.target.customization.value;
            const processing_time = e.target.processing_time.value;
            const stockStatus = e.target.stockStatus.value;
           
        
            const updateItem = {
              image,
              item_name,
              subcategory,
              shortDescription,
              price,
              rating,
              customization,
              processing_time,
              stockStatus,
             
            };
            console.log(updateItem);
        
        // send data to the server
        fetch(`http://localhost:5000/item/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
        
          return (
            <div className="gadgetContainer pt-10">
              <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
                <div className="mt-5 mb-8">
                  <p className="text-center text-3xl font-semibold">
                    <span className="mr-3 text-[#FF497C]">
                      <i className="bx bxs-alarm-add"></i>
                    </span>
                    <span className="dark:text-white">Update Your Craft Item</span>
                  </p>
                </div>
                <form onSubmit={handleUpdateItem}>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <label className="block mb-2 dark:text-white" htmlFor="image">
                        Image URL
                      </label>
                      <input
                        className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                        type="text"
                        placeholder="Enter Image URL"
                        id="image"
                        name="image"
                        defaultValue={image}
                      />
        
                      <label className="block mt-4 mb-2 dark:text-white" htmlFor="item_name">
                        Item Name
                      </label>
                      <input
                        className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                        type="text"
                        placeholder="Enter Item Name"
                        id="item_name"
                        name="item_name"
                        defaultValue={item_name}
                      />
        
                      <label className="block mt-4 mb-2 dark:text-white" htmlFor="subcategory">
                        Subcategory Name
                      </label>
                      <input
                        className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                        type="text"
                        placeholder="Enter Subcategory Name"
                        id="subcategory"
                        name="subcategory"
                        defaultValue={subcategory}
                      />
        
                      <label className="block mt-4 mb-2 dark:text-white" htmlFor="shortDescription">
                        Short Description
                      </label>
                      <textarea
                        className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                        placeholder="Enter Short Description"
                        id="shortDescription"
                        name="shortDescription"
                        defaultValue={shortDescription}
                      ></textarea>
                    </div>
                    <div className="flex-1">
                      <label className="block mb-2 dark:text-white" htmlFor="price">
                        Price
                      </label>
                      <input
                        className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                        type="text"
                        placeholder="Enter Price"
                        id="price"
                        name="price"
                        defaultValue={price}
                      />
        
                      <label className="block mt-4 mb-2 dark:text-white" htmlFor="rating">
                        Rating
                      </label>
                      <input
                        className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                        type="number"
                        placeholder="Enter Rating"
                        id="rating"
                        name="rating"
                        defaultValue={rating}
                      />
        
                      <label className="block mt-4 mb-2 dark:text-white" htmlFor="customization">
                        Customization
                      </label>
                      <select
                        name="customization"
                        id="customization"
                        className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                     
                      </select>
        
                      <label className="block mt-4 mb-2 dark:text-white" htmlFor="processing_time">
                        Processing Time
                      </label>
                      <input
                        className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                        type="text"
                        placeholder="Enter Processing Time"
                        id="processing_time"
                        name="processing_time"
                        defaultValue={processing_time}
                      />
        
                      <label className="block mt-4 mb-2 dark:text-white" htmlFor="stockStatus">
                        Stock Status
                      </label>
                      <select
                        name="stockStatus"
                        id="stockStatus"
                        className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                      >
                        <option value="In stock">In stock</option>
                        <option value="Made to Order">Made to Order</option>
                      </select>
                    </div>
                  </div>
                 
                
                  <input 
                    className="px-4 w-full py-2 mt-4 rounded hover:bg-[#3182ab]  bg-[#5893b5] duration-200 text-white cursor-pointer font-semibold"
                    type="submit"
                    value="Update Item"
                    />
                </form>
              </div>
             
            </div>
          );
        };

export default UpdateItem;