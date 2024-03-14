import React from 'react'
import logo from "../images/logo.svg"

export default function Footer() {
  return (
    <>
      <div class="bg-[#23272a]">
        <div class="container text-[#5865f2] max-w-[1200px] mx-auto pt-24 flex flex-col gap-10 pb-10">
          <div class="flex xl:gap-[100px] gap-[40px] flex-col md:flex-row px-5">
            <div class="flex flex-col gap-[24px] w-[100%] md:w-[50%] xl:w-[20%]">
              <h1 class="font-[800] font-['GintoNord'] text-[32px] leading-[30.4px]">
                IMAGINE A
                <br />
                PLACE
              </h1>
              <div class="text-white text-[23px] flex gap-7">
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>

            <div class="md:w-[75%] flex justify-around flex-wrap">
              <div class="w-[50%] xl:w-fit">
                <h2 class="text-[16px] font-['ggSans'] xl:py-[10px] py-[15px]">
                  Product
                </h2>
                <ul class="text-white flex flex-col gap-[10px] leading-[24px] font-[400] font-['ggSans']">
                  <li class="hover:underline"><a href="#">Download</a></li>
                  <li class="hover:underline"><a href="#">Nitro</a></li>
                  <li class="hover:underline"><a href="#">Status</a></li>
                </ul>
              </div>

              <div class="w-[50%] xl:w-fit">
                <h2 class="text-[16px] font-['ggSans'] xl:py-[10px] py-[15px]">
                  Company
                </h2>
                <ul class="text-white flex flex-col gap-[10px] leading-[24px] font-[400] font-['ggSans']">
                  <li class="hover:underline"><a href="#">About</a></li>
                  <li class="hover:underline"><a href="#">Jobs</a></li>
                  <li class="hover:underline"><a href="#">Branding</a></li>
                  <li class="hover:underline"><a href="#">Newsroom</a></li>
                  <li class="hover:underline text-[#1f1f1f00] select-none">
                    <a href="#">.</a>
                  </li>
                </ul>
              </div>

              <div class="w-[50%] xl:w-fit">
                <h2 class="text-[16px] font-['ggSans'] xl:py-[10px] py-[15px]">
                  Resources
                </h2>
                <ul class="text-white flex flex-col gap-[10px] leading-[24px] font-[400] font-['ggSans']">
                  <li class="hover:underline"><a href="#">Colleges</a></li>
                  <li class="hover:underline"><a href="#">Support</a></li>
                  <li class="hover:underline"><a href="#">Safety</a></li>
                  <li class="hover:underline"><a href="#">Blog</a></li>
                  <li class="hover:underline"><a href="#">Feedback</a></li>
                  <li class="hover:underline"><a href="#">Developers</a></li>
                  <li class="hover:underline"><a href="#">StreamKit</a></li>
                  <li class="hover:underline"><a href="#">Creators</a></li>
                </ul>
              </div>

              <div class="w-[50%] xl:w-fit">
                <h2 class="text-[16px] font-['ggSans'] xl:py-[10px] py-[15px]">
                  Policies
                </h2>
                <ul class="text-white flex flex-col gap-[10px] leading-[24px] font-[400] font-['ggSans']">
                  <li class="hover:underline"><a href="#">Terms</a></li>
                  <li class="hover:underline"><a href="#">Privacy</a></li>
                  <li class="hover:underline"><a href="#">Cookie Settings</a></li>
                  <li class="hover:underline"><a href="#">Guidelines</a></li>
                  <li class="hover:underline"><a href="#">Acknowledgements</a></li>
                  <li class="hover:underline"><a href="#">Licenses</a></li>
                  <li class="hover:underline"><a href="#">Moderation</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex border-t-2 border-[#5865f2] items-center justify-between pt-7 mx-5">
            <div class="text-white">
              <img src={logo} alt="logo" />
            </div>

            <div class="hidden xl:block">
              <button
                class="text-white bg-[#5865f2] px-[16px] py-[7px] rounded-full leading-[24px] text-[14px] font-[500] hover:bg-[#5865f2]">
                Sign up
              </button>
            </div>

            <div class="block xl:hidden">
              <button
                class="text-white bg-[#5865f2] px-[16px] py-[7px] rounded-full leading-[24px] text-[14px] font-[500] hover:bg-[#5865f2]">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
