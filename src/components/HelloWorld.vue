<template>
  <div class="flex items-center justify-center">
    <div class="bg-white lg:w-4/12 w-11/12 shadow-3xl">
      <form class="p-6 rounded-full flex items-center justify-center flex-col">
        <div class="mb-28 flex items-center justify-center flex-col">
          <svg
            class="mb-12"
            width="123"
            height="64"
            viewBox="0 0 123 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="123" height="64" fill="#D9D9D9" />
          </svg>

    
          <h1 class="text-center">Bem-Vindo</h1>
          <p class="text-center mt-6">
            Bem-vindo ao Cadastro Uniseg, portal para cadastro e consulta sobre
            plano de saúde.
          </p>
          <button
            type="button"
            class="lg:w-5/12 md:w-2/5 sm:2-5 w-full flex justify-center items-center rounded-xl h-14 mt-6 font-bold botaoEntrar"
          >
            Entrar
          </button>
          <p class="mt-6 criarConta">Criar conta</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script></script>
<style scoped>
h1 {
  color: #333333;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
}

p {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}
.form {
  background-color: #63e1fd;
  background-image: linear-gradient(225deg, #63e1fd 7%, #54cb72 100%);
  width: 100%;
}

.botaoEntrar {
  background-color: #63e1fd;
  color: #ffff;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.16);
}

.criarConta {
  color: #63e1fd;
  font-weight: 700;
  font-size: 16px;
}

form {
  height: 581px;
}

.logo {
  background-color: grey;
}



</style>
