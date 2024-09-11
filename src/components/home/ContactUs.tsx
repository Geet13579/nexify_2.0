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
        <div>

            <main className=" bg-white 2xl:px-40 sm:px-0  md:px-10 h-auto">

                <div className=" my-12 mx-auto p-5 md:p-5 sm:p-0">
                    <div className="flex 2xl:flex-row lg:flex-row md:flex-col sm:flex-col -mx-1 lg:-mx-4">

                        <div className="my-1 px-1 w-full  lg:my-4 lg:px-4 lg:w-[40%] ">

                            <article className="overflow-hidden rounded-lg bg-colorLight  2xl:h-[750px]  md:h-auto sm:h-auto">

                                <header className=" leading-tight ">
                                    <ul className='list-none px-5 py-5'>


                                        <li className="2xl:text-2xl text-primary sm:text-xl pb-4 font-bold">

                                            Let’s Work Together

                                        </li>


                                        <li className="2xl:text-2xl sm:text-lg pb-2 font-medium">

                                            Contact us

                                        </li>

                                        <li className="text-2xl font-medium">
                                            <p className=" 2xl:text-lg sm:text-sm text-gray-500 pb-2 pt-5 font-regular text-justify">
                                                Ready to enhance your business operations with Nexify World’s innovative vehicle management ecosystem?
                                            </p>
                                        </li>

                                        <li className="text-2xl font-medium font-regular  py-5">
                                            <span className="inline-block align-middle  2xl:text-[15px] sm:text-[13px]  text-black-400 border-[1px] py-1 px-5 rounded-lg border-gray-400">
                                                +91 98447 64343
                                            </span>
                                        </li>

                                        <li className="text-2xl font-medium font-regular pb-5">
                                            <span className="inline-block align-middle  2xl:text-[15px] sm:text-[13px]   text-black-400 border-[1px] py-1 px-5 rounded-lg border-gray-400">
                                                partner@nexifyworld.in
                                            </span>
                                        </li>

                                        <li className="text-2xl font-medium  font-regular pb-5">
                                            <span className="inline-block align-middle  2xl:text-[15px] sm:text-[13px]   text-black-400 border-[1px] py-1 px-5 rounded-lg border-gray-400">
                                                Mohan Cooperative Estate, Industrial Area , New Delhi - 110044
                                            </span>
                                        </li>

                                        <li className="text-2xl font-medium">
                                            <p className="  2xl:text-lg sm:text-sm text-black-500 pb-2 pt-5">
                                                Follow us:
                                            </p>
                                            <ul className='flex flex-row '>
                                                <li className='mr-5'>
                                                    <img src="/social_media/insta.png" className=' 2xl:h-auto sm:h-[30px]' />
                                                </li>
                                                <li className='mr-5'>
                                                    <img src="/social_media/google.png" className='2xl:h-auto sm:h-[30px]'/>
                                                </li>
                                                <li className='mr-5'>
                                                    <img src="/social_media/linkdin.png" className='2xl:h-auto sm:h-[30px]'/>
                                                </li>
                                                <li className='mr-5'>
                                                    <img src="/social_media/twitter.png" className='2xl:h-auto sm:h-[30px]'/>
                                                </li>

                                            </ul>
                                        </li>


                                        <li className="text-2xl font-medium">
                                            <p className="  2xl:text-lg sm:text-sm text-gray-500 pb-2 pt-5 font-regular">
                                                © 2024 Classic Interior | Terms & Conditions | Privacy Policy
                                                Classic Interior All Rights Reserved.
                                            </p>
                                        </li>

                                    </ul>

                                </header>

                            </article>

                        </div>


                        <div className="my-1 px-1 w-full  lg:my-4 lg:px-4 lg:w-[60%] ">

                            <article className="overflow-hidden rounded-lg shadow-sm bg-colorLight border border-gray-400 bg-primary h-[750px] md:h-[750px] sm:h-auto">

                                <header className=" leading-tight p-10 md:p-8 sm:p-4">
                                    <h1 className='text-white text-4xl sm:text-2xl font-bold text-center ' >Get in Touch</h1>
                                    <p className='text-white text-xl sm:text-lg font-regular  text-center pb-8' >You can reach us anytime</p>
                                    <form className="w-full max-w-lg contents flex-contents" onSubmit={submitHandler}>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block  tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                    First Name
                                                </label>
                                                <input onChange={handleChange}  name="first_name" className="font-regular  2xl:text-[15px] sm:text-[10px]  placeholder-white placeholder-opacity-100 appearance-none block w-full bg-transparent text-white border border-white-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent" id="grid-first-name" type="text" placeholder="First Name" />

                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <label className="block  tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                    Last Name
                                                </label>
                                                <input onChange={handleChange} name="last_name" className="font-regular placeholder-white  2xl:text-[15px] sm:text-[10px]  placeholder-opacity-100 appearance-none block w-full bg-transparent text-white border border-white-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent" id="grid-first-name" type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block  tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
                                                    Email
                                                </label>
                                                <input onChange={handleChange} name="email" className="font-regular placeholder-white  2xl:text-[15px] sm:text-[10px]  placeholder-opacity-100 appearance-none block w-full bg-transparent text-white border border-white-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent" id="grid-first-name" type="text" placeholder="Email" />


                                            </div>
                                        </div>

                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block  tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
                                                    Phone Number
                                                </label>
                                                <input onChange={handleChange} name= "phone_number" className=" font-regular placeholder-white  2xl:text-[15px] sm:text-[10px]  placeholder-opacity-100 appearance-none block w-full bg-transparent text-white border border-white-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent" id="grid-first-name" type="number" placeholder="IND | 123456789" />


                                            </div>
                                        </div>


                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block  tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
                                                    Message
                                                </label>
                                                <textarea onChange={handleChange} name="message" className=" font-regular placeholder-white  2xl:text-[15px] sm:text-[10px]  placeholder-opacity-100 appearance-none block w-full bg-transparent text-white border border-white-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent" id="grid-first-name" placeholder="Type a Message....." />


                                            </div>
                                        </div>

                                        <button type="submit" className='w-full 2xl:h-[50px] sm:h-[30px] bg-white rounded-full text-primary font-bold '>Enquire Now</button>
                                        <p className=' 2xl:text-md sm:text-sm px-5 p-2 text-white font-regular'>By contacting us, you agree to our Terms of Service and privacy policy.</p>


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