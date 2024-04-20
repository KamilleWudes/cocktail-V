<template>
    <div>Cocktail Index page</div>
    <table>
        <thead>
            <tr>
                <th>&nbsp;</th>
                <th>ID</th>
                <th>Nom</th>
                <th>Description</th>
                <th>Recette</th>
                <th>Creation</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="(cocktail, index) in cocktails" :key="cocktail.id">
                <td><span class="del_btn" @click="del(index)">X</span></td>
                <td>{{ cocktail.id }}</td>
                <td class="edit" @click="goEdit(cocktail.id)">{{ cocktail.name }}</td>
                <td>{{ cocktail.description }}</td>
                <td>{{ cocktail.recette }}</td>
                <td>{{ dateFormat[index]}}</td>

            </tr>
        </tbody>
    </table>
    
</template>
<script>
import { CocktailService } from '@/_sevices';

export default {
    name:'CocktailIndex',
    data(){
        return{
            cocktails:[]
        }
    },
    methods:{
        goEdit(cid){
            console.log(cid)
            //this.$router.push('/admin/users/edit/'+uid)

            this.$router.push({name:'cEdit', params:{id:cid}})

        },
        del(index){
            console.log(index)
            CocktailService.deleteCocktail(this.cocktails[index].id)
            .then(res=>this.cocktails.splice(index, 1))
            .catch(err=>console.log(err))
        }
    },
    mounted() {
        CocktailService.getAllCocktails()
        .then(res=>{
            this.cocktails = res.data.cocktail
        })
        .catch(err=>{(console.log(err))})
    },
    computed:{
        comptage(){
           return (this.cocktails.length == 0) ? 'Aucun utilisateur' : `il y en a ${this.cocktails.length}`
        },
        dateFormat(){
            return this.cocktails.map(c => c.created_at.split('T')[0].split('-').reverse().join('/'))
            
        }
    }
}
</script>