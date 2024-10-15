<template>
    <el-row class="row-bg" justify="start">
        <el-col :span="24">
            <el-header class="header" style="width: 100vw">
                <el-row>
                    <el-col :span="2">
                        <div class="logo">
                            <el-icon :size="50" style="margin-top: 10px">
                                <Service />
                            </el-icon>
                        </div>
                    </el-col>
                    <el-col :span="20">
                        <el-text class="mx-1" type="primary" size="large">
                            <h2>DEWU(毒)人员查找</h2>
                        </el-text>
                    </el-col>

                    <!-- <el-col :span="2" >
                        <el-button type="primary" @click="info" style="margin-top: 10px;"
                            >信息汇总</el-button
                        >
                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary" @click="register" style="margin-top: 10px;"
                            >注册管理</el-button
                        >
                    </el-col> -->
                </el-row>
            </el-header>
        </el-col>
    </el-row>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const info = () => {
    console.log("info");
};

const register = () => {
    console.log("register");
};
</script>

<style scoped></style>