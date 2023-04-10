import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import PhotoContext from "./PhotoContext";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const { favorites, setFavorites } = useContext(PhotoContext);

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((photo) => photo.id !== id));
  };

  const isFavorite = (photo) => {
    return favorites.some((favorite) => favorite.id === photo.id);
  };

  return (
    <div className={styles.gallery}>
      {favorites.map((photo) => (
        <div key={photo.id} className={styles.cardWrapper}>
          <Card className={`${styles.photoCard} h-100`}>
            <div className="position-relative">
              <Card.Img className={styles.photoImg} variant="top" src={photo.src.medium} />
              <FontAwesomeIcon
                icon={isFavorite(photo) ? fasHeart : farHeart}
                className={`${styles.favoriteIcon} ${isFavorite(photo) ? styles.filled : ""}`}
                onClick={() => removeFromFavorites(photo.id)}
              />
            </div>
            <Card.Body className={styles.cardBody}>
              <Card.Title className={styles.cardTitle}>{photo.photographer}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
