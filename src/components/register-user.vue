<template>
    <!-- component -->
<!-- component -->
<!-- component -->
<!-- This is an example component -->

<div class="max-w-2xl mx-auto bg-white p-16 align-middle  shadow-lg form_register">
<div class="text-center mb-5"><h1>Uniseg</h1></div>
	<form @submit.prevent="submit" >
    <div class="grid gap-6 mb-6 lg:grid-cols-2">
        
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nome</label>
            <input type="text" v-model="usuario.name" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="digite seu nome" required>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Documento</label>
            <input type="text" v-model="usuario.document" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="digite um documento válido" required>
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Data de nascimento</label>
            <input type="text" v-model="usuario.data_nascimento" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="01/01/2022" required>
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cel</label>
            <input type="tel" v-model="usuario.phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="(xx) xxxx-xxxx "  required>
        </div>
        <div>
            <label for="mail" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
            <input type="email" v-model="usuario.email" id="mail" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="examplo@digite.com" required>
        </div>
        <div class="flex justify-center">
  <div>
    <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Situação</label>
    <div class="form-check">
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="ativo" value="ATIVO" v-model="usuario.situation">
      <label class="form-check-label inline-block text-gray-800" for="ativo">
        Ativo
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="inativo" value="INATIVO"  v-model="usuario.situation" >
      <label class="form-check-label inline-block text-gray-800" for="inativo">
       Inativo
      </label>
    </div>
    
  </div>
</div>
    </div>
    <div class="mb-6">
        <label for="plano" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Plano</label>
        <input type="text" v-model="usuario.plan" id="plano" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
    </div> 
    
   
    <button type="submit" class="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
</form>

</div>

<button @click="open = true">Open Modal</button>

<Teleport to="body">
  <div v-if="open" class="modal shadow-lg">
    <p class="m-5">Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>


    

</template>


<script>

import { db } from '@/firebase'
import { collection, addDoc } from "firebase/firestore";

export default {
    data() {
        return {
            usuario: {

            name:"",

            document:"",

            data_nascimento:"",

            phone:"",
            
            email:"",

            situation:"",

            plan:""



            },

             open: false


         

             
            
             
        
            



             
        
            

            

            
        
  
        
    }
    },
    methods: {

        submit() {
            
           

    addDoc(collection(db, "register"),this.usuario )

    .then((docRef) => { console.log("Document written with ID: ", docRef.id)})
    .catch(
        error => { console.error("Error adding document: ", error);
        }
    )


          
            

        }

    
    }
}
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
 
}


.form_register{
  border: 2px solid #63E1FD;
  border-radius: 20px;
 
}
</style>