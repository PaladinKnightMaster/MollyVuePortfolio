<template>
  <section id="portfolio" class="py-5 ">
    <div class="container">
      <div class="section-title d-flex">
        <h1 class="font-1 text-light">Portfolio</h1>
      </div>
      <!-- SECTION SAMADHIYOGAIDAHO -->

      <div class="row my-5">
        <div class="col-md-7">
          <a href="https://www.samadhiyogaidaho.com/#/" target="_blank">
            <img
              v-motion-slide-visible-once-bottom
              :delay="500"
              src="https://media.discordapp.net/attachments/1060066788878069891/1060067418073993226/samadhiApp.png?width=720&height=399"
              class="img-fluid elevation-6 rounded"
              alt="Project Image"
            />
          </a>
        </div>
        <div class="col-md-5 position-relative">
          <div class="d-flex">
            <div>
              <p
                v-motion-slide-visible-once-bottom
                :delay="500"
                class="font-1 fs-5 text-warning mt-3 mt-md-0"
              >
                Featured Project
              </p>
              <p
                v-motion-slide-visible-once-bottom
                :delay="600"
                class="font-1 fs-3 text-light text-shadow mb-1"
              >
                SamadhiYogaIdaho
              </p>
            </div>
            <div class="ms-4">
              <a
                v-motion-slide-visible-once-bottom
                :delay="600"
                href="https://www.samadhiyogaidaho.com/#/"
                class="mb-2"
                ><img
                  src="https://cdn-icons-png.flaticon.com/512/3971/3971765.png"
                  alt="external Link"
                  title="site Link"
                  width="60"
                  height="60"
              /></a>
            </div>
          </div>

          <div
            v-motion-slide-visible-once-bottom
            :delay="700"
            class="card elevation-6 p-2 border-0 bg-primary text-light project-description w-100"
          >
            <div
              v-motion-slide-visible-once-bottom
              :delay="800"
              class="card-body font-2"
            >
              Custom Designed and built website for a small yoga business owner
              client. intergrated Ghost for CMS Publishing for her blog as well
              as configuring MailGun for Email Service. The app will allow users
              to easily browse and sign up for classes, view class schedules,
              and purchase memberships and packages. It will also include a
              feature for teachers to manage their schedules and events and for
              the business to manage customer information. The SPA will be
              optimized for both desktop and mobile use, making it convenient
              for users to access from any device. Overall, the goal of the app
              is to provide a seamless and convenient experience for both the
              business and its customers.
            </div>

            <ul class="list-group list-group-horizontal bg-transparent">
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                Vue.Js
              </li>
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                BootStrap
              </li>
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                MongoDb
              </li>
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                PocketBase
              </li>
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                Ghost
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- !SECTION SAMADHIYOGAIDAHO -->
      <!-- SECTION BETTER AFTER BOOKS -->

      <div class="row my-6" style="">
        <div class="col-md-5 position-relative text-end order-1 order-md-0">
           <div class="d-flex justify-content-end">
              <div class="me-4">
              <a
                v-motion-slide-visible-once-bottom
                :delay="600"
                target="_blank"
                href="https://betterafterbooks.apps.devopportunities.dev/"
                class="mb-2"
                ><img
                  src="https://cdn-icons-png.flaticon.com/512/3971/3971765.png"
                  alt="external Link"
                  title="site Link"
                  width="60"
                  height="60"
              /></a>
            </div>
            <div>
              <p
                v-motion-slide-visible-once-bottom
                :delay="500"
                class="font-1 fs-5 text-warning mt-3 mt-md-0"
              >
                Featured Project
              </p>
              <p
                v-motion-slide-visible-once-bottom
                :delay="600"
                class="font-1 fs-3 text-light text-shadow mb-1"
              >
               Better After Books
              </p>
            </div>

          </div>
          <div
            v-motion-slide-visible-once-bottom
            :delay="700"
            class="card elevation-6 p-2 border-0 bg-primary text-light project-description-flip w-100"
            style="z-index: 9"
          >
            <div
              v-motion-slide-visible-once-bottom
              :delay="800"
              class="card-body text-start font-2"
            >
              Better After Books is a social network that allows users to
              discover new books and save them to a list collection (i.e, a
              wishlist,favorites,reading and finished list) and browsing what
              other users recommended and reviewed. Demonstrates a working
              knowledge of how to architect and design full-stack applications.
              Utilizing a VueJs frontend with Vue-Router to manage the DOM. On
              the server-side, using DotNet WebApi for server and implement the
              Repository pattern to communicate with a MySQL server for their
              database. In addition, Auth0 for user management, Dapper as an
              ORM.
            </div>

            <ul class="list-group list-group-horizontal bg-transparent">
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                Vue.Js
              </li>
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                C#
              </li>
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                DotNet
              </li>
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                MySQL
              </li>
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                Bootstrap
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-7 order-0 order-md-1">
          <a
            href="https://betterafterbooks.apps.devopportunities.dev/"
            target="_blank"
          >
            <img
              v-motion-slide-visible-once-bottom
              :delay="500"
              src="https://media.discordapp.net/attachments/1060066788878069891/1060067418820579439/BetterAfterBooks.png?width=720&height=390"
              class="img-fluid elevation-5 rounded"
              alt="Project Image"
            />
          </a>
        </div>
      </div>
      <!-- !SECTION BETTER AFTER BOOKS -->
      <!-- SECTION Keepr -->
      <div class="row my-5">
        <div class="col-md-7">
          <a target="_blank" href="https://keepr-project-demo.onrender.com">
            <img
              v-motion-slide-visible-once-bottom
              :delay="500"
              src="https://media.discordapp.net/attachments/1060066788878069891/1060068161329827850/keeperApp.png?width=720&height=413"
              class="img-fluid elevation-6 rounded"
              alt="Project Image"
            />
          </a>
        </div>
        <div class="col-md-5 position-relative">
           <div class="d-flex">
            <div>
              <p
                v-motion-slide-visible-once-bottom
                :delay="500"
                class="font-1 fs-5 text-warning mt-3 mt-md-0"
              >
                Featured Project
              </p>
              <p
                v-motion-slide-visible-once-bottom
                :delay="600"
                class="font-1 fs-3 text-light text-shadow mb-1"
              >
                Keepr
              </p>
            </div>
            <div class="ms-4">
              <a
                v-motion-slide-visible-once-bottom
                :delay="600"
                target="_blank"
                href="https://keepr-project-demo.onrender.com"
                class="mb-2"
                ><img
                  src="https://cdn-icons-png.flaticon.com/512/3971/3971765.png"
                  alt="external Link"
                  title="site Link"
                  width="60"
                  height="60"
              /></a>
            </div>
          </div>
          <div
            v-motion-slide-visible-once-bottom
            :delay="700"
            class="card elevation-6 p-2 border-0 bg-primary text-light project-description w-100"
          >
            <div
              v-motion-slide-visible-once-bottom
              :delay="800"
              class="card-body font-2"
            >
              Keepr is a social network that allows users to visually share and
              discover new interests by posting images or videos to their own,
              or others', collections (i.e., a collection of 'vaults,' usually
              with a common theme) and browsing what other users have kept.
              Demonstrates a working knowledge of building full-stack
              applications. Utilizing a VueJs frontend with Vue-Router to manage
              the DOM. On the server-side, using DotNet WebApi for their server
              and implement the Repository pattern to communicate with their
              database. In addition, Auth0 for user management, Dapper as an
              ORM, and a MySQL server for their database.
            </div>

            <ul class="list-group list-group-horizontal bg-transparent">
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                HTML
              </li>
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                CSS
              </li>
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                Javascript
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- !SECTION Keepr -->

      <!-- SECTION Tower -->
      <div class="row my-6" style="">
        <div class="col-md-5 position-relative text-end order-1 order-md-0">
           <div class="d-flex justify-content-end">
             <div class="me-4">
              <a
                v-motion-slide-visible-once-bottom
                :delay="600"
                href="https://thetower-f4he.onrender.com"
                class="mb-2"
                ><img
                  src="https://cdn-icons-png.flaticon.com/512/3971/3971765.png"
                  alt="external Link"
                  title="site Link"
                  width="60"
                  height="60"
              /></a>
            </div>
            <div>
              <p
                v-motion-slide-visible-once-bottom
                :delay="500"
                class="font-1 fs-5 text-warning mt-3 mt-md-0"
              >
                Featured Project
              </p>
              <p
                v-motion-slide-visible-once-bottom
                :delay="600"
                class="font-1 fs-3 text-light text-shadow mb-1"
              >
               Tower
              </p>
            </div>

          </div>
          <div
            v-motion-slide-visible-once-bottom
            :delay="700"
            class="card elevation-6 p-2 border-0 bg-primary text-light project-description-flip w-100"
            style="z-index: 9"
          >
            <div
              v-motion-slide-visible-once-bottom
              :delay="800"
              class="card-body text-start font-2"
            >
              SPA app designed to help people get together with other users for
              events as well as create them. VueJs with Vue-Router for the
              client. Express with Node.js and MongoDB with Mongoose to manage
              database and handling relationships of both one to many, and many
              to many objects. Identity management with Auth0.
            </div>

            <ul class="list-group list-group-horizontal bg-transparent">
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                Vue.Js
              </li>
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                Node.Js & Express
              </li>
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                BootStrap
              </li>
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="list-group-item"
              >
                MongoDb
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-7 order-0 order-md-1">
          <a href="https://thetower-f4he.onrender.com" target="_blank">
            <img
              v-motion-slide-visible-once-bottom
              :delay="500"
              src="https://cdn.discordapp.com/attachments/1060066788878069891/1060067418464075877/TowerSS.png"
              class="img-fluid elevation-5 rounded"
              alt="Project Image"
            />
          </a>
        </div>
      </div>
      <!-- !SECTION Tower -->
    </div>

    <div class="container mt-6" >

      <!-- SECTION LLC PROJECTS -->
      <div id="devProjects" class="row g-3 my-5">
        <div
          class="col-md-12 text-center d-flex align-items-center justify-content-center"
        >
          <div
            class="rounded-circle bg-light text-center devsopportunities-image elevation-6 d-none d-md-block"
          >
            <img src="../../assets/img/LLCLogo.png" alt="LLC Logo" class="" />
          </div>
          <p class="font-1 fs-2 text-warning ms-4">
            Projects & Works done under DevsOpportunities LLC:
          </p>
        </div>

        <div  class="col-md-6 test" v-for="d in devProjects">
          <ProjectCard :project="d" />
        </div>
      </div>
      <!-- !SECTION LLC PROJECTS -->
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import GitHubIcon from "../socialIcons/GitHubIcon.vue";
import ProjectCard from "../ProjectCard.vue";
export default {
  setup() {
    return {
      projects: computed(() => AppState.portfolioImages),
      archivedProjects: computed(() => AppState.archivedProjects),
      devProjects: computed(() => AppState.devProjects),
    };
  },
  components: { GitHubIcon },
};
</script>

<style lang="scss" scoped>
.devsopportunities-image {
  height: 100px;
  width: 100px;
  img {
    height: 100px;
    width: 100px;
  }
}

.scene {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  perspective: 800px;

  .card {
    position: relative;
    width: 240px;
    height: 300px;
    color: white;
    cursor: pointer;
    transition: 1s ease-out-in-out;
    transform-style: preserve-3d;

    &:hover {
      transform: rotateY(0.5turn);
    }

    .card__face {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      transition: 1s ease-out-in-out;
      -webkit-box-reflect: below 0
        linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));

      img {
        width: 240px;
        height: 300px;
        object-fit: cover;
      }

      &--back {
        transform: rotateY(0.5turn);
      }
    }
  }
}

.archived-project-card {
  transition: all 0.25s ease-out;
}
.archived-project-card:hover {
  transform: translateY(-10px) !important;
  filter: brightness(120%);
  cursor: pointer;
}
.mt-6{
  margin-top: 10rem;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px){
  margin-top: 3rem;
  }
}
.my-6 {
  margin-top: 17rem;
  margin-bottom: 15rem;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px){
    margin-top: 4rem;
  margin-bottom: 4rem;
  }
}

ul {
  display: flex;
  flex-wrap: wrap;
}

img {
  transition: all 0.5s ease-out;

}

img:hover {
  transition: all 0.5s ease-out;
  filter: brightness(120%);

  cursor: pointer;
  //when screen is 768px OR LESS
}

.project-description {
  left: -80px;
  position: absolute;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    position: static;
    background-color: rgba(27, 82, 95, 0.534) !important;
    backdrop-filter: blur(1px);
    transform: scale(0.5);
  }
}
.project-description-flip {
  position: absolute;
  left: 80px;
  @media only screen and (max-width: 768px) {
    position: static;
    background-color: rgba(27, 82, 95, 0.534) !important;
    backdrop-filter: blur(1px);
      transform: scale(0.5);
  }
}
</style>
