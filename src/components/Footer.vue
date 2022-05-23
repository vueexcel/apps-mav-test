<template>
    <div class="FooterContainer">
        <div class="text-center">
            <div v-if="routeName === 'Home'" class="iconContainer" @click="goToAddEdit()">
                <div class="iconBox" style="color: #6ed4f0">
                  <v-icon
                    class="mt-1"
                    medium
                    color="white"
                    >
                    mdi-plus
                </v-icon>
                </div>
            </div>
            <div v-if="routeName === 'Detail'" class="iconContainer">
                <div class="iconBox" style="color: #6ed4f0" @click="editUser()">
                  <v-icon
                    class="mt-1"
                    medium
                    color="white"
                    >
                    mdi-pencil
                </v-icon>
                </div>
                <div class="iconBox ml-2" style="background: red;" @click="deleteUser()">
                  <v-icon
                    class="mt-1"
                    medium
                    color="white"
                    >
                    mdi-delete
                </v-icon>
                </div>
            </div>
            <div v-if="routeName === 'AddEdit'" class="iconContainer">
                <div class="iconBox" @click="saveUser()">
                  <v-icon
                    class="mt-1"
                    medium
                    color="white"
                    >
                    mdi-content-save
                </v-icon>
                </div>
            </div>
        </div>

        <!-- open snakbar to show message -->
        <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        :color="snackBarColor"
        >
        {{message}}

        <template v-slot:action="{ attrs }">
            <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
    </div>
</template>

<script>

export default {
    props: {
        personSelected: {
            Type: Object,
            default: null
        }
    },
    data () {
        return {
            snackbar: false,
            message: '',
            timeout: 2000,
            snackBarColor: ''
        }
    },
    computed: {
        routeName () {
            return this.$route.name
        }
    },
    methods: {
        showSnackBar(color, msg) {
          this.snackbar = true
          this.message = msg
          this.snackBarColor = color
        },
        goToAddEdit() {
            this.$router.push('/addEdit')
        },
        editUser() {
            if (this.personSelected) {
              this.$router.push({name: 'AddEdit', params: {editUserDetail: this.personSelected}})
            }
        },
        deleteUser () {
          this.showSnackBar('red', `${this.personSelected.FirstName} is being deleted`) 
          setTimeout(() => {
            if(this.personSelected) {
                this.$router.push({name: 'Home', params: {deleteUser: this.personSelected}})
            }
          }, 2050);
        },
        saveUser () {
          if(this.personSelected && this.personSelected.FirstName.trim() && this.personSelected.LastName.trim() && this.personSelected.Phone.trim()) {
            this.showSnackBar('success', `${this.personSelected.FirstName} is being saved`) 
            setTimeout(() => {
              this.$router.push({name: 'Home', params: {saveUser: this.personSelected}})
            }, 2050);
          } else {
              this.showSnackBar('red', `Cann't create new contact, try again.`)
          }
        }
    }
}
</script>

<style lang="scss" scoped>
 .FooterContainer {
   position: fixed;
   bottom: 0;
   left: 0;
   background: white;
   width: 100vw;
   border-top: 1px solid #ccc;
   height: 30px;

   .iconContainer {
     width: 100vw; 
     display:flex; 
     justify-content: center;
   }
   .iconBox {
       background: #6ed4f0; 
       margin-top: -18px; 
       border-radius: 50%; 
       height: 35px; 
       width: 35px;
   }
 }
</style>
