import Carousal from "../components/Carousal/Carousal";

const Home = () => {
    return (
        <div>
          <Carousal></Carousal>
          <div>
                <h2 className="text-center lg:text-3xl text-xl font-bold hover:animate-heartBeat-2s transition-transform mt-24">Estates Corner</h2>
                <p className="max-w-[750px] hover:animate-flash-2s text-center mx-auto py-6">Skyline Realty is dedicated to providing exceptional estates that redefine luxury living. Our portfolio boasts a diverse range of meticulously curated properties, each crafted with the highest standards of design, quality, and innovation. </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


                    {/* {
                        assets.map(asset => <SingleCard
                            key={asset.id}
                            asset={asset}></SingleCard>)
                    } */}
                </div>

            </div>
        </div>
    );
};

export default Home;