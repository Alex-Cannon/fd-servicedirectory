import React, { Fragment } from "react";

const Icons = ({ icon }) => {
  switch (icon) {
    case "arrow-left":
      return (
        <path
          d="M12.316 23.81l1.06-1.074a.656.656 0 0 0 0-.92l-8.31-8.407h18.291a.647.647 0 0 0 .643-.65V11.24c0-.359-.288-.65-.643-.65H5.067l8.31-8.408a.656.656 0 0 0 0-.92L12.317.19a.638.638 0 0 0-.91 0L.188 11.54a.656.656 0 0 0 0 .92l11.219 11.35a.638.638 0 0 0 .91 0z"
          fill="currentColor"
        />
      );
    case "conversation":
      return (
        <path
          d="M17.333 6.667C17.333 2.983 13.454 0 8.667 0 3.879 0 0 2.983 0 6.667 0 8.096.588 9.412 1.583 10.5 1.025 11.758.104 12.758.092 12.77a.331.331 0 0 0-.063.363c.054.125.171.2.304.2 1.525 0 2.788-.512 3.696-1.041 1.342.654 2.93 1.041 4.638 1.041 4.787 0 8.666-2.983 8.666-6.666zm5.084 9.166C23.412 14.75 24 13.43 24 12c0-2.787-2.23-5.175-5.387-6.17.037.274.054.553.054.837 0 4.412-4.488 8-10 8-.45 0-.888-.034-1.321-.08 1.312 2.396 4.396 4.08 7.987 4.08 1.709 0 3.296-.384 4.638-1.042.908.53 2.17 1.042 3.696 1.042a.334.334 0 0 0 .242-.563c-.013-.012-.934-1.008-1.492-2.27z"
          fill="currentColor"
        />
      );
    case "cross":
      return (
        <Fragment>
          <path
            d="M12.013 6.505A5.502 5.502 0 0 0 6.517 12a5.502 5.502 0 0 0 5.496 5.495A5.502 5.502 0 0 0 17.508 12a5.502 5.502 0 0 0-5.495-5.495zm0 12.578c-3.906 0-7.084-3.177-7.084-7.083s3.178-7.083 7.084-7.083c3.906 0 7.083 3.177 7.083 7.083 0 3.905-3.177 7.083-7.083 7.083z"
            fill="currentColor"
          />
          <path
            d="M2.899 6.084c-.166 1.058-.42 2.427-.722 3.258-.528 1.45-.589 2.327-.589 2.86 0 .645.473 2.109.93 3.525.232.721.375 1.507.463 2.173l2.841-2.435A7.033 7.033 0 0 1 4.917 12c0-1.17.286-2.309.831-3.33L2.9 6.084zm-.577 14.22a.79.79 0 0 1-.794-.773c-.001-.036-.058-1.877-.522-3.317C.466 14.541 0 13.097 0 12.202c0-1.038.217-2.12.684-3.403.392-1.078.746-3.547.85-4.407A.794.794 0 0 1 2.855 3.9l4.44 4.033c.291.264.346.7.128 1.027a5.47 5.47 0 0 0-.919 3.042c0 1.139.347 2.233 1.004 3.163a.794.794 0 0 1-.132 1.06l-4.538 3.889a.794.794 0 0 1-.517.19zM6.073 21.101c1.058.167 2.428.42 3.259.722 1.451.528 2.327.59 2.86.59.645 0 2.11-.473 3.525-.93.722-.233 1.508-.376 2.173-.463l-2.435-2.842a7.034 7.034 0 0 1-3.464.905c-1.17 0-2.309-.285-3.33-.83L6.073 21.1zm6.12 2.9c-1.038 0-2.12-.218-3.404-.685-1.078-.392-3.547-.746-4.407-.85a.794.794 0 0 1-.493-1.321l4.032-4.441a.794.794 0 0 1 1.029-.127c.902.6 1.954.918 3.041.918 1.14 0 2.233-.347 3.163-1.003a.794.794 0 0 1 1.061.132l3.889 4.538a.794.794 0 0 1-.583 1.31c-.018 0-1.869.055-3.316.522-1.673.54-3.118 1.006-4.012 1.006zM18.252 15.33l2.85 2.587c.165-1.058.42-2.428.721-3.259.528-1.45.59-2.327.59-2.86 0-.644-.473-2.108-.93-3.525-.234-.723-.377-1.51-.464-2.177l-2.848 2.428A7.031 7.031 0 0 1 19.083 12c0 1.17-.285 2.308-.83 3.33zm3.427 4.977a.794.794 0 0 1-.534-.206l-4.441-4.032a.794.794 0 0 1-.128-1.028A5.467 5.467 0 0 0 17.495 12c0-1.144-.35-2.242-1.011-3.174a.794.794 0 0 1 .132-1.064l4.547-3.876a.794.794 0 0 1 1.31.584c0 .018.054 1.869.521 3.316.54 1.673 1.006 3.118 1.006 4.012 0 1.038-.217 2.12-.684 3.403-.472 1.298-.845 4.376-.85 4.407a.794.794 0 0 1-.787.7zM6.11 2.981l2.428 2.848a7.032 7.032 0 0 1 3.477-.912c1.17 0 2.308.285 3.33.83L17.932 2.9c-1.058-.167-2.428-.42-3.259-.722-1.45-.528-2.327-.589-2.86-.589-.645 0-2.11.472-3.525.93-.723.233-1.511.376-2.178.463zm2.271 4.681a.793.793 0 0 1-.604-.279L3.9 2.837a.794.794 0 0 1 .584-1.309c.018 0 1.869-.055 3.316-.522C9.473.466 10.92 0 11.813 0c1.038 0 2.12.217 3.403.684 1.298.472 4.376.846 4.407.85a.794.794 0 0 1 .493 1.322l-4.032 4.44a.794.794 0 0 1-1.028.127 5.47 5.47 0 0 0-3.041-.918c-1.145 0-2.242.35-3.175 1.01a.792.792 0 0 1-.459.147z"
            fill="currentColor"
          />
        </Fragment>
      );
    case "help":
      return (
        <path
          d="M12 16.064a1.355 1.355 0 1 0 0 2.71 1.355 1.355 0 0 0 0-2.71zm.371-1.16h-.774a.58.58 0 0 1-.58-.581v-.019c0-3.404 3.746-3.078 3.746-5.197 0-.969-.859-1.946-2.779-1.946-1.41 0-2.142.467-2.865 1.389a.58.58 0 0 1-.786.115l-.636-.443a.58.58 0 0 1-.128-.831c1.027-1.318 2.246-2.165 4.415-2.165 2.532 0 4.715 1.44 4.715 3.881 0 3.262-3.747 3.09-3.747 5.197v.019c0 .32-.26.58-.58.58zM12 1.547c5.74 0 10.452 4.65 10.452 10.452 0 5.772-4.675 10.452-10.452 10.452-5.77 0-10.452-4.673-10.452-10.452C1.548 6.232 6.223 1.548 12 1.548zM12 0C5.373 0 0 5.375 0 12c0 6.629 5.373 12 12 12s12-5.371 12-12c0-6.625-5.373-12-12-12z"
          fill="currentColor"
        />
      );
    case "house":
      return (
        <path
          d="M20.333 13.36v6.83c0 .633-.446 1.143-1 1.143h-4.834c-.275 0-.5-.257-.5-.571v-5.338c0-.315-.225-.572-.5-.572h-3c-.275 0-.5.257-.5.572v5.338c0 .314-.225.571-.5.571H4.665c-.555 0-1-.51-1-1.143v-6.83c0-.171.066-.333.183-.443l7.834-7.377a.46.46 0 0 1 .638 0l7.834 7.377c.112.11.179.272.179.443zm3.484-2.902l-3.484-3.283v-6.6c0-.315-.225-.573-.5-.573h-2.334c-.275 0-.5.258-.5.572v3.46L13.27.522c-.737-.696-1.804-.696-2.541 0L.18 10.458a.632.632 0 0 0-.067.806l1.063 1.477a.46.46 0 0 0 .704.076l9.801-9.23a.46.46 0 0 1 .638 0l9.8 9.23c.213.2.53.167.705-.076l1.063-1.477a.631.631 0 0 0-.071-.806z"
          fill="currentColor"
        />
      );
    case "medical":
      return (
        <path
          d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm6.968 13.355c0 .32-.262.58-.58.58h-4.453v4.452c0 .32-.26.58-.58.58h-2.71a.582.582 0 0 1-.58-.58v-4.452H5.613a.582.582 0 0 1-.58-.58v-2.71c0-.32.26-.58.58-.58h4.452V5.613c0-.32.26-.58.58-.58h2.71c.32 0 .58.26.58.58v4.452h4.452c.32 0 .58.26.58.58v2.71z"
          fill="currentColor"
        />
      );
    case "search":
      return (
        <path
          d="M23.835 21.979l-5.69-5.69a.556.556 0 0 0-.399-.165h-.619A9.723 9.723 0 0 0 19.5 9.75 9.748 9.748 0 0 0 9.749 0 9.748 9.748 0 0 0 0 9.75a9.748 9.748 0 0 0 9.75 9.749 9.723 9.723 0 0 0 6.374-2.372v.619c0 .15.061.29.164.398l5.69 5.69c.22.221.577.221.797 0l1.06-1.059a.563.563 0 0 0 0-.796zM9.75 17.249a7.498 7.498 0 0 1-7.5-7.5c0-4.143 3.356-7.5 7.5-7.5 4.143 0 7.5 3.357 7.5 7.5 0 4.144-3.357 7.5-7.5 7.5z"
          fill="currentColor"
        />
      );
    default:
      return null;
  }
};

export default Icons;