import Heading from "./Heading"
import { t1,t2,t3,t4,t5,t6,t7,t8 } from "../../../assets/images";


const TeamsLogo = () => {
   const logos = [t1,t2,t3,t4,t5,t6,t7,t8];

    return (
        <div className="py-8">
            <Heading text1="The" text2="teams" />
            <div className="flex overflow-x-auto whitespace-nowrap gap-5 p-4 scroll-smooth cursor-grab">
                {logos.map((logo, index) => (
                    <img key={index}
                         src={logo}
                         alt={`Team ${index + 1}`}
                         className="w-20 flex-shrink-0 object-contain"
                    />
                ))}
            </div>
        </div>
    )
}

export default TeamsLogo;