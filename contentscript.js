$(document).ready( function(){
  $('a.comments').each( function(index, el){
    $(el).attr('target', '_blank');
  });
});
