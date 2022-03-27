import React, { useState } from 'react'

import BlogWriter from 'react-blog-writer'
import './WriteBlog.css'

const WriteBlog = () => {
    let [nodes, setNodes] = useState(null)
    let [value, setValue] = useState('')

    return (
        <div>
            <BlogWriter finalNodes={setNodes} Placeholder={"Type here..."} onChange = {e=> setValue(e.target.value)} />

            <button type="submit" className='btn-tertiary'>Publish</button>
        </div>

    )
}

export default WriteBlog;