// ========================================   Control Panel   ======================================== //

// Set ID For Every Single Plan
const Plan_ID_01     =  "plan_01"  ;
const Plan_ID_02     =  "plan_02"  ;
const Plan_ID_03     =  "plan_03"  ;
const Plan_ID_04     =  "plan_04"  ;

// Set Costs Variable
let MouthCost     =  500  ;
let HalfMonthCost =  MouthCost * 0.6  ;
let OutfitCost    =  300  ;
let TrophyCost    =  750  ;
let CM   = "EGP" ;

// Every Single Plan Cost 
const Plan_Salary_01  =  MouthCost     + CM                             ; // All Month Cost
const Plan_Salary_02  =  HalfMonthCost + CM                             ; // All Half Month Cost
const Plan_Salary_03  =  MouthCost     + OutfitCost  + CM               ; // Special Cost
const Plan_Salary_04  =  MouthCost     + OutfitCost  + TrophyCost  + CM ; // Special All Cost

// ___________________________________ Ul li ___________________________________ //
// Text For Both ( li-01 )
const TrainsTxt = "حصة تدريبية "   ;
// li-01
const TrainsMouthNumber = "12 " ;          // --- Month --- //       
const TrainsMonthCost   = MouthCost + CM                         ;    
const monthTxt          = TrainsMouthNumber + TrainsTxt + TrainsMonthCost ; // Last Result
//li-01
const TrainsHalfMouthNumber = "6 "  ;              // --- Half Month --- //                      
const TrainsHalfMonthCost   = HalfMonthCost + CM                             ;   
const halfMonthTxt          = TrainsHalfMouthNumber + TrainsTxt + TrainsHalfMonthCost ; // Last Result

// li-02
const icnT        = <i className="fa-solid fa-shirt" />          ;
const txtOutfit   = "طقم كورة فيوتشر ( تيشرت - شورت - شراب )"  ;
const txtOutfitLi = txtOutfit + OutfitCost + CM         ; // Last Result

// li-03
const icnTro      = <i className="fa-solid fa-trophy" />  ;
const txtTrophy   = "المشاركة بالدوري بالبطولة "        ;
const txtTrophyLi = txtTrophy + TrophyCost + CM  ; // Last Result
// _____________________________________________________________________________  //

// =================================================================================================== //







// =======================================  PLan Card Objects  ======================================= //

const PlansData = [

    { // Plan-01
        id            :   Plan_ID_01               , 
        startIcn      :   ""                       ,
        planClass     :  "plan Month activePlan"   , 
        title         :  "الاكثر استخداما"         ,
        cost          :  Plan_Salary_01            ,
        trainsNumCost :  monthTxt                  , 
        outfit        : <>
                            <del>
                                {icnT}
                                {txtOutfitLi}
                            </del>
                        </>,                
        trophy        : <>
                            <del>
                                {icnTro}
                                {txtTrophyLi}
                            </del>   
                        </>           
    },


    { // Plan-02
        id            :   Plan_ID_02        , 
        startIcn      :   ""                ,
        planClass     :  "plan halfMonth "  , 
        title         :  "الاقل استخداما"   ,
        cost          :   Plan_Salary_02    ,
        trainsNumCost :   halfMonthTxt      , 
        outfit        : <>
                            <del>
                                {icnT}
                                {txtOutfitLi}
                            </del>
                        </>,                
        trophy        : <>
                            <del>
                                {icnTro}
                                {txtTrophyLi}
                            </del>   
                        </>  
    },


    { // Plan-03
        id            :   Plan_ID_03            , 
        startIcn      :   ""                    ,
        planClass     :  "plan specialMonth "   , 
        title         :  "نقترح عليك"          ,
        cost          :   Plan_Salary_03        ,
        trainsNumCost :   monthTxt              , 
        outfit        : <>
                            <span>
                                {icnT}
                                {txtOutfitLi}
                            </span>
                        </>,                
        trophy        : <>
                            <del>
                                {icnTro}
                                {txtTrophyLi}
                            </del>   
                        </>     
    },


    { // Plan-04
        id            :   Plan_ID_04               , 
        startIcn      :  <span className='starPlan'><i className='fa-solid fa-star' /></span>,
        planClass     :  "plan specialAll "        ,  
        title         :  "نقترح عليك"             ,
        cost          :   Plan_Salary_04           ,
        trainsNumCost :   monthTxt                 , 
        outfit        : <>
                            <span>
                                {icnT}
                                {txtOutfitLi}
                            </span>
                        </>,                
        trophy        : <>
                            <span>
                                {icnTro}
                                {txtTrophyLi}
                            </span>   
                        </>   
    },

]



export default PlansData
