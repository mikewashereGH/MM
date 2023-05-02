const users = [
    {
        id: 1,
        name: "Funny Animals",
        shortName: "Animals",
        isUpdate: true,
        image_url:
            "https://em-content.zobj.net/source/microsoft-teams/337/dog-face_1f436.png",
    },
    {
        id: 2,
        name: "Wholesome",
        shortName: "Wholesome",
        isUpdate: true,
        image_url:
            "https://em-content.zobj.net/source/microsoft-teams/337/cat-face_1f431.png",
    },
    {
        id: 3,
        name: "13+",
        shortName: "PG13",
        isUpdate: true,
        image_url:
            "https://em-content.zobj.net/source/microsoft-teams/337/no-entry_26d4.png",
    },
    {
        id: 4,
        name: "18+",
        shortName: "18+",
        isUpdate: true,
        image_url:
            "https://em-content.zobj.net/source/microsoft-teams/337/prohibited_1f6ab.png",
    },
    {
        id: 5,
        name: "Videos",
        shortName: "Videos",
        isUpdate: true,
        image_url:
            "https://em-content.zobj.net/source/microsoft-teams/337/movie-camera_1f3a5.png",
    },
    {
        id: 6,
        name: "Images",
        shortName: "Images",
        isUpdate: true,
        image_url:
            "https://em-content.zobj.net/source/microsoft-teams/337/camera-with-flash_1f4f8.png",
    },
    {
        id: 7,
        name: "Explain A Movie Plot Badly",
        shortName: "EAMPB",
        isUpdate: true,
        image_url:
            "https://em-content.zobj.net/source/microsoft-teams/337/face-with-tears-of-joy_1f602.png",
    },
    {
        id: 8,
        name: "Nostalgic",
        shortName: "Nostalgic",
        isUpdate: true,
        image_url:
            "https://em-content.zobj.net/source/microsoft-teams/337/older-person_1f9d3.png",
    },
    {
        id: 9,
        name: "Satisfying",
        shortName: "Satisfying",
        isUpdate: true,
        image_url:
            "https://em-content.zobj.net/source/microsoft-teams/337/snowflake_2744-fe0f.png",
    },
];

const storiesContainer = document.querySelector(".stories");
users.map((user) => {
    storiesContainer.innerHTML += `
        <div class="flex flex-col items-center">
            <div class="w-14 h-14 ${user.isUpdate && 'bg-gradient'} rounded mb-2">
                <img src="${user.image_url}" alt="${user.name}" class="w-full h-full object-cover rounded"/>
            </div>
            
            <p class="text-xs text-zinc-500 font-semibold">${user.shortName}</p>
        </div>
`;
});