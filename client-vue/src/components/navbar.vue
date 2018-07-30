<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><img src="https://www.brandcrowd.com/gallery/brands/pictures/picture14565293998748.jpg" width="30" height="30" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" @click="home" >Home <span class="sr-only">(current)</span></a>
            </li>
            <li>
            <a class="nav-link" data-toggle="modal" data-target="#exampleModal">My Cart {{amount}} <i class="glyphicon glyphicon-shopping-cart"></i><span class="sr-only">(current)</span></a>
            </li>
            <li>
                <a class="nav-link" @click="checkout" >Check Out <span class="sr-only">(current)</span></a>
            </li>
             <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <p class="dropdown-item" @click="filter(categories[0])">{{categories[0]}}</p> 
                <p class="dropdown-item" @click="filter(categories[1])">{{categories[1]}}</p>
                <p class="dropdown-item" @click="filter(categories[2])">{{categories[2]}}</p>
                <p class="dropdown-item" @click="filter(categories[3])">{{categories[3]}}</p>
                <!-- <a class="dropdown-item" href="#">Another action</a> -->
              </div>
            </li>
            <li v-if="admin == true">
                <a class="nav-link" data-toggle="modal" data-target="#addItemModal" >add item<span class="sr-only">(current)</span></a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <button class="btn btn-outline-primary my-2 my-md-0" @click="signout" type="submit" v-if="isLogged">log-out</button>
              <button class="btn btn-outline-primary my-2 my-md-0" @click="login" type="submit" v-else>login</button>
            </form>
        </div>
    </nav> 
</template> 

<script>

import  { mapState, mapActions } from 'vuex'

export default {
    data(){
        return{
            admin : false,
            isLogged : false,
            categories : ["All Categories","bags", "innerwear", "outerwear"]
        }
    },
    computed: {
        ...mapState([
            'amount',
            'logged'
        ])
    },
    methods: {
        ...mapActions([
            'triggerModal',
            'logoutAcc',
            'filterCategory'
        ]),
        checkout(){
            this.$router.push('/checkout')
        },
        home(){
            this.$router.push('/')
        },
        isAdmin(){
            if(localStorage.getItem("isAdmin") == "true"){
                this.admin = true
            }
        },
        signout(){
            this.logoutAcc()
            this.$router.push('/login')
        },
        login(){
            this.$router.push('/login')
        },
        checkUser(){
          if(localStorage.getItem('token')){
            this.isLogged = true
          }
        },
        addItem(){
          alert("succesfully added itlamo em")
        },
        filter(category){
         this.filterCategory(category)
        }
    },
    mounted(){
        this.isAdmin(),
        this.checkUser()
    }

}
</script>
