document.addEventListener('DOMContentLoaded', function () {
    //sidebar
    const toggleSidebarButton = document.getElementById('nav_toggle');
    const sidebar = document.getElementById('navbar');
    const showSidebarButton = document.getElementById('show_sidebar_button');

    toggleSidebarButton.addEventListener('click', function () {
        sidebar.style.display = 'none';
        toggleSidebarButton.style.display = 'none';
        showSidebarButton.style.display = 'block';
    });

    showSidebarButton.addEventListener('click', function () {
        sidebar.style.display = 'block';
        toggleSidebarButton.style.display = 'block';
        showSidebarButton.style.display = 'none';
    });

    //Menu
    const parentItems = document.querySelectorAll('.nav_list > li');

    parentItems.forEach(parentItem => {
        const subMenu = parentItem.querySelector('.sub_menu');
        //Hiển thị ở lượt bấm đầu tiên và sau đó phải duyệt qua sự kiện stop khi bấm vào sub
        parentItem.addEventListener('click', function (event) {
            if (subMenu){//!=null 
                
                if (subMenu.style.display === 'none') {
                    subMenu.style.display = 'block';
                } else {
                    subMenu.style.display = 'none';
                }
                subMenu.addEventListener('click', function (event) {
                event.stopPropagation(); // Ngăn chặn sự kiện click từ lan ra các phần tử cha khi bấm vào các phần tử của submenu
                });
            }
        });
    });

    //Sự kiện tham quan
    const subMenuItems = document.querySelectorAll('.sub_menu li');
    const imageContainer = document.getElementById('image-container'); //khai báo toàn cục
    const navbar = document.getElementById('navbar');
    
    subMenuItems.forEach(subMenuItem => {
        subMenuItem.addEventListener('click', function() {
            const imageName = this.getAttribute('data-image');
            const imageSrc = imageName;
            const capturedImage = document.getElementById('image-container').querySelector('img');
            // Hiển thị ảnh tương ứng trong imageContainer
            capturedImage.src = imageSrc;
            imageContainer.style.display = 'block';
        });
        });


        //Sự kiện quay lại
        const backBtn = document.getElementById('backButton');
        backBtn.addEventListener('click', function() {

        imageContainer.style.display = 'none';

    });
    

    
});
