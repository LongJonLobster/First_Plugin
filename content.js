let heavyTF2Images = [
    "https://private-user-images.githubusercontent.com/168723913/458099404-131d3bda-15e7-461a-97c4-55b470f1daa8.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA3MTk0NDgsIm5iZiI6MTc1MDcxOTE0OCwicGF0aCI6Ii8xNjg3MjM5MTMvNDU4MDk5NDA0LTEzMWQzYmRhLTE1ZTctNDYxYS05N2M0LTU1YjQ3MGYxZGFhOC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyM1QyMjUyMjhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wYWUxODg5M2VkOGUzMzhhYzZlYjE0ZGVmYWIwYzI3ODYxNWIxZjMzMDhkYTczOWFjYjJmZTAwNDhkZWU1Nzg3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.rld0J7OwxtgON1V1L9g2ieU9f9Q8IjREY72K3zBEM5g",
    "https://github.com/user-attachments/assets/9ab2f83c-1689-4501-9eba-7f1ce977457c",
    "https://github.com/user-attachments/assets/f9fad70d-b1fe-4006-b70b-2b318b6c4e1c",
    "https://github.com/user-attachments/assets/c0c882c6-1d02-4cea-8ee5-bf51a93083e9",
];

const loadFunction = (event) => { 
    console.log(">>>>>>>>>>>>>>> the function fired")  
    const imgs = document.getElementsByTagName("img");
    
    for (let image of imgs) {
        const i = Math.floor(Math.random() * heavyTF2Images.length);
        image.src = heavyTF2Images[i];
        let something = 0;
    }
};

addEventListener("load", loadFunction);

console.log(">>>>>>>>>>>>>>>>>>> test");