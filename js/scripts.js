// Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  var total = this.size + this.toppings;
  return total;
}

// UI Logic

$(function() {
  $(".size").click(function() {
    $(".toppings").fadeIn(300);
  });

  $("button#order").click(function(event) {
    event.preventDefault();
    debugger;
    var toppings = 0;
    var size = parseInt($("input:radio[name=size]:checked").val());

    var meat = $("input:checkbox[name=meat]:checked").each(function() {
      var meatToppings = parseInt($(this).val());
      toppings += meatToppings;
    });
    var veggies = $("input:checkbox[name=veggie]:checked").each(function() {
      var veggieToppings = parseInt($(this).val());
      toppings += veggieToppings;
      return toppings
    });

    var newPizza = new Pizza(size, toppings);

    $(".total").fadeIn(300);
    $("#total-price").text(newPizza.price());

  });
});
