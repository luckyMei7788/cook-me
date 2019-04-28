<template>
	<div class="attention-fans-nav">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="关注" name="first" @click="bgcolor" tabindex="0" aria-selected="true">
				<guanzhu></guanzhu>
			</el-tab-pane>
			<el-tab-pane label="粉丝" name="second" @click="bgcolor" tabindex="-1">
				<fensi></fensi>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		name : "attention-fans",
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
