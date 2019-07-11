<template>
  <div class="location-container">
    <h1>Office location</h1>
    <br />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.553916970816!2d23.314147115888!3d42.62841577916978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa83f2167d64ab%3A0xdd705504fd9a9d6!2z0YPQuy4g4oCe0JfQsNGF0LDRgNC4INCX0L7Qs9GA0LDRhOKAnCAxMiwgMTQxNSDQutCyLiDQlNGA0LDQs9Cw0LvQtdCy0YbQuCwg0KHQvtGE0LjRjw!5e0!3m2!1sbg!2sbg!4v1562842665141!5m2!1sbg!2sbg"
      width="700"
      height="450"
      frameborder="0"
      style="border:0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  width: 50%;
  color: white;

  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 40px;

  text-shadow: 3px 3px 4px #000000;

  border-bottom: 5px solid black;
  border-spacing: 50px;
  border-collapse: separate;
}

iframe {
  box-shadow: 8px 5px 15px -5px rgba(0, 0, 0, 0.8);
}

.location-container {
  margin-left: -150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
