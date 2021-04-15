<template lang="pug">
  .page-home
    ul
      li
        input(
          type="checkbox"
          id="checkbox-disable"
        )
        label(
          @click="selectDisabled = !selectDisabled"
          for="checkbox-disable"
        ) Disable select
      li
        input(
          v-model="color"
          placeholder="Input color (#hex)"
        )
      li
        input(
          v-model="maxWidth"
          placeholder="Input width (number)"
        )
    .rows
      div {{ `Selected value: ${selectedValue1 ? selectedValue1 : 'Empty'}` }}
      g-select(
        v-model="selectedValue1"
        :options="stringOptions"
        :disabled="selectDisabled"
        :maxWidth="maxWidth"
        :color="color"
        :reduce="option => option"
      )
        template(v-slot:placeholder="")
          .custom Custom placeholder
      div {{ `Selected value: ${selectedValue2 ? selectedValue2 : 'Empty'}` }}
      g-select(
        v-model="selectedValue2"
        :options="objectsOptions"
        :disabled="selectDisabled"
        :maxWidth="maxWidth"
        :color="color"
        label="label"
        :reduce="option => option.value"
      )
</template>

<script>

export default {
  name: 'PageHome',
  data() {
    return {
      selectDisabled: false,
      color: null,
      maxWidth: null,
      selectedValue1: null,
      selectedValue2: null,
      stringOptions: ['Option 1', 'Option 2', 'Option 3'],
      objectsOptions: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }],
    };
  },
};
</script>

<style lang="sass">
  .page-home
    margin: 30px auto
    width: 100%
    height: fit-content
    max-width: 800px
    display: grid
    grid-template: 1fr / 1fr
  .rows
    display: grid
    grid-template: repeat(2, 1fr) / repeat(2, 1fr)
    grid-gap: 10px
</style>
