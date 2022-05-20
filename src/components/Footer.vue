<template>
    <div class="FooterContainer">
        <div class="text-center">
            <div v-if="routeName === 'Home'" class="iconContainer">
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
                <div class="iconBox" style="color: #6ed4f0">
                  <v-icon
                    class="mt-1"
                    medium
                    color="white"
                    >
                    mdi-pencil
                </v-icon>
                </div>
                <div class="iconBox ml-2" style="background: red;">
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
                <div class="iconBox">
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
    </div>
</template>

<script>

export default {
    computed: {
        routeName () {
            return this.$route.name
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
