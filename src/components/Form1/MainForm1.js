import React, { Component } from 'react';

class MainForm1 extends Component{
    render(){
        return(
            <>
            <h3>Ważne!</h3>
            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
          

            <form>
                <span>Krok 1/4</span>
                <h4>Zaznacz co chcesz oddać:</h4>
                <input type="checkbox"/>
            </form>
            
            </>
        )
    }
}

export default MainForm1