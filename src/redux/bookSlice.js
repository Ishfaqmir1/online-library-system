import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: "Curfewed Night",
    author: "Basharat Peer",
    category: "Biography",
    description: `An intensely personal and deeply moving memoir that chronicles the life of Basharat Peer during the conflict in Kashmir. 
    Through vivid storytelling, Peer brings to life the curfews, disappearances, mass graves, and the impact of militancy and military presence in the valley. 
    It's a rare insider's perspective into the human cost of political conflict.`,
    rating: 4.7,
    cover: "https://upload.wikimedia.org/wikipedia/en/b/bd/Curfewed-night.jpg"
  },
  {
    id: 2,
    title: "Our Moon Has Blood Clots",
    author: "Rahul Pandita",
    category: "Non-Fiction",
    description: `A powerful, heart-wrenching account of the violent exodus of Kashmiri Pandits from the valley in the 1990s. 
    Rahul Pandita narrates his personal journey alongside historical events, painting a painful yet important picture of communal tension, loss, and identity.`,
    rating: 4.6,
    cover: "https://m.media-amazon.com/images/I/713tM6nx1QL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 3,
    title: "Kashmir: Rage and Reason",
    author: "A.S. Dulat",
    category: "Politics",
    description: `Here is one of the most articulate and well informed of Kashmiris giving voice to how Kashmiris feel, and what it's like to live in a pressure cooker.' Andrew Whitehead, former editor, BBC World Service, author and historian 'This is one of the most informative and stimulating books that I have ever read about Kashmir.' Christopher Snedden, noted historian and author Blending analyses with anecdotes, Kashmir: Rage and Reason is the Valley's new-age writing, which traces, in lucid language, the region's tortured history, the many facets of Kashmiri nationalism, and the betrayals. The author has woven together his anecdotes and people's narratives from ground zero to give us the real picture in all its starkness, minus any journalistic dressing. Written by one of the most eminent and respected journalists from Kashmir. The narrative draws on the many interviews the author has covered and his personal anecdotes. Solid analysis combined with great storytelling. A brave new book on the Kashmir issue, from someone who has himself lived the tragedy of Kashmir.`,
    rating: 4.3,
    cover: "https://bsmedia.business-standard.com/_media/bs/img/article/2019-08/20/full/1566318962-5275.jpg?im=FeatureCrop,size=(826,465)"
  },
  {
    id: 4,
    title: "Kashmir in ConflictA Journey to the Centre of the Earth",
    author: " Jules Verne",
    category: "science fiction",
    description: `This science fiction classic from one of the fathers of the genre has stood the test of time. It's exciting and inventive, even visionary. However, note the book title: This novel is about the journey more than the destination. Author Jules Verne takes his time leading the reader through lengthy descriptions and long treks, where the characters experience challenging conditions: Rations run low, they suffer from dehydration when water runs out, and they lose their way in dark tunnels. Readers are more than halfway through the novel before they see any of those dinosaurs that the film versions highlight. Appreciating this novel requires a lot of scientific curiosity and some advanced vocabulary.`,
    rating: 4.4,
    cover: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ44SfSgUYDVhowP1OC3A8Dyx8XLbGZ5rdZYXpcJipprgp4NBsteXGrD0pocnUQO-hsFf9jVBZynzZoqXRo8mfCMCTzeReAArV5guwN7jhpMBbkUmn72cHg_g"
  },
  {
    id: 5,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    description: `This timeless masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. 
    His journey teaches profound lessons about listening to one's heart, recognizing opportunity, and following dreams with courage and determination.`,
    rating: 4.8,
    cover: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
  }
];


const bookSlice=createSlice({
    name: 'books',
    initialState,
    reducers:{
        addBook: (state, action) => {
            state.push(action.payload);
        },
    }
})
export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
