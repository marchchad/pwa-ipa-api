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
            <span>{{ keg.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <router-link class="add-keg-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/keg">
      <i class="material-icons">add</i>
    </router-link>
  </div>
</template>

<script>
  import { reduce } from 'lodash';

  export default {
    methods: {
      displayDetails (id) {
        this.$router.push({name: 'kegdetail', params: { id: id }});
      },
      getKegs () {
        if (navigator.onLine) {
          this.saveKegsToCache();
          return reduce(this.$root.keg, (kegs, _keg) => {
            kegs[_keg['.key']] = {
              image: _keg['image'],
              name: _keg['name'],
              desc: _keg['desc'],
              created_at: _keg['created_at']
            };
            return kegs;
          }, {});
        } else {
          return JSON.parse(localStorage.getItem('kegs'));
        }
      },
      saveKegsToCache () {
        this.$root.$firebaseRefs.keg.orderByChild('created_at').once('value', (snap) => {
          let cachedKegs = {};
          snap.forEach((kegSnap) => {
            cachedKegs[kegSnap.key] = kegSnap.val();
          });
          localStorage.setItem('kegs', JSON.stringify(cachedKegs));
        });
      }
    },
    mounted () {
      this.saveKegsToCache();
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
</style>
