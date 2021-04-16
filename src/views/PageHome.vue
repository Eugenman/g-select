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
        template(v-slot:option="{ option, index}")
          div {{ option.index + 1 }}
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
      div {{ `Selected value: ${selectedValue3 ? selectedValue3 : 'Empty'}` }}
      g-select(
        v-model="selectedValue3"
        :options="objectsOptions1"
        :disabled="selectDisabled"
        :maxWidth="maxWidth"
        :color="color"
        label="label"
        :reduce="option => option.value"
      )
      div 'No options'
      g-select(
        :disabled="selectDisabled"
        :maxWidth="maxWidth"
        :color="color"
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
      selectedValue3: null,
      selectedValue4: null,
      stringOptions: ['Option 1', 'Option 2', 'Option 3'],
      objectsOptions: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }],
      objectsOptions1: [{ label: 'Option 1', value: 1, icon: '✕' }, { label: 'Option 2', value: 2, icon: '▼️' }],
    };
  },
};
</script>
