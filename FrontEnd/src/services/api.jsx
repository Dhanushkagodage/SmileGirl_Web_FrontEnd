import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/products'; // Update with your actual backend URL

// Function to create a new product
async function createProduct(productData) {
  try {
    const response = await axios.post(`${API_BASE_URL}/addproduct`, productData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error.response ? error.response.data : error.message);
    throw error;
  }
}

// Function to get all products
async function getProducts() {
  try {
    const response = await axios.get(`${API_BASE_URL}/getallproducts`);
   // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.response ? error.response.data : error.message);
    throw error;
  }
}

// Function to get a single product
async function getProductByID(productId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/getproductByID/${productId}`);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error.response ? error.response.data : error.message);
    throw error;
  }
}

// Function to update an existing product
async function updateProduct(productId, updatedData) {
  try {
    const response = await axios.put(`${API_BASE_URL}/update/${productId}`, updatedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error.response ? error.response.data : error.message);
    throw error;
  }
}

// Function to delete a product
async function deleteProduct(productId) {
  try {
    const response = await axios.delete(`${API_BASE_URL}/delete/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error.response ? error.response.data : error.message);
    throw error;
  }
}

export { createProduct, getProducts, updateProduct, deleteProduct, getProductByID };
