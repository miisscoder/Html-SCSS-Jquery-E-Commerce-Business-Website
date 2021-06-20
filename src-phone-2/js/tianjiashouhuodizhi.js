/// 地址选择

var baseInput = document.getElementById('base');

// 初始化
var baseCity = new LcCity({
  confirm: function (data) {
      console.log(data);
      $('#base input').val(data);
  }
});

// 点击触发
baseInput.addEventListener('click', function(e) {
  baseCity.show(this);
});
