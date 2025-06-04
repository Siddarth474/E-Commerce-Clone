
export const getMen_Shirts = async () => {
    try {
      const response1 = await fetch('https://dummyjson.com/products/category/mens-shirts');
      const data1 = await response1.json();
      return data1.products;

    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
};

export const getSmartphones = async () => {
    try {
      const response2 = await fetch('https://dummyjson.com/products/category/smartphones');
      const data2 = await response2.json();
      return data2.products;
      
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
};

export const getHomeDecoration = async () => {
  try {
    const response3 = await fetch('https://dummyjson.com/products/category/home-decoration');
    const data3 = await response3.json();
    return data3.products;
    
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getGrocery = async () => {
    try {
      const response4 = await fetch('https://dummyjson.com/products/category/groceries');
      const data4 = await response4.json();
      return data4.products;
      
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
};

export const getFurniture = async () => {
    try {
      const response5 = await fetch('https://dummyjson.com/products/category/furniture');
      const data5 = await response5.json();
      return data5.products;
      
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
};

export const getLaptops = async () => {
    try {
      const response6 = await fetch('https://dummyjson.com/products/category/laptops');
      const data6 = await response6.json();
      return data6.products;
      
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
};
  