const body = document.querySelector('body');
const curr_track = document.querySelector("audio");

const title = document.getElementById("song__title");
const artist = document.getElementById("song__artist");
const description = document.getElementById("description");
const download = document.getElementById("download");
const video = document.getElementById("video");
const image = document.getElementById("image");
const cd = document.getElementById("cd");

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const play__pause = document.getElementById("paly-pause");
const repeat_one = document.getElementById("repeat-one");
const repeat_one_svg = document.getElementById("repeat-one-svg");
const shuffle = document.getElementById("shuffle");
const shuffle_svg = document.getElementById("shuffle-svg");

const time__line__box = document.getElementById("time__line__box");
const time__line = document.getElementById("time__line");
const current_min = document.getElementById("current_min");
const current_sec = document.getElementById("current_sec");
const total_min = document.getElementById("total_min");
const total_sec = document.getElementById("total_sec");

const music_list = document.getElementById("music_list");

const track_list = [
    {
        name: "leja re",
        artist: "Dhvani Bhanushali",
        image: "sources/images/38_leja_re.jpg",
        path: "sources/songs/38_leja_re.mp3",
        time: "4:19",
        link: "https://www.youtube.com/watch?v=NNqLB7znMLU",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "naach meri rani",
        artist: "Guru Randhawa, Nikhita Gandhi",
        image: "sources/images/39_naach_meri_rani.jpg",
        path: "sources/songs/39_naach_meri_rani.mp3",
        time: "3:43",
        link: "https://www.youtube.com/watch?v=TCx1yMegJ4A",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "mere gully mein",
        artist: "Naezy, Divine, Ranveer Singh, Sez On The Beat",
        image: "sources/images/40_mere_gully_mein.jpg",
        path: "sources/songs/40_mere_gully_mein.mp3",
        time: "2:56",
        link: "https://www.youtube.com/watch?v=pGmbUdf6lEM",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "makhna",
        artist: "Tanishk Bagchi, Asees Kaur, Yasser Desai",
        image: "sources/images/02_makhna.jpg",
        path: "sources/songs/02_makhna.mp3",
        time: "3:13",
        link: "https://www.youtube.com/watch?v=HqUeSjsYLNU",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "photo",
        artist: "Karan Sehmbi",
        image: "sources/images/03_photo.jpg",
        path: "sources/songs/03_photo.mp3",
        time: "3:16",
        link: "https://www.youtube.com/watch?v=dPmhZ8l7zfA",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "pachtaoge",
        artist: "Arijit Singh",
        image: "sources/images/04_pachtaoge.jpg",
        path: "sources/songs/04_pachtaoge.mp3",
        time: "4:29",
        link: "https://www.youtube.com/watch?v=PVxc5mIHVuQ",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "bekhayali",
        artist: "Sachet Tandon",
        image: "sources/images/01_bekhayali.jpg",
        path: "sources/songs/01_bekhayali.mp3",
        time: "5:53",
        link: "https://www.youtube.com/watch?v=VOLKJJvfAbg",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "vaaste",
        artist: "Dhvani Bhanushali, Nikhil D'Souza",
        image: "sources/images/05_vaaste.jpg",
        path: "sources/songs/05_vaaste.mp3",
        time: "4:26",
        link: "https://www.youtube.com/watch?v=BBAyRBTfsOU",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "aankh marey",
        artist: "Kumar Sanu, Neha Kakkar, Mika Singh",
        image: "sources/images/06_aankh_marey.jpg",
        path: "sources/songs/06_aankh_marey.mp3",
        time: "3:48",
        link: "https://www.youtube.com/watch?v=vu5-aKf_QqA",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "high rated gabru",
        artist: "Guru Randhawa",
        image: "sources/images/07_high_rated_gabru.jpeg",
        path: "sources/songs/07_high_rated_gabru.mp3",
        time: "3:36",
        link: "https://www.youtube.com/watch?v=hjWf8A0YNSE",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "o saki saki",
        artist: "Neha Kakkar, B Praak, Tulsi Kumar",
        image: "sources/images/08_o_saki_saki.jpg",
        path: "sources/songs/08_o_saki_saki.mp3",
        time: "3:24",
        link: "https://www.youtube.com/watch?v=_uUdJalMaF8",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "coca cola",
        artist: "Neha Kakkar, Tony Kakkar, Young Desi",
        image: "sources/images/09_coca_cola.jpg",
        path: "sources/songs/09_coca_cola.mp3",
        time: "2:23",
        link: "https://www.youtube.com/watch?v=_cPHiwPqbqo",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "illegal weapon 2.0",
        artist: "Jasmine Sandlas, Garry Sandhu",
        image: "sources/images/10_illegal_weapon_2.0.jpg",
        path: "sources/songs/10_illegal_weapon_2.0.mp3",
        time: "2:27",
        link: "https://www.youtube.com/watch?v=zjMtaw2mrrc",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "dheeme dheeme",
        artist: "Tony Kakkar",
        image: "sources/images/11_dheeme_dheeme.jpg",
        path: "sources/songs/11_dheeme_dheeme.mp3",
        time: "2:42",
        link: "https://www.youtube.com/watch?v=9mWdw-09dso",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "gali gali",
        artist: "Neha Kakkar",
        image: "sources/images/12_gali_gali.jpg",
        path: "sources/songs/12_gali_gali.mp3",
        time: "3:06",
        link: "https://www.youtube.com/watch?v=1BVgpX4w0Wk",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "garmi",
        artist: "Neha Kakkar, Badshah",
        image: "sources/images/13_garmi.jpg",
        path: "sources/songs/13_garmi.mp3",
        time: "2:40",
        link: "https://www.youtube.com/watch?v=q_0uF80IZXM",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "tera ban jaunga",
        artist: "Tulsi Kumar, Akhil Sachdeva",
        image: "sources/images/14_tera_ban_jaunga.jpg",
        path: "sources/songs/14_tera_ban_jaunga.mp3",
        time: "4:16",
        link: "https://www.youtube.com/watch?v=Qdz5n1Xe5Qo",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "filhall",
        artist: "B Praak",
        image: "sources/images/15_filhall.jpg",
        path: "sources/songs/15_filhall.mp3",
        time: "5:30",
        link: "https://www.youtube.com/watch?v=hMy5za-m5Ew",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "jai jai shivshankar",
        artist: "Vishal Dadlani",
        image: "sources/images/16_jai_jai_shivshankar.jpg",
        path: "sources/songs/16_jai_jai_shivshankar.mp3",
        time: "3:52",
        link: "https://www.youtube.com/watch?v=oGneAab3e88",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "chogada tara",
        artist: "Darshan Raval, Asees Kaur",
        image: "sources/images/17_chogada_tara.jpg",
        path: "sources/songs/17_chogada_tara.mp3",
        time: "4:16",
        link: "https://www.youtube.com/watch?v=asYxxtiWUyw",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "psycho saiyaan",
        artist: "Dhvani Bhanushali, Tanishk Bagchi, Yazin Nizar",
        image: "sources/images/18_psycho_saiyaan.jpg",
        path: "sources/songs/18_psycho_saiyaan.mp3",
        time: "2:11",
        link: "https://www.youtube.com/watch?v=G81Ospnlctw",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "dilbar",
        artist: "Neha Kakkar, Dhvani Bhanushali, Ikka Singh",
        image: "sources/images/19_dilbar.jpg",
        path: "sources/songs/19_dilbar.mp3",
        time: "3:18",
        link: "https://www.youtube.com/watch?v=JFcgOboQZ08",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "paagal",
        artist: "Badshah",
        image: "sources/images/20_paagal.jpg",
        path: "sources/songs/20_paagal.mp3",
        time: "3:03",
        link: "https://www.youtube.com/watch?v=bdesdebUFLE",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "muqabla",
        artist: "Yash Narvekar, Parampara Thakur",
        image: "sources/images/21_muqabla.jpg",
        path: "sources/songs/21_muqabla.mp3",
        time: "3:02",
        link: "https://www.youtube.com/watch?v=l75z7FrYRXI",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "apna time aayega",
        artist: "Ranveer Singh",
        image: "sources/images/22_apna_time_aayega.jpg",
        path: "sources/songs/22_apna_time_aayega.mp3",
        time: "2:10",
        link: "https://www.youtube.com/watch?v=jFGKJBPFdUA",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "ek toh kum zindagani",
        artist: "Neha Kakkar, Yash Narvekar",
        image: "sources/images/23_ek_toh_kum_zindagani.jpg",
        path: "sources/songs/23_ek_toh_kum_zindagani.mp3",
        time: "3:17",
        link: "https://www.youtube.com/watch?v=a39rulFFJlM",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "first class",
        artist: "Arijit Singh, Neeti Mohan",
        image: "sources/images/24_first_class.jpg",
        path: "sources/songs/24_first_class.mp3",
        time: "5:02",
        link: "https://www.youtube.com/watch?v=e8B0AzmXPV8",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "genda phool",
        artist: "Badshah",
        image: "sources/images/25_genda_phool.jpg",
        path: "sources/songs/25_genda_phool.mp3",
        time: "2:53",
        link: "https://www.youtube.com/watch?v=SD4Z8dlZPd8",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "shaitan ka saala",
        artist: "Vishal Dadlani, Sohail Sen",
        image: "sources/images/26_shaitan_ka_saala.jpg",
        path: "sources/songs/26_shaitan_ka_saala.mp3",
        time: "2:09",
        link: "https://www.youtube.com/watch?v=oCBDl58lBoU",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "kaise hua",
        artist: "Vishal Mishra",
        image: "sources/images/27_kaise_hua.jpg",
        path: "sources/songs/27_kaise_hua.mp3",
        time: "4:14",
        link: "https://www.youtube.com/watch?v=WWXm39leYew",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "slow motion",
        artist: "Shreya Ghoshal, Nakash Aziz",
        image: "sources/images/28_slow_motion.jpg",
        path: "sources/songs/28_slow_motion.mp3",
        time: "4:32",
        link: "https://www.youtube.com/watch?v=8AedZtuoVSg",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "yaad piya ki aane lagi",
        artist: "Neha Kakkar",
        image: "sources/images/29_yaad_piya_ki_aane_lagi.jpeg",
        path: "sources/songs/29_yaad_piya_ki_aane_lagi.mp3",
        time: "4:36",
        link: "https://www.youtube.com/watch?v=_iPPtPlt-w8",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "tujhe kitna chahne lage",
        artist: "Arijit Singh",
        image: "sources/images/30_tujhe_kitna_chahne_lage.jpg",
        path: "sources/songs/30_tujhe_kitna_chahne_lage.mp3",
        time: "3:38",
        link: "https://www.youtube.com/watch?v=AgX2II9si7w",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "shayad",
        artist: "Arijit Singh",
        image: "sources/images/31_shayad.jpg",
        path: "sources/songs/31_shayad.mp3",
        time: "3:10",
        link: "https://www.youtube.com/watch?v=MJyKN-8UncM",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "lagdi lahore di",
        artist: "Guru Randhawa, Tulsi Kumar",
        image: "sources/images/32_lagdi_lahore_di.jpg",
        path: "sources/songs/32_lagdi_lahore_di.mp3",
        time: "3:23",
        link: "https://www.youtube.com/watch?v=L9pTBouRz68",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "the hook up song",
        artist: "Neha Kakkar, Shekhar Ravjiani",
        image: "sources/images/33_the_hook_up_song.jpg",
        path: "sources/songs/33_the_hook_up_song.mp3",
        time: "3:43",
        link: "https://www.youtube.com/watch?v=kdAOuXa33U8",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "mera wala dance",
        artist: "Neha Kakkar, Nakash Aziz",
        image: "sources/images/34_mera_wala_dance.jpg",
        path: "sources/songs/34_mera_wala_dance.mp3",
        time: "3:33",
        link: "https://www.youtube.com/watch?v=aa_MlHmb4QQ",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "tera yaar hu main",
        artist: "Arijit Singh",
        image: "sources/images/35_tera_yaar_hu_main.jpg",
        path: "sources/songs/35_tera_yaar_hu_main.mp3",
        time: "4:27",
        link: "https://www.youtube.com/watch?v=EatzcaVJRMs",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "kalank",
        artist: "Arijit Singh",
        image: "sources/images/36_kalank.jpg",
        path: "sources/songs/36_kalank.mp3",
        time: "5:13",
        link: "https://www.youtube.com/watch?v=Grr0FlC8SQA",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    },
    {
        name: "mere sohneya",
        artist: "Parampara Thakur, Sachet Tandon",
        image: "sources/images/37_mere_sohneya.jpg",
        path: "sources/songs/37_mere_sohneya.mp3",
        time: "3:11",
        link: "https://www.youtube.com/watch?v=Njq4A5DAqRw",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, maxime dolore veniam placeat unde sunt, veritatis soluta numquam culpa perferendis, delectus eum repellendus! Nostrum magni nesciunt ipsam facere aut libero quis itaque illo dolor nobis! Soluta animi deserunt aut."
    }
]

const pathName = (window.location.pathname).split('/').slice(-1)[0];
// console.log(pathName);
if (pathName == 'music') {

    track_list.forEach((obj, i) => {
        let num = (i + 1) < 10 ? "0" + (i + 1) : (i + 1);
        let html = `<a href="song" class="song">
                        <div>
                            <span class="number">${num}</span>
                            <div>
                                <h4>${obj.name}</h4>
                                <small>${obj.artist}</small>
                            </div>
                        </div>
                        <h5>${obj.time}</h5>
                    </a>`;
        music_list.insertAdjacentHTML("beforeend", html);
    });

} else {
    // get values from parmas
    // const urlSearchParams = new URLSearchParams(window.location.search);
    // const { id } = Object.fromEntries(urlSearchParams.entries());

    let updateTimer;
    let track_index = localStorage.getItem("id");
    let isPlaying = false;
    let repeat = false;
    let shuffled = false;

    // loads track details
    function loadTrack(track_index) {

        clearInterval(updateTimer);
        // reset values
        resetValues();

        curr_track.src = track_list[track_index].path;
        image.src = track_list[track_index].image;
        title.innerHTML = track_list[track_index].name;
        artist.innerHTML = track_list[track_index].artist;
        description.innerHTML = track_list[track_index].description;
        download.href = track_list[track_index].path;
        download.download = track_list[track_index].path;
        video.href = track_list[track_index].link;

        updateTimer = setInterval(seekUpdate, 1000);

        // if current track ends load next
        curr_track.addEventListener("ended", nextTrack);

        if (!isPlaying) {
            play__pause.innerHTML = '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 41.25C12.1444 41.25 3.75 32.8556 3.75 22.5C3.75 12.1444 12.1444 3.75 22.5 3.75C32.8556 3.75 41.25 12.1444 41.25 22.5C41.25 32.8556 32.8556 41.25 22.5 41.25ZM19.9163 15.7781C19.8034 15.7028 19.6723 15.6596 19.5368 15.6529C19.4013 15.6463 19.2665 15.6765 19.1468 15.7404C19.0272 15.8042 18.9271 15.8994 18.8572 16.0157C18.7873 16.1319 18.7503 16.265 18.75 16.4006V28.5994C18.7503 28.735 18.7873 28.8681 18.8572 28.9844C18.9271 29.1006 19.0272 29.1958 19.1468 29.2596C19.2665 29.3235 19.4013 29.3537 19.5368 29.3471C19.6723 29.3404 19.8034 29.2972 19.9163 29.2219L29.0644 23.1244C29.1673 23.0559 29.2516 22.9631 29.31 22.8542C29.3683 22.7452 29.3989 22.6236 29.3989 22.5C29.3989 22.3764 29.3683 22.2548 29.31 22.1458C29.2516 22.0369 29.1673 21.9441 29.0644 21.8756L19.9144 15.7781H19.9163Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="22.5" y1="3.75" x2="22.5" y2="41.25" gradientUnits="userSpaceOnUse"><stop stop-color="#61F4DE"/><stop offset="1" stop-color="#6E78FF"/></linearGradient></defs></svg>';
        }
    }
    loadTrack(track_index);

    // play__pause
    play__pause.addEventListener("click", function () {
        if (!isPlaying) {
            playTrack();
        }
        else {
            pauseTrack();
        }
    });

    // playTrack
    function playTrack() {
        curr_track.play();
        isPlaying = true;
        play__pause.innerHTML = '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 41.25C12.1444 41.25 3.75 32.8556 3.75 22.5C3.75 12.1444 12.1444 3.75 22.5 3.75C32.8556 3.75 41.25 12.1444 41.25 22.5C41.25 32.8556 32.8556 41.25 22.5 41.25ZM16.875 16.875V28.125H20.625V16.875H16.875ZM24.375 16.875V28.125H28.125V16.875H24.375Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="22.5" y1="3.75" x2="22.5" y2="41.25" gradientUnits="userSpaceOnUse"><stop stop-color="#61F4DE"/><stop offset="1" stop-color="#6E78FF"/></linearGradient></defs></svg>';
        // cd.style.animationPlayState = 'running';
    }

    // pauseTrack
    function pauseTrack() {
        curr_track.pause();
        isPlaying = false;
        play__pause.innerHTML = '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 41.25C12.1444 41.25 3.75 32.8556 3.75 22.5C3.75 12.1444 12.1444 3.75 22.5 3.75C32.8556 3.75 41.25 12.1444 41.25 22.5C41.25 32.8556 32.8556 41.25 22.5 41.25ZM19.9163 15.7781C19.8034 15.7028 19.6723 15.6596 19.5368 15.6529C19.4013 15.6463 19.2665 15.6765 19.1468 15.7404C19.0272 15.8042 18.9271 15.8994 18.8572 16.0157C18.7873 16.1319 18.7503 16.265 18.75 16.4006V28.5994C18.7503 28.735 18.7873 28.8681 18.8572 28.9844C18.9271 29.1006 19.0272 29.1958 19.1468 29.2596C19.2665 29.3235 19.4013 29.3537 19.5368 29.3471C19.6723 29.3404 19.8034 29.2972 19.9163 29.2219L29.0644 23.1244C29.1673 23.0559 29.2516 22.9631 29.31 22.8542C29.3683 22.7452 29.3989 22.6236 29.3989 22.5C29.3989 22.3764 29.3683 22.2548 29.31 22.1458C29.2516 22.0369 29.1673 21.9441 29.0644 21.8756L19.9144 15.7781H19.9163Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="22.5" y1="3.75" x2="22.5" y2="41.25" gradientUnits="userSpaceOnUse"><stop stop-color="#61F4DE"/><stop offset="1" stop-color="#6E78FF"/></linearGradient></defs></svg>';
        // cd.style.animationPlayState = 'paused';
    }

    body.addEventListener("keydown", (e) => {
        if (isPlaying && e.key === 'MediaPlayPause' || isPlaying && e.keyCode === 32) {
            isPlaying = false;
            play__pause.innerHTML = '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 41.25C12.1444 41.25 3.75 32.8556 3.75 22.5C3.75 12.1444 12.1444 3.75 22.5 3.75C32.8556 3.75 41.25 12.1444 41.25 22.5C41.25 32.8556 32.8556 41.25 22.5 41.25ZM19.9163 15.7781C19.8034 15.7028 19.6723 15.6596 19.5368 15.6529C19.4013 15.6463 19.2665 15.6765 19.1468 15.7404C19.0272 15.8042 18.9271 15.8994 18.8572 16.0157C18.7873 16.1319 18.7503 16.265 18.75 16.4006V28.5994C18.7503 28.735 18.7873 28.8681 18.8572 28.9844C18.9271 29.1006 19.0272 29.1958 19.1468 29.2596C19.2665 29.3235 19.4013 29.3537 19.5368 29.3471C19.6723 29.3404 19.8034 29.2972 19.9163 29.2219L29.0644 23.1244C29.1673 23.0559 29.2516 22.9631 29.31 22.8542C29.3683 22.7452 29.3989 22.6236 29.3989 22.5C29.3989 22.3764 29.3683 22.2548 29.31 22.1458C29.2516 22.0369 29.1673 21.9441 29.0644 21.8756L19.9144 15.7781H19.9163Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="22.5" y1="3.75" x2="22.5" y2="41.25" gradientUnits="userSpaceOnUse"><stop stop-color="#61F4DE"/><stop offset="1" stop-color="#6E78FF"/></linearGradient></defs></svg>';

            if (e.keyCode === 32) {
                pauseTrack();
            }
        } else if (!isPlaying && e.key === 'MediaPlayPause' || !isPlaying && e.keyCode === 32) {
            isPlaying = true;
            play__pause.innerHTML = '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 41.25C12.1444 41.25 3.75 32.8556 3.75 22.5C3.75 12.1444 12.1444 3.75 22.5 3.75C32.8556 3.75 41.25 12.1444 41.25 22.5C41.25 32.8556 32.8556 41.25 22.5 41.25ZM16.875 16.875V28.125H20.625V16.875H16.875ZM24.375 16.875V28.125H28.125V16.875H24.375Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="22.5" y1="3.75" x2="22.5" y2="41.25" gradientUnits="userSpaceOnUse"><stop stop-color="#61F4DE"/><stop offset="1" stop-color="#6E78FF"/></linearGradient></defs></svg>';

            if (e.keyCode === 32) {
                playTrack();
            }
        }
    });

    // prev
    function prevTrack() {
        if (track_index > 0) {
            track_index--;
        }
        else {
            // last track = track_list.lenght -1
            track_index = track_list.length - 1;
        }
        localStorage.setItem('id', track_index);

        loadTrack(track_index);
        playTrack();
    };
    prev.addEventListener('click', prevTrack);

    // next
    function nextTrack() {
        if (repeat) {
            track_index = track_index;
        } else if (shuffled) {
            track_index = Math.round((Math.random() * 40));
        } else {
            // last track = track_list.lenght -1
            if (track_index < track_list.length - 1) {
                track_index++;
            }
            else {
                track_index = 0
            }
        }
        localStorage.setItem('id', track_index);

        loadTrack(track_index);
        playTrack();
    };
    next.addEventListener('click', nextTrack);

    // seekTo
    function seekTo(e) {
        let width = this.clientWidth;
        let clickX = e.offsetX;
        let duration = curr_track.duration;
        // update seek
        curr_track.currentTime = (clickX / width) * duration;
    }
    time__line__box.addEventListener('click', seekTo);

    // seekUpdate pre sec
    function seekUpdate() {
        time__line.style.width = `${(curr_track.currentTime * 100) / curr_track.duration}%`;

        // total time
        let totalMin = Math.floor(curr_track.duration / 60);
        let totalSec = Math.floor(curr_track.duration - totalMin * 60);

        // current time
        let currMin = Math.floor(curr_track.currentTime / 60);
        let currSec = Math.floor(curr_track.currentTime - currMin * 60);

        // Add a zero to the single digit time values
        if (currMin < 10) { currMin = "0" + currMin; }
        if (currSec < 10) { currSec = "0" + currSec; }
        if (totalMin < 10) { totalMin = "0" + totalMin; }
        if (totalSec < 10) { totalSec = "0" + totalSec; }

        // update time
        total_min.innerText = totalMin;
        total_sec.innerText = totalSec;
        current_min.innerText = currMin;
        current_sec.innerText = currSec;
    }

    // reset all values
    function resetValues() {
        // time line
        time__line.style.width = 0;

        // total
        total_min.innerText = "00";
        total_sec.innerText = "00";
        // remain
        current_min.innerText = "00";
        current_sec.innerText = "00";
    }

    // repeat
    repeat_one.addEventListener('click', () => {
        if (repeat) {
            repeat = false;
            repeat_one_svg.style.fill = '#ABABAB';
        } else {
            repeat = true;
            repeat_one_svg.style.fill = '#000000';
            if (shuffled) {
                shuffled = false;
                shuffle_svg.style.fill = '#ABABAB';
            }
        }
    });

    // shuffle
    shuffle.addEventListener('click', () => {
        if (shuffled) {
            shuffled = false;
            shuffle_svg.style.fill = '#ABABAB';
        } else {
            shuffled = true;
            shuffle_svg.style.fill = '#000000';
            if (repeat) {
                repeat = false;
                repeat_one_svg.style.fill = '#ABABAB';
            }
        }
    });
}

// play this song
const song = document.querySelectorAll(".song");
song.forEach((s, i) => {
    s.addEventListener('click', () => {
        localStorage.setItem('id', i);
    });
});