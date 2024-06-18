$(document).ready(function() {
    // Function to fetch menu data from the server
    function fetchMenuData() {
        $.getJSON('/menu', function(menuData) {
            if (menuData && menuData.appetizers) {
                displayMenuItems('#appetizers-menu', menuData.appetizers);
            }
            if (menuData && menuData.mainCourses) {
                displayMenuItems('#main-courses-menu', menuData.mainCourses);
            }
            if (menuData && menuData.desserts) {
                displayMenuItems('#desserts-menu', menuData.desserts);
            }
        });
    }

    // Function to display menu items dynamically
    function displayMenuItems(containerId, items) {
        var $container = $(containerId);
        $container.empty(); // Clear previous items

        items.forEach(function(item) {
            var $menuItem = $('<div class="menu-item" data-name="' + item.name + '" data-price="' + item.price + '"></div>');
            $menuItem.append('<h3>' + item.name + '</h3>');
            $menuItem.append('<p>' + item.description + '</p>');
            $container.append($menuItem);

            // Hover effect - show info box
            $menuItem.hover(
                function() {
                    var $infoBox = $('<div class="info-box"><p>' + item.name + ' - ' + item.price + '</p></div>');
                    $(this).append($infoBox);
                },
                function() {
                    $(this).find('.info-box').remove();
                }
            );
        });
    }

    // Initial fetch of menu data
    fetchMenuData();
});
