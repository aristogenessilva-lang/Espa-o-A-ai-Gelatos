import { Instagram } from 'lucide-react';
import Image from 'next/image';

const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: 'https://instagram.fthe9-1.fna.fbcdn.net/v/t51.71878-15/607560159_1343112754515922_8256761714532598430_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=Mzc5NzA4OTA4NjgxMzk5ODgzNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHg4MDAuc2RyLkMzIn0%3D&_nc_ohc=AJZBEMH4aP8Q7kNvwF7Irc-&_nc_oc=Adnhumn9t6udtMh_88zdCoyW52fYAfZwQpVOFFejccerA0mTMdxeRLckRTfy4AlLkVM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fthe9-1.fna&_nc_gid=gHWC-ldqJ2adcgbPcO1bdQ&_nc_ss=8&oh=00_AfzdlLM1u4zcPPAhK-L1egP2E2nlhebQU0PheGxQyJ9VLg&oe=69B3B233',
    link: 'https://www.instagram.com/espacoacaiegelatos/',
  },
  {
    id: 2,
    image: 'https://instagram.fthe9-2.fna.fbcdn.net/v/t51.71878-15/613720980_882555557583524_5699348162770811370_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=MzgwOTQwMzQ0NjU0NjY1OTgxNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHg2NDAuc2RyLkMzIn0%3D&_nc_ohc=IIspGZ_X1GYQ7kNvwFRX0pR&_nc_oc=AdkSVxX3OpWJMKYISKAoFBECh4Q0eAGduSKP08vWjG4x-hFakt3FJ0YFXcHGbEkQq4Q&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fthe9-2.fna&_nc_gid=gHWC-ldqJ2adcgbPcO1bdQ&_nc_ss=8&oh=00_AfzpdJZXdeYiwG6ICmqF2zA29HFzMN3FlHbqLTl82H3c4Q&oe=69B3938C',
    link: 'https://www.instagram.com/espacoacaiegelatos/',
  },
  {
    id: 3,
    image: 'https://instagram.fthe9-2.fna.fbcdn.net/v/t51.71878-15/605558195_2974022672791559_3035690818541384755_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=Mzc5NjM4MDYxNjExMjQyNjgyMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHg4MDAuc2RyLkMzIn0%3D&_nc_ohc=ivALUiOoNqoQ7kNvwHux6CW&_nc_oc=Adk6rd7Kos5lBcACOQHdviYLFLl_P9vQjGe5sAjNwAwoIh3SINLvCBo-OrqKGS1GK_c&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fthe9-2.fna&_nc_gid=gHWC-ldqJ2adcgbPcO1bdQ&_nc_ss=8&oh=00_Afx6VqdqlBQ8A-rDZEOpbr3_PuNfArhILh9Uz-Ngba4SmA&oe=69B3AFB4',
    link: 'https://www.instagram.com/espacoacaiegelatos/',
  },
  {
    id: 4,
    image: 'https://instagram.fthe9-1.fna.fbcdn.net/v/t51.71878-15/588911063_836295535704051_3726789461979712108_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=Mzc4Njk3NzI4ODQwODQ4ODk1MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHg2NDAuc2RyLkMzIn0%3D&_nc_ohc=gMoWLXJwNpgQ7kNvwENs4xV&_nc_oc=AdkQZVccBDZ-1sD2MyLJyVRHtYhg7jDHUG-E5f33HbTFRDC-4nvhCTbpy9H0FwzFZCU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fthe9-1.fna&_nc_gid=REK_dZo9wRBQgu-PkouSvg&_nc_ss=8&oh=00_AfyXnyFi2TgZvM1a7-k2VcFYieiegnw-fKjQZ428Fbo2-Q&oe=69B3ADBF',
    link: 'https://www.instagram.com/espacoacaiegelatos/',
  },
  {
    id: 5,
    image: 'https://instagram.fthe9-1.fna.fbcdn.net/v/t51.71878-15/590421787_1772716673567470_4135617654435995067_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=Mzc4NjIxNjMyOTI1NTUyODA3NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHg2NDAuc2RyLkMzIn0%3D&_nc_ohc=uyImZ0EKwykQ7kNvwFb57Ea&_nc_oc=AdlVGF4oLzNNHdYxuEwrojI0M3KUrKuPx_TnEBXhuINmAnR6A900D4RtO98Cy-r6IKc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fthe9-1.fna&_nc_gid=REK_dZo9wRBQgu-PkouSvg&_nc_ss=8&oh=00_Afx7Bl0ASdeU8jZ5VbBcdD9Tgsx2EbSiITKP4eN1BLh-gw&oe=69B3AB08',
    link: 'https://www.instagram.com/espacoacaiegelatos/',
  },
  {
    id: 6,
    image: 'https://instagram.fthe9-2.fna.fbcdn.net/v/t51.71878-15/587805011_2321652624946014_8090281469428738234_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=Mzc4MTg2MzA0MjUxMTI1NzIyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHg4MDAuc2RyLkMzIn0%3D&_nc_ohc=iReiOt0FvL8Q7kNvwFvtz6b&_nc_oc=Adlf5UweIFkZDs9ud4H81W9VKSg9IHyo_7ykNhliC9nqslIywxpz49SE612ijcdLf90&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fthe9-2.fna&_nc_gid=REK_dZo9wRBQgu-PkouSvg&_nc_ss=8&oh=00_AfxXxAcOuN6A5MNyo9w0jSo-9t95Apn_QjDl7D2SZv-NDA&oe=69B3B8FD',
    link: 'https://www.instagram.com/espacoacaiegelatos/',
  },
  {
    id: 7,
    image: 'https://instagram.fthe9-2.fna.fbcdn.net/v/t51.71878-15/598972303_810595225311634_5978712247306806640_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=Mzc4NTQzOTE2ODQ3OTM1OTA4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=oSNfFA4nCQgQ7kNvwGL6jqm&_nc_oc=AdnerCymjLPaj1R6N3kP74fWn2Cgvz_xz-lTf_5t0CFYwcR80jtK9_lOvV_8n8jrydI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fthe9-2.fna&_nc_gid=REK_dZo9wRBQgu-PkouSvg&_nc_ss=8&oh=00_Afz4u1a6Ld_ADuYkquITOuj-YdaP8Za8ZIpTTNyCA92iSA&oe=69B39EE9',
    link: 'https://www.instagram.com/espacoacaiegelatos/',
  },
];

export function InstagramFeed() {
  return (
    <section className="py-16 bg-white overflow-hidden" id="instagram">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full flex items-center justify-center">
              <Instagram className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Siga nosso Instagram</h2>
          <p className="mt-4 text-lg text-gray-600">
            Acompanhe nossas novidades, promoções e muito mais em{' '}
            <a
              href="https://www.instagram.com/espacoacaiegelatos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-semibold hover:underline"
            >
              @espacoacaiegelatos
            </a>
          </p>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <div className="flex w-max animate-marquee">
          {/* First set of images */}
          <div className="flex gap-4 px-2">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={`first-${post.id}`}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-64 h-64 overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow flex-shrink-0"
              >
                <Image
                  src={post.image}
                  alt="Açaí Top no Instagram"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
              </a>
            ))}
          </div>
          {/* Second set of images for infinite scroll effect */}
          <div className="flex gap-4 px-2">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={`second-${post.id}`}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-64 h-64 overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow flex-shrink-0"
              >
                <Image
                  src={post.image}
                  alt="Açaí Top no Instagram"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://www.instagram.com/espacoacaiegelatos/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg"
        >
          <Instagram className="w-5 h-5" />
          Ver mais no Instagram
        </a>
      </div>
    </section>
  );
}
