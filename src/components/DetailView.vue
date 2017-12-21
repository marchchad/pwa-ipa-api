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
            <label for="volume" class="mdl-textfield__label">Volume</label>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--12-col">
          <div>Image Preview</div>
          <img :src="this.keg.image" width="100%" id="image_preview" />
        </div>
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--file">
            <input v-model="keg.image" class="mdl-textfield__input" placeholder="MyKegPic.png" type="text" id="image"/>
            <div class="mdl-button mdl-button--primary mdl-button--icon mdl-button--file">
              <i class="material-icons">attach_file</i><input type="file" id="kegPic" v-on:change="uploadImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a id="save" @click.prevent="save" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
        <i class="material-icons">save</i> Save
      </a>
      <router-link class="mdl-button mdl-js-button mdl-button--accent mdl-button--raised mdl-js-ripple-effect" to="/kegs">
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
        'image': null,
        'keg': JSON.parse(localStorage.getItem('kegs'))[this.$route.params.id]
      };
    },
    methods: {
      save () {
        let data = { name: this.keg.name, volume: this.keg.volume };
        this.$http.put(POST_URL + this.keg.id + '/', data).then(resp => {
          router.push({ name: 'kegs' });
        }, {
          // Attach the JWT header
          headers: auth.getAuthHeader()
        });
      },
      uploadImage (e) {
        let input = e.target;
        if (input.files && input.files[0]) {
          let reader = new FileReader();

          reader.onload = function (e) {
            document.getElementById('image_preview').src = e.target.result;
          };

          reader.readAsDataURL(e.target.files[0]);
          this.keg.image = e.target.files[0].name;
        }
      }
    }
  };
</script>

<style scoped>

  .mdl-card{
    margin: auto auto 50px;
    top: 50px;
    width: 75%;
  }

  .mdl-card__actions #save {
    float: right;
  }

  .mdl-button--file input {
    cursor: pointer;
    height: 100%;
    right: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 300px;
    z-index: 4;
  }

  .mdl-textfield--file .mdl-textfield__input {
    box-sizing: border-box;
    width: calc(100% - 32px);
  }
  .mdl-textfield--file .mdl-button--file {
    right: 0;
  }
</style>
