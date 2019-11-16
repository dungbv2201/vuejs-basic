<template>
    <nav aria-label="...">
        <ul class="pagination">
            <li :class="['page-item', {'disabled': currentPage <= 1}]">
                <template v-if="currentPage <= 1">
                    <span class="page-link">Previous</span>
                </template>
               <template v-else>
                   <span class="page-link" @click.prevent="updateControl(2,currentPage)">Previous</span>
               </template>
            </li>
            <li :class="['page-item',{'active': currentPage === page}]" v-for="page in totalPage">
                <a class="page-link" @click.prevent="updateCurrentPage(page)" href="#">{{ page }}</a>
            </li>
            <li class="page-item">
                <template v-if="currentPage === totalPage">
                    <span class="page-link">Next</span>
                </template>
                <template v-else>
                    <a class="page-link" href="#" @click.prevent="updateControl(1,currentPage)">Next</a>
                </template>
            </li>
        </ul>
    </nav>
</template>

<script>
  export default {
    name: "Pagination",
    props:{
      totalPage:{
        require: true,
        type: Number,
        default:1
      },
      urlPage:{
        require: true,
        type: String,
        default: ''
      },
      currentPage:{
        require: true,
        type:Number
      }

    },
    methods:{
      updateCurrentPage(page){
        this.$emit('update:currentPage',page)
      },
      updateControl(type,currentPage){
        if(type === 1 && currentPage < this.totalPage){
          this.currentPage = currentPage++
          this.$emit('update:currentPage',currentPage++)
        }
        if(type ===2 && currentPage >1){
          this.currentPage = currentPage--
          this.$emit('update:currentPage',currentPage--)
        }
      }
    }
  }
</script>

<style scoped>

</style>