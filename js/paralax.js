var MenuItems = document.getElementById("MenuItems");
function menutoggle(){
    if(MenuItems.style.maxWidth=="0px")
        {
            MenuItems.style.maxWidth="90vw";
            MenuItems.style.opacity="1";
        }
    else
        {
            MenuItems.style.maxWidth="0px";
            MenuItems.style.opacity="0";

        }          
}

    



    const parallax = document.getElementById("parallax");

    window.addEventListener("scroll", function()
    {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * .3 + "px";
    })


    const parallax_1 = document.getElementById("parallax_1");
    window.addEventListener("scroll", function()
    {
        let offset = window.pageYOffset;
        parallax_1.style.backgroundPositionY = offset * .3 + "px";
    })

    const parallax_2 = document.getElementById("parallax_2");
    window.addEventListener("scroll", function()
    {
        let offset = window.pageYOffset;
        parallax_2.style.backgroundPositionY = offset * .3 + "px";
    })

    const parallax_3 = document.getElementById("parallax_3");
    window.addEventListener("scroll", function()
    {
        let offset = window.pageYOffset;
        parallax_3.style.backgroundPositionY = offset * .3 + "px";
    })

    const parallax_4 = document.getElementById("parallax_4");
    window.addEventListener("scroll", function()
    {
        let offset = window.pageYOffset;
        parallax_4.style.backgroundPositionY = offset * .3 + "px";
    })
