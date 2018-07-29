<template>
    <div>
        <nav-bar/>
        <h1>
            Review Your Orders Or Go Back Shopping
        </h1>
        <div class="container">
           <ol class="list-group">
            <li class="list-group-item" v-for="(purchase, key) in purchases"
             v-bind:key=key>{{key + 1}} . name: {{purchase.item}} price: {{purchase.price}} </li>
          </ol>
        </div>
        <hr>
        <button type="button" @click="shoppingPage" class="btn btn-primary">continue shopping</button> || 
       <button type="button"  @click="finished" class="btn btn-warning">checkout and pay</button>

    </div>
</template>

<script>

import { mapState , mapActions } from 'vuex'
import NavBar from '@/components/navbar.vue'


export default {
    components: {
        NavBar
    },
    computed: {
        ...mapState([
            'purchases'
        ])
    },
    methods: {
        ...mapActions([
            'clear'
        ]),
        woof(){
            console.log(this.purchases)
        },
        shoppingPage(){
            this.$router.push('/')
        },
        finished(){
            alert("thankyou for in subarashi batik, please transfer you money to our account");
            this.clear();
        }
    }
}

</script>

