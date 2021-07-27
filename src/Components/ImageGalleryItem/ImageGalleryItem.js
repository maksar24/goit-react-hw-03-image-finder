import React from "react";
import styles from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ collection, actionBackground }) => {
  return collection.map((el) => (
    <li
      key={el.id}
      className={styles.ImageGalleryItem}
      onClick={actionBackground}
    >
      <img
        src={el.webformatURL}
        alt={el.tags}
        data-source={el.largeImageURL}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  ));
};
