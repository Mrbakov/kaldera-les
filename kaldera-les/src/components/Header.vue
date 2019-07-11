<template>
  <div id="cssmenu">
    <ul>
      <li style="margin-left:60px">
        <router-link :to="{ name: 'homepage' }">
          <span>{{ $t("homepage") }}</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'product-categories' }">
          <span>{{ $t("productCategories") }}</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contacts' }">
          <span>{{ $t("contacts") }}</span>
        </router-link>
      </li>
      <li id="dropdown">
        <LanguageDropdown
          v-model="selectedLanguage"
          :options="languages"
          optionLabel="title"
          optionValue="language"
          placeholder="Language"
          @change="$emit('change-locale', selectedLanguage)"
        >
          <template #option="slotProps">
            <div class="p-clearfix p-dropdown-car-option">
              <flag :iso="slotProps.option.flag" v-bind:squared="false" />
              <span>{{ slotProps.option.title }}</span>
            </div>
          </template>
        </LanguageDropdown>
      </li>
    </ul>
  </div>
</template>
npm ru
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
      ],
      activeItem: null
    };
  }
};
</script>

<style scoped>
@import url(http://fonts.googleapis.com/css?family=Open+Sans:700);

#cssmenu {
  background: #000000;
  width: auto;
  height: 60px;
}

#cssmenu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  line-height: 1;
  display: block;
  zoom: 1;
}

#cssmenu ul:after {
  content: " ";
  display: block;
  font-size: 0;
  height: 0;
  clear: both;
  visibility: hidden;
}

#cssmenu ul li {
  display: inline-block;
  padding-left: 10px;
  /* Adjust when adjusting header height and font size: */
  margin-top: 6px;
}

#cssmenu.align-right ul li {
  float: right;
  text-decoration: none;
}

#cssmenu.align-center ul {
  text-align: center;
}

#cssmenu ul li a {
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
}

#cssmenu ul li a:hover {
  color: #9c9c9c;
}

#cssmenu ul li a:hover:before {
  width: 100%;
}

#cssmenu ul li a:before {
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

#cssmenu ul li.last > a:after,
#cssmenu ul li:last-child > a:after {
  display: none;
}

#cssmenu ul li.active a {
  color: #9c9c9c;
}

#cssmenu ul li.active a:before {
  width: 100%;
}

#cssmenu.align-right li.last > a:after,
#cssmenu.align-right li:last-child > a:after {
  display: block;
}

#cssmenu.align-right li:first-child a:after {
  display: none;
}

#dropdown {
  float: right;
  margin-top: 16px !important;
  padding-right: 20px;
}
.p-dropdown {
  width: 6em;
  font-size: 22px;
}
.p-dropdown:not(.p-disabled).p-focus {
  box-shadow: 0 0 0 0.2em black;
  border-color: black;
}

.language-button {
  padding: 12px;
  font-size: 15px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  color: white;
  background-image: none;
  background-color: Transparent;
  background-repeat: no-repeat;
  outline: none;
  float: right;
  margin-top: 16px !important;
  margin-left: 10px;
  padding-right: 20px;
}
button:focus {
  outline: 0;
}
/* TODO: Fix for smaller screens if there is time */
@media screen and (max-width: 768px) {
  #cssmenu ul li {
    float: none;
    display: block;
  }
  #cssmenu ul li a {
    width: 100%;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 2px solid #9c9c9c;
  }
  #cssmenu ul li.last > a,
  #cssmenu ul li:last-child > a {
    border: 0;
  }
  #cssmenu ul li a:after {
    display: none;
  }
  #cssmenu ul li a:before {
    display: none;
  }
}
</style>
