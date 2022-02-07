const faker = require('faker');

class ProductsServices {
  constructor() {
    this.products = [];
    this.generate()
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uid,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  create() {}

  find() {
    return this.products
  }

  findOne(id) {
    return this.products.find(items => items.id === id)
  }

  update() {}

  delete() {}
}

module.exports = ProductsServices;


// Hi I'm Luis and I love to help people to find their hidden potential

// I am a fullstack developer, i haver worked in remote for enterprises to create their own products from the frontend to the backend using Vue, Express, Nodejs, Mongodb.

// My strengths are in frontend connected to firebase because I love to communicate to people in the correct way.

// Also i have contested in international contests such as: Hult Prize and Microsoft - imagine cup, creating business model canvas based on the bottom of the pyramid strategy