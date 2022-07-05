<template>
  <!-- component -->
  <!-- component -->
  <!-- component -->
  <!-- This is an example component -->

  <!-- <div class="max-w-2xl  mx-auto my-2   shadow-lg form_register "> -->
    
    <form @submit.prevent="submit">
      <div class="grid   gap-6 mb-6  max-w-2xl   mx-auto my-12 ">
        

        <div >
          <label
            for="mail"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Pesquisa</label
          >
          <input
            type="email"
            v-model="usuario.name"
            id="mail"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 "
            placeholder="Digite o nome completo"
          />
        </div>
       <!-- <button
        type="submit"
        class="mb-5 text-white bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Enviar
      </button> -->

      <v-icon @click="submit" class="lupa" >mdi-magnify</v-icon>
      </div>

      
    </form>
  <!-- </div> -->

  <div class="max-w-2xl  mx-auto   pb-16    shadow-lg form_register">
    <table class="w-full ">
  <thead class=" border-b-2 border-cyan-300 ">
    <tr class="text-start  ">
      <th class="border_manual_name">Nome</th>
      <th>CPF</th>
      <th>situação</th>
     
    </tr>
  </thead>
  
  <tbody >
    
    <tr v-for="(user, index) in usuarios" :key="index"   class="border_manual text-center ">
      
      <td class="border_manual_spacing" > {{ user.name }} </td>
      <td> {{ user.document }} </td>
      <td> {{ user.situation }} </td>
      <td class="items-center"><button class="   text-white bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Editar</button></td>
    </tr>
    <v-alert v-if="msgBind"> {{msgBind}} </v-alert>
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
      user: {
        name: '',

        document: '',

        situation: ''
      },

      usuarios: [],
      usuario: {
        name: '',

        document: '',

        email: ''
      },

     msgBind: '',
      
    }
  },
  methods: {
    submit() {
      
      
      this.usuarios.length = 0;

      const planoref = collection(db, 'register')

      const q = query(planoref, where('email', '==', this.usuario.name))

      getDocs(q)
        .then(querySnapshot => {


          


          querySnapshot.forEach(doc => {

            
           this.usuarios.push(doc.data()) 
         
            
            
            
         
            
            
           })
          
          

           
         
        //  if( this.usuarios.length == 0 ) { this.msgBind = "error"} else { this.msgBind = ''}
        return this.usuarios.length == 0 ? this.msgBind = "Não foi possivel encontrar o Cliente, digite novamente!" : this.msgBind = ''
        } 
         )
       
   
    },

    
    
  }
}
</script>



<style scoped>


.active_bind{
  background: blue;
}
.form_register {
  border: 2px solid #63e1fd;
  border-radius: 20px;
  background-color: #8BC6EC;
background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);

position: relative;


 
}


.lupa{
  
  text-align: right;
  cursor: pointer;
  left: 90%;
  top: -240%;
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