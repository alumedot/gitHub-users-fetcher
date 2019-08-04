import React from 'react';

import classesRepo from "../../../Containers/Repo/Repo.module.css";
import classesUserCard from '../../../Containers/UserCard/UserCard.module.css';

//Repo icons
export const dirIcon = (
    <svg aria-label="directory"
         className={classesRepo.Icon}
         viewBox="0 0 14 16"
         width="14"
         height="16"
         role="img">
      <path fillRule="evenodd"
            d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/>
    </svg>
);

export const fileIcon = (
    <svg aria-label="file"
         className={classesRepo.Icon}
         viewBox="0 0 12 16"
         width="12"
         height="16"
         role="img">
      <path fillRule="evenodd"
            d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/>
    </svg>
);

export const downloadIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
         className={classesRepo.ReadmeIcon}
         viewBox="0 0 50 50">
      <g id="surface1">
        <path d="M 24.78125 2.9375 C 23.75 3.050781 22.976563 3.933594 23 4.96875 L 23 28.6875 L 19.40625 25.09375 C 18.984375 24.660156 18.386719 24.441406 17.78125 24.5 C 17.003906 24.574219 16.339844 25.097656 16.085938 25.835938 C 15.828125 26.578125 16.027344 27.398438 16.59375 27.9375 L 25 36.34375 L 33.40625 27.9375 C 33.929688 27.4375 34.144531 26.695313 33.964844 25.992188 C 33.785156 25.292969 33.242188 24.742188 32.542969 24.554688 C 31.84375 24.367188 31.097656 24.574219 30.59375 25.09375 L 27 28.6875 L 27 4.96875 C 27.007813 4.425781 26.796875 3.90625 26.414063 3.523438 C 26.03125 3.140625 25.511719 2.929688 24.96875 2.9375 C 24.90625 2.933594 24.84375 2.933594 24.78125 2.9375 Z M 2 36 L 2 41.6875 C 2 43.164063 2.449219 44.59375 3.5 45.59375 C 4.550781 46.59375 5.996094 47 7.4375 47 L 42.59375 47 C 44.054688 47 45.5 46.585938 46.53125 45.5625 C 47.5625 44.539063 48 43.058594 48 41.59375 L 48 36 L 44 36 L 44 41.59375 C 44 42.328125 43.84375 42.597656 43.71875 42.71875 C 43.59375 42.839844 43.332031 43 42.59375 43 L 7.4375 43 C 6.679688 43 6.402344 42.832031 6.28125 42.71875 C 6.160156 42.605469 6 42.414063 6 41.6875 L 6 36 Z "/>
      </g>
    </svg>
);

//UserCard Icons
export const locationIcon = (
    <svg className={classesUserCard.Icon}
         viewBox="0 0 12 16"
         width="12"
         height="16"
         aria-hidden="true">
      <path fillRule="evenodd"
            d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>
    </svg>
);

export const emailIcon = (
    <svg className={classesUserCard.Icon}
         viewBox="0 0 14 16"
         width="14"
         height="16"
         aria-hidden="true">
      <path fillRule="evenodd"
            d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"/>
    </svg>
);

export const blogIcon = (
    <svg className={classesUserCard.Icon}
         viewBox="0 0 16 16"
         width="16"
         height="16"
         aria-hidden="true">
      <path fillRule="evenodd"
            d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/>
    </svg>
);

export const companyIcon = (
    <svg className={classesUserCard.Icon}
         viewBox="0 0 16 16"
         width="16"
         height="16"
         aria-hidden="true">
      <path fillRule="evenodd"
            d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"/>
    </svg>
);