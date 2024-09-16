'use client'; // Place this at the very top

import { useEffect, useState } from 'react';

function Services() {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: '',
        phone_number: '',

        });
        const handleChange = (event:any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        };


        const submitHandler = (e:any) => {
            e.preventDefault();
            // sendEmail(formData);
            console.log('formData', formData)
            setFormData({ first_name: '', last_name:'', email: '', message: '',phone_number:'' });
            };


    return (
        <div id="contact">

            <main className=" bg-white  3xl:px-[20rem] 2xl:px-40  sm:px-0  md:px-10 h-auto">

                <div className=" my-12 mx-auto p-5 md:p-5 sm:p-0">
                    <div className="flex 2xl:flex-row lg:flex-row md:flex-col sm:flex-col -mx-1 lg:-mx-4">

                        <div className="my-1 px-1 w-full  lg:my-4 lg:px-4 lg:w-[40%] ">

                            <article className="overflow-hidden rounded-lg  2xl:h-[750px]  md:h-auto sm:h-auto">

                                <header className=" leading-tight ">
                                    <ul className='list-none px-5 py-5'>


                                        <li className="xl:text-[42px]  text-[30px] text-primary pb-4 font-sens">

                                            Let’s Work Together

                                        </li>


                                        <li className="xl:text-[26px]  text-[26px]  pb-2 font-bold">

                                        Contact us

                                        </li>

                                        <li className=" font-medium">
                                            <p className=" text-[18px]  leading-[27px] text-[#827979] pb-2 pt-5 font-regular text-justify">
                                                Ready to enhance your business operations with Nexify World’s innovative vehicle management ecosystem?
                                            </p>
                                        </li>

                                        <li className="text-2xl font-medium font-regular  py-5">

                                            <div className='rounded-lg border-gray-400 flex border-[1px] w-[240px] h-[50px] justify-evenly items-center'>
                                            <img src="/phone-call (7).png" className='h-[30px] w-[30px]'/>
                                            <span className="inline-block align-middle  xl:text-[20px]  text-[18px] font-regular ">
                                              
                                              <p> +91 9625746011</p>
                                             
                                          </span>
                                            </div>
                                          
                                        </li>

                                        <li className="text-2xl font-medium font-regular pb-5">

                                        <div className='rounded-lg border-gray-400 flex border-[1px] w-[280px] h-[50px] justify-evenly items-center'>
                                            <img src="/mail (3) 1.png" className='h-[30px] w-[30px]'/>
                                            <span className="inline-block align-middle  xl:text-[20px]  text-[18px] font-regular ">
                                              
                                              <p>partner@nexifyworld.in</p>
                                             
                                          </span>
                                            </div>
                                            {/* <span className="inline-block align-middle  text-[20px] font-regular  border-[1px] px-10 py-[5px] rounded-lg border-gray-400">
                                               
                                            </span> */}
                                        </li>

                                        <li className="text-2xl font-medium  font-regular pb-5">
                                        <div className='rounded-lg border-gray-400 flex border-[1px]  md:h-[80px] h-auto justify-around items-center '>
                                            <img src="/map-pin (6) 1 (1).png" className='h-[30px] w-[30px] '/>
                                            <span className="inline-block align-middle  xl:text-[20px] 3xl:w-[85%]  2xl:w-[80%]  w-[80%]   text-[18px] font-regular ">
                                              
                                              <p>Mohan Cooperative Estate, Industrial Area , New Delhi - 110044</p>
                                             
                                          </span>
                                            </div>
                                               
                                        
                                        </li>

                                        <li className="text-2xl font-medium">
                                            <p className=" text-[22px] xl:text-[25px] font-bold pb-2 pt-5">
                                                Follow us:
                                            </p>
                                            <ul className='flex flex-row '>
                                                <li className='mr-5'>
                                                    <a href='https://www.instagram.com/nexifyworld.in/' target="blank">
                                                    <img src="/social_media/insta.png" className=' xl:h-auto h-[40px]' />

                                                    </a>
                                                </li>
                                                <li className='mr-5'>
                                                <a href='/#' target="blank">
                                                    <img src="/social_media/google.png" className='xl:h-auto h-[40px]'/>
                                                    </a>
                                                </li>
                                                <li className='mr-5'>
                                                <a href='https://www.linkedin.com/company/nexify-world/' target="blank">
                                                    <img src="/social_media/linkdin.png" className='xl:h-auto h-[40px]'/>
                                                    </a>
                                                </li>
                                                <li className='mr-5'>
                                                <a href='/#' target="blank">
                                                    <img src="/social_media/twitter.png" className='xl:h-auto h-[40px]'/>
                                                    </a>
                                                </li>

                                            </ul>
                                        </li>


                                        <li className="text-2xl font-medium">
                                            <p className=" text-[16px]  pb-2 pt-5 font-regular text-[#655C5C]">
                                            © 2024 Nexify World| Terms & Conditions | Privacy Policy
                                            Nexify World All Rights Reserved.
                                            </p>
                                        </li>

                                    </ul>

                                </header>

                            </article>

                        </div>


                        <div className="my-1 px-2 w-full  lg:my-4 lg:px-4 lg:w-[60%] ">

                            <article className="overflow-hidden rounded-[32px] shadow-sm bg-colorLight border border-gray-400 bg-primary h-auto">

                                <header className=" leading-tight p-10 md:p-8 sm:p-4">
                                    <h1 className='text-white text-[40px]  xl:text-[59px] font-bold text-center ' >Get in Touch</h1>
                                    <p className='text-white  text-[18px]  xl:text-[24px]  font-regular  text-center py-4 mb-10' >You can reach us anytime</p>
                                    <form className="w-full max-w-lg contents flex-contents" onSubmit={submitHandler}>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block  tracking-wide text-white text-[18px] font-bold mb-2" htmlFor="grid-first-name">
                                                    First Name
                                                </label>
                                                <input onChange={handleChange}  name="first_name" className="font-regular  text-[16px]  placeholder-white placeholder-opacity-100 appearance-none block w-full bg-transparent text-white border border-white-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent" id="grid-first-name" type="text" placeholder="First Name" />

                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <label className="block  tracking-wide text-white text-[18px] font-bold mb-2" htmlFor="grid-last-name">
                                                    Last Name
                                                </label>
                                                <input onChange={handleChange} name="last_name" className="font-regular placeholder-white  text-[16px]  placeholder-opacity-100 appearance-none block w-full bg-transparent text-white border border-white-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent" id="grid-first-name" type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block  tracking-wide text-white text-[18px] font-bold mb-2" htmlFor="grid-password">
                                                    Email
                                                </label>
                                                <input onChange={handleChange} name="email" className="font-regular placeholder-white  text-[16px]  placeholder-opacity-100 appearance-none block w-full bg-transparent text-white border border-white-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent" id="grid-first-name" type="text" placeholder="Email" />


                                            </div>
                                        </div>

                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block  tracking-wide text-white text-[18px] font-bold mb-2" htmlFor="grid-password">
                                                    Phone Number
                                                </label>
                                                <input onChange={handleChange} name= "phone_number" className=" font-regular placeholder-white  text-[16px]  placeholder-opacity-100 appearance-none block w-full bg-transparent text-white border border-white-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent" id="grid-first-name" type="number" placeholder="IND | 123456789" />


                                            </div>
                                        </div>


                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block  tracking-wide text-white text-[18px] font-bold mb-2" htmlFor="grid-password">
                                                    Message
                                                </label>
                                                <textarea onChange={handleChange} name="message" className=" font-regular placeholder-white  text-[16px]  placeholder-opacity-100 appearance-none block w-full bg-transparent text-white border border-white-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent" id="grid-first-name" placeholder="Type a Message....." />


                                            </div>
                                        </div>

                                        <button type="submit" className='w-full 2xl:h-[50px] sm:h-[30px] bg-white rounded-full text-primary font-bold '>Enquire Now</button>
                                        <p className=' 2xl:text-md sm:text-sm px-5 p-2 text-white font-regular text-center'>By contacting us, you agree to our Terms of Service and privacy policy.</p>


                                    </form>


                                </header>

                            </article>

                        </div>





                    </div>
                </div>

            </main>
        </div>
    )
}

export default Services