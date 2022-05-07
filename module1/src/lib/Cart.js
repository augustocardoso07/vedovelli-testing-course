export default class Cart {
  items = [];

  getTotal() {
    return 0;
  }

  add(item) {}

  remove(product) {}

  summary() {}

  checkout() {}
}

// Uso

const cart = new Cart();

const product = {
  title: "",
  price: "",
};

const item = {
  quantity: 2,
  product,
};
