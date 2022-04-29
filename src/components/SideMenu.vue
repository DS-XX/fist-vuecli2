<template>
  <el-menu mode="horizontal" default-active="" @select="selectMenuItem">
    <el-submenu v-for="(submenus, index) in menus"
      :index="index + 1"
      :key="submenus.pathUrl">
      <template slot="title">{{submenus.name}}</template>
      <el-menu-item v-for="(item, subIndex) in submenus.children"
        :index="(index + 1) + '-' + (subIndex + 1)"
        :key="item.pathUrl">
          {{item.name}}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default{
  name: 'side-menu',
  props: {
    menus: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    selectMenuItem (val, path) {
      console.log(path, 'tjis/va')
      console.log(this, 'this.is.this')
      this.$router.push({path: '/messagePage'})
    }
  }
}
</script>
