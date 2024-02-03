import React from 'react'
import './nav.scss'

const Nav = () => {
  return (
    <>
      <nav>
        <div className="case">
        <div class="navtop">
                <div class="right">
                    <img src="../../img/WD.svg" alt="" />
                </div>
                <div class="left">
                    <p>ГЛАВНАЯ</p>
                    <p>ОБ АВТОРЕ</p>
                    <p>РАБОТЫ</p>
                    <p>ПРОЦЕСС</p>
                    <p>КОНТАКТЫ</p>
                </div>
            </div>
            <div className="navbtm">
            <div class="butleft">
                <img src="../../img/Frame.png" alt="" />
                </div>
                <div class="butright">
                <h1>Дизайн и верстка</h1><br />
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и <br /> вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов <br /> на латинице с начала XVI века.</p><br />
                    <button>НАПИСАТЬ МНЕ</button>
                </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
