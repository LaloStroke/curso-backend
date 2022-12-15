import faker from "faker";

class productsService {
  products: any[];
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        productId: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        description: faker.commerce.productDescription()
      });
    }
  }
  getOne(productId: string) {
    const index = this.products.findIndex((item) => item.productId === productId);
    if (index === -1) {
      throw new Error("Product not found :c");
    }
    return this.products.find((item) => item.productId === productId);
  }

  get() {
    return this.products;
  }
  create(body: any) {
    const newProduct = {
      productId: faker.datatype.uuid(),
      ...body
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(productId: string, changes: any) {
    const index = this.products.findIndex((item) => item.productId === productId);
    if (index === -1) {
      throw new Error("Product not found");
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  delete(productId: string) {
    const index = this.products.findIndex((item) => item.productId === productId);
    if (index === -1) {
      throw new Error("Product not found");
    }
    this.products.splice(index, 1);
    return { message: `this id was deleted (${productId})` };
  }
}

export default productsService;
