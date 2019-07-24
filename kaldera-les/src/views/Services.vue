<template>
  <div>
    <ul>
      <li v-for="(picture, index) in pictures" :key="index">
        <img alt="service photo" :src="picture" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pictures: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
div ul {
  list-style-type: none;
}

ul {
  width: 80%;

  display: flex;
  justify-content: flex-start;
  align-items: space-between;
  align-content: space-between;
  flex-wrap: wrap;
}

img {
  width: 315px;
  height: 236px;

  margin: 2%;
  margin-left: 5%;
  box-shadow: 8px 8px 15px -5px rgba(0, 0, 0, 0.8);
  transition: transform 0.4s;
}

img:hover {
  transform: scale(1.2);
}
</style>
