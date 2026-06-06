export interface Track {
  id: number;
  title: string;
  artist: string;
  src: string;
  cover: string;
  visual: string;
  lyrics?: string;
}

export const realityAwaitsTracks: Track[] = [
  {
    id: 1,
    title: "Psycho Shit",
    artist: "The Strokes",
    src:"", //"/music/psycho.mp3",
    cover: "/visuals/cover-icon.jpg",
    visual: "/visuals/cowboy-bg.jpg"
  },
  {
    id: 2,
    title: "Dine N' Dash",
    artist: "The Strokes",
    src:"", //"/music/dine.mp3",
    cover: "/visuals/cover-icon.jpg",
    visual: "/visuals/cowboy-bg.jpg"
  },
  {
    id: 3,
    title: "Lonely in the Future",
    artist: "The Strokes",
    src:"", //"/music/lonely.mp3",
    cover: "/visuals/cover-icon.jpg",
    visual: "/visuals/cowboy-bg.jpg"
  },
  {
    id: 4,
    title: "Falling out of Love",
    artist: "The Strokes",
    src: "/music/reality-awaits/out-of-love.mp3",
    cover: "/visuals/cover-icon.jpg",
    visual: "/visuals/cowboy-bg.jpg",
    lyrics:
    `
    I took you out to my hometown
    Where I learned to be alone
    Ridin' up the mountainside
    Where all the world's here
    Linger on to praise the dawn
    Different boots, same old song
    I'm in love with a ghost
    I'll be always and never alone

    I denied, for a while
    Fallin' out of love for the first time
    Some things are flawed by design
    But I'm fine for the first time
    Dancin' in acid rain alone it's new
    But I don't wanna do it anymore
    I guess I'll sing alone

    There once was a boy turned to Lucifer
    He haunted many spaces,
    got lost down many streets
    Mmm, sailed the seven seas,
    hunted wild rhinocer-es
    Please don't call me ma'am,
    I'm no fancy fallen angel
    Finally fell in love, finally found some relief
    Finally found his lover in the arms of a thief
    Mostly found an angle, holding on for now

    I denied, for a while
    Fallin' out of love for the first time
    Some things are flawed by design
    But I'm fine for the first time
    Dancin' in acid rain, alone it's new
    But I don't wanna do it anymore
    I guess I'll sing alone

    Two things can be true, 
    good times I had with you
    To the cozy, cotton bedded sheets
    at night looked dread
    Past the hall of judging heads, 
    family portraits of the dead
    I know they felt the same power
    Sitting in the shadow, count my blessings
    No one gotta find out why
    I guess you wanna know
    In a way, this could be big news

    Let her cry, let her lie
    Fallin' out of love for the first time
    Some thing's flawed or by design
    But I'm fine for the first time
    Dancin' in acid rain, alone with you
    But I don't wanna face it anymore, 
    know I’m immature
    Over time, overnight
    'Cause I can't go through it anymore
    Hollywood here I come
    I know what it was, why it was
    Lookin' for something else

    Someone please call it in on the radio
    We got a problem here
    Oh-oh-oh, oh-oh-oh, oh-oh-oh, oh-oh-oh
    Oh-oh-oh, oh-oh-oh, oh-oh-oh, oh-oh-oh
    Be an adult, you're bein' a child
    No one wants to play
    Grindin' your gear
    I know it's not enough
    We didn't wanna hear another lecture
    Oh, puttin' on a show
    Grindin' your gear...
    `,
  },
  {
    id: 5,
    title: "Going to Babble On",
    artist: "The Strokes",
    src:"", //"/music/babble.mp3",
    cover: "/visuals/cover-icon.jpg",
    visual: "/visuals/cowboy-bg.jpg"
  },
  {
    id: 6,
    title: "Going Shopping",
    artist: "The Strokes",
    src: "/music/reality-awaits/shopping.mp3",
    cover: "/visuals/cover-icon.jpg",
    visual: "/visuals/cowboy-bg.jpg",
    lyrics:
    `
    Like a tiger, they will chase you down
    With words instead of claws
    They will seduce you 'til you reach the point
    To let yourself get mauled, oh
    The worse reality gets, 
    the less you wanna hear about it
    Solidarity can be difficult
    When you got cool stuff to lose

    I wanna be a 7-foot zombie
    The pay is low, but I gotta do somethin'
    I'm at the mall and the song is bumpin'
    There goes my future wife
    in the little red jumpsuit

    I'm goin' away to the country
    Don't wander off too far
    I'm goin' out my mind
    Throwin' all my plans out the window
    Don't wanna waste my life
    I'll see you on the other side

    I've been thinkin' about what I wanna say
    But I'm an old man now
    At least that's what they tell me anyway
    We've been expanding on our greatness
    Building future ruins
    We're buildin' castles from 
    the bones of dead trees
    Molded from the shattered ashes of
    the Dead Sea

    I moved away to the country
    I had to change my way
    But I kinda miss you now
    Stockbrokers flyin' out the window
    I kinda miss that sound
    Don't wanna wake up Pa (Haha)

    (Doo-doo-doo-doo)
    (Doo-doo-doo-doo)
    (Doo-doo, doo-doo-doo-doo)
    (Doo-doo-doo-doo, doo-doo-doo)

    I can't wait, I'm goin' shoppin'
    I'm at the mall and the song is bumpin'
    I wanna be a 7-foot starfish
    Above the law, a political puppet

    I'm goin' back to the city
    I'm 'bout to lose my mind
    I'm gonna stay alive
    I'm climbin' out through the window
    I miss the shops and malls
    I'm gonna meet you there
    Still throwin' my phone out the window
    I'm gonna soothe my soul
    Can't wait, I'm goin' shoppin'
    `,
  },
  {
    id: 7,
    title: "Liar's Remorse",
    artist: "The Strokes",
    src:"", //"/music/remorse.mp3",
    cover: "/visuals/cover-icon.jpg",
    visual: "/visuals/cowboy-bg.jpg"
  },
  {
    id: 8,
    title: "The Fruits of Conquest",
    artist: "The Strokes",
    src:"", //"/music/fruits.mp3",
    cover: "/visuals/cover-icon.jpg",
    visual: "/visuals/cowboy-bg.jpg"
  },
  {
    id: 9,
    title: "Tyrants of the Mellow Moon",
    artist: "The Strokes",
    src:"", //"/music/tyrants.mp3",
    cover: "/visuals/cover-icon.jpg",
    visual: "/visuals/cowboy-bg.jpg"
  },
];

export const theNewAbnormalTracks: Track[] = [
  {
    id: 101,
    title: "The Adults Are Talking",
    artist: "The Strokes",
    src: "/music/the-new-abnormal/adults.mp3",
    cover: "/visuals/abnormal-cover.jpg",
    visual: "/visuals/abnormal-bg.jpg"
  },
  {
    id: 102,
    title: "Selfless",
    artist: "The Strokes",
    src: "/music/the-new-abnormal/selfless.mp3",
    cover: "/visuals/abnormal-cover.jpg",
    visual: "/visuals/abnormal-bg.jpg"
  },
  {
    id: 103,
    title: "Brooklyn Bridge To Chorus",
    artist: "The Strokes",
    src: "/music/the-new-abnormal/brooklyn.mp3",
    cover: "/visuals/abnormal-cover.jpg",
    visual: "/visuals/abnormal-bg.jpg"
  },
  {
    id: 104,
    title: "Bad Decisions",
    artist: "The Strokes",
    src: "/music/the-new-abnormal/bad.mp3",
    cover: "/visuals/abnormal-cover.jpg",
    visual: "/visuals/abnormal-bg.jpg"
  },
  {
    id: 105,
    title: "Eternal Summer",
    artist: "The Strokes",
    src: "",
    cover: "/visuals/abnormal-cover.jpg",
    visual: "/visuals/abnormal-bg.jpg"
  },
  {
    id: 106,
    title: "At The Door",
    artist: "The Strokes",
    src: "",
    cover: "/visuals/abnormal-cover.jpg",
    visual: "/visuals/abnormal-bg.jpg"
  },
  {
    id: 107,
    title: "Why Are Sundays So Depressing",
    artist: "The Strokes",
    src: "",
    cover: "/visuals/abnormal-cover.jpg",
    visual: "/visuals/abnormal-bg.jpg"
  },
  {
    id: 108,
    title: "Not The Same Anymore",
    artist: "The Strokes",
    src: "",
    cover: "/visuals/abnormal-cover.jpg",
    visual: "/visuals/abnormal-bg.jpg"
  },
  {
    id: 109,
    title: "Ode To The Mets",
    artist: "The Strokes",
    src: "",
    cover: "/visuals/abnormal-cover.jpg",
    visual: "/visuals/abnormal-bg.jpg"
  }
];

export const tracks = realityAwaitsTracks;
