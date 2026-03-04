export function router(url) {
	uni.navigateTo({
		url: "/pages/" + url
	})
}
export function returnIndex(){
	uni.switchTab({
		url: "/pages/index/index"
	})
}