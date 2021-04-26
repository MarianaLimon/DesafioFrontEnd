let urlParams = new URLSearchParams(window.location.search);
let postKey = urlParams.get("postkey");

console.log(postKey);

const getPost = (key) => {
  let dbPosts = [];
  $.ajax({
    method: "GET",
    url: `https://devto-74b4e-default-rtdb.firebaseio.com/posts/${key}.json`,
    success: (response) => {
      //console.log(response);
      dbPosts = response;
      /* for (key in response) {
        dbPosts.push({ id: key, data: response[key] });
      } */
    },
    error: (error) => {
      console.log(error);
    },
    async: false,
  });

  //console.log("getPost", dbPosts);
  return dbPosts;
};
//console.log(getPost(postKey));


/*get Replies*/
const getReplies = () => {
    let dbReplies;
    $.ajax({
      method: "GET",
      url: "https://devto-74b4e-default-rtdb.firebaseio.com/replies/.json",
      success: (response) => {
        //console.log(response)
        dbReplies = response;
      },
      error: (error) => {
        console.log(error);
      },
      async: false,
    });
  
    // console.log( d bData )
    return dbReplies;
  };
  
  /*get Users*/
  const getUsers = () => {
    let dbUsers;
    $.ajax({
      method: "GET",
      url: "https://devto-74b4e-default-rtdb.firebaseio.com/users/.json",
      success: (response) => {
        //console.log(response);
        dbUsers = response;
      },
      error: (error) => {
        console.log(error);
      },
      async: false,
    });
  
    // console.log( d bData )
    return dbUsers;
  };
  
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
  
    return newUser;
  };
  //let otherData = getUsers()
  //console.log( otherData )
  
  const printUser = (userId) => {
    let user = getUser(userId);
    //console.log(user.avatar);
    return `<div class="autor">
    <img src="${user.photo}" alt=""> 
    <span class="comment-autor text-blue"><small>&nbsp ${user.userName}</small></span>
    </div>`;
  };
  
  const printReplies = (postId) => {
    $(`#replies-wrapper li`).remove();
    let replies = getReplies();
    let copy = { ...replies };
  
    for (key in replies) {
      if (replies[key].post === postId) {
        //let user = getUser(replies[key].userId);
        //console.log(user.avatar);
        // console.log("traeusercomment", user);
        let h3Id = Date.now();
  
        let liHTML = `<li class="list-group-item">
                                  <div class="reply-box">
                                      <h3 id="${h3Id}"></h3>
                                      
                                      <p class="mb-0 text-muted comment-text">${replies[key].content}</p>
                                      <p class="mb-0 text-right text-muted comment-date">
                                          <span class="date">${replies[key].creationDate}</span> 
                                          <span class="time">${replies[key].creationTime}</span>   
                                      </p>
                                  </div>
                              </li>
                          `;
        // console.log(ulHtml)
        /*
        let ulHTML = document.createElement("ul");
        ulHTML.classList = "list-group bg-white border rounded m-2";
  
        $(ulHTML).append(liHTML);*/
  
        let repWrapp = `#replies-wrapper`;
  
        $(repWrapp).prepend(liHTML);
        //////////////////////////////////////////////
        //print user
        let userinfo = printUser(replies[key].userId);
        $(`#${h3Id}`).append(userinfo);
      }
    }
  };
  
  
  
  const printInnerPost = (data) => {
    let {content, coverUrl, creationDate, creationTime, postId, title, userId} = data;
    //console.log(data.content);
    let user = getUser(userId);
      
    $("#posts-wrapper").append(
      `
      <img class="card-img-top" alt="..." src="${data.coverUrl}">
                      
          <div class="div-title-articleFull-2 px-3 px-md-5 border-bottom">
              <h1 class="title-articleFull-2">
              ${data.title}        
              </h1>
              <div class="mention-article-2 mt-2 mb-2">
                  <a class="btn-mention-article bg-yellow" href="">#javascript</a>
                  <a class="btn-mention-article bg-green" href="">#codenewble</a>
                  <a class="btn-mention-article bg-blanco" href="">#programing</a>
              </div>
              <div class="text-avatar-comment d-flex align-items-center avatar-post-comment py-3">
                  <a href=""><img class="rounded-circle border jb-img-avatar" src="${user.photo}" alt="antdp425 profile" loading="lazy"></a>
                      <a href="" class="avatar-post-comment align-items-center d-flex">
                      <p class="f-14 mb-0 mr-2"><b>${user.userName}</b></p>
                      <p class="f-12">18 hours ago</p>
                  </a> 
              </div>
              <div class="text-article">
                  <p>${data.content}</p>
              </div>
        </div>

        <div class="discussion mt-lg-4">
            <div class="d-flex justify-content-between py-3">
                <h3>Discussion</h3>
                <button class="btn-discussion">Subscribe</button>
            </div>
            <div class="add-discussion d-flex">
                <img src="${user.photo}" alt="">
                <div class="textarea-box">
                    <textarea placeholder="Add to the discussion" name="newdiscussion" id="" cols="30" rows="10"></textarea>
                    <div class="textarea-aux flex-direction-row justify-between">
                        <div class="d-flex flex-direction-row">
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ag651x3gkg0pkck5k4b8klsu90vggqh4" class="icon"><title id="ag651x3gkg0pkck5k4b8klsu90vggqh4">Image</title>
                                <path d="M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z"></path>
                            </svg>
                            <span class="">Upload image</span>
                        </button>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="afqfyaj0w8uzfho51gbkbtu8enet2xrk" class="icon"><title id="afqfyaj0w8uzfho51gbkbtu8enet2xrk">Templates</title>
                            <path d="M3 18.5V5a3 3 0 013-3h14a1 1 0 011 1v18a1 1 0 01-1 1H6.5A3.5 3.5 0 013 18.5zM19 20v-3H6.5a1.5 1.5 0 100 3H19zM10 4H6a1 1 0 00-1 1v10.337A3.485 3.485 0 016.5 15H19V4h-2v8l-3.5-2-3.5 2V4z"></path></svg>
                            <span class="">Templates</span>
                        </button>
                        </div>
                        <div class="">
                            <a href="/p/editor_guide" class="info">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-labelledby="aohfza5bd273n7mh5hzgikp4tqve1xy9" class="icon"><title id="aohfza5bd273n7mh5hzgikp4tqve1xy9">Editor guide</title>
                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="textarea-buttons">
                <button class="submit" type="button">Submit</button>
                <button class="preview" type="button">Preview</button>
            </div>
        </div>

        <div class="discussion py-3" id="wrapper-replies">
            <div class="add-discussion d-flex">
                <img src="${user.photo}" alt="">
                <div class="textarea-box px-2 py-1">
                    <p class="f-14 mb-2 mr-2">${user.userName} <span>•</span> <span class="f-12">${data.creationDate}</span></p>
                    <p class="f-14 m-2">${content}</p>
                </div>
            </div>
        </div>

        <div class="discussion">
            <nav>
                <a href="">Code of Conduct</a>
                <span>•</span>
                <a href="">Report abuse</a>
            </nav>
        </div>
        `   
      )
  };
  printInnerPost(getPost(postKey));
  
  
  const activeComment = (event) => {
    let comment = $(event.target).val().trim();
    let lengthComment = comment.length;
    //console.log(lengthComment);
    lengthComment >= 3 && comment != ""
      ? $(event.target).next("button").attr("disabled", false)
      : $(event.target).next("button").attr("disabled", true);
  };
  
  const saveReplie = (event) => {
    let postId = $(event.target).data("commentkey");
    let comment = $(`.reply-comment form div input`).val();
    //let message = `<div class="error-comment">Ingresa un comentario<div>`;
    //$(`#replies-wrapper-${postId}`).append(message);
    //console.log(moment().format("LT"));
  
    $.ajax({
      method: "POST",
      url: "https://devto-74b4e-default-rtdb.firebaseio.com/replies/.json",
      data: JSON.stringify({
        content: comment,
        creationDate: moment().format("l"),
        creationTime: moment().format("LT"),
        post: postId,
        userId: 3,
      }),
      success: (response) => {
        console.log(response);
        printReplies(postId);
        $(`.reply-comment form`)[0].reset();
      },
      error: (error) => {
        console.log(error);
      },
    });
  };
  
  $(".comment-input").keyup(activeComment);

  $(".btn-save-replie").click(saveReplie);

  
  const goHome = () => {
      $(location).attr("href", "/index.html")
  }
  $("#btn-home").click(goHome)
  
  const goAddPost = () => {
      $(location).attr("href", "/views/addPost.html")
  }
  $("#go-write-post").click(goAddPost)
  
