## βπ» μκΈ°μκ° νμ΄μ§ λ§λ€κΈ°

μ€λμ μ¬μ μ€ν°λ 1μ£Όμ°¨ κ³Όμ μλ μκΈ°μκ° νμ΄μ§ λ§λ€κΈ°μ λν κ²μκΈμ μ¨λ³΄λ € νλ€. μ¬μ€ 1~2λλμ λ¨Όμ  νλ‘ νΈμλ κ°λ°μκ° λκΈ° μν΄μ νΌμ λλ¦λλ‘μ κ³΅λΆλ₯Ό ν΄μλ€κ³  μκ°νλλ°, μ΄λ² κ³Όμ λ₯Ό ν΅ν΄μ μμ§ λ΄κ° ν~~~~~~~~~μ°Έ λΆμ‘±ν λͺ¨μκΉ½μ΄λΌλ κ²μ λκΌλ€.. κ·Έλλ κΈ°μ‘΄μ λ΄κ° μ¬μ©νμλ μ½λλ λλ¦Όμ½λ© ν¬νΈν΄λ¦¬μ€λ₯Ό λ§λ€λ λ°°μ λ μ½λλ€μ μ μ©νκ² νμ©ν  μ μμλ€. 

> [μμ±λ μκΈ° μκ° νμ΄μ§](https://kyeom1997.github.io/wecode_week_1/)

### ποΈ λ μ΄μμ

![](https://images.velog.io/images/hang_kem_0531/post/cb6d6803-fdc0-493a-a50c-099c454e227d/image.png)

λλ΅μ μΈ λ μ΄μμμ μ΄λ κ² μ€μ νμλ€. μ¬μ€ μ¬λ¬ κ°μ νμ΄μ§λ₯Ό μ°κ²°ν΄μ λ§λ€κΉλ μκ°νμ§λ§, μμ§μ λ©ν° νμ΄μ§ μ νλ¦¬μΌμ΄μμΌλ‘ κ΅¬νμ ν  μ λ°μ μκΈ° λλ¬Έμ, μλ μ ν λ±μ ν¨μ¨μ±μ΄ λ¨μ΄μ§λ€κ³  μκ°ν΄μ ν νμ΄μ§μμ navbarλ₯Ό ν΅ν λ²νΌμΌλ‘ μ΄λν  μ μκ² λ μ΄μμμ μ€μ νμλ€.

### β¨ μ¬μ©ν μ½λλ€


**1. Header**

```html
<header>
        <div class="page_logo">
            <i class="fas fa-male"></i>
            <a href="#">Kyeom's Page</a>    
        </div>
        <nav id="navbar">
            <ul class="navbar_menu">
                <li class="navbar_menu_item" data-link="#me">About Me</li>
                <li class="navbar_menu_item" data-link="#skills">Skills</li>
                <li class="navbar_menu_item" data-link="#hobby">Hobby</li>
                <li class="navbar_menu_item" data-link="#gallery">Gallery</li>
                <li class="navbar_menu_item" data-link="#contact">Contact</li>
            </ul>
        </nav>
    </header>
```

ν€λμ html νκ·Έλ€.

```css
/* Header */

header {
  height: 1300px;
  position: relative;
}

header:after {
  background-image: url(imgs/header_bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0.5 !important;
  z-index: -1;
  content: "";
  width: 100%;
  height: 100%;
}

.page_logo {
  display: flex;
  font-weight: var(--weight-semi-bold);
  justify-content: center;
  font-size: 70px;
  padding: 300px;
  padding-bottom: 200px;
}

.page_logo i {
  margin: 20px;
}

.page_logo:hover {
  transition: 0.7s;
  color: var(--color-white);
}

.navbar_menu {
  display: flex;
  justify-content: center;
  font-size: var(--font-medium);
}

.navbar_menu_item {
  padding: 8px 12px;
  margin: 0 4px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: var(--size-border-radius);
}

.navbar_menu_item:hover {
  transition: 0.7s;
  border: 1px solid var(--color-white);
  background-color: var(--color-black);
  color: var(--color-white);
  border-radius: var(--size-border-radius);
}
```

ν€λμ CSS μμ±μ΄λ€.

ν€λμμ κ°μ₯ μ€μ μ μΌλ‘ κ΅¬ννκ³ μ ν κΈ°λ₯μ μ€ν¬λ‘€ μ λ°°κ²½νλ©΄ κ³ μ κ³Ό, navbar λ²νΌ ν΄λ¦­μμ ν΄λΉ λ μ΄μμμΌλ‘ μ΄λνλ κΈ°λ₯μ΄μλ€.

μ€ν¬λ‘€ μ λ°°κ²½νλ©΄ κ³ μ μ, νμ¬ λ°°λ¬μ λ―Όμ‘± ννμ΄μ§λ μ€νλ²μ€ ννμ΄μ§μμλ λ³Ό μ μλ κΈ°λ₯μ΄λΌ, 'μ μ κ±΄ μ΄λ€ μμ²­λ μ½λλ₯Ό μ¬μ©ν΄μ κ΅¬νν λ³΅μ‘ν κΈ°λ₯μΌκΉ?' νλ λλ €μκ³Ό μ€λ μ΄ μμλ€. κ·Έλ¬λ, μ΄λ₯Ό κ΅¬ννκΈ°μλ μκ°λ³΄λ€ λλ¬΄λλ κ°λ¨ν μ½λ νμ€λ§μ΄ νμνλ€.

```css
background-attachment: fixed;
```

background-attachment μμ±μ fixedλ‘ μ€μ νλ©΄, λ°°κ²½μ λ·°ν¬νΈμ λν΄ κ³ μ νκΈ° λλ¬Έμ μ€ν¬λ‘€μ ν΄λ λ°°κ²½μ ν¨κ» μ€ν¬λ‘€λμ§ μκ³  κ³ μ λ μνλ‘ λ¨μμκ² λλ€. λ€λ§ μ¬κΈ°μ μλ‘μ΄ λ¬Έμ κ° λ°μνκ² λλλ°, κΈ°μ‘΄ `<header>` νκ·Έμ background μμ±κ³Ό opacity μμ±μ μ μ©νλ©΄, header νκ·Έ λ΄λΆμ μ‘΄μ¬νλ page_logo μ navbar μμκΉμ§ ν¨κ» ν¬λͺλκ° μ μ©λλ κ²μ΄μλ€.

μ΄λ₯Ό ν΄κ²°νκΈ° μν΄μλ, CSSμ κ°μμμμΈ `::after`λ₯Ό ν΅ν΄ `<header>`μ μμ μμ¬ μμλ₯Ό μΆκ°νλ©΄ λλ€. κΈ°μ‘΄ `<header>` νκ·Έμ μμ μμ¬ μμμ background μμμ opacityλ₯Ό μ€μ ν ν, `z-index`λ₯Ό ν΅ν΄ ν΄λΉ μμμ zμΆμ λ€λ‘ λ³΄λ΄λ©΄, λ°°κ²½νλ©΄μλ§ opacityκ° μ μ©λ¨μ νμΈν  μ μλ€.

![](https://images.velog.io/images/hang_kem_0531/post/710c0870-45ee-4612-bf81-1154c99e0933/ezgif-2-8e17382a3a.gif)

navbarμ λ²νΌμ ν΄λ¦­ν΄μ ν΄λΉ λ μ΄μμμΌλ‘ μ΄λνλ κΈ°λ₯μ Javascriptκ° νμνλ€. μ°μ  datasetμ νμ©νκΈ° μν΄ navbar λ©λ΄μ HTML μμμμ dataset attributeλ₯Ό customizeνλ€.

```html
<nav id="navbar">
	<ul class="navbar_menu">
		<li class="navbar_menu_item" data-link="#me">About Me</li>
		<li class="navbar_menu_item" data-link="#skills">Skills</li>
		<li class="navbar_menu_item" data-link="#hobby">Hobby</li>
		<li class="navbar_menu_item" data-link="#gallery">Gallery</li>
		<li class="navbar_menu_item" data-link="#contact">Contact</li>
	</ul>
</nav>
```

dataset attributeλ₯Ό customize νκΈ° μν΄μλ `data-(λ³μλͺ)` μμΌλ‘ μμ±νκ³  value κ°μ μ£Όλ©΄ λλ€. μ¬κΈ°μλ datasetμ linkλΌλ λ³μλ₯Ό μ£Όκ³  value κ°μΌλ‘ ν΄λΉ λ μ΄μμλ€μ id κ°μ μ£Όμλ€.


```js
// function about scroll smoothly
function scrollIntoView(e) {
  const scrollTo = document.querySelector(e);
  scrollTo.scrollIntoView({
    behavior: "smooth",
  });
}

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar_menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});
```

navbarμ js ν¨μλ€μ΄λ€. μ°μ  λ²νΌμ ν΄λ¦­νλ©΄ μ€ν¬λ‘€λμ΄ ν΄λΉ λ μ΄μμμΌλ‘ μ΄λνκΈ° λλ¬Έμ, scrollIntoView λΌλ ν¨μλ₯Ό μ μν΄ ν΄λΉ elementλ‘ `Window.scrollTo()` λκ² νμλ€. μ¬κΈ°μ behavior: "smooth" κ°μ μ μ©ν΄ μ‘°κΈ λ λΆλλ¬μ΄ μ€ν¬λ‘€μ΄ κ°λ₯νλλ‘ κ΅¬ννμλ€.

κ·Έλ¦¬κ³  `navbar_menu`μ class κ°μ λΆλ¬μ addEventListenerλ‘ click μ΄λ²€νΈλ₯Ό λ±λ‘νμλ€. μ¬κΈ°μ datasetμ link λ³μλ₯Ό λΆλ¬μ€κΈ° μν΄ targetμ΄λΌλ λ³μμ `event.target`κ°μ, linkλΌλ λ³μμ `target.dataset.link` κ°μ μ μ₯νμλ€. link κ°μ΄ nullμΈ κ²½μ°μλ return λͺλ Ήλ¬Έμ, link κ°μ΄ μ ν¨ν  λλ μμ μ μΈν scrollIntoView ν¨μλ₯Ό ν΅ν΄ link κ°μ ν λΉλ λ μ΄μμμΌλ‘ μ΄λνλλ‘ μ΄λ²€νΈ νΈλ€λ¬λ₯Ό λ±λ‘νμλ€.

![](https://images.velog.io/images/hang_kem_0531/post/dc143f7f-6c94-40d7-ad9c-4c436cbdae47/scroll.gif)

**2. About Me**

λ μ΄μμμ μμμΈ About Me λ μ΄μμμ΄λ€. μλ¬΄λλ HTML & CSSλ₯Ό μ€μ μ μΌλ‘ νμ©νμ¬ λ§λλ μκΈ°μκ° νμ΄μ§μ΄λ€ λ³΄λκΉ CSS animation μμ±λ€μ λ§μ΄ νμ©νκ³  μΆμλ€. κ·Έλμ μ‘°κΈμ λ¬κΈμμ§λ§ λ΄ μ¬μ§μ΄ λΉκΈλΉκΈ λκ² νλ κ±΄ μ΄λ¨κΉ μΆμ΄ μ μ©ν΄ λ³΄μλ€.

```css
#me img {
  display: block;
  margin: 30px auto;
  width: 400px;
  height: 400px;
  border-radius: 100% 100% 100% 100%;
}

#me img:hover {
  animation: rotation 2s infinite ease;
  transition: 3s;
}

@keyframes rotation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
```

μ°μ  μ΄λ―Έμ§λ₯Ό λ₯κΈκ² νκΈ° μν΄ widthμ height κ°μ κ°κ² μ€μ ν ν, border-radius κ°μ 50%λ‘ μ£Όμλ€. κ·Έλ¦¬κ³  μλ¬΄λλ λ΄κ° κ³μ λΉκΈλΉκΈ λμκ°λ κ±΄ μ’ μ΄μ§λ¬μΈ κ±° κ°μμ, λ§μ°μ€λ₯Ό μ¬λ Έμ λ, μ¦ `:hover` μνμΌ λλ§ animationμ μ£ΌκΈ°λ‘ νλ€. animationμ rotation 2sμ λ¬΄νλλ‘ λ μ μλλ‘ infiniteλ₯Ό μ£Όμλ€.

κ·Έλ¦¬κ³  3Dλ‘ λλ λ―ν λλμ μ£Όκ³  μΆμ΄μ, `@keyframes` μμ±μ μ¬μ©ν΄ YμΆ 0degμμ λΆν° 360degκΉμ§ λλλ‘ μ€μ νμλ€. 

![](https://images.velog.io/images/hang_kem_0531/post/03af39af-4606-4d38-9dee-37504a5d186d/rotate.gif)
<center> λΉκΈ λΉκΈ λμκ°λ λ§·λ~ </center> <br>


μλμ κ°μΈ μ λ³΄λ€μ hoverμ scale(1.2)μ blue colorλ₯Ό μ£Όμλ€.

```css
#me p:hover {
  transform: scale(1.2);
  color: var(--color-blue);
  transition: 0.5s;
}
```

![](https://images.velog.io/images/hang_kem_0531/post/acec29c9-72af-421d-859e-d93791f3c94e/hover.gif)

### π¬ CSSλ§μΌλ‘ μ΄λ―Έμ§ μ¬λΌμ΄λ λ§λ€κΈ°

> [μ°Έκ³ ν λΈλ‘κ·Έ](https://blogpack.tistory.com/815)

λλ€μμ μ΄λ―Έμ§ μ¬λΌμ΄λλ μλ°μ€ν¬λ¦½νΈλ₯Ό νμ©νμ¬ λ§λ€μ§λ§, μ΄λ²μλ CSSμ HTMLλ§μΌλ‘ μ΄λ―Έμ§ μ¬λΌμ΄λλ₯Ό λ§λ€μ΄ λ³΄λ κ±΄ μ΄λ¨κΉ ν΄μ λ§λ€μ΄ λ³΄μλ€. κ΅¬κΈλ§ν΄λ³΄λ κ½€ λ§μ μμ ν¬μ€νΈκ° μμκ³ , κ·Έ μ€μμ κ°μ₯ λ§μμ λλ λΈλ‘κ·Έμ ν¬μ€νΈλ₯Ό μ°Έμ‘°νμ¬ κ΅¬νν΄ λ³΄μλ€.

```html
<div class="slider">
            <input type="radio" name="slide" id="slide1" checked>
            <input type="radio" name="slide" id="slide2">
            <input type="radio" name="slide" id="slide3">
            <input type="radio" name="slide" id="slide4">
            <input type="radio" name="slide" id="slide5">
            <input type="radio" name="slide" id="slide6">
            <input type="radio" name="slide" id="slide7">
            <input type="radio" name="slide" id="slide8">
            <input type="radio" name="slide" id="slide9">
            <ul id="imgholder" class="imgs">
                <li><img src="imgs/gallery/photo_1.jpg"></li>
                <li><img src="imgs/gallery/photo_2.jpg"></li>
                <li><img src="imgs/gallery/photo_3.jpg"></li>
                <li><img src="imgs/gallery/photo_4.jpg"></li>
                <li><img src="imgs/gallery/photo_5.jpg"></li>
                <li><img src="imgs/gallery/photo_6.jpg"></li>
                <li><img src="imgs/gallery/photo_7.jpg"></li>
                <li><img src="imgs/gallery/photo_8.jpg"></li>
                <li><img src="imgs/gallery/photo_9.jpg"></li>
            </ul>
            <div class="bullets">
                <label for="slide1">&nbsp;</label>
                <label for="slide2">&nbsp;</label>
                <label for="slide3">&nbsp;</label>
                <label for="slide4">&nbsp;</label>
                <label for="slide5">&nbsp;</label>
                <label for="slide6">&nbsp;</label>
                <label for="slide7">&nbsp;</label>
                <label for="slide8">&nbsp;</label>
                <label for="slide9">&nbsp;</label>
            </div>
        </div>
```

μ¬λΌμ΄λμ HTML κ΅¬μ‘°μ΄λ€. μ¬λΌμ΄λμ μ΄λμ input typeμ λΌλμ€ λ°μ€λ₯Ό ν΄λ¦­νμ¬ μ΄λνκ² κ΅¬ννμκ³ , μ€μ  ν΄λ¦­ μ΄λ κ΅¬νμ νλ¨μ bulletsλΌλ label νκ·Έλ₯Ό λ§λ€μ΄ λΌλμ€ λ°μ€μ μ°λλκ² λ§λ€μλ€. μ¦, νλ¨μ bulletsλ₯Ό ν΄λ¦­νλ©΄ λΌλμ€ λ°μ€κ° ν΄λ¦­λμ΄ μ΄λνκ² λλ κ²μ΄λ€.

```css
.slider {
  width: 800px;
  height: 600px;
  position: relative;
  padding-top: 50px;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden; /* νμ¬ μ¬λΌμ΄λ μ€λ₯Έμͺ½μ μμΉν λλ¨Έμ§ μ¬λΌμ΄λ λ€μ΄ λ³΄μ΄μ§ μλλ‘ κ°λ¦Ό */
  z-index: 0;
}

.slider input[type="radio"] {
  display: none;
}
```

μ¬λΌμ΄λμ κΈ°λ³Έ CSS κ΅¬μ‘°μ΄λ€. `margin: 0 auto;`λ₯Ό μ£Όμ΄ μ¬λΌμ΄λλ₯Ό κ°μ΄λ° μ λ ¬νκ³ , `overflow: hidden;` μμ±μ ν΅ν΄ νμ¬ μ¬λΌμ΄λ μ€λ₯Έμͺ½μ μμΉν λλ¨Έμ§ μ΄λ―Έμ§λ€μ΄ λ³΄μ΄μ§ μλλ‘ νμλ€. λΌλμ€ λ°μ€μ μ°κ²°λ bulletsλ₯Ό ν΄λ¦­νλ©΄ μ°μΈ‘μ μμΉν λ³΄μ΄μ§ μλ μ΄λ―Έμ§λ€μ΄ μ’μΈ‘μΌλ‘ μ΄λνλ©° λ³΄μ¬μ§κ² λλ κ΅¬μ‘°μ΄λ€.

```css
ul.imgs {
  padding: 0;
  margin: 0;
  list-style: none;
}

ul.imgs li {
  position: absolute;
  left: 640px;
  transition-delay: 1s; /* μ μ¬λΌμ΄λκ° μ΄λν΄ μ€λ λμ μ΄μ  μ¬λΌμ΄λ μ΄λ―Έμ§κ° λ°°κ²½μ΄ λ³΄μ΄λλ‘ μ§μ° */
  width: 800px !important;
  padding: 0;
  margin: 0;
}
```

μ¬λΌμ΄λ μ΄λ―Έμ§ λͺ©λ‘μ css κ΅¬μ‘°μ΄λ€. `left: 640px;`λ₯Ό μ€μ κΈ°λ³Έμ μΌλ‘ μ¬λΌμ΄λ μμ­ ν¬κΈ° μ€λ₯Έμͺ½μ μμΉνκ² νκ³ , κ°λ³ μ¬λΌμ΄λμ transition delayλ₯Ό 1μ΄λ₯Ό μ€μ μ¬λΌμ΄λκ° μ΄λνλ λμ λ°°κ²½μ΄ μΉ νμ΄μ§ λ°°κ²½μΌλ‘ λ³΄μ΄λ λ¬Έμ λ₯Ό ν΄κ²°ν΄μ€λ€.

```css
.bullets {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  z-index: 2;
}

.bullets label {
  display: inline-block;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.55);
  width: 20px;
  height: 20px;
  cursor: pointer;
}
/* νμ¬ μ νλ λΆλ¦Ώ λ°°κ²½ ν°μμΌλ‘ κ΅¬λΆ νμ */
.slider
  input[type="radio"]:nth-child(1):checked
  ~ .bullets
  > label:nth-child(1) {
  background-color: #fff;
}

(...)
```
bulletsμ CSS κ΅¬μ‘°μ΄λ€. bulletsλ λΌλμ€ λ°μ€μ μ‘°ν©λ `<label>` νκ·Έλ‘ λ§λ λ€. `<label>` νκ·Έλ₯Ό μ¬λΌμ΄λ νλ¨ μ€μμ λ°°μΉν ν, μ νλ bulletsλ₯Ό ν°μμΌλ‘ κ΅¬λΆ νμνλ€.

```css
.slider input[type="radio"]:nth-child(1):checked ~ ul.imgs > li:nth-child(1) {
  left: 0;
  transition: 0.5s;
  z-index: 1;
}
.slider input[type="radio"]:nth-child(2):checked ~ ul.imgs > li:nth-child(2) {
  left: 0;
  transition: 0.5s;
  z-index: 1;
}
.slider input[type="radio"]:nth-child(3):checked ~ ul.imgs > li:nth-child(3) {
  left: 0;
  transition: 0.5s;
  z-index: 1;
}
.slider input[type="radio"]:nth-child(4):checked ~ ul.imgs > li:nth-child(4) {
  left: 0;
  transition: 0.5s;
  z-index: 1;
}

(...)
```

κ°μ₯ μ€μν μ¬λΌμ΄λ μ΄λ μ λλ©μ΄μ CSS κ΅¬μ‘°μ΄λ€. bulletsλ₯Ό ν΄λ¦­νλ©΄ ν΄λΉ μμμ μ¬λΌμ΄λκ° `left: 0` μ²λ¦¬λμ΄ μΌμͺ½μΌλ‘ μ΄λλλ€. κ·Έλ¦¬κ³  μλ‘ λ€μ΄μ€λ μ¬λΌμ΄λλ νμ¬ μ¬λΌμ΄λλ³΄λ€ μμͺ½μ νμλμ΄μΌ νκΈ° λλ¬Έμ z-indexλ₯Ό 1λ‘ μ€μ νμλ€. 

![](https://images.velog.io/images/hang_kem_0531/post/284341c2-99c7-4a30-9241-d9a0b40141cf/slide.gif)

μ¬λΌμ΄λκ° μμ±λ λͺ¨μ΅μ΄λ€!

### π Arrow - up λ²νΌ λ§λ€κΈ° & Transparent Navbar

νμ΄μ§κ° νλ¨μΌλ‘ λ΄λ €κ°μ λ, ν΄λ¦­μμ μ΅μμ λ μ΄μμμΈ headerλ‘ νλ²μ μ΄λνλ λ²νΌμ κ΅¬νν΄ λ³΄μλ€. 

```html
<button class="arrow-up">
	<i class="fa-solid fa-angles-up"></i>
	<br><p>Let's go up!</p>
</button>
```

arrow-up λ²νΌμ HTML κ΅¬μ‘°μ΄λ€. λ²νΌμ λμμΈμ [fontawesome](https://fontawesome.com/)μμ κ°μ Έμλ€. κ·Έλ¦¬κ³  ν΄λΉ λ²νΌμ κΈ°λ₯μ μ μ μλλ‘ `p` νκ·Έλ‘ μ€λͺμ μ μ΄ λμλ€.

```css
.arrow-up {
  position: fixed;
  bottom: 20px;
  width: 150px;
  height: 200px;
  right: 10px;
  font-size: 50px;
  color: var(--color-black);
  border-style: none;
  background: none;
  opacity: 0;
  transition: all var(--animation-duration) ease-in;
  pointer-events: none;
}

.arrow-up.visible {
  opacity: 1;
  pointer-events: auto;
  cursor: pointer;
}

.arrow-up.visible:hover {
  animation: up-down 0.5s infinite ease-in-out alternate;
}
```

arrow-up λ²νΌμ CSS κ΅¬μ‘°μ΄λ€. μ¬κΈ°μ .visibleλ‘ κ΅¬λΆμ ν΄λμ μ΄μ λ, arrow-up λ²νΌμ΄ νμ¬ μΉμ¬μ΄νΈκ° headerμ μμΉν΄ μμλλ λ³΄μ΄μ§ μλ€κ° headerμμ λ²μ΄λ  λλ§ λνλλλ‘ κ΅¬νν  κ²μ΄κΈ° λλ¬Έμ΄λ€. `fixed`λ‘ λΈλΌμ°μ μ μμΉλ₯Ό κ³ μ νκ³ , `opacity`λ‘ visibleμΌλμ μλλλ₯Ό κ΅¬λΆνμλ€. λν visibleμ΄ μλλλ `pointer-events`λ₯Ό noneμΌλ‘ μ€μ ν΄ ν΄λ¦­ν΄λ μλ¬΄λ° κΈ°λ₯μ μννμ§ μλλ‘ νμλ€.

λ§μ°μ€λ₯Ό μ¬λ Έμ λ λ²νΌμ λλ₯΄κ² λ hoverμμ μ μλλ‘ μμ§μ΄λ animation ν¨κ³Ό λν μΆκ°νμλ€.

```js
// Show "arrow up" button when scrolling down
const home = document.querySelector("#header");
const homeHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#header");
});
```

arrow-up λ²νΌμ Javascript νμΌμ΄λ€. μ°μ  headerμ heightλ₯Ό homeHeightλΌλ λ³μμ ν λΉν΄ `window.scrollY`, μ¦ μ¬μ©μκ° μμ§μΌλ‘ headerμ height / 2 λ§νΌ μ€ν¬λ‘€ νμμλ arrow-up λ²νΌμ visible classListλ₯Ό μΆκ°νλλ‘ νμλ€. μ¦, headerμ λ° μ΄μ μ€ν¬λ‘€ νμμ μμ `arrow-up.visible`μ΄ λμ΄ νλ©΄μ λνλκ² λλ κ²μ΄λ€. λ²νΌμ ν΄λ¦­μμλ μμ μ μΈν scrollIntoView ν¨μλ₯Ό ν΅ν΄ headerμ id κ°μΌλ‘ μ΄λνκ² νλ μ΄λ²€νΈ νΈλ€λ¬λ₯Ό λ±λ‘νμλ€.

![](https://images.velog.io/images/hang_kem_0531/post/36b389a0-b352-41dd-895a-36466bfdf74c/arrow-up%20btn.gif)

μ΄μ λΉμ·ν λ°©μμΌλ‘ transparent Navbarλ κ΅¬νν  μ μμλ€.

![](https://images.velog.io/images/hang_kem_0531/post/c1a8a0af-f9bd-4f66-a2e1-9ca05c9fb2a5/ezgif-5-be12c715cb.gif)

## λ§μΉλ©° βπ»

μ¬μ€, κ·Έ λμ λλ¦ κ³΅λΆλ μ€λ ν΄μλ€κ³  μκ°νκ³  'μμ΄ HTML, CSS μ λμΌ κ»μ΄μ§!' νλ μκ°μ κ°μ§κ³  κ³Όμ λ₯Ό μμνμλ€. κ·Έλ¬λ λ§νλ λΆλΆλ λ§μκ³  κ·Έλμ HTML, CSS κ³΅λΆλ₯Ό κ²μλ¦¬ ν΄μ κΈ°μ΅μ΄ λμ§ μλ λΆλΆλ€λ λ§μλ κ² κ°λ€. κ·Έλ¬λ ν κ°μ§ λλμ μμλ κ±΄, λ΄κ° μμ μ HTML, CSS κ³΅λΆλ₯Ό νλ©° λκΌλ κ·Έ μ¬λ―Έ, λ΄κ° λ§λ  κ²λ€μ΄ λμμ λνλκ³  λ λμ κΈ°λ₯λ€μ κ΅¬ννκ³ μ νλ μμ¬λ€μ΄ μ§κΈμ λμκ² μμ§ λ¨μμλ€λ κ²μ΄μλ€. μ΄λ»κ² λ³΄λ©΄ νλ‘ νΈμλ κ°λ°μκ° λκΈ°λ‘ λ§μλ¨Ήμλ κ±΄ μ΄λ¬ν κ²λ€ λλ¬Έμ΄μλ κ² κ°λ€. μμΌλ‘ λ λ°μ λ  λλ₯Ό κ·Έλ €λ³΄λ©΄μ μ΄λ² 1μ°¨ κ³Όμ λ μ¬κΈ°μ λ!