<template>
  <v-container style="margin-top: 15%;">
    <v-row>
      <v-col md="6" cols="12">
        <div class="left d-flex flex-column justify-center">
          <div class="div-oi d-flex flex-column">
            <v-row>
              <v-col class="d-flex align-center pb-0">
                <h1 class="text-grey-darken-2">Oi , eu sou</h1>
                <v-chip size="small" class="ml-5 gradient-chip" variant="outlined" color="">
                  Software Engineer
                </v-chip>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex align-center pt-0">
                <h1 class="text-grey-darken-2">Fabio Thomaz</h1>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex align-center pt-0">
                <h2 class="text-grey-darken-2">desenvolvedor de software fullstack</h2>
              </v-col>
            </v-row>
          </div>
          <hr style="color: #00a0b0;">
          <div class="tecs mt-6">
            <v-row>
              <v-col class="d-flex align-center">
                <h3>principais tecnologias que trabalho</h3>
              </v-col>
            </v-row>
            <v-row class="d-flex align-center" wrap>
              <v-sheet class="node badge">
                <div class="rounded-badge d-flex flex-column justify-center align-center"><v-icon class="fab"
                    icon="mdi-nodejs"></v-icon><span>NodeJs</span></div>
              </v-sheet>
              <v-sheet class="html badge ">
                <div class="rounded-badge d-flex flex-column justify-center align-center"><v-icon class="fab"
                    icon="mdi-language-html5"></v-icon><span>Html</span></div>
              </v-sheet>
              <v-sheet class="vue badge ">
                <div class="rounded-badge d-flex flex-column justify-center align-center"><v-icon class="fab"
                    icon="mdi-vuejs"></v-icon><span>VueJs</span></div>
              </v-sheet>
              <v-sheet class="javascript badge ">
                <div class="rounded-badge d-flex flex-column justify-center align-center"><v-icon class="fab"
                    icon="mdi-language-javascript"></v-icon><span>Javascript</span></div>
              </v-sheet>
              <v-sheet class="mysql badge ">
                <div class="rounded-badge d-flex flex-column justify-center align-center"><v-icon class="fab"
                    icon="mdi-database-search"></v-icon><span>Mysql</span></div>
              </v-sheet>
              <v-sheet class="firebase badge ">
                <div class="rounded-badge d-flex flex-column justify-center align-center"><v-icon class="fab"
                    icon="mdi-firebase"></v-icon><span>Firebase</span></div>
              </v-sheet>
            </v-row>
          </div>
        </div>
      </v-col>
      <v-col md="6" cols="12">
        <div class="right d-flex flex-column pa-2">
          <v-card class="mb-6">
            <v-card-title class="d-flex justify-center align-center">
              <v-avatar size="200">
                <v-img
                  src="https://avatars.githubusercontent.com/u/59142659?s=400&u=df8dc97b649995cf4400900c80ff8a345a074660&v=4"></v-img>
              </v-avatar>
            </v-card-title>
            <v-card-text>
              <h3>Desenvolvedor de Software Fullstack</h3>
              <p>Cursando Sistemas de Informação em universidade do estado de mato grosso - UNEMAT</p>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" cols="12" class="d-flex justify-center align-center">
        <div class="d-flex justify-center align-center flex-column mt-10">
          <span>conheça alguns dos meus projetos</span>
          <v-btn class="mt-4" append-icon="mdi-rocket" elevation="15" color="#00a0b0">Projetos</v-btn>
        </div>
      </v-col>
      <v-col md="6" cols="12" class="d-flex justify-center align-center">
        <div>
          <v-btn icon>
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
//
</script>

<style scoped>
.left {
  width: 100%;
}

.right {
  width: 100%;
}

.node {
  background: yellowgreen;
  color: darkslategray;
}

.vue {
  background: #42b883;
  color: #35495e;
}

.html {
  background: darkorange;
  color: orange;
}

.javascript {
  background: rgb(255, 208, 0);
  color: rgb(230, 214, 3);
}

.mysql {
  background: #00758f;
  color: #00a0b0;
}

.firebase {
  background: #d43f04;
  color: #e08905;
}

.rounded-badge {
  width: 4.4em;
  height: 4.4em;
  background: white;
  margin: 0.5em 0.5em 0.5em 0.5em;
  border-radius: 30%;
  box-shadow: 8px 8px 8px 2px rgba(0, 0, 0, 0.23);
}

.rounded-badge span {
  font-size: 0.7em;
  color: #333;
  margin-bottom: 0.5em;
}

.fab {
  font-size: 2.6em;
  margin-top: 16px;
}

.badge {
  width: 5.4em;
  height: 5.4em;
  border-radius: 30%;
  margin: 0.3em 0.3em 0.3em 0.3em;
  box-shadow: 8px 10px 12px 3px rgba(0, 0, 0, 0.43);
}

.gradient-chip {
  background: linear-gradient(45deg, #00a0b0, #ff8c00);
  /* Gradiente de fundo */
  color: white;
  /* Texto branco para contraste */
  border: none;
  /* Remover borda padrão */
}
</style>