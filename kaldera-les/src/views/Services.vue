<template>
  <div>
    <h1>{{ $t(service) }}</h1>
    <div class="images-container">
      <ul>
        <li v-for="(picture, index) in pictures" :key="index">
          <img alt="service photo" :src="picture" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pictures: {
      type: Array,
      required: true
    },
    service: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
h1 {
  padding-left: 2.7%;

  color: white;
  font-size: 35px;
  text-shadow: 2px 2px 4px #000000;
}

.images-container {
  display: flex;
  justify-content: center;
}

div ul {
  width: 90%;
  padding: 0;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  list-style-type: none;
}

ul li {
  margin: 1.5%;
}

img {
  width: 360px;
  height: 269px;

  box-shadow: 8px 8px 15px -5px rgba(0, 0, 0, 0.8);
  transition: transform 0.4s;
}

img:hover {
  transform: scale(1.2);
}
</style>
