import React from 'react';
import Ornament from '../../assets/images/ornament.png';
import MainForm1 from "../Form1/MainForm1";

const HeaderForm1 =()=>{
    return(
        <div className="header-form1">
            <h3>Oddaj rzeczy, których już nie chcesz</h3>
            <h2>Potrzebującym</h2>
            <Ornament/>
            <h4>Wystarczą 4 proste kroki:</h4>
            <div>
                <span>1</span>
                <p>Wybierz rzeczy</p>
            </div>
            <div>
                <span>2</span>
                <p>Spakuj je w worki</p>
            </div>
            <div>
                <span>3</span>
                <p>Wybierz fundację</p>
            </div>
            <div>
                <span>4</span>
                <p>Zamów kuriera</p>
            </div>
            <MainForm1/>
        </div>
        
    )
}

export default HeaderForm1