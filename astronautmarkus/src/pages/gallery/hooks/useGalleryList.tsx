interface GalleryItem {
    id: string;
    filename: string;
    path: string;
    type: string;
    size_kb: number;
    creation_date: string;
    width: number;
    height: number;
}

export const useGalleryList = (): GalleryItem[] => {

    return [
        {
            id: "IMG_2741",
            filename: "IMG_2741.JPEG",
            path: "gallery_images/IMG_2741.JPEG",
            type: "MPO",
            size_kb: 960.83,
            creation_date: "2025-08-13T21:45:19",
            width: 1536,
            height: 2048
        },
        {
            id: "IMG_1981",
            filename: "IMG_1981.JPEG",
            path: "gallery_images/IMG_1981.JPEG",
            type: "MPO",
            size_kb: 687.86,
            creation_date: "2025-07-04T16:37:56",
            width: 1536,
            height: 2048
        },
        {
            id: "IMG_3309",
            filename: "IMG_3309.JPEG",
            path: "gallery_images/IMG_3309.JPEG",
            type: "MPO",
            size_kb: 972.4,
            creation_date: "2025-09-13T17:55:29",
            width: 1536,
            height: 2048
        },
        {
            id: "IMG_3642",
            filename: "IMG_3642.JPEG",
            path: "gallery_images/IMG_3642.JPEG",
            type: "MPO",
            size_kb: 731.64,
            creation_date: "2025-10-08T13:22:39",
            width: 1536,
            height: 2048
        },
        {
            id: "IMG_2967",
            filename: "IMG_2967.JPEG",
            path: "gallery_images/IMG_2967.JPEG",
            type: "MPO",
            size_kb: 747.56,
            creation_date: "2025-08-23T20:05:09",
            width: 1536,
            height: 2048
        },
        {
            id: "IMG_4023",
            filename: "IMG_4023.JPEG",
            path: "gallery_images/IMG_4023.JPEG",
            type: "MPO",
            size_kb: 416.34,
            creation_date: "2025-11-15T03:19:09",
            width: 1536,
            height: 2048
        },
        {
            id: "IMG_2422",
            filename: "IMG_2422.JPEG",
            path: "gallery_images/IMG_2422.JPEG",
            type: "MPO",
            size_kb: 962.11,
            creation_date: "2025-07-25T17:37:02",
            width: 1536,
            height: 2048
        },
        {
            id: "IMG_3596",
            filename: "IMG_3596.JPEG",
            path: "gallery_images/IMG_3596.JPEG",
            type: "MPO",
            size_kb: 967.31,
            creation_date: "2025-10-03T19:26:30",
            width: 1536,
            height: 2048
        },
        {
            id: "IMG_4122",
            filename: "IMG_4122.JPEG",
            path: "gallery_images/IMG_4122.JPEG",
            type: "MPO",
            size_kb: 731.11,
            creation_date: "2025-11-18T15:46:48",
            width: 1536,
            height: 2048
        },
        {
            id: "IMG_4135",
            filename: "IMG_4135.JPEG",
            path: "gallery_images/IMG_4135.JPEG",
            type: "MPO",
            size_kb: 789.17,
            creation_date: "2025-11-18T19:50:39",
            width: 1536,
            height: 2048
        },
        {
            id: "IMG_4227",
            filename: "IMG_4227.JPEG",
            path: "gallery_images/IMG_4227.JPEG",
            type: "MPO",
            size_kb: 789.17,
            creation_date: "2025-11-26T15:50:58",
            width: 1536,
            height: 2048
        },
    ];
};