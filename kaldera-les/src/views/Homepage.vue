<template>
  <div>
    <div class="row-1">
      <div class="col-1">
        <CompanyCard>
          <template slot="header" class="card-header">
            <span class="card-header">
              <img
                class="logo"
                alt="company logo"
                src="@/assets/pictures/logo.png"
              />
            </span>
          </template>
          <template slot="content">
            <table>
              <tr>
                <td>{{ $t("founded") }}</td>
                <td>2010</td>
              </tr>

              <tr>
                <td>{{ $t("founderHeading") }}</td>
                <td>{{ $t("founder") }}</td>
              </tr>
              <tr>
                <td>{{ $t("employees") }}</td>
                <td>43</td>
              </tr>
              <tr>
                <td>{{ $t("operatingIn") }}</td>
                <td>{{ $t("countries") }}</td>
              </tr>
            </table>
          </template>
        </CompanyCard>
      </div>
      <div class="col-2">
        <div class="about-us">
          <h3>{{ $t("aboutUs") }}</h3>
          <p class="about-us-text">
            {{ $t("aboutUsText") }}
          </p>
        </div>
        <div class="why-us">
          <h2>{{ $t("whyUs") }}</h2>
          <ul>
            <li>{{ $t("reason1") }}</li>
            <li>{{ $t("reason2") }}</li>
            <li>{{ $t("reason3") }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row-2">
      <h2>{{ $t("workSite") }}</h2>
      <div class="images-container">
        <img
          class="images"
          v-for="jobSitePhoto in jobSitePhotos"
          v-bind:key="jobSitePhoto"
          :src="jobSitePhoto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CompanyCard from "primevue/card";

export default {
  components: {
    CompanyCard
  },
  data() {
    return {
      jobSitePhotos: [
        require("@/assets/pictures/job_site_photos/beams_1.jpg"),
        require("@/assets/pictures/job_site_photos/factory_1.jpg"),
        require("@/assets/pictures/job_site_photos/job_site_1.jpg"),
        require("@/assets/pictures/job_site_photos/logs_1.jpg"),
        require("@/assets/pictures/job_site_photos/logs_and_machine.jpg"),
        require("@/assets/pictures/job_site_photos/machine_1.jpg"),
        require("@/assets/pictures/job_site_photos/machine_2.jpg"),
        require("@/assets/pictures/job_site_photos/storage_1.jpg")
      ]
    };
  }
};
</script>

<style scoped>
.logo {
  width: 250px;
  box-shadow: 8px 5px 15px -5px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
}

table {
  background-color: (0, 0, 0, 0.5);

  font-size: 15px;
  border-collapse: collapse;
  width: 100%;
}

tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

td {
  padding-top: 4px;
  padding-bottom: 4px;
}

td:nth-child(even) {
  color: #0093dc;
}

h3 {
  font-size: 22px;
}

.row-1 {
  padding-top: 5%;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.col-2 {
  width: 50%;
  padding: 2.5%;
}

.p-card {
  width: 320px !important;

  background-color: rgba(0, 0, 0, 0.5);
  color: white;

  border-radius: 15px;
}

.card-header {
  display: flex !important;
  justify-content: center !important;
  padding-top: 10px !important;
}

table {
  background-color: (0, 0, 0, 0.5);

  font-size: 15px;
  border-collapse: collapse;
  width: 100%;
}

td {
  padding-top: 4px;
  padding-bottom: 4px;
}

td:nth-child(even) {
  color: #0093dc;
}

.about-us {
  padding-bottom: 5%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  color: white;
  font-size: 27px;
  text-shadow: 4px 4px 6px #000;
}

.about-us-text {
  color: white;
  font-size: 20px;
  text-shadow: 4px 4px 6px #000;
}

.why-us h2 {
  font-size: 22px;
  color: white;
  text-shadow: 4px 4px 6px #000;
}

.why-us ul li {
  margin-bottom: 1%;

  font-size: 24px;
  color: #0093dc;
  text-shadow: 4px 4px 6px #000;
  list-style-type: none;
}

.why-us ul li:before {
  content: "✓ ";
}

.row-2 {
  display: flex;
  flex-flow: wrap column;
  align-items: center;
}

.images-container {
  width: 80%;

  display: flex;
  justify-content: flex-start;
  align-items: space-between;
  align-content: space-between;
  flex-wrap: wrap;
}

.images {
  width: 315px;
  height: 236px;

  margin: 2%;
  box-shadow: 8px 8px 15px -5px rgba(0, 0, 0, 0.8);
  transition: transform 0.4s;
}

.images:hover {
  transform: scale(1.2);
}

.row-2 h2 {
  width: 60%;
  padding-bottom: 1%;

  color: white;
  font-size: 22px;
  text-align: center;
  text-shadow: 2px 2px 4px #000000;
}
</style>
