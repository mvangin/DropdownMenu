const MenuDropAllItems = (() => {


    function menuDrop(navDropTitles) {

        navDropTitles.forEach((menuItem) => {
            menuItem.addEventListener("click", () => {
                menuItem.nextElementSibling.classList.toggle("active");
            });
        });

        window.addEventListener("click",removeOldMenuDrops);

        function removeOldMenuDrops(e) {
            navDropTitles.forEach((item) => {
                if (e.target !== item) {
                    item.nextElementSibling.classList.remove('active');
                }
            })
        }
    }

    return { menuDrop };

})();

export default MenuDropAllItems;