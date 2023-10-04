<template>
  <div class="course-table">

    <h1>{{weeks[currentWeek]}}</h1>

    <!-- 课程表 -->
    <table border="1">
        <tr>
            <th></th>
            <th>星期一</th>
            <th>星期二</th>
            <th>星期三</th>
            <th>星期四</th>
            <th>星期五</th>
            <th>星期六</th>
            <th>星期日</th>
        </tr>
        <tr v-for="index in 5" :key="index">
            <td class="custom-cell">{{incrementedSum1(index)}}、{{incrementedSum2(index)}} 
                <br/> {{ schoolTime[incrementedSum1(index) - 1] }} <br/> {{ schoolTime[incrementedSum1(index)] }}
            </td>
            <!-- 周一 -->
            <td v-if="courseData[0][index-1].rowspan" 
            :style="courseData[0][index-1].colour" 
            :rowspan="courseData[0][index-1].rowspan"
            >
                <span>{{ courseData[0][index-1].content }}</span>
            </td>
            <td v-else-if="courseData[0][index-1].isHiddenCell" :style="courseData[0][index-1].colour" >
                <span>{{ courseData[0][index-1].content }}</span>
            </td>

            <!-- 周二 -->
            <td v-if="courseData[1][index-1].rowspan" 
            :style="courseData[1][index-1].colour" 
            :rowspan="courseData[1][index-1].rowspan"
            >

                <span > {{ courseData[1][index-1].content }}</span>
            </td>
            <td v-else-if="courseData[1][index-1].isHiddenCell" :style="courseData[1][index-1].colour" >
                <span >{{ courseData[1][index-1].content }}</span>
            </td>

            <!-- 周三 -->
            <td v-if="courseData[2][index-1].rowspan" 
            :style="courseData[2][index-1].colour" 
            :rowspan="courseData[2][index-1].rowspan"
            >
                <span>{{ courseData[2][index-1].content }}</span>
            </td>
            <td v-else-if="courseData[2][index-1].isHiddenCell" :style="courseData[2][index-1].colour" >
                <span >{{ courseData[2][index-1].content }}</span>
            </td>

            <!-- 周四 -->
            <td v-if="courseData[3][index-1].rowspan" 
            :style="courseData[3][index-1].colour" 
            :rowspan="courseData[3][index-1].rowspan"
            >
                <span>{{ courseData[3][index-1].content }}</span>
            </td>
            <td v-else-if="courseData[3][index-1].isHiddenCell" :style="courseData[3][index-1].colour" >
                <span>{{ courseData[3][index-1].content }}</span>
            </td>

            <!-- 周五 -->
            <td v-if="courseData[4][index-1].rowspan" 
            :style="courseData[4][index-1].colour" 
            :rowspan="courseData[4][index-1].rowspan"
            >
                <span>{{ courseData[4][index-1].content }}</span>
            </td>
            <td v-else-if="courseData[4][index-1].isHiddenCell" :style="courseData[4][index-1].colour" >
                <span >{{ courseData[4][index-1].content }}</span>
            </td>

            <!-- 周六 -->
            <td v-if="courseData[5][index-1].rowspan" 
            :style="courseData[5][index-1].colour"  
            :rowspan="courseData[5][index-1].rowspan"
            >
                <span>{{ courseData[5][index-1].content }}</span>
            </td>
            <td v-else-if="courseData[5][index-1].isHiddenCell" :style="courseData[5][index-1].colour" >
                <span>{{ courseData[5][index-1].content }}</span>
            </td>

            <!-- 周日 -->
            <td v-if="courseData[6][index-1].rowspan"  
            :style="courseData[6][index-1].colour" 
            :rowspan="courseData[6][index-1].rowspan"
            >
                <span>{{ courseData[6][index-1].content }}</span>
            </td>
            <td v-else-if="courseData[6][index-1].isHiddenCell" :style="courseData[6][index-1].colour" >
                <span >{{ courseData[6][index-1].content }}</span>
            </td>
        </tr>
    </table>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name:'ClassSchedule',
        data() {
            return {
                schoolTime:[
                    '09:00- 09:45',
                    '09:50- 10:35',
                    '10:55- 11:40',
                    '11:45- 12:30',
                    '14:30- 15:15',
                    '15:20- 16:05',
                    '16:30- 17:15',
                    '17:20- 18:05',
                    '18:30- 19:15',
                    '19:20- 20:05',
                ],

                courseData:[
                        [
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                        ],
                        [
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                        ],
                        [
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'SDN网络规划与设计(合一)  B414',colour:'background-color: #deab8a','rowspan':2,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':false},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                        ],
                        [
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                        ],
                        [
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'企业网络与运维(合一)  B308',colour:'background-color: gray','rowspan':2,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':false},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                        ],
                        [
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                        ],
                        [
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                            {'content':'企业网络与运维(合一)  B311',colour:'background-color: red','rowspan':2,'isHiddenCell':true},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':false},
                            {'content':'',colour:'','rowspan':0,'isHiddenCell':true},
                        ],
                    ],
                Datas:{
                    1:[
                        [
                            {'content':'网络综合布线(合一)  B308',colour:'red','rowspan':2},
                            {'content':'网络综合布线(合一)  B308',colour:'red','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                        ],
                        [
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                        ],
                        [
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                            {'content':'SDN网络规划与设计(合一)  B414',colour:'red','rowspan':2},
                            {'content':'SDN网络规划与设计(合一)  B414',colour:'red','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                        ],
                        [
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                        ],
                        [
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                            {'content':'SDN网络规划与设计(合一)  B414',colour:'red','rowspan':2},
                            {'content':'SDN网络规划与设计(合一)  B414',colour:'red','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                        ],
                        [
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                        ],
                        [
                            {'content':'',colour:'','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                            {'content':'SDN网络规划与设计(合一)  B414',colour:'red','rowspan':2},
                            {'content':'SDN网络规划与设计(合一)  B414',colour:'red','rowspan':0},
                            {'content':'',colour:'','rowspan':0},
                        ],
                    ],
                },
                weeks:["第一周","第二周","第三周","第四周","第五周","第六周","第七周","第八周","第九周","第十周","第十一周","第十二周","第十三周","第十四周","第十五周","第十六周","第十七周"],
                currentWeek:0,
            }
        },
        computed:{
            incrementedSum1(){
                return function(index){
                    return index * 2 - 1
                }
            },
            incrementedSum2(){
                return function(index){
                    return index * 2
                }
            },
            getCourseData(){
                return function(week){
                    console.log(this.courseData)
                    return this.Datas[week]
                }
            }
        },
        methods:{

        },
        created() {
            // axios.get('http://192.168.107.112:8099/api/ClassSchedule/GetALLClassSchedule').then(
            // axios.get('http://localhost:5075/api/ClassSchedule/GetALLClassSchedule').then(
            axios.get('http://43.139.69.222:8099/api/ClassSchedule/GetALLClassSchedule').then(
                Response => {
                    console.log('请求成功',Response.data)
                    this.Datas=Response.data.data
                    this.courseData=this.Datas[Response.data.code].classScheduleList
                    this.currentWeek=Response.data.code
                    console.log('请求成功',Response.data.code)
                },
                error => {
                    console.log('请求失败',error.message)
                }
            )
        }
    }
</script>

<style scoped>
    .course-table {
    margin: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  h1{
    text-align: center;
  }
  .custom-cell{
    padding: 0;
  }
  th { 
    background-color: #f2f2f2;
  }
  
  .course-cell {
    background-color: lightblue;
    font-weight: bold;
  }
</style>