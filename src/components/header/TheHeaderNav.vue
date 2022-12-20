<template>
  <nav class="header-menu">
    <!-- <a class="header-menu__item">
      <svg
        width="24"
        height="24"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.79201 18.3673C8.83608 19.1959 10.1212 19.7339 11.5251 19.859V23.6237C9.0988 23.4605 6.89233 22.4952 5.16863 20.9907L7.79201 18.3673ZM6.74103 17.3378C5.88134 16.2992 5.31464 15.0093 5.1676 13.5946H1.49581C1.659 16.0206 2.62415 18.2268 4.12839 19.9504L6.74103 17.3378ZM5.16771 12.1235C5.31496 10.7087 5.88192 9.41876 6.74189 8.38026L4.12946 5.76782C2.6249 7.49125 1.6594 9.69743 1.4959 12.1235H5.16771ZM7.79308 7.35089C8.83696 6.52279 10.1217 5.98512 11.5251 5.86002V2.09577C9.09938 2.25889 6.89337 3.22378 5.16986 4.72767L7.79308 7.35089ZM12.9963 5.88155C14.3701 6.04501 15.6223 6.60481 16.6354 7.44338L19.3504 4.72836C17.6272 3.22446 15.4216 2.2594 12.9963 2.09589V5.88155ZM17.665 8.49437C18.473 9.5126 19.0047 10.7601 19.1466 12.1234H23.0236C22.8601 9.6978 21.8949 7.49192 20.3907 5.76861L17.665 8.49437ZM19.1467 13.5946C19.005 14.9579 18.4736 16.2053 17.6658 17.2236L20.3918 19.9496C21.8956 18.2262 22.8605 16.0202 23.0237 13.5946H19.1467ZM16.6364 18.2748C15.6232 19.1139 14.3706 19.674 12.9963 19.8375V23.6236C15.4222 23.46 17.6283 22.4945 19.3517 20.99L16.6364 18.2748ZM12.2598 25.1195C19.0306 25.1195 24.5195 19.6306 24.5195 12.8597C24.5195 6.08885 19.0306 0.599976 12.2598 0.599976C5.48888 0.599976 0 6.08885 0 12.8597C0 19.6306 5.48888 25.1195 12.2598 25.1195ZM12.2542 15.3052C13.6077 15.3052 14.705 14.2079 14.705 12.8544C14.705 11.5008 13.6077 10.4035 12.2542 10.4035C10.9006 10.4035 9.80332 11.5008 9.80332 12.8544C9.80332 14.2079 10.9006 15.3052 12.2542 15.3052Z"
          fill="url(#paint0_linear_134_808)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_134_808"
            x1="0"
            y1="0.599976"
            x2="24.5195"
            y2="25.1195"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF4900"></stop>
            <stop offset="1" stop-color="#FF6C36"></stop>
          </linearGradient>
        </defs>
      </svg>
      Roulette</a
    > -->
    <router-link to="/" class="header-menu__item" @mouseover="mouseOverPlinko">
      <the-header-nav-svg-icons iconName="Plinko" />
      Plinko
    </router-link>
    <!-- <router-link to="/crash" class="header-menu__item">
      <the-header-nav-svg-icons
        iconName="Crash"

      />
      Crash</router-link
    > -->
  </nav>
</template>

<script>
import TheHeaderNavSvgIcons from './TheHeaderNavSvgIcons.vue';

export default {
  components: {
    TheHeaderNavSvgIcons,
  },

  data() {
    return {
      svgFill: 'none',
      pathFill: 'white',
    };
  },
};
</script>
