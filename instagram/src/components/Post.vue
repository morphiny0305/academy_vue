<template>
  <section>
    <div class="post">
      <div class="post-header">
        <div class="profile"></div>
        <span class="profile-name"> morphine </span>
      </div>
      <div class="post-body">
      </div>
      <div class="post-content">
        <p>100 Likes</p>
        <p><strong>morphine</strong> 그리운 연진에게. </p>
        <p class="date">March 15. 2023.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {

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
  background-position: center;
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