<template>
  <div class="wrapper">
    <el-select placeholder="请选择相关字体库" clearable v-bind="$attrs">
      <el-option
        v-for="item in fontList"
        :key="item.cn"
        :value="item.en"
        :label="item.cn"
        :style="{ fontFamily: item.en }">
        <span style="float: left; font-weight: bold">{{ item.cn }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px;margin-left: 36px;">{{ item.en }}</span>
      </el-option>
    </el-select>
    <i
      v-if="showRefresh"
      class="el-icon-refresh"
      :class="{ rotate }"
      @click="refresh"></i>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'FontSelector',
  props: {
    showRefresh: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      if (!store.state.fontFamilyList || store.state.fontFamilyList.length === 0) {
        store.commit('updateFontFamilyList')
      }
    })
    const fontList = computed(() => store.state.fontFamilyList)
    const rotate = ref(false)
    const refresh = () => {
      store.commit('updateFontFamilyList')
      rotate.value = true
      setTimeout(() => {
        rotate.value = false
      }, 500)
    }
    return {
      fontList,
      rotate,
      refresh
    }
  }
})
</script>
<style lang="scss" scoped>
.wrapper {
  display: inline-flex;
  align-items: center;
  .el-icon-refresh {
    font-size: 20px;
    color: #889;
    cursor: pointer;
    margin-left: 5px;
    &.rotate {
      transform: rotate(360deg);
      transition: transform .4s ease-in-out;
    }
  }
}
</style>
