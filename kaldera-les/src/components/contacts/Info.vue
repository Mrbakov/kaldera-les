<template>
  <div class="info-container">
    <div class="row">
      <h3>Phone:</h3>
      <p>{{ phone }}</p>
    </div>
    <div class="row">
      <h3>Email:</h3>
      <p>{{ email }}</p>
    </div>
    <div class="row">
      <h3>Address:</h3>
      <p>{{ address }}</p>
    </div>
    <div class="row">
      <h3>Working time:</h3>
      <p>{{ workingTime }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "+359 88 927 9555",
      email: "kalderales@abv.bg",
      address: '"Zahari Zograf" 12',
      workingTime: "09:00 to 17:00"
    };
  }
};
</script>

<style scoped>
p {
  margin-left: 15px;

  font-size: 26px;
  text-shadow: 3px 3px 4px #000000;
}

h3 {
  padding: 0px 10px 0px 5px;

  font-size: 35px;
  text-decoration: none;
  border-bottom: 5px solid black;
}

.info-container {
  margin-top: 100px;
  margin-right: -100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
