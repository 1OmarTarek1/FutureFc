import './GamingLibraryProf.css'
import { GamingLibraryCardProf, SectionHeader, SectionWrapper, PrimaryBtn } from '../../components/index'
import {TeamsSubscribes}  from '../../Data/TeamsData'




const GamingLibraryProf = () => {

    const cards = TeamsSubscribes.map(card => {
        return <GamingLibraryCardProf key={card.id} title={card.title} image={card.image} category={card.category} data_added={card.data_added} hours_played={card.hours_played} download={card.download} />
    }) 
    


    return(
        <>
            <div className='team-subscribe'>
                    <SectionHeader>
                        <span className='gaming-profile-title'>
                            الاشتراكات <em>بالتدريب</em>
                        </span>
                    </SectionHeader>
                <SectionWrapper>
                    <div className='gaming-library-cards'>
                        {cards}
                    </div>
                </SectionWrapper>
                
                <div className='buttons d-flex justify-content-center gap-2'>
                    <PrimaryBtn> 
                        اعادة الضبط
                        <span className='icon'>
                            <i className="fa-solid fa-gears" />
                        </span>
                    </PrimaryBtn>
                    <PrimaryBtn>حذف الجميع<span className='icon'>-</span></PrimaryBtn>
                    <PrimaryBtn>اضافة مجموعة<span className='icon'>+</span></PrimaryBtn>
                </div>
            </div>

        </>
    )
}


export default GamingLibraryProf
