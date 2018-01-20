<template>
  <div>
    <div>
      <el-button type="success" icon="el-icon-circle-plus" round @click="addVisible = true">增加</el-button>
      <el-button type="danger" icon="el-icon-delete" round @click="isDelete()">删除</el-button>
      <el-button type="primary" icon="el-icon-edit" round @click="isupdata()">修改</el-button>      
    </div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="account"
        label="账号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="work"
        label="岗位">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="lastLogin"
        label="上次登录时间">
      </el-table-column>
      <el-table-column
        prop="LoginNumber"
        label="登录次数">
      </el-table-column>
    </el-table>
    <!-- 增加用户表单弹窗 -->
    <el-dialog title="增加用户" :visible.sync="addVisible">
      <el-form :model="form">
        <el-form-item label="账户" :label-width="formLabelWidth">
          <el-input v-model="form.account" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="岗位" :label-width="formLabelWidth">
          <el-input v-model="form.work" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser()">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 删除用户弹窗 -->
    <el-dialog title="确定要删除该用户吗？" :visible.sync="deleteVisible">
      <el-table :data="theDeleteUser">
        <el-table-column property="account" label="账户" width="100"></el-table-column>
        <el-table-column property="name" label="姓名"></el-table-column>
        <el-table-column property="work" label="岗位"></el-table-column>
        <el-table-column property="phone" label="电话"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="deleteVisible = false">取 消</el-button>
        <el-button type="danger" @click="sureDelete()">删 除</el-button>
      </div>
    </el-dialog>

    <!-- 修改页面弹窗 -->
    <el-dialog title="修改用户" :visible.sync="updataVisible">
      <el-form :model="updataForm">
        <el-form-item label="账户" :label-width="formLabelWidth">
          <el-input v-model="updataForm.account" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="updataForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="岗位" :label-width="formLabelWidth">
          <el-input v-model="updataForm.work" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="updataForm.phone" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updataVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureUpdata()">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/acmascript-6">
  import Vue from 'Vue'


  export default {
    data() {
      return {
        tableData: [{
          account: 'hefeng',
          name: '王小虎1',
          work: '管理员',
          phone: '15813113131',
          lastLogin: '2016-05-02',
          LoginNumber: '2'
        }, {
          account: 'hefeng',
          name: '王小虎2',
          work: '管理员',
          phone: '15813113131',
          lastLogin: '2016-05-02',
          LoginNumber: '2'
        }, {
          account: 'hefeng',
          name: '王小虎3',
          work: '管理员',
          phone: '15813113131',
          lastLogin: '2016-05-02',
          LoginNumber: '2'
        }, {
          account: 'hefeng',
          name: '王小虎4',
          work: '管理员',    
          phone: '15813113131',
          lastLogin: '2016-05-02',
          LoginNumber: '2'
        }],       
        form: {
          name: '',
          work: '',
          phone: '',
          account: ''
        },
        currentRow: null,
        addVisible: false,
        formLabelWidth: '120px',
        deleteVisible: false,
        updataVisible:false,
        theDeleteUser: [],
        updataForm:{}
      }
    },


  methods: {
    //获取点击的表单数组元素
    handleCurrentChange(val) {
        this.currentRow = val ;
        this.updataForm = (val === null) ? {}:val ;
        console.log(this.currentRow);
    },
    //为数组对象添加删除指定元素的方法
    removeByValue(arr, val) {
      for(var i = 0; i<arr.length; i++) {
        if(arr[i] == val) {
          arr.splice(i, 1);
          break;
        }
      }
    },

    //添加用户数据
    addUser() {
      console.log(this.form);


      this.addVisible = false;
    },

    //是否删除用户
    isDelete() {
      if(this.currentRow == null) {
        this.feedbackMessage("请先选择要操作的用户信息",'warning')
      } else {
        this.deleteVisible = true;    
        Vue.set(this.theDeleteUser, 0, this.currentRow);
      }
    },

    //确定删除用户
    sureDelete()  {
      this.deleteVisible = false;
      //发请求

      //请求结果
      console.log("已成功删除");
      this.removeByValue(this.tableData,this.currentRow);
      this.currentRow = null;
    },

    //是否修改用户
    isupdata() {
      console.log(this.updataForm)
      if(this.currentRow == null) {
        this.feedbackMessage("请先选择要操作的用户信息",'warning')
      } else {
        this.updataVisible = true;
      } 
    },

    //确定修改
    sureUpdata() {
      this.updataVisible = false;

      //发请求

      //请求结果

    },

    //显示操作反馈信息
    feedbackMessage(message,type) {
      this.$message({
        showClose: true,
        message: message,
        type: type
      });
    }
  }
  }
</script>

<style>
</style>
