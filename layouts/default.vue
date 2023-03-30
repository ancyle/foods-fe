<template>
  <VApp id="inspire">
    <VAppBar app elevation="8" density="default">
      <VAppBarNavIcon @click.stop="drawer = !drawer"></VAppBarNavIcon>
      <VToolbarTitle class="text-center mx-auto">{{ title }}</VToolbarTitle>
      <VBtn icon="ph:user"></VBtn>
      <!--  <VBtn icon="ph:basket"></VBtn>-->
      <CartButton></CartButton>
    </VAppBar>
    <VNavigationDrawer
      v-model="drawer"
      temporary
      elevation="20"
      width="300"
      floating
      absolute
      rounded
      disable-route-watcher
      disable-resize-watcher
    ></VNavigationDrawer>
    <VContainer fluid>
      <VMain>
        <slot />
      </VMain>
    </VContainer>
  </VApp>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
import CartButton from "../components/cart/CartButton.vue";
export default {
  name: "default",
  components: { CartButton },
  data() {
    return {
      drawer: false,
      items: [
        { icon: "apps", title: "Welcome", to: "/" },
        { icon: "bubble_chart", title: "Inspire", to: "/inspire" },
      ],
      title: "Meyve Sepeti",
    };
  },
};
</script>
