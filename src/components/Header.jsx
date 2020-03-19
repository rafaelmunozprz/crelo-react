import React, { Fragment } from 'react';
import teamCrelo from '../assets/images/team-crelo.png';

const Header = () => {
    return (
        <Fragment>
            <section class="banner_main">
                <div class="container">
                    <div class="row d_flex">
                        <div class="col-md-5">
                            <div class="text-bg">
                                <h1>CRELO<br></br> Software</h1>
                                    <span>Desarrolladores 2020</span>
                                    <p>Es momento de optar por un proyecto que cubra las verdaderas necesidades de tu empresa </p>
                                    <a href="<?php echo $RUTA; ?>#">Información</a>
                            </div>
                            </div>
                            <div class="col-md-7">
                                <div class="text-img">
                                    <figure><img src={teamCrelo}/></figure>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </Fragment>
    );
};

export default Header;