import { Person } from "src/types";

export const personData: Person = {
    name: "Ayed Naber",
    profilePicURL: "../../assets/personal_photo.jpg",
    age: 21,
    birthday: "July 4th",
    bio: "I like cooking, and I love Real Madrid!",
    interests: ['Football', 'Bodybuilding', 'Cooking', 'Programming'],
};

export const friendsData: Person[] = [
    {
        name: "Charlie Barrett",
        profilePicURL: "https://randomuser.me/api/portraits/men/44.jpg",
        age: 27,
        bio: "I like traveling around the world!",
        birthday: "September 7th",
        interests: ["Cycling", "Football"]
    },
    {
        name: "Allan Morales",
        profilePicURL: "https://randomuser.me/api/portraits/men/0.jpg",
        age: 43,
        birthday: "January 2nd",
        bio: "I like smoking!",
        interests: ["Smoking", "Watching TV"]
    },
    {
        name: "Ayed Naber",
        profilePicURL: "../../assets/personal_photo.jpg",
        age: 21,
        birthday: "July 4th",
        bio: "I like cooking, and I love Real Madrid!",
        interests: ['Football', 'Bodybuilding', 'Cooking', 'Programming']
    }
]