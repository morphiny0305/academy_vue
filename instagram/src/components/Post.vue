<template>
  <section>
    <div class="post">
      <div class="post-header">
        <div class="profile" :style="{backgroundImage: `url(${게시물.userImage})`}"></div>
        <span class="profile-name"> {{ 게시물.name }} </span>
      </div>
      <!-- '문자' + 변수 + '문자' = `문자 ${변수} 문자` -->
      <div class="post-body" :style="{backgroundImage: `url(${게시물.postImage})`}"></div>
      <div class="post-content">
        <p>{{ 게시물.likes }} Likes</p>
        <p><strong>{{ 게시물.name }}</strong> {{ 게시물.content }} </p>
        <p class="date">{{ 게시물.date }}</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'post',
  /* data(){
    return{

    }
  }, */
  props: {
    게시물: Object,
  }
}
</script>

<style>

.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: top center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>