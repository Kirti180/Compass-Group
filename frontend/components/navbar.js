function navbar(){
    return`<nav>
    <i class="fa-solid fa-bars" id="hamburger"></i>
    <div id="nav_right_side">
        <div id="brand_name"><a href="./index.html" class="indexstyle1" style="color:white; font-size: 30px; font-weight: 800; font-family: Alex Brush;">Compass Group</a> </div>
        <!-- <input type="text" placeholder="Search here" > -->
    </div>
    <div id="nav_left_side">

        <div style="text-decoration: none;"><span><a class="indexstyle" href="3l" style="color:white; text-decoration: none;">Espanol</a></span></div>

        <div style="text-decoration: none;"><span><a href="#" class="indexstyle" style="color:white; text-decoration: none;">List your property</a> </span></div>
        <div style="text-decoration: none;"><span><a href="#" class="indexstyle" style="color:white; text-decoration: none;">Support</a> </span></div>
        <div> <span><a href="#" class="indexstyle" style="color:white; text-decoration: none;">Trips</a> </span></div>
        <div style="text-decoration: none;"><span><a href="./register.html" class="indexstyle" style="color:white; text-decoration: none;">Sign in</a> </span></div>
        <!-- <div><i class="fa-solid fa-cart-shopping "></i><span><a href="./cartpage.html" class="indexstyle">Support</a> </span></div> -->
    </div>
</nav>


<div id="burger" >
    <div  class="burger_inside">Espanol/</div>
    <div  class="burger_inside">List your property</div>
    <div  class="burger_inside">Support</div>
    <div  class="burger_inside">Trips</div>
    <div   class="burger_inside"><a href="./register.html" > Sign in</a></div>
</div>`
}
export default navbar