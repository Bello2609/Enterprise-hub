import * as images from "../../image";

const AllAdminBlog = ()=>{
    const AllBlogItems = [
        {
            category: "NEWS",
            title: "Enterprise Hubs Hosts Baykins Pharmacy",
            body: "We had the pleasure of serving Baykins Pharmacy with our best as they held their staff retreat on Friday September …"
        },
        {
            category: "NEWS",
            title: "Enterprise Hubs Hosts Baykins Pharmacy",
            body: "We had the pleasure of serving Baykins Pharmacy with our best as they held their staff retreat on Friday September …"
        },
        {
            category: "NEWS",
            title: "Enterprise Hubs Hosts Baykins Pharmacy",
            body: "We had the pleasure of serving Baykins Pharmacy with our best as they held their staff retreat on Friday September …"
        },
        {
            category: "NEWS",
            title: "Enterprise Hubs Hosts Baykins Pharmacy",
            body: "We had the pleasure of serving Baykins Pharmacy with our best as they held their staff retreat on Friday September …"
        },
        {
            category: "NEWS",
            title: "Enterprise Hubs Hosts Baykins Pharmacy",
            body: "We had the pleasure of serving Baykins Pharmacy with our best as they held their staff retreat on Friday September …"
        },
        {
            category: "NEWS",
            title: "Enterprise Hubs Hosts Baykins Pharmacy",
            body: "We had the pleasure of serving Baykins Pharmacy with our best as they held their staff retreat on Friday September …"
        },

    ]
    return(
        <>
            <div className="flex flex-col items-center bg-[#F3F9F1] py-20">
                <div className="flex justify-evenly px-20 sm:px-10 w-full mb-3">
                    <div className="flex flex-col items-start w-full">
                        <h4 className="flex-wrap w-[517px] sm:text-left text-6xl font-bold text-[#252524]">
                            All Blogs
                        </h4>
                    </div>
                  
                </div>
                <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-2">
                        {
                            AllBlogItems.map(blog=>(
                                <>
                                    <div className="flex flex-col bg-[#fff] rounded-xl border border-[#DADADA] h-fit">
                                        <img src={images.manbag} alt="A man carrying a bag" className="rounded-t-xl" />
                                        <div className="p-8">
                                            <p className="font-sans text-base text-[#81C167] font-bold">
                                               {blog.category}
                                            </p>
                                            <h4 className="font-sans font-bold text-xl text-[#252524] w-[312px] my-5">
                                                {blog.body}
                                            </h4>
                                            <p className="text-[#616161] font-sans font-normal w-[301px]">
                                                {blog.body}
                                            </p>
                                            <div className="flex w-full justify-between mt-5">
                                                <p className="text-red-500 cursor-pointer">Delete</p>
                                                <p className="text-green-500 cursor-pointer">Edit</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
            </div>
        </>
    );
}
export default AllAdminBlog;