import dynamic from 'next/dynamic'
import parse from "html-react-parser"
import React, { useState } from 'react'

const ClassicEditor = dynamic(
    () => import('@ckeditor/ckeditor5-build-classic'), { ssr: false }
)

const CKEditor = dynamic(
    () => import('@ckeditor/ckeditor5-react'), { ssr: false }
)

function CreatePost() {
    const [text, setText] = useState('')

    return (
        <>
            hello
        </>
    )
}

export default CreatePost