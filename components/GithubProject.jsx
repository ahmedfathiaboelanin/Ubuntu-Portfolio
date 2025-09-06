import React from 'react'
import { FaCodeBranch, FaLink, FaRegStar } from 'react-icons/fa'
import { MdOutlineRemoveRedEye } from 'react-icons/md'

function GithubProject({ repo}) {
    return (
        <div className='bg-gray-800 p-4 rounded-lg border border-gray-700 hover:bg-gray-700 group transition-colors duration-300 shadow-lg'>
            <div className="flex items-center justify-between">
                <h2 className='text-xl text-[#ff5555] border-b-2 pb-1 pe-4 w-max font-semibold'>{repo.name}</h2>
            </div>

            <div className="flex w-full mt-4 items-center flex-wrap justify-between">
                <div className="flex items-center gap-1 justify-center">
                    <div className='flex items-center mt-2'>
                        <span className='mr-1 text-white'>{repo.forks_count}</span>
                        <FaCodeBranch className='text-yellow-400' />
                    </div>
                    <div className='flex items-center mt-2'>
                        <span className='mr-1 text-white'>{repo.stargazers_count}</span>
                        <FaRegStar className='text-yellow-400' />
                    </div>
                    <div className='flex items-center mt-2'>
                        <span className='mr-1 text-white'>{repo.watchers_count}</span>
                        <MdOutlineRemoveRedEye className='text-yellow-400' />
                    </div>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline mx-2'>
                        <FaLink className='inline-block mr-1' />
                    </a>
                </div>
                {repo.language && (
                    <span className='text-sm text-gray-400 group-hover:border bg-gray-700 px-2 py-1 rounded'>{repo.language}</span>
                )}
            </div>
        </div>
    )
}

export default GithubProject