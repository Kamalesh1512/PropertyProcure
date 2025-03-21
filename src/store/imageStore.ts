import { create } from "zustand";

interface ImageProps {
  images: string[];
  addImage: (imageUrl: string) => void;
  removeImage: (imageUrl: string) => void;
}

export const useImageStore = create<ImageProps>((set)=>({
    images:[],
    addImage:(imageUrl) =>set((state) => ({images:[...state.images,imageUrl]})),
    removeImage:(imageUrl) => set((state) => ({images: state.images.filter((img)=> img!==imageUrl)}))
}))
