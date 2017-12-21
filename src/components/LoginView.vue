<template>
  <form v-on:change="error = ''">
    <div class="mdl-card mdl-shadow--6dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Log In</h2>
      </div>
      <hr/>
      <div class="mdl-card__supporting-text">
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--12-col">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input id="username" v-model="username" type="text" class="mdl-textfield__input" autofocus/>
              <label for="username" class="mdl-textfield__label">User name</label>
            </div>
          </div>
          <div class="mdl-cell mdl-cell--12-col">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input id="password" type="password" v-model="password" class="mdl-textfield__input"/>
              <label for="password" class="mdl-textfield__label">Password</label>
            </div>
          </div>
          <div class="mdl-cell mdl-cell--12-col">
            <span class="error">{{ error }}</span>
          </div>
        </div>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <button type="submit" @click.prevent="login" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          Login
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  import auth from '../auth';
  import router from '../router';

  export default {
    data () {
      return {
        'password': null,
        'username': null,
        'error': null
      };
    },
    methods: {
      login () {
        let credentials = {
          username: this.username,
          password: this.password
        };
        if (navigator.onLine && !auth.user.authenticated) {
          auth.login(this, credentials, { name: 'kegs' });
        } else if (auth.user.authenticated) {
          router.push({ name: 'kegs' });
        }
      }
    }
  };
</script>

<style scoped>

  .error{
    color: red;
  }

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

  .mdl-card__actions button{
    float: right;
  }
</style>
