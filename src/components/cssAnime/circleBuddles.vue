<template>
  <div class="box">
    <div class="box-inner">
      <div class="buddles">
        <div></div>
      </div>
      <div class="buddles b-r">
        <div></div>
      </div>
    </div>
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
.box{
  background: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.box-inner{
  position: absolute;
  left: 50%;
  top: 50%;
  height: 300px;
  width: 300px;
  background:#0077AA;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow:hidden;
}
.box-inner:before{
  content: '';
  position: absolute;
  height: 80%;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #0086B3;
  z-index:3;
}
.box-inner:after{
  content: 'Loading...';
  text-align: center;
  line-height: 50px;
  color: white;
  font-size: 20px;
  position: absolute;
  height: 50px;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index:3;
}
.buddles{
  position: absolute;
  width: 100%;
  height: 50%;
  left: 0px;
  overflow:hidden;
  transform-origin: center bottom;
}
.buddles div{
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center bottom;
  animation: rotate 10s linear 0s infinite;
  background: orange;
  transform: rotate(180deg);
}
.b-r{
  transform: rotate(180deg);
}
.b-r div{
  animation: rotate 10s linear 2.5s infinite;
}

@keyframes rotate{
  0% {
    transform: rotate(180deg);
  }
  25% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(360deg);
  }
  75% {
    transform: rotate(540deg);
  }
  100% {
    transform: rotate(540deg);
  }
}
</style>