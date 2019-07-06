<template>
    <el-form>

        <el-dropdown>
            <el-button plain>
                草稿箱(0)
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>成都</el-dropdown-item>
                <el-dropdown-item>扬州</el-dropdown-item>
                <el-dropdown-item>太原</el-dropdown-item>
                <el-dropdown-item>南屏山</el-dropdown-item>
                <el-dropdown-item>九寨沟</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-form>
</template>

<script>
export default {

}
</script>

<style>
.el-dropdown {
    vertical-align: top;
}
.el-dropdown + .el-dropdown {
    margin-left: 15px;
}
.el-icon-arrow-down {
    font-size: 12px;
}
</style>
