let heavyTF2Images = [
    "https://github.com/user-attachments/assets/2a57dd1f-5ab7-457e-b711-14d03b3699b6",
    "https://github.com/user-attachments/assets/9ab2f83c-1689-4501-9eba-7f1ce977457c",
    "https://github.com/user-attachments/assets/f9fad70d-b1fe-4006-b70b-2b318b6c4e1c",
    "https://github.com/user-attachments/assets/c0c882c6-1d02-4cea-8ee5-bf51a93083e9",
];

const imgs = document.getElementsByTagName("img");

for (image of imgs) {
    const i = Math.floor(Math.random() * heavyTF2Images.length);
    image.src = heavyTF2Images[i];
}