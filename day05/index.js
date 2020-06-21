$(function () {
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
          strhtml += "<div class='col-lg-3'> <img class='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto ' src=" + item.src + "><h4><a href=" + item.href + ">" + item.text + "</a></h4></div>";
          $('#pul').html(strhtml);
        }

      })
      .catch(function (e) {
        console.log('e', e);
      });

  };

  news();
});
