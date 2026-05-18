import treeCanopy from '../../images/Tree Canopy - Photo by Shihara Ferdinando - SLRM.jpg'
import templeMurals from '../../images/Temple Murals - Photo by Shihara Ferdinando - SLRM.JPG'
import stainedGlass from '../../images/Stained Glass - Photo by Shihara Ferdinando - SLRM.JPG'
import buddhistTemple from '../../images/Buddhist Temple - Photo by Shihara Ferdinando - SLRM.JPG'
import sunThroughTrees from '../../images/Sun shining through trees - Photo by Shihara Ferdinando - SLRM.JPG'

import humanLibraryCircle from '../../images/Human Library/DSC_0011.JPG'
import humanLibraryListener from '../../images/Human Library/DSC_0109.JPG'
import humanLibrarySpeakers from '../../images/Human Library/IMG_20220530_161210.jpg'

import foodForThoughtOutdoor from '../../images/Food for thought/20221204_104644510_iOS.jpg'
import foodForThoughtConversation from '../../images/Food for thought/DSC_0213.JPG'
import foodForThoughtTeam from '../../images/Food for thought/SLRM Interfaith Team.jpg'

import internewsArtGallery from '../../images/Internews Memorial/Art gallery - Easter Sunday Attack Memorial - SLRM & Internews at ICES 4.jpg'
import internewsSurvivorsSpeak from '../../images/Internews Memorial/IMG_9391 copy.jpg'
import internewsGroup from '../../images/Internews Memorial/IMG_9786.jpg'

import fearlessFacilitator from '../../images/FearlessxSLRM/DSC_0235.JPG'
import fearlessCreative from '../../images/FearlessxSLRM/DSC_0442.JPG'
import fearlessCircle from '../../images/FearlessxSLRM/WhatsApp Image 2025-02-12 at 14.44.55_fae4fdde.jpg'

import oneCountryFacilitators from '../../images/One country one people workshop/DSC_0006.JPG'
import oneCountryCircle from '../../images/One country one people workshop/DSC_0037.JPG'
import oneCountryWomenCircle from '../../images/One country one people workshop/DSC_0069.JPG'

import bcisAudience from '../../images/BCIS Festival of Ideas/IMG_0003.jpg'
import bcisSpeaker from '../../images/BCIS Festival of Ideas/IMG_0185.jpg'
import bcisDuo from '../../images/BCIS Festival of Ideas/IMG_9966-2.jpg'

import othersideSpeaker from '../../images/Otherside premiere screening/Aamina Muhsin - The Other Side Premiere - SL Reconciliation Movement.JPG'
import othersideAudience from '../../images/Otherside premiere screening/Audience Side - The Other Side Premiere - SL Reconciliation Movement.JPG'
import othersideVolunteers from '../../images/Otherside premiere screening/Volunteers - The Other Side Premiere - SL Reconciliation Movement.JPG'

import mealsOfHopeDelivery from '../../images/Meals of Hope/IMG_4849.jpg'
import mealsOfHopeGirl from '../../images/Meals of Hope/IMG_4856.jpg'
import mealsOfHopeCommunity from '../../images/Meals of Hope/IMG_6052.jpg'

export const pageHeroImages = {
  about: foodForThoughtTeam,
  projects: foodForThoughtOutdoor,
  join: mealsOfHopeCommunity,
  easter: internewsArtGallery,
  civilWar: humanLibraryCircle,
  team: bcisAudience,
}

export const homeHeroSlides = [
  {
    title: 'Building Bridges of Peace',
    text: 'Working together to heal communities and foster reconciliation across Sri Lanka.',
    btnText: 'Learn More',
    btnLink: '/about',
    image: foodForThoughtTeam,
    alt: 'SLRM interfaith team gathered after a dialogue session.',
    overlay: 'linear-gradient(135deg, rgba(0, 118, 108, 0.72) 0%, rgba(173, 20, 87, 0.62) 100%)',
  },
  {
    title: 'Supporting Survivors',
    text: 'Creating spaces for remembrance, listening, and practical care for communities carrying the weight of violence.',
    btnText: 'Our Projects',
    btnLink: '/projects',
    image: internewsSurvivorsSpeak,
    alt: 'Audience gathered for a memorial program with a survivors speak presentation.',
    overlay: 'linear-gradient(135deg, rgba(173, 20, 87, 0.78) 0%, rgba(232, 119, 34, 0.58) 100%)',
  },
  {
    title: 'Join the Movement',
    text: 'Be part of positive change through dialogue, youth leadership, and community action.',
    btnText: 'Get Involved',
    btnLink: '/join',
    image: mealsOfHopeCommunity,
    alt: 'Community members gathered during a Meals of Hope outreach activity.',
    overlay: 'linear-gradient(135deg, rgba(232, 119, 34, 0.72) 0%, rgba(0, 118, 108, 0.56) 100%)',
  },
]

export const homeFeaturedProject = {
  label: 'Featured Project',
  title: 'Internews Memorial for Easter Sunday Survivors',
  description:
    'An exhibition-led memorial space honoring those lost on Easter Sunday while giving survivors, families, and communities room to remember, reflect, and speak.',
  image: internewsArtGallery,
  alt: 'Visitors viewing the Easter Sunday memorial exhibition.',
  link: '/easter-attacks',
}

export const homeProjectCards = [
  {
    title: 'Easter Attacks Recovery',
    description:
      'Supporting victims and families through remembrance, trauma-informed care, and interfaith healing initiatives.',
    image: internewsArtGallery,
    alt: 'Visitors moving through the Easter Sunday memorial exhibition.',
    link: '/easter-attacks',
    badge: 'Memorial and healing',
  },
  {
    title: 'Civil War Survivors',
    description:
      'Creating spaces for listening, psychosocial support, and community-led recovery for people affected by decades of conflict.',
    image: humanLibraryCircle,
    alt: 'Participants seated in a Human Library listening circle.',
    link: '/civil-war-survivors',
    badge: 'Dialogue and support',
  },
  {
    title: 'Community Dialogue',
    description:
      'Bringing people together through interfaith meals, public forums, youth sessions, and workshops that rebuild trust.',
    image: foodForThoughtOutdoor,
    alt: 'Participants gathered outdoors for a Food for Thought community conversation.',
    link: '/projects',
    badge: 'Shared conversation',
  },
]

export const homeGalleryImages = [
  {
    src: humanLibraryListener,
    alt: 'Participant listening closely during a Human Library session.',
    title: 'Human Library',
    caption: 'Listening across experience.',
  },
  {
    src: foodForThoughtOutdoor,
    alt: 'Community members seated in a circle during Food for Thought.',
    title: 'Food for Thought',
    caption: 'Interfaith dialogue in community.',
  },
  {
    src: internewsArtGallery,
    alt: 'Memorial exhibition visitors viewing artwork and tribute pieces.',
    title: 'Internews Memorial',
    caption: 'Remembering with dignity.',
  },
  {
    src: fearlessCreative,
    alt: 'Participant speaking during a Fearless x SLRM youth session.',
    title: 'Fearless x SLRM',
    caption: 'Creative youth leadership.',
  },
  {
    src: bcisSpeaker,
    alt: 'Audience member speaking into a microphone at the BCIS Festival of Ideas.',
    title: 'BCIS Festival of Ideas',
    caption: 'Public voices in conversation.',
  },
  {
    src: mealsOfHopeDelivery,
    alt: 'A child receiving a box during Meals of Hope outreach.',
    title: 'Meals of Hope',
    caption: 'Practical care in action.',
  },
]

export const homeJourneyImages = [
  {
    src: humanLibrarySpeakers,
    alt: 'Two speakers standing in front of a Human Library sign.',
    title: 'Human Library',
    description: 'Story-led conversations built around listening.',
  },
  {
    src: foodForThoughtTeam,
    alt: 'SLRM interfaith team posing after a session.',
    title: 'Food for Thought',
    description: 'Shared meals and interfaith reflection.',
  },
  {
    src: internewsGroup,
    alt: 'Participants standing together at the Internews Memorial.',
    title: 'Internews Memorial',
    description: 'Commemorative spaces for survivors and families.',
  },
  {
    src: fearlessFacilitator,
    alt: 'Facilitator smiling during a Fearless x SLRM session.',
    title: 'Fearless x SLRM',
    description: 'Youth confidence, creativity, and dialogue.',
  },
  {
    src: oneCountryFacilitators,
    alt: 'Facilitators addressing a workshop group at One Country One People.',
    title: 'One Country One People',
    description: 'Workshops for honest, grounded discussion.',
  },
  {
    src: mealsOfHopeGirl,
    alt: 'Young girl holding a food package at a Meals of Hope event.',
    title: 'Meals of Hope',
    description: 'Community outreach with dignity and care.',
  },
]

export const homeWhoWeAreImage = {
  src: foodForThoughtTeam,
  alt: 'SLRM team members gathered after an interfaith session.',
}

export const projectsShowcase = [
  {
    title: 'Easter Attacks Recovery Program',
    summary:
      'Memorial spaces, survivor support, and interfaith healing initiatives for families affected by the Easter Sunday attacks.',
    image: internewsArtGallery,
    alt: 'Visitors viewing the Easter Sunday memorial exhibition.',
    badge: 'Support and memorialization',
    link: '/easter-attacks',
    cta: 'Learn More',
  },
  {
    title: 'Civil War Survivors Support',
    summary:
      'Listening circles, psychosocial care, and community rebuilding for people carrying the long afterlife of war.',
    image: humanLibraryCircle,
    alt: 'Participants seated together during a Human Library listening circle.',
    badge: 'Healing and reintegration',
    link: '/civil-war-survivors',
    cta: 'Learn More',
  },
  {
    title: 'Human Library',
    summary:
      'Story-led sessions that create room for difficult conversations, empathy, and respectful listening across difference.',
    image: humanLibrarySpeakers,
    alt: 'Speakers introducing a Human Library session outdoors.',
    badge: 'Dialogue program',
  },
  {
    title: 'Food for Thought',
    summary:
      'Interfaith gatherings that use shared meals and conversation to build trust, reflection, and community connection.',
    image: foodForThoughtOutdoor,
    alt: 'Participants seated outdoors in a circle for Food for Thought.',
    badge: 'Interfaith engagement',
  },
  {
    title: 'Fearless x SLRM',
    summary:
      'Youth-led creative sessions that build confidence, expression, and the courage to speak honestly in community.',
    image: fearlessCreative,
    alt: 'Participant speaking during a Fearless x SLRM session.',
    badge: 'Youth platform',
  },
  {
    title: 'One Country, One People Workshop',
    summary:
      'Small-group workshops that help participants name grievances, listen deeply, and imagine common ground together.',
    image: oneCountryWomenCircle,
    alt: 'Participants seated together during the One Country One People workshop.',
    badge: 'Community workshop',
  },
  {
    title: 'BCIS Festival of Ideas',
    summary:
      'Public conversations that invite students, educators, and community members into thoughtful civic dialogue.',
    image: bcisSpeaker,
    alt: 'Audience member speaking at the BCIS Festival of Ideas.',
    badge: 'Public forum',
  },
  {
    title: 'The Other Side Premiere Screening',
    summary:
      'Film screenings and follow-up conversations that use storytelling to open dialogue on memory, justice, and coexistence.',
    image: othersideSpeaker,
    alt: 'Speaker addressing the audience at The Other Side premiere screening.',
    badge: 'Storytelling event',
  },
  {
    title: 'Meals of Hope',
    summary:
      'Direct community outreach that pairs practical support with relationship-building, presence, and care.',
    image: mealsOfHopeCommunity,
    alt: 'Community members gathered at a Meals of Hope outreach location.',
    badge: 'Community care',
  },
]

export const projectsWallImages = [
  {
    src: oneCountryCircle,
    alt: 'Participants seated in a workshop circle.',
    title: 'Workshop circles',
  },
  {
    src: bcisAudience,
    alt: 'Audience members listening during BCIS Festival of Ideas.',
    title: 'Public conversations',
  },
  {
    src: othersideAudience,
    alt: 'Audience members watching The Other Side premiere screening.',
    title: 'Storytelling spaces',
  },
  {
    src: fearlessCircle,
    alt: 'Participants gathered during a Fearless x SLRM activity.',
    title: 'Youth-led sessions',
  },
  {
    src: mealsOfHopeDelivery,
    alt: 'A child receiving a box during Meals of Hope.',
    title: 'Direct community support',
  },
]

export const aboutStoryImages = [
  {
    src: foodForThoughtTeam,
    alt: 'SLRM interfaith team gathered together.',
    title: 'Across faiths and communities',
  },
  {
    src: humanLibraryListener,
    alt: 'Participant listening during a Human Library session.',
    title: 'Listening with care',
  },
  {
    src: templeMurals,
    alt: 'Temple murals in close detail.',
    title: 'Grounded in Sri Lankan history',
  },
  {
    src: treeCanopy,
    alt: 'Tree canopy with sunlight filtering through.',
    title: 'Holding onto hope',
  },
]

export const aboutMissionImages = [
  {
    src: stainedGlass,
    alt: 'Stained glass detail.',
    title: 'Memory',
  },
  {
    src: buddhistTemple,
    alt: 'Buddhist temple exterior in daylight.',
    title: 'Place',
  },
  {
    src: sunThroughTrees,
    alt: 'Sun shining through trees.',
    title: 'Renewal',
  },
]

export const easterProgramImages = [
  {
    src: internewsArtGallery,
    alt: 'Visitors viewing memorial artwork.',
    title: 'Memorial exhibition',
    description: 'Creating space to remember, mourn, and gather around the stories of those lost.',
  },
  {
    src: internewsSurvivorsSpeak,
    alt: 'Audience seated before a survivors speak presentation.',
    title: 'Survivor testimony',
    description: 'Centering survivor voices in public conversations about grief, justice, and healing.',
  },
  {
    src: othersideAudience,
    alt: 'Audience members watching The Other Side premiere.',
    title: 'Public reflection',
    description: 'Using screenings and discussion spaces to keep difficult conversations open and grounded.',
  },
  {
    src: othersideVolunteers,
    alt: 'Volunteers standing together at The Other Side premiere screening.',
    title: 'Community hosting',
    description: 'Building supportive, dignified environments for remembrance and dialogue.',
  },
]

export const civilWarProgramImages = [
  {
    src: humanLibraryCircle,
    alt: 'Participants seated in a Human Library listening circle.',
    title: 'Listening circles',
    description: 'Small-group conversations that make room for lived experience, grief, and understanding.',
  },
  {
    src: foodForThoughtConversation,
    alt: 'Participants speaking during Food for Thought.',
    title: 'Shared reflection',
    description: 'Holding interfaith and intercultural dialogue in settings that feel human and accessible.',
  },
  {
    src: oneCountryWomenCircle,
    alt: 'Participants seated on the floor in a workshop circle.',
    title: 'Community workshops',
    description: 'Supporting participants as they rebuild trust and language across differences shaped by conflict.',
  },
  {
    src: fearlessFacilitator,
    alt: 'Facilitator smiling during a youth session.',
    title: 'Youth leadership',
    description: 'Helping younger participants grow into confident, empathetic voices in their communities.',
  },
]

export const joinVolunteerImages = [
  {
    src: mealsOfHopeDelivery,
    alt: 'A child receiving a box during Meals of Hope.',
    title: 'Meals of Hope',
  },
  {
    src: mealsOfHopeGirl,
    alt: 'Girl receiving community support at Meals of Hope.',
    title: 'Community care',
  },
  {
    src: bcisDuo,
    alt: 'Two speakers sharing a microphone at BCIS Festival of Ideas.',
    title: 'Public engagement',
  },
  {
    src: fearlessCreative,
    alt: 'Participant speaking in a Fearless x SLRM session.',
    title: 'Youth facilitation',
  },
]

export const teamActionImages = [
  {
    src: foodForThoughtTeam,
    alt: 'SLRM interfaith team standing together.',
    title: 'Interfaith facilitation',
  },
  {
    src: humanLibrarySpeakers,
    alt: 'Speakers at a Human Library session.',
    title: 'Dialogue hosting',
  },
  {
    src: bcisAudience,
    alt: 'Audience at the BCIS Festival of Ideas.',
    title: 'Public convening',
  },
]
