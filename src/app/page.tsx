'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tv, Film, BookOpen, Trophy, Video, DollarSign, ChevronRight, X, Info, Moon, Sun, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import { useTheme } from "next-themes"



export default function Where2Watch() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [highlightedCard, setHighlightedCard] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [expandedSport, setExpandedSport] = useState<string | null>(null)

  const words = ["Movies", "Anime", "Sports", "Manga", "LiveTV"]; //FlipWords

  useEffect(() => {
    setMounted(true)
    setTheme('dark') // Set the default theme to dark
  }, [setTheme])

  const toggleCard = (title: string) => {
    setExpandedCard(expandedCard === title ? null : title)
    if (expandedCard === null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  const toggleSport = (sport: string) => {
    setExpandedSport(expandedSport === sport ? null : sport)
  }

  const featuredCategories = [
    {
      title: "Manga",
      subtitle: "Streaming Services",
      icon: <Film className="h-6 w-6" />,
      bgColor: "bg-red-500",
      rating: "4.8",
      image: "/manga/card.png?height=200&width=200",
      targetSection: "Manga",
    },
    {
      title: "Anime",
      subtitle: "Japanese Animation",
      icon: <Tv className="h-6 w-6" />,
      bgColor: "bg-cyan-500",
      rating: "4.7",
      image: "/anime/card.png?height=200&width=200",
      targetSection: "Anime",
    },
    {
      title: "Live TV",
      subtitle: "Live Events",
      icon: <Trophy className="h-6 w-6" />,
      bgColor: "bg-green-500",
      rating: "4.5",
      image: "/livetv/card.png",
      targetSection: "Live TV",
    },
    {
      title: "Sports",
      subtitle: "Comic Books",
      icon: <BookOpen className="h-6 w-6" />,
      bgColor: "bg-purple-500",
      rating: "4.6",
      image: "/sports/card.png?height=200&width=200",
      targetSection: "Sports",
    },
    {
      title: "Movies",
      subtitle: "Movies & TV Shows",
      icon: <Video className="h-6 w-6" />,
      bgColor: "bg-blue-500",
      rating: "4.3",
      image: "/movies/card.png?height=800&width=300",
      targetSection: "Movies & TV Shows",
    },
  ]

  const categories = [
    {
      title: "Movies & TV Shows",
      icon: <Film className="h-6 w-6" />,
      buttons: [
        {  url: "https://fmoviesreview.online/movies/", image: "/movies/fmovies.png" },
        {  url: "https://ww14.soap2dayhd.co/home/", image: "/movies/s2d.png" },
        {  url: "https://freek.to/", image: "/movies/binged.png" },
      ],
      moreButtons: [
        {  url: "https://fmovies-hd.to/home/", image: "/movies/fmovies.png" },
        {  url: "https://ww14.soap2dayhd.co/home/", image: "/movies/s2d.png" },
        {  url: "https://freek.to/", image: "/movies/binged.png" },
        {  url: "https://www.vidbinge.com/", image: "/movies/vidbinge.png" },
        {  url: "https://novafork.com/", image: "/movies/novafork.png" },
        {  url: "https://www.popcornmovies.to/home", image: "/movies/popcorn_movies.png" },
        {  url: "https://www.braflix.gd/", image: "/movies/braflix.png" },
        {  url: "https://rivestream.live/", image: "/movies/rive.png" },
        {  url: "https://flixwave.watch/home/", image: "/movies/flixwave.png" },
        {  url: "https://bflix.sh/home/", image: "/movies/bflix.png" },
      ],
    },
    {
      title: "Anime",
      icon: <Tv className="h-6 w-6" />,
      buttons: [
        {  url: "https://hianime.to/home", image: "/anime/hanime.png" },
        {  url: "https://aniwatchtv.to/home", image: "/anime/aniwatch.png" },
        {  url: "https://anicrush.to/home", image: "/anime/anicrush.png" },
      ],
      moreButtons: [
        {  url: "https://hianime.to/home", image: "/anime/hanime.png" },
        {  url: "https://aniwatchtv.to/home", image: "/anime/aniwatch.png" },
        {  url: "https://anicrush.to/home", image: "/anime/anicrush.png" },
        {  url: "https://www1.kickassanime.mx/anime", image: "/anime/kaa.png" },
        {  url: "https://kaido.to/home", image: "/anime/kaido.png" },
        {  url: "https://rivekun.rivestream.live/", image: "/anime/rivekun.png" },
      ],
    },
    {
      title: "Manga",
      icon: <BookOpen className="h-6 w-6" />,
      buttons: [
        { url: "https://mangareader.to/home", image: "/manga/mangareader.png" },
        { url: "https://mangadex.org/", image: "/manga/mangadex.png" },
        { url: "https://comick.io/home2", image: "/manga/comick.png" },
      ],
      moreButtons: [
        { url: "https://mangareader.to/home", image: "/manga/mangareader.png" },
        { url: "https://mangadex.org/", image: "/manga/mangadex.png" },
        { url: "https://comick.io/home2", image: "/manga/comick.png" },
        { url: "https://allmanga.to/manga?cty=ALL", image: "/manga/allmanga.png" },
      ],
    },
    {
      title: "Sports",
      icon: <Trophy className="h-6 w-6" />,
      buttons: [
        { url: "https://en12.sportplus.live/", image: "/sports/sportplus.png" },
        { url: "https://v2.sportsurge.net/home4/", image: "/sports/sportsurge.png" },
        { url: "https://totalsportek.best/", image: "/sports/totalsportek.png" },
      ],
      moreButtons: [
        {  url: "https://en12.sportplus.live/", image: "/sports/sportplus.png" },
        {  url: "https://v2.sportsurge.net/home4/", image: "/sports/sportsurge.png" },
        {  url: "https://v3.streameast.to/", image: "/sports/streameast.png" },
        {  url: "https://totalsportek.pro", image: "/sports/totalsportek.png" },
      ],
    },
    {
      title: "Live TV",
      icon: <Video className="h-6 w-6" />,
      buttons: [
        {  url: "https://tv247.us/all-channels/", image: "/livetv/tv24.png" },
        {  url: "https://www.braflix.gd/livestream", image: "/livetv/braflixlive.png" },
        {  url: "https://usatvgo.live/", image: "/livetv/usatvgo.png" },
      ],
      moreButtons: [
        {  url: "https://tv247.us/all-channels/", image: "/livetv/tv24.png" },
        {  url: "https://www.braflix.gd/livestream", image: "/livetv/braflixlive.png" },
        {  url: "https://usatvgo.live/", image: "/livetv/usatvgo.png" },
      ],
    },
    {
      title: "Paid Alternatives",
      icon: <DollarSign className="h-6 w-6" />,
      buttons: [
        { url: "https://www.netflix.com", image: "/paid/netflix.png" },
        { url: "https://www.primevideo.com", image: "/paid/prime.png" },
        { url: "https://www.hulu.com", image: "/paid/hulu.png" },
      ],
      moreButtons: [
        { url: "https://www.netflix.com", image: "/paid/netflix.png" },
        { url: "https://www.primevideo.com", image: "/paid/prime.png" },
        { url: "https://www.disneyplus.com", image: "/paid/disneyplus.png" },
        { url: "https://www.apple.com/apple-tv-plus", image: "/paid/appletvplus.png" },
        { url: "https://www.hbomax.com", image: "/paid/hbo.png" },
        { url: "https://www.peacocktv.com", image: "/paid/peacock.png" },
        { url: "https://www.hulu.com", image: "/paid/hulu.png" },
        { url: "https://www.paramountplus.com", image: "/paid/paramountplus.png" },
        { url: "https://www.discoveryplus.com", image: "/paid/discoveryplus.png" },
      ],
    },
  ]

 const footballSites = [
  { label: "GXR World", url: "https://www.gxr.world/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Footem", url: "https://www.footem.site/?m=1", image: "/placeholder.svg?height=60&width=120" },
  { label: "Epic Sports", url: "https://www.epicsports.me/?m=1", image: "/placeholder.svg?height=60&width=120" },
  { label: "Quorl", url: "https://www.quorl.site/?m=1", image: "/placeholder.svg?height=60&width=120" },
  { label: "90Live", url: "https://www.90live.in/?m=1", image: "/placeholder.svg?height=60&width=120" },
  { label: "StreamSport", url: "https://www.streamsport.in/?m=1", image: "/placeholder.svg?height=60&width=120" },
  { label: "SportsTrack", url: "https://www.sportstrack.in/?m=1", image: "/placeholder.svg?height=60&width=120" },
  { label: "Libre Futbol", url: "https://librefutbol.su/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Live Epic Sports", url: "https://live.epicsportss.com/?m=1", image: "/placeholder.svg?height=60&width=120" },
  { label: "B4X Sports Live TV", url: "https://b4xsportslivetv.blogspot.com/?m=1", image: "/placeholder.svg?height=60&width=120" },
  { label: "SportSurge", url: "https://sportsurge.club/", image: "/placeholder.svg?height=60&width=120" },
  { label: "FootyBite", url: "https://footybite.to/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Soccer Online", url: "https://socceronline.me/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Score808", url: "https://score808.us/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Yalla Shoot", url: "https://shootz.yalla-shoot-tv.live/home18/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Koora Live", url: "https://kooora.live-koora.live/", image: "/placeholder.svg?height=60&width=120" },
  { label: "TotalSportek", url: "https://totalsportek.pro/", image: "/placeholder.svg?height=60&width=120" },
  { label: "VIP Box", url: "https://vip-box.tv/", image: "/placeholder.svg?height=60&width=120" },
  { label: "VIP Stand", url: "https://vipstand.one/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Live Sports 088", url: "https://www.livesports088.com/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Live Soccer TV", url: "https://www.livesoccertv.com/", image: "/placeholder.svg?height=60&width=120" }
];
const footballReplay = [
  { label: "Soccer Full Match", url: "https://soccerfullmatch.com/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Footy Replay", url: "https://footyreplay.com/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Soccer Full Replay", url: "https://soccerfullreplay.com/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Soccer Catch", url: "https://soccercatch.com/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Footy Full", url: "https://footyfull.com/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Full Replays", url: "https://www.fullreplays.com/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Full Match Info", url: "https://fullmatch.info/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Sport Universal TV", url: "https://sportuniversaltv.com/", image: "/placeholder.svg?height=60&width=120" },
  { label: "HooFoot", url: "https://hoofoot.com/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Time Soccer TV", url: "https://timesoccertv.com/full-matches-and-shows-highlights/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Footballia", url: "https://footballia.net", image: "/placeholder.svg?height=60&width=120" },
  { label: "Full Match Sports", url: "https://fullmatchsports.cc/?tab=fullmatch", image: "/placeholder.svg?height=60&width=120" },
  { label: "Full Match Replay", url: "https://fullmatchsreplay.com/", image: "/placeholder.svg?height=60&width=120" },
  { label: "Football Orgin", url: "https://www.footballorgin.com/", image: "/placeholder.svg?height=60&width=120" }
];

const cricketSites = [
  { label: "IPL Watchcric", url: "https://ipl.watchcric.com/video/ipl-2025-live-stream-english", image: "/placeholder.svg?height=60&width=120" },
  { label: "Cricem", url: "https://www.cricem.com/", image: "/placeholder.svg?height=60&width=120" },
  { label: "CricHD", url: "http://crichd.vip/", image: "/placeholder.svg?height=60&width=120" },
]

  const scrollToSection = (title: string) => {
    const element = document.getElementById(title)
    if (element) {
      const yOffset = -80; // Adjust this value based on your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
    setActiveSection(title)
    setHighlightedCard(title)
    setTimeout(() => setHighlightedCard(null), 1000) // Remove highlight after 2 seconds
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust this value as needed
      for (const category of categories) {
        const element = document.getElementById(category.title);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= scrollPosition && bottom > scrollPosition) {
            setActiveSection(category.title);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories]);

  return (
    <BackgroundLines className="min-h-screen bg-background text-foreground flex flex-col">
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 bg-background border-b border-border z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold">Where2Watch</div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-4">
                {categories.map((category) => (
                  <motion.div
                    key={category.title}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant={activeSection === category.title ? "default" : "ghost"}
                      onClick={() => scrollToSection(category.title)}
                      className={`transition-colors duration-300 ${
                        activeSection === category.title ? "bg-primary text-primary-foreground" : ""
                      }`}
                    >
                      {category.title}
                    </Button>
                  </motion.div>
                ))}
              </div>
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8 flex-grow">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your One Stop for <FlipWords words={words} /></h1>
        <p className="text-xl text-muted-foreground">Free streaming platforms for all your favorite content in one place.</p>
      </div>
      <div className="flex flex-wrap xl:flex-nowrap flex-col md:flex-row items-center justify-center mx-auto mb-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 mb-8 md:mb-0 md:mt-20"
        >
        

        {/* Hero Section with Nintendo-style Cards */}
        <div className="mb-20 mt-8 relative mx-auto max-w-5xl">
          {/* <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Entertainment Hub</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be sure to try our selection of streaming services, we have carefully chosen them. There are options for
              all tastes!
            </p>
          </div> */}

          <div className="relative h-[300px] md:h-[350px] mx-auto max-w-5xl">
            {featuredCategories.map((category, index) => {
              // Calculate position for each card
              const offset = index - Math.floor(featuredCategories.length / 2)
              const xOffset = offset * 70; // Horizontal spacing
              const scale = 1 - Math.abs(offset) * 0.05; // Adjusted scaling
              const rotation = offset * 4 // Slight rotation for each card

              const tiltAngle = offset * 10; // More spread effect
              const translateY = Math.abs(offset) * 10; // Adjust Y position for depth
              // const scale = index === Math.floor(featuredCategories.length / 2) ? 1.1 : 1

              return (
                <motion.div
                  key={category.title}
                  className={`absolute top-0 left-1/2 w-[260px] h-[360px] rounded-3xl overflow-hidden cursor-pointer ${category.bgColor} shadow-xl`}
                  style={{
                    originX: 0.5,
                    originY: 0.5,
                  }}
                  initial={{
                    x: -130 + xOffset,
                    rotateZ: tiltAngle, // Rotating the cards
                    translateY: translateY, // Adding depth
                    scale: scale,
                    // x: -110 + xOffset,
                    // rotateY: rotation,
                    // scale: scale,
                    // zIndex: zIndex,
                  }}
                  whileHover={{
                    scale: scale * 1.08,
                    transition: { duration: 0.2 },
                    // scale: scale * 1.05,
                    // zIndex: 40,
                    // transition: { duration: 0.2 },
                  }}
                  onClick={() => scrollToSection(category.targetSection)}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                        <p className="text-sm text-white/80">{category.subtitle}</p>
                      </div>
                      <div className="flex items-center bg-white/20 px-2 py-1 rounded-full">
                        <Star className="h-3 w-3 text-white mr-1" fill="white" />
                        <span className="text-xs text-white">{category.rating}</span>
                      </div>
                    </div>
                    <div className="flex-grow flex items-center justify-center">
                      <div className="relative w-32 h-32">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          layout="fill"
                          objectFit="contain"
                          className="drop-shadow-lg scale-[3.00] bottom-10 "
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
              
          </motion.div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ml-auto">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
              <h2>Watch More Search Less.</h2>
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                For the best experience, we recommend using Brave Browser or an Ad Blocker when visiting the links below.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/v2.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Ad blocker illustration"
                  unoptimized
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://brave.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try Brave Browser →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://adblockplus.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Ad Blocker
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              id={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full transition-all duration-300 ${highlightedCard === category.title ? 'ring-4 ring-primary shadow-lg' : ''} dark:bg-gray-800`}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {category.icon}
                    <span>{category.title}</span>
                  </CardTitle>
                  <CardDescription>
                    Explore {category.title.toLowerCase()} content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Click below to visit popular {category.title.toLowerCase()}.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {category.buttons.map((button, buttonIndex) => (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + buttonIndex * 0.05 }}
                      >
                        <Link
                          href={button.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="relative flex justify-center items-center w-full h-auto overflow-hidden rounded-lg shadow-md bg-gray-200 dark:bg-gray-700">
                            <Image
                              alt={button.url}
                              src={button.image}
                              height={60}
                              width={130}
                              className="transition-opacity object-contain hover:opacity-80"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => toggleCard(category.title)} className="w-full">
                    View More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="bg-background border-t border-border mt-12 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground text-center md:text-left mb-4 md:mb-0">
              Disclosure: This page simply provides links. None of the content is hosted or contained on this page, it serves purely as a text-based reference. Share Responsibly.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-sm text-muted-foreground">
                Made with ❤️ in Calcutta
              </p>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {expandedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background bg-opacity-90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-lg shadow-xl"
            >
              <Card className="h-full dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      {categories.find(c => c.title === expandedCard)?.icon}
                      <span>{expandedCard} - More Options</span>
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCard(expandedCard)}
                      aria-label="Close expanded card"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {categories.find(c => c.title === expandedCard)?.moreButtons.map((button, buttonIndex) => (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: buttonIndex * 0.1 }}
                      >
                        <Link
                          href={button.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="relative w-full h-0 pb-[50%] overflow-hidden rounded-lg shadow-md">
                            <Image
                              alt={button.url}
                              src={button.image}
                              layout="fill"
                              objectFit="cover"
                              className="transition-opacity hover:opacity-80"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  {expandedCard === "Sports" && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Popular Sports</h3>
                      <div className="flex flex-wrap gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleSport("Football")}
                          className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-colors duration-200 ${
                            expandedSport === "Football"
                            ? "bg-amber-400 text-black"
                              : "bg-gray-800 text-gray-200 hover:bg-gray-700"
                          }`}
                        >
                          {expandedSport === "Football" ? <span className="text-black">✓</span> : <span>+</span>}
                          <span className="font-medium">Football</span>
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleSport("Cricket")}
                          className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-colors duration-200 ${
                            expandedSport === "Cricket"
                              ? "bg-amber-400 text-black"
                              : "bg-gray-800 text-gray-200 hover:bg-gray-700"
                          }`}
                        >
                          {expandedSport === "Cricket" ? <span className="text-black">✓</span> : <span>+</span>}
                          <span className="font-medium">Cricket</span>
                        </motion.button>
                      </div>

                      <AnimatePresence>
                        {expandedSport === "Football" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 overflow-hidden"
                          >
                            <Card className="bg-background dark:bg-black">
                              <CardHeader>
                                <CardTitle className="text-lg">Live Football</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                  {footballSites.map((site, index) => (
                                    <motion.div
                                      key={site.label}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                      <Button
                                        variant="outline"
                                        className="w-full h-full text-sm font-medium transition-all hover:bg-primary hover:bg-black hover:text-yellow-400"
                                        asChild
                                      >
                                        <Link
                                          href={site.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center justify-center py-2"
                                        >
                                          {site.label}
                                        </Link>
                                      </Button>
                                    </motion.div>
                                  ))}
                                </div>
                                
                              </CardContent>
                              <CardHeader>
                                <CardTitle className="text-lg"> Replay & Highlights </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                  {footballReplay.map((site, index) => (
                                    <motion.div
                                      key={site.label}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                      <Button
                                        variant="outline"
                                        className="w-full h-full text-sm font-medium transition-all hover:bg-primary hover:bg-black hover:text-yellow-400"
                                        asChild
                                      >
                                        <Link
                                          href={site.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center justify-center py-2"
                                        >
                                          {site.label}
                                        </Link>
                                      </Button>
                                    </motion.div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        )}
                        {expandedSport === "Cricket" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 overflow-hidden"
                          >
                            <Card className="bg-background">
                              <CardHeader>
                                <CardTitle className="text-lg">Cricket Streaming Sites</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                  {cricketSites.map((site, index) => (
                                    <motion.div
                                      key={site.label}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                      <Button
                                        variant="outline"
                                        className="w-full h-full text-sm font-medium transition-all hover:bg-primary hover:bg-black hover:text-yellow-400"
                                        asChild
                                      >
                                        <Link
                                          href={site.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center justify-center py-2"
                                        >
                                          {site.label}
                                        </Link>
                                      </Button>
                                    </motion.div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </BackgroundLines>
  )
}