
<template>
  <header>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Taka-Cafe</v-toolbar-title>
      <v-tabs>
        <v-tab v-for="(menuItem, index) in menuItems" :key="index">
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <div id="nav">
        <router-link to="/">Home</router-link> | 
        <router-link to="/about">About</router-link> 
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary link>
      <v-list nav dense>
        <v-list-item v-for="(menuItem, index) in menuItems" :key="index">
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