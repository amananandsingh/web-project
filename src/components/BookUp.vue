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
                <h4 class="text-center" style="color: YELLOW">BOOK REGISTER</h4>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col"></div>
                <div class="col">
                     <!--either get or post-->
                        <div class="field my-3">
                            <label for="" class="form-label">BookName:</label>
                            <input type="text" class="form-control" v-model='bookName'>
                        </div>
                        <div class="field my-3">
                            <label for="" class="form-label">BookAuth:</label>
                            <input type="text" class="form-control" v-model='bookAuth'>
                        </div>
                        <div class="field my-3">
                            <label for="" class="form-label">Bookid:</label>
                            <input type="text" class="form-control" v-model='bookid'>
                            <div class="field my-3">
                                <label for="" class="form-label">DayofRelease</label>
                                <input type="text" class="form-control" v-model='dayofrelease'>
                            </div>
                           
                        </div>

                   <input type="submit" value="REGISTER" class="btn btn-dark my-4 w-200" @click="adduser()"/>
                    
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
    name: 'BookUp',
    data() {
        return {
            bookName: '',
            bookAuth: '',
            bookid: '',
           dayofrelease: '',
           

        }
    },
    methods: {
        async adduser() {
            try {
                let data = {
                    bookName: this.bookName,
                    bookAuth: this.bookAuth,
                    bookid: this.bookid,
                   dayofrelease: this.dayofrelease,
                   

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