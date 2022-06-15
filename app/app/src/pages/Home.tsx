import React, { useState, useEffect } from "react";
import FeaturedVideos from "../components/FeaturedVideos";
import {getRecommendations} from "../services/recommendations";

function Home() {
    const [featuredVideos, setFeaturedVideos] = useState<any[]>([])

    useEffect(() => {
        getRecommendations().then(recommendations => {
            setFeaturedVideos(recommendations)
        })
    }, [])


    return (
        <FeaturedVideos videos={featuredVideos} />
    )
}

export default Home;