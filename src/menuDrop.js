const menuDrop = (() => {
    const conflictTitle = document.querySelector(".conflictTitle");
    const researchTitle = document.querySelector(".researchTitle");
    const storeTitle = document.querySelector(".storeTitle");
    
    
    window.addEventListener("click", (e) => {
        if (e.target !== conflictTitle) {
            conflictTitle.nextElementSibling.classList.remove('active')
        }
        if (e.target !== researchTitle) {
            researchTitle.nextElementSibling.classList.remove('active');
        }
        if (e.target !== storeTitle) {
            storeTitle.nextElementSibling.classList.remove('active');
        }
    });

    function menuDrop(menuItem) {
        menuItem.addEventListener("click", (e) => {
            menuItem.nextElementSibling.classList.toggle("active");
        })
    }

    menuDrop(conflictTitle);
    menuDrop(researchTitle);
    menuDrop(storeTitle);

})();

export default {menuDrop};