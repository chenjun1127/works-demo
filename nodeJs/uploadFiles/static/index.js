(function() {
  'use strict';

  var file = document.querySelector('#file');
  var upload = document.querySelector('#upload');
  var progress = document.querySelector('#progress');
  var image = document.querySelector('#image');
  var xhr = new XMLHttpRequest();

  upload.addEventListener('click', uploadFile, false);
  file.addEventListener('change', previewImage, false);

  // 点击上传
  function uploadFile(event) {
    var formData = new FormData();
    formData.append('test-upload', file.files[0]);
    xhr.onload = uploadSuccess;
    xhr.upload.onprogress = setProgress;
    xhr.open('post', '/upload', true);
    xhr.send(formData);
  }

  // 成功上传
  function uploadSuccess(event) {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);
    }
  }

  // 进度条
  function setProgress(event) {
    if (event.lengthComputable) {
      var complete = Number.parseInt(event.loaded / event.total * 100);
      progress.innerHTML = complete + '%';
    }
  }

  // 图片预览
  function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function(event) {
      image.src = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
})();