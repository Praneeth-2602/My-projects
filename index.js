function home(){    
    
    const alternativeTitles = [
        'HOPE',
        'REGRET',
        'JOY',
        'EGO',
        'THREADS OF LIFE',
        'SACRIFICE','FAITH',
        'LOVE',
        'LONELINESS','ANGER',
        'PURPOSE'// ... add more text options
    ];

    const alternativeStories = [
        `In the darkest hours of night's embrace,<br>
        All alone in the shadows of a fireplace. <br>
        There blooms a light, both soft and clear, <br>
        a beacon called hope, forever near`,

        `Insomnia nights held in regret,<br>
        in subtle whispers, the past reflects.<br>
        A faded verse, a melancholic rhyme,<br>
        a haunting echo of choiced in time.`,

        `Your soulful laughter soaring high, <br>
        piercing through the cloudy purple sky <br>
        a symphony of smiles, pure and sweet <br>
        in joy's embrace, our spirits meet.`,

        `In ego's grip, hearts fall out of tune.<br>
        Silent walls rise, conversations strewn. <br>
        Through humble embrace, bridges may mend. <br>
        For understanding whispers truly transcend`,

        `Life is a woven cloth, a tapestry bold,<br>
        With tons of memories, both young and old,<br>
        We weave our tales with threads so fine,<br>
        A tapestry of moments, yours and mine`,

        `A mother's sleepless night,<br>
        her child's sweet dream.<br>
        A father's hardwork,<br>
        under the moon's soft gleam.`,

        `in shadows deep, doubts take flight,<br>
        belief and trust are beacons of light.<br>
        Through storms we sail, in faith we stand.<br>
        We'll conquer this world, hand in hand`,

        `In love's embrace, we're not the same.<br>
        Two souls with differences, in love's flame.<br> 
        With respect and care, our hearts enhance,<br> 
        serving each other, in this lifelong dance`,

        `In crowded rooms, I stand alone.<br>
        With a silent plea in my eyes,<br> 
        where hidden pain resides.<br> 
        Aching my heart, masked by smiles,<br> 
        Loneliness my friend,<br> 
        won't let your tears hide.`,

        `In anger's blaze,<br>
        we lose our way.<br>
        Empathy's light-<br>
        shall guide our day`,

        `With dreams to chase,<br>
        we rise above.<br>
        In purpose, we find<br> 
        the strength to love.`


        // ... add more text options
    ];
    document.getElementById('title').textContent = alternativeTitles[4];
    document.getElementById('story').innerHTML = alternativeStories[4];

    document.getElementById('changetext').addEventListener('click', function() {
        // Randomly select an alternative text:
        const randomIndex = Math.floor(Math.random() * alternativeTitles.length);
        const alternativeTitle = alternativeTitles[randomIndex];
        const alternativeStory = alternativeStories[randomIndex];
        // Update the text:
        document.getElementById('title').textContent = alternativeTitle;
        document.getElementById('story').innerHTML = alternativeStory;
    });
}

function poems(){    
    const alternativeTitles = [
        'Poem 1',
        'Poem 2',
        'Poem 3',
        'Poem 4',
        'Poem 5',
        'Poem 6','Poem 7',
        'Poem 8',
        'Poem 9','Poem 10',
        'Poem 11',
        'Poem 12','Poem 13',
        'Poem 14',
        'Poem 15','Poem 16',
        'Poem 17',
        'Poem 18','Poem 19',
        'Poem 20',
        'Poem 21','Poem 22',
        'Poem 23',
        'Poem 24','Poem 25',
        // ... add more text options
    ];

    const alternativePoems = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac ex massa. Etiam rhoncus sit amet erat eu suscipit. Cras tincidunt diam dictum interdum varius.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel massa laoreet, dictum lacus non, commodo purus. Sed non rhoncus tellus. Sed suscipit magna at.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl ante, vulputate sit amet porta nec, viverra non massa. Fusce a ligula arcu. Nunc quis.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique nisl at mattis tincidunt. Donec dui erat, fermentum eu tempor at, venenatis sit amet lectus. Nam tincidunt vitae arcu nec.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a posuere lectus. Morbi laoreet lorem ac massa pretium, ac pharetra nunc aliquet. Donec eget lacus facilisis, aliquet risus nec, tempor.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim egestas finibus. Donec ornare aliquam viverra. Nam molestie odio id scelerisque mollis. Quisque tristique orci et purus congue, ac tempus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo lectus. Sed dolor nisl, sodales id urna in, sollicitudin gravida neque. Etiam varius eros sed sapien auctor rhoncus.',
        'Sed facilisis mattis justo. Suspendisse maximus ex eget urna ornare, id volutpat nisi vestibulum. Etiam imperdiet ex nisl, id mollis nibh hendrerit sed. In sit amet quam gravida tellus fringilla.',
        'Aliquam erat volutpat. Integer vitae metus non ligula ullamcorper interdum eu et dui. Sed rutrum nibh ac mauris rutrum, sit amet vulputate est bibendum. Integer non vulputate risus. Fusce vel.',
        'Aenean id augue non mauris commodo ultricies. Donec molestie, eros viverra auctor molestie, purus ante feugiat massa, quis blandit metus turpis at sem. Duis at libero tincidunt, varius risus congue.',
        'Mauris odio nunc, facilisis et ipsum sit amet, ultrices auctor nisi. Quisque eleifend efficitur massa ullamcorper imperdiet. Sed erat libero, mattis et vestibulum feugiat, congue a nisl. Ut quis dapibus.',
        'Etiam ultricies, leo non porttitor aliquam, lacus risus hendrerit lectus, sed ultricies ante mauris ac libero. Integer quis nisl a nisl gravida maximus sit amet vitae sem. In pretium neque.',
        'Fusce bibendum, lorem quis iaculis pretium, lacus ipsum maximus velit, non elementum dui velit et urna. Etiam nunc urna, feugiat eget lectus nec, hendrerit luctus justo. Nullam sed fermentum ipsum.',
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec consequat in augue euismod aliquet. Curabitur a rutrum nisl, id egestas nisl. Pellentesque ornare dapibus imperdiet.',
        'Donec ex nunc, finibus sed tellus a, gravida placerat urna. Proin ac erat nec sem aliquam accumsan. Suspendisse pulvinar tellus nec laoreet scelerisque. Donec volutpat quam imperdiet felis vehicula auctor.',
        'Nulla vel aliquam felis, nec faucibus leo. Quisque non lacus aliquet, volutpat orci eget, auctor leo. Nulla vel eleifend erat. Integer molestie nisi id eros vestibulum semper. Curabitur vitae dictum.',
        'Donec fringilla, nibh vitae sagittis bibendum, erat leo sagittis augue, at finibus leo nulla sit amet dolor. Proin luctus enim in ante volutpat, vitae lacinia urna gravida. Nunc sed erat.',
        'Proin sodales neque dolor, vel lobortis leo vulputate eu. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod erat et elit ornare viverra eu quis orci. Duis.',
        'Morbi neque lorem, interdum vel augue sed, aliquam fringilla urna. Aliquam nec felis metus. Duis sodales scelerisque urna et posuere. Quisque at purus vitae odio sagittis dignissim. Vestibulum non sapien.',
        'Cras pellentesque vulputate tortor, non luctus turpis aliquam sit amet. Aenean et mattis nulla. Duis pharetra luctus nunc non dictum. Curabitur eget erat nisl. Proin ullamcorper lacinia dui eu aliquet.',
        'Maecenas vitae ante nec magna porttitor blandit congue sit amet ligula. Integer volutpat arcu at ipsum aliquet ullamcorper. Proin dignissim ante quis lorem rhoncus, eu pellentesque orci efficitur. In nisl.',
        'Nunc id malesuada ipsum. Etiam hendrerit, leo at lacinia fermentum, odio magna imperdiet nisl, et tristique lacus augue ut odio. Sed eget elit vitae erat pretium ullamcorper. Maecenas vitae euismod.',
        'In placerat euismod ante, a ultrices diam vehicula ac. Sed ante ante, auctor in leo a, feugiat fermentum lacus. Pellentesque vel massa sed odio tempor ultrices facilisis quis sapien. Vestibulum.',
        'Aliquam lacus est, tempor at accumsan vel, semper at lectus. Vivamus diam quam, finibus vitae lectus et, efficitur sagittis mi. Vivamus iaculis vel nibh vel fringilla. Aenean egestas, purus at.',
        'Nunc ullamcorper elit magna, vel auctor lacus suscipit vel. Nulla id mattis nisi, nec molestie mi. Ut euismod condimentum sapien at convallis. Praesent sed pulvinar urna. Praesent aliquam felis volutpat.',
        // ... add more text options
    ];

    document.getElementById('title').textContent = alternativeTitles[0];
    document.getElementById('story').textContent = alternativePoems[0];

    document.getElementById('changetext').addEventListener('click', function() {
        // Randomly select an alternative text:
        const randomIndex = Math.floor(Math.random() * alternativeTitles.length);
        const alternativeTitle = alternativeTitles[randomIndex];
        const alternativePoem = alternativePoems[randomIndex];
        // Update the text:
        document.getElementById('title').textContent = alternativeTitle;
        document.getElementById('story').textContent = alternativePoem;
    });
}

function stories(){    
    const alternativeTitles = [
        'The Enchanted Quill',
        'The Midnight Garden',
        'The Whispering Breeze',
        'The Puzzle of Time',
        'The Floating Lanterns',
        'The Mosaic of Memories','The Lighthouse Guardian',
        'The Mirror of Reflection',
        'The Starlight Sonata','The Whirlwind of Whispers',
        'The Puzzle of Serendipity',
        `The Songbird's Gift`,'The Fountain of Echoes',
        `The Sky Painter's Apprentice`,
        'The Timeless Pocket Watch'
        // ... add more text options
    ];

    const alternativeStories = [
        `In a quaint bookstore, an old quill possessed a magical ability. Whoever used it found their thoughts flowing effortlessly onto paper, creating stories beyond imagination. As the quill changed hands, tales of love, adventure, and mystery unfolded, captivating readers and writers alike. The little quill, unnoticed on the shelf, continued to weave enchantment, connecting hearts through the power of written words.`,
        `At midnight, a garden came to life with bioluminescent flowers. Their soft glow attracted dreamers seeking solace. One night, a troubled artist discovered the garden, finding inspiration in its ethereal beauty. As he painted the luminous blooms, his worries faded. The garden whispered, "Create," and those who listened found refuge in the canvas, turning the midnight garden into a sanctuary for the restless souls of the night.`,
        `In a secluded meadow, a gentle breeze carried whispers of forgotten dreams. It spoke to a young girl, urging her to chase her aspirations. As she followed the breeze, it guided her to a hidden library of untold stories. The books held the collective wisdom of those who dared to dream. The girl, now a storyteller, returned to the meadow, ensuring the breeze continued its timeless task—inspiring the dreamers to reach for the stars.`,
        `A clockmaker crafted a unique clock that unraveled the fabric of time. Each piece of the clock represented a moment in someone's life. One day, a curious child accidentally broke it. As the clock pieces scattered, time rewound, revealing hidden stories of joy, sorrow, and love. The child, now aware of life's fragility, carefully reassembled the clock, cherishing the interconnected tales it held and vowing to savor every fleeting moment.`,
        `Every year, a small village released lanterns into the night sky, each carrying a whispered wish. One lantern, fueled by a child's pure hope, soared higher than the rest. It reached a forgotten star, rekindling its light. The star, grateful for the child's belief, granted the village prosperity. The floating lanterns became an annual tradition, a reminder that even the smallest spark of hope could illuminate the darkest corners of the universe.`,
        `In a quiet town, an artist painted a mural that held the collective memories of the community. Each stroke encapsulated a shared moment, a laughter, or a tear. Over time, residents added their own brushstrokes, contributing to the ever-growing mosaic of memories. As the mural expanded, the town realized the beauty of their shared history, a vibrant tapestry connecting generations and fostering a sense of unity that transcended the boundaries of time.`,
        `On a desolate island, a sentient lighthouse stood tall, guiding lost ships to safety. Its light emitted warmth, drawing in a lonely wanderer. The wanderer, grateful for the unexpected refuge, became the lighthouse's keeper. Over the years, they formed an unspoken bond, a silent companionship that illuminated the darkest corners of the sea. Together, they weathered storms and offered solace, a testament to the enduring connection between a guardian and the one it guided.`,
        `In an antique shop, a mystical mirror revealed the true desires of those who gazed into it. A skeptical writer, seeking inspiration, reluctantly approached. To his astonishment, the mirror reflected not his image, but the unwritten stories within him. Inspired, he penned tales of wonder and self-discovery. The mirror, content in its role as a catalyst for creativity, awaited the next dreamer ready to unveil the hidden treasures of their imagination.`,
        `A gifted musician discovered an ancient piano that played celestial melodies. Each note corresponded to a star in the night sky. As the musician composed, the stars twinkled in harmony, creating a cosmic symphony. The music resonated across the universe, connecting distant galaxies through the ethereal language of sound. The pianist, humbled by the celestial collaboration, continued to play, becoming a conduit for the timeless melodies that echoed through the cosmos.`,
        `In a forgotten library, pages rustled with secrets known only to the wind. A curious librarian discovered a book that whispered forgotten tales when touched. As she read, the whispers grew louder, revealing stories long confined to the dusty shelves. The librarian, compelled by the power of untold narratives, shared these hidden gems with the world. The library, once silent, now echoed with the voices of countless stories, a testament to the magic hidden within the written word.`,
        `A quaint puzzle shop held a unique collection with pieces seemingly unrelated. One day, a determined puzzle enthusiast assembled a seemingly chaotic set. To their surprise, it revealed a map to hidden treasures around the town. As others followed suit, the puzzles uncovered shared joys and communal surprises. The town embraced the enigma of serendipity, celebrating the unexpected beauty found when seemingly disparate pieces of life came together in perfect harmony.`,
        `In a quiet forest, a lone songbird possessed the gift of turning melodies into tangible objects. Its music created flowers that never withered and crystals that captured sunlight. One day, a troubled soul heard the song, and the bird gifted a melody of hope. The recipient, in turn, shared the uplifting tune with others, spreading a cascade of positivity. The enchanted songbird continued to weave beauty, leaving a trail of harmonious wonders in its wake.`,
        `A mysterious fountain held the power to reflect emotions. Those who approached it with joy saw their elation mirrored in sparkling water. Conversely, those burdened by sorrow witnessed their pain dissipate as ripples of solace. The fountain united the community, fostering empathy and understanding. As people embraced the shared reflections, the fountain became a symbol of the collective strength found in acknowledging and supporting each other's emotional journeys.`,
        `A young artist discovered an elderly sky painter crafting sunsets with vibrant hues. Intrigued, the apprentice joined the nightly ritual, learning to blend colors that mirrored the day's emotions. As the duo painted, the sky transformed into a living canvas, displaying the collective experiences of the world. The apprentice, now wise and skilled, continued the tradition, ensuring each sunset told the stories of love, laughter, and tears witnessed throughout the day.`,
        `A gifted watchmaker created a pocket watch that suspended time when opened. Whoever held it could revisit moments of pure happiness. A selfless soul gifted the watch to an elderly woman, allowing her to relive cherished memories. Grateful, she passed it on to another, perpetuating the cycle of shared joy. The timeless pocket watch became a cherished heirloom, a vessel carrying the warmth of enduring happiness across generations.`
        // ... add more text options
    ];

    document.getElementById('title').textContent = alternativeTitles[0];
    document.getElementById('story').textContent = alternativeStories[0];

    document.getElementById('changetext').addEventListener('click', function() {
        // Randomly select an alternative text:
        const randomIndex = Math.floor(Math.random() * alternativeTitles.length);
        const alternativeTitle = alternativeTitles[randomIndex];
        const alternativeStory = alternativeStories[randomIndex];
        // Update the text:
        document.getElementById('title').textContent = alternativeTitle;
        document.getElementById('story').textContent = alternativeStory;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    home();
});
