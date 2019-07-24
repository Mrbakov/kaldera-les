<template>
  <div id="header">
    <ul>
      <li style="margin-left:60px">
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
          <span>{{ $t("treeSpecies") }}</span>
        </a>
        <div class="tree-species-dropdown">
          <ul id="tree-species-list">
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
      <!-- <li>
        <a>
          <span>{{ $t("treeSpecies") }}</span>
        </a>
        <div class="tree-species-dropdown">
          <ul id="tree-species-list">
            <li v-for="(service, index) in services" :key="index">
              <router-link
                :to="{
                  name: 'services',
                  params: {
                    id: service.id,
                    name: service.name,
                    pictures: service.pictures
                  }
                }"
              >
                <span>{{ $t(service.name) }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </li> -->
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
            require("@/assets/pictures/job_site_photos/beams_1.jpg"),
            require("@/assets/pictures/job_site_photos/factory_1.jpg"),
            require("@/assets/pictures/job_site_photos/job_site_1.jpg"),
            require("@/assets/pictures/job_site_photos/logs_1.jpg"),
            require("@/assets/pictures/job_site_photos/logs_and_machine.jpg"),
            require("@/assets/pictures/job_site_photos/machine_1.jpg"),
            require("@/assets/pictures/job_site_photos/machine_2.jpg"),
            require("@/assets/pictures/job_site_photos/storage_1.jpg")
          ]
        },
        {
          id: 2,
          name: "logging",
          pictures: [
            require("@/assets/pictures/job_site_photos/beams_1.jpg"),
            require("@/assets/pictures/job_site_photos/factory_1.jpg"),
            require("@/assets/pictures/job_site_photos/job_site_1.jpg"),
            require("@/assets/pictures/job_site_photos/logs_1.jpg"),
            require("@/assets/pictures/job_site_photos/logs_and_machine.jpg"),
            require("@/assets/pictures/job_site_photos/machine_1.jpg"),
            require("@/assets/pictures/job_site_photos/machine_2.jpg"),
            require("@/assets/pictures/job_site_photos/storage_1.jpg")
          ]
        },
        {
          id: 3,
          name: "logging",
          pictures: [
            require("@/assets/pictures/job_site_photos/beams_1.jpg"),
            require("@/assets/pictures/job_site_photos/factory_1.jpg"),
            require("@/assets/pictures/job_site_photos/job_site_1.jpg"),
            require("@/assets/pictures/job_site_photos/logs_1.jpg"),
            require("@/assets/pictures/job_site_photos/logs_and_machine.jpg"),
            require("@/assets/pictures/job_site_photos/machine_1.jpg"),
            require("@/assets/pictures/job_site_photos/machine_2.jpg"),
            require("@/assets/pictures/job_site_photos/storage_1.jpg")
          ]
        },
        {
          id: 4,
          name: "logging",
          pictures: [
            require("@/assets/pictures/job_site_photos/beams_1.jpg"),
            require("@/assets/pictures/job_site_photos/factory_1.jpg"),
            require("@/assets/pictures/job_site_photos/job_site_1.jpg"),
            require("@/assets/pictures/job_site_photos/logs_1.jpg"),
            require("@/assets/pictures/job_site_photos/logs_and_machine.jpg"),
            require("@/assets/pictures/job_site_photos/machine_1.jpg"),
            require("@/assets/pictures/job_site_photos/machine_2.jpg"),
            require("@/assets/pictures/job_site_photos/storage_1.jpg")
          ]
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

.tree-species-dropdown {
  display: none;
  position: absolute;
  background-color: rgb(0, 0, 0, 0.5);
}

div.tree-species-dropdown:hover {
  display: block;
}

#header ul li a:hover + div.tree-species-dropdown {
  display: block;
}

#tree-species-list {
  list-style-type: none;
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
