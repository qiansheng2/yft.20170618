<template>
  <div id='app'>
    <!--[if lte IE 9]>
                  <p class='browsehappy'>你正在使用<strong>过时</strong>的浏览器，Amaze UI 暂不支持。 请 <a href='http://browsehappy.com/' target='_blank'>升级浏览器</a>
                    以获得更好的体验！</p>
                <![endif]-->
    <div id='sideBar'>
      <el-menu default-active='manifests' theme='dark' v-bind:router='true' mode='horizontal'>
        <el-submenu index='1'>
          <template slot='title'>销售情况</template>
          <el-menu-item index='1-1'>总体</el-menu-item>
          <el-menu-item index='1-2'>本月</el-menu-item>
          <el-menu-item index='1-2'>本周</el-menu-item>
          <el-menu-item index='1-3'>客户一览</el-menu-item>
        </el-submenu>
        <el-submenu index='2'>
          <template slot='title'>业务录入</template>
          <el-menu-item index='2-1'>销售</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div id='contents'>
      <el-table :data='tableData' border style='width: 100%' height='150'>
        <el-table-column fixed prop='no' label='#' width='40'>
        </el-table-column>
        <el-table-column fixed prop='issueDate' label='签约日' width='120' sortable>
        </el-table-column>
        <el-table-column prop='code' label='编码' width='150' sortable>
        </el-table-column>
        <el-table-column prop='district' label='区域' width='150' sortable>
        </el-table-column>
        <el-table-column prop='name' label='名称' width='150'>
        </el-table-column>
        <el-table-column prop='size' label='连锁规模' width='150'>
        </el-table-column>
        <el-table-column prop='customerManager' label='负责人' width='150'>
        </el-table-column>
        <el-table-column prop='customerManagerTel' label='电话' width='150'>
        </el-table-column>
        <el-table-column prop='contact' label='联系人' width='150'>
        </el-table-column>
        <el-table-column prop='contactTel' label='电话' width='150'>
        </el-table-column>
        <el-table-column prop='salesManager' label='经理' width='150' sortable>
        </el-table-column>
        <el-table-column fixed='right' label='操作' width='100'>
          <template scope='scope'>
            <el-button @click='handleClick' type='text' size='small'>查看</el-button>
            <el-button type='text' size='small'>编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log(1)
    }
  },

  data() {
    return {
      tableData: [{
        issueDate: '2016-05-03',
        code: '2016-05-03',
        district: '2016-05-03',
        name: '2016-05-03',
        size: '2016-05-03',
        customerManager: '2016-05-03',
        customerManagerTel: '2016-05-03',
        contact: '2016-05-03',
        contactTel: '2016-05-03',
        salesManager: '2016-05-03'
      }]
    }
  }
}
</script>


<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
#app {
  margin-top: 0px
}
</style>
