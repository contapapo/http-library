const http = new easyHTTP;

const id = document.querySelector('input').value;

const data = {
    title: 'Test One',
    body: 'Body One'
};

//POST posts
document.querySelector('#button3').addEventListener('click', function(e){
    http.post('https://jsonplaceholder.typicode.com/posts', data,
        function(err, post){
            if(err){
                console.log(err);
            }
            console.log(post);
    });
    e.preventDefault();
});

//UPDATE posts
document.querySelector('#button4').addEventListener('click', function(e){
    http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data,
        function(err, post){
            if(err){
                console.log(err);
            }
            console.log(post);
    });
    e.preventDefault();
});

//DELETE post
document.querySelector('#button5').addEventListener('click', function(e){
    http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`,
        function(err, msg){
            if(err){
                console.log(err);
            }
            console.log(msg);
        }    
    );
    
    e.preventDefault();
});

//Get posts
document.querySelector('#button1').addEventListener('click', function(e){

    http.get('https://jsonplaceholder.typicode.com/posts', 
        function(err,posts){
            if(err){
                console.log(err);
            }
            console.log(posts);
        });  

    e.preventDefault();
});

//Get post
document.querySelector('#button2').addEventListener('click', function(e){

    http.get(`https://jsonplaceholder.typicode.com/posts/${id}`, 
        function(err,posts){
            if(err){
                console.log(err);
            }
            console.log(posts);
        });  

    e.preventDefault();
});