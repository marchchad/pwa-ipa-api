<template>
  <form>
    <div class="mdl-card mdl-shadow--6dp">
      <div class="mdl-card__supporting-text">
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--12-col">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
              <input id="name" v-model="name" type="text" class="mdl-textfield__input"/>
              <label for="name" class="mdl-textfield__label">Keg name</label>
            </div>
          </div>
          <div class="mdl-cell mdl-cell--12-col">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
              <input id="volume" v-model="volume" type="number" step="0.1" class="mdl-textfield__input"/>
              <label for="volume" class="mdl-textfield__label">Volume</label>
            </div>
          </div>
          <div class="mdl-cell mdl-cell--12-col">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--file">
              <input class="mdl-textfield__input" placeholder="MyKegPic.png" type="text" id="image" readonly/>
              <div class="mdl-button mdl-button--primary mdl-button--icon mdl-button--file">
                <i class="material-icons">attach_file</i><input type="file" id="kegPic" @change="uploadImage">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a id="add" @click.prevent="postKeg" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          Add Keg
        </a>
        <router-link class="mdl-button mdl-js-button mdl-button--accent mdl-button--raised mdl-js-ripple-effect" to="/kegs">
          Back
        </router-link>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        'volume': null,
        'image': null,
        'name': ''
      };
    },
    methods: {
      postKeg () {
        this.$http.post('http://localhost:8000/kegs/',
          {
            'name': this.name,
            'volume': this.volume
          })
          .then(resp => {
            console.log(resp);
            this.$router.push({ name: 'kegs' });
          }, err => {
            console.error(err);
          });
      },
      uploadImage () {
        document.getElementById('image').value = this.$el['kegPic'].files[0].name;
      }
    }
  };
</script>

<style scoped>

  .mdl-card{
    margin: auto;
    top: 50px;
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

  .mdl-card__actions #add{
    float: right;
  }
</style>
