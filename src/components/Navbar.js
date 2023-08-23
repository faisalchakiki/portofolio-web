import Image from "next/image";
import {useState} from 'react'
const Footer = () => {
  const [active, setActive] = useState(false)
  return (
    <div id="top" className="w-full z-50 bg-slate-500 bg-opacity-80 sm:bg-transparent sm:justify-center fixed top-0 right-0 left-0 sm:relative">
        <div>
          <div className="container py-3 px-3 mx-auto flex items-center justify-between">
            <Image
              src={require("../../public/logo.svg")}
              className="w-8 h-8"
              alt=""
              object-fit="contain"
              priority
            />
            <p className="block sm:hidden ml-2 pl-2 mr-auto border-l hover:text-neutral-300 tracking-wider text-lg">Faisal Chakiki</p>
            <nav className="hidden sm:flex sm:mr-auto sm:ml-4 sm:py-1 sm:pl-4 sm:border-l sm:border-gray-400 flex-wrap items-center text-base justify-center">
              <a href="#page2" className="mr-5 hover:text-neutral-300 tracking-wider text-lg">Project</a>
              <a href="#page3" className="mr-5 hover:text-neutral-300 tracking-wider text-lg">Skills & Educations</a>
              <a href="#page4" className="mr-5 hover:text-neutral-300 tracking-wider text-lg">Contact</a>
            </nav>
            <span className="hidden sm:flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href="https://www.facebook.com" target="_blank" className="text-gray-500">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/chakiki_08/" target="_blank" className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/faisal-chakiki/" target="_blank" className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
              <a href="https://github.com/faisalchakiki" target="_blank" className="ml-3 text-gray-500">
                <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                  <path d="M24.0005 1C18.303 1.00296 12.7923 3.02092 8.45374 6.69305C4.11521 10.3652 1.23181 15.452 0.319089 21.044C-0.593628 26.636 0.523853 32.3684 3.47174 37.2164C6.41963 42.0643 11.0057 45.7115 16.4099 47.5059C17.6021 47.7272 18.0512 46.9883 18.0512 46.36C18.0512 45.7317 18.0273 43.91 18.0194 41.9184C11.3428 43.3608 9.93197 39.101 9.93197 39.101C8.84305 36.3349 7.26927 35.6078 7.26927 35.6078C5.09143 34.1299 7.43223 34.1576 7.43223 34.1576C9.84455 34.3275 11.1123 36.6194 11.1123 36.6194C13.2504 40.2667 16.7278 39.2116 18.0949 38.5952C18.3095 37.0501 18.9335 35.999 19.621 35.4023C14.2877 34.8017 8.68408 32.7548 8.68408 23.6108C8.65102 21.2394 9.53605 18.9461 11.156 17.2054C10.9096 16.6047 10.087 14.1785 11.3905 10.8829C11.3905 10.8829 13.4054 10.2427 17.9916 13.3289C21.9253 12.2592 26.0757 12.2592 30.0095 13.3289C34.5917 10.2427 36.6026 10.8829 36.6026 10.8829C37.9101 14.1706 37.0875 16.5968 36.8411 17.2054C38.4662 18.9464 39.353 21.2437 39.317 23.6187C39.317 32.7824 33.7015 34.8017 28.3602 35.3905C29.2186 36.1334 29.9856 37.5836 29.9856 39.8122C29.9856 43.0051 29.9578 45.5736 29.9578 46.36C29.9578 46.9962 30.391 47.7391 31.6071 47.5059C37.0119 45.7113 41.5984 42.0634 44.5462 37.2147C47.4941 32.3659 48.611 26.6326 47.6972 21.0401C46.7835 15.4476 43.8986 10.3607 39.5587 6.68921C35.2187 3.01771 29.7067 1.00108 24.0085 1H24.0005Z" fill="white"/>
                  <path d="M16.0557 39.9505C16.0557 40.1442 15.8331 40.3101 15.547 40.3141C15.2608 40.318 15.0264 40.16 15.0264 39.9663C15.0264 39.7727 15.2489 39.6067 15.535 39.6028C15.8212 39.5988 16.0557 39.753 16.0557 39.9505Z" fill="white"/>
                  <path d="M17.8838 39.6463C17.9196 39.8399 17.7208 40.0414 17.4347 40.0888C17.1486 40.1363 16.8982 40.0217 16.8624 39.832C16.8267 39.6423 17.0333 39.4368 17.3115 39.3855C17.5897 39.3341 17.848 39.4526 17.8838 39.6463Z" fill="white"/>
                  <path d="M14.0923 39.8162C14.0327 40.0019 13.7625 40.0849 13.4922 40.0058C13.222 39.9268 13.0432 39.7055 13.0948 39.5158C13.1465 39.3262 13.4207 39.2392 13.6949 39.3262C13.9691 39.4131 14.144 39.6225 14.0923 39.8162Z" fill="white"/>
                  <path d="M12.2921 39.0417C12.161 39.1879 11.8947 39.1484 11.6761 38.9508C11.4575 38.7532 11.4059 38.4845 11.537 38.3423C11.6682 38.2 11.9344 38.2395 12.161 38.4331C12.3875 38.6268 12.4312 38.8994 12.2921 39.0417Z" fill="white"/>
                  <path d="M11.0085 37.7139C10.8614 37.8167 10.6111 37.7139 10.472 37.5085C10.4335 37.4716 10.4029 37.4274 10.382 37.3785C10.3611 37.3296 10.3503 37.2771 10.3503 37.2239C10.3503 37.1708 10.3611 37.1183 10.382 37.0694C10.4029 37.0205 10.4335 36.9763 10.472 36.9394C10.619 36.8406 10.8694 36.9394 11.0085 37.141C11.1476 37.3425 11.1516 37.6112 11.0085 37.7139Z" fill="white"/>
                  <path d="M10.0626 36.3428C9.98028 36.384 9.88612 36.3955 9.79622 36.3753C9.70632 36.3551 9.62629 36.3045 9.56979 36.2321C9.41479 36.0662 9.38298 35.837 9.50221 35.7342C9.62143 35.6315 9.83606 35.6789 9.99105 35.8449C10.146 36.0108 10.1818 36.24 10.0626 36.3428Z" fill="white"/>
                  <path d="M9.08887 35.264C9.03721 35.3826 8.84645 35.4181 8.69146 35.3351C8.53646 35.2522 8.42122 35.098 8.47686 34.9755C8.5325 34.853 8.71928 34.8214 8.87428 34.9044C9.02927 34.9874 9.14848 35.1455 9.08887 35.264Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_910_44">
                  <rect width="48" height="48" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </a>
            </span>
            <div onClick={()=> setActive(!active)} className="w-6 h-6 block sm:hidden cursor-pointer">
              <Image
              src={require("../../public/assets/logo/menu.svg")}
                className="w-full h-auto"
                alt=""
                object-fit="cover"
                priority
              />
            </div>
          </div>
        </div>
    </div> 
  )
}

export default Footer;