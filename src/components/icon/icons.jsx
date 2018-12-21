import React, { Fragment } from "react";

const Icons = ({ icon }) => {
  switch (icon) {
    case "house": {
      return (
        <Fragment>
          <title>House</title>
          <path
            d="M20.333 14.68v5.97c0 .554-.446 1-1 1h-4.834a.501.501 0 0 1-.5-.5v-4.666c0-.275-.225-.5-.5-.5h-3c-.275 0-.5.225-.5.5v4.666c0 .275-.225.5-.5.5H4.665c-.555 0-1-.446-1-1v-5.97a.5.5 0 0 1 .183-.388l7.834-6.449c.183-.15.45-.15.638 0l7.834 6.45a.51.51 0 0 1 .179.387zm3.484-2.537l-3.484-2.87V3.501c0-.275-.225-.5-.5-.5h-2.334c-.275 0-.5.225-.5.5v3.025l-3.73-3.07a1.999 1.999 0 0 0-2.541 0L.18 12.142a.501.501 0 0 0-.067.704l1.063 1.291a.501.501 0 0 0 .704.067l9.801-8.07c.183-.15.45-.15.638 0l9.8 8.07c.213.175.53.146.705-.067l1.062-1.291a.501.501 0 0 0-.07-.704z"
            fill="currentColor"
          />
        </Fragment>
      );
    }
    case "magnifying-glass": {
      return (
        <Fragment>
          <title>Magnifying glass</title>
          <path
            d="M23.67 20.75l-4.673-4.673a1.124 1.124 0 0 0-.797-.329h-.764a9.701 9.701 0 0 0 2.062-5.999A9.748 9.748 0 0 0 9.75 0 9.748 9.748 0 0 0 0 9.749a9.748 9.748 0 0 0 9.749 9.75 9.701 9.701 0 0 0 6-2.063v.764c0 .3.117.586.328.797l4.673 4.673c.44.44 1.153.44 1.588 0l1.327-1.327c.44-.44.44-1.153.005-1.593zM9.749 15.748c-3.314 0-6-2.68-6-5.999 0-3.314 2.682-6 6-6 3.314 0 6 2.682 6 6 0 3.314-2.682 6-6 6z"
            fill="currentColor"
          />
        </Fragment>
      );
    }
    case "question": {
      return (
        <Fragment>
          <title>Question mark</title>
          <path
            d="M12.27 0C8.528 0 6.105 1.533 4.202 4.267a1.126 1.126 0 0 0 .243 1.54l2.022 1.534a1.125 1.125 0 0 0 1.559-.194c1.174-1.471 2.045-2.318 3.88-2.318 1.441 0 3.225.928 3.225 2.326 0 1.057-.873 1.6-2.297 2.398-1.66.931-3.857 2.09-3.857 4.988V15c0 .621.503 1.125 1.125 1.125h3.397c.621 0 1.125-.504 1.125-1.125v-.27c0-2.01 5.872-2.093 5.872-7.53 0-4.094-4.247-7.2-8.226-7.2zm-.47 17.506a3.25 3.25 0 0 0-3.247 3.247A3.25 3.25 0 0 0 11.8 24a3.25 3.25 0 0 0 3.247-3.247 3.25 3.25 0 0 0-3.247-3.247z"
            fill="currentColor"
          />
        </Fragment>
      );
    }
    default: {
      return null;
    }
  }
};

export default Icons;
