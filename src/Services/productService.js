import axiosInstance, { http } from "./axios-helper"

export const fetchProducts = async()=>{
    try {
        const response = await axiosInstance.get("/product/viewAll");
        return response.data;
    } catch (error) {
        console.log("Error fetching Products",error)
        throw error;
    }
}

export const loadSingleProduct= (product_id)=>{
    return http.get(`/product/view/${product_id}`).then((response)=>response.data );
}