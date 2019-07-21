<template>
  <div>
    <h1>{{ $t("contactUs") }}</h1>
    <div class="info-container">
      <div class="col-1">
        <h3>{{ $t("addressHeading") }}</h3>
        <p>{{ $t("address") }}</p>
        <h3>{{ $t("workingTimeHeading") }}</h3>
        <p>{{ $t("workingTime") }}</p>
      </div>
      <div class="col-2">
        <h3>{{ $t("emailHeading") }}</h3>
        <p>{{ $t("email") }}</p>
        <h3>{{ $t("phoneHeading") }}</h3>
        <p>{{ $t("phone") }}</p>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.455482218171!2d23.990808609160013!3d42.03341229024624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65d0257026a5%3A0x3638533f22d88c60!2z0YPQuy4g4oCe0KXRgC4g0KHQvNC40YDQvdC10L3RgdC60LjigJwgNSwgNDYwMiDQutCyLiDQmtCw0LzQtdC90LjRhtCwLCDQktC10LvQuNC90LPRgNCw0LQ!5e0!3m2!1sbg!2sbg!4v1563695680732!5m2!1sbg!2sbg"
      width="600"
      height="350"
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
