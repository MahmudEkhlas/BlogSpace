import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { useSelector } from 'react-redux';
import { Container, PostCard } from '../components'
import Landing from './homepages/Landing';
import Noposts from './homepages/Noposts';
import { Link } from 'react-router';

function Home() {
    const authStatus = useSelector((state) => state.auth.status);
    const user = useSelector(state => state.auth.userData);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (authStatus && user?.$id) {
            service.getUserPosts(user?.$id).then((result) => {
                if (result) {
                    setPosts(result.rows);
                }
            })
        }
    }, [user, authStatus])

    if (authStatus === false) {
        return (
            <Container>
                <Landing />
            </Container>
        )
    }

    if (posts.length === 0) {
        return (

            <Container>
                <Noposts />
            </Container>

        )
    }


    return (
        <div className='w-full py-4'>
            <Container>

                {/* Welcome Section */}
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="
                                    text-4xl
                                    font-normal
                                    text-gray-900
                                    dark:text-gray-100
                                ">
                            <span className="font-[cursive] font-normal text-2xl">
                                Welcome back,
                            </span>{" "}
                            <span className=" font-normal text-blue-600 dark:text-cyan-400">
                                {user?.name}
                            </span>
                        </h1>
                    </div>

                    <Link
                        to="/add-post"
                        className="
                                inline-flex
                                items-center
                                justify-center
                                rounded-xl
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                bg-blue-600
                                text-white
                                shadow-lg
                                transition-all
                                duration-200
                                hover:bg-blue-700
                                hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
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
                        Create Post +
                    </Link>
                </div>

                {/* Post Section */}
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home