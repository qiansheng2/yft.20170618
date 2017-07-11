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
    <!--<div>
          <p>当前路径：{{$route.path}}</p>
          <p>当前参数：{{$route.params}}</p>
          <p>路由名称：{{$route.name}}</p>
          <p>路由查询参数：{{$route.query}}</p>
          <p>路由匹配项：</p>
        </div>-->
    <div id='contents'>
      <el-table :data=customers border style='width: 100%' height='150'>
        <el-table-column fixed type='index' label='#' width='40'>
        </el-table-column>
        <el-table-column fixed prop='签约日' label='签约日' width='120' sortable>
        </el-table-column>
        <el-table-column prop='销售经理' label='经理' width='150' sortable>
        </el-table-column>
        <el-table-column prop='社保编码' label='编码' width='150' sortable>
        </el-table-column>
        <el-table-column prop='区域' label='区域' width='150' sortable>
        </el-table-column>
        <el-table-column prop='名称' label='名称' width='150' sortable>
        </el-table-column>
        <el-table-column prop='连锁规模' label='连锁规模' width='150' sortable>
        </el-table-column>
        <el-table-column prop='负责人' label='负责人' width='150' sortable>
        </el-table-column>
        <el-table-column prop='负责人电话' label='电话' width='150'>
        </el-table-column>
        <el-table-column prop='联系人' label='联系人' width='150' sortable>
        </el-table-column>
        <el-table-column prop='联系人电话' label='电话' width='150'>
        </el-table-column>
        <el-table-column fixed='right' label='操作' width='100'>
          <template scope='scope'>
            <el-button @click='editFormVisible = true' type='text' size='small'>修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 数据修改Form -->
    <el-dialog title='修改' size='small' :close-on-click-modal='false' :visible.sync='editFormVisible'>
      <el-form label-position='right' :model='editForm' :inline='true'>
        <el-form-item label='签约日1' label-width='100px' prop='abcde' required>
          <el-date-picker  type='date' placeholder='选择日期' :picker-options='pickerOptions0'>
          </el-date-picker>
        </el-form-item>
        <el-form-item label='销售经理' label-width='100px' required>
          <el-select v-model="salesManager" placeholder="销售经理">
            <el-option v-for='salesManager in salesManagers' :key='salesManager.value' :label='salesManager.name' :value='salesManager.value'>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label='编码' label-width='100px' required>
          <el-input :minlength='6' :maxlength='6' placeholder='6位社保编码' auto-complete='off'></el-input>
        </el-form-item>
        <el-form-item label='区域' label-width='100px' required>
          <el-select v-model="districtName" placeholder="区域">
            <el-option v-for='district in districts' :key='district.name' :label='district.name' :value='district.name'>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label='名称' label-width='100px' required>
          <el-input max-length='60'></el-input>
        </el-form-item>
        <el-form-item label='连锁规模' label-width='100px' required>
          <el-input auto-complete='off'></el-input>
        </el-form-item>
        <el-form-item label='负责人' label-width='100px' required>
          <el-input auto-complete='off'></el-input>
        </el-form-item>
        <el-form-item label='负责人电话' label-width='100px' required>
          <el-input auto-complete='off'></el-input>
        </el-form-item>
        <el-form-item label='联系人' label-width='100px' required>
          <el-input auto-complete='off'></el-input>
        </el-form-item>
        <el-form-item label='联系人电话' label-width='100px' required>
          <el-input auto-complete='off'></el-input>
        </el-form-item>
      </el-form>
      <div slot='footer' class='dialog-footer'>
        <el-button @click='editFormVisible = false'>取 消</el-button>
        <el-button type='primary' @click='submitForm(editForm)'>确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  mounted: function () {
    console.log('mounted!!')
  },
  created: function() {
    console.log('created!!')
    console.log('mapstate:' + mapState)
    this.fetchData()
    console.log('mapstate2:' + mapState(['customers']))
    // console.log('customers:' + customers)
  },
  methods: {
    fetchData() {
      this.$store.dispatch('initYftTop')
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  computed:
    mapState(['customers']),
  fetchData2(){
    this.$store.dispatch('initYftTop2')
  },
  fetchData3(){
    this.$store.dispatch('initYftTop3')
  },
  data: function () {
    return {
      editFormVisible: false,
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: '',
      salesManagers:
      [
        { value: '1', name: '郑智慧' },
        { value: '2', name: '包永全' },
        { value: '3', name: '洪玥' }
      ],
      salesManager: '',
      districts:
      [
        { name: '市本级' },
        { name: '锦江区' },
        { name: '青羊区' },
        { name: '金牛区' },
        { name: '武侯区' },
        { name: '成华区' },
        { name: '龙泉驿区' },
        { name: '青白江区' },
        { name: '新都区' },
        { name: '温江区' },
        { name: '双流区' },
        { name: '郫都区' },
        { name: '金堂县' },
        { name: '大邑县' },
        { name: '蒲江县' },
        { name: '新津县' },
        { name: '都江堰市' },
        { name: '彭州市' },
        { name: '邛崃市' },
        { name: '崇州市' },
        { name: '简阳市' },
        { name: '天府新区' }
      ],
      districtName: '',
      rules: {
        abcde: [
          { required: true, message: '请输入签约日', trigger: 'blur' }
        ]
      },
      editForm: {

      }
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
