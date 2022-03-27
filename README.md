## ✍🏻 자기소개 페이지 만들기

오늘은 사전스터디 1주차 과제였던 자기소개 페이지 만들기에 대한 게시글을 써보려 한다. 사실 1~2년동안 먼저 프론트엔드 개발자가 되기 위해서 혼자 나름대로의 공부를 해왔다고 생각했는데, 이번 과제를 통해서 아직 내가 한~~~~~~~~~참 부족한 모시깽이라는 것을 느꼈다.. 그래도 기존에 내가 사용했었던 코드나 드림코딩 포트폴리오를 만들때 배웠던 코드들은 유용하게 활용할 수 있었다. 

> [완성된 자기 소개 페이지](https://kyeom1997.github.io/wecode_week_1/)

### 🎞️ 레이아웃

![](https://images.velog.io/images/hang_kem_0531/post/cb6d6803-fdc0-493a-a50c-099c454e227d/image.png)

대략적인 레이아웃은 이렇게 설정하였다. 사실 여러 개의 페이지를 연결해서 만들까도 생각했지만, 아직은 멀티 페이지 애플리케이션으로 구현을 할 수 밖에 없기 때문에, 속도 저하 등의 효율성이 떨어진다고 생각해서 한 페이지에서 navbar를 통한 버튼으로 이동할 수 있게 레이아웃을 설정하였다.

### ✨ 사용한 코드들


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

헤더의 html 태그다.

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

헤더의 CSS 속성이다.

헤더에서 가장 중점적으로 구현하고자 한 기능은 스크롤 시 배경화면 고정과, navbar 버튼 클릭시에 해당 레이아웃으로 이동하는 기능이었다.

스크롤 시 배경화면 고정은, 현재 배달의 민족 홈페이지나 스타벅스 홈페이지에서도 볼 수 있는 기능이라, '와 저건 어떤 엄청난 코드를 사용해서 구현한 복잡한 기능일까?' 하는 두려움과 설렘이 있었다. 그러나, 이를 구현하기에는 생각보다 너무나도 간단한 코드 한줄만이 필요했다.

```css
background-attachment: fixed;
```

background-attachment 속성을 fixed로 설정하면, 배경을 뷰포트에 대해 고정하기 때문에 스크롤을 해도 배경은 함께 스크롤되지 않고 고정된 상태로 남아있게 된다. 다만 여기서 새로운 문제가 발생하게 되는데, 기존 `<header>` 태그에 background 속성과 opacity 속성을 적용하면, header 태그 내부에 존재하는 page_logo 와 navbar 요소까지 함께 투명도가 적용되는 것이었다.

이를 해결하기 위해서는, CSS의 가상요소인 `::after`를 통해 `<header>`의 자식 의사 요소를 추가하면 된다. 기존 `<header>` 태그의 자식 의사 요소에 background 요소와 opacity를 설정한 후, `z-index`를 통해 해당 요소의 z축을 뒤로 보내면, 배경화면에만 opacity가 적용됨을 확인할 수 있다.

![](https://images.velog.io/images/hang_kem_0531/post/710c0870-45ee-4612-bf81-1154c99e0933/ezgif-2-8e17382a3a.gif)