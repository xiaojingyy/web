window.addEventListener('load', function () {
      //1:获取元素
      var left = this.document.querySelector('.left');
      var right = this.document.querySelector('.right');
      var promo = this.document.querySelector('.promo');
      //2:鼠标经过焦点图就显示隐藏的按钮,离开就隐藏
      promo.addEventListener('mouseenter', function () {
            left.style.display = 'block';
            right.style.display = 'block';
      })
      promo.addEventListener('mouseleave', function () {
            left.style.display = 'none';
            right.style.display = 'none';
      })



})
//轮播图
window.onload = function () {
      var slider = document.getElementById("slider");
      var imgul = document.getElementsByName("yong1")[0];
      var imgli = document.getElementsByName("yong2");
      var img_num = imgli.length;

      // var logul=document.getElementsByName("yy")[0];
      // var logli=document.getElementsByName("yong3");
      // var log_num=logli.length;


      imgul.style.width = (1204 * img_num) + "px";
      var n = 0;
      setInterval(function () {
            imgul.style.left = -(1204 * n) + "px";
            n++;
            if (n > img_num - 1) { n = 0; }
      }, 2000);



      var sp = document.querySelectorAll("#slider #d2 ul li");
      for (let i = 0; i < img_num; i++) {
            sp[i].idx = i;
            sp[i].onclick = function () {
                  imgul.style.left = -(1204 * this.idx) + "px";
            };
      }

      var prev = document.getElementById("prev");
      var index = 0;
      prev.onclick = function () {
            index--;
            if (index < 0) {
                  index = img_num - 1;
            }
            imgul.style.left = -(1204 * index) + "px";

      }
      var next = document.getElementById("next");
      next.onclick = function () {
            index++;
            if (index > img_num - 1) {
                  index = 0;
            }
            imgul.style.left = -(1204 * index) + "px";
      }
};
//自动更新时间的代码在主页的HTML里面
