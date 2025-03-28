import {
  BookTemplate,
  Home,
  LayoutTemplate,
  Phone,
  Settings,
  Settings2,
  Trash2,
} from "lucide-react";



export const data = {
  user: {
    name: "shandcn",
    email: "me@gmaill.com",
    avatar: "/avatar/shadcn.jpg",
  },

  navMain: [
    {
      title: "Home",
      url: "/admin",
      icon: Home,
    },
    // {
    //   title: "Templates",
    //   url: "/templates",
    //   icon: LayoutTemplate,
    // },
    {
      title: "Trash",
      url: "/trash",
      icon: Trash2,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export const publicData = {
    user: {
      name: "shandcn",
      email: "me@gmaill.com",
      avatar: "/avatar/shadcn.jpg",
    },
  
    navMain: [
      {
        title: "Home",
        url: "/",
        icon: Home,
      },
      {
        title: "Settings",
        url: "/user-settings",
        icon: Settings,
      },
      {
        title: "Contact us",
        url: "/contact",
        icon: Phone,
      },
    ],
  };

// animation used
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const cities = [
  {
      "id": 57598,
      "name": "Afzalpur",
      "latitude": "17.19986000",
      "longitude": "76.36018000"
  },
  {
      "id": 57613,
      "name": "Ajjampur",
      "latitude": "13.72794000",
      "longitude": "76.00680000"
  },
  {
      "id": 57632,
      "name": "Aland",
      "latitude": "17.56425000",
      "longitude": "76.56854000"
  },
  {
      "id": 57644,
      "name": "Alnavar",
      "latitude": "15.42727000",
      "longitude": "74.74111000"
  },
  {
      "id": 57656,
      "name": "Alur",
      "latitude": "12.97805000",
      "longitude": "75.99094000"
  },
  {
      "id": 57702,
      "name": "Anekal",
      "latitude": "12.71110000",
      "longitude": "77.69557000"
  },
  {
      "id": 57711,
      "name": "Ankola",
      "latitude": "14.66049000",
      "longitude": "74.30470000"
  },
  {
      "id": 57713,
      "name": "Annigeri",
      "latitude": "15.42513000",
      "longitude": "75.43350000"
  },
  {
      "id": 57735,
      "name": "Arkalgud",
      "latitude": "12.76171000",
      "longitude": "76.06035000"
  },
  {
      "id": 57740,
      "name": "Arsikere",
      "latitude": "13.31446000",
      "longitude": "76.25704000"
  },
  {
      "id": 57757,
      "name": "Athni",
      "latitude": "16.72613000",
      "longitude": "75.06421000"
  },
  {
      "id": 57768,
      "name": "Aurad",
      "latitude": "18.25397000",
      "longitude": "77.41761000"
  },
  {
      "id": 58105,
      "name": "Badami",
      "latitude": "15.91495000",
      "longitude": "75.67683000"
  },
  {
      "id": 57797,
      "name": "Bagalkot",
      "latitude": "16.18000000",
      "longitude": "75.69000000"
  },
  {
      "id": 58107,
      "name": "Bagepalli",
      "latitude": "13.78338000",
      "longitude": "77.79667000"
  },
  {
      "id": 57814,
      "name": "Bail-Hongal",
      "latitude": "15.81370000",
      "longitude": "74.85895000"
  },
  {
      "id": 57827,
      "name": "Ballari",
      "latitude": "15.15000000",
      "longitude": "76.55000000"
  },
  {
      "id": 58136,
      "name": "Banavar",
      "latitude": "13.41029000",
      "longitude": "76.16314000"
  },
  {
      "id": 57847,
      "name": "Bangalore Rural",
      "latitude": "13.22567000",
      "longitude": "77.57501000"
  },
  {
      "id": 57848,
      "name": "Bangalore Urban",
      "latitude": "13.00000000",
      "longitude": "77.58333000"
  },
  {
      "id": 57851,
      "name": "Bangarapet",
      "latitude": "12.99116000",
      "longitude": "78.17804000"
  },
  {
      "id": 57856,
      "name": "Bannur",
      "latitude": "12.33295000",
      "longitude": "76.86201000"
  },
  {
      "id": 57857,
      "name": "Bantval",
      "latitude": "12.89050000",
      "longitude": "75.03489000"
  },
  {
      "id": 57893,
      "name": "Basavakalyan",
      "latitude": "17.87445000",
      "longitude": "76.94972000"
  },
  {
      "id": 57894,
      "name": "Basavana Bagevadi",
      "latitude": "16.57278000",
      "longitude": "75.97252000"
  },
  {
      "id": 57922,
      "name": "Belagavi",
      "latitude": "16.33333000",
      "longitude": "74.75000000"
  },
  {
      "id": 57925,
      "name": "Belluru",
      "latitude": "12.98140000",
      "longitude": "76.73308000"
  },
  {
      "id": 57928,
      "name": "Beltangadi",
      "latitude": "13.98333000",
      "longitude": "75.30000000"
  },
  {
      "id": 57930,
      "name": "Belur",
      "latitude": "13.16558000",
      "longitude": "75.86519000"
  },
  {
      "id": 57933,
      "name": "Bengaluru",
      "latitude": "12.97194000",
      "longitude": "77.59369000"
  },
  {
      "id": 57956,
      "name": "Bhadravati",
      "latitude": "13.84846000",
      "longitude": "75.70502000"
  },
  {
      "id": 58010,
      "name": "Bhalki",
      "latitude": "18.04348000",
      "longitude": "77.20600000"
  },
  {
      "id": 57970,
      "name": "Bhatkal",
      "latitude": "13.98534000",
      "longitude": "74.55531000"
  },
  {
      "id": 58154,
      "name": "Bidar",
      "latitude": "18.08333000",
      "longitude": "77.33333000"
  },
  {
      "id": 58042,
      "name": "Bilgi",
      "latitude": "16.34714000",
      "longitude": "75.61804000"
  },
  {
      "id": 58061,
      "name": "Birur",
      "latitude": "13.59723000",
      "longitude": "75.97167000"
  },
  {
      "id": 58102,
      "name": "Byadgi",
      "latitude": "14.67325000",
      "longitude": "75.48680000"
  },
  {
      "id": 58101,
      "name": "Byndoor",
      "latitude": "13.86667000",
      "longitude": "74.63333000"
  },
  {
      "id": 58166,
      "name": "Canacona",
      "latitude": "14.99590000",
      "longitude": "74.05056000"
  },
  {
      "id": 58178,
      "name": "Challakere",
      "latitude": "14.31800000",
      "longitude": "76.65165000"
  },
  {
      "id": 58185,
      "name": "Chamrajnagar",
      "latitude": "11.96000000",
      "longitude": "77.09000000"
  },
  {
      "id": 58197,
      "name": "Channagiri",
      "latitude": "14.02399000",
      "longitude": "75.92577000"
  },
  {
      "id": 58198,
      "name": "Channapatna",
      "latitude": "12.65143000",
      "longitude": "77.20672000"
  },
  {
      "id": 58199,
      "name": "Channarayapatna",
      "latitude": "12.90642000",
      "longitude": "76.38775000"
  },
  {
      "id": 131547,
      "name": "Chik Ballapur",
      "latitude": "13.43512000",
      "longitude": "77.72787000"
  },
  {
      "id": 131551,
      "name": "Chikkaballapur",
      "latitude": "13.55000000",
      "longitude": "77.87000000"
  },
  {
      "id": 131552,
      "name": "Chikkamagaluru",
      "latitude": "13.49000000",
      "longitude": "75.73000000"
  },
  {
      "id": 131554,
      "name": "Chiknayakanhalli",
      "latitude": "13.41609000",
      "longitude": "76.62063000"
  },
  {
      "id": 131555,
      "name": "Chikodi",
      "latitude": "16.42898000",
      "longitude": "74.58591000"
  },
  {
      "id": 131560,
      "name": "Chincholi",
      "latitude": "17.46508000",
      "longitude": "77.41874000"
  },
  {
      "id": 131566,
      "name": "Chintamani",
      "latitude": "13.40051000",
      "longitude": "78.05172000"
  },
  {
      "id": 131613,
      "name": "Chitapur",
      "latitude": "17.12357000",
      "longitude": "77.08240000"
  },
  {
      "id": 131571,
      "name": "Chitradurga",
      "latitude": "14.20000000",
      "longitude": "76.50000000"
  },
  {
      "id": 131616,
      "name": "Closepet",
      "latitude": "12.72181000",
      "longitude": "77.28149000"
  },
  {
      "id": 131624,
      "name": "Coondapoor",
      "latitude": "13.63126000",
      "longitude": "74.69020000"
  },
  {
      "id": 131644,
      "name": "Dakshina Kannada",
      "latitude": "12.84000000",
      "longitude": "75.29000000"
  },
  {
      "id": 131652,
      "name": "Dandeli",
      "latitude": "15.26667000",
      "longitude": "74.61667000"
  },
  {
      "id": 131670,
      "name": "Davanagere",
      "latitude": "14.43000000",
      "longitude": "75.90000000"
  },
  {
      "id": 131701,
      "name": "Devanhalli",
      "latitude": "13.24655000",
      "longitude": "77.71183000"
  },
  {
      "id": 131729,
      "name": "Dharwad",
      "latitude": "15.37000000",
      "longitude": "75.14000000"
  },
  {
      "id": 131780,
      "name": "Dod Ballapur",
      "latitude": "13.29452000",
      "longitude": "77.53777000"
  },
  {
      "id": 131879,
      "name": "French Rocks",
      "latitude": "12.50094000",
      "longitude": "76.67416000"
  },
  {
      "id": 131884,
      "name": "Gadag",
      "latitude": "15.49835000",
      "longitude": "75.65187000"
  },
  {
      "id": 131885,
      "name": "Gadag-Betageri",
      "latitude": "15.41670000",
      "longitude": "75.61670000"
  },
  {
      "id": 131893,
      "name": "Gajendragarh",
      "latitude": "15.73628000",
      "longitude": "75.96976000"
  },
  {
      "id": 131911,
      "name": "Gangawati",
      "latitude": "15.43130000",
      "longitude": "76.52933000"
  },
  {
      "id": 131904,
      "name": "Gangolli",
      "latitude": "13.65024000",
      "longitude": "74.67072000"
  },
  {
      "id": 131970,
      "name": "Gokak",
      "latitude": "16.16901000",
      "longitude": "74.82393000"
  },
  {
      "id": 131971,
      "name": "Gokarna",
      "latitude": "14.55000000",
      "longitude": "74.31667000"
  },
  {
      "id": 131995,
      "name": "Goribidnur",
      "latitude": "13.61072000",
      "longitude": "77.51738000"
  },
  {
      "id": 131996,
      "name": "Gorur",
      "latitude": "12.82297000",
      "longitude": "76.06463000"
  },
  {
      "id": 132007,
      "name": "Gubbi",
      "latitude": "13.31216000",
      "longitude": "76.94102000"
  },
  {
      "id": 132009,
      "name": "Gudibanda",
      "latitude": "13.67099000",
      "longitude": "77.70414000"
  },
  {
      "id": 132017,
      "name": "Guledagudda",
      "latitude": "16.05025000",
      "longitude": "75.78997000"
  },
  {
      "id": 132025,
      "name": "Gundlupet",
      "latitude": "11.81004000",
      "longitude": "76.69027000"
  },
  {
      "id": 132034,
      "name": "Gurmatkal",
      "latitude": "16.86773000",
      "longitude": "77.39088000"
  },
  {
      "id": 132053,
      "name": "Hadagalli",
      "latitude": "15.02048000",
      "longitude": "75.93185000"
  },
  {
      "id": 132059,
      "name": "Haliyal",
      "latitude": "15.32864000",
      "longitude": "74.75638000"
  },
  {
      "id": 132061,
      "name": "Hampi",
      "latitude": "15.33520000",
      "longitude": "76.46030000"
  },
  {
      "id": 132140,
      "name": "Hangal",
      "latitude": "14.76465000",
      "longitude": "75.12460000"
  },
  {
      "id": 132076,
      "name": "Harihar",
      "latitude": "14.51288000",
      "longitude": "75.80716000"
  },
  {
      "id": 132079,
      "name": "Harpanahalli",
      "latitude": "14.78766000",
      "longitude": "75.98863000"
  },
  {
      "id": 132086,
      "name": "Hassan",
      "latitude": "12.95000000",
      "longitude": "76.08333000"
  },
  {
      "id": 132089,
      "name": "Haveri",
      "latitude": "14.73732000",
      "longitude": "75.41062000"
  },
  {
      "id": 132093,
      "name": "Heggadadevankote",
      "latitude": "12.08809000",
      "longitude": "76.32957000"
  },
  {
      "id": 132103,
      "name": "Hirekerur",
      "latitude": "14.45506000",
      "longitude": "75.39520000"
  },
  {
      "id": 132104,
      "name": "Hiriyur",
      "latitude": "13.94455000",
      "longitude": "76.61723000"
  },
  {
      "id": 132111,
      "name": "Holalkere",
      "latitude": "14.04295000",
      "longitude": "76.18496000"
  },
  {
      "id": 132112,
      "name": "Hole Narsipur",
      "latitude": "12.78635000",
      "longitude": "76.24331000"
  },
  {
      "id": 132113,
      "name": "Homnabad",
      "latitude": "17.77074000",
      "longitude": "77.12519000"
  },
  {
      "id": 132115,
      "name": "Honavar",
      "latitude": "14.28088000",
      "longitude": "74.44497000"
  },
  {
      "id": 132114,
      "name": "Honnali",
      "latitude": "14.23976000",
      "longitude": "75.64507000"
  },
  {
      "id": 132117,
      "name": "Hosanagara",
      "latitude": "13.91387000",
      "longitude": "75.06503000"
  },
  {
      "id": 132118,
      "name": "Hosangadi",
      "latitude": "13.69756000",
      "longitude": "74.95427000"
  },
  {
      "id": 132119,
      "name": "Hosdurga",
      "latitude": "13.79631000",
      "longitude": "76.28408000"
  },
  {
      "id": 132123,
      "name": "Hoskote",
      "latitude": "13.07070000",
      "longitude": "77.79814000"
  },
  {
      "id": 132124,
      "name": "Hospet",
      "latitude": "15.26954000",
      "longitude": "76.38710000"
  },
  {
      "id": 132127,
      "name": "Hubballi",
      "latitude": "15.34776000",
      "longitude": "75.13378000"
  },
  {
      "id": 132128,
      "name": "Hukeri",
      "latitude": "16.23082000",
      "longitude": "74.60244000"
  },
  {
      "id": 132129,
      "name": "Hungund",
      "latitude": "16.06213000",
      "longitude": "76.05860000"
  },
  {
      "id": 132130,
      "name": "Hunsur",
      "latitude": "12.30359000",
      "longitude": "76.29275000"
  },
  {
      "id": 132160,
      "name": "Ilkal",
      "latitude": "15.95923000",
      "longitude": "76.11351000"
  },
  {
      "id": 132165,
      "name": "Indi",
      "latitude": "17.17735000",
      "longitude": "75.95260000"
  },
  {
      "id": 132182,
      "name": "Jagalur",
      "latitude": "14.51957000",
      "longitude": "76.33915000"
  },
  {
      "id": 132227,
      "name": "Jamkhandi",
      "latitude": "16.50461000",
      "longitude": "75.29146000"
  },
  {
      "id": 132263,
      "name": "Jevargi",
      "latitude": "17.01394000",
      "longitude": "76.77317000"
  },
  {
      "id": 132330,
      "name": "Kadur",
      "latitude": "13.55285000",
      "longitude": "76.01164000"
  },
  {
      "id": 132016,
      "name": "Kalaburgi",
      "latitude": "17.16667000",
      "longitude": "77.08333000"
  },
  {
      "id": 132351,
      "name": "Kalghatgi",
      "latitude": "15.18315000",
      "longitude": "74.97099000"
  },
  {
      "id": 132365,
      "name": "Kampli",
      "latitude": "15.40626000",
      "longitude": "76.60013000"
  },
  {
      "id": 132706,
      "name": "Kankanhalli",
      "latitude": "12.54654000",
      "longitude": "77.42005000"
  },
  {
      "id": 132719,
      "name": "Karkala",
      "latitude": "13.21428000",
      "longitude": "74.99234000"
  },
  {
      "id": 132411,
      "name": "Karwar",
      "latitude": "14.81361000",
      "longitude": "74.12972000"
  },
  {
      "id": 132431,
      "name": "Kavalur",
      "latitude": "15.28829000",
      "longitude": "75.94330000"
  },
  {
      "id": 132445,
      "name": "Kerur",
      "latitude": "16.01384000",
      "longitude": "75.54631000"
  },
  {
      "id": 132516,
      "name": "Khanapur",
      "latitude": "15.63969000",
      "longitude": "74.50847000"
  },
  {
      "id": 132537,
      "name": "Kodagu",
      "latitude": "12.41667000",
      "longitude": "75.75000000"
  },
  {
      "id": 132541,
      "name": "Kodigenahalli",
      "latitude": "13.72136000",
      "longitude": "77.38629000"
  },
  {
      "id": 132542,
      "name": "Kodlipet",
      "latitude": "12.80087000",
      "longitude": "75.88662000"
  },
  {
      "id": 132553,
      "name": "Kolar",
      "latitude": "13.13000000",
      "longitude": "78.23000000"
  },
  {
      "id": 132559,
      "name": "Kollegal",
      "latitude": "12.15449000",
      "longitude": "77.11051000"
  },
  {
      "id": 132563,
      "name": "Konanur",
      "latitude": "12.63016000",
      "longitude": "76.05037000"
  },
  {
      "id": 132569,
      "name": "Konnur",
      "latitude": "16.20138000",
      "longitude": "74.74886000"
  },
  {
      "id": 132573,
      "name": "Koppa",
      "latitude": "13.53044000",
      "longitude": "75.36329000"
  },
  {
      "id": 132574,
      "name": "Koppal",
      "latitude": "15.50000000",
      "longitude": "76.20000000"
  },
  {
      "id": 132579,
      "name": "Koratagere",
      "latitude": "13.52200000",
      "longitude": "77.23730000"
  },
  {
      "id": 132610,
      "name": "Kotturu",
      "latitude": "14.82442000",
      "longitude": "76.22005000"
  },
  {
      "id": 132623,
      "name": "Krishnarajpet",
      "latitude": "12.66621000",
      "longitude": "76.48770000"
  },
  {
      "id": 132628,
      "name": "Kudachi",
      "latitude": "16.62784000",
      "longitude": "74.85408000"
  },
  {
      "id": 132736,
      "name": "Kudligi",
      "latitude": "14.90500000",
      "longitude": "76.38527000"
  },
  {
      "id": 132642,
      "name": "Kumsi",
      "latitude": "14.05455000",
      "longitude": "75.39992000"
  },
  {
      "id": 132643,
      "name": "Kumta",
      "latitude": "14.42853000",
      "longitude": "74.41890000"
  },
  {
      "id": 132646,
      "name": "Kundgol",
      "latitude": "15.25612000",
      "longitude": "75.24735000"
  },
  {
      "id": 132648,
      "name": "Kunigal",
      "latitude": "13.02319000",
      "longitude": "77.02518000"
  },
  {
      "id": 132658,
      "name": "Kurgunta",
      "latitude": "17.19321000",
      "longitude": "77.35772000"
  },
  {
      "id": 132668,
      "name": "Kushalnagar",
      "latitude": "12.45795000",
      "longitude": "75.95904000"
  },
  {
      "id": 132666,
      "name": "Kushtagi",
      "latitude": "15.75623000",
      "longitude": "76.19112000"
  },
  {
      "id": 132752,
      "name": "Lakshmeshwar",
      "latitude": "15.12689000",
      "longitude": "75.46935000"
  },
  {
      "id": 132765,
      "name": "Lingsugur",
      "latitude": "16.15876000",
      "longitude": "76.52174000"
  },
  {
      "id": 132774,
      "name": "Londa",
      "latitude": "15.46907000",
      "longitude": "74.51906000"
  },
  {
      "id": 132809,
      "name": "Maddagiri",
      "latitude": "13.66035000",
      "longitude": "77.21239000"
  },
  {
      "id": 132810,
      "name": "Maddur",
      "latitude": "12.58283000",
      "longitude": "77.04294000"
  },
  {
      "id": 132817,
      "name": "Madikeri",
      "latitude": "12.42602000",
      "longitude": "75.73820000"
  },
  {
      "id": 133060,
      "name": "Magadi",
      "latitude": "12.95706000",
      "longitude": "77.22374000"
  },
  {
      "id": 132847,
      "name": "Mahalingpur",
      "latitude": "16.38880000",
      "longitude": "75.10873000"
  },
  {
      "id": 132868,
      "name": "Malavalli",
      "latitude": "12.38556000",
      "longitude": "77.06045000"
  },
  {
      "id": 132877,
      "name": "Malpe",
      "latitude": "13.34962000",
      "longitude": "74.70394000"
  },
  {
      "id": 133071,
      "name": "Malur",
      "latitude": "13.00322000",
      "longitude": "77.93798000"
  },
  {
      "id": 132898,
      "name": "Mandya",
      "latitude": "12.52230000",
      "longitude": "76.89746000"
  },
  {
      "id": 132905,
      "name": "Mangaluru",
      "latitude": "12.91723000",
      "longitude": "74.85603000"
  },
  {
      "id": 132912,
      "name": "Manipal",
      "latitude": "13.35000000",
      "longitude": "74.78333000"
  },
  {
      "id": 133083,
      "name": "Manvi",
      "latitude": "15.99126000",
      "longitude": "77.05034000"
  },
  {
      "id": 133093,
      "name": "Mayakonda",
      "latitude": "14.28894000",
      "longitude": "76.08305000"
  },
  {
      "id": 132964,
      "name": "Melukote",
      "latitude": "12.66258000",
      "longitude": "76.64861000"
  },
  {
      "id": 133098,
      "name": "Mudbidri",
      "latitude": "13.06653000",
      "longitude": "74.99525000"
  },
  {
      "id": 133008,
      "name": "Muddebihal",
      "latitude": "16.33782000",
      "longitude": "76.13173000"
  },
  {
      "id": 133009,
      "name": "Mudgal",
      "latitude": "16.01191000",
      "longitude": "76.44203000"
  },
  {
      "id": 133010,
      "name": "Mudgere",
      "latitude": "13.13353000",
      "longitude": "75.64160000"
  },
  {
      "id": 133011,
      "name": "Mudhol",
      "latitude": "16.33354000",
      "longitude": "75.28305000"
  },
  {
      "id": 133020,
      "name": "Mulbagal",
      "latitude": "13.16352000",
      "longitude": "78.39346000"
  },
  {
      "id": 133021,
      "name": "Mulgund",
      "latitude": "15.28070000",
      "longitude": "75.52132000"
  },
  {
      "id": 133101,
      "name": "Mulki",
      "latitude": "13.09101000",
      "longitude": "74.79353000"
  },
  {
      "id": 133026,
      "name": "Mundargi",
      "latitude": "15.20677000",
      "longitude": "75.88390000"
  },
  {
      "id": 133027,
      "name": "Mundgod",
      "latitude": "14.97144000",
      "longitude": "75.03658000"
  },
  {
      "id": 133033,
      "name": "Munirabad",
      "latitude": "15.30928000",
      "longitude": "76.33830000"
  },
  {
      "id": 133041,
      "name": "Murudeshwara",
      "latitude": "14.09430000",
      "longitude": "74.48450000"
  },
  {
      "id": 133053,
      "name": "Mysuru",
      "latitude": "12.23000000",
      "longitude": "76.42000000"
  },
  {
      "id": 133254,
      "name": "Nagamangala",
      "latitude": "12.81939000",
      "longitude": "76.75456000"
  },
  {
      "id": 133151,
      "name": "Nanjangud",
      "latitude": "12.11764000",
      "longitude": "76.68397000"
  },
  {
      "id": 133159,
      "name": "Narasimharajapura",
      "latitude": "13.61075000",
      "longitude": "75.51200000"
  },
  {
      "id": 133164,
      "name": "Naregal",
      "latitude": "15.57316000",
      "longitude": "75.80805000"
  },
  {
      "id": 133167,
      "name": "Nargund",
      "latitude": "15.72299000",
      "longitude": "75.38666000"
  },
  {
      "id": 133184,
      "name": "Navalgund",
      "latitude": "15.55877000",
      "longitude": "75.35305000"
  },
  {
      "id": 133204,
      "name": "Nelamangala",
      "latitude": "13.09978000",
      "longitude": "77.39364000"
  },
  {
      "id": 133249,
      "name": "Nyamti",
      "latitude": "14.14869000",
      "longitude": "75.57641000"
  },
  {
      "id": 133541,
      "name": "Pangala",
      "latitude": "13.25000000",
      "longitude": "74.75000000"
  },
  {
      "id": 133560,
      "name": "Pavugada",
      "latitude": "14.09953000",
      "longitude": "77.28018000"
  },
  {
      "id": 133458,
      "name": "Piriyapatna",
      "latitude": "12.33497000",
      "longitude": "76.10073000"
  },
  {
      "id": 133474,
      "name": "Ponnampet",
      "latitude": "12.14473000",
      "longitude": "75.94514000"
  },
  {
      "id": 133518,
      "name": "Puttur",
      "latitude": "12.75975000",
      "longitude": "75.20169000"
  },
  {
      "id": 133577,
      "name": "Rabkavi",
      "latitude": "16.47567000",
      "longitude": "75.11060000"
  },
  {
      "id": 133586,
      "name": "Raichur",
      "latitude": "16.16000000",
      "longitude": "76.91000000"
  },
  {
      "id": 133598,
      "name": "Ramanagara",
      "latitude": "12.65000000",
      "longitude": "77.35000000"
  },
  {
      "id": 133719,
      "name": "Ranibennur",
      "latitude": "14.62239000",
      "longitude": "75.62951000"
  },
  {
      "id": 133731,
      "name": "Raybag",
      "latitude": "16.49178000",
      "longitude": "74.77391000"
  },
  {
      "id": 133642,
      "name": "Robertsonpet",
      "latitude": "12.95629000",
      "longitude": "78.27539000"
  },
  {
      "id": 133649,
      "name": "Ron",
      "latitude": "15.69935000",
      "longitude": "75.73408000"
  },
  {
      "id": 133743,
      "name": "Sadalgi",
      "latitude": "16.55870000",
      "longitude": "74.53211000"
  },
  {
      "id": 134060,
      "name": "Sagar",
      "latitude": "14.16498000",
      "longitude": "75.02901000"
  },
  {
      "id": 133760,
      "name": "Sakleshpur",
      "latitude": "12.94119000",
      "longitude": "75.78467000"
  },
  {
      "id": 133779,
      "name": "Sandur",
      "latitude": "15.08613000",
      "longitude": "76.54692000"
  },
  {
      "id": 133788,
      "name": "Sanivarsante",
      "latitude": "12.72824000",
      "longitude": "75.88669000"
  },
  {
      "id": 133789,
      "name": "Sankeshwar",
      "latitude": "16.25649000",
      "longitude": "74.48195000"
  },
  {
      "id": 133806,
      "name": "Sargur",
      "latitude": "11.99971000",
      "longitude": "76.39611000"
  },
  {
      "id": 133827,
      "name": "Saundatti",
      "latitude": "15.76615000",
      "longitude": "75.11778000"
  },
  {
      "id": 133830,
      "name": "Savanur",
      "latitude": "14.97335000",
      "longitude": "75.33724000"
  },
  {
      "id": 133846,
      "name": "Seram",
      "latitude": "17.17859000",
      "longitude": "77.28998000"
  },
  {
      "id": 133907,
      "name": "Shahabad",
      "latitude": "17.13070000",
      "longitude": "76.94361000"
  },
  {
      "id": 133898,
      "name": "Shahpur",
      "latitude": "16.69605000",
      "longitude": "76.84220000"
  },
  {
      "id": 133866,
      "name": "Shiggaon",
      "latitude": "14.99053000",
      "longitude": "75.22499000"
  },
  {
      "id": 133868,
      "name": "Shikarpur",
      "latitude": "14.26980000",
      "longitude": "75.35643000"
  },
  {
      "id": 133872,
      "name": "Shimoga",
      "latitude": "14.05000000",
      "longitude": "75.16000000"
  },
  {
      "id": 133876,
      "name": "Shirhatti",
      "latitude": "15.23352000",
      "longitude": "75.57996000"
  },
  {
      "id": 133884,
      "name": "Shorapur",
      "latitude": "16.52100000",
      "longitude": "76.75738000"
  },
  {
      "id": 133887,
      "name": "Shrirangapattana",
      "latitude": "12.42264000",
      "longitude": "76.68439000"
  },
  {
      "id": 133920,
      "name": "Siddapur",
      "latitude": "14.34322000",
      "longitude": "74.89400000"
  },
  {
      "id": 133924,
      "name": "Sidlaghatta",
      "latitude": "13.38896000",
      "longitude": "77.86444000"
  },
  {
      "id": 133941,
      "name": "Sindgi",
      "latitude": "16.91883000",
      "longitude": "76.23368000"
  },
  {
      "id": 133942,
      "name": "Sindhnur",
      "latitude": "15.76983000",
      "longitude": "76.75581000"
  },
  {
      "id": 134087,
      "name": "Sira",
      "latitude": "13.74155000",
      "longitude": "76.90430000"
  },
  {
      "id": 133962,
      "name": "Sirsi",
      "latitude": "14.62072000",
      "longitude": "74.83554000"
  },
  {
      "id": 133967,
      "name": "Siruguppa",
      "latitude": "15.63000000",
      "longitude": "76.89217000"
  },
  {
      "id": 133989,
      "name": "Someshwar",
      "latitude": "13.49112000",
      "longitude": "75.06646000"
  },
  {
      "id": 133991,
      "name": "Somvarpet",
      "latitude": "12.59698000",
      "longitude": "75.84957000"
  },
  {
      "id": 134001,
      "name": "Sorab",
      "latitude": "14.38144000",
      "longitude": "75.09183000"
  },
  {
      "id": 134024,
      "name": "Sravana Belgola",
      "latitude": "12.85737000",
      "longitude": "76.48886000"
  },
  {
      "id": 134021,
      "name": "Sringeri",
      "latitude": "13.41698000",
      "longitude": "75.25271000"
  },
  {
      "id": 134029,
      "name": "Srinivaspur",
      "latitude": "13.33914000",
      "longitude": "78.21175000"
  },
  {
      "id": 134042,
      "name": "Sulya",
      "latitude": "12.56100000",
      "longitude": "75.38741000"
  },
  {
      "id": 134047,
      "name": "Suntikoppa",
      "latitude": "12.45594000",
      "longitude": "75.82970000"
  },
  {
      "id": 134234,
      "name": "Talikota",
      "latitude": "16.47311000",
      "longitude": "76.31085000"
  },
  {
      "id": 134116,
      "name": "Tarikere",
      "latitude": "13.70954000",
      "longitude": "75.81382000"
  },
  {
      "id": 134125,
      "name": "Tekkalakote",
      "latitude": "15.53444000",
      "longitude": "76.87703000"
  },
  {
      "id": 134133,
      "name": "Terdal",
      "latitude": "16.49379000",
      "longitude": "75.04667000"
  },
  {
      "id": 134176,
      "name": "Tiptur",
      "latitude": "13.25630000",
      "longitude": "76.47768000"
  },
  {
      "id": 134247,
      "name": "Tirthahalli",
      "latitude": "13.68835000",
      "longitude": "75.24548000"
  },
  {
      "id": 134182,
      "name": "Tirumakudal Narsipur",
      "latitude": "12.21207000",
      "longitude": "76.90180000"
  },
  {
      "id": 134219,
      "name": "Tumakuru",
      "latitude": "13.50000000",
      "longitude": "77.00000000"
  },
  {
      "id": 134225,
      "name": "Turuvekere",
      "latitude": "13.16374000",
      "longitude": "76.66641000"
  },
  {
      "id": 134260,
      "name": "Udupi",
      "latitude": "13.50000000",
      "longitude": "74.87000000"
  },
  {
      "id": 134268,
      "name": "Ullal",
      "latitude": "12.80569000",
      "longitude": "74.86058000"
  },
  {
      "id": 134300,
      "name": "Uttar Kannada",
      "latitude": "14.88333000",
      "longitude": "74.58333000"
  },
  {
      "id": 134307,
      "name": "Vadigenhalli",
      "latitude": "13.29724000",
      "longitude": "77.80184000"
  },
  {
      "id": 58031,
      "name": "Vijayapura",
      "latitude": "16.82442000",
      "longitude": "75.71537000"
  },
  {
      "id": 134386,
      "name": "Virarajendrapet",
      "latitude": "12.19644000",
      "longitude": "75.80512000"
  },
  {
      "id": 134414,
      "name": "Wadi",
      "latitude": "17.05183000",
      "longitude": "76.99048000"
  },
  {
      "id": 134420,
      "name": "Yadgir",
      "latitude": "16.73000000",
      "longitude": "76.94000000"
  },
  {
      "id": 134429,
      "name": "Yelahanka",
      "latitude": "13.10073000",
      "longitude": "77.59632000"
  },
  {
      "id": 134430,
      "name": "Yelandur",
      "latitude": "12.04629000",
      "longitude": "77.03034000"
  },
  {
      "id": 134431,
      "name": "Yelbarga",
      "latitude": "15.61545000",
      "longitude": "76.01184000"
  },
  {
      "id": 134433,
      "name": "Yellapur",
      "latitude": "14.96370000",
      "longitude": "74.70929000"
  },
  {
    "id": 134434,
    "name": "Coorg",
    // "latitude": "14.96370000",
    // "longitude": "74.70929000"
},
{
    "id": 134435,
    "name": "Wayanad(Kerala)",
    // "latitude": "14.96370000",
    // "longitude": "74.70929000"
},
{
    "id": 134436,
    "name": "Ooty",
    // "latitude": "14.96370000",
    // "longitude": "74.70929000"
},




]