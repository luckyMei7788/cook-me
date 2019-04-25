<template>
  <div class="cai">
	  
	  <logo></logo>
	  <sort></sort>
	  <bottom></bottom>
      
  </div>
</template>

<script>
	import logo from '../cai/logo.vue';
	import sort from '../cai/sort.vue';
	import bottom from '../cai/bottom.vue';
    export default {
        name: "cai",
				components:{
					logo,
					sort,
					bottom
				}
		
    }
</script>

<style scoped lang="less">
	*{
		margin:0;
		padding:0;
	}
	li{
		list-style:none;
	}
	a{
		text-decoration:none;
	}
	body{
		width:100%;
		height:100%;
		// background:pink;
	}
	.cai{
		width: 100%;
		height: 100%;
		background: #f6f6f6;
	}
	
</style>