import { Fragment } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
function Habits(){
    return ( 
        <Fragment>
            <Header />
            <Body />
            <Footer />
        </Fragment>
    );
}

export default Habits;