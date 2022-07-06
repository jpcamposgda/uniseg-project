<template>
  <div class="grid justify-center container lg:ml-72 lg:mt-52 mt-32">
    <div
      class="flex justify-end relative lg:top-6 bottom-24 lg:left-52 right-8"
    >
      <button>
        <img src="../assets/logout.png" alt="Botão sair" />
      </button>
    </div>
    <h2 class="font-bold text-4xl pl-4">Olá, Vendedor!</h2>
    <p class="text-2xl pl-4">
      Cadastre aqui seus clientes ou faça consultas e atualizações do plano de
      saúde.
    </p>
  </div>
  <div class="mt-24 flex w-full justify-center lg:mr-12">
    <router-link to="/register">
      <button
        type="button"
        class="botao font-bold lg:rounded-lg lg:w-48 w-70 lg:h-32 h-32 rounded-lg text-2xl p-6 shadow-2xl"
      >
        Cadastro
      </button>
    </router-link>
    <router-link to="/consulta">
      <button
        class="botao font-bold lg:rounded-lg lg:w-48 lg:h-32 h-32 rounded-lg text-2xl lg:mr-20 lg:ml-12 ml-12 p-6 shadow-2xl"
      >
        Consulta
      </button>
    </router-link>
  </div>
</template>
<script></script>
<style scoped>
.botao {
  background-color: #63e1fd;
  color: #ffff;
}
</style>
