import { createContext, useEffect, useState } from "react";
import { getFurniture, getGrocery, getHomeDecoration, getLaptops, getMen_Shirts, getSmartphones } from "../ProductApi";

export const CategoryContext = createContext();

const CategoryContextProvider = (props) => {
    const [menShirts, setMenShirts] = useState([]);
    const [smartphones, setSmartphones] = useState([]);
    const [decoration, setDecoration] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [furniture, setFurniture] = useState([]);
    const [grocery, setGrocery] = useState([]);

    const [cartProducts, setCartProducts] = useState([]);
    const [sortedList, setSortedList] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const [isInitialized , setIsInitialized ] = useState(true);
    const [showModel, setShowModel] = useState(false);
    const [isDelete, setIsDelete] = useState(null);
    const allProducts = [...menShirts, ...smartphones, ...decoration, ...laptops, ...furniture, ...grocery];


    useEffect(() => {
        const fetchAllData = async () => {
            const [smartphonesData, shirtsData, decorData, laptopsData, furniData, groceryData] = await Promise.all([
                getSmartphones(),
                getMen_Shirts(),
                getHomeDecoration(),
                getLaptops(),
                getFurniture(),
                getGrocery()
            ]);

            setSmartphones(smartphonesData);
            setMenShirts(shirtsData);
            setDecoration(decorData);
            setLaptops(laptopsData);
            setFurniture(furniData);
            setGrocery(groceryData);
        };

        fetchAllData();
    }, []);

    useEffect(() => {
          const cartItems= localStorage.getItem('Product');
          const wishItems = localStorage.getItem('WishedItem');
          if(cartItems || wishItems) {
            setCartProducts(JSON.parse(cartItems));
            setWishlist(JSON.parse(wishItems));
          }
          setIsInitialized(false);
        } , []);
        
    useEffect(() => {
        if(!isInitialized ) {
           localStorage.setItem('Product' , JSON.stringify(cartProducts));
           localStorage.setItem('WishedItem', JSON.stringify(wishlist));
        }
    },[cartProducts ,wishlist, isInitialized]);


    const contextValue = {
        menShirts, setMenShirts,
        smartphones, setSmartphones,
        decoration, setDecoration,
        laptops, setLaptops,
        furniture, setFurniture,
        grocery, setGrocery,
        cartProducts, setCartProducts,
        wishlist, setWishlist,
        sortedList, setSortedList,
        isDelete, setIsDelete,
        showModel, setShowModel,
        allProducts
    }

    return (
        <CategoryContext.Provider value={contextValue}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider; 