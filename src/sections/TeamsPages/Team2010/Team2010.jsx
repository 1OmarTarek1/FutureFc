import { SectionHeader, SectionWrapper } from '../../../components'

import { TeamsDataPage } from '../../../Data/TeamsData'
import '../TeamsCss/TeamsPages.css'
import './Team2010.css'

const Team2010 = () => {
    return (
    <>
    <div className="teamSection">
        <div className="img-wrapper">
            <img src={TeamsDataPage.team_2010.image} alt="" />
        </div>
        <SectionHeader>
            فريق {TeamsDataPage.team_2010.title}
        </SectionHeader>
        <SectionWrapper>
            <div className="allTrophy" id='Tournaments'>
                
                <div className="allContent">
                    <div className="trophy">
                        <img src={TeamsDataPage.team_2010.medalImg} alt="" />
                    </div>
                    <span className="trophytxt">{TeamsDataPage.team_2010.trophyPlayed}</span>
                </div>

                <div className="allContent">
                    <div className="trophy">
                        <img src={TeamsDataPage.team_2010.trophyImg_01} alt="" />
                    </div>
                    <span className="trophytxt">{TeamsDataPage.team_2010.trophyWin}</span>
                </div>

                <div className="allContent">
                    <div className="trophy">
                        <img src={TeamsDataPage.team_2010.trophyImg} alt="" />
                    </div>
                    <span className="trophytxt">{TeamsDataPage.team_2010.trophy}</span>
                </div>
            </div>
        </SectionWrapper>
    </div>
    </>
    )
}

export default Team2010