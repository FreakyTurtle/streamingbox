import sling from './logos/sling.png'
import peacock from './logos/peacock.png'
import nbcsports from './logos/nbcsports.png'
import netflix from './logos/netflix.png'
import btsport from './logos/btsport.png'
import iplayer from './logos/iplayer.png'
import itv from './logos/itv.png'
import channel4 from './logos/channel4.png'
import disneyplus from './logos/disneyplus.png'
import primevideo from './logos/primevideo.png'
import apple from './logos/appletvplus.png'
import discovery from './logos/discovery.png'
import youtube from './logos/youtube.png'

export enum Category {
  sport = "Sport",
  entertainment = "Entertainment",
  movies = "Movies",
  casual = "Casual",
  documentaries = "Documentaries",
  livetv = "Live TV",
  american = "American TV",
  british = "British TV"
}

export interface IChannel {
  name: string
  link: string
  categories: Category[],
  logo: string
}

export const ChannelList: IChannel[] = [
    {
      name: "Sling TV",
      logo: sling,
      link: "https://watch.sling.com/browse/my-tv",
      categories: [
        Category.livetv,
        Category.sport,
        Category.entertainment,
        Category.american
      ]
    },
    {
      name: "NBC Peacock",
      logo: peacock,
      link: "https://www.peacocktv.com/watch/home",
      categories: [
        Category.livetv,
        Category.sport,
        Category.entertainment,
        Category.movies,
        Category.american
      ]
    },
    {
      name: "NBC Sports",
      logo: nbcsports,
      link: "https://www.nbcsports.com/live",
      categories: [
        Category.livetv,
        Category.sport,
        Category.american
      ]
    },
    {
      name: "Netflix",
      logo: netflix,
      link: "https://netflix.com",
      categories: [
        Category.movies,
        Category.entertainment,
        Category.documentaries,
        Category.british
      ]
    },
    {
      name: "BT Sport",
      logo: btsport,
      link: "https://www.bt.com/sport/watch",
      categories: [
        Category.livetv,
        Category.sport,
        Category.british
      ]
    },
    {
      name: "BBC iPlayer",
      logo: iplayer,
      link: "https://bbc.co.uk/iplayer",
      categories: [
        Category.british,
        Category.documentaries,
        Category.livetv,
        Category.entertainment
      ]
    },
    {
      name: "ITV",
      logo: itv,
      link: "https://itv.com",
      categories: [
        Category.british,
        Category.livetv,
        Category.entertainment
      ]
    },
    {
      name: "Channel 4",
      logo: channel4,
      link: "https://www.channel4.com/",
      categories: [
        Category.british,
        Category.entertainment
      ]
    },
    {
      name: "Disney +",
      logo: disneyplus,
      link: "https://www.disneyplus.com/",
      categories: [
        Category.british,
        Category.movies,
        Category.documentaries,
        Category.entertainment
      ]
    },
    {
      name: "Amazon Prime Video",
      logo: primevideo,
      link: "https://www.amazon.co.uk/Instant-Video/",
      categories: [
        Category.british,
        Category.movies,
        Category.documentaries,
        Category.entertainment
      ]
    },
    {
      name: "Apple TV+",
      logo: apple,
      link: "https://www.apple.com/uk/apple-tv-plus/",
      categories: [
        Category.british,
        Category.movies,
        Category.entertainment
      ]
    },
    {
      name: "Discovery +",
      logo: discovery,
      link: "https://www.discoveryplus.co.uk/",
      categories: [
        Category.british,
        Category.documentaries,
      ],
    },
    {
      name: "Youtube",
      logo: youtube,
      link: "https://youtube.com",
      categories: [
        Category.british,
        Category.casual,
        Category.entertainment
      ]
    }
]

export const colours = {
  primary: "#0a1929",
  secondary: "#001e3c",
  accent: "#66b2ff",
  text: "#f3f6f9",
  textalt: "#aab4be"
}