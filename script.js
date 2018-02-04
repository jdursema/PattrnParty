const changeTab = (event) => {
  $('.selected').removeClass('selected')
  $(event.target).addClass('selected')
  $('.card').addClass('hidden')
  $(`.card-${$(event.target).attr('id')}`).removeClass('hidden')

}

$('h4').on('click', changeTab)