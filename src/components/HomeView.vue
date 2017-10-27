<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--2-col">
      </div>
      <div class="mdl-cell mdl-cell--8-col">
        <section class="section--center mdl-grid">
          <div class="mdl-cell mdl-cell--12-col">
            <h5>The IPA API provides homebrewers the ability to install a few sensors and gather tons of data about their
              brews that can be accessed anywhere.</h5>
          </div>
        </section>
        <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <div class="mdl-card mdl-cell mdl-cell--12-col">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">Architecture</h2>
              <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" style="position: absolute; right: 10px;">
                <i class="material-icons">more_vert</i>
              </button>
            </div>
            <hr/>
            <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
              <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                <h5>Progressive Web app</h5>
                Overview <a href="#">todo</a>.
              </div>
              <div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                <div class="section__circle-container__circle mdl-color--accent"></div>
              </div>
            </div>
            <div class="mdl-card__actions">
              <a href="#" class="mdl-button">Read our features</a>
            </div>
          </div>
          <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn2">
            <li class="mdl-menu__item">Lorem</li>
            <li class="mdl-menu__item" disabled>Ipsum</li>
            <li class="mdl-menu__item">Dolor</li>
          </ul>
        </section>
        <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <div class="mdl-card mdl-cell mdl-cell--12-col">
            <div class="mdl-card__supporting-text">
              <h4>Technology</h4>
              This site is built using some of the leading web technologies to bring a fast, modern experience anywhere.
            </div>
            <div class="mdl-card__actions">
              <a href="#" class="mdl-button">Read our features</a>
            </div>
          </div>
          <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn3">
            <i class="material-icons">more_vert</i>
          </button>
          <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn3">
            <li class="mdl-menu__item">Lorem</li>
            <li class="mdl-menu__item" disabled>Ipsum</li>
            <li class="mdl-menu__item">Dolor</li>
          </ul>
        </section>
        <section class="section--footer mdl-color--white mdl-grid">
          <div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
            <div class="section__circle-container__circle mdl-color--accent section__circle--big"></div>
          </div>
          <div class="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
            <h5>Lorem ipsum dolor sit amet</h5>
            Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.
          </div>
          <div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
            <div class="section__circle-container__circle mdl-color--accent section__circle--big"></div>
          </div>
          <div class="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
            <h5>Lorem ipsum dolor sit amet</h5>
            Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.
          </div>
        </section>
      </div>
      <div class="mdl-cell mdl-cell--2-col">
      </div>
    </div>
    <router-link class="add-keg-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect" to="/keg">
      <i class="material-icons">add</i>
    </router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      };
    },
    methods: {
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
