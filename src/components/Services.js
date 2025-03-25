import React from 'react';
import { FaRobot, FaBrain, FaChartLine, FaCogs } from 'react-icons/fa';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">AI Services</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                        Empowering businesses with cutting-edge AI solutions.
                    </h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* AI-Powered Solutions */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm flex flex-col items-center">
                                <FaRobot size={60} className="text-blue-900 group-hover:text-white" />
                                <h2 className="font-semibold my-4 text-2xl text-center">AI-Powered Solutions</h2>
                                <p className="text-md font-medium text-center">
                                    Enhancing business automation, decision-making, and efficiency with AI-driven technology.
                                </p>
                            </div>
                        </div>

                        {/* Machine Learning & Data Analytics */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm flex flex-col items-center">
                                <FaBrain size={60} className="text-blue-900 group-hover:text-white" />
                                <h2 className="font-semibold my-4 text-2xl text-center">Machine Learning & Data Analytics</h2>
                                <p className="text-md font-medium text-center">
                                    Unlock valuable insights, optimize operations, and predict trends with AI-powered analytics.
                                </p>
                            </div>
                        </div>

                        {/* AI Automation & Process Optimization */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm flex flex-col items-center">
                                <FaCogs size={60} className="text-blue-900 group-hover:text-white" />
                                <h2 className="font-semibold my-4 text-2xl text-center">AI Automation & Process Optimization</h2>
                                <p className="text-md font-medium text-center">
                                    Streamline workflows, reduce manual tasks, and increase efficiency with AI-driven automation.
                                </p>
                            </div>
                        </div>

                        {/* IT & AI Consultation */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm flex flex-col items-center">
                                <FaChartLine size={60} className="text-blue-900 group-hover:text-white" />
                                <h2 className="font-semibold my-4 text-2xl text-center">IT & AI Consultation</h2>
                                <p className="text-md font-medium text-center">
                                    Expert guidance on AI strategy, implementation, and optimization for businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;