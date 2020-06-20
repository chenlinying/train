$(document).ready(function () {


  function showPage() {
    var url = window.location.href;
    href = url.split('=')[1];
    console.log(href);
    page = href[0];
    id = href[1];
    console.log(page);
    console.log(id);


    axios.get('https://www.fastmock.site/mock/16ac5ba21329afe492f109def26787eb/tail/page' + page + '/id=' + id)
      .then(function (res) {

        var i;
        var j;
        var item;
        strhtml = "";
        for (i = 0; i < res.data.length; ++i) {
          item = res.data[i];
          console.log('item', item);
          j = i + 1;
          $('.header-botton').html("<span>" + item.title + "</span>");

          strhtml += "<div class='space'><img class='card-img-top' src=" + item.src + " alt='' style='width:100%'><div class='text'>" + item.text + "</div></div>"
          $('.container').html(strhtml);
        }

      })
      .catch(function (e) {
        console.log('e', e);
      });

  }

  showPage();


})