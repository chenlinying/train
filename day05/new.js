$(document).ready(function () {


  function get(page) {
    axios.get('https://www.fastmock.site/mock/16ac5ba21329afe492f109def26787eb/tail/page=' + page)
      .then(function (res) {
        var i, r;
        var j;
        var item;
        strhtml = "";
        for (i = 0; i < res.data.length; ++i) {
          item = res.data[i];
          console.log('item', item);
          j = i + 1;
          r = String(page) + String(j);
          console.log(r);
          strhtml += " <div class='space'> <div class='card' style='width:400px'><img class='card-img-top' src=" + item.src + " alt='Card image' style='width:100%'><div  class='card-body'><h4 class='card-title'>" + item.title + "</h4><p class='card-text'> 发布日期：" + item.date + "<br>" + item.text + "</p><a href='./detail.html?id=" + r + "'class='btn btn-primary'>See Profile</a></div></div></div>"
          $('.contain').html(strhtml);
        }

      })
      .catch(function (e) {
        console.log('e', e);
      });

  };
  get(1);

  $('.page li').click(function () {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    var page = Number($(this).text());
    get(page);
    $('.page li').removeClass('active');
    $(this).addClass('active');
  });


})