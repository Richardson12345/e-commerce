<template>
  <div class="modal" id="addItemModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add new item</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">item name</span>
          </div>
          <input v-model="name" type="text" class="form-control" placeholder="item name" aria-label="Username" aria-describedby="basic-addon1">
        </div>
          <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">item price</span>
          </div>
          <input v-model="price" type="number" class="form-control" placeholder="item price" aria-label="Username" aria-describedby="basic-addon1">
        </div>
          <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">item category</span>
          </div>
          <select v-model="category" name="category">
            <option value="innerwear">innerwear</option>
            <option value="bags">bags</option>
            <option value="outerwear">outerwear</option>
          </select>
        </div>
          <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">image</span>
          </div>
          <input v-model="imageUrl" type="text" class="form-control" placeholder="image url" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" @click="add(name, price, category, imageUrl)" data-dismiss="modal" class="btn btn-primary">Add-item</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  data(){
    return{
      name: "",
      category: "",
      price: "",
      imageUrl
    }
  },
  methods: {
    ...mapActions([
      'addItem'
    ]),
    add(name, price, category, imageUrl){
      let itemObj = {
        name,
        category,
        price,
        imageUrl
      }
      this.addItem(itemObj)
    }
  }
}
</script>
