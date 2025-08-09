$(function() {
  
  // Ex1
  $('.accordion-header').on('click', function(){
    $('.accordion-header').not(this).next().slideUp()
    $(this).next().slideToggle()
  })

  // Ex2
  $('.todos button').on('click', function(){
    $.ajax({
      url: "https://dummyjson.com/todos",
      type: "GET",
      success: function(response){
        const todos = response.todos
        buildTodosList(todos)
      },
      error: function(err){
        console.log(err)
      }
    })
  })
})
// .todos ul
function buildTodosList(arr){
  const list = $('.todos ul')
  let itemHtml = ''
  arr.forEach(el => {
    itemHtml += `<li>${el.todo}</li>`
  })
  list.html(itemHtml)
}
