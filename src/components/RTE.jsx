import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'
import conf from '../conf/conf'

export default function RTE({ name, control, label, defaultValue = "" }) {
    const mode = useSelector((state) => state.theme.mode);
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Editor
                        key={mode}
                        apiKey={conf.tinymceApiKey}
                        value={value || ""}
                        init={{
                            height: 500,
                            menubar: true,
                            skin: mode === "dark" ? "oxide-dark" : "oxide",
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "help",
                                "wordcount",
                            ],
                            toolbar:
                                `undo redo | blocks | image |
                                 alignleft aligncenter bold italic forecolor | 
                                 alignright alignjustify
                                 | bullist numlist outdent indent |removeformat | help`,
                            content_style: mode === "dark"
                                ? `
                                        body {
                                            font-family: Helvetica, Arial, sans-serif;
                                            font-size: 14px;
                                            background-color: #222f3e;
                                            color: #f3f4f6;
                                        }`
                                        :`body {
                                            font-family: Helvetica, Arial, sans-serif;
                                            font-size: 14px;
                                            background-color: #ffffff;
                                            color: #111827;
                                        }
                                    `
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}
