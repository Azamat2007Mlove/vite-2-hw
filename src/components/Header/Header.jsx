import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <>
    <header>
        <div class="case">
            <h1>Обо мне</h1><br /><br />
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и <br /> вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов  на латинице с начала XVI века.</p>
        </div>
    </header>
    <section class="sec1">
        <img src="../../img/numbers.png" alt="" />
    </section>
    <section class="sec2">
        <div class="case">
            <img src="../../img/skills.png" alt="" />
        </div>
    </section>
    <header class="hed2">
        <div class="case">
                <h1>Как я работаю</h1><br />
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и <br /> вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов  на латинице с начала XVI века.</p>
        </div>
    </header>
    <section class="sec3">
        <div class="case">
            <img src="img/Rectangle 5.png" alt="" />
        </div>
    </section>
    <section class="sec1">
        <img src="../../img/projects.png" alt="" />
    </section>
    <section class="sec5">
        <img src="../../Rectangle 9.png" alt="" />
        <img src="../../Rectangle 9.png" alt="" />
        <img src="../../Rectangle 9.png" alt="" />
        <img src="../../Rectangle 9.png" alt="" />
    </section>
    </>
  )
}

export default Header
