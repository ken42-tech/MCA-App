import { IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import "./style.css";

interface HeadingProps {
  text1: string;
  text2: string;
  showIcon?: boolean;
}


const Heading:React.FC<HeadingProps> = ({text1,text2,showIcon})=>{

    return(
        <div className="flex justify-between items-center p-4">
           <h1 className='text-3xl font-semibold'>{text1} <span className="gradient-text">{text2}</span></h1>
            {showIcon && <IonIcon icon={arrowForwardOutline} className="w-8 h-8"/>}
        </div>
    );
};


export default Heading;