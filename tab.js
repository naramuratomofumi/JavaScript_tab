(()=>{

  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');

  // 初期化
  const init = () => {
    $content[0].style.display = 'block';
  };
  init()

})();