<template>
  <div id="header">
    <ul>
      <li>
        <router-link :to="{ name: 'homepage' }">
          <span>{{ $t("homepage") }}</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contacts' }">
          <span>{{ $t("contacts") }}</span>
        </router-link>
      </li>
      <li>
        <a>
          <span>{{ $t("services") }}</span>
        </a>
        <div class="m-dropdown">
          <ul id="m-list">
            <li v-for="(service, index) in services" :key="index">
              <router-link
                :to="{
                  name: 'services',
                  params: {
                    id: service.id,
                    service: service.name,
                    pictures: service.pictures
                  }
                }"
              >
                <span>{{ $t(service.name) }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a>
          <span>{{ $t("treeSpecies") }}</span>
        </a>
        <div class="m-dropdown">
          <ul id="m-list">
            <li v-for="(species, index) in treeSpecies" :key="index">
              <router-link
                :to="{
                  name: 'products',
                  params: {
                    id: species.id,
                    species: species,
                    products: species.products
                  }
                }"
              >
                <span>{{ $t(species.name) }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <LanguageDropdown
      v-model="selectedLanguage"
      :options="languages"
      optionLabel="title"
      optionValue="language"
      placeholder="English"
      @change="$emit('change-locale', selectedLanguage)"
    >
      <template #option="slotProps">
        <div class="p-clearfix p-dropdown-car-option">
          <flag :iso="slotProps.option.flag" v-bind:squared="false" />
          <span>{{ slotProps.option.title }}</span>
        </div>
      </template>
    </LanguageDropdown>
  </div>
</template>
<script>
import LanguageDropdown from "primevue/dropdown";

export default {
  components: {
    LanguageDropdown
  },
  data() {
    return {
      selectedLanguage: null,
      languages: [
        { flag: "gb", language: "en", title: " English" },
        { flag: "bg", language: "bg", title: " Български" },
        { flag: "de", language: "de", title: " Deutsch" }
        // { flag: "fr", language: "fr", title: " Français" }
      ],
      treeSpecies: [
        {
          id: 1,
          name: "whitePine",
          orderName: "Бял бор",
          products: [
            {
              id: 1,
              name: "plank",
              photo: require("@/assets/pictures/products/plank.jpg"),
              // properties: [{ name: "Width", value: "7 cm" }],
              orderName: "Талпа"
            },
            {
              id: 2,
              name: "paneling",
              photo: require("@/assets/pictures/products/paneling.jpg"),
              orderName: "Ламперия"
            },
            {
              id: 3,
              name: "formworkPaneling",
              photo: require("@/assets/pictures/products/formwork_paneling.jpg"),
              orderName: "Куфражна амперия"
            },
            {
              id: 4,
              name: "dogHouse",
              photo: require("@/assets/pictures/products/dog_house.jpg"),
              orderName: "Къща за куче"
            },
            {
              id: 5,
              name: "customOrder",
              photo: require("@/assets/pictures/job_site_photos/job_site_1.jpg"),
              orderName: "Продукт по поръчка"
            }
          ]
        },
        {
          id: 2,
          name: "acacia",
          orderName: "Акация",
          products: [
            {
              id: 1,
              name: "vineyardStake",
              photo: require("@/assets/pictures/products/vineyard_stake.jpg"),
              orderName: "Кол за лозов масив"
            },
            {
              id: 2,
              name: "customOrder",
              photo: require("@/assets/pictures/job_site_photos/job_site_1.jpg"),
              orderName: "Продукт по поръчка"
            }
          ]
        },
        {
          id: 3,
          name: "spruce",
          orderName: "Смърч",
          products: [
            {
              id: 1,
              name: "plank",
              photo: require("@/assets/pictures/products/plank.jpg"),
              orderName: "Талпа"
            },
            {
              id: 2,
              name: "paneling",
              photo: require("@/assets/pictures/products/paneling.jpg"),
              orderName: "Ламперия"
            },
            {
              id: 3,
              name: "formworkPaneling",
              photo: require("@/assets/pictures/products/formwork_paneling.jpg"),
              orderName: "Куфражна амперия"
            },
            {
              id: 4,
              name: "dogHouse",
              photo: require("@/assets/pictures/products/dog_house.jpg"),
              orderName: "Къща за куче"
            },
            {
              id: 5,
              name: "customOrder",
              photo: require("@/assets/pictures/job_site_photos/job_site_1.jpg"),
              orderName: "Продукт по поръчка"
            }
          ]
        },
        {
          id: 4,
          name: "fir",
          orderName: "Ела",
          products: [
            {
              id: 1,
              name: "plank",
              photo: require("@/assets/pictures/products/plank.jpg"),
              orderName: "Талпа"
            },
            {
              id: 2,
              name: "paneling",
              photo: require("@/assets/pictures/products/paneling.jpg"),
              orderName: "Ламперия"
            },
            {
              id: 3,
              name: "formworkPaneling",
              photo: require("@/assets/pictures/products/formwork_paneling.jpg"),
              orderName: "Куфражна амперия"
            },
            {
              id: 4,
              name: "dogHouse",
              photo: require("@/assets/pictures/products/dog_house.jpg"),
              orderName: "Къща за куче"
            },
            {
              id: 5,
              name: "customOrder",
              photo: require("@/assets/pictures/job_site_photos/job_site_1.jpg"),
              orderName: "Продукт по поръчка"
            }
          ]
        }
      ],
      services: [
        {
          id: 1,
          name: "logging",
          pictures: [
            require("@/assets/pictures/logging/IMG-0cd9de35175628e854817dbe0316ab80-V.jpg"),
            require("@/assets/pictures/logging/IMG-002e806234c3a8f6313e368f4a48810b-V.jpg"),
            require("@/assets/pictures/logging/IMG-7f7c875a10dbb96e67b8787e47cc2b15-V.jpg"),
            require("@/assets/pictures/logging/IMG-07f76ee32e9ce2048f5fa0d3b78973ad-V.jpg"),
            require("@/assets/pictures/logging/IMG-10b2fa14267d4438b1c54586936606e9-V.jpg"),
            require("@/assets/pictures/logging/IMG-14e663f696dadd3bd9e988b361f831c2-V.jpg"),
            require("@/assets/pictures/logging/IMG-6373c4827858810356153818e29573f6-V.jpg"),
            require("@/assets/pictures/logging/IMG-ac70d202bb9d80dbdc1dc48e509265cb-V.jpg"),
            require("@/assets/pictures/logging/IMG-b8219c6ca67cc65c5d2e447d7f5942c9-V.jpg"),
            require("@/assets/pictures/logging/IMG-c3570cbd27640dcc4488dab7f5a04b13-V.jpg"),
            require("@/assets/pictures/logging/IMG-d8275b121f83d25578b8d2dc3a1f53ee-V.jpg"),
            require("@/assets/pictures/logging/IMG-e1e7da819270fbc43fc0a80b947928ca-V.jpg"),
            require("@/assets/pictures/logging/IMG-e4bcdd7a9236594321ce9c23ff2e7a1c-V.jpg"),
            require("@/assets/pictures/logging/IMG-eb78911512437c6d930e1ff6d6dd4617-V.jpg"),
            require("@/assets/pictures/logging/IMG-fbfe4317f3fc825dfbfaf5291821822c-V.jpg")
          ]
        },
        {
          id: 2,
          name: "impregnation",
          pictures: [
            require("@/assets/pictures/impregnation/IMG-6fb0f9ef6a36294807249705d7fff31b-V.jpg"),
            require("@/assets/pictures/impregnation/IMG-8af001b8f0c9c76be28459e469669182-V.jpg"),
            require("@/assets/pictures/impregnation/IMG-d93f83c79bb07f86499846f6e51b1944-V.jpg")
          ]
        },
        {
          id: 3,
          name: "turning",
          pictures: []
        },
        {
          id: 4,
          name: "drying",
          pictures: []
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url(http://fonts.googleapis.com/css?family=Open+Sans:700);

#header {
  width: auto;
  height: 60px;

  display: flex;
  justify-content: space-between;

  background-color: rgb(0, 0, 0, 0.5);
}

#header ul {
  margin: 0;
  margin-left: 20px;
  padding: 0;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  list-style: none;
  line-height: 1;
}

#header ul:after {
  content: " ";
  display: block;
  font-size: 0;
  height: 0;
  clear: both;
  visibility: hidden;
}

#header ul li {
  display: inline-block;
  padding-left: 10px;
}

#header ul li:hover {
  cursor: context-menu;
}

#header.align-right ul li {
  float: right;
  text-decoration: none;
}

#header.align-center ul {
  text-align: center;
}

#header ul li a {
  color: #ffffff;
  text-decoration: none;
  display: block;
  padding: 15px 25px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 24px;
  position: relative;
  -webkit-transition: color 0.25s;
  -moz-transition: color 0.25s;
  -ms-transition: color 0.25s;
  -o-transition: color 0.25s;
  transition: color 0.25s;
  outline: 0 !important;
}

#header ul li a:hover {
  color: #9c9c9c;
}

#header ul li a:hover:before {
  width: 100%;
}

#header ul li a:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 0;
  background: #9c9c9c;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -ms-transition: width 0.25s;
  -o-transition: width 0.25s;
  transition: width 0.25s;
}

#header ul li.last > a:after,
#header ul li:last-child > a:after {
  display: none;
  outline: none;
}

#header ul li.active a {
  color: #9c9c9c;
  outline: none !important;
}

#header ul li.active a:before {
  width: 100%;
}

#header.align-right li.last > a:after,
#header.align-right li:last-child > a:after {
  display: block;
}

#header.align-right li:first-child a:after {
  display: none;
}

.p-dropdown {
  height: 1.4em;
  width: 6em;

  margin-right: 2%;
  display: flex;
  align-self: center;

  font-size: 22px;
}
.p-dropdown:not(.p-disabled).p-focus {
  box-shadow: none;
  border-color: rgb(0, 0, 0, 0.5);
}

.m-dropdown {
  display: none;
  position: absolute;
  width: 240px;
  height: 210px;
  background-color: rgb(0, 0, 0, 0.5);
}

div.m-dropdown:hover {
  display: block;
}

#header ul li a:hover + div.m-dropdown {
  display: block;
}

#m-list {
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column-reverse;

  list-style-type: none;
}

#m-list li {
  align-self: flex-start;
  padding: 0px !important;
}

button:focus {
  outline: none !important;
}

/* TODO: Fix for smaller screens if there is time */
@media screen and (max-width: 768px) {
  #header ul li {
    float: none;
    display: block;
  }
  #header ul li a {
    width: 100%;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 2px solid #9c9c9c;
  }
  #header ul li.last > a,
  #header ul li:last-child > a {
    border: 0;
  }
  #header ul li a:after {
    display: none;
  }
  #header ul li a:before {
    display: none;
  }
}
</style>
