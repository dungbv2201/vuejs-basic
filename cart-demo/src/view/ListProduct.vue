<template>
  <div class="container-fluid">
    <div class="lds-hourglass" v-if="isLoading"></div>
    <div class="row" v-show="!isLoading">
      <div class="container">
        <h2 class="py-3">Products</h2>
        <div class="row">
          <div class="col-4" v-for="item in list" :key="item.id">
            <div class="card mb-5">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <router-link
                    tag="a"
                    class="detail"
                    :to="{name:'productDetail',params: {id:item.id},query: {categoryId: item.category_id}}"
                  >{{ item.name }}</router-link>
                </h5>
                <p class="card-text">{{ item.description}}.</p>
                <div class="d-flex">
                  <p :class="['price mr-3',{'sale-off': item.sale_off >0 }]">&nbsp; ${{ item.price}}</p>
                  <p class="price" v-if="item.sale_off >0">
                    ${{ item.sale_off |
                    saleOff(item.price)}}
                  </p>
                </div>
                <div class="off-sale" v-if="item.sale_off > 0">{{item.sale_off}}%</div>
                <button class="btn btn-blue" @click="addCart(item)">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 mr-auto" style="margin-bottom: 100px">
            <Pagination :current-page.sync="currentPage" :total-page="totalPage"></Pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLayout from "./Layout/HeaderLayout";
import { getProductsApi } from "../api/product.api";
import { loading } from "../mixins/loading.mixin";
import Pagination from "../components/Pagination";
import { mapActions, mapState } from "vuex";

export default {
  name: "ListProduct",
  components: {
    HeaderLayout,
    Pagination
  },
  mixins: [loading],
  data() {
    return {
      list: [],
      totalPage: null,
      getProductsApi,
      currentPage: 1
    };
  },
  created() {
    this.getProduct();
  },
  watch: {
    currentPage() {
      this.getProduct();
    }
  },
  computed: {
    ...mapState(["items"])
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      this.getProductsApi(this.currentPage)
        .then(response => {
          this.list = response.data;
          this.totalPage = response.last_page;
          this.currentPage = response.current_page;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    ...mapActions(["addProductToCart"]),
    async addCart(product) {
      const msg = await this.addProductToCart({ product });
      this.$toastr.s(msg, "Success!");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/variable";

.card {
  position: relative;

  &:hover {
    box-shadow: 0 3px 6px #2c2e2e7a;
  }

  img {
    height: 348px;
  }

  .card-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .off-sale {
    position: absolute;
    width: 70px;
    padding-left: 10px;
    height: 35px;
    top: 0;
    right: 0;
    color: #fff;
    font-size: 20px;
    background: rgba(237, 108, 0, 0.8);
  }

  .card-title {
    &:hover {
      cursor: default;
    }
  }
}

.detail {
  text-decoration: none;
}
</style>