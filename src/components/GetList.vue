<template>
    <el-row class="row-bg" justify="center">
        <el-text class="mx-1" size="large">
            <h1>DEWU(毒)人员查找</h1>
        </el-text>
    </el-row>

    <el-row class="row-bg" justify="center">
        <el-col :span="10" :offset="4">
            <el-input
                v-model="keyword"
                placeholder="请输入关键字"
                style="width: 80%"
                clearable
            ></el-input>
        </el-col>
        <el-col :span="4">
            <el-button type="primary" @click="search" plain> 查询 </el-button>
        </el-col>
    </el-row>

    <el-row class="row-bg" justify="center">
        <el-table :data="tableData" style="width: 80%;margin-top: 10px;">
            <el-table-column
                prop="userId"
                label="用户编号"
                width="180"
                align="center"
            />
            <el-table-column
                prop="userName"
                label="用户名称"
                width="180"
                align="center"
            />
            <el-table-column
                prop="followNum"
                label="关注数量"
                width="180"
                align="center"
            />
            <el-table-column
                prop="fansNum"
                label="粉丝数量"
                width="180"
                align="center"
            />
            <el-table-column label="个人主页链接" width="380" align="center">
                <template #default="{ row }">
                    <el-link
                        :href="
                            'https://gravity.dewu.com/talent?userId=' +
                            row.userid
                        "
                        target="_blank"
                    >
                        {{
                            "https://gravity.dewu.com/talent?userId=" +
                            row.userid
                        }}
                    </el-link>
                </template>
            </el-table-column>
        </el-table>
    </el-row>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import service from "@/utils/request";
import { ElLoading } from "element-plus";

const tableData = ref([]);
const keyword = ref("");
const initpage = async (kw) => {

    // ! laoding
    const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
    });

    try {
        const senddata = {
            kw: kw,
        };
        const res = await service.post("/api/gs", senddata);
        console.log("res", res);
        if (res.status === 200) {
            tableData.value = res.data;
        }
        console.log("tableData", tableData);
    } catch (error) {
        console.error(error);
    }

    // ! close loading
    loading.close();

};

onMounted(async () => {
    await initpage("穿搭");
});

const search = async () => {
    await initpage(keyword.value);
};
</script>

<style lang="less" scoped></style>
