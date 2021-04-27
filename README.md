# DesafioFrontEnd


const saveNewReplie = () => {
  let inputComent = $('#coment').val()
  
  $.ajax({
    method: "POST",
    url: "https://devto-74b4e-default-rtdb.firebaseio.com/replies/.json",
    data: JSON.stringify({
      postId: Date.now(),
      userId: 1,
      content: inputComent,
      creationDate: moment().format("l"),
      creationTime: moment().format("LT")
    }),
    success: (response) => {
      console.log(response);
      $(`#coment`)[0].reset();
      alert("Nuevo Post Añadido")
    },
    error: (error) => {
      console.log(error);
    },
  });
  
};

$('#btn-save-replie').click(saveNewReplie)