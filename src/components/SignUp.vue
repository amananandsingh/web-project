<template>

    <!-- <!DOCTYPE html> -->
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>

    <body>
        <div class="container">
            <div class="alert bg-success my-3">
                <h4 class="text-center" style="color: red">create account(signup) </h4>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col"></div>
                <div class="col">
                     <!--either get or post-->
                        <div class="field my-3">
                            <label for="" class="form-label">FirstName:</label>
                            <input type="text" class="form-control" v-model='firstname'>
                        </div>
                        <div class="field my-3">
                            <label for="" class="form-label">Lastname:</label>
                            <input type="text" class="form-control" v-model='Lastname'>
                        </div>
                        <div class="field my-3">
                            <label for="" class="form-label">mobno:</label>
                            <input type="text" class="form-control" v-model='mobno'>
                            <div class="field my-3">
                                <label for="" class="form-label">email:</label>
                                <input type="text" class="form-control" v-model='email'>
                            </div>
                            <div class="field my-3">
                                <label for="" class="form-label">password:</label>
                                <input type="text" class="form-control" v-model='password'>
                            </div>
                            <div class="field my-3">
                                <label for="" class="form-label">Usertype:</label>
                                <input type="text" class="form-control" v-model='usertype'>
                            </div>
                        </div>

                   <input type="submit" value="signup" class="btn btn-info my-3 w-100" @click="adduser()"/>
                    
                </div>
                <div class="col"></div>
            </div>
        </div>
    </body>

    </html>



</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            firstname: '',
            Lastname: '',
            mobno: '',
            email: '',
            password: '',
            usertype: ''

        }
    },
    methods: {
        async adduser() {
            try {
                let data = {
                    firstname: this.firstname,
                    Lastname: this.Lastname,
                    mobno: this.mobno,
                    email: this.email,
                    password: this.password,
                    usertype: this.usertype,

                }
                await axios({
                    method: 'post',
                    url: 'http://localhost:3000/user/create',
                    data: data,
                })
            } catch (err) {
                console.log(err);
            }

        },
    },
};




</script>