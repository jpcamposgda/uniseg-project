<template>
  <div
    class="max-w-2xl lg:my-52 my-20 m-2 lg:p-12 lg:mx-auto p-0 shadow-2xl form_register"
  >
    <h1 class="grid justify-center text-bold lg:text-4xl text-2xl lg:mt-2 mt-6">
      Cadastro do Vendedor
    </h1>
    <form>
      <div class="mt-12 gap-6 mb-6 lg:grid-cols-2 lg:ml-10">
        <label for="first_name" class="mt-12 mb-2 block font-semibold ml-4"
          >Nome Completo</label
        >
        <input
          type="text"
          id="first_name"
          class="input_type rounded-lg block w-full p-2.5 w-11/12 ml-4"
          placeholder="Digite seu nome"
          required
        />
      </div>
      <div class="mt-12 mb-2 block lg:ml-10">
        <label for="mail" class="block mb-2 font-semibold ml-4">E-mail</label>
        <input
          type="email"
          id="mail"
          class="input_type rounded-lg block w-full p-2.5 w-11/12 ml-4"
          placeholder="exemplo@hotmail.com"
          required
        />
      </div>
      <div class="mt-12 mb-2 block lg:ml-10">
        <label for="senha" class="block mb-2 font-semibold ml-4"
          >Crie sua senha</label
        >
        <input
          type="password"
          id="senha"
          class="input_type rounded-lg block w-full p-2.5 w-11/12 ml-4"
          placeholder="Digite sua senha"
          required
        />
      </div>
      <div class="mt-12 mb-10 flex justify-center font-bold">
        <button class="botaoCadastrar text-bold">Cadastrar</button>
      </div>
    </form>
  </div>
</template>
<script></script>
<style scoped>
.form_register {
  border: 2px solid #63e1fd;
  border-radius: 20px;
}

.input_type {
  background: #f0f5f7;
  border-radius: 10px;
  height: 45px;
  margin-right: 34px;
}

.input_type:focus {
  outline: none !important;
  border-color: #63e1fd;
  box-shadow: 0 0 10px #63e1fd;
}

.botaoCadastrar {
  font-size: 17px;
  padding: 0.5em 2em;
  border: transparent;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  background: #63e1fd;
  color: white;
  border-radius: 4px;
}

.botaoCadastrar:hover {
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #63e1fd, rgba(0, 212, 255, 1) 100%);
}

.botaoCadastrar:active {
  transform: translate(0em, 0.2em);
}
</style>
