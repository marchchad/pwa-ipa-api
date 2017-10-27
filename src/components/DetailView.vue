<template>
  <div class="mdl-card mdl-shadow--6dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">Keg: {{ keg.name }}</h2>
    </div>
    <hr/>
    <div class="mdl-card__supporting-text">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
            <input id="name" v-model="keg.name" type="text" class="mdl-textfield__input"/>
            <label for="name" class="mdl-textfield__label">Keg name</label>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
            <input id="volume" v-model="keg.volume" type="number" step="0.1" class="mdl-textfield__input"/>
            <label for="name" class="mdl-textfield__label">Volume</label>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--file">
            <img :src="this.keg.image" width="100%" />
            <input v-model="keg.image" class="mdl-textfield__input" placeholder="MyKegPic.png" type="text" id="image" readonly/>
            <div class="mdl-button mdl-button--primary mdl-button--icon mdl-button--file">
              <i class="material-icons">attach_file</i><input type="file" id="kegPic">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a id="save" @click.prevent="save" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
        <i class="material-icons">save</i> Save
      </a>
      <router-link class="mdl-button mdl-js-button mdl-button--accent mdl-button--raised mdl-js-ripple-effect" to="/">
        Back
      </router-link>
    </div>
  </div>
</template>

<script>
  import auth from '../auth';
  import router from '../router';

  const POST_URL = 'http://localhost:8000/kegs/';

  export default {
    data () {
      return {
        'keg': JSON.parse(localStorage.getItem('kegs'))[this.$route.params.id]
      };
    },
    methods: {
      save () {
        let data = { name: this.keg.name, volume: this.keg.volume };
        this.$http.put(POST_URL + this.keg.id + '/', data).then(resp => {
          router.push({ name: 'home' });
        }, {
          // Attach the JWT header
          headers: auth.getAuthHeader()
        });
      }
    }
  };
</script>

<style scoped>

  .mdl-card{
    margin: auto;
    top: 50px;
    width: 50%;
  }

  .mdl-card__actions #save {
    float: right;
  }
</style>
