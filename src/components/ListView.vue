<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div v-for="(keg, id) in getKegs()" class="image-card" @click="displayDetails(id)">
          <div class="image-card__picture">
            <img :src="keg.image" />
          </div>
          <div class="image-card__name mdl-card__actions">
            <span class="name">{{ keg.name }}</span>
            <span>Remaining Volume: {{ keg.volume }}</span>
          </div>
        </div>
      </div>
    </div>
    <router-link class="add-keg-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect" to="/keg">
      <i class="material-icons">add</i>
    </router-link>
  </div>
</template>

<script>
  import auth from '../auth';
  import { reduce } from 'lodash';

  export default {
    data () {
      return {
        kegs: []
      };
    },
    methods: {
      displayDetails (id) {
        this.$router.push({name: 'kegdetail', params: {id: id}});
      },
      getKegs () {
        if (!auth.user.authenticated) {
          return;
        }
        if (navigator.onLine) {
          this.$http.get('http://localhost:8000/kegs/').then(resp => {
            let kegs = resp.body.results;
            let image = 'https://cdn.dribbble.com/users/50008/screenshots/1641763/party1-_1x.jpg';
            this.kegs = reduce(kegs, (kegs, _keg) => {
              kegs[_keg['id']] = {
                id: _keg['id'],
                image: image,
                name: _keg['name'],
                volume: _keg['volume'],
                created_on: _keg['created_on']
              };
              return kegs;
            }, {});
            this.saveKegsToCache();
            return this.kegs;
          }, {
            // Attach the JWT header
            headers: auth.getAuthHeader()
          });
        } else {
          return this.kegs;
        }
      },
      saveKegsToCache () {
        localStorage.setItem('kegs', JSON.stringify(this.kegs));
      }
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
  .image-card {
    position: relative;
    margin-bottom: 8px;
  }
  .image-card__picture > img {
    width:100%;
  }
  .image-card__name {
    position: absolute;
    bottom: 0;
    height: 52px;
    padding: 16px;
    text-align: right;
    background: rgba(0, 0, 0, 0.5);
  }

  .image-card__name > span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
  .image-card__name > span.name{
    float: left;
  }
</style>
