const changeTab = (event) => {
  $('.selected').removeClass('selected')
  $(event.target).addClass('selected')
  $('.card').addClass('hidden')
  $(`.card-${$(event.target).attr('id')}`).removeClass('hidden')
}

const openCard = (event) => {
$(event.target).next().slideToggle('.mobile-hidden')
}

$('.desktop-tab').on('click', changeTab)
$('.mobile').on('click', openCard)
