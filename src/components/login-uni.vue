<template>
  <div class="flex justify-center lg:w-3/5 w-10">
    <router-link to="/"
      ><button>
        <img
          class="lg:mt-16 mt-16"
          src="../assets/arrow_back.svg"
          alt=""
        /></button
    ></router-link>
  </div>
  <div class="flex items-center justify-center">
    <div class="lg:w-5/12 md:6/12 w-10/12 lg:mt-32 mt-32">
      <h2 class="font-bold text-2xl lg:ml-24">
        Insira suas informações para realizar o login
      </h2>
      <form class="lg:ml-24 lg:mt-12 mt-12">
        <div class="flex flex-col text-lg md:mb-8">
          <label>Email</label>
          <input
            type="email"
            id="username"
            class="pl-2 py-2 md:py-4 focus:outline-none w-full"
            placeholder="exemplo@gmail.com"
          />
        </div>
        <div class="flex flex-col text-lg mb-6 md:mb-8 mt-12">
          <label>Senha</label>
          <input
            type="password"
            id="password"
            class="pl-2 py-2 md:py-4 focus:outline-none w-full"
            placeholder="*************"
          />
        </div>
        <div class="flex justify-center">
          <button
            class="botaoEntrar text-2l text-white p-2 md:p-4 rounded-lg w-52 h-14 font-bold shadow-2xl mt-20"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script></script>
<style scoped>
input {
  border-bottom: 0.5px solid black;
  outline: none;

  opacity: 0.5;
}

input:focus {
  opacity: 1;
}

.botaoEntrar {
  background-color: #63e1fd;
}
</style>
