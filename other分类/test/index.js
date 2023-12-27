class CartItem {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotal() {
      return this.price * this.quantity;
    }
  }
  
  class DigitalCartItem extends CartItem {
    getTotal() {
      return this.price * this.quantity * 0.5;
    }
  }
  
  class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  
    clear() {
      this.items = [];
    }
  
    getTotal() {
      let total = 0;
      for (let item of this.items) {
        total += item.getTotal();
      }
      return total;
    }
  }
  
  const book = new CartItem("JavaScript高级程序设计", 59.9, 2);
  const laptop = new CartItem("MacBook Pro", 12999, 1);
  const music = new DigitalCartItem("Taylor Swift专辑", 30, 3);
  
  const cart = new Cart();
  cart.addItem(book);
  cart.addItem(laptop);
  cart.addItem(music);
  
//   console.log(cart.getTotal()); // 输出购物车中商品的总价
  
//   cart.removeItem(book); // 从购物车中移除普通商品
//   cart.clear(); // 清空购物车中所有商品
  