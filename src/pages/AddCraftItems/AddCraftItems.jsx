import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";

const AddCraftItems = () => {
  const { user } = useAuth() || {};

  const handleAddProduct = (e) => {
    e.preventDefault();

    const image = e.target.image.value;
    const item_name = e.target.item_name.value;
    const subcategory = e.target.subcategory.value;
    const shortDescription = e.target.shortDescription.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const processing_time = e.target.processing_time.value;
    const stockStatus = e.target.stockStatus.value;
    const userName = user.displayName;
    const email = user.email;

    const info = {
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
    };

    fetch("https://y-iwokcgsfg-narzis-nahars-projects.vercel.app/item", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          alert("added to database");
        }
      });

  };

  return (
    <>
      <Helmet>
        <title>CraftDEN|AddForm</title>
      </Helmet>
      <div className="pt-10">
        <div className="shadow-lg p-5 rounded-2xl border dark:bg-[#1a2641d5]">
          <div className="mt-5 mb-8">
            <p className="text-center text-3xl font-semibold">
              <span className="mr-3 text-[#FF497C]">
                <i className="bx bxs-alarm-add"></i>
              </span>
              <span className="dark:text-white">Add Your Craft Item</span>
            </p>
          </div>
          <form onSubmit={handleAddProduct}>
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
                />

                <label className="block mt-4 mb-2 dark:text-white" htmlFor="shortDescription">
                  Short Description
                </label>
                <textarea
                  className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                  placeholder="Enter Short Description"
                  id="shortDescription"
                  name="shortDescription"
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
            <div className="flex gap-8">
              <div className="flex-1">
                {/* Other input fields */}
                <label className="block mt-4 mb-2 dark:text-white" htmlFor="userName">
                  User Name
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                  type="text"
                  placeholder="User Name"
                  id="userName"
                  name="userName"
                  value={user.displayName}
                  readOnly
                />

                <label className="block mt-4 mb-2 dark:text-white" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={user.email}
                  readOnly
                />
              </div>
            </div>

            <input
              className="px-4 w-full py-2 mt-4 rounded hover:bg-purple-800  bg-purple-600 duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Add Item"
            />
          </form>
        </div>

      </div>
    </>
  );
};

export default AddCraftItems;
