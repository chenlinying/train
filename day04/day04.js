(function ($) {
  $.bulletScreen = {
    timers: [],
    add: function (val, container) {
      var odiv = $("<div class='bullet'></div>");
      odiv.html(val);
      odiv.css({
        position: 'absolute',
        fontSize: Math.random() * 20 + 10 + 'px',
        display: 'block',
        whiteSpace: 'nowrap'
      });
      var r = Math.floor(Math.random() * 254);
      var g = Math.floor(Math.random() * 254);
      var b = Math.floor(Math.random() * 254);
      odiv.css({
        color: "rgb(" + r + "," + g + "," + b + ")",
        top: (Math.floor(Math.random() * container.height()) - 24) + "px",
        width: odiv.width(),
        right: 0
      });
      container.append(odiv);
      this.move(odiv, container);
    },
    send: function (val, container) {
      this.add(val, container);
    },
    move: function (odiv, container) {
      var i = 0;
      var speed = Math.floor(Math.random() * 5) + 1;
      var timer = setInterval(function () {
        odiv.css({
          right: (i += speed) + "px"
        });
        if ((odiv.offset().left + odiv.width()) < container.offset().left) {
          odiv.remove();
          clearInterval(timer)
        }
      }, 20);
      this.timers.push(timer);
    },
    clear: function (container) {
      for (var i = 0; i < this.timers.length; i++) {
        clearInterval(this.timers[i])
      }
      container.find('.bullet').remove();
    }
  }
})(jQuery);