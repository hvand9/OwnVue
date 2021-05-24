<template>
  <div class="product">
    <div :class="'product-inner ' + product.color">
      <div class="product-text-wrap">
        <h2 class="bg-text">{{ product.bgtext }}</h2>
      </div>
     
      
      <div class="product-detail">
        <h2>{{ product.title }}</h2>
        <p>Buy crypto today and invest in your life! You can pay buy cash or through Visa Card it is your own choice</p>
        <button>Already bought!</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'product',
  props: ['product']
}
</script>

<style>
  .product {
    flex: 1 1 33.333%;
    width: 50%;
    padding: 10px;
  }

  .product-inner {
    position: relative;
    padding: 100px;
    box-shadow: 0px 0px 16px rgba(187, 27, 27, 0.25);
    perspective: 5000px;
  }
  .product-inner.green {
    background-image: linear-gradient(to bottom right, #ffffff, #ffffff);
  }
  .product-inner.blue {
    background-image: linear-gradient(to bottom left, #ffffff, #ffffff 70%);
  }
  .product-inner.pink {
    background-image: linear-gradient(to bottom right, #ffffff, #ffffff);
  }

  .product-text-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    perspective: 200px;
  }
  
  .product-text-wrap h2 {
    color: #313131;
    font-size: 128px;
    font-weight: 900;
    opacity: 0.2;
    transform-origin: center;
  }

  .product-image-wrap {
    position: relative;
    z-index: 1;
    transform-origin: center;
  }
  .product-image-wrap .image {
    width: 100%;
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
  }

  .product-detail {
    background-color: #FFF;
    padding: 10px;
    margin: 0px -25px -25px;
  }

  .product-detail h2 {
    font-size: 24px;
    font-weight: 700;
    color: #676767;
    margin-bottom: 15px;
  }

  .product-detail p {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 50;
    color: #676767;
  }
</style>