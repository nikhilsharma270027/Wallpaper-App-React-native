export interface Wallpaper{
    url: string;
    name: string;
}
export function useWallpapers(): Wallpaper[]{
    return [{
        url: "https://i.pinimg.com/564x/2c/1e/8d/2c1e8d47b7d69942dde864cea181d463.jpg",
        "name": "Herritage"
    }, {
        url: "https://i.pinimg.com/736x/3f/cd/17/3fcd1785622d5eea86a236d9ad795fba.jpg",
        "name": "Late answer"
    }, ]
}