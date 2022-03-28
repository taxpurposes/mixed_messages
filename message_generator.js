//arrays containing different message components. desires = different states of wanting, foods = different potential meals, and deciders = whether or not it was eaten.

const desires = ['Today, I really wanted ', 'I\'ve never tried eating ', 'Yesterday I felt like having some '];

const foods = ['braised beef vegan ramen, ', 'paella, ', 'horny goat weed soup, ', 'Rocky Mountain Oysters, '];

const deciders = ['so I ate a bunch of it when I went out to eat with my friends.', 'so I ate a shit ton of it.', 'so I ate a bunch of it today.', 'but I didn\'t get to eat any of it today'];

const decide_desire = () => {
    return Math.floor(Math.random() *3);
};

const decide_food = () => {
    return Math.floor(Math.random() *5);
};

const decide_deciders = () => {
    return Math.floor(Math.random() *5)
}