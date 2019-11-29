<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../../assets/logo.png" alt />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item" active-class="active" to="/" exact>
            <a class="nav-link">Product</a>
          </router-link>
        </ul>
        <div class="navbar-nav dropdown" id="cart">
          <div class="total-quantity">{{ totalItem }}</div>
          <div
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            class="cart"
          >
            <img src="../../images/cart.svg" alt />
          </div>
          <div class="dropdown-menu cart-list" aria-labelledby="dropdownMenuLink">
            <template v-if="totalItem > 0">
              <div
                class="dropdown-item d-flex align-items-center item"
                v-for="item in items"
                :key="item.id"
              >
                <img :src="item.image" alt />
                <div class="ml-3 mr-auto">
                  <router-link
                    tag="span"
                    :to="{name:'productDetail',params: {id:item.id},query: {categoryId: item.category_id}}"
                  >{{ item.name }}</router-link>
                  <span class="d-block">{{ item.quantity }} x ${{ item.price }}</span>
                </div>
                <span class="remove-item" @click="rmCart(item.id)" style="z-index: 100">&times;</span>
              </div>
              <div class="text-right dropdown-item">
                <strong>total</strong>: $
                <span>{{ cartTotal }}</span>
              </div>
              <div class="dropdown-item d-flex align-items-center item">
                <button class="btn btn-block btn-green">checkout</button>
              </div>
            </template>
            <template v-else>
              <h3 class="text-center text-warning my-5">Empty</h3>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "HeaderLayout",
  computed: {
    ...mapState(["items"]),
    ...mapGetters(["totalItem", "cartTotal"])
  },
  methods: {
    ...mapActions(["removeCartItem"]),
    rmCart(id) {
      this.removeCartItem(id);
    }
  }
};
</script>

<style scoped lang="scss">
.navbar {
  background: #ccc;
}

img {
  height: 30px;
}

.cart {
  &:hover {
    cursor: pointer;
  }
}

#cart {
  position: relative;

  .total-quantity {
    position: relative;
    top: -10px;
    right: -50px;
    background: #fff;
    height: 25px;
    width: 25px;
    line-height: 25px;
    color: red;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    border-radius: 50%;
  }

  .cart-list {
    min-width: 300px;
  }

  .remove-item {
    font-size: 25px;

    &:hover {
      cursor: pointer;
    }
  }

  .item {
    z-index: 20;
  }
}
</style>