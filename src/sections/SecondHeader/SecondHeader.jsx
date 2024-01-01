
import { SecHeaderLink } from '../../components'
import './SecondHeader.css'

import SecondHeaderLinksData from '../../Data/SecondHeaderLinksData'
import { useLocation } from "react-router-dom";



const SecondHeader = () => {
    const location = useLocation().pathname ;

    let AllLinks = "";
    if ( location === "/") {
            AllLinks = SecondHeaderLinksData.HomePage.map(LiLink => {
                    return <SecHeaderLink key={ LiLink.KeyID }
                            txt      = { LiLink.txt      }
                            scrollTo = { LiLink.scrollTo }
                    />
                });
    }
    else if ( location === "/News") {
            AllLinks = SecondHeaderLinksData.NewsPage.map(LiLink => {
                return <SecHeaderLink key={ LiLink.KeyID }
                        txt      = { LiLink.txt      }
                        scrollTo = { LiLink.scrollTo }
                />
            })     
    }
    else if ( location === "/Training") {
            AllLinks = SecondHeaderLinksData.TrainingPage.map(LiLink => {
                return <SecHeaderLink key={ LiLink.KeyID }
                        txt      = { LiLink.txt      }
                        scrollTo = { LiLink.scrollTo }
                />
            })     
    }
    else if ( location === "/Else/About") {
            AllLinks = SecondHeaderLinksData.AboutPage.map(LiLink => {
                return <SecHeaderLink key={ LiLink.KeyID }
                        txt      = { LiLink.txt      }
                        scrollTo = { LiLink.scrollTo }
                />
            })    
    }
    else if ( 
        location === "/Else/Teams/T_2009" || 
        location === "/Else/Teams/T_2010" || 
        location === "/Else/Teams/T_2011" 
    ) {
            AllLinks = SecondHeaderLinksData.TeamsPages.map(LiLink => {
                return <SecHeaderLink key={ LiLink.KeyID }
                        txt      = { LiLink.txt      }
                        scrollTo = { LiLink.scrollTo }
                />
            })    
    }
    else if ( location === "/Contact") {
        AllLinks = SecondHeaderLinksData.ContactPage.map(LiLink => {
            return <SecHeaderLink key={ LiLink.KeyID }
                    txt      = { LiLink.txt      }
                    scrollTo = { LiLink.scrollTo }
            />
        })    
}
    else return <></>;

    return (
        <>
            <div className="secondHeader">
                <div className='container secLinksCont'>
                    <ul className='ulLinks'>
                        { AllLinks }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SecondHeader