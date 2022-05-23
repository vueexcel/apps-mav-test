<template>
  <div class="about">
    <p class="text--disabled mb-6" @click="goToHome()"><span style="font-size: 20px;">&lt;</span> BACK</p>
    <div class="text-center">
      <v-avatar
        color="White"
        size="112"
      >
        <span class="avatarText">{{avatarName}}</span>
      </v-avatar>
    </div>
    <div class="my-4">
      <div class="mb-2">
        <p><span class="spanClass">First Name</span><br />{{personSelected.FirstName ? personSelected.FirstName : ''}}</p>
      </div>
      <div class="mb-2">  
        <p><span class="spanClass">Last Name</span><br />{{personSelected.LastName ? personSelected.LastName : ''}}</p>
      </div>
      <div class="mb-2">  
        <p><span class="spanClass">Phone Number</span><br />{{personSelected.Phone ? personSelected.Phone : ''}}</p>
      </div>
      <div>  
        <p><span class="spanClass">Email Address</span><br />{{personSelected.Email ? personSelected.Email : ''}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatarName: '',
      personSelected: {
          FirstName: '',
          LastName : '',
          Phone : '',
          Email : '',
          index : null
      }
    }
  },
  mounted() {
    this.personSelected = this.$route.params.userDetails
    this.avatarName = this.personSelected.FirstName.charAt(0)+this.personSelected.LastName.charAt(0)
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>


<style lang="scss" scoped>
.avatarText {
  color: #6ed4f0;
  font-size: 50px;
}
p{
  font-size: 14px;
  margin-bottom: 5px;
  color: #939696;
  .spanClass {
    font-size: 12px;
    color: #6ed4f0;
  }
}
::v-deep {
    .v-avatar {
      -webkit-box-shadow: 0 0 8px 2px #edeff0;
      -moz-box-shadow: 0 0 8px 2px #edeff0;
      box-shadow: 0 0 8px 2px #edeff0 !important;
    }
  }
</style>