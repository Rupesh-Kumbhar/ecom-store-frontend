import axiosInstance from "./axios-helper"

export const fetchProducts = async()=>{
    try {
        const response = await axiosInstance.get("/product/viewAll");
        return response.data;
    } catch (error) {
        console.log("Error fetching Products",error)
        throw error;
    }
}