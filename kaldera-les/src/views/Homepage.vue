<template>
  <div class="row-1">
    <div class="col-1">
      <CompanyCard>
        <template slot="header">
          <img alt="company logo" src="@/assets/logo.png" />
        </template>
        <template slot="title"
          >Kaldera LES</template
        >
        <template slot="content">
          <table>
            <tr>
              <td>Founded:</td>
              <td>1984</td>
            </tr>

            <tr>
              <td>Founder:</td>
              <td>Todor Todorov</td>
            </tr>
            <tr>
              <td>Number of employees:</td>
              <td>10 000</td>
            </tr>
            <tr>
              <td>Operating in:</td>
              <td>France, Bulgaria, Germany</td>
            </tr>
          </table>
        </template>
      </CompanyCard>
    </div>
    <div class="col-2">
      <div class="about-us-box">
        <h3>About us</h3>
        <p class="about-us-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error
          animi eligendi velit vitae deserunt. Qui recusandae soluta, quos sint
          molestiae perspiciatis itaque et ducimus adipisci vel perferendis
          voluptatem repellendus.
        </p>
      </div>
      <div class="why-us">
        <h2>Why choose us?</h2>
        <ul class="why-us-list">
          <li>Because of reason #1</li>
          <li>Because of reason #2</li>
          <li>Because of reason #3</li>
          <li>Because of reason #4</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyCard from "primevue/card";

export default {
  components: {
    CompanyCard
  }
};
</script>

<style scoped>
table {
  font-size: 15px;
  border-collapse: collapse;
  width: 100%;
}

td {
  padding-top: 4px;
  padding-bottom: 4px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

h3 {
  font-size: 20px;
}

.row-1 {
  padding-top: 5%;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.col-2 {
  width: 50%;
}

.p-card {
  width: 320px !important;
  box-shadow: 8px 5px 15px -5px rgba(0, 0, 0, 0.4);
}

.about-us-box {
  padding-left: 1%;

  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  border-radius: 15px;
}

.about-us-text {
  color: white;
  font-size: 18px;
}

.why-us h2 {
  font-size: 20px;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

.why-us-list {
  font-size: 22px;
  color: #0093dc;
}
</style>
