document.addEventListener('DOMContentLoaded', function() {
    // Định nghĩa paths cho từng loại ảnh
    const paths = {
        thuvien: [
            "/360_iframe/thuvien0.jpg",
            "/360_iframe/thuvien1.jpg",
            "/360_iframe/thuvien2.jpg",
            "/360_iframe/thuvien3.jpg"
            // Thêm các đường dẫn ảnh khác vào đây
        ],
        hoitruong: [
            "/360_iframe/hoitruong0.jpg",
            "/360_iframe/hoitruong 1.jpg",
            "/360_iframe/hoitruong2.jpg",
            "/360_iframe/hoitruong3.jpg"
            // Thêm các đường dẫn ảnh khác vào đây
        ]
        // Thêm các loại ảnh khác vào đây
    };

    let currentIndex = 0;
    let currentType = '';

    const subMenuItems = document.querySelectorAll('.sub_menu li');
    const imageContainer = document.getElementById('image-container');
    const backButton = document.getElementById('backButton');
    const prevButton = document.querySelector('.prevButton');
    const nextButton = document.querySelector('.nextButton');
    const imageElement = document.getElementById('image');

    // Hàm hiển thị ảnh
    function showImage(type, index) {
        const imagePath = paths[type][index];
        imageElement.src = imagePath;
        imageContainer.style.display = 'block';
    }

    // Xử lý sự kiện khi click vào submenu item
    subMenuItems.forEach(function(subMenuItem, index) {
        subMenuItem.addEventListener('click', function() {
            currentType = this.getAttribute('data-image');
            currentIndex = 0; // Reset chỉ số index
            showImage(currentType, currentIndex);
        });
    });

    // Xử lý sự kiện khi click vào nút Quay lại
    backButton.addEventListener('click', function() {
        imageContainer.style.display = 'none';
    });

    // Xử lý sự kiện khi click vào nút Prev
    prevButton.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = paths[currentType].length - 1;
        }
        showImage(currentType, currentIndex);
    });

    // Xử lý sự kiện khi click vào nút Next
    nextButton.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= paths[currentType].length) {
            currentIndex = 0;
        }
        showImage(currentType, currentIndex);
    });

});