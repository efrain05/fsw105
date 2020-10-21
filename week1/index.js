var shopper = {
    name: "Ryan",
    items: 3,
    addMore: false,
    groceryCart: [milk,eggs,bread],

    cartItem : function() {
      return this.items + this.groceryCart;
    }
  };