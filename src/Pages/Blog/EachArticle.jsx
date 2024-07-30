import React from "react";
import * as images from "../../image";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const EachArticle = ()=>{
    return(
        <>
            <div className="flex sm:flex-col justify-evenly bg-[#F3F9F1] py-16">
                <div className="flex flex-col items-center">
                    <div className="flex justify-evenly px-20 sm:px-10 w-full">
                        <div className="flex flex-col items-start sm:items-center w-full sm:w-fit">
                            <p className="w-[413px] sm:w-fit flex-wrap font-normal text-base text-[#81C167] my-5">
                                NEWS | 👨🏼‍🦰Barki Taiwo | 12 Jan 2024
                            </p>
                            <h4 className="flex-wrap w-[700px] sm:w-[320px] text-left text-6xl font-bold text-[#252524]">
                                Enterprise Hubs Hosts Baykins Pharmacy
                            </h4>
                        </div>
                    </div>
                    <img src={images.roomInterior} className="rounded-xl w-[757px] h-[350px] my-5" alt="room interior" />
                    <div className="flex flex-col w-[757px] sm:w-[320px] text-[#252524] my-10">
                        <p className="text-[#252524] font-normal text-base mb-5">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit, sollicitudin in 
                            massa sem pellentesque et praesent ultricies, eleifend libero sed non 
                            ligula hac. Suspendisse inceptos torquent dignissim dis parturient nulla 
                            id habitant, rhoncus ridiculus placerat ullamcorper ante lacus eros, 
                            potenti volutpat fusce pellentesque enim arcu scelerisque. Ligula 
                            molestie lectus euismod volutpat lobortis enim placerat porta velit, 
                            massa vel neque sodales nullam facilisis varius ut ultricies, sapien 
                            augue a bibendum in ad proin magnis, elementum per vulputate justo 
                            vestibulum sociosqu vitae risus.
                        </p>
                        <p className="text-[#252524] font-normal text-base mb-5">
                            Eros facilisi pellentesque ac venenatis taciti ad integer sem at, aliquet 
                            feugiat nostra urna curae maecenas volutpat. Curabitur ac semper lacinia 
                            eleifend enim integer facilisi, dapibus eget aliquet facilisis mauris nec 
                            placerat, erat blandit velit convallis nibh interdum. Gravida mauris odio 
                            feugiat ullamcorper blandit aptent maecenas habitant accumsan, magna 
                            congue viverra massa aliquam in enim malesuada. Nunc dis habitasse sollicitudin 
                            condimentum posuere montes ut nullam bibendum, velit lobortis libero suscipit leo 
                            imperdiet faucibus.
                        </p>
                        <p className="text-[#252524] font-normal text-base">
                            Lacus dignissim tellus per blandit vehicula sapien pretium lectus, 
                            condimentum malesuada vel sollicitudin arcu nisl parturient, scelerisque
                            nullam facilisis eget commodo mi rutrum. Dignissim conubia fringilla 
                            torquent ridiculus fusce per commodo euismod pulvinar, bibendum curae 
                            class ad id facilisi iaculis luctus dis neque, inceptos tristique orci
                            duis dictum vehicula cubilia nullam. Pulvinar pretium varius curabitur 
                            nostra congue ornare nibh nullam, maecenas magna enim condimentum
                            interdum vitae ut, penatibus habitasse lacinia elementum luctus vestibulum 
                            torquent. Quisque rutrum iaculis posuere torquent porta ultrices nulla commodo habitasse 
                            accumsan, fermentum a neque himenaeos integer nibh senectus aliquet vel scelerisque, ante 
                            nostra urna aenean faucibus egestas nam suscipit phasellus. Metus nam magna lectus id rhoncus 
                            consequat viverra litora cubilia, lobortis pharetra nec mauris scelerisque torquent molestie 
                            aliquet himenaeos nostra, lacus ligula fusce sociosqu cras porttitor gravida massa. 
                            Tincidunt nascetur condimentum non suspendisse placerat litora tempus vestibulum libero curabitur,
                            urna per massa torquent odio habitasse aliquam a maecenas vivamus penatibus, consequat porta 
                            senectus enim sodales orci mollis integer augue.
                        </p>
                    </div>
                    <div className="flex items-center justify-evenly text-xl w-72 h-14 bg-[#fff]">
                        <p>Share</p>
                        <p><FaLinkedin /></p>
                        <p><AiFillInstagram /></p>
                        <p><FaFacebookSquare /></p>
                        <p><FaXTwitter /></p>
                    </div>
                </div>
                <div className="grid grid-col-1 gap-3 sm:mt-5">
                    <div className="flex flex-col bg-[#fff] rounded-xl border border-[#DADADA] h-fit">
                        <img src={images.manbag} alt="A man carrying a bag" className="rounded-t-xl" />
                        <div className="p-8">
                            <p className="font-sans text-base text-[#81C167] font-bold">
                                NEWS
                            </p>
                            <h4 className="font-sans font-bold text-xl text-[#252524] w-[312px] my-5">
                                Enterprise Hubs Hosts Baykins Pharmacy
                            </h4>
                            <p className="text-[#616161] font-sans font-normal w-[301px]">
                                We had the pleasure of serving Baykins Pharmacy with our best as 
                                they held their staff retreat on Friday September …
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-[#fff] rounded-xl border border-[#DADADA] h-fit">
                        <img src={images.manbag} alt="A man carrying a bag" className="rounded-t-xl" />
                        <div className="p-8">
                            <p className="font-sans text-base text-[#81C167] font-bold">
                                NEWS
                            </p>
                            <h4 className="font-sans font-bold text-xl text-[#252524] w-[312px] my-5">
                                Enterprise Hubs Hosts Baykins Pharmacy
                            </h4>
                            <p className="text-[#616161] font-sans font-normal w-[301px]">
                                We had the pleasure of serving Baykins Pharmacy with our best as 
                                they held their staff retreat on Friday September …
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-[#fff] rounded-xl border border-[#DADADA] h-fit">
                        <img src={images.manbag} alt="A man carrying a bag" className="rounded-t-xl" />
                        <div className="p-8">
                            <p className="font-sans text-base text-[#81C167] font-bold">
                                NEWS
                            </p>
                            <h4 className="font-sans font-bold text-xl text-[#252524] w-[312px] my-5">
                                Enterprise Hubs Hosts Baykins Pharmacy
                            </h4>
                            <p className="text-[#616161] font-sans font-normal w-[301px]">
                                We had the pleasure of serving Baykins Pharmacy with our best as 
                                they held their staff retreat on Friday September …
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
export default EachArticle;