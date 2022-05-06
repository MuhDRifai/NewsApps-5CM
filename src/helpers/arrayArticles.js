import authorPic from "../assets/profile.jpg";
import author2 from "../assets/profile2.jpg";
import author3 from "../assets/profile3.jpg";
import articlePic1 from "../assets/survival.jpg";
import articlePic2 from "../assets/navigasi-darat-1.jpg";
import articlePic3 from "../assets/Perlengkapan.jpg";
import articlePic4 from "../assets/acdc.jpg";
import articlePic5 from "../assets/firstaid.jpg";
import articlePic6 from "../assets/baajir.jpg";

export const articles = [
  {
    id: 1,
    titleArticle: "SURVIVAL",
    descriptionArticle:
      "Survival or survival is the ability to survive in a condition or situation. Defense of life can also be interpreted as a technique or science in dealing with various threats to personal safety.",
    imageArticle: articlePic1,
    author: "Muhamad Rifai",
    authorUsername: "Rifai23",
    authorPicture: authorPic,
    content: {
      paragraf1:
        "In survival techniques, the term STOP is known. If translated, this term is an abbreviation of stop, thinking, observation, and planning.",
      paragraf2:
        "This is the stage to start survival. When we get lost, for example, we have to stop for a moment, then start thinking and observing our surroundings",
    },
    category: "Education",
    createdAt: "Mar 20, 2022"
  },
  {
    id: 2,
    titleArticle: "Land navigation",
    descriptionArticle:
      "the importance of land navigation for adventurers",
    imageArticle: articlePic2,
    author: "Muhamad Rifai",
    authorUsername: "Rifai23",
    authorPicture: authorPic,
    content: {
      paragraf1:
        "Navigation can be interpreted as a direction guide. Knowledge is very important and must be mastered, at least understood if you like adventure.",
      paragraf2:
        "The science of navigation becomes very important in outdoor exploration activities because the direction is very crucial when exploring. By knowing the science of navigation, we can also minimize the occurrence of 'lost'.",
    },
    category: "Education",
    createdAt: "Mar 20, 2022"
  },
  {
    id: 3,
    titleArticle: "mountain climbing equipment",
    descriptionArticle:
      "Equipment for climbing mountains or activities in the wild is something that is very important to bring, don't let it be too small or not take it",
    imageArticle: articlePic3,
    author: "Rahmad Rifai",
    authorUsername: "RR23",
    authorPicture: author2,
    content: {
      paragraf1:
        "There are lots of mountain climbing equipment, but you have to carry it with you to prevent something unwanted",
      paragraf2:
        "The first equipment is: tents, mountain jackets, first aid kits, gravel, mattresses, mountain shoes and so on",
    },
    category: "Equiment",
    createdAt: "Mar 22, 2022"
  },
  {
    id: 4,
    titleArticle: "the history of Indonesian nature activists",
    descriptionArticle:
      "the beginning of the formation of Indonesian nature lovers",
    imageArticle: articlePic4,
    author: "Muhamad Rifai",
    authorUsername: "Rifai",
    authorPicture: authorPic,
    content: {
      paragraf1:
        "The history of Nature Lovers in Indonesia is with the formation of 'Perkumpulan Petjinta Alam', initiated by Awibowo in October 1953 in Yogyakarta.",
      paragraf2:
        "Then the term Nature Lovers was popularized by students at the University of Indonesia. Mapala UI in 1964.",
      paragraf3:
        "The characters are Soe Hok Gie, Herman Lantang, Aristides Katopo, etc. After that the development of groups of nature lovers developed very rapidly."
    },
    category: "History",
    createdAt: "Mar 29, 2022"
  },
  {
    id: 5,
    titleArticle: "PPGD",
    descriptionArticle:
      "emergency first aid",
    imageArticle: articlePic5,
    author: "Rosinante",
    authorUsername: "Rosinante23",
    authorPicture: author3,
    content: {
      paragraf1:
        "PPGD stands for Emergency First Aid, which is first aid given to victims of accidents or due to sudden illness which is carried out quickly and precisely before the victim receives further help from the hospital.",
    },
    category: "Education",
    createdAt: "Mar 20, 2022"
  },
  {
    id: 6,
    titleArticle: "Natural disaster management",
    descriptionArticle:
      "volunteers from PMI Lebak Banten help to cope with natural disasters",
    imageArticle: articlePic6,
    author: "ikhwan",
    authorUsername: "ikhwan23",
    authorPicture: authorPic,
    content: {
      paragraf1:
        "volunteers from PMI Lebak Banten help residents affected by landslides and floods in the Lebak Banten area",
    },
    category: "Humanitarian action",
    createdAt: "Apr 1, 2022"
  }
];
