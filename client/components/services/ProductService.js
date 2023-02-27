const BASE_URL = "http://localhost:5000";
export default class ProductService {
  
  //get all where needed = true
  async fetchAllTrue() {
    const response = await fetch(`${BASE_URL}/products?needed=true`);
    return response.json();
  }

   //get all where needed = false
   async fetchAllFalse() {
    const response = await fetch(`${BASE_URL}/products?needed=false`);
    return response.json();
  }

  //get one product by id
  async fetchOne(id) {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    return response.json();
  }

  //Post new product
  async create(product) {
    const productResponse = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    return productResponse.json();
  }

  //fetch request for image
  async createImage( productResponse, formData) {
    const imageResponse = await fetch(
      `${BASE_URL}/products/${itemResponse.insertId}/single`,
      {
        method: "POST",
        body: formData,
      }
    );
    return imageResponse.json();
  }

  delete(id) {
    return fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    
    });
  }
}
