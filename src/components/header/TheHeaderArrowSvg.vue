<template>
  <svg
    v-if="!this.dropSeen"
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    id="arrow-svg"
  >
    <path d="M1 1.05151L6.89697 6.94849L12.7939 1.05151" stroke="black" stroke-width="2.14435" />
  </svg>
  <svg
    v-if="this.dropSeen"
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    id="arrow-svg"
  >
    <path d="M12.7939 7.94849L6.89697 2.05151L1 7.94849" stroke="white" stroke-width="2.14435" />
  </svg>
</template>

<script>
export default {
  props: {
    dropSeen: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
