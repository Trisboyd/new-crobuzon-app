export interface Location {
    title: string | null,
    link: string | null,
    about: string | null,
    class: string | null
}

export interface RaceType {
    id: string | null,
    image: string | null,
    type: string | null,
    characteristics: string | null
}

export const places = [
    {
        class: "perdido-street-station",
        title: "Perdido Street Station",
        link: "https://luisfale.files.wordpress.com/2010/02/perdido-street-station-picture.jpg",
        about: "The heart of New Crobuzon, this station is the meeting point for all trains and effectively most commerce in the city. It is also the tallest point in the massive landscape of buildings.",
    },
    {
        class: "brock-marsh",
        title: "Brock Marsh",
        link: "https://64.media.tumblr.com/8eb11471e4f574dcd72cdb11d28ca0ac/tumblr_mj02m0akx61qj014ko1_500.jpg",
        about: "Brock Marsh is the de-facto 'science district' in New Crobuzon where various scholars and for hire scientists maintain small laboratories and conduct various experiments."
    },
    {
        class: "bonetown",
        title: "Bonetown",
        link: "https://alchetron.com/cdn/new-crobuzon-936ebf2c-d33e-43ac-9c32-3e80a5f77b0-resize-750.jpg",
        about: "One of the oldest sections of the city, Bonetown is built in and around the massive ribcage of a primordial leviathan long since perished. Bonetown also houses some of the stronger criminal elements of New Crobuzon."
    },
    {
        class: "glasshouse",
        title: "The GlassHouse",
        link: "https://i.pinimg.com/originals/c1/20/a4/c120a49d531989f98bb69b9f343a1e90.jpg",
        about: "This large structure hosts a large portion of the New Crobuzon cactacae popuplation.  With a propensity for warmer climates and species isolation, the cactacae have a pseudo-state in this dome with extremely limited accessibilty for outsiders."
    },
    {
        class: "kinken",
        title: "Kinken",
        link: "https://66.media.tumblr.com/873b5c783c1d4fb939d84d3ebbf73869/tumblr_p08vm4mtIU1sdu71do8_1280.jpg",
        about: "Much of the city's Khepri popuplation live in this small district.  They migrated following a misunderstood event called 'The Ravening' during which most Khepri died. The best known feature of Kinken is the 'Plaza of Statues.'"
    },
    {
        class: "griss-twist",
        title: "Griss Twist",
        link: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/46b30050-07b6-421f-8f52-093b5188ceb2/dbirc3g-204d3d24-a8e4-4bb8-a636-6e257572729a.jpg/v1/fill/w_1239,h_645,q_70,strp/new_crobuzon___high_caliber_bridge_by_etwoo_dbirc3g-pre.jpg",
        about: "Formerly a center of industry, this sector of the city now serves as a land fill for the mass of collected waste the citizens accumulate. A few factories still work to sift through the mountains of refuse, but largely the area is uninhabited with the notable exception of the Construct Council."
    },
    {
        class: "spatters",
        title: "Spatters",
        link: "https://th.bing.com/th/id/R.2421d7aa339b39412bd76c276cafa56a?rik=mWojmfcCW53bVg&riu=http%3a%2f%2fi.dailymail.co.uk%2fi%2fpix%2f2012%2f10%2f02%2farticle-2211498-154CB483000005DC-898_964x597.jpg&ehk=vlaC1pKF5W56sFE7XxuvK4rvizrh8oJ6CYOmMGm1DjA%3d&risl=&pid=ImgRaw&r=0",
        about: "On the outskirts of New Crobuzon, Spatters is a slum where some of the poorest inhabitants of the city live. It is also home to the largest group of Garuda in the city who live atop one of the tallest desolate buildings."
    },
    {
        class: "salacus-fields",
        title: "Salacus Fields",
        link: "https://th.bing.com/th/id/OIP.60Fs_iuVmnISwlVVRIf5VwHaEu?pid=ImgDet&rs=1",
        about: "Filled with bars and teahouses, Salacus Fields is the de-facto arts district of New Crobuzon where many artists live and spend their time on leisurely activities. The populace is also fairly diverse compared to other districts."
    },
    {
        class: "new-crobuzon-university",
        title: "New Crobuzon University",
        link: "https://i.pinimg.com/originals/3e/a1/81/3ea181629f59865ece6113d280865ae9.jpg",
        about: "The most prestigious university in New Crobuzon, this school has numerous fields of study including language, arts, engineering, and the sciences. The school also teaches the science of thaumaturgy which is necessary for Remaking."
    },
    {
        class: "dog-fenn",
        title: "Dog Fenn",
        link: "https://cdna.artstation.com/p/assets/images/images/000/935/438/large/hugo-puzzuoli-darkslum-hpuzzuoli-mediumsize.jpg?1443928255",
        about: "Possible the poorest district within the city limits of New Crobuzon (not including the outskirts). Not much is notable about this decrepit area other than it is the secret location of the resistance newspaper the 'Runagate Rampant.'"
    },
    {
        class: "strack-island",
        title: "Strack Island",
        link: "https://external-preview.redd.it/NhRTpaxthE5v6SCoiFsxQqLICJWTcO2DjiPNA4y0DMY.jpg?width=1200&height=628.272251309&auto=webp&s=6c1437f23dd744d6c66cf16f7d7f4de7e0994ff2",
        about: "A relatively small island at the meeting point of the Gross Tar and River Canker, this solitary stretch of land is the seat of the government of New Crobuzon. It is protected underwater, by air, and by land and houses multiple offices and living spaces for the highest officals including the mayor."
    },
    {
        class: "canker-wedge",
        title: "Canker Wedge",
        link: "https://i.pinimg.com/originals/0b/49/54/0b4954b0849188890088168405c6bd68.png",
        about: "One of the richer districts in New Crobuzon.  Canker Wedge houses a portion of the upper classes and aristrocracy as well as serving as the location for some of the more advanced flight systems."
    },
    {
        class: "flag-hill",
        title: "Flag Hill",
        link: "https://i.pinimg.com/originals/c5/5c/1e/c55c1e5fd0343e73021dba88ba4db55f.jpg",
        about: "The most elite district in town where aristocracy, bankers, wealthy artists, and top merchants reside. Unlike most cramped spaces in the city, Flag Hill features spacious areas and gardens. Once it contained a portion of cheap-housing for war veterans, but this was slowly transformed into a 'slum-museum' of sorts."
    },
    {
        class: "nigh-sump",
        title: "Nigh Sump",
        link: "https://th.bing.com/th/id/R.dcf409c4c17a5387130aa757b9c27344?rik=X%2fDZb3wfJzA2mg&riu=http%3a%2f%2fwww.galeriemagazine.com%2fwp-content%2fuploads%2f2017%2f10%2fDan-Taylor-Flickr-1024x683.jpg&ehk=rdCXSS1YKxpzci7%2fGkFokKkZL7R6cxOAVPN9FCguMLE%3d&risl=&pid=ImgRaw&r=0",
        about: "An older part of the city with fairly upper-class residents. The old and spaced out building are well preserved and include in their number the 'Glassheim' which is considered one of the most dazzling sights in New Crobuzon."
    },
    {
        class: "spit-hearth",
        title: "Spit Hearth",
        link: "https://i.pinimg.com/originals/41/20/1b/41201b9da79c37a4d31d8990d0375db3.jpg",
        about: "A part of 'Old Town' populated by many stone houses. The most promiment features are the punishment factories closer to the river where Remade are manufactured with thaumaturgy following the verdicts of the New Crobuzon justice system."
    }
]

export const raceList = [
    {
        id: "1",
        image: "https://th.bing.com/th/id/OIP.koLoDxgpIuCE07nUI35LawHaNc?w=185&h=336&c=7&o=5&dpr=1.25&pid=1.7",
        type: "Human",
        characteristics: "As the dominant race in New Crobuzon, humans make up the majority of the city population and serve in most government capacities including bureaucracy and law enforcement via the militia."
    },
    {
        id: "2",
        image: "https://i.pinimg.com/736x/96/be/d7/96bed75d03dec6e0fe921a789f565995--lag-fan-art.jpg",
        type: "Khepri",
        characteristics: "The females have human features with the exception of their head which is similarly to a beetle.  Males are smaller and only insectoid in type.  The Khepri population is small and mostly limited to Kinken."
    },
    {
        id: "3",
        image: "https://vignette.wikia.nocookie.net/baslag/images/7/72/Vodyanoi.png/revision/latest?cb=20200924223657",
        type: "Vodanyoi",
        characteristics: "Smaller amphibious creatures that work in the rivers of New Crobuzon.  Vodanyoi have a unique ability known as watercraft wherein they can shape water to serve various purposes."
    },
    {
        id: "4",
        image: "https://th.bing.com/th/id/R.655aa8564476d1a88d30776eb9b1f187?rik=h8LcylkKeh9KfA&riu=http%3a%2f%2ffarm1.staticflickr.com%2f23%2f31352552_f88f01e359_z.jpg%3fzz%3d1&ehk=MkndLjYhOQeZaAXGUV4qAkoXChabOvRT%2ff6HuCczHxU%3d&risl=&pid=ImgRaw&r=0",
        type: "Remade",
        characteristics: "Although technically not a different species, remade are simply persons who have been assigned corporeal changes either as punishment or for utility purposes. Body parts are added or replaced by thaumaturgic processes."
    },
    {
        id: "5",
        image: "https://s-media-cache-ak0.pinimg.com/736x/83/14/7e/83147e0ac96116f8187675e937e2c444.jpg",
        type: "Cactacae",
        characteristics: "Human in shape, these creatures maintain a cacti exterior complete with needle like spikes that protrude in various areas and even flowers that can bloom. They prefer warmer climates and have a designated sector of the city where most live known as the 'Glasshouse'."
    },
    {
        id: "6",
        image: "https://vignette.wikia.nocookie.net/baslag/images/7/78/Garuda.png/revision/latest?cb=20200925152624",
        type: "Garuda",
        characteristics: "Huge wings and eagle-like faces adorn human bodies in these unique creatures. Very few live in New Crobuzon, although some live in the outskirts in Spatters. The majority live in the Cymek Desert to the far south."

    },
    {
        id: "7",
        image: "https://s-media-cache-ak0.pinimg.com/736x/16/90/8c/16908c47f17df9384788923202d54208.jpg",
        type: "Contruct Council",
        characteristics: "A single machine entity that controls multiple other machines across the city. This AI lives in Griss Twist, but operates across the city with the help of smaller constructs and devoted human servants."
    },
    {
        id: "8",
        image: "https://orig00.deviantart.net/6dab/f/2009/131/d/3/creature_hands_1_by_dreamfloatingby.jpg",
        type: "Handlinger",
        characteristics: "A parasitic race of hand-creatures that attach to hosts and assume control of all nervous functions. Handlingers are generally not allowed in New Crobuzon, but a small number live in the city as authorized by a confidential deal with the government."
    },
    {
        id: "9",
        image: "https://s-media-cache-ak0.pinimg.com/736x/c3/b9/11/c3b91144998469195a8c74176d734c02.jpg",
        type: "Weaver",
        characteristics: "An incredible species that travels through dimensions, Weavers are concerned with maintaining the structural integrity of the 'web' of dimensions. Only one is known to inhabit a space in New Crobuzon; it is called upon on rare occasion to help with extreme situations."
    }
]

export const bookLinks = {
    perdido: "https://www.amazon.com/Perdido-Street-Station-audiobook/dp/B002BU5R4G/ref=sr_1_1?dchild=1&keywords=perdido+street+station&qid=1628100677&sr=8-1",
    scar: "https://www.amazon.com/Scar-Bas-Lag-China-Mi%C3%A9ville/dp/0345444388/ref=sr_1_1?dchild=1&keywords=the+scar+china+mieville&qid=1628100761&s=audible&sr=1-1-catcorr",
    iron: "https://www.amazon.com/Iron-Council-Bas-Lag-China-Mi%C3%A9ville/dp/0345458427/ref=sr_1_1?dchild=1&keywords=iron+council&qid=1628100802&s=audible&sr=1-1-catcorr"
}