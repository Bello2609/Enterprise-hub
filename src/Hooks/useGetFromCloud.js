import { useGetFromCloudQuery } from "../RTK/Reducers/TestimonialApi"
export const useGetFromCloud = ()=>{
    const { getFromCloud } = useGetFromCloudQuery();
    const getImageFromCloud = async (id)=>{
        if(!id) throw new Error("No image id was passed")
        try{
            const response = await getFromCloud(id);
            return response
        }catch(error){
            console.log(error);
        }
    }
    return { getImageFromCloud }

}