import { motion } from "framer-motion"
import Head from "next/head"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

interface AnimeEntry {
  title: string
  titleJp: string
  year: number
  genre: string[]
  imageUrl: string
  rating: number
  review: string
}

interface Character {
  name: string
  nameJp: string
  anime: string
  imageUrl: string
  description: string
  reasons: string[]
}

export default function AnimePage() {
  const favoriteAnime: AnimeEntry[] = [
    {
      title: "Mahouka Koukou no Yuutousei",
      titleJp: "魔法科高校の優等生",
      year: 2014,
      genre: ["Action", "Sci-Fi", "Magic", "School"],
      imageUrl: "/img/anime/mahou.jpg",
      rating: 9.69,
      review:
        "A refreshing perspective on the 'Mahouka' universe, this spin-off follows Miyuki Shiba's journey as the 'Honor Student'. It brilliantly balances elegant character moments with the series' signature high-tech magical action.",
    },
    {
      title: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
      titleJp: "時々ボソッとロシア語でデレる隣のアーリャさん",
      year: 2024,
      genre: ["Romantic Comedy", "School", "Slice of Life"],
      imageUrl: "/img/anime/alya.jpg",
      rating: 8.7,
      review:
        "A charming and hilarious romantic comedy built on a brilliant premise. The dynamic of Alya's 'secret' Russian confessions and Masachika's hidden understanding makes for an incredibly sweet and engaging watch.",
    },
  ]

  const favoriteCharacters: Character[] = [
    {
      name: "Shiba Miyuki",
      nameJp: "司波 深雪",
      anime: "Mahouka Koukou no Yuutousei",
      imageUrl: "/img/anime/miyuki.png",
      description:
        "Phoebe, an Acolyte of the Order of the Deep, always carries herself with warmth and grace. Devout and steadfast in her adherence to the Order's doctrines, she embodies exceptional self-discipline. Yet beneath her composed exterior burns a vibrant spirit, alight with heartfelt joy for all she holds dear.",
      reasons: [
        "Silly girl and kawaii ",
        "Her journey of emotional growth",
        "The way she learns to understand love",
        "Her dedication to helping others",
      ],
    },
    {
      name: "Kamisato Ayaka",
      nameJp: "神里綾華",
      anime: "Genshin Impact",
      imageUrl: "/img/anime/ayaka.png",
      description:
        "Phoebe, an Acolyte of the Order of the Deep, always carries herself with warmth and grace. Devout and steadfast in her adherence to the Order's doctrines, she embodies exceptional self-discipline. Yet beneath her composed exterior burns a vibrant spirit, alight with heartfelt joy for all she holds dear.",
      reasons: [
        "Silly girl and kawaii ",
        "Her journey of emotional growth",
        "The way she learns to understand love",
        "Her dedication to helping others",
      ],
    },
    {
      name: "Phoebe",
      nameJp: "菲比",
      anime: "Wuthering waves",
      imageUrl: "/img/anime/phoebe.png",
      description:
        "Phoebe, an Acolyte of the Order of the Deep, always carries herself with warmth and grace. Devout and steadfast in her adherence to the Order's doctrines, she embodies exceptional self-discipline. Yet beneath her composed exterior burns a vibrant spirit, alight with heartfelt joy for all she holds dear.",
      reasons: [
        "Silly girl and kawaii ",
        "Her journey of emotional growth",
        "The way she learns to understand love",
        "Her dedication to helping others",
      ],
    },
  ]

  const animeOfTheYear: AnimeEntry[] = [
    {
      title: "Sono Bisque Doll wa Koi wo Suru Season 2",
      titleJp: "葬送のフリーレン",
      year: 2023,
      genre: ["Romance", "SOL", "School life"],
      imageUrl: "/img/anime/marin.jpg",
      rating: 8.2,
      review:
        "A beautiful meditation on life, time, and the meaning we find in our journeys and connections.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-animeBg-dark to-animeBg-light">
      <Head>
        <title>My Anime World | HyadaYada</title>
        <meta
          name="description"
          content="Explore my favorite anime, characters, and yearly top picks"
        />
      </Head>

      <Header finishedLoading={true} sectionsRef={null} />

      <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-anime font-bold anime-text-gradient mb-4">
            My Anime World
          </h1>
          <p className="text-animeText text-lg md:text-xl max-w-2xl mx-auto">
            Welcome to my personal collection of favorite anime series,
            characters, and yearly highlights.
          </p>
        </motion.div>

        {/* Favorite Anime Section */}
        <section className="mb-20">
          <h2 className="section-title mb-12">
            <span className="text-animeAccent mr-4">お気に入り</span>
            Favorite Anime
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {favoriteAnime.map((anime, index) => (
              <motion.div
                key={anime.title}
                className="anime-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-[200px] mb-4 overflow-hidden rounded-lg">
                  <motion.img
                    src={anime.imageUrl}
                    alt={anime.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-animeBg-dark/90 via-animeBg-dark/40 to-transparent" />
                </div>
                <h3 className="text-2xl font-anime text-animePrimary mb-2">
                  {anime.title}
                </h3>
                <p className="text-animeSecondary text-sm mb-4">
                  {anime.titleJp}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {anime.genre.map((g) => (
                    <span
                      key={g}
                      className="px-3 py-1 rounded-full bg-animeAccent/20 text-animeAccent text-sm"
                    >
                      {g}
                    </span>
                  ))}
                </div>
                <p className="text-animeText">{anime.review}</p>
                <div className="mt-4 text-animeSecondary">
                  Rating: {anime.rating}/10 • {anime.year}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Anime of the Year Section */}
        <section className="mb-20">
          <h2 className="section-title mb-12">
            <span className="text-animeAccent mr-4">年間</span>
            Anime of the Year 2025
          </h2>
          <div className="grid gap-8">
            {animeOfTheYear.map((anime, index) => (
              <motion.div
                key={anime.title}
                className="anime-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-[300px] overflow-hidden rounded-lg">
                    <motion.img
                      src={anime.imageUrl}
                      alt={anime.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-animeBg-dark/90 via-animeBg-dark/40 to-transparent" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-anime text-animePrimary mb-2">
                      {anime.title}
                    </h3>
                    <p className="text-animeSecondary text-lg mb-4">
                      {anime.titleJp}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {anime.genre.map((g) => (
                        <span
                          key={g}
                          className="px-3 py-1 rounded-full bg-animeAccent/20 text-animeAccent text-sm"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                    <p className="text-animeText text-lg leading-relaxed">
                      {anime.review}
                    </p>
                    <div className="mt-6 text-animeSecondary text-lg">
                      Rating: {anime.rating}/10
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Favorite Characters Section */}
        <section className="mb-20">
          <h2 className="section-title mb-12">
            <span className="text-animeAccent mr-4">キャラクター</span>
            Favorite Characters
          </h2>
          <div className="grid gap-8">
            {favoriteCharacters.map((character, index) => (
              <motion.div
                key={character.name}
                className="anime-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-[400px] overflow-hidden rounded-lg">
                    <motion.img
                      src={character.imageUrl}
                      alt={character.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-animeBg-dark/90 via-animeBg-dark/40 to-transparent" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-anime text-animePrimary mb-2">
                      {character.name}
                    </h3>
                    <p className="text-animeSecondary text-lg mb-4">
                      {character.nameJp}
                    </p>
                    <p className="text-animeAccent mb-6">
                      From: {character.anime}
                    </p>
                    <div className="bg-animeBg-light/30 p-4 rounded-lg backdrop-blur-sm mb-6">
                      <p className="text-animeText leading-relaxed">
                        {character.description}
                      </p>
                    </div>
                    <div className="bg-animeBg-light/30 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="text-animeSecondary font-anime mb-4">
                        Why I Love This Character
                      </h4>
                      <ul className="list-disc list-inside text-animeText space-y-2">
                        {character.reasons.map((reason, idx) => (
                          <li key={idx}>{reason}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer
        githubUrl={"https://github.com/Hyadawild"}
        hideSocialsInDesktop={true}
      />
    </div>
  )
}
