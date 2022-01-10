import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import "./index.css";

function LazyImage({ src, alt }) {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <div className="img-wrapper-style">
      <div className="placeholder-style" ref={refPlaceholder} />
      <LazyLoad>
        <img
          className="img-style"
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </div>
  );
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;
