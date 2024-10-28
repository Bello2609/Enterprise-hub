/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import {
    Button,
    useDisclosure
} from "@chakra-ui/react"
import * as images from "../../image"
import { IoIosAddCircle } from "react-icons/io";
import { useFormik, Field, FormikProvider } from "formik";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as Yup from "yup";
import FormInput from "../../Components/FormInput/FormInput";
import FormSelect from "../../Components/FormSelect/FormSelect";
import { useCreateBlogMutation } from "../../RTK/Reducers/BlogApi";
import { useCloud } from "../../Hooks/useCloud";
import Notification from "../../Components/Modal/Notification/Notification";
const categoryOption = [
    {
        value: "Select Category", label: "Select Category"
    },
    {
        value: "News", label: "News"
    },
    {
        value: "Articles", label: "Articles"
    },
    {
        value: "Trends", label: "Trends"
    },

]
const authorOption = [
    {
        value: "Select Category", label: "Select Category"
    },
    {
        value: "Enterprise Hubs", label: "Enterprise Hubs"
    },
    {
        value: "Emmanuel Olaleye", label: "Emmanuel Olaleye"
    },
    {
        value: "Barki Taiwo", label: "Barki Taiwo"
    },

]
const AddBlog = ()=>{
    const [ value, setValue ] = useState('');
    const [ img, setimg ] = useState('');
    const [ imgName, setImgName ] = useState("");
    const [ errMessage, setErrMessage ] = useState("");
    const [ successMessage, setSuccessMessage ] = useState();
    const [ createBlog, { data, isLoading, isSuccess } ] = useCreateBlogMutation();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { uploadImageToCloud } = useCloud();
    const hiddenFileInput = useRef(null);
    const blogSchema = Yup.object({
        blogTitle: Yup.string().required("Enter blog title")
    })
    const formik = useFormik({
        initialValues: {
            blogTitle: "",
            category: "",
            author: "",
            content: ""

        },
        validationSchema: blogSchema,
        onSubmit: async(values)=>{
            try{
                const cloudResponse = await uploadImageToCloud(img);
                const data = {
                    title: values.blogTitle,
                    category: values.category,
                    author: values.author,
                    image: cloudResponse.data?.id,
                    content: value
                }
                const response  = await createBlog(data);
                console.log(response);
                onOpen();
            }catch(error){
                onOpen();
                console.log(error);
            }

        }
    })
    const handleClick = ()=>{
        hiddenFileInput.current.click();
    }
    const handleChange = (e)=>{
        console.log(e.target.files[0]);
        setimg(e.target.files[0]);
        setImgName(e.target.files[0].name);
    }
    return(
        <>
            <FormikProvider value={formik}>
                <div className="flex justify-center items-center bg-[#F3F9F1] py-10">
                    <div className="flex flex-col items-center w-[904px] h-fit bg-[#fff] p-10">
                        <img src={images.Enterprise} className="w-[145px] h-[51px]" />
                        <h4 className="text-[#56923E] font-bold text-3xl my-5">Add New Post</h4>
                        <form  encType="multipart/form-data" onSubmit={formik.handleSubmit}>
                            <div className="flex flex-col items-center justify-center bg-[#F6F6F6] text-[#616161] w-[804px] h-[120px]">
                                <div className="flex flex-col items-center w-full">
                                    {/* <p className="pointer-cursor" ></p> */}
                                    <label className="font-normal text-base flex items-center cursor-pointer" onClick={handleClick}>
                                        <IoIosAddCircle />Set Image
                                    </label>
                                    <input 
                                        type="file"  
                                        ref={hiddenFileInput}
                                        onChange={handleChange}
                                        accept="image/*" 
                                        name="image" 
                                        style={{ visibility: "hidden" }}  
                                        className="border-2 border-red-500 w-full" 
                                    />
                                </div>
                                <p className="text-xs">{imgName ? `${imgName} is uploaded` : "Max:10MB"}</p>
                            </div>
                            <div className="flex flex-col w-[804px]">
                                <FormInput 
                                    type="text" 
                                    label="Blog Title" 
                                    name="blogTitle" 
                                    value={formik.values.blogTitle}
                                    onChange={formik.handleChange}
                                />
                                <Field 
                                    name="category" 
                                    component={FormSelect} 
                                    label="Blog Category" 
                                    options={categoryOption}
                                    width="804px"
                                    />
                                <Field 
                                    name="author" 
                                    component={FormSelect} 
                                    label="Author" 
                                    options={authorOption}
                                    width="804px"
                                    />
                                <ReactQuill 
                                    theme="snow" 
                                    value={value} 
                                    onChange={setValue} 
                                    className="mt-10"
                                 />
                            </div>
                            <div className="flex justify-evenly flex-wrap w-[804px] mt-2">
                                <Button 
                                    type="submit" 
                                    width="394px" 
                                    bgColor="#fff" 
                                    border="1px" 
                                    borderColor="#DFDFDF"
                                >    
                                    Save Draft
                                </Button>
                                <Button 
                                    type="submit" 
                                    width="394px" 
                                    bgColor="#81C167" 
                                    color="#fff"
                                >
                                    Publish
                                </Button>

                            </div>
                        </form>
                    </div>
                    <Notification 
                    isOpen={isOpen} 
                    onClose={onClose} 
                    message={ 
                        isSuccess ? successMessage : errMessage
                    }
                />

                </div>
            </FormikProvider>
        </>
    );
}
export default AddBlog;