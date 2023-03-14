<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- 라우터 링크 -->
            <a class="nav-link active" aria-current="page" href="#"><router-link to="/homePage">Home</router-link> </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/list">list-page</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">detail-page</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    <!-- <List :블로그글="블로그글"></List> -->
    <RouterView :블로그글="블로그글"></RouterView>
  </section>
</template>

<script>
import blog from './assets/blog.js'
// import List from './components/list.vue'

export default {
  name: 'App',
  data(){
    return{
      블로그글 : blog,
    }
  },
  components: {
    // List
  }
}
</script>

<style>

</style>
