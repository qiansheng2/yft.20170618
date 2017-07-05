
var formatDate = function (date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  return y + '-' + m + '-' + d;
}

export default {
  SET_CUSTOMERS: (state, customers) => {
    state.customers = customers
    state.customers.forEach(function(customer) {
      console.log('state.customers 签约日1:' + new Date(customer.签约日))
      customer.签约日 = formatDate(new Date(customer.签约日))
      console.log('state.customers 签约日2:' + customer.签约日)
    }, this);

    // console.log('SET_CUSTOMERS:' + state.customers[0].名称)
  }
}

