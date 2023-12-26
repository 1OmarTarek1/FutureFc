
//POPULAR IMAGES
import popular_01 from '../assets/images/popular-01.jpg'
import popular_02 from '../assets/images/popular-01.jpg'
import popular_03 from '../assets/images/popular-01.jpg'
import popular_04 from '../assets/images/popular-01.jpg'





//FEATURED IMAGES
import Featured_01 from '../assets/images/featured-01.jpg'
import Featured_02 from '../assets/images/featured-02.jpg'
import Featured_03 from '../assets/images/featured-03.jpg'
import Featured_04 from '../assets/images/featured-04.jpg'
import Featured_05 from '../assets/images/featured-05.jpg'
import Featured_06 from '../assets/images/featured-06.jpg'









const TrainTimeData =  [ //RELATED-GAMES-DATA-CARD

    { //CARD-01
        id          :  "Related-Games-Data_0"                    , 
        image       :  popular_01                                , 
        title       :  "المجموعة الاولي"                         , 
        category    :  "2009, 2010, المميزين من 2011"           , 
        rate        :  " ( الاثنين - الخميس ) - 6:00م " , 
        download    :  "السبت - 3:00م"                          ,
        to_path     :  "/Else/Teams/T_2009"
    },


    { //CARD-02
        id          :  "Related-Games-Data_1"                    ,  
        image       :  popular_02                                , 
        title       :  "المجموعة الثانية"                       ,     
        category    :  "2011, 2012, المميزين من ( 2013, 2014 )" , 
        rate        :  " ( الاثنين - الخميس ) - 7:00م "          , 
        download    :  "السبت - 4:00م"                           ,
        to_path     :  "/Else/Teams/T_2011"
    },


    { //CARD-03
        id          :  "Related-Games-Data_2"                     , 
        image       :  popular_03                                 , 
        title       :  "المجموعة الثالثة"                        ,      
        category    :  "2013, 2014, المميزين من ( 2015, 2016 )"  , 
        rate        :  " ( الاثنين - الخميس ) - 8:00م "           , 
        download    :  "السبت - 6:00م"                            , 
        to_path     :  "/Else/Teams/T_2013"
    },


    { //CARD-04
        id          :  "Related-Games-Data_3"                        , 
        image       :  popular_04                                    , 
        title       :  "المجموعة الرابعة"                           ,    
        category    :  "2015, 2016, 2017"                            , 
        rate        :  " ( الاثنين - الخميس ) - 9:00م "             , 
        download    :  "السبت - 7:00م"                              ,
        to_path     :  "/Else/Teams/T_2015"
    },

]



const FeaturedGamesData =  [ //FEATURED-GAMES-DATA-CARD

    { //CARD-01
        id          :  "Featured-Games-Data_0"  , 
        image       :  Featured_01              , 
        title       :  "Fortnite"               , 
        category    :  "Battle"                 , 
        rate        :  "3.8"                    , 
        download    :  "2.3M"                   ,
        to_path     :  "OnlineGames/Fortnite"
    },


    { //CARD-02
        id          :  "Featured-Games-Data_1"  , 
        image       :  Featured_02              , 
        title       :  "PUBG"                   ,     
        category    :  "War"                    , 
        rate        :  "4.8"                    , 
        download    :  "4.3M"                   ,
        to_path     :  "OnlineGames/PUBG"
    },


    { //CARD-03
        id          :  "Featured-Games-Data_2"  , 
        image       :  Featured_03              , 
        title       :  "COD"                    ,      
        category    :  "Story"                  , 
        rate        :  "2.7"                    , 
        download    :  "3.2M"                   ,
        to_path     :  "OnlineGames/CallOfDuty"
    },


    { //CARD-04
        id          :  "Featured-Games-Data_3"  , 
        image       :  Featured_04              , 
        title       :  "Valorant"               , 
        category    :  "Shooting"               , 
        rate        :  "3.8"                    , 
        download    :  "3.1M"                   ,
        to_path     :  "OnlineGames"
    },


    { //CARD-05
        id          :  "Featured-Games-Data_4"  , 
        image       :  Featured_05              , 
        title       :  "FIFA 23"                ,  
        category    :  "Football"               ,
        rate        :  "4.8"                    , 
        download    :  "6.3M"                   ,
        to_path     :  "OnlineGames"
    },


    { //CARD-06
        id          :  "Featured-Games-Data_5"  , 
        image       :  Featured_06              , 
        title       :  "Blur"                   ,      
        category    :  "Car Race"               , 
        rate        :  "3.5"                    , 
        download    :  "4.3M"                   ,
        to_path     :  "OnlineGames"
    }

]







export default   TrainTimeData
export         { FeaturedGamesData }
