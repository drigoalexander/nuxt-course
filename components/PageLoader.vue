<template>
  <div
    class="flex min-h-screen w-full items-center justify-center bg-black gap-4 flex-col fixed left-0 top-0 z-50"
  >
    <div class="loader"></div>
    <span v-if="loginProcess" class="text-xl -tracking-wider"
      >Authenticating</span
    >
    <span v-else class="text-xl -tracking-wider">Hang on tight</span>
  </div>
</template>
<script setup>
const props = defineProps({
  loginProcess: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped>
.loader {
  width: 35px;
  aspect-ratio: 1;
  border: 3px solid #fff;
  animation: l1 2s infinite;
}
@keyframes l1 {
  0% {
    border-radius: 50% 50% 0 0;
    border-color: #fff;
  }
  25% {
    border-radius: 0 50% 50% 0;
  }
  50% {
    border-radius: 0 0 50% 50%;
    border-color: #00dc82;
  }
  75% {
    border-radius: 50% 0 0 50%;
  }
  100% {
    border-radius: 50% 50% 0 0;
    border-color: #fff;
  }
}
</style>
