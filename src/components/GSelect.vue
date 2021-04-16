<template lang="pug">
  .g-select-wrapper(
    :style="{maxWidth: maxWidth ? `${maxWidth}px` : null}"
  )
    .g-select(
      v-bind="$attrs"
      @click="!disabled ? toggleOptions() : null"
      @blur="handleOptionsVisible()"
      :tabindex="0"
      :class="[{'open': optionsShown}, {'disabled': disabled}]"
      :style="{backgroundColor: color ? color : null}"
    )
      .g-selected
        .value(
          v-if="selected"
        ) {{ optionLabel }}
        .g-placeholder(
          v-else
        )
          .g-placeholder__custom(
            v-if="$slots.placeholder"
          )
            slot(name="placeholder")
          .g-placeholder__default(
            v-else
          ) Select option
      .g-select__actions
        .clear(
          v-if="selected"
          @click.stop="!disabled ? handleOptionClear() : null"
        ) {{ clearIcon }}
        .arrow {{ arrowIcon }}
    transition(name="fade")
      .g-select-options(
        v-if="optionsShown"
        :style="{backgroundColor: color}"
      )
        .option(
          v-for="(option, index) in options"
          :key="`${index}`"
          @click.stop="[handleOptionSelect(option), emitOption(option), handleOptionsVisible()]"
        )
          .option__icon(
            v-if="option.icon"
          ) {{ option.icon }}
          .option__value
            .value {{ reduce && typeof option === 'object' ? option.label : option }}
            .slot
              slot(
                name="option"
                v-bind:option="{ option, index }"
              )
        .no-options(
          v-if="options.length === 0"
        ) {{ noOptionsLabel }}
</template>

<script>

export default {
  name: 'GSelect',
  props: {
    options: {
      type: [Array, Object],
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: '',
    },
    reduce: {
      type: Function,
      default: (option) => option,
    },
    maxWidth: {
      type: String,
      default: null,
    },
    noOptionsLabel: {
      type: String,
      default: 'No options',
    },
  },
  data() {
    return {
      selected: null,
      optionLabel: null,
      optionsShown: false,
      arrowIcon: '▼️',
      clearIcon: '✕',
    };
  },
  methods: {
    toggleOptions() {
      this.optionsShown = !this.optionsShown;
    },
    handleOptionsVisible() {
      this.optionsShown = false;
    },
    handleOptionSelect(option) {
      this.selected = this.reduce(option);
      this.optionLabel = this.label ? option[this.label] : option;
    },
    handleOptionClear() {
      this.selected = null;
      this.emitOption('');
      this.optionsShown = false;
    },
    emitOption(option) {
      this.$emit('input', this.reduce ? this.reduce(option) : option);
    },
  },
};
</script>
