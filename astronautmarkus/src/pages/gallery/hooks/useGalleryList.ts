interface GalleryItem {
    filename: string;
    path: string;
    type: string;
    size_kb: number;
    creation_date: string;
    width: number;
    height: number;
    suggested_title: string;
    suggested_description: string;
}

export const useGalleryList = (): GalleryItem[] => {
    return [
{
        "filename": "IMG_2741.JPEG",
        "path": "gallery_images/IMG_2741.JPEG",
        "type": "MPO",
        "size_kb": 960.83,
        "creation_date": "2025-08-13T21:45:19",
        "width": 1536,
        "height": 2048,
        "suggested_title": "Playing Touhou on my ThinkPad with Wine",
        "suggested_description": "A photo of a ThinkPad laptop displaying a Touhou game, running on Wine. While I was using Arch Linux on my ThinkPad, I decided to play some Touhou games using Wine."
    },
    {
        "filename": "IMG_1981.JPEG",
        "path": "gallery_images/IMG_1981.JPEG",
        "type": "MPO",
        "size_kb": 687.86,
        "creation_date": "2025-07-04T16:37:56",
        "width": 1536,
        "height": 2048,
        "suggested_title": "Coding in the truck in the middle of traffic",
        "suggested_description": "After a day of traveling, my mother picked me up in her truck. While we were stuck in traffic, I took the opportunity to code on my laptop. Time is gold!"
    },
    {
        "filename": "IMG_3309.JPEG",
        "path": "gallery_images/IMG_3309.JPEG",
        "type": "MPO",
        "size_kb": 972.4,
        "creation_date": "2025-09-13T17:55:29",
        "width": 1536,
        "height": 2048,
        "suggested_title": "Coding in my yard while my cat watches me",
        "suggested_description": "On a spring day, I decided to code in my yard while my cat, Agustin, was nearby watching me. Drinking Pepsi, by the way!"
    },
    {
        "filename": "IMG_3642.JPEG",
        "path": "gallery_images/IMG_3642.JPEG",
        "type": "MPO",
        "size_kb": 731.64,
        "creation_date": "2025-10-08T13:22:39",
        "width": 1536,
        "height": 2048,
        "suggested_title": "Monster Mango Loco while waiting for car service",
        "suggested_description": "Enjoying a Monster Mango Loco drink while waiting for my car to be serviced."
    },
    {
        "filename": "IMG_2967.JPEG",
        "path": "gallery_images/IMG_2967.JPEG",
        "type": "MPO",
        "size_kb": 747.56,
        "creation_date": "2025-08-23T20:05:09",
        "width": 1536,
        "height": 2048,
        "suggested_title": "My first Raspberry Pi Zero 2W.",
        "suggested_description": "That day I received my first Raspberry Pi Zero 2W. I was really incredulous because I thought all Raspberry Pis (and their cases) used screws to secure them, but since the Pi Zero 2W is smaller, almost like a USB drive, just a little bigger, it just clicked into place and stayed put. I thought the seller had ripped me off or something, lol."
    },
    {
        "filename": "IMG_4023.JPEG",
        "path": "gallery_images/IMG_4023.JPEG",
        "type": "MPO",
        "size_kb": 416.34,
        "creation_date": "2025-11-15T03:19:09",
        "width": 1536,
        "height": 2048,
        "suggested_title": "SOCOM 3 U.S. Navy SEALs multiplayer on PS2 (PCSX2)",
        "suggested_description": "That was so fun! I never thought I would play SOCOM 3 U.S. Navy SEALs multiplayer again after so many years. Thanks to PCSX2, I could relive those moments playing with friends online. In 4K too!"
    },
    {
        "filename": "IMG_2422.JPEG",
        "path": "gallery_images/IMG_2422.JPEG",
        "type": "MPO",
        "size_kb": 962.11,
        "creation_date": "2025-07-25T17:37:02",
        "width": 1536,
        "height": 2048,
        "suggested_title": "Booting my Raspberry Pi 4B",
        "suggested_description": "I just installed Raspbian on my Raspberry Pi 4B and I'm booting it up for the first time. Excited to explore all the projects I can do with it!"
    },
    {
        "filename": "IMG_3596.JPEG",
        "path": "gallery_images/IMG_3596.JPEG",
        "type": "MPO",
        "size_kb": 967.31,
        "creation_date": "2025-10-03T19:26:30",
        "width": 1536,
        "height": 2048,
        "suggested_title": "Playing Halo Infinite Campaign on my OMEN 16",
        "suggested_description": "I never used this laptop for gaming; I bought it for my programming career. After I finished my studies, I reinstalled Windows and started using it for video games. Halo Infinite looks amazing on it!"
    },
    {
        "filename": "IMG_4122.JPEG",
        "path": "gallery_images/IMG_4122.JPEG",
        "type": "MPO",
        "size_kb": 731.11,
        "creation_date": "2025-11-18T15:46:48",
        "width": 1536,
        "height": 2048,
        "suggested_title": "Weather forecast with Arduino Uno, I2C LCD, and DHT11",
        "suggested_description": "I really love I2C; it's so easy to use and saves a lot of pins on the Arduino. In this project, I used an Arduino Uno, my 'Jenny' board—a custom Arduino Uno with waifu graphics, integrated buzzer, lights showing what pins are being used in real time, and a lot of details. The project shows the temperature and humidity using a DHT11 sensor and an I2C LCD display."
    },
    {
        "filename": "IMG_4135.JPEG",
        "path": "gallery_images/IMG_4135.JPEG",
        "type": "MPO",
        "size_kb": 789.17,
        "creation_date": "2025-11-18T19:50:39",
        "width": 1536,
        "height": 2048,
        "suggested_title": "The same I2C LCD weather forecast project but with an ESP8266",
        "suggested_description": "I recreated the weather forecast project using an ESP8266 instead of an Arduino Uno. The ESP8266 allows for Wi-Fi connectivity, so I added features to fetch weather data from the internet and display it on the I2C LCD. Personally, I prefer using the ESP8266 over the ESP32 for simpler projects."
    }
    ];
};