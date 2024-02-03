import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default class ImageCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <div>
                        <Image width='2400' height='1200' src='/favs/4.jpg' alt='space image'></Image>
                    </div>
                    <div>
                        <Image width='2400' height='1200' src='/favs/5.jpg' alt='space image'></Image>

                    </div>
                    <div>
                        <Image width='2400' height='1200' src='/favs/6.jpg' alt='space image'></Image>
                    </div>
                    <div>
                        <Image width='2400' height='1200' src='/favs/1.jpg' alt='space image'></Image>
                    </div>
                    <div>
                        <Image width='2400' height='1200' src='/favs/2.jpg' alt='space image'></Image>
                    </div>
                    <div>
                        <Image width='2400' height='1200' src='/favs/3.jpg' alt='space image'></Image>

                    </div>


                </Carousel>
            </div>
        );
    }
};
