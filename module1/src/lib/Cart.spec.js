import Cart from "./Cart";

describe("Cart", () => {
  it("should return 0 when getTotal() is executed with a new cart instance", () => {
    const cart = new Cart();
    expect(cart.getTotal()).toBe(0);
  });
});
