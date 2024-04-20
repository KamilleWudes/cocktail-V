<template>
    <div>Cocktail Add/Edit page</div>
    <h1>Ajouter un cocktail </h1>
    {{ id }}

    <form @submit.prevent="addCocktail">
        <div class="formGroup">
            <label for="cocktail_name">Name </label>
            <input type="text" id="cocktail_name" v-model="cocktail.name"/>
        </div> <br>
        <div class="formGroup">
            <label for="cocktail_description">Description </label>
            <input type="text" id="cocktail_description" v-model="cocktail.description"/>
        </div><br>
        <div class="formGroup">
            <label for="cocktail_recette">Recette </label>
            <input type="text" id="cocktail_recette"  v-model="cocktail.recette"/>
        </div><br>
        
        <div class="formGroup">
            <button type="submit" class="button">Ajouter un cocktail </button>
        </div>

    </form>
    
</template>
<script>
import { CocktailService } from '@/_sevices';
import { watch } from 'vue';
export default {
    name:'CocktailEdit',
    props:['id'],
    data(){
        return{
            cocktail:{
                name: '',
                description: '',
                recette: ''
            }
        }
    },
    setup(props){
        console.log(props)
        watch(props, (value, old)=> {
            console.log(value.id)
           })
    },
    mounted() {
        console.log(this.id)
        
    },
    methods: {
        addCocktail(){
            console.log(this.cocktail)
            CocktailService.createCocktail(this.cocktail)
            .then(res=>{
                this.$router.push({name:'cList'})

            })
            .catch(err=>{ console.log(err)})
        }

    }
}
</script>