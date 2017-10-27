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
            </div>
            <hr/>
            <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
              <div class="mdl-cell mdl-cell--1-col mdl-cell--hide-phone"></div>
              <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
                <h4>Progressive Web App (PWA) <a href="https://developers.google.com/web/progressive-web-apps/" target="_blank"><i class="material-icons">link</i></a></h4>
                <p>
                  A PWA is a web app that uses modern web capabilities to deliver an app-like experience to users.
                  A PWA isn't a certain set of technologies, but rather a set of guidelines and requirements that utilize
                  the same web tech used to develop server driven apps to single page apps.
                </p>
                <p>
                  Google has a great <a href="https://codelabs.developers.google.com/codelabs/your-first-pwapp" target="_blank">web lab</a>
                  that covers the high level elements of what a PWA entails:
                </p>
                <ul class="mdl-list">
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span><strong>Progressive</strong></span>
                      <span class="mdl-list__item-sub-title">Works for every user, regardless of browser choice because it's built with progressive enhancement as a core tenet.</span>
                    </span>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span><strong>Responsive</strong></span>
                      <span class="mdl-list__item-sub-title">Fits any form factor: desktop, mobile, tablet, or whatever is next.</span>
                    </span>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span><strong>Connectivity independent</strong></span>
                      <span class="mdl-list__item-sub-title">Enhanced with service workers to work offline or on low-quality networks.</span>
                    </span>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span><strong>App-like</strong></span>
                      <span class="mdl-list__item-sub-title">Feels like an app, because the app shell model separates the application <em>functionality</em> from application <em>content</em>.</span>
                    </span>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span><strong>Fresh</strong></span>
                      <span class="mdl-list__item-sub-title">Always up-to-date thanks to the <a href="https://developers.google.com/web/fundamentals/getting-started/primers/service-workers" target="_blank">service worker</a> update process.</span>
                    </span>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span><strong>Safe</strong></span>
                      <span class="mdl-list__item-sub-title">Served via HTTPS to prevent snooping and to ensure content hasn't been tampered with.</span>
                    </span>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span><strong>Discoverable</strong></span>
                      <span class="mdl-list__item-sub-title">Is identifiable as an "application" thanks to <a href="https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-</span>for-Android" target="_blank">W3C manifest</a> and <a href="https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/registration" target="_blank">service worker registration</a> scope, allowing search engines to find it.</span>
                    </span>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span><strong>Re-engageable</strong></span>
                      <span class="mdl-list__item-sub-title">Makes re-engagement easy through features like push notifications.</span>
                    </span>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span><strong>Installable</strong></span>
                      <span class="mdl-list__item-sub-title">Allows users to add apps they find most useful to their home screen without the hassle of an app store.</span>
                    </span>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span><strong>Linkable</strong></span>
                      <span class="mdl-list__item-sub-title">Easily share the application via URL, does not require complex installation.</span>
                    </span>
                  </li>
              </ul>

              </div>
              <div class="mdl-cell mdl-cell--1-col mdl-cell--hide-phone"></div>
            </div>
          </div>
        </section>
        <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <div class="mdl-card mdl-cell mdl-cell--12-col">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">Technology</h2>
            </div>
            <hr/>
            <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
              <div class="mdl-cell mdl-cell--1-col mdl-cell--hide-phone"></div>
              <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
                This site is an example PWA built using some of the leading web technologies to bring a fast, modern experience anywhere.

                <h4>Front end</h4>
                <ul class="mdl-list">
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span>Vue.js</span>
                      <span class="mdl-list__item-sub-title">Progressive JavaScript Framework</span>
                    </span>
                    <a class="mdl-list__item-secondary-action" href="https://vuejs.org" target="_blank"><i class="material-icons">link</i></a>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span>Material Design Lite</span>
                      <span class="mdl-list__item-sub-title">Material Design Component and CSS Library</span>
                    </span>
                    <a class="mdl-list__item-secondary-action" href="https://getmdl.io" target="_blank"><i class="material-icons">link</i></a>
                  </li>
                </ul>

                <h4>Build Tools</h4>
                <ul class="mdl-list">
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span>Webpack</span>
                      <span class="mdl-list__item-sub-title">Module and Asset bundler</span>
                    </span>
                    <a class="mdl-list__item-secondary-action" href="https://webpack.js.org/" target="_blank"><i class="material-icons">link</i></a>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span>Browsersync</span>
                      <span class="mdl-list__item-sub-title">Time-saving synchronised browser testing</span>
                    </span>
                    <a class="mdl-list__item-secondary-action" href="https://www.browsersync.io/" target="_blank"><i class="material-icons">link</i></a>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span>ESLint</span>
                      <span class="mdl-list__item-sub-title">A frustratingly helpful utility to enforce code style standards</span>
                    </span>
                    <a class="mdl-list__item-secondary-action" href="https://eslint.org/" target="_blank"><i class="material-icons">link</i></a>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span>Babel</span>
                      <span class="mdl-list__item-sub-title">JavaScript Transpiler</span>
                    </span>
                    <a class="mdl-list__item-secondary-action" href="https://getmdl.io" target="_blank"><i class="material-icons">link</i></a>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span>Node.js</span>
                      <span class="mdl-list__item-sub-title">JavaScript Runtime</span>
                    </span>
                    <a class="mdl-list__item-secondary-action" href="https://nodejs.org/en/" target="_blank"><i class="material-icons">link</i></a>
                  </li>
                </ul>

                <h4>Back End</h4>
                <ul class="mdl-list">
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span>Python</span>
                      <span class="mdl-list__item-sub-title">Best programming language ever</span>
                    </span>
                    <a class="mdl-list__item-secondary-action" href="https://www.python.org/" target="_blank"><i class="material-icons">link</i></a>
                  </li>
                  <li class="mdl-list__item mdl-list__item--two-line">
                    <span class="mdl-list__item-primary-content">
                      <span>Django REST Framework</span>
                      <span class="mdl-list__item-sub-title">Django Web API Framework toolkit</span>
                    </span>
                    <a class="mdl-list__item-secondary-action" href="http://www.django-rest-framework.org/" target="_blank"><i class="material-icons">link</i></a>
                  </li>
                </ul>
              </div>
              <div class="mdl-cell mdl-cell--1-col mdl-cell--hide-phone"></div>
            </div>
          </div>
        </section>
        <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <div class="mdl-card mdl-cell mdl-cell--12-col">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">Next Steps</h2>
            </div>
            <hr/>
            <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
              <div class="mdl-cell mdl-cell--1-col mdl-cell--hide-phone"></div>
              <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
                <h4>Full Functionality - Offline</h4>
                <p>
                  We can leverage localStorage to store user requests to add, edit, or delete data stored in the api. We can store these
                  requests and check when the user comes back online at a later time and execute their requests behind the scenes for them.
                </p>
                <h4>Device Integration</h4>
                <p>
                  Chrome has an API called <strong>Image Capture</strong> that allows us to discover and use device media, such as cameras.
                  <a href="https://developers.google.com/web/updates/2016/12/imagecapture" target="_blank">Here</a> is a blog about utilizing this API
                  to discover and choose devices. This means that when a user "installs" our PWA on their device, we can
                  provide an integration for them to capture a picture offline and our app can post it to the API later.
                </p>
              </div>
              <div class="mdl-cell mdl-cell--1-col mdl-cell--hide-phone"></div>
            </div>
          </div>
        </section>
        <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <div class="mdl-card mdl-cell mdl-cell--12-col">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">Credit</h2>
            </div>
            <hr/>
            <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
              <div class="mdl-cell mdl-cell--1-col mdl-cell--hide-phone"></div>
              <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">

                <p>
                  Credit to Charles Bochet and his super helpful
                  <a href="https://blog.sicara.com/a-progressive-web-application-with-vue-js-webpack-material-design-part-1-c243e2e6e402" target="_blank">blog series</a>
                  on this topic.
                </p>
              </div>
              <div class="mdl-cell mdl-cell--1-col mdl-cell--hide-phone"></div>
            </div>
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

<style scoped>
  .add-keg-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
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

  .mdl-card__actions a {
    float: right;
  }
</style>
