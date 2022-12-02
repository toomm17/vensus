<script>
export default {
  emits: {
    changeTheme: Boolean,
  },

  methods: {
    changeTheme() {
      this.$emit('changeTheme', true);
      conosle.log('emit on themeHeader');
    },
  },
};
</script>

<template>
  <div class="theme-change header_btn" @click="this.changeTheme"></div>
</template>
