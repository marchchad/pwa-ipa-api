<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="this.kegs[$route.params.id].image" />
      </div>
      <div class="info">
        <span>{{ this.kegs[$route.params.id].name }}</span>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col">
      <div class="comment">
        <span>{{ this.kegs[$route.params.id].capacity + ' ' + this.kegs[$route.params.id].units }}</span>
      </div>
      <div class="actions">
        <!--<router-link class="mdl-button mdl-js-button mdl-button&#45;&#45;raised mdl-button&#45;&#45;colored" to="/keg">
          New Keg
        </router-link>-->
      </div>
    </div>
    <router-link class="add-keg-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/keg">
      <i class="material-icons">add</i>
    </router-link>
  </div>
</template>

<script>
  import data from '../data';
  export default {
    data () {
      return {
        'kegs': data.kegs
      };
    }
  };
</script>

<style scoped>

  .add-keg-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
  }
</style>
