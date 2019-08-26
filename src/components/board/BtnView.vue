<template>
  <div >
    <div class="btn-test" data-text='Login'></div>
    <div class="btn-test" data-text='Register'></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data () {
    return {
    }
  },
  mounted ()  {
  },
}
</script>

<style scoped>
.btn-test{
  position: relative;
  width: 120px;
  height: 50px;
  line-height: 36px;
  font-size: 20px;
  margin-top: 5px;
  text-align: center;
  border: 1px solid #0077AA;
  background: #faf7d9;
  cursor: pointer;
}
.dasd{
  transform-origin: right bottom;
  animation: rotate 4s linear 0s infinite;
}
.btn-test:before{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #4aa9a4;
  transform: scale(0);
  transition: all .35s cubic-bezier(0.77,0,0.17,1.02) 0s;
}
.btn-test:hover:before{
  transform: scale(1);
}
.btn-test:after{
  content: attr(data-text);
  text-align: center;
  position: absolute;
  border-radius: 5px;
  top: 4px;
  bottom: 4px;
  left: 4px;
  right: 4px;
  border:2px dashed #323741;
}

@keyframes rotate {
  from {
    transform: rotate(0); }
  to {
    transform: rotate(360deg); } 
  }
</style>