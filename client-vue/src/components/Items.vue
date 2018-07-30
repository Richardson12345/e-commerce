<template>
  <div class="container">
    <add-item/>
    <Modal/>
    <h1> {{testing}} </h1>
      <div class="row">
        <div class="col-sm-4" v-for="(item,key) in items"
         v-bind:key="key">
            <div class="card border-primary mb-3" id="items">
                <div class="card-header">
                     <h5 class="card-header"><strong>{{item.name}}</strong> </h5>
                </div>
                <div id="img-card">
                  <img class="card-img-top" id="image-border" v-bind:src="item.imageUrl" alt="Card image cap">
                </div>  
                <div class="card-body text-primary">
                  <p class="card-title"> <strong>category: </strong> {{item.category}} </p>
                  <p class="card-text"> <strong>price: </strong> {{item.price}} </p>
                  <a class="btn btn-outline-info size-md" v-on:click="purchase(item.name, item.price)">add to cart</a>
                  <span v-if="admin"> || <a class="btn btn-outline-info size-md" v-on:click="deleteItem(item._id)">delete</a></span>
                </div>
            </div>
        </div>
     </div>
  </div>
</template>

<script>

import AddItem from './addItem.vue'
import Modal from './modal.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data(){
    return{
      isLogged : false,
      admin: false
    }
  },
  components:{
    Modal,
    AddItem
  },
  computed: {
    ...mapState([
       "items",
       "testing",
       "purchases",
       "logged"
    ])
  },
  methods:{
    ...mapActions([
      'getItems',
      'purchaseItem',
      'removeItem'
    ]),
    purchase(item, price){
      let itemObj = {
        item,
        price
      };
      if(this.isLogged){
       this.purchaseItem(itemObj);  
      }else{
        alert("please login to purchase item")
      }
    },
    deleteItem(id){
      // alert(id);
      this.removeItem(id);
    },
    checkUser(){
      if(localStorage.getItem('token')){
        this.isLogged = true
      }
    },
    isAdmin(){
            if(localStorage.getItem("isAdmin") == "true"){
                this.admin = true
            }
        }
  },
  mounted(){
    this.getItems(),
    this.checkUser(),
    this.isAdmin()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#items{
  width: 95%;
  margin-bottom: 50px;
}

#image-border{
  border: 1px solid blue;
  height: auto;
}
</style>
