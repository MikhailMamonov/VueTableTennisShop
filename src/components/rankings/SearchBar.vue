<template>
    <div class = "v-autocomplete">
<div class="v-autocomplete-input-group" :class="{'v-autocomplete-selected': value}">
<h2>Search Product</h2>
				<input type="search" v-model="searchText" v-bind="inputAttrs"
                 :class="inputAttrs.class || inputClass"
            :placeholder="inputAttrs.placeholder || placeholder"
            :disabled="inputAttrs.disabled || disabled"
            @blur="blur" @focus="focus" @input="inputChange"
            @keyup.enter="keyEnter()" @keydown.tab="keyEnter" 
            @keydown.up="keyUp()" @keydown.down="keyDown">
                <div class="v-autocomplete-list" v-if="show">
      <div class="v-autocomplete-list-item" v-for="(item, i) in internalItems" :key="i" @click="onClickItem(item)"
           :class="{'v-autocomplete-item-active': i === cursor}" @mouseover="cursor = i">
        <div :is="componentItem" :item="item" :searchText="searchText"></div>
      </div>
    </div>
			
</div>
      </div>
</template>

<script>

import utils from "./../../utils/utils"
import Item from "./SearchItem"

export default {
    name: "search-bar",
     data () {
    return {
      searchText: '',
      showList: false,
      cursor: -1,
      internalItems: this.searchItems || []
    }
  },
    props: {
    componentItem: { default: () => Item },
    minLen: { type: Number, default: utils.minLen },
    wait: { type: Number, default: utils.wait },
    value: null,
    getLabel: {
      type: Function,
      default: item => item
    },
    autoSelectOneItem: { type: Boolean, default: true },
    placeholder: String,
    searchItems: Array,
    inputClass: {type: String, default: 'v-autocomplete-input'},
    disabled: {type: Boolean, default: false},
    inputAttrs: {type: Object, default: () => {return {}}},
    keepOpen: {type: Boolean, default: false}
  },
   computed: {
    hasItems () {
      
      return !!this.internalItems.length
    },
    show () {
      
      return (this.showList && this.hasItems) || this.keepOpen
    }
  },
  methods:{
      inputChange () {
      
      this.showList = true
      this.cursor = -1
      this.onSelectItem(null, 'inputChange')
      utils.callUpdateItems(this.searchText, this.updateItems)
      this.$emit('change', this.searchText)
    },

    updateItems () {
      
      this.$emit('update-searchItems', this.searchText)
    },

    focus () {
      this.$emit('focus', this.searchText)
      this.showList = true
    },

    blur () {
      this.$emit('blur', this.searchText)
      setTimeout( () => this.showList = false, 200)
    },

    onClickItem(item) {
      this.onSelectItem(item)
      this.$emit('item-clicked', item)
    },

    onSelectItem (item) {
      
      if (item) {
        this.internalItems = [item]
        this.searchText = this.getLabel(item)
        this.$emit('item-selected', item)
      } else {
        this.setItems(this.searchItems)
      }
      this.$emit('input', item)
    },

    setItems (items) {
      
      this.internalItems = items || []
    },

    isSelectedValue (value) {
      
      return 1 == this.internalItems.length && value == this.internalItems[0]
    },

    keyUp () {
      if (this.cursor > -1) {
        this.cursor--
        this.itemView(this.$el.getElementsByClassName('v-autocomplete-list-item')[this.cursor])
      }
    },

    keyDown () {
      if (this.cursor < this.internalItems.length) {
        this.cursor++
        this.itemView(this.$el.getElementsByClassName('v-autocomplete-list-item')[this.cursor])
      }
    },

    itemView (item) {
      if (item && item.scrollIntoView) {
        item.scrollIntoView(false)
      }
    },

    keyEnter () {
      if (this.showList && this.internalItems[this.cursor]) {
        this.onSelectItem(this.internalItems[this.cursor])
        this.showList = false
      }
    }
  },
  created () {
    utils.minLen = this.minLen
    utils.wait = this.wait
    this.onSelectItem(this.value)
  },
  watch: {
    items (newValue) {
          
      this.setItems(newValue)
      let item = utils.findItem(this.items, this.searchText, this.autoSelectOneItem)
      if (item) {
        this.onSelectItem(item)
        this.showList = false
      }
    },
    value (newValue) {
      if (!this.isSelectedValue(newValue) ) {
        this.onSelectItem(newValue)
        this.searchText = this.getLabel(newValue)
      }
    }
}}
</script>

<style lang="stylus">

.v-autocomplete {
    position: relative;
  }
  .v-autocomplete .v-autocomplete-list {
    position: absolute;
  }
  .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item {
    cursor: pointer;
  }
  .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item.v-autocomplete-item-active {
    background-color: #f3f6fa;
  }
</style>