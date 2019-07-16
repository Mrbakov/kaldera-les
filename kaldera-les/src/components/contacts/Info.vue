<template>
  <div>
    <h1>Contact us</h1>
    <div class="info-container">
      <div class="col-1">
        <h3>Address</h3>
        <p>{{ address }}</p>
        <h3>Working time</h3>
        <p>{{ workingTime }}</p>
      </div>
      <div class="col-2">
        <h3>Email</h3>
        <p>{{ email }}</p>
        <h3>Phone</h3>
        <p>{{ phone }}</p>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.5539169756357!2d23.314141750707325!3d42.628415779067566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa83f2167d64ab%3A0xdd705504fd9a9d6!2z0YPQuy4g4oCe0JfQsNGF0LDRgNC4INCX0L7Qs9GA0LDRhOKAnCAxMiwgMTQxNSDQutCyLiDQlNGA0LDQs9Cw0LvQtdCy0YbQuCwg0KHQvtGE0LjRjw!5e0!3m2!1sbg!2sbg!4v1562874373246!5m2!1sbg!2sbg"
      width="600"
      height="350"
      frameborder="0"
      style="border:0"
      allowfullscreen
      class="map"
    ></iframe>
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
h1 {
  width: 50%;
  color: rgb(252, 252, 252);
  opacity: 1 !important;

  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 27px;
}

h3 {
  margin-bottom: -5%;
  color: rgb(252, 252, 252);
  font-size: 14px;
  opacity: 1 !important;
}

p {
  font-size: 16px;
  color: #0093dc;
  opacity: 1 !important;
  /* text-shadow: 3px 3px 4px #000000; */
}

iframe {
  box-shadow: 8px 5px 15px -5px rgba(0, 0, 0, 0.8);
}

.info-container {
  display: flex;
  justify-content: flex-start;
}

.col-2 {
  margin-left: 30%;
}

.map {
  margin-bottom: 3%;
}
</style>
