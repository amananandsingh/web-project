<template>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>User list demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>
    <div>
<h1>user list is here:</h1>
{{ userlist }}
</div>
</body>
</html>
</template>
<script>
import axios from 'axios';
//import router from '@/router';
export default{
    name:'UserList',
    data() {
        return {
           userlist:[]
        }
    },
    created(){
        this.getuserlist();
    },
    methods:{
       async getuserlist(){
        let result= await axios({
            method:'get',
            url:'http://localhost:3000/user/list'
        })
        console.log(result);
        this.userlist=result.data.data

        }
    }
};
</script>
<style>

</style>