<template>
  <v-container class="d-flex">
    <div class="left d-flex flex-column justify-center">
      <div class="div-oi d-flex flex-column">
        <v-row>
          <v-col class="d-flex align-center pb-0">
            <h1>Oi , eu sou</h1>
            <v-chip size="small" class="ml-5" variant="outlined" color="">
              Software Engineer
            </v-chip>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex align-center pt-0">
            <h1>Fabio Thomaz</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex align-center pt-0">
            <h2>desenvolvedor de software fullstack</h2>
          </v-col>
        </v-row>
      </div>
      <hr>
      <div class="tecs mt-6">
        <v-row>
          <v-col class="d-flex align-center">
            <h3>principais tecnologias que trabalho</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex align-center">
            <v-sheet class="node badge ma-0 mr-4 ">
              <div class="rounded-badge d-flex flex-column justify-center align-center"><v-icon class="fab" icon="mdi-nodejs"></v-icon><span>NodeJs</span></div>
            </v-sheet>
            <v-sheet class="javascript badge ma-0 mr-4">
              <div class="rounded-badge d-flex flex-column justify-center align-center"><v-icon class="fab" icon="mdi-language-javascript"></v-icon><span>Javascript</span></div>
            </v-sheet>
            <v-sheet class="firebase badge ma-0 mr-4">
              <div class="rounded-badge d-flex flex-column justify-center align-center"><v-icon class="fab" icon="mdi-firebase"></v-icon><span>Firebase</span></div>
            </v-sheet>
            <v-sheet class="html badge ma-0 mr-4">
              <div class="rounded-badge d-flex flex-column justify-center align-center"><v-icon class="fab" icon="mdi-language-html5"></v-icon><span>html</span></div>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="right d-flex flex-column">
      <div class="div-avatar">
        <v-avatar size="320" variant="elevated">
          <img
            src="https://avatars.githubusercontent.com/u/59142659?s=400&u=1c41a9f5ce57915d30bdcc5bac621f205842ce0a&v=4"
            alt="Fabio Thomaz" />
        </v-avatar>
      </div>
    </div>
  </v-container>
</template>

<script setup>
//
</script>

<style scoped>
.left {
  width: 50%;
  height: 70vh;
}

.right {
  width: 50%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.node {
  background: yellowgreen;
  color: darkslategray;
}
.html {
  background: darkorange;
  color: orange;
}

.javascript {
  background: gold;
  color: gold;
}

.firebase {
  background: #ceaf03;
  color: #e08905;
}
.rounded-badge {
  width: 70px;
  height: 70px;
  background: white;
  margin: 15px 16px auto;
  z-index: 10;
  border-radius: 30%;
  box-shadow: 8px 8px 8px 2px rgba(0, 0, 0, 0.23);
}
.fab {
    font-size: 2.6em;
    margin-top: 16px;
  }
.badge {
  margin: 1.5em 3em;
  width: 6.4em;
  height: 6.4em;
  border-radius: 20%;
  display: inline-block;
  top: 0;
  transition: all 0.2s ease;
  box-shadow: 8px 10px 12px 3px rgba(0, 0, 0, 0.43);
}
</style>