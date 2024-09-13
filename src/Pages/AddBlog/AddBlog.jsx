/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import {
    Button
} from "@chakra-ui/react"
import * as images from "../../image"
import { IoIosAddCircle } from "react-icons/io";
import { useFormik, Field, FormikProvider } from "formik";
import FormInput from "../../Components/FormInput/FormInput";
import FormSelect from "../../Components/FormSelect/FormSelect";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as Yup from "yup";
import { useCreateBlogMutation } from "../../RTK/Reducers/BlogApi";
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
    const [ createBlog, { data, isLoading,  } ] = useCreateBlogMutation();
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
        onSubmit: (values)=>{
            // console.log(values);
            const data = {
                title: values.blogTitle,
                category: values.category,
                author: values.author,
                image: img,
                content: value
            }
            console.log(data);
            createBlog(data)
            .unwrap()
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
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

                </div>
            </FormikProvider>
        </>
    );
}
export default AddBlog;