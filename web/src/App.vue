<template>
  <NavBar />
  <router-view></router-view>
</template>


<script>
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
// import $ from 'jquery'

export default {
  name: "App",
  components: {
    NavBar,
  },
  setup() {

    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/info/",
    //   type: "get",
    //   headers: {
    //     Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhMmJjMDYwZGRmYTI0Y2E2YTQ1YTA2NGM3MDVmMGIzNyIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTY2NjM1MjkxOCwiZXhwIjoxNjY3NTYyNTE4fQ.SltPkgANQq7rT-eMGVf1sotl_znSgYjd3Pk6gr0XTWM",
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // });

    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/register/",
    //   type: "post",
    //   data: {
    //     username: "czm5",
    //     password: "123",
    //     confirmedPassword: "123",
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // });

  },

}
</script>

<style>
body {
  background-image: url("@/assets/images/background.png");
  background-size: cover;
}
</style>
