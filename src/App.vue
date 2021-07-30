<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Организации ЛПУ</router-link> |
      <router-link to="/spr_med_ob">{{
        `Справочник медецинского 

        (рентгеновского) оборудования`
      }}</router-link>
      |
      <router-link to="/spr_proizv_ren_ob"
        >Справочник производителей рентгеновского оборудования</router-link
      >
      |
      <router-link to="/osn_lpu"
        >Оснащение ЛПУ рентгеновского оборудовния</router-link
      >
      | <router-link to="/analit_ras">Аналитические расчеты</router-link> |
      <router-link to="/admin">Администрирование</router-link>
    </div>
    <router-view />
  </div>
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
  width: 50%;
  height: 10%;

  margin: auto;

  a {
    display: inline-table;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
