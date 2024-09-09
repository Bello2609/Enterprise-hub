import { usePostCloudMutation } from "../RTK/Reducers/TestimonialApi";
export const useCloud = () =>{
    const [ postCloud ] = usePostCloudMutation();
    const uploadImageToCloud = async (image)=>{
        if(!image) throw new Error("No image is provided for upload");
        try{
            const formData = new FormData();
            formData.append("file", image);
            formData.append("title", image.name || "untitled image");
            formData.append("type", "IMAGE");
            const response = await postCloud(formData);
            console.log("cloud");
            return response;
            
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    return { uploadImageToCloud }
}