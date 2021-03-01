<template>
  <div
    :id="id"
    :ref="id"
    :class="[
      error ? 'outline-red' : 'outline-none',
      customClass,
      disableInput && 'cursor-pointer bg-white',
      dropdownOpen ? 'border-1 border-ocean-dark' : 'border-white-dark-2',
    ]"
    class="h-base-select-input flex items-center appearance-none px-4 py-2 rounded placeholder-gray-500 text-gray-900 focus:z-10 cursor-pointer bg-white-light"
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
    @click="handleToggleSelect"
    @focusout="handleFocusOutOfDropdown"
    tabindex="-1"
  >
    <div class="flex items-center justify-between w-full">
      <div class="text-black-dark opacity-50 text-sm">
        {{ composeInputPlaceholder }}
      </div>
      <div>
        <AppIcon
          v-show="!dropdownOpen"
          icon="DownArrow"
          width="12"
          height="12"
        />
        <AppIcon
          v-show="dropdownOpen"
          icon="UpArrow"
          width="12"
          height="12"
        />
      </div>
    </div>
  </div>
  <div
    id="select-dropdown-wrapper"
    tabindex="0"
    :class="{ hidden: !dropdownOpen, customClass }"
    class="tags-selector js-active outline-none"
  >
    <div class="tags-selector__header">
      <button
        type="button"
        class="tags-selector__button"
      >
        <span
          class="icon icon--normal icon--cog"
          style="width: 24px; height: 24px"
        ><AppIcon
          icon="Setting"
        /></span>
      </button>
      <div class="tags-selector__tags">
        Colors
      </div>
    </div>
    <div
      @focusout="handleFocusOutOfSearchInput"
      tabindex="-1"
      class="tags-selector__input-container"
    >
      <AppIcon
        v-show="searchInputFocused"
        icon="Search"
        width="16"
        height="15"
      />
      <div
        v-show="!searchInputChanged"
        id="search-add-tag-text"
        tabindex="0"
        class="tags-selector__placeholder outline-none"
        :class="searchInputFocused && 'active'"
        @click="handleSearchInputFocus"
      >
        Search or add tag
      </div>
      <input
        id="search-add-tag-input"
        class="search-add-tag-input"
        type="text"
        @click="handleSearchInputFocus"
        @input="handleSearchInputChange"
      >
    </div>
    <!----><!----><!---->
    <div>
      <div
        class="tags-selector__scroll vb vb-invisible"
        style="position: relative; overflow: hidden"
      >
        <div class="tags-selector__list vb-content">
          <div
            v-for="option in options"
            :key="option.value"
            class="tags-selector__list-item tag-list-item"
            :class="[
              option.selected &&
                'tag-list-item--selected tags-selector__list-item--selected',
              tagItemFocus === option.value && 'tag-list-item--focused',
            ]"
            @click="
              mode === 'multiple'
                ? handleToggleSelectItem(option.value)
                : handleSelectSingleItem(option.value)
            "
          >
            <div
              class="tag-list-item__color"
              :class="{ [option.color]: true, hidden: mode === 'single' }"
            />
            <div
              class="tag-list-item__name"
              :class="{ 'ml-2.5': mode === 'single' }"
            >
              <span>{{ option.label }}</span>
            </div>

            <div
              v-if="option.selected"
              class="mr-1"
              :class="{ hidden: mode === 'single' }"
            >
              <AppIcon
                icon="Tick"
                width="24"
                height="10"
              />
            </div>
          </div>
        </div>
        <div
          class="vb-dragger"
          style="position: absolute; height: 0px; top: 0px"
        >
          <div class="vb-dragger-styler" />
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue"
import AppIcon from "@/components/AppIcon"

export default {
  name: "BaseSelect",
  components: { AppIcon },
  props: {
    customClass: {
      type: String,
      default: "w-long-input",
    },
    error: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    disableInput: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      required: true,
    },
    mode: {
      type: String,
      default: "single",
    },
  },
  emits: [
    "update:modelValue",
    "blur",
    "enter",
    "handleToggleSelectItem",
    "handleSelectSingleItem",
  ],
  setup(props, { emit }) {
    let dropdownOpen = ref(false)
    let searchInputFocused = ref(false)
    let searchInputChanged = ref(false)
    let tagItemFocus = ref("")

    const optionSelectedCount = computed(() => {
      return props.options.filter(option => option.selected)
    })

    const composeInputPlaceholder = computed(() => {
      return optionSelectedCount.value.length > 0
        ? `${optionSelectedCount.value.length} selected`
        : "Select one or more colors"
    })

    function handleToggleSelect() {
      dropdownOpen.value = !dropdownOpen.value
    }

    function handleToggleSelectItem(itemValue) {
      tagItemFocus.value = itemValue

      const updatedOptions = props.options.map(item => {
        if (item.value === itemValue) {
          return {
            ...item,
            selected: !item.selected,
          }
        }
        return item
      })
      emit("handleToggleSelectItem", updatedOptions)
    }

    function handleSelectSingleItem(itemValue) {
      tagItemFocus.value = itemValue

      const updatedOptions = props.options.map(item => {
        if (item.value === itemValue) {
          return {
            ...item,
            selected: true,
          }
        }
        return {
          ...item,
          selected: false,
        }
      })
      emit("handleSelectSingleItem", updatedOptions)
    }

    function handleSearchInputFocus() {
      // console.log('search input')
      searchInputFocused.value = true

      // convert to ref later
      document.getElementById("search-add-tag-input").focus()
    }

    function handleSearchInputChange(event) {
      searchInputChanged.value = !!event.target.value
    }

    function handleFocusOutOfSearchInput(event) {
      // currentTarget is the parent, relatedTarget is the one being clicked
      // so if parent doesn't contain clicked one => this clicked one is outside of parent
      // => fire focus out
      if (!event.currentTarget.contains(event.relatedTarget)) {
        // console.log('focus out')
        searchInputFocused.value = false
        searchInputChanged.value = false
      }
    }

    function handleFocusOutOfDropdown(event) {
      console.log(event.relatedTarget && event.relatedTarget.id)
      // currentTarget is the parent, relatedTarget is the one being clicked
      // so if parent doesn't contain clicked one => this clicked one is outside of parent
      // => fire focus out
      if (
        !event.currentTarget.contains(event.relatedTarget) &&
        event.relatedTarget?.id !== "select-dropdown-wrapper" &&
        event.relatedTarget?.id !== "search-add-tag-text"
      ) {
        // console.log('focus out')
        dropdownOpen.value = false
      }
    }

    return {
      dropdownOpen,
      searchInputFocused,
      searchInputChanged,
      tagItemFocus,
      optionSelectedCount,
      composeInputPlaceholder,
      handleToggleSelect,
      handleToggleSelectItem,
      handleSelectSingleItem,
      handleSearchInputFocus,
      handleSearchInputChange,
      handleFocusOutOfSearchInput,
      handleFocusOutOfDropdown,
    }
  },
}
</script>
<style scoped>
div.tags-selector.js-active {
  padding: 8px 0 8px 8px;
  border-radius: 4px;
  box-shadow: 0 15px 18px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid hsla(0, 0%, 92.9%, 0.62);
  background-color: #fff;
  color: #3b3b3b;
}

div.tags-selector__header {
  align-items: center;
  color: #3b3b3b;
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
}

button.tags-selector__button {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  height: 36px;
  justify-content: center;
  line-height: inherit;
  margin: 0;
  overflow: visible;
  width: 36px;
}

button.tags-selector__button:hover {
  background-color: #f8f9fa;
}

button.tags-selector__button:focus {
  outline: none;
}

button.tags-selector__button:active {
  background-color: #f0f2f5;
}

div.tags-selector__tags {
  color: #3b3b3b;
  text-align: center;
  width: 100%;
}

div.tags-selector__input-container {
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 4px;
  color: #3b3b3b;
  cursor: default;
  display: flex;
  height: 41px;
  margin-right: 8px;
  margin-top: 8px;
  margin-bottom: 4px;
  padding: 5px 10px;
  position: relative;
}

.tags-selector__input-container > svg {
  cursor: default;
  display: block;
  margin-right: 16px;
  /*opacity: 0;*/
  transition: opacity 0.1s ease 0s;
  /*visibility: hidden;*/
}

div.tags-selector__placeholder {
  bottom: 0;
  color: #646464;
  cursor: pointer;
  font-size: 14px;
  height: 20px;
  /*inset: 0;*/
  left: 0;
  letter-spacing: normal;
  line-height: 1.43;
  margin-bottom: auto;
  margin-left: calc(50% - 50px);
  margin-top: auto;
  opacity: 0.5;
  position: absolute;
  right: 0;
  text-align: left;
  top: 0;
  transition: margin 0.2s linear 0s;
  width: 110px;
}

div .tags-selector__placeholder.active {
  margin-left: 42px;
  pointer-events: none;
}

.search-add-tag-input {
  -webkit-box-flex: 1;
  background-color: transparent;
  border: 0;
  box-sizing: border-box;
  color: inherit;
  display: block;
  flex: 1 1 0;
  font: inherit;
  letter-spacing: normal;
  line-height: inherit;
  margin: 0;
  outline: none;
  overflow: visible;
}

.tags-selector__list-item {
  color: #646464;
  font-size: 14px;
  line-height: 1.43;
  min-height: 36px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 3px;
  margin-right: 8px;
  cursor: pointer;
}

.tags-selector__list .vb-content {
  display: block;
  overflow: hidden scroll;
  height: 100%;
  width: 100%;
  box-sizing: content-box;
  padding-right: 20px;
}

.tag-list-item--focused {
  background-color: #f8f9fa;
}

.tag-list-item:hover {
  background-color: #f8f9fa;
}

div.tag-list-item__color {
  /*background-color: #9f55b1;*/
  border-radius: 50%;
  color: #252729;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  height: 16px;
  margin: 0 16px 0 10px;
  text-align: left;
  width: 16px;
}

div.tag-list-item__name {
  flex: 1 1 0;
}

div.tag-list-item__name span {
  box-sizing: border-box;
  color: #252729;
  cursor: pointer;
}

/*.tag-list-item--focused > svg:not(:root) {*/
/*  overflow: hidden;*/
/*}*/

/*.tag-list-item--focused > svg > path {*/
/*  box-sizing: border-box;*/
/*  color: #252729;*/
/*  cursor: pointer;*/
/*  font-family: Lato;*/
/*  font-size: 14px;*/
/*  font-weight: 600;*/
/*  letter-spacing: 0.1px;*/
/*  line-height: 20.02px;*/
/*  text-align: left;*/
/*}*/

div.tags-selector__list-item.tag-list-item.tag-list-item--selected.tags-selector__list-item--selected {
  color: #252729;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}

@media screen and (max-width: 767px) {
  div.tags-selector.js-active {
    background-color: #ffffff;
    border-radius: 10px 10px 0 0;
    bottom: 0;
    left: 0;
    padding-bottom: 0;
    position: absolute;
    right: 0;
    transform: none;
    width: auto;
  }

  div.tags-selector__scroll {
    height: 300px;
  }
}

@media screen and (min-width: 768px) {
  div.tags-selector__header {
    margin-right: 36px;
  }
}
</style>
