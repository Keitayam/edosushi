window.addEventListener('DOMContentLoaded', function () {

  var header= document.querySelector('.header');
  var headerToggle= document.querySelector('.sp_header_toggle');
  var headerToggleClose = document.querySelectorAll('.js_header_close');
  var headerNav = document.querySelector('.sp_header_nav');
  
   //背景固定
   function backfaceFixed(fixed) {
      /**
       * 表示されているスクロールバーとの差分を計測し、背面固定時はその差分body要素に余白を生成する
       */
      const scrollbarWidth = window.innerWidth - document.body.clientWidth;
      document.body.style.paddingRight = fixed ? `${scrollbarWidth}px` : '';

      /**
       * スクロール位置を取得する要素を出力する(`html`or`body`)
       */
      const scrollingElement = () => {
          const browser = window.navigator.userAgent.toLowerCase();
          if ('scrollingElement' in document) return document.scrollingElement;
          if (browser.indexOf('webkit') > 0) return document.body;
          return document.documentElement;
      };

      /**
       * 変数にスクロール量を格納
       */
      const scrollY = fixed
          ? scrollingElement().scrollTop
          : parseInt(document.body.style.top || '0');

      /**
       * CSSで背面を固定
       */
      const styles = {
          height: '100vh',
          left: '0',
          overflow: 'hidden',
          position: 'fixed',
          top: `${scrollY * -1}px`,
          width: '100vw',
      };

      Object.keys(styles).forEach((key) => {
          document.body.style[key] = fixed ? styles[key] : '';
      });

      /**
       * 背面固定解除時に元の位置にスクロールする
       */
      if (!fixed) window.scrollTo(0, scrollY * -1);
  };

//ハンバーガーメニューを開いたとき
  headerToggle.addEventListener('click',function(){
      headerNav.classList.toggle('is-active');
      header.classList.toggle('is-active');
      backfaceFixed(true);
  })
//ハンバーガーメニューを閉じたとき
  headerToggleClose.forEach(element =>{
      element.addEventListener('click',function(){
          headerNav.classList.toggle('is-active');
          header.classList.toggle('is-active');
          backfaceFixed(false);
      })
  })

})
