import cloudinary from "@/cloudinary";
import { ImagesResponse } from "./types";
import { cache } from "react";

const formatUrl = (url: string) => {
    return url.replace(`http://res.cloudinary.com/dqyhe8ogi/image/upload`, `http://res.cloudinary.com/dqyhe8ogi/image/upload/ar_1.5,c_auto,w_1100`);
};

const FALLBACK_IMAGES = [
    {
        src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/ar_1.5,c_auto,w_1100/v1703003782/tesla-system/gallery/IMG_20201026_080605_unm1ir.jpg",
        alt: "Patch panel",
        width: 1100,
        height: 734
    },
    {
        src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/ar_1.5,c_auto,w_1100/v1703020410/tesla-system/gallery/119074668_795130681026846_841610256391708460_n_u6mgmm.jpg",
        alt: "Szafa typu rack",
        width: 1100,
        height: 734
    },
    {
        src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/ar_1.5,c_auto,w_1100/v1703020410/tesla-system/gallery/126503585_1025101164621355_8296664393924521081_n_h1buuz.jpg",
        alt: "Wodoodporna puszka kablowa",
        width: 1100,
        height: 734
    }
];

export const getImages = cache(async () => {
    try {
        const res: ImagesResponse = await cloudinary.v2.search.expression("folder=tesla-system/gallery").max_results(30).execute();
        const images = res.resources.map(({ url, filename }) => ({ src: formatUrl(url), alt: filename, width: 1100, height: 733 }));
        return images;
    } catch (error) {
        console.error(error);
        return FALLBACK_IMAGES;
    }
});
