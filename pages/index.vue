<template>
  <VContainer fluid>
    <VRow class="mb-10 mt-5">
      <VAlert
        border="bottom"
        color="deep-purple-accent-4"
        border-color="yellow-accent-1"
        elevation="2"
        class="text-center text-h4"
      >
        FOODS
      </VAlert>
    </VRow>
    <VRow align="center" justify="center" class="text-center">
      <VCol cols="3" v-for="food in foods.meals" :key="food.idMeal">
        <VCard>
          <VCardTitle>{{ food.strMeal }}</VCardTitle>
          <VCardSubtitle></VCardSubtitle>
          <VCardItem
            ><VImg
              cover
              :lazy-src="'https://picsum.photos/10/6?image=25'"
              :src="food.strMealThumb"
            ></VImg
          ></VCardItem>
          <VCardText></VCardText>
          <VCardActions class="d-flex align-center justify-center">
            <v-snackbar
              :timeout="2000"
              color="deep-purple-accent-4"
              elevation="20"
              >{{ food.strMeal }}
              <template v-slot:activator="{ props }">
                <VBtn v-bind="props" color="primary" variant="outlined"
                  >Add</VBtn
                >
              </template>
            </v-snackbar>
          </VCardActions>
        </VCard></VCol
      >
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
const foods = await useFetch(
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
).then((resp) => {
  return resp.data;
});
</script>

<style scoped></style>
