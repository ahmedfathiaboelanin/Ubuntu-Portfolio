import React from 'react'
import { FaSearch } from 'react-icons/fa'

function GitHubSearch({ setSearchTerm }) {
    return (
        <div className="form py-4 relative">
            <FaSearch className='absolute left-[13px] top-[30px] text-gray-500' />
            <input
                type="search"
                placeholder="Type to search"
                onChange={(e) => setSearchTerm(e.target.value)}
                className='rounded-4xl w-[400px] border-none outline-none bg-[#303030] px-[40px] py-2'
            />
        </div>
    )
}

export default GitHubSearch