export default class ProductService {
  //get one product by id
  async fetchOne(id) {
    const response = await fetch(`http://localhost:5000/products/${id}`);
    return response.json();
  }
}
