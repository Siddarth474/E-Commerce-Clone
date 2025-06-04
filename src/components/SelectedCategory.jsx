import React from 'react'
import DisplayHome from './DisplayHome';
import MenShirts from '../Categories/MenShirts';
import Smartphones from '../Categories/Smartphones';
import HomeDecoration from '../Categories/HomeDecoration';
import Grocery from '../Categories/Grocery';
import Furniture from '../Categories/Furniture';
import Laptops from '../Categories/Laptops';
import { useParams } from 'react-router';


const SelectedCategory = () => {

    const componentMap = {
        '1' : Smartphones,
        '2' : Laptops,
        '3' : MenShirts,
        '4' : Furniture,
        '5' : Grocery,
        '6' : HomeDecoration
    };

    const {id} = useParams();
    const Component = componentMap[id] || DisplayHome; 

  return <Component />;
}

export default SelectedCategory