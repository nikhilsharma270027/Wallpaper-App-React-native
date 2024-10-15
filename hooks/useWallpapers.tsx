export interface Wallpaper {
  url: string;
  name: string;
}

interface FullWallpaper extends Wallpaper{
  liked: boolean;
  suggested: boolean;
  library: boolean;
}

export function useSuggestedWallpapers(): FullWallpaper[]{
  const wallpapers = useWallpapers();
  return wallpapers.filter(wallpaper => wallpaper.suggested)
}
export function useLikedWallpapers(): FullWallpaper[]{
  const wallpapers = useWallpapers();
  return wallpapers.filter(wallpaper => wallpaper.liked)
}
export function useLibraryWallpapers(): FullWallpaper[]{
  const wallpapers = useWallpapers();
  return wallpapers.filter(wallpaper => wallpaper.library)
}

export function useWallpapers(): FullWallpaper[] {
  return [
    {
      url: "https://i.pinimg.com/736x/3f/cd/17/3fcd1785622d5eea86a236d9ad795fba.jpg",
      "name": "Late answer",
      liked: true,
      suggested: true,
      library: false
    },
    {
      url: "https://i.pinimg.com/564x/2c/1e/8d/2c1e8d47b7d69942dde864cea181d463.jpg",
      "name": "Herritage",
      liked: true,
      suggested: false,
      library: true
    },
    {
      url: "https://i.pinimg.com/enabled_hi/474x/f2/5c/6b/f25c6bcc5ebdc585c41b32abbe728e65.jpg",
      "name": "Naruto",
      liked: false,
      suggested: true,
      library: false
    },
    {
      url: "https://i.pinimg.com/enabled_hi/236x/8b/48/19/8b48199e3ebd2705621340b88dcca2ca.jpg",
      "name": "old days",
      liked: false,
      suggested: true,
      library: false
    },
    {
      url: "https://i.pinimg.com/enabled_hi/474x/02/ee/08/02ee086ba271da1778648e7dd6339bc6.jpg",
      "name": "Kakasi",
      liked: false,
      suggested: true,
      library: false
    },
    {
      url: "https://i.pinimg.com/enabled_hi/236x/28/33/e8/2833e8f0a224da03622d2f3457e72ab6.jpg",
      "name": "War Arc",
      liked: false,
      suggested: true,
      library: false
    },
  ];
}
