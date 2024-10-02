import { useState } from "react";
import { usePostCloudMutation } from "../RTK/Reducers/TestimonialApi";
export const useCloud = () =>{
    const [ load, setLoad ] = useState(false);
    const [ postCloud ] = usePostCloudMutation();
    const uploadImageToCloud = async (image)=>{
        if(!image) throw new Error("No image is provided for upload");
        setLoad(true);
        try{
            const formData = new FormData();
            formData.append("file", image);
            formData.append("title", image.name || "untitled image");
            formData.append("type", "IMAGE");
            const response = await postCloud(formData);
            setLoad(false);
            return response;
        }catch(error){
            console.log(error);
            setLoad(false)
            throw error;

        }
    }
    return { uploadImageToCloud, load }
}