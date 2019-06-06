import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Goods from 'components/goods/goods';
import Seller from 'components/seller/seller';
import Ratings from 'components/ratings/ratings';
import Header from 'components/header/header';

Vue.use(VueRouter);

let app = Vue.extend(App);

let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
  '/goods': {
    components: Goods
  },
  '/seller': {
    components: Seller
  },
  '/ratings': {
    components: Ratings
  },
  '/header': {
    components: Header
  }
});

router.start(app, '#app');

router.go('/goods');
