import { Helmet } from 'react-helmet-async';
import about from "../../assets/curtain-895x1024.jpg"

const About = () => {


    return (
        <div>
            <Helmet>
                <title>CraftDEN|About</title>
            </Helmet>
          
            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-full'><img src={about} /></div>
                    <div className='w-full'>
                        <h1 className="text-5xl font-bold">Who We Are!</h1>
                        <p className='py-4'>
                            CraftDEN stands proudly as a leading force within the Textile Group, spearheading the export of an array of Textile products spanning Asia, North America, and Europe. Our collective comprises esteemed entities such as Perfect Hometex, Perfect Textiles, Perfect Impex Ltd UK, and Perfect International, all of which uphold the pillars of reputation, reliability, and honesty at their core. We are steadfast in our dedication to meeting customer targets, be it through stringent quality control measures, ensuring timely shipment, or offering competitive pricing strategies. The professionalism demonstrated by both our management and employees remains pivotal in steering the growth and success of the Perfect Group, cementing our position within the business community and paving the path for future endeavors.

                            </p>
                        <button className="btn bg-purple-700 text-white">Explore More</button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default About;
