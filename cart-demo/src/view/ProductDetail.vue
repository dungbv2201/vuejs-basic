<template>
  <div class="container">
    <div class="lds-hourglass" v-if="isLoading"></div>
    <div class="row mt-5" v-if="!isLoading">
      <div class="col-6">
        <img
          :src="product.image"
          alt
          class="img-fluid"
          style="max-width: 100%"
        />
      </div>
      <div class="col-6">
        <h3>{{ product.name }}</h3>
        <p>
          <strong>Description:</strong>
          {{ product.description }}
        </p>
        <div class="my-3">
          <span class="title-price">Price:</span>
          <span class="price sale-off ml-2">${{ product.price }}</span>
          <span v-if="product.sale_off > 0" class="price ml-5"
            >${{ product.sale_off | saleOff(product.price) }}</span
          >
        </div>
        <div class="form-group d-flex align-items-center">
          <label for="quantity" class="mr-5 title-price">Quantity</label>
          <input
            type="number"
            id="quantity"
            class="col-2 form-control"
            v-model="quantity"
            min="1"
          />
        </div>
        <div class="mt-5">
          <button class="btn btn-blue" @click="addCart(product)">
            Add to cart
          </button>
          <button class="btn btn-green ml-3" @click="backToHome()">Back</button>
        </div>
      </div>
    </div>
    <div class="row" style="margin-bottom: 20px;margin-top: 50px">
      <div class="col-12">
        <h3 class="mb-5">Recommend</h3>
      </div>
      <div class="col-12 product-relative" v-if="!isLoading">
        <carousel
          :nav="false"
          :dots="false"
          :items="3"
          :autoplay="true"
          :key="keyCarousel"
        >
          <router-link
            v-for="item in productRelative"
            :key="item.id"
            tag="a"
            :to="{
              path: `/product/${item.id}`,
              query: { categoryId: item.category_id }
            }"
          >
            <img :src="item.image" alt="..." />
          </router-link>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { showProduct, getProductsRelative } from "../api/product.api";
import { loading } from "../mixins/loading.mixin";
import carousel from "vue-owl-carousel";
import { mapActions } from "vuex";
export default {
  name: "ProductDetail",
  mixins: [loading],
  data() {
    return {
      showProductApi: showProduct,
      getProductsRelative,
      product: {},
      productRelative: [],
      keyCarousel: 1,
      quantity: 1
    };
  },
  components: {
    carousel
  },
  created() {
    this.fetchProduct(this.$route.params.id);
    this.getProductRelative();
  },
  methods: {
    ...mapActions(["addProductToCart"]),
    async addCart(product) {
      const msg = await this.addProductToCart({ product ,quantity: this.quantity});
      this.$toastr.s(msg, "Success!");
    },
    fetchProduct(id) {
      this.isLoading = true;
      this.showProductApi(id)
        .then(response => {
          this.product = response;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    getProductRelative() {
      this.isLoading = true;

      this.getProductsRelative({
        categoryId: this.$route.query.categoryId,
        id: this.$route.params.id
      })
        .then(response => {
          this.productRelative = response;
          this.keyCarousel++;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    backToHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped lang="scss">
.title-price {
  font-size: 24px;
}

.product-relative {
  img {
    height: 300px;
  }
}
</style>
