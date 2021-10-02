document.querySelector('.header').innerHTML =
    `<nav class="nav">
<a href="index.html"><img class="header_logo" src="../image/logo.png"></a>
<input type="checkbox" id="burger">
<label class="checkbtn" for="burger"><i id="Burger" class="fas fa-bars burgerbtn"></i></label>
<ul class="nav_lists">
    <i class="fas fa-times closebtn hide--pc"></i>
    <li class="nav_item nav_item--first">
        <a class="nav_link" href="index.html">
            <span class="hide--mb"><i class="fas fa-home icon--lg"></i></span>首頁
            <span class="hide--pc eng">HOME</span>
        </a>
    </li>
    <li class="nav_item">
        <a class="nav_link" href="list.html">
            <span class="hide--mb"><i class="fas fa-utensils icon--lg "></i></span>食指大動
            <span class="hide--pc eng">RESTAURANT LIST</span>
        </a>
    </li>
    <li class="nav_item">
        <a class="nav_link" href="aboutus.html">
            <span class="hide--mb"><i class="fas fa-book icon--lg"></i></span>創作食光
            <span class="hide--pc eng">ABOUT</span>
        </a>
    </li>
    <li class="nav_item">
        <a class="nav_link fast" data-bs-toggle="modal" data-bs-target="#Modal">
            <span class="hide--mb"><i class="fas fa-dice icon--lg"></i></span>食光寶貴
            <span class="hide--pc eng">RANDOM</span>
        </a>
    </li>
</ul>
</nav>`;


document.querySelector('.footer').innerHTML =
    `<div class="footer_link">
<p><a href="list.html">食指大動</a></p>
<p class="vertical_line"><a href="aboutus.html">創作食光</a></p>
<p><a href="cooperation.html">合作小食光</a></p>
</div>
<p><i class="fas fa-envelope icon--md"></i>&nbsp;xxx@gmail.com</p>
<p>Copyright © 2021 A.C.W&nbsp;All Rights Reserved.</p>`;