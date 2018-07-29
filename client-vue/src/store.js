import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items : [],
    testing: "All Categories",
    purchases : [],
    amount: 0,
    logged: false
  },
  mutations: {
    GET_ITEMS(state, itemArr){
      console.log(itemArr)
      state.items = itemArr
    },
    PURCHASE_ITEM(state, item){
      console.log(item)
      state.purchases.push(item)
      state.amount += 1;
      alert("succesfully added to cart")
    },
    CLEAR_PURCHASE(state){
      state.purchases = [];
      state.amount = 0;
    },
    LOGIN(state, result){
      state.logged = result
      console.log(state.logged)
    },
    LOGOUT(state){
      state.logged = false;
      state.amount = 0;
      alert("you are now logged out")
    }
  },
  actions: {
   registerUser(context, userObj){
     axios.post("http://localhost:3000/users/", userObj)
     .then((data => {
       alert("succesfully registered a user you can now login with this account")
     }))
     .catch(err => {
       alert("oops something went wrong, username & email must be unique and fields cannot be empty")
     })

   },
   getItems(context){
    axios.get("http://localhost:3000/items")
    .then(items => {
        let itemArr = items.data
        console.log(itemArr)
        context.commit("GET_ITEMS", itemArr)
    })
    .catch(err => {
        console.log(err)
    })
   },
   purchaseItem(context, item){
    context.commit("PURCHASE_ITEM", item)
   },
   triggerModal(context){
     alert("hashdhdashs")
   },
   clear(context){
     context.commit("CLEAR_PURCHASE")
   },
   loginAcc(context, credentials){
     console.log(credentials)
     axios.post("http://localhost:3000/users/signin", credentials)
     .then(result => {
      let token = result.data.token;
      let isAdmin = result.data.isAdmin
      localStorage.setItem("token", token)
      localStorage.setItem("isAdmin", isAdmin)
      context.commit("LOGIN", true)
     })
     .catch(err => {
       console.log(err)
       alert("oops email or password was incorrect")
      context.commit("LOGIN", false)
     })
   },
   logoutAcc(context){
     localStorage.clear()
     context.commit("LOGOUT")
   },
   addItem(context, itemObj){
     console.log(itemObj);
     let token = localStorage.getItem("token");
     axios.post("http://localhost:3000/items//addItem", itemObj, {
       headers: {
         token
       }
     })
     .then(data => {
       alert("succesfully added item")
       axios.get("http://localhost:3000/items")
       .then(items => {
           let itemArr = items.data
           console.log(itemArr)
           context.commit("GET_ITEMS", itemArr)
       })
       .catch(err => {
           console.log(err)
       })
     })
     .catch(err => {
       alert("error adding item")
       console.log(err)
     })
   }
  }
})
