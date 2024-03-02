import React from 'react'
import section1 from "../images/section1Image.svg"
import section2 from "../images/section2Image.svg"
import section3 from "../images/section3Image.svg"
import section4 from "../images/section4Image.svg"
import section5 from "../images/section5Image.svg"

export default function Sections() {
  return (
    <>
      <div class="flex container max-w-[1200px] mx-auto 
    items-center py-14 md:py-36 flex-col md:flex-row px-7 md:px-0">

        <div class="md:w-[50%]">
          <img src={section1} alt="" />
        </div>

        <div class="md:w-[50%]">
          <div class="w-[95%] xl:w-[60%] mx-auto">
            <h1
              class="font-[700] text-[20px] sm:text-[28px]
               md:text-[48px] font-['ggSans'] leading-[24px]
                md:leading-[57.6px] mt-5 md:mt-0">
              Create an invite-only place where you belong
            </h1>
            <p class="font-['ggSans'] text-[16px] sm:text-[20px] font-[400] mt-[24px]">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-[#f6f6f6]">
        <div class="flex container max-w-[1200px] mx-auto items-center
     py-14 md:py-36 flex-col md:flex-row px-7 md:px-0">
          <div class="block md:hidden md:w-[50%]">
            <img src="./images/section2Image.svg" alt="" />
          </div>

          <div class="md:w-[50%]">
            <div class="w-[95%] xl:w-[60%] mx-auto">
              <h1
                class="font-[700] text-[20px] sm:text-[28px] md:text-[48px] 
            font-['ggSans'] leading-[24px] md:leading-[57.6px] mt-5 md:mt-0">
                Where hanging out is easy
              </h1>
              <p class="font-['ggSans'] text-[16px] sm:text-[20px] font-[400] mt-[24px]">
                Grab a seat in a voice channel when you&apos;re free. Friends in your
                server can see you&apos;re around and instantly pop in to talk without
                having to call.
              </p>
            </div>
          </div>
          <div class="md:w-[50%] md:block hidden">
            <img src={section2} alt="" />
          </div>
        </div>
      </div>

      <div class="flex container max-w-[1200px] mx-auto items-center py-14 md:py-36 flex-col md:flex-row px-7 md:px-0">
        <div class="md:w-[50%]">
          <img src={section3} alt="" />
        </div>
        <div class="md:w-[50%]">
          <div class="w-[95%] xl:w-[60%] mx-auto">
            <h1
              class="font-[700] text-[20px] sm:text-[28px] md:text-[48px] font-['ggSans'] leading-[24px] md:leading-[57.6px] mt-5 md:mt-0">
              From few to a fandom
            </h1>
            <p class="font-['ggSans'] text-[16px] sm:text-[20px] font-[400] mt-[24px]">
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-[#f6f6f6]">
        <div class="flex flex-col container max-w-[1200px] mx-auto items-center py-14 md:py-32 px-5">
          <h1
            class="font-[800] font-['GintoNord'] text-[20px] 
        leading-[19px] md:leading-[32px] text-left md:text-center md:text-[40px]">
            RELIABLE TECH FOR STAYING CLOSE
          </h1>
          <p class="md:text-center md:w-[83%] md:text-[20px] 
      md:leading-[32.5px] text-[16px] leading-[26px] mt-[24px]">
            Low-latency voice and video feels like you&apos;re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
          <img src={section4} alt="" class="w-[100%]" />

          <div class="text-[32px] font-['ggSans'] font-[700] relative 
      w-[100%] flex flex-col items-center gap-[40px]">
            <img src={section5} class="md:block hidden absolute top-0" alt="" />
            <div class="md:text-center pt-[30px] leading-[38px]">
              Ready to start your journey?
            </div>

            <p
              class="bg-[#404EED] hidden md:block w-fit text-white text-[20px] 
          font-[500] font-['ggSans'] px-[32px] py-[16px] rounded-full">
              <i class="fa-solid fa-download mr-2"></i>
              Download for Windows
            </p>
          </div>
          <div
            class="bg-[#404EED] md:hidden flex justify-center items-center mt-4
         text-white text-[20px] font-[500] font-['ggSans'] px-[32px] py-[16px] rounded-3xl">
            <i class="fa-solid fa-download mr-2"></i>
            <p>Download from Google Play</p>
          </div>
        </div>
      </div>
    </>
  )
}
