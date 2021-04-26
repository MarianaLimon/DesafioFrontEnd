
const savePosts = () => {
    let inputTitle = $('#title').val()
    let inputContent = $('#content').val()
    let inputImg = $('#coverUrl').val()
    if(inputTitle!="" && inputContent!="" && inputImg!=""){
      $.ajax({
        method: "POST",
        url: "https://devto-74b4e-default-rtdb.firebaseio.com/posts/.json",
        data: JSON.stringify({
          postId: Date.now(),
          userId: 1,
          title: inputTitle,
          content: inputContent,
          creationDate: moment().format("l"),
          creationTime: moment().format("LT"),
          coverUrl: inputImg,
        }),
        success: (response) => {
          console.log(response);
          $(`#addPostForm`)[0].reset();
          alert("Nuevo Post Añadido")
        },
        error: (error) => {
          console.log(error);
        },
      });
    }else{
      alert("Llene los 3 campos antes de enviar")
    }
  };

$('#btnAddPost').click(savePosts)

const goHome = () => {
  $(location).attr("href", "../index.html")
}
$("#btn-home").click(goHome)
$("#btn-back").click(goHome)
