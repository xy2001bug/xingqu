<template>
<div id="container" class="map-test">
    改动
</div>
    
</template>

<script>
export default {
    mounted(){
        window.onLoad  = function(){
                var map = new AMap.Map('container');
        }
        var url = `https://webapi.amap.com/maps?v=1.4.15&key=${"e3379ac7718631846d9e4aae9901ce32"}&callback=onLoad`;
        var jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi);
    }
}
</script>

<style>
.map-test{
    height: 500px;
    width: 1500px;
}
</style>
