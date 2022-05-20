<template>
  <div class="home">
    <p class="text--disabled mb-6">MY CONTACTS</p>
    <v-autocomplete
      v-model="searchText"
      clearable
      hide-no-data
      append-icon="mdi-magnify"
      label="Type name or number"
      solo
    >
    </v-autocomplete>
    
    <div class="UserListMainBox">
      <div class="d-flex userListContainer" v-for="(person, index) in contactList" :key="index">
        <div>
          <img src="@/assets/dummy-profile.png" alt="image" height="50px" width="50px">
        </div>
        <div class="ml-4">
          <p class="nameClass"><span class="nameColor">{{person.FirstName}} {{person.LastName}}</span> <br />{{person.Phone}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contacts from '@/assets/contact.json'
export default {
  name: 'Home',
  data() {
    return {
      searchText : '',
      contactList: []
    }
  },
  mounted() {
    this.contactList = contacts
  }
}
</script>

<style lang="scss" scoped>
.UserListMainBox{
  height: 500px;
  padding: 2px 2px;
  padding-bottom: 60px;
  overflow: scroll;
}
  .userListContainer {
    height: 50px;
    margin-bottom: 10px;
    -webkit-box-shadow: 0 0 8px 2px #edeff0;
    -moz-box-shadow: 0 0 8px 2px #edeff0;
    box-shadow: 0 0 8px 2px #edeff0;

    .nameClass{
      margin-top: 5px;
      font-size: 13px;

      .nameColor{
        color: #6ed4f0;
      }
    }
  }
  ::v-deep {
    .v-autocomplete.v-select--is-menu-active .v-input__icon--append .v-icon {
      transform: none !important;
    }
  }
</style>
