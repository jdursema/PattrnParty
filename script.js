const changeTab = (event) => {
  $('.selected').removeClass('selected')
  $(event.target).addClass('selected')
  $('.card-info').addClass('hidden')
  $(`.card-${$(event.target).attr('id')}`).removeClass('hidden')
}

const openCard = (event) => {
$(event.target).next().slideToggle('.hidden')
$(event.target).children('div').toggleClass('open')
}

const toggleCode = () => {
  
  let sectionId= $(event.target).attr('id')
  $(`#${sectionId}-code`).toggleClass('hidden')

  if ($(event.target).text() === 'View Code'){
    $(event.target).text('Hide Code')
  } else{
    $(event.target).text('View Code')
  }
}

const toggleOpenMenu = () => {

  $('.all-links').slideToggle('.open-menu')
}



$('.desktop-tab').on('click', changeTab)
$('.mobile').on('click', openCard)
$('.view-code-btn').on('click', toggleCode)
$('.menu-title').on('click', toggleOpenMenu)
