<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import camelCase from 'lodash/camelCase'

export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    source: {
      type: String,
      default: 'font-awesome',
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    // https://fontawesome.com/icons
    fontAwesomeIcon() {
      return {
        // Add new icons to this list as you need them
        // free solid
        addressCard: require('@fortawesome/fontawesome-free-solid/faAddressCard'),
        chartLine: require('@fortawesome/fontawesome-free-solid/faChartLine'),
        chartPie: require('@fortawesome/fontawesome-free-solid/faChartPie'),
        sync: require('@fortawesome/fontawesome-free-solid/faSync'),
        syncAlt: require('@fortawesome/fontawesome-free-solid/faSyncAlt'),
        siteMap: require('@fortawesome/fontawesome-free-solid/faSitemap'),
        storeAlt: require('@fortawesome/fontawesome-free-solid/faStoreAlt'),
        user: require('@fortawesome/fontawesome-free-solid/faUser'),
        userFriends: require('@fortawesome/fontawesome-free-solid/faUserFriends'),
        userCircle: require('@fortawesome/fontawesome-free-solid/faUserCircle'),
        school: require('@fortawesome/fontawesome-free-solid/faSchool'),
        signOutAlt: require('@fortawesome/fontawesome-free-solid/faSignOutAlt'),
        // brands
        facebook: require('@fortawesome/fontawesome-free-brands/faFacebookSquare'),
      }[this.name]
    },
    // Gets a CSS module class, e.g. iconCustomLogo
    customIconClass() {
      return this.$style[camelCase('icon-custom-' + this.name)]
    },
  },
}
</script>

<template>
  <FontAwesomeIcon
    v-if="source === 'font-awesome'"
    :icon="fontAwesomeIcon"
    v-bind="$attrs"
  />
  <span
    v-else-if="source === 'custom'"
    :class="customIconClass"
  />
</template>
