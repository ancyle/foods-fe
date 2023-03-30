<template>
  <v-btn @click="inc()" icon class="text-none">
    <v-badge :content="badgeCount" color="error">
      <v-icon>fluent:cart-24-regular</v-icon>
    </v-badge>
  </v-btn>
</template>

<script lang="ts">
export default {
  name: "CartButton",
  components: {},
  methods: {
    inc() {
      this.badgeCount += 1;
    },
  },
  data() {
    return {
      badgeCount: 0,
    };
  },
};
</script>

<style scoped></style>
