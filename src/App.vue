<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">
          <span class="mdl-layout-title">{{ name }}</span>
        </router-link>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation. We hide it in small screens. -->
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <router-link class="mdl-navigation__link" to="/kegs" @click.native="hideMenu" v-if="user.authenticated">Kegs</router-link>
          <router-link class="mdl-navigation__link" to="/keg" @click.native="hideMenu" v-if="user.authenticated">Create a Keg</router-link>
          <router-link class="mdl-navigation__link" to="/login" v-if="!user.authenticated" @click.native="hideMenu">Login</router-link>
          <router-link class="mdl-navigation__link" to="/logout" v-if="user.authenticated" @click.native="logout">Logout</router-link>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">{{ name }}</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/kegs" @click.native="hideMenu" v-if="user.authenticated">Kegs</router-link>
        <router-link class="mdl-navigation__link" to="/keg" @click.native="hideMenu" v-if="user.authenticated">Create a Keg</router-link>
        <router-link class="mdl-navigation__link" to="/login" v-if="!user.authenticated" @click.native="hideMenu">Login</router-link>
        <router-link class="mdl-navigation__link" to="/logout" v-if="user.authenticated" @click.native="logout">Logout</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="mdl-layout__tab-panel is-active" id="home">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import auth from './auth';
  require('material-design-lite');

  export default {
    name: 'app',
    data () {
      return {
        user: auth.user,
        name: 'IPA API'
      };
    },
    methods: {
      hideMenu () {
        document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible');
        document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible');
      },
      logout () {
        auth.logout();
        this.$router.push({ name: 'home' });
      }
    }
  };
</script>

<style>
  /*
  Material Design Lite page styles:
  You can choose other color schemes from the CDN, more info here http://www.getmdl.io/customize/index.html
  Format: material.color1-color2.min.css, some examples:
    material.red-teal.min.css
    material.blue-orange.min.css
    material.purple-indigo.min.css
  */

  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
</style>
