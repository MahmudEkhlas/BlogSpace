import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import service from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector, useDispatch } from "react-redux";
import { deleteStorePost } from "../store/postSlice";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                dispatch(deleteStorePost(post.$id));
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full mb-6  rounded-xl p-4">

                    <div className="w-full flex items-start justify-between gap-6">

                        {/* Image */}
                        <div className="flex justify-start">
                            <img
                                src={service.getFilePreview(post.featuredImage)}
                                alt={post.title}
                                className="
                                            max-w-full
                                            max-h-125
                                            w-auto
                                            h-auto
                                            rounded-xl
                                            object-contain
                                        "
                            />
                        </div>

                        {/* Edit / Delete */}
                        {isAuthor && (
                            <div className="shrink-0 flex gap-3">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button className="
                                                bg-blue-500
                                                text-white
                                                hover:bg-blue-400
                                                dark:text-[#07111F]
                                            ">
                                        Edit
                                    </Button>
                                </Link>

                                <Button
                                    className="bg-red-500 opacity-80 hover:opacity-100 transition-opacity duration-200 dark:text-[#07111F]"
                                    onClick={deletePost}
                                >
                                    Delete
                                </Button>
                            </div>
                        )}

                    </div>

                </div>

                {/* Title and content portion */}
                <div className="w-full mb-8">
                    <h1 className="
                                text-5xl
                                font-bold
                                leading-tight
                                mb-6
                            ">
                        {post.title}
                    </h1>
                </div>
                <div className="browser-css text-lg leading-8">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}