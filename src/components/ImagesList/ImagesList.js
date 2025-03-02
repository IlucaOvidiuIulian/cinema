import useImages from "../../hooks/useImages";
import "./ImagesList.css";
import Masonry from "react-masonry-css";

function ImagesList() {
  const { images } = useImages();
  console.log(images);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className="images-list">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image) => {
          return (
            <div key={image.id}>
              <img src={image.url} alt={image.description} />;
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}
export default ImagesList;
