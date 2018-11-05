const init = require('./widget/control-panel/index.js');
$(function() {
  const nunjucks = require('nunjucks');
  const tpl = `<div class="w-control-content bottom" style="display:none">
<div class="w-control-ul">
  {% for item in NETWORKS%} {% set req = item.___req %} {% set res = item.___res %}
    <div class="w-control-li">
      <div class="w-control-title">请求地址: {{req.url}}</div>
      <div class="w-control-content json-editor" style="display:none">
        <div>请求方法: {{req.method}}</div>
        <div>请求参数: {{req.params | stringify}}</div>
        <div>
          <h4>请求头</h4>
          <div class="w-control-jsonmate" data-json="{{req.headers | stringify}}"></div>
        </div>
        <div>
          <h4>返回内容</h4>
          <div class="w-control-jsonmate" data-json="{{res | stringify}}"></div>
        </div>
      </div>
    </div>
  {% endfor%}
</div>
</div>
<div class="w-control-panel">控制台</div>`;

  const str = nunjucks.renderString(tpl, window.__NETWORKS);
  const jsonViewContainer = document.createElement('div');
  jsonViewContainer.innerHTML = str;

  init();
});
