/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import App from '../app.vue'

var app = new Vue({
  el: '#app',
  data: {
    bpi: null,
    hasError: false,
    loading :true
  },
  mounted: function(){
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response){
      // console.log(response.data.bpi)
      // console.log(response.data.bpi.USD.rate_float)
      this.bpi = response.data.bpi
    }.bind(this))
    .catch(function(error){
      console.log(error)
      this.hasError = true
    }.bind(this))
    .finally(function(){
      this.loading = false
    }.bind(this))
  },
  filters: {
    currencyDecimal(value) {
      return value.toFixed(2)
    }
  }
})
