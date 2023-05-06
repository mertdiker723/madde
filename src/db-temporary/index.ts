import { ActivityMockDataModel, ActiveLocationModal } from "./types";
import EventImageLarge from "../assets/images/EventImageLarge.png";
import Megafone from "../assets/images/Megafone.png";
import Picture from "../assets/images/Picture.png";
import SenerSen from "../assets/images/SenerSen.png";
export const activeLocation: ActiveLocationModal[] = [
    {
        id: 1,
        name: 'Maximum UNIQ Hall'
    },
    {
        id: 2,
        name: 'Maximum UNIQ Box'
    },
    {
        id: 3,
        name: 'Maximum UNIQ Lounge'
    },
    {
        id: 4,
        name: 'Maximum UNIQ Açıkhava'
    },
    {
        id: 5,
        name: 'Bahçe Fuaye'
    },

]

export const activityMockData: ActivityMockDataModel[] = [
    {
        id: 1,
        title: 'BKM Yaz Etkinlikleri: Zengin Mutfağı',
        location: activeLocation[0],
        description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi',
        imgRoute: SenerSen
    },
    {
        id: 2,
        title: 'Yasemin Sakallıoğlu',
        location: activeLocation[1],
        description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi',
        imgRoute: Megafone
    },
    {
        id: 3,
        title: 'Sinema Keyfi: Rifkin’s Festival',
        location: activeLocation[2],
        description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi',
        imgRoute: EventImageLarge
    },
    {
        id: 4,
        title: 'BKM Yaz Etkinlikleri: Zengin Mutfağı',
        location: activeLocation[2],
        description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi',
        imgRoute: SenerSen
    },
    {
        id: 5,
        title: 'Yasemin Sakallıoğlu',
        location: activeLocation[3],
        description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi',
        imgRoute: Megafone
    },
    {
        id: 6,
        title: 'Sinema Keyfi: Rifkin’s Festival',
        location: activeLocation[4],
        description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi',
        imgRoute: Picture
    }
]
