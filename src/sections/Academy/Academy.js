import { SectionHeader, SectionWrapper } from '../../components'
import './Academy.css'
import iconImg from '../../assets/images/icon.ico'
import phoenix_01 from '../../assets/images/phoenix-01.jpg'
import phoenix_02 from '../../assets/images/phoenix-02.jpg'
import phoenix_03 from '../../assets/images/phoenix-03.jpg'
import C_Ahmed from '../../assets/images/C-Ahmed.jpg'
import player_01 from '../../assets/images/player-01.jpg'
import player_02 from '../../assets/images/player-02.jpg'

import React from 'react'

const Academy = () => {
  return (
    <>
      <div className='academy'>
      <SectionHeader>الأكاديمية</SectionHeader>
      <SectionWrapper>

      <div className='about-future future' id='FutureAcademy'>
          <div className='title'>
            <div className='title-img'>
              <img className='img-fluid' src={iconImg} alt='' />
            </div>
            <span className='title-txt'>
              فيوتشر اكاديمي
            </span>
          </div>
          <div className='paragraph'>
            <p>
              أسس كابتن احمد سعيد لاعب الزمالك ومنتخب مصر للشباب اكاديمية فيوتشر في عام 2016 
              وخاضت الاكاديمية الكثير من البطولات وحصل علي المركز الاول ببطولات 
              مثل : (
                الحريف - فيت بلاير - بطولة الجيش بنادي جويل "توليب" سابقا
              )
              بمختلف الاعمار السنية .
            </p>
            <div className='imgs'>
              <div className='infoImg-wrapper'>
                <img src={C_Ahmed} alt='' />
              </div>
            </div>
          </div>
        </div>

        <div className='about-future goals' id='Goals'>
          <div className='title'>
            <span className='title-txt'>
              اهدافنا
            </span>
          </div>
          <div className='paragraph'>
            <ol className='goalsOl' type='1' style={{padding:"0"}}>
              <p>
                نحن نحرص علي جعل جميع اللاعبين في كامل مستواهم واقصي ما يمكن الوصول له 
                  ثم تسويقهم لجميع اندية مصر وذالك عبر :-
              </p>
              <li>خوض مبارايات ودية مع الاندية </li>
              <li>المشاركة ببطولات منظورة من الكشافين واكساب اللاعبين الكثير من الخبرة</li>
              <li>خوض اختبارات مع اندية من خلال فترة معايشة مع الفريق</li>
            </ol>
            <div className='imgs'>
              <div className='infoImg-wrapper'>
                <img src={player_02} alt='' />
              </div>
            </div>
          </div>
        </div>

        <div className='about-future whyUs' id='WhyUs?' >
          <div className='title'>
            <span className='title-txt'>
              لماذا نحن ؟
            </span>
          </div>
          <div className='paragraph'>
            <p>
                نحن نجتهد في ان يصل لكل لاعب اكبر قدر من المعرفة بجميع التقنيات 
                والتكنيك للعبة وفي تحسين تفكير اللاعب داخل وخارج الملعب 
                واتخاذ قرارته واعداد اللاعبين بدنيا وذهنيا واخراج 
                افضل مستوي للاعب ثم تسويقة للاندية وايضا هناك اعمار سنية مختلفة 
                ولكل فئة عمريه نظامها الخاص فللبراعم نظام غير الناشئين غير الشباب.
            </p>
            <div className='imgs'>
              <div className='infoImg-wrapper'>
                <img src={player_01} alt='' />
              </div>
            </div>
          </div>
        </div>

        <div className='about-future logo-info' id='Logo'>
          <div className='title'>
            <span className='title-txt'>
              الشعار
            </span>
            <div className='title-img'>
              <img className='img-fluid' src={iconImg} alt='' />
            </div>
          </div>
          <div className='paragraph'>
            <p>
              <span>
                طائر العنقاء الاسطوري المتوج عرفه العرب بالعنقاء وعرف في الغرب بالفينيق أو الفينكس، 
                وهو طائر ضخم يموت باحتراقه ويحيا من رماده.. فما القصة؟
              </span>
              <span>
                ارتبط في الثقافة الإنسانية بأنه أسطوري، 
                بالرغم من إيجاد رسومات موجودة في كهوف وعلى جدران أثرية تعود إلى أسر وحضارات مُختلفة 
                كالفرعونية والفينيقية، كما يحكى في الأساطير الشعبية، 
                أن العنقاء لها القدرة على العودة من الموت.
              </span>
              <span>
                تقول الأساطير، عاش طائر العنقاء 
                في شبه الجزيرة العربية، وكان يعمر نحو 500 سنة، 
                وفي كل تلك السنوات لا يوجد إلا طائر عنقاء واحد، 
                وهو طائر طويل العنق؛ لذا سماه العرب بالعنقاء.
              </span>
              <span>
                تتابع الأساطير، أن هذا الطائر يمتاز بالجمال والقوة، 
                وعندما يوشك على الموت يترك موطنه ويطير صوب فينيقيا، 
                أي "لبنان حاليًا"، يختار نخلة شاهقة تصل قمتها إلى السماء، ويبني له عُشًا، بعد 
                ذلك يموت في النار، ومن رماده يخرج مخلوق جديد، دودة لها لون الحليب تتحول 
                إلى شرنقة ويخرج من هذه الشرنقة طائر عنقاء جديد، يطير عائدًا إلى موطنه 
                الأصلي ويحمل كل بقايا جسده القديم إلى مذبح الشمس في "هيليوبلس" بمصر، 
                وكان شعب مصر يحيي هذا الطائر العجيب قبل أن يعود إلى بلده في الشرق.
              </span>
              <span>
                في الحضارة الفرعونية تلعب العنقاء التي تتم الإشارة إليها على أنها أنثى، دورًا مهمًا، 
                وهي عبارة عن حيوان ينتهي وجهه بمنقار نسر على جسد أسد وذو جناحين قويين.
              </span>
              <span>
                وفى "العالم الهيليني" هو حارس وحامي بسبب قوته، 
                فهو يحمي كنوز خاصة في "أبولو"، وكتب "كلاودينيوس" العديد من الأشعار التي تختص بطائر العنقاء، 
                فذكر أن هناك طائرًا مخلدًا يستطيع العودة من الموت ويسكن في بستان مليء بالأشجار والأزهار، 
                كما أنه ليس مُعرضًا للشيخوخة، بالإضافة إلى أنه يغني ويردد بعض الأغاني الجميلة.
              </span>
              <span>
                وعلى حدٍ سواء، فإذا كانت قصة العنقاء حقيقية أو أسطورية، فهي تستحق أن تروى.
              </span>
            </p>
            <div className='imgs'>
              <div className='infoImg-wrapper'>
                <img src={phoenix_01} alt='' />
              </div>
              <div className='infoImg-wrapper'>
                <img src={phoenix_02} alt='' />
              </div>
              <div className='infoImg-wrapper'>
                <img src={phoenix_03} alt='' />
              </div>
            </div>
          </div>
        </div>
        
      </SectionWrapper>
      </div>
    </>
  )
}

export default Academy