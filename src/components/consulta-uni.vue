<template>
  <!-- component -->
  <!-- component -->
  <!-- component -->
  <!-- This is an example component -->

  <div class="max-w-2xl  mx-auto my-32 bg-white p-10  shadow-lg form_register">
    
    <form @submit.prevent="submit">
      <div class="grid  gap-6 mb-6 lg:grid-cols-2">
        

        <div>
          <label
            for="mail"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Nome</label
          >
          <input
            type="email"
            v-model="usuario.name"
            id="mail"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Digite o nome completo"
          />
        </div>
       <!-- <button
        type="submit"
        class="mb-5 text-white bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Enviar
      </button> -->

      <div @click="submit" class="lupa" ><v-icon>mdi-magnify</v-icon> </div> 
      </div>

      
    </form>
  </div>

  <div class="max-w-2xl  mx-auto  bg-white pb-16    shadow-lg form_register">
    <table class="w-full ">
  <thead class=" border-b-2 border-cyan-300 ">
    <tr class="text-start  ">
      <th class="border_manual_name">Nome</th>
      <th>CPF</th>
      <th>situação</th>
     
    </tr>
  </thead>
  
  <tbody >
    
    <tr  class="border_manual text-center ">
      <td class="border_manual_spacing" > {{usuarios.name}} </td>
      <td> {{usuarios.document}} </td>
      <td> {{usuarios.situation}} </td>
      <td class="items-center"><button class="   text-white bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Editar</button></td>
    </tr>
    
  </tbody>
</table>
  </div>
</template>

<script>
import { db } from '@/firebase'

import { collection, getDocs, query, where } from 'firebase/firestore'

export default {
  data() {
    return {
      usuarios: {
        name: '',

        document: '',

        situation: ''
      },
      usuario: {
        name: '',

        document: '',

        email: ''
      }
    }
  },
  methods: {
    submit() {
      console.log(this.usuario)

      const planoref = collection(db, 'register')

      const q = query(planoref, where('email', '==', this.usuario.name))

      getDocs(q)
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
           
            this.usuarios.name =  doc.get('name')
            this.usuarios.document =  doc.get('document')
            this.usuarios.situation =  doc.get('situation')
            
          })
        })
        .catch(error => {
          console.log('Error getting documents: ', error)
        })
    }
  }
}
</script>



<style scoped>
.form_register {
  border: 2px solid #63e1fd;
  border-radius: 20px;
  
 
}


.lupa{

  cursor: pointer;
}

.button_consulta{
 color: #333333;
 font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 26px;
}


.border_manual{

  
  border-bottom: 1px solid #63e1fd;
  margin: 0 10px 0 10px;
  
}

.border_manual_spacing{

  padding: 20px 0 20px 0px;
}

.border_manual_name{

  padding: 20px 0 10px 0;
}
</style>