<template>
  <div class="containAll">
  <el-form :model="form" ref="form" :rules="rules" label-width="80px" :inline="false" size="normal" class="formWidth">
    <el-form-item label="登录账号">
      <el-input v-model="form.loginName"></el-input>
    </el-form-item>
    <el-form-item label="登录密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
      <el-button @click="resetForm('form')">清空</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
export default {
  name: 'basic',
  data () {
    return {
      form: {
        loginName: '',
        password: ''
      },
      rules: {
        loginName: [
          { required: true, message: '请输入登录名', trigger: 'change' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      const obj = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const formValue = this.$refs.form.model
          console.log(formValue, 'this.isvalue')
          obj.$axios({
            url: '/user/list',
            methods: 'get'
          }).then(res => {
            console.log(res, 'this,is.res')
          })
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped lang="less">
.containAll{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formWidth{
  width: 500px;
}
</style>
