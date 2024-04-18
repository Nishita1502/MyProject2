<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <h1>App.vue</h1>
    <p v-if="inStock">Product is in stock</p>
    <p v-else>Product is out of stock</p>
    <p>Inventory: {{ inventory }}</p>
    <p v-if="onSale">Product is on sale</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  inject: ['inStock', 'inventory', 'onSale', 'categories'],
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
