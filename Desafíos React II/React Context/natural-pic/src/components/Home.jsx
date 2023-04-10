import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import PhotoContext from "./PhotoContext";
import styles from "./Home.module.css";

const Home = () => {
    const [photos, setPhotos] = useState([]);
    const { favorites, setFavorites } = useContext(PhotoContext);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://api.pexels.com/v1/curated", {
                headers: {
                    Authorization: "fqPEGjUoBzaYTxypS5cet8h01mHEzpIThN4OPOXzEiqlD6dyrD6TKONL",
                },
            });

            setPhotos(response.data.photos);
        } catch (error) {
            console.error("Error fetching data from Pexels API:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const addToFavorites = (photo) => {
        if (isFavorite(photo)) {
            removeFromFavorites(photo.id);
        } else {
            setFavorites([...favorites, photo]);
        }
    };

    const removeFromFavorites = (id) => {
        setFavorites(favorites.filter((photo) => photo.id !== id));
    };

    const isFavorite = (photo) => {
        return favorites.some((favorite) => favorite.id === photo.id);
    };

    return (
        <div className={styles.gallery}>
            {photos.map((photo) => (
                <div key={photo.id} className={styles.cardWrapper}>
                    <Card className={`${styles.photoCard} h-100`}>
                        <div className="position-relative">
                            <Card.Img className={styles.photoImg} variant="top" src={photo.src.medium} />
                            <FontAwesomeIcon
                                icon={isFavorite(photo) ? fasHeart : farHeart}
                                className={`${styles.favoriteIcon} ${isFavorite(photo) ? styles.filled : ""}`}
                                onClick={() => addToFavorites(photo)}
                            />
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Home;
