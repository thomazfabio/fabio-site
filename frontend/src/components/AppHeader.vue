<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-start align-center">
        <h1 style="color: #00a0b0;" class="">Fabio Thomaz<spam class="pontoh1 pl-0 ml-0">.</spam>
        </h1>
      </v-col>
      <v-col class="d-flex justify-center align-center">
        <ul class="menu-header">
          <li><a href="#h">Home</a></li>
          <li><a href="#b">Blog</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Curriculo</a></li>
        </ul>
      </v-col>
      <v-col class="d-flex justify-end align-center">
        <v-btn variant="outlined" rounded size="small" color="#00a0b0">Contato</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
//
</script>

<style scoped>
.pontoh1 {
  color: #ff8b07;
}

.menu-header {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.menu-header li a {
  text-decoration: none;
  color: #333;
}
.menu-header li a:hover {
  color: #ff8b07;
}
</style>