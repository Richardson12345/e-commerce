<template>
  <div class="modal" id="exampleModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">My Shopping Cart</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ol class="list-group">
            <li class="list-group-item" v-for="(purchase, key) in purchases"
             v-bind:key=key> name: {{purchase.item}} price: {{purchase.price}} </li>
          </ol>
        </div>
        <div class="modal-footer">
          <button type="button" @click="checkout" data-dismiss="modal" class="btn btn-primary">Check-out</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            'purchases'
        ])
    },
    methods: {
        checkout(){
            this.$router.push('/checkout')
        }
    }
    
}

</script>






