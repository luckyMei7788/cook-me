<template>
    <div>
<!-- 
        <div>
            {{data}}
            <div>
                <input type="button" @click="upNum()" value="按钮">
            </div>

        </div> -->
    </div>
    
</template>

<script>
// export default {
//     name:'menu-detail',
//     data(){
//         return{
//             data:{},
//             bookId:1 
//         }
//     },
//     methods:{
//         detail(){
//             var bookId = this.bookId;
//             this.$axios.get("/cookme/sys/book/selectById/"+bookId)
//             .then(({data})=>{
//                 console.log(data);
//                 // this.bookName=data.bookName;
//                 // this.bookDetails=data.bookDetails;
//                 // this.bookList=data.bestType;
//                 this.data = data;
//             })
//         },
//         upNum(){
//             this.bookId ++;
//             if(this.bookId === 8){
//                 this.bookId =1;
//             }
//             console.log(this.bookId);
//             this.detail()
//         }
//     },
//     mounted(){
//         this.detail()
//     }
// }
</script>

