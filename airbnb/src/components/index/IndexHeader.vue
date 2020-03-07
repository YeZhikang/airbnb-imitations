<template>
    <div>
        <div class="header-box">
            <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height:32px;width:32px;display:block;fill:#FFFFFF"><path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path></svg>
            <div style="display:block;height: 32px"><img style="height:100%;" src="https://z1.muscache.cn/pictures/a9eb74b8-51a7-4059-a52a-f2a39d3b86fd.jpg" alt="" width="32px" height="32px"></div>
        </div>
        <div class="present">
            <div class="container">
                <p>{{presents[0].content}}</p>
                <h3>{{presents[0].title}}</h3>
                <div class="normal">查看合集</div>
            </div>
            <index-searching></index-searching>
        </div>
    </div>
</template>

<script>
    import IndexSearching from "./IndexSearching";
    export default {
        name: "IndexHeader",
        components: {IndexSearching},
        data(){
            return{
                presents:[
                    {
                        title:'周租、月租都可以',
                        content: '住久一点更像家'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .header-box{
        position: absolute;
        width: 90%;
        left: 6%;
        top: 4%;
        display: flex;
        justify-content: space-between;
    }
    .present{
        background-image: url(https://z1.muscache.cn/pictures/carson/carson-1581066011829/original/4256deed-5a56-41c8-a8a8-da4663261597.jpg);
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position-x: 100%;
    }

    .container{
        padding: 80px 0 55px 6%;
    }

    .container>p,h1,h2,h3,h4,h5{
        margin: 0;
        padding: 0;
        color: white;
    }

    .container>p{
        font-size: 12px;
        font-weight: 400;
    }

    .container>h3{
        font-size: 24px;
        margin-top: 5px;
        font-weight: 600;
    }
    .normal{
        margin: 7px 0 0 0;
        width: 70px;
    }
</style>
