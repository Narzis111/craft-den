import number from "../../assets/5.jpg";
import middle from "../../assets/6.webp";
import last from "../../assets/7.jpg";
const Contact = () => {
  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={number} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">BE <br />
              INSPIRED</h2>

            <div className="card-actions">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={middle} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">VISIT A <br />
              SHOWROOM</h2>
            <p>Step into our showroom to experience craftsmanship firsthand. Explore unique pieces that tell stories of tradition, innovation, and creativity.</p>
            <div className="card-actions">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={last} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">DESIGNER
              <br /> GALLERY</h2>

            <div className="card-actions">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;