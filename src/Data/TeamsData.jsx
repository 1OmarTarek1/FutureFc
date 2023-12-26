import T_2009 from '../assets/images/2009.jpg'
import T_2010 from '../assets/images/2013.jpg'
import T_2011 from '../assets/images/2011.jpg'


import trophy_01 from '../assets/images/trophy-01.png'
import trophyImage from '../assets/images/currentTrophy.png'
import medal from '../assets/images/medal.png'


// Control Changing Tournament Data for All Cards
let currentTrophyImg = trophyImage ;
let currentTrophy = "FPL" ;
let noCurrentTrophy = "-" ;











const TeamsData =  [
    { // CARD-2009
        id           :  "Team-2009"              , 
        keyChild     :  "ChildTeam-01"           ,
        image        :  T_2009                   , 
        title        :  "2009"                   ,
        category     :  ""                       ,
        trophyWin    :  " 5 "                    , 
        trophyPlayed :  " 9 "                    , 
        trophy       :  currentTrophy            , 
        to_path      :  "/Else/Teams/T_2009"     
    },


    { // CARD-2010
        id           :  "Team-2010"              , 
        keyChild     :  "ChildTeam-02"           ,
        image        :  T_2010                   , 
        title        :  "2010"                   , 
        category     :  ""                       ,
        trophyWin    :  " 0 "                    , 
        trophyPlayed :  " 3 "                    , 
        trophy       :  noCurrentTrophy          , 
        to_path      :  "/Else/Teams/T_2010"
    },


    { // CARD-2011
        id           :  "Team-2011"              , 
        keyChild     :  "ChildTeam-03"           ,
        image        :  T_2011                   , 
        title        :  "2011"                   , 
        category     :  ""                       ,
        trophyWin    :  " 2 "                    , 
        trophyPlayed :  " 6 "                    , 
        trophy       :  currentTrophy            , 
        to_path      :  "/Else/Teams/T_2011"
    }
]


const TeamsDataPage =  {
    team_2009 : {
        id            :  "Team-2009-page"         , 
        image         :  T_2009                   , 
        trophyImg_01  :  trophy_01                , 
        trophyImg     :  currentTrophyImg         ,
        medalImg      :  medal                    ,
        title         :  "2009"                   ,
        category      :  ""                       ,
        trophyWin     :  " 5 "                    , 
        trophyPlayed  :  " 9 "                    , 
        trophy        :  currentTrophy            , 
        to_path       :  "/Else/Teams/T_2009"     
    },


    team_2010 : {
        id           :  "Team-2010-page"         , 
        image        :  T_2010                   , 
        trophyImg_01 :  trophy_01                , 
        trophyImg    :  currentTrophyImg         ,
        medalImg     :  medal                    ,
        title        :  "2010"                   , 
        category     :  ""                       ,
        trophyWin    :  " 0 "                    , 
        trophyPlayed :  " 3 "                    , 
        trophy       :  noCurrentTrophy          , 
        to_path      :  "/Else/Teams/T_2010"
    },


    team_2011 : {
        id           :  "Team-2011-page"         , 
        image        :  T_2011                   , 
        trophyImg_01 :  trophy_01                , 
        trophyImg    :  currentTrophyImg         ,
        medalImg     :  medal                    ,
        title        :  "2011"                   , 
        category     :  ""                       ,
        trophyWin    :  " 2 "                    , 
        trophyPlayed :  " 6 "                    , 
        trophy        :  currentTrophy           , 
        to_path      :  "/Else/Teams/T_2011"
    },
}


const TeamsSubscribes =  [
    { // CARD-01
        id          :  "library_item_010"       , 
        image       :  T_2009                   , 
        title       :  "2009"                   ,
        category    :  ""                       ,
        data_added  :  "( 30 )"                 , 
        hours_played:  "( 25 )"                 , 
        download    :  "( 5 )"                  , 
        to_path     :  "/Else/Teams/T_2009"    
    },


    { // CARD-02
        id          :  "library_item_020"       , 
        image       :  T_2010                   , 
        title       :  "2010"                   , 
        category    :  ""                       ,
        data_added  :  "( 0 )"                  , 
        hours_played:  "( 3 )"                  , 
        download    :  " - "                 , 
        to_path     :  "/Else/Teams/T_2010"
    },


    { // CARD-03
        id          :  "library_item_030"       , 
        image       :  T_2011                   , 
        title       :  "2011"                   , 
        category    :  ""                       ,
        data_added  :  "( 2 )"                  , 
        hours_played:  "( 6 )"                  , 
        download    :  "FPL"                    , 
        to_path     :  "/Else/Teams/T_2011"
    },


    { // CARD-04
        id          :  "library_item_040"       , 
        image       :  T_2011                   , 
        title       :  "2012"                   , 
        category    :  ""                       ,
        data_added  :  "( 0 )"                  , 
        hours_played:  "( 3 )"                  , 
        download    :  "FPL"                    , 
        to_path     :  "/Else/Teams/T_2012"
    },


    { // CARD-03
        id          :  "library_item_050"       , 
        image       :  T_2011                   , 
        title       :  "2013"                   , 
        category    :  ""                       ,
        data_added  :  "( 0 )"                  , 
        hours_played:  "( 3 )"                  , 
        download    :  "FPL"                    , 
        to_path     :  "/Else/Teams/T_2013"
    },


    { // CARD-03
        id          :  "library_item_060"       , 
        image       :  T_2011                   , 
        title       :  "2014"                   , 
        category    :  ""                       ,
        data_added  :  "( 1 )"                  , 
        hours_played:  "( 0 )"                  , 
        download    :  "FPL"                    , 
        to_path     :  "/Else/Teams/T_2014"
    },


    { // CARD-03
        id          :  "library_item_070"       , 
        image       :  T_2011                   , 
        title       :  "2015"                   , 
        category    :  ""                       ,
        data_added  :  "( 0 )"                  , 
        hours_played:  "( 0 )"                  , 
        download    :  " - "                 , 
        to_path     :  "/Else/Teams/T_2015"
    },


    { // CARD-03
        id          :  "library_item_080"       , 
        image       :  T_2011                   , 
        title       :  "2016"                   , 
        category    :  ""                       ,
        data_added  :  "( 0 )"                  , 
        hours_played:  "( 0 )"                  , 
        download    :  " - "                 , 
        to_path     :  "/Else/Teams/T_2016"
    },


    { // CARD-03
        id          :  "library_item_090"       , 
        image       :  T_2011                   , 
        title       :  "2017"                   , 
        category    :  ""                       ,
        data_added  :  "( 0 )"                  , 
        hours_played:  "( 0 )"                  , 
        download    :  " - "                 , 
        to_path     :  "/Else/Teams/T_2017"
    }

]




export default TeamsData
export       { TeamsSubscribes, TeamsDataPage  }

