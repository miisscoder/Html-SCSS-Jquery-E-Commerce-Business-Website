
// 上传图像
$('.btn-upload input[type="file"]').change(function (event) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
        const html = '<a href="javascript:;" class="item-image">' +
            '<img class="image" src ="' + event.target.result + '" />' +
            '<img class="delete" src="image/delete-circle.png" />' +
            '</a>';
        $('.btns').append(html);
    };
    reader.readAsDataURL(selectedFile);
});

$('body').on('click', '.item-image img.delete', function () {
    $(this).parent('.item-image').remove();
});