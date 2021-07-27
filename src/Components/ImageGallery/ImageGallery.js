import React from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Button } from "../Button/Button";
import styles from "./ImageGallery.module.css";

export const ImageGallery = ({
  collection,
  actionButton,
  actionBackground,
}) => {
  return (
    <div className={styles.Container}>
      <ul className={styles.ImageGallery}>
        <ImageGalleryItem
          collection={collection}
          actionBackground={actionBackground}
        />
      </ul>
      <Button action={actionButton} />
    </div>
  );
};
