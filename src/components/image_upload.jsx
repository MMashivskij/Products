import React from 'react';

import { useStyles } from '../styles';


const ImageUploadContainer = ({ handler, src, id }) => {
  const classes = useStyles();

  return (
    <div>
      <label
        className={src ? classes.labelWithoutBack : classes.labelWithBack}
        htmlFor={id}
      >
        {src && (
          <img className={classes.image} src={src} alt='photo' />
        )}
        <input
          className={classes.input}
          id={id}
          name='photo'
          type='file'
          multiple
          onChange={handler}
        />
      </label>
    </div>
  );
};

export default ImageUploadContainer;