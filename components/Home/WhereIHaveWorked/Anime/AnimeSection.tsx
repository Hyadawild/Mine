import { motion } from "framer-motion"

interface AnimeCharacter {
  name: string
  nameJp: string
  series: string
  seriesJp: string
  imageUrl: string
  description: string
  reason: string
}

export default function AnimeSection() {
  const favoriteCharacter: AnimeCharacter = {
    name: "Kamisato Ayaka",
    nameJp: "神里綾華",
    series: "Genshin Impact",
    seriesJp: "ヴァイオレット・エヴァーガーデン",
    imageUrl: "/img/AYAKA1.jpg",
    description:
      "Daughter of the Yashiro Commission's Kamisato Clan from Inazuma. Dignified and elegant, wise and determined.Sincere and pleasant to others. Universally loved by the Inazuma people, she has earned the title of Shirasagi Himegimi.",
    reason: "Mofu Mofu Fuwa Fuwa! Her elegance and strength captivate me.",
  }

  return (
    <motion.div
      className="relative w-full max-w-[1100px] mx-auto pt-24 px-4 md:px-8 lg:px-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="anime"
    >
      <div className="flex flex-col items-center">
        <h2 className="section-title flex items-center font-anime">
          <span className="mr-4 text-animeAccent">私の</span>
          Favorite Character
        </h2>

        <motion.div
          className="w-full max-w-4xl anime-card bg-gradient-to-br from-animeBg-light to-animeBg-dark"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={favoriteCharacter.imageUrl}
                alt={favoriteCharacter.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-animeBg-dark/90 via-animeBg-dark/40 to-transparent" />
            </motion.div>

            <div className="flex flex-col justify-center p-6">
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold font-anime text-animePrimary mb-1 anime-glow">
                  {favoriteCharacter.name}
                </h3>
                <p className="text-lg text-animeSecondary font-anime mb-4">
                  {favoriteCharacter.nameJp}
                </p>
                <div className="mb-4">
                  <p className="text-xl text-animeAccent font-anime">
                    {favoriteCharacter.series}
                  </p>
                  <p className="text-md text-animeText/80">
                    {favoriteCharacter.seriesJp}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-animeBg-light/30 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="text-animeSecondary font-anime mb-2">
                    Character
                  </h4>
                  <p className="text-animeText leading-relaxed">
                    {favoriteCharacter.description}
                  </p>
                </div>

                <div className="bg-animeBg-light/30 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="text-animeSecondary font-anime mb-2">
                    Why I Love This Character
                  </h4>
                  <p className="text-animeText leading-relaxed">
                    {favoriteCharacter.reason}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="/anime">
                <button className="btn-anime font-anime text-lg group relative">
                  <span className="relative z-10">アニメの世界へ</span>
                  <span className="relative z-10 block text-sm">
                    Enter My Anime World
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-anime opacity-50"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
