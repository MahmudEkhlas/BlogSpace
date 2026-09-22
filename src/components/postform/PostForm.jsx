import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Input, Button, Select, RTE } from '../index'
import service from '../../appwrite/config'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { addPost, updateStorePost } from '../../store/postSlice'

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post ? post.title : "",
            slug: post ? post.$id : "",
            content: post ? post.content : "",
            status: post ? post.status : "active",
        }
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData)
    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await service.fileUpload(data.image[0]) : null;
            if (file) {
                service.deleteFile(post.featuredImage);
            }
            const dbPost = await service.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined
            });
            if (dbPost) {
                dispatch(updateStorePost(dbPost));
                navigate(`/post/${dbPost.$id}`);
            }
        }
        else {
            //the below line of code is the unchecked version of the written code
            //const file = await appwriteService.uploadFile(data.image[0]);
            //Study the below line is required and correct or not
            const file = data.image[0] ? await service.fileUpload(data.image[0]) : null;
            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await service.createPost({ ...data, userId: userData.$id, userName: userData.name });
                if (dbPost) {
                    dispatch(addPost(dbPost));
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    }
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }
        return "";
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);


    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="
                        mb-4
                        py-2.5
                        bg-white
                        border-gray-300
                        text-gray-900
                        placeholder:text-gray-400
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-500/20

                        dark:bg-[#111c30]
                        dark:border-white/10
                        dark:text-gray-100
                        dark:placeholder:text-gray-500
                        dark:focus:border-cyan-400
                        dark:focus:ring-cyan-400/20
                        dark:focus:bg-[#111c30]

                        caret-gray-900
                        dark:caret-gray-100
                    "
                    {...register("title", { required: "Title is required" })}
                />

                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="
                            mb-4
                            py-2.5
                            bg-white
                            border-gray-300
                            text-gray-900
                            placeholder:text-gray-400
                            focus:border-blue-500
                            focus:ring-2
                            focus:ring-blue-500/20

                            dark:bg-[#111c30]
                            dark:border-white/10
                            dark:text-gray-100
                            dark:placeholder:text-gray-500
                            dark:focus:border-cyan-400
                            dark:focus:ring-cyan-400/20
                            dark:focus:bg-[#111c30]

                            caret-gray-900
                            dark:caret-gray-100
                    "
                    {...register("slug", { required: "Slug is required" })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />

                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="
                            mb-4
                            py-2.5

                            bg-white
                            border-gray-300
                            text-gray-900

                            file:mr-4
                            file:rounded-xl
                            file:border-0
                            file:px-4
                            file:py-2
                            file:text-sm
                            file:font-semibold
                            file:bg-blue-600
                            file:text-white
                            hover:file:bg-blue-700

                            dark:bg-[#111c30]
                            dark:border-white/10
                            dark:text-gray-100

                            dark:file:bg-linear-to-r
                            dark:file:from-cyan-400
                            dark:file:to-blue-500
                            dark:file:text-[#07111F]
                            dark:hover:file:from-cyan-300
                            dark:hover:file:to-blue-400
                    "
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="
                                w-full
                                mb-4
                                overflow-hidden
                                rounded-xl
                                border
                                border-gray-200
                                bg-white
                                shadow-sm

                                dark:border-white/10
                                dark:bg-[#111c30]
                                dark:shadow-[0_0_20px_rgba(34,211,238,0.05)]">
                        <img
                            src={service.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full rounded-xl object-cover"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="
                        mb-4
                        py-2.5
                        bg-white
                        border-gray-300
                        text-gray-900
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-500/20
                        dark:bg-[#111c30]
                        dark:border-white/10
                        dark:text-gray-100
                        dark:focus:border-cyan-400
                        dark:focus:ring-cyan-400/20
                        dark:focus:bg-[#111c30]
                    "
                    {...register("status", { required: "Status is required" })}
                />
                <Button
                    type="submit"
                    className="
                            w-full
                            bg-blue-600
                            text-white
                            font-semibold
                            rounded-xl
                            py-3
                            shadow-lg
                            transition-all
                            duration-200
                            ease-out
                            hover:bg-blue-700
                            hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]
                            dark:bg-linear-to-r
                            dark:from-cyan-400
                            dark:to-blue-500
                            dark:text-[#07111F]
                            dark:hover:from-cyan-300
                            dark:hover:to-blue-400
                            dark:shadow-[0_0_20px_rgba(34,211,238,0.18)]
                            dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                        "
                >
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

