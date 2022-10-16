
<template>
  <header>
    <v-app-bar app dark clipped-left>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Taka-Cafe</v-toolbar-title>
      <v-tabs>
        <v-tab v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url">
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-btn icon class="ma-2" to="/search">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app dark temporary clipped link>
      <v-list nav dense>
        <v-list-item v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url">
          <v-list-item-content>
            <v-list-item-title> {{ menuItem.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import constants from '../common/constants'

export default {
  data: () => {
    return {
      drawer: false,
      menuItems: constants.menuItems,
    }
  }
}
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}
.v-tabs {
  display : none;
  @include display_pc {
    display: block !important;
  }
}
</style>