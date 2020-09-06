<template>
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.loading {
  position: relative;
}

.loading span {
  display: block;
  bottom: 0;
  width: 9px;
  height: 5px;
  background: #2f404e;
  position: absolute;
  animation: preloader_1 1.5s infinite ease-in-out;
}

.loading span:nth-child(2) {
  left: 11px;
  animation-delay: .2s;
}

.loading span:nth-child(3) {
  left: 22px;
  animation-delay: .4s;
}

.loading span:nth-child(4) {
  left: 33px;
  animation-delay: .6s;
}

.loading span:nth-child(5) {
  left: 44px;
  animation-delay: .8s;
}

@keyframes preloader_1 {
  0% {
    height: 5px;
    transform: translateY(0px);
    background: #2f404e;
  }
  25% {
    height: 30px;
    transform: translateY(15px);
    background: #2f404e;
  }
  50% {
    height: 5px;
    transform: translateY(0px);
    background: #2f404e;
  }
  100% {
    height: 5px;
    transform: translateY(0px);
    background: #2f404e;
  }
}
</style>
