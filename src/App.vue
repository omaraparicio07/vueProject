<template>
  <div id="app">
    <!-- NavBar -->
     <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/" class="text-white font-weight-bold"> Schemas Converter Tool </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/ERSchemaEditor" class="font-weight-bold text-white" exact>ER Schema Editor </b-nav-item>
            <b-nav-item to="/RelationalSchema" class="font-weight-bold text-white"> Relational Schema </b-nav-item>
            <b-nav-item to="/NoRelationalSchema" class="font-weight-bold text-white"> No Relational Schema </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
