
// Agregar objeto directamente a la base
const savePosts = () => {
    $.ajax({
        method: "POST",
        url: "https://devto-74b4e-default-rtdb.firebaseio.com/posts/.json",
        data: JSON.stringify({
            postId: 2,
            userId: 2,
            title: "Reflecting on my 1st month blogging; a retrospect 💭",
            content: "Oh boy, this one is frustrating! Let me tell you something: I don't lose sleep over this, but if anything, I'd love to hear from others how they feel about my blogs. I personally value comments more than likes. I like to engage in intellectual conversations and discussions whenever possible, but truth is, most people have an easier time dropping likes and moving on with their lives. Totally acceptable, though it leaves me wondering how they really feel about my post.",
            creationDate: "11/08/2020",
            reactions: 100,
            coverUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--4c0eplTv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gclqreati3py9u3ic7r5.jpg"
        }),
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error)
        }
    })
}

const saveReplies = () => {
    $.ajax({
        method: "POST",
        url: "https://devto-74b4e-default-rtdb.firebaseio.com/replies/.json",
        data: JSON.stringify({
            userId: 2,
            postId: 2,
            content: "Excelente post!!!",
            creationDate: "11/08/2020"
        }),
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error)
        }
    })
}

const saveUsers = () => {
    $.ajax({
        method: "POST",
        url: "https://devto-74b4e-default-rtdb.firebaseio.com/users/.json",
        data: JSON.stringify({
            userId: 2,
            userName: "Israel Salinas",
            photo: "https://media-exp1.licdn.com/dms/image/C4E03AQEKN_uf1kAPMw/profile-displayphoto-shrink_400_400/0/1550176229405?e=1624492800&v=beta&t=Qpn2WK0DUkdBFCBChATyL1rxtDKGm_dwPoLNLww37yA"
        }),
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error)
        }
    })
}

// Traer datos del endpoint
const getPosts = () => {
    let dbPosts = [];
    $.ajax({
        method: "GET",
        url: "https://devto-74b4e-default-rtdb.firebaseio.com/posts/.json",
        success: (response) => {
            console.log(response);
            //dbPosts = response
            for(key in response) {
                dbPosts.push({id: key, data: response[key]})
            }
        },
        error: (error) => {
            console.log(error)
        },
        async: false
    });

    console.log("getPosts", dbPosts);
    return dbPosts;
}

const getReplies = () => {
    let dbReplies;
    $.ajax({
        method: "GET",
        url: "https://devto-74b4e-default-rtdb.firebaseio.com/replies/.json",
        success: (response) => {
            //console.log(response);
            dbReplies = response
        },
        error: (error) => {
            console.log(error)
        },
        async: false
    });

    return dbReplies;
}

const getUsers = () => {
    let dbUsers;
    $.ajax({
        method: "GET",
        url: "https://devto-74b4e-default-rtdb.firebaseio.com/users/.json",
        success: (response) => {
            dbUsers = response;
        },
        error: (error) => {
            console.log(error)
        },
        async: false
    });
    return dbUsers
}

const getUser = (userId) => {
    let newUser = {};
    let users = getUsers();
    for (key in users) {
      if (users[key].userId == userId) {
        newUser["userName"] = users[key].userName;
        newUser["photo"] = users[key].photo;
        newUser["userId"] = users[key].userId;
      }
    }
    return newUser
}

const getRepliesByPost = (postId) => {
    let allReplies = Object.values(getReplies())
    let newArrayFilter = allReplies.filter( item => {
      return item.postId == postId
    })
    let tamaño = newArrayFilter.length
    console.log(tamaño);
    return newArrayFilter
}

const printPosts = (postsArray) => {
    postsArray.forEach((post, index) => {
        $( document ).ready(function() {
            $("#likes").text(`${post.data.reactions}`);
        });

      let userInfo = getUser(post.data.userId);
      let countReplice = getRepliesByPost(post.data.postId).length;
      let userContainerId = Date.now();
      let imgPost = "";
      if ((index + 1)  == postsArray.length){
          imgPost = `<a href="article.html?postkey=${post.id}"><img src="${post.data.coverUrl}" class="card-img-top" alt="..."></a>`
      }
      
      $("#posts-wrapper").prepend(
        ` 
        <a href="article.html?postkey=${post.id}">  
            <div class="card my-card-article mt-0 mb-sm-1 mb-lg-3">
                ${imgPost}
                
                <div class="avatar-post p-3 d-flex">
                    <a href=""><img class="rounded-circle border jb-img-avatar" src="${userInfo.photo}" alt="profile"></a>
                    <a href="" class="text-avatar-post ">
                        <p class="f-14 mb-0">${userInfo.userName}</p>
                        <p class="f-12">${post.data.creationDate}</p>
                    </a>
                </div>
                
                <a href="article.html?postkey=${post.id}">
                <h3 class="title-articleFull font-weight-bold title">${post.data.title}</h3>
                </a>
                
                <div class="mention-article mt-2 mb-2">
                    <a class="yellow p-1 rounded" href="">#webdev</a>
                    <a class="ml-1 blue mr-1 p-1 rounded" href="">#career</a>
                    <a class="green p-1 rounded" href="">#beginners</a>
                </div>
                <div class="d-flex likes inside-article justify-content-between m-2 p-0">
                    <div class="d-inline-flex align-items-center">
                        <a class="d-flex likes-hover align-items-end" href="">
                            <svg class="crayons-icon mb-1" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg"><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                            <h4 class="ml-1 mr-1" id="#likes">${post.data.reactions}</h4>
                            <h3 class="mr-2">reactions</h3>
                        </a>
                        <a class="d-flex likes-hover align-items-end" href="">
                            <svg class="crayons-icon mb-1" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                            <h4 class="ml-1 mr-1" id="cant-replies"> ${countReplice} </h4>
                            <h3 class="mr-2">comments</h3>
                        </a>
                    </div>
                    <a class="d-flex align-items-baseline" href="">
                        <h5 class="">2 min read</h5>
                        <button class="button rounded ml-2">Save</button>
                    </a>
                </div>
            </div> 
        </a>
        `
      );
      

    });
    
  };
  printPosts(getPosts());


/* ********SEARCH BAR*********** */

$(document).ready(function(){
    $('#search-bar').keyup(function(){
       var titles = $('.title');
       //donde guardo lo escrito en el input
       var buscando = $(this).val();
       var titlesToArray = titles.toArray()
       
       titlesToArray.forEach( (title) => {
           // Es el tamaño del texto dentro de mi h3
           //console.log(title.textContent.toLowerCase().length);
           // Es el tamaño del texto dentro de mi imput
           //console.log(buscando.toLowerCase().length);
           
            if (title.textContent.toLowerCase() == buscando.toLowerCase() || title.textContent.toLowerCase().indexOf(buscando)>= 0){
                $(title).parents('.my-card-article').show(); 
                }else{
                    $(title).parents('.my-card-article').hide();   
            }
       })
    });
});








/* $('#search-bar').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        console.log('Aqui toy');
        $(location).attr("href", "../views/search.html");
    }
    event.stopPropagation();
}); */

const goSearch = (event) => {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        console.log('Aqui toy');
        $(location).attr("href", "../views/search.html");
    }
    event.stopPropagation();
}
$('#search-bar').keypress(goSearch)


const goHome = () => {
    $(location).attr("href", "/index.html")
}
$("#btn-home").click(goHome)

const goAddPost = () => {
    $(location).attr("href", "/views/addPost.html")
}
$("#go-write-post").click(goAddPost)
