import React from 'react';

import { GovBanner, Header, Hero, Footer } from '../components';

export default function PageTemplate(props) {
    return (
        <div>
            <GovBanner/>

            <Header currentPage={props.page}/>

            <main id="main-content" className={props.mainBg}>
                <Hero bgImg={props.hero}/>

                {props.children}
            </main>

            <Footer returnBg={props.returnBg}/>
        </div>
    )
}