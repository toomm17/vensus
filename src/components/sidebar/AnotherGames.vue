<template>
  <div class="another-games-area">
    <div class="none-games__img" v-if="!this.sectionIsVisible" @click="clickOnArrow">
      <img :src="require('@/assets/images/arrow-down.svg')" alt="" class="big-arrow-down" />
    </div>
    <template v-if="this.sectionIsVisible">
      <div class="show-games">
        <a href="#" class="game-card">
          <div class="game-card-name">
            <div class="game-card-dot"></div>
            <div class="game-name__text">Roulette</div>
          </div>
        </a>
        <a href="#" class="game-card">
          <div class="game-card-name">
            <div class="game-card-dot"></div>
            <div class="game-name__text">Crash</div>
          </div>
        </a>
      </div>
      <div class="big-arrow-up" @click="clickOnArrow">
        <img :src="require('@/assets/images/big-arrow-up.svg')" alt="arrow" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sectionIsVisible: false,
    };
  },

  methods: {
    clickOnArrow() {
      this.sectionIsVisible = !this.sectionIsVisible;
    },
  },
};
</script>
