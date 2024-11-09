import React from 'react'

const TaskList = () => {
    return (
        <div id='task' className='h-[50%] overflow-x-auto w-full flex justify-start gap-5  flex-nowrap py-3 px-2 bg-[#1C1C1C]'>
            {/* 1 */}
            <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-lg'>
                <div className='flex  justify-between bg-red-400 py-3 px-5'>
                    <h3 className='bg-red-700  py-3 px-5 font-bold rounded-lg' >High</h3>
                    <h4 className='bg-red-400 py-3'>1 Dec 2024</h4>
                </div>
                <h2 className=' bg-red-400 mt-5 px-5 text-2xl font-semibold '>Prepare Monthly Financial Report.</h2>
                <p className='text-sm mt-2 px-5 bg-red-400 '>Compile and analyze financial data for the past month to create a detailed report on revenue, expenses, and profits. </p>
            </div>
{/* 2 */}
            <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-lg'>
                <div className='flex  justify-between bg-blue-400 py-3 px-5'>
                    <h3 className='bg-blue-700  py-3 px-5 font-bold rounded-lg' >High</h3>
                    <h4 className='bg-blue-400 py-3'>23 Nov 2024</h4>
                </div>
                <h2 className=' bg-blue-400 mt-5 px-5 text-2xl font-semibold '>Update Client Contact Database.</h2>
                <p className='text-sm mt-2 px-5 bg-blue-400 '>Review and update the client contact database, ensuring accuracy and completeness to improve communication and streamline client management.</p>
            </div>
            {/* 3 */}
            <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-lg'>
                <div className='flex  justify-between bg-green-400 py-3 px-5'>
                    <h3 className='bg-green-700  py-3 px-5 font-bold rounded-lg' >High</h3>
                    <h4 className='bg-green-400 py-3'>20 Feb 2024</h4>
                </div>
                <h2 className=' bg-green-400 mt-5 px-5 text-2xl font-semibold '>Design New Marketing Brochure</h2>
                <p className='text-sm mt-2 px-5 bg-green-400 '>Create a visually appealing brochure to highlight products and services, supporting the sales team by attracting potential clients.</p>
            </div>
            {/* 4 */}
            <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-lg'>
                <div className='flex  justify-between bg-red-400 py-3 px-5'>
                    <h3 className='bg-red-700  py-3 px-5 font-bold rounded-lg' >High</h3>
                    <h4 className='bg-red-400 py-3'>20 Jan 2025</h4>
                </div>
                <h2 className=' bg-red-400 mt-5 px-5 text-2xl font-semibold '>Optimize Website Loading Speed
.</h2>
                <p className='text-sm mt-2 px-5 bg-red-400 '>Analyze and optimize website performance by improving code, images, and server response to enhance user experience and reduce bounce rates.

</p>
            </div>
            {/* 5 */}
            <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-lg'>
                <div className='flex  justify-between bg-yellow-400 py-3 px-5'>
                    <h3 className='bg-yellow-700  py-3 px-5 font-bold rounded-lg' >High</h3>
                    <h4 className='bg-yellow-400 py-3'>25 Dec 2024</h4>
                </div>
                <h2 className=' bg-yellow-400 mt-5 px-5 text-2xl font-semibold '> Market Research on Competitors</h2>
                <p className='text-sm mt-2 px-5 bg-yellow-400 '>Gather data on competitors'pricing, and strategies to identify market opportunities and help improve the company’s offerings.</p>
            </div>
            {/* 6 */}
            <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-lg'>
                <div className='flex  justify-between bg-green-400 py-3 px-5'>
                    <h3 className='bg-green-700  py-3 px-5 font-bold rounded-lg' >High</h3>
                    <h4 className='bg-green-400 py-3'>30 Nov 2024</h4>
                </div>
                <h2 className=' bg-green-400 mt-5 px-5 text-2xl font-semibold '>Implement User Authentication Feature</h2>
                <p className='text-sm mt-2 px-5 bg-green-400 '>Develop a secure user authentication system with login, registration, and password recovery to ensure data protection and secure access.</p>
            </div>
            {/* 7 */}
            <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-lg'>
                <div className='flex  justify-between bg-red-400 py-3 px-5'>
                    <h3 className='bg-red-700  py-3 px-5 font-bold rounded-lg' >High</h3>
                    <h4 className='bg-red-400 py-3'>20 Feb 2024</h4>
                </div>
                <h2 className=' bg-red-400 mt-5 px-5 text-2xl font-semibold '>Develop Social Media Content Calendar.</h2>
                <p className='text-sm mt-2 px-5 bg-red-400 '>Create a content calendar for social media, ensuring consistent posts that align with the brand’s marketing strategy and boost engagement.</p>
            </div>
         {/* 8 */}
            <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-lg'>
                <div className='flex  justify-between bg-green-400 py-3 px-5'>
                    <h3 className='bg-green-700  py-3 px-5 font-bold rounded-lg' >High</h3>
                    <h4 className='bg-green-400 py-3'>20 Feb 2024</h4>
                </div>
                <h2 className=' bg-green-400 mt-5 px-5 text-2xl font-semibold '>Prepare Presentation for Quarterly Review.</h2>
                <p className='text-sm mt-2 px-5 bg-green-400 '>Summarize the quarter’s key performance metrics and accomplishments in a presentation for stakeholders, highlighting progress and future goals.</p>
            </div>
        </div>
    )
}

export default TaskList 