const MenuDrop = (() => {


    function menuDrop(navDropTitles) {
        window.addEventListener("click", removeOldMenuDrops)

        navDropTitles.forEach((menuItem) => {
            menuItem.addEventListener("click", (e) => {
                menuItem.nextElementSibling.classList.toggle("active");
            });
        });
    }

    function removeOldMenuDrops(e) {
        navDropTitles.forEach((item) => {
            if (e.target !== item) {
                item.nextElementSibling.classList.remove('active');
            }
        })
    }



})();

export { MenuDrop };