export default class ProductService {

  //get one product by id
  async fetchOne(id) {
    const response = await fetch(`http://localhost:5000/products/${id}`);
    return response.json();
  }

  //Post new product
  async create(product) {
    const itemResponse = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    return itemResponse.json();
  }

  //fetch request for image
  async createImage( productResponse, formData) {
    const imageResponse = await fetch(
      `http://localhost:5000/products/${itemResponse.insertId}/single`,
      {
        method: "POST",
        body: formData,
      }
    );
    return imageResponse.json();
  }

  delete(id) {
    return fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    
    });
  }
}
