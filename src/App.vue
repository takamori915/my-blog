<template>
  <v-app>
    <v-container>
      <v-app-bar color="#FFFFFF" flat max-height="100" class="mb-5">
        <v-toolbar-title>
          <h1><router-link to="/" class="logo">BLOG</router-link></h1>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div id="nav">
          <router-link to="/">Home</router-link> | 
          <router-link to="/about">About</router-link> 
        </div>
      </v-app-bar>
      <router-view/>
    </v-container>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
