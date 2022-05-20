<template>
  <div class="addEditContainer">
    <p class="text--disabled mb-6" @click="goToHome()"><span style="font-size: 20px;">&lt;</span> BACK</p>
    <div class="text-center">
      <v-avatar
        color="White"
        size="112"
      >
        <span class="avatarText">RJ</span>
      </v-avatar>
    </div>
    <div class="my-4">
      <div class="mb-2">  
        <p><span class="spanClass">First Name</span><br />
          <v-text-field dense></v-text-field>
        </p>
      </div>
      <div class="mb-2">  
        <p><span class="spanClass">Last Name</span><br />
          <v-text-field dense></v-text-field>
        </p>
      </div>
      <div class="mb-2">  
        <p><span class="spanClass">Phone Number</span><br />
          <v-text-field dense></v-text-field>
        </p>
      </div>
      <div>  
        <p><span class="spanClass">Email Address</span><br />
          <v-text-field dense></v-text-field>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    .v-text-field {
        margin-top: 0px;
    }
  }
</style>