<template>
  <form>
    <div class="mdl-card mdl-shadow--6dp">
      <div class="mdl-card__supporting-text">
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
              <input id="name" v-model="name" type="text" class="mdl-textfield__input"/>
              <label for="name" class="mdl-textfield__label">Keg name</label>
            </div>
          </div>
          <div class="mdl-cell mdl-cell--8-col">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--file">
              <input class="mdl-textfield__input" placeholder="MyKegPic.png" type="text" id="image" readonly/>
              <div class="mdl-button mdl-button--primary mdl-button--icon mdl-button--file">
                <i class="material-icons">attach_file</i><input type="file" id="kegPic" @change="uploadImage">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mdl-card__actions mdl-card--border mdl-grid">
        <a @click.prevent="postKeg" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          Add Keg
        </a>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        'image': null,
        'name': ''
      };
    },
    methods: {
      postKeg () {
        this.$root.$firebaseRefs.keg.push(
          {
            'image': this.$el['kegPic'].files[0],
            'name': this.name,
            'desc': 'Posted by Chad on Tuesday',
            'created_at': -1 * new Date().getTime()
          })
          .then(this.$router.push('/'));
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
</style>
