import React from 'react'
import Slider from 'react-slick'
import { useEffect } from 'react'

import { PlanCard } from '../../components'
import PlansData from '../../Data/PLansData'


import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Plans.css'



const Plans = () => {

    var settings = {
        className: "center",
        centerMode: false,
        infinite: false,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        rtl: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                className: "center",
                centerMode: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true
            }
            },
            {
            breakpoint: 992,
            settings: {
                className: "center",
                centerPadding: "130px",
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true
            }
            },
            {
            breakpoint: 767,
            settings: {
                className: "center",
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                infinite: false,
                dots: true
            }
            },
            {
            breakpoint: 575,
            settings: {
                centerPadding: "40px",
                className: "center",
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                infinite: false,
            }
            },
            {
            breakpoint: 480,
            settings: {
                className: "center",
                centerMode: false, 
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
            }
            }
        ]
        };

        useEffect(() => {
        let plans =  document.querySelectorAll('.plan')  ; 
            plans.forEach( plan => {
            plan.addEventListener('click', () => {
                let activePlan =   document.querySelector('.activePlan');
                activePlan.classList.remove('activePlan');
                plan.classList.add('activePlan');
            });
        });
        }, [] );

        const plans = PlansData.map(plan => {
            return <PlanCard 
            key             = {  plan.id             } 
            startIcn        = {  plan.startIcn       }
            planClass       = {  plan.planClass      } 
            title           = {  plan.title          } 
            cost            = {  plan.cost           } 
            trainsNumCost   = {  plan.trainsNumCost  } 
            outfit          = {  plan.outfit         } 
            trophy          = {  plan.trophy         } 
            />
            
        }) 

    return (
    <div className='plansAll' id='SubscribePlans'>
        <Slider {...settings}> 
            {plans}
        </Slider>
    </div>
    )
}

export default  Plans 




