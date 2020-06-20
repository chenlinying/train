$(function () {
  var num = 1;
  var timer;
  var hasStarted = false;
  function showpic(index) {
    $(".pic li").eq(index).show().siblings().hide();
    $(".dot li").eq(index).css("background", "red").siblings().css("background", "#fff");
  }
  $(".dot li").hover(function () {
    stop();
    num = $(this).index();
    $(".pic li").eq(num).show().siblings().hide();
    $(this).css("background", "red").siblings().css("background", "#fff");
  }, start);
  $(".pic li").each(function (index) {
    $(this).hover(function () {
      stop();
      show(index);
      num = index + 1;
    }, start)
  });
  function start() {
    if (!hasStarted) {
      hasStarted = true;
      timer = setInterval(function () {
        showpic(num);
        num++;
        if (num == $(".pic li").length) {
          num = 0;
        }
      }, 2000);
    }
  }
  function stop() {
    clearInterval(timer);
    hasStarted = false;
  }
  start();

  function news() {
    axios.get('https://www.fastmock.site/mock/16ac5ba21329afe492f109def26787eb/tail/index/new')
      .then(function (res) {
        var i;
        var j;
        var item;
        strhtml = "";
        for (i = 0; i < res.data.length; ++i) {
          item = res.data[i];
          console.log('item', item);
          strhtml += "<li><img src=" + item.src + " alt=''><p><a href=" + item.href + ">" + item.text + "</a></p></li>";
          $('.pul').html(strhtml);
        }

      })
      .catch(function (e) {
        console.log('e', e);
      });

  };

  news();
});
