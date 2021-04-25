// endpoint 
//https://devto-74b4e-default-rtdb.firebaseio.com/.json

let posts = {
    post1: {
        postId: 1,
        userId: 1,
        title: "Iconic developers | part 4 🤷‍♀️🐙🤑",
        content: "When we think about Finances, what comes to our mind are the earnings and the spendings. We aim to maximize our earnings and minimize irrational spending. But, to effectively change our spending pattern, we need to track it first. With this Finance Tracking template, you’ll not only be able to keep track of exactly where each penny has been spent but also how much percentage of total funds it makes up for",
        creationDate: "14/01/2010",
        reactions: 300,
        coverUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--ShEnuR1V--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lje8slw7lz8btjpx1pm0.png"
    },
    post2: {
        postId: 2,
        userId: 2,
        title: "Reflecting on my 1st month blogging; a retrospect 💭",
        content: "Oh boy, this one is frustrating! Let me tell you something: I don't lose sleep over this, but if anything, I'd love to hear from others how they feel about my blogs. I personally value comments more than likes. I like to engage in intellectual conversations and discussions whenever possible, but truth is, most people have an easier time dropping likes and moving on with their lives. Totally acceptable, though it leaves me wondering how they really feel about my post.",
        creationDate: "11/08/2020",
        reactions: 100,
        coverUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--4c0eplTv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gclqreati3py9u3ic7r5.jpg"
    }
};

let replies = {
    reply1: {
        userId: 1,
        postId: 1,
        content: "Excelente post!!!",
        creationDate: "11/08/2020"
    },
    reply2: {
        userId: 2,
        postId: 2,
        content: "Excelente post!!!",
        creationDate: "11/08/2020"
    }
}

let users = {
    user1: {
        userId: 1,
        userName: "Mariana Limon",
        photo: "https://media-exp1.licdn.com/dms/image/C4D03AQGSNcVVaq8lMw/profile-displayphoto-shrink_100_100/0/1517226943932?e=1624492800&v=beta&t=uzLCWSw4HqSxxxcCOtoIGAKNDTdptElyvzV9oiW6EFM"
    },
    user2: {
        userId: 2,
        userName: "Israel Salinas",
        photo: "https://media-exp1.licdn.com/dms/image/C4E03AQEKN_uf1kAPMw/profile-displayphoto-shrink_400_400/0/1550176229405?e=1624492800&v=beta&t=Qpn2WK0DUkdBFCBChATyL1rxtDKGm_dwPoLNLww37yA"
    }
}

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

const getUserLogin = () => {
    let newUser = {};
    let users = getUsers();
    for (key in users) {
      if (users[key].login == "1") {
        newUser["userName"] = users[key].userName;
        newUser["photo"] = users[key].photo;
        newUser["userId"] = users[key].userId;
        newUser["key"] = key;
      }
    }
    $("#change-user option[value=" + newUser.key + "]").attr("selected", true);
    return newUser;
};  

const printPosts = (postsArray) => {
    postsArray.forEach((post, index) => {
      //clean posts wrapper
      //$('#posts-wrapper .card').remove();
      let userContainerId = Date.now();
      $("#posts-wrapper").prepend(
        `   
        <div class="card my-card-article mt-0 mb-sm-1 mb-lg-3" >
                        <a href="article.html">
                            <img src="${post.data.coverUrl}" class="card-img-top" alt="...">
                        </a>
                        <div class="avatar-post p-3 d-flex">
                            <a href=""><img class="rounded-circle border jb-img-avatar" src="${post.data.coverUrl}" alt="antdp425 profile" loading="lazy"></a>
                            <a href="" class="text-avatar-post ">
                                <p class="f-14 mb-0">Renaissance Engineer</p>
                                <p class="f-12">${post.data.creationDate}</p>
                            </a>
                        </div>
                        <div class="">
                            <a href="article.html">
                                <h3 class="title-articleFull font-weight-bold">
                                ${post.data.title}                                
                                </h3>
                            </a>
                        </div>
                        <div class="mention-article mt-2 mb-2">
                            <a class="yellow p-1 rounded" href="">#webdev</a>
                            <a class="ml-1 blue mr-1 p-1 rounded" href="">#career</a>
                            <a class="green p-1 rounded" href="">#beginners</a>
                        </div>
                        <div class="d-flex likes inside-article justify-content-between m-2 p-0">
                            <div class="d-inline-flex align-items-center">
                                <a class="d-flex likes-hover align-items-end" href="">
                                    <svg class="crayons-icon mb-1" width="24px" height="24px"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z">
                                        </path>
                                    </svg>
                                    <h4 class="ml-1 mr-1">200 </h4>
                                    <h3 class="mr-2">reactions</h3>
                                </a>
                                <a class="d-flex likes-hover align-items-end" href="">
                                    <svg class="crayons-icon mb-1" width="24px" height="24px"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                                        </path>
                                    </svg>
                                    <h4 class="ml-1 mr-1">10 </h4>
                                    <h3 class="mr-2">comments</h3>
                                </a>
                            </div>
                            <a class="d-flex align-items-baseline" href="">
                                <h5 class="">2 min read</h5>
                                <button class="button rounded ml-2">Save</button>
                            </a>
                        </div>
                    </div> 
        `
      );
      //-----let repliesObject = printReplies(post.data.postId);
      //print user
      //-----let userinfo = printUser(post.data.userId);
      //-----$(`#${userContainerId}`).append(userinfo);
    });
  };
  printPosts(getPosts());

const goAddUser = () => {
    $(location).attr("href", "/views/addPost.html")
}

$("#go-write-post").click(goAddUser)
